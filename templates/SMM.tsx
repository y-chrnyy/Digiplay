'use client'
import React from 'react'

const SMM = () => {
  return (
    <div className="w-full min-h-screen font-sans">
      {/* Первая секция - Главный баннер */}
      <section className="bg-[#CA475F] min-h-[80vh] relative overflow-hidden pt-[100px] px-5 md:px-10 lg:px-20 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h1 className="text-white text-[60px] xs:text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-bold mb-10 md:mb-16">
            ШКОЛА SMM
          </h1>
          
          {/* Декоративная волнистая линия */}
          <div className="absolute right-[-20%] top-[30%] w-[80%] h-[30vh] border-t-[16px] border-[#09BC8A] rounded-[100%] z-0"></div>
          
          {/* Стилизованный мегафон (упрощенная версия с помощью CSS) */}
          <div className="absolute left-[-10%] bottom-[10%] w-[300px] h-[300px] opacity-30 hidden md:block">
            <div className="w-[100px] h-[200px] bg-white opacity-70 transform rotate-45 rounded-t-[50px]"></div>
          </div>
        </div>
      </section>
      
      {/* Вторая секция - Описание проекта */}
      <section className="bg-[#FCFCFC] py-[80px] px-5 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#156C7A] text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] mb-8 leading-tight">
              — студенческий образовательный проект, созданный на базе СПбГУТ
              им. проф. М.А. Бонч-Бруевича. Обучение направлено
              на приобритение студентами навыков в области Social Media Marketing.
            </p>
            
            <p className="text-[#156C7A] text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] mb-8 leading-tight">
              Проект предлагает несколько лекции на различные темы, такие
              как брендинг, ведение социальных сетей, копирайтинг и т.д.
            </p>
            
            <p className="text-[#156C7A] text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] mb-8 leading-tight">
              В рамках Школы студенты получают теоритические и практические навыки.
              Для успешного закрепления полученной на лекции информации, ученикам
              даётся домашнее задание, что даёт применить новые знания.
            </p>
            
            <p className="text-[#156C7A] text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-tight">
              Весь проект был создан и курирован Информационным пространоством
              СПбГУТ <span className="text-[#CA475F] font-bold">InGUT</span>
            </p>
          </div>
        </div>
      </section>
      
      {/* Третья секция - Цвета и типографика */}
      <section className="bg-[#156C7A] text-white py-[80px] px-5 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[40px] xs:text-[50px] sm:text-[60px] md:text-[70px] font-bold mb-10 md:mb-14">
            ЦВЕТ И ТИПОГРАФИКА
          </h2>
          
          <div className="mb-12">
            <p className="text-[24px] md:text-[30px] font-bold mb-2">RF DEWI EXPANDED BLACK</p>
            <p className="text-[20px] md:text-[26px]">Montserrat Medium</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#FCFCFC] mb-5"></div>
              <p className="text-center text-[16px] md:text-[18px] font-medium">#FCFCFC</p>
              <p className="text-center text-[16px] md:text-[18px]">Lavender blush</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#09BC8A] mb-5"></div>
              <p className="text-center text-[16px] md:text-[18px] font-medium">#09BC8A</p>
              <p className="text-center text-[16px] md:text-[18px]">Mint</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#CA475F] mb-5"></div>
              <p className="text-center text-[16px] md:text-[18px] font-medium">#CA475F</p>
              <p className="text-center text-[16px] md:text-[18px]">Cerise</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full border-2 border-white mb-5"></div>
              <p className="text-center text-[16px] md:text-[18px] font-medium">#156C7A</p>
              <p className="text-center text-[16px] md:text-[18px]">Caribbean Current</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Четвертая секция - Оформление социальных сетей */}
      <section className="bg-[#FCFCFC] py-[80px] px-5 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[40px] xs:text-[50px] sm:text-[60px] md:text-[70px] text-[#156C7A] font-bold mb-10 md:mb-14 text-center">
            ОФОРМЛЕНИЕ СОЦИАЛЬНЫХ СЕТЕЙ
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-5 h-[220px] md:h-[320px] rounded-t-xl overflow-hidden shadow-lg">
              <div className="bg-[#09BC8A] flex flex-col items-center justify-center">
                <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-[#CA475F] mb-4"></div>
                <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-[#CA475F]"></div>
              </div>
              <div className="col-span-2 bg-[#FCFCFC] flex items-center justify-center">
                <div className="text-[#CA475F] text-[50px] md:text-[90px] font-bold">S</div>
              </div>
              <div className="col-span-2 bg-[#09BC8A] flex items-center justify-center">
                <div className="text-[#FCFCFC] text-[50px] md:text-[90px] font-bold">MM</div>
              </div>
            </div>
            <div className="p-5 bg-white flex items-center border rounded-b-xl shadow-lg">
              <div className="w-[50px] h-[50px] rounded-full bg-[#156C7A] mr-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
                  <path d="M3 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
                  <path d="M21 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#156C7A] text-lg">InGUT</p>
                <p className="text-gray-500">Информационное пространство СПбГУТ</p>
              </div>
              <button className="ml-auto bg-gray-200 text-gray-600 text-sm py-2 px-4 rounded-full hover:bg-gray-300 transition-colors">Вы подписаны</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Пятая секция - Задачи */}
      <section className="bg-[#FCFCFC] py-[80px] px-5 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[60px] xs:text-[70px] md:text-[90px] font-bold text-[#09BC8A] mb-12">
            ЗАДАЧИ
          </h2>
          
          <p className="text-[#156C7A] text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-tight mb-16">
            На основе дизайна группы Информационного пространства разработать
            фирменный стиль мероприятия, в т.ч. оформление социальных сетей,
            печатаная продукция, презентации для лекций
          </p>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="h-[250px] md:h-[350px] bg-gradient-to-r from-[#000] to-[#CA475F] flex items-center justify-center p-8">
              <div className="text-white text-center">
                <div className="text-[50px] md:text-[70px] font-bold mb-4">InGUT</div>
                <p className="text-white text-[18px] md:text-[24px]">Информационное пространство СПбГУТ</p>
              </div>
            </div>
            <div className="p-5 bg-white flex items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-[#CA475F] mr-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
                  <path d="M3 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
                  <path d="M21 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#156C7A] text-lg">InGUT</p>
                <p className="text-gray-500">Информационное пространство СПбГУТ</p>
              </div>
              <button className="ml-auto bg-gray-200 text-gray-600 text-sm py-2 px-4 rounded-full hover:bg-gray-300 transition-colors">Вы подписаны</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export { SMM } 