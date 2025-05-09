"use client"

import { P } from "@/components/P";
import { HeadingYanone } from "@/components/HeadingYanone/HeadingYanone";
import { FancyAnchor } from "@/components/FancyAnchor/FancyAnchor";
import { RevealAnimation } from "@/components/RevealAnimation";
import { TextAnimationWrapper } from "@/components/TextAnimationWrapper/TextAnimationWrapper";
import { useState, useRef } from "react";
import supabase from "@/database-client";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const emailValid = validateEmail(email);
  const showError = touched && email.length > 0 && !emailValid;
  const canSend = emailValid && message.trim().length > 0 && !sending;

  const handleSend = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!canSend) return;
    setSending(true);
    await supabase.from('requests').insert({ email, text: message });
    timeoutRef.current = setTimeout(() => {
      setSending(false);
    }, 3000);
  };

  return (
    <section className="w-full flex flex-col items-center py-16 px-4 sm:px-8 md:px-16 bg-black">
      <div className="max-w-2xl w-full flex flex-col gap-8 items-center">
        <TextAnimationWrapper>
          <HeadingYanone h="2" className="text-center">Связаться с нами</HeadingYanone>
        </TextAnimationWrapper>
        <form className="w-full flex flex-col gap-6">
          <RevealAnimation duration={0.7}>
            <label className="w-full flex flex-col gap-2">
              <P w="400" text="md" className="text-black text-lg md:text-xl">Email</P>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                className="w-full rounded-[20px] border border-pink bg-transparent px-6 py-4 text-lg md:text-xl font-yanone text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Ваш email"
                required
              />
              {showError && (
                <span className="text-pink text-sm mt-1">Введите корректный email</span>
              )}
            </label>
          </RevealAnimation>
          <RevealAnimation duration={0.7} delay={0.1}>
            <label className="w-full flex flex-col gap-2">
              <P w="400" text="md" className="text-black text-lg md:text-xl">Сообщение</P>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full min-h-[120px] rounded-[20px] border border-pink bg-transparent px-6 py-4 text-lg md:text-xl font-yanone text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                placeholder="Ваше сообщение"
                required
              />
            </label>
          </RevealAnimation>
          <RevealAnimation duration={0.7} delay={0.2}>
            <div className="flex justify-center mt-4">
              <FancyAnchor
                appearance="pink"
                href="#"
                className={`min-w-[200px] h-[60px] text-[28px] md:text-[32px] px-8 ${!canSend ? 'pointer-events-none opacity-50' : ''}`}
                aria-disabled={!canSend}
                onClick={handleSend}
              >
                Отправить
              </FancyAnchor>
            </div>
          </RevealAnimation>
        </form>
      </div>
    </section>
  );
};

export { ContactForm }; 