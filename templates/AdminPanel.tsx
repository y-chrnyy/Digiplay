"use client"

import { useState, useEffect } from "react";
import supabase from "@/database-client";

const AdminPanel = () => {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

  useEffect(() => {
    if (isAuth) fetchRequests();
  }, [isAuth]);

  async function fetchRequests() {
    setLoading(true);
    setError("");
    const { data, error } = await supabase.from("requests").select("*").order("created_at", { ascending: false });
    if (error) setError("Ошибка загрузки заявок");
    setRequests(data || []);
    setLoading(false);
  }

  async function handleDelete(id: number) {
    await supabase.from("requests").delete().eq("id", id);
    fetchRequests();
  }

  async function handleViewed(id: number, viewed: boolean) {
    await supabase.from("requests").update({ viewed: !viewed }).eq("id", id);
    fetchRequests();
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      setIsAuth(true);
      setPassword("");
    } else {
      setPassword("");
      setError("Неверный пароль");
    }
  }

  if (!isAuth) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <form onSubmit={handleLogin} className="flex flex-col gap-4 p-8 rounded-xl bg-zinc-900">
          <h2 className="text-2xl font-bold mb-2">Вход в админку</h2>
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Пароль"
            className="px-4 py-2 rounded bg-zinc-800 border border-pink text-lg"
          />
          {error && <div className="text-pink text-sm">{error}</div>}
          <button type="submit" className="bg-pink text-white px-4 py-2 rounded mt-2">Войти</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Заявки</h1>
      {loading && <div>Загрузка...</div>}
      {error && <div className="text-pink mb-4">{error}</div>}
      <div className="flex flex-col gap-4">
        {requests.map(req => (
          <div key={req.id} className={`p-4 rounded-xl border ${req.viewed ? 'border-green-500' : 'border-pink'} bg-zinc-900 flex flex-col gap-2`}>
            <div className="flex justify-between items-center">
              <span className="font-bold">{req.email}</span>
              <span className="text-xs opacity-60">{new Date(req.created_at).toLocaleString()}</span>
            </div>
            <div>{req.text}</div>
            <div className="flex gap-2 mt-2">
              <button onClick={() => handleViewed(req.id, req.viewed)} className={`px-3 py-1 rounded ${req.viewed ? 'bg-green-700' : 'bg-pink'} text-white`}>
                {req.viewed ? 'Не просмотрено' : 'Просмотрено'}
              </button>
              <button onClick={() => handleDelete(req.id)} className="px-3 py-1 rounded bg-red-700 text-white">Удалить</button>
            </div>
          </div>
        ))}
        {requests.length === 0 && !loading && <div>Нет заявок</div>}
      </div>
    </div>
  );
};

export default AdminPanel; 