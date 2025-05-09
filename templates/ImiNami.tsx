'use client'
import React from 'react'
import Image from 'next/image'

const ImiNami = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-black text-white">
      {/* Первая секция - Главный баннер */}
      <section className="min-h-[90vh] relative overflow-hidden pt-[100px] px-5 md:px-10 lg:px-20 flex flex-col justify-center">
        {/* Фоновое изображение с затемнением и фиолетовым оттенком */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/nami-hero.jpg" 
            alt="Hero background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 bg-[#653F88] opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-center">
              <span className="inline-block text-[#77BFEE] text-[60px] xs:text-[70px] sm:text-[90px] md:text-[120px] font-bold">Ими</span>
              <span className="inline-block text-[#B53FF2] text-[60px] xs:text-[70px] sm:text-[90px] md:text-[120px] font-bold">Нами</span>
            </h1>
            <p className="text-[#4896A9] text-[30px] xs:text-[36px] sm:text-[46px] md:text-[56px] mt-4">
              Вокальный коллектив
            </p>
            <p className="absolute top-10 right-10 text-[#4896A9] text-2xl md:text-3xl">
              2023
            </p>
          </div>
          
          {/* Декоративная бабочка */}
          <div className="absolute left-[5%] bottom-[30%] opacity-40 hidden md:block">
            <svg width="300" height="240" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150 20C95 45 55 120 85 170C115 220 185 220 215 170C245 120 205 45 150 20Z" fill="#77BFEE" fillOpacity="0.6"/>
              <path d="M150 60C125 75 105 115 120 140C135 165 165 165 180 140C195 115 175 75 150 60Z" fill="#000" fillOpacity="0.7"/>
            </svg>
          </div>
          
          <div className="absolute right-[10%] bottom-[20%] opacity-40 hidden md:block">
            <svg width="300" height="240" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150 20C95 45 55 120 85 170C115 220 185 220 215 170C245 120 205 45 150 20Z" fill="#B53FF2" fillOpacity="0.6"/>
              <path d="M150 60C125 75 105 115 120 140C135 165 165 165 180 140C195 115 175 75 150 60Z" fill="#000" fillOpacity="0.7"/>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Вторая секция - Информация */}
      <section className="py-[80px] px-5 md:px-10 lg:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[#4896A9] text-[40px] md:text-[50px] mb-10">
                Общая информация
              </h2>
              
              <div className="text-[#4896A9] text-[20px] md:text-[24px] leading-relaxed">
                <p className="mb-6">
                  ИмиНами — вокальный коллектив, сформированный<br />
                  на базе СПбГУТ им. проф. М.А.<br />
                  Бонч-Бруевича
                </p>
              </div>
              
              <h2 className="text-[#4896A9] text-[40px] md:text-[50px] mt-16 mb-10">
                Задача проекта
              </h2>
              
              <div className="text-[#4896A9] text-[20px] md:text-[24px] leading-relaxed">
                <p className="mb-6">
                  Разработка фирменного стиля и<br />
                  печатной продукции,<br />
                  оформление социальных сетей.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg">
                <Image 
                  src="/nami_butterfly.jpeg"
                  alt="Бабочка ИмиНами"
                  objectFit="contain"
                  className="w-full h-full object-contain"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      
      {/* Четвертая секция - Цвет и типографика */}
      <section className="py-[80px] px-5 md:px-10 lg:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#4896A9] text-[40px] md:text-[50px] mb-16 text-right">
            Цвет и типографика
          </h2>
          
          <div className="mb-12">
            <div className="text-[#B53FF2] text-[40px] md:text-[60px] font-bold mb-4 font-[Pilowlava], cursive">
              PILOWLAVA
            </div>
            <div className="text-[#4896A9] text-[30px] md:text-[40px] font-[Montserrat]">
              Montserrat Meduim
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Верхний ряд - 3 цвета */}
            <div className="flex justify-center gap-12">
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#4896A9] mb-5"></div>
                <p className="text-center text-[16px] md:text-[18px] font-medium text-[#4896A9]">#4896A9</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full border-2 border-white mb-5"></div>
                <p className="text-center text-[16px] md:text-[18px] font-medium text-white">#131110</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#77BFEE] mb-5"></div>
                <p className="text-center text-[16px] md:text-[18px] font-medium text-[#77BFEE]">#77BFEE</p>
              </div>
            </div>
            
            {/* Нижний ряд - 2 цвета по центру */}
            <div className="flex justify-center gap-12">
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#653F88] mb-5"></div>
                <p className="text-center text-[16px] md:text-[18px] font-medium text-[#653F88]">#653F88</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#B53FF2] mb-5"></div>
                <p className="text-center text-[16px] md:text-[18px] font-medium text-[#B53FF2]">#B53FF2</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Пятая секция - Оформление группы VK */}
      <section className="py-[80px] px-5 md:px-10 lg:px-20 bg-[#77BFEE]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-black text-[40px] md:text-[50px] mb-16 text-right">
            Оформление группы VK
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="h-[250px] bg-black flex items-center justify-center relative">
                {/* Картинка крыла бабочки слева */}
                <div className="absolute left-0 top-0 w-[35%] h-full opacity-50">
                  <svg width="100%" height="100%" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 0C100 50 150 200 100 250H0V0Z" fill="#77BFEE" fillOpacity="0.3"/>
                  </svg>
                </div>
                
                {/* Лого по центру */}
                <div className="text-center z-10">
                  <span className="inline-block text-[#77BFEE] text-[40px] md:text-[60px] font-bold">Ими</span>
                  <span className="inline-block text-[#B53FF2] text-[40px] md:text-[60px] font-bold">Нами</span>
                </div>
              </div>
              
              <div className="p-5 bg-white flex items-center">
                <div className="w-[60px] h-[60px] rounded-full bg-black border-2 border-[#653F88] mr-4 flex items-center justify-center overflow-hidden">
                  <svg width="40" height="40" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 5C20 15 5 50 20 60C35 70 45 70 60 60C75 50 60 15 40 5Z" fill="#653F88"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-xl">«ИмиНами»</p>
                  <p className="text-gray-500">Вокальный коллектив</p>
                </div>
                <button className="ml-auto bg-gray-200 text-gray-600 text-sm py-2 px-4 rounded-full">Вы подписаны</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export { ImiNami } 