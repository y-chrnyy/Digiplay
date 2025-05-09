'use client'
import React from 'react'
import Image from 'next/image'

const NailsHeart = () => {
  return (
    <div className="w-full min-h-screen font-sans bg-[#F1E3D3] text-[#393E41]">
      {/* Первая секция - Главный баннер */}
      <section className="relative overflow-hidden w-full flex flex-col bg-[#F1E3D3] p-4 lg:p-10">

        <h1 className="text-[#CE3348] text-[45px] lg:text-[100px] font-medium mb-8">
            инфографика
        </h1>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
                <img src="/nails_hero_phone.png" alt="Прайс NailsHeart" className="w-[300px] h-[400px]" />

                <img src="/nails_hero.png" alt="NailsHeart Instagram" className="w-[600px] h-[600px]" />
        </div>
      </section>
      
      {/* Вторая секция - Общая информация */}
      <section className="py-[80px] px-5 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#CE3348] text-[40px] md:text-[60px] mb-16">
            Общая информация
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-center">
            <div className="w-full lg:w-2/3">
              <div className="mb-12">
                <h3 className="text-[32px] md:text-[40px] mb-6">
                  Nails<span className="text-[#CE3348]">heart</span> <span className="text-[#393E41]">— студия</span> 
                </h3>
                <h3 className="text-[32px] md:text-[40px] mb-12">
                  ногтевого сервиса.
                </h3>
              </div>
              
              <div className="mb-12">
                <h3 className="text-[32px] md:text-[40px] text-[#CE3348] mb-6">
                  Основной задачей
                </h3>
                <h3 className="text-[32px] md:text-[40px] mb-6">
                  была разработка
                </h3>
                <h3 className="text-[32px] md:text-[40px] mb-6">
                  фирменного стиля
                </h3>
                <h3 className="text-[32px] md:text-[40px] mb-6">
                  и оформления
                </h3>
                <h3 className="text-[32px] md:text-[40px] mb-6">
                  социальных сетей
                </h3>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative w-[300px] h-[500px]">
                <Image 
                  src="/nails_phone (1).png" 
                  alt="NailsHeart прайс в телефоне" 
                  className="w-full h-full object-contain"
                  width={300}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Третья секция - Логотип */}
      <section className="py-[80px] px-5 md:px-10 lg:px-20 bg-[#F1E3D3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#CE3348] text-[40px] md:text-[60px] mb-16">
            Логотип
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center mx-auto">
                <Image 
                  src="/nails_third.png" 
                  alt="NailsHeart логотип на вывеске" 
                  className="w-full h-full object-contain"
                  width={400}
                  height={400}
                />
              </div>
              <p className="text-center mt-8 text-lg">Идея логотипа — ногти.<br/>Форма сердца символизирует<br/>о любви и заботе по отношению<br/>к каждому клиенту</p>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="mb-12">
                <h3 className="text-[32px] mb-4">Основная версия логотипа — горизонтальный</h3>
              </div>
              
              <div className="border-2 border-dashed border-[#CE3348] p-8 mb-12 relative">
                <div className="absolute top-0 left-0 w-4 h-4 bg-[#CE3348] rounded-full transform translate-x(-50%) translate-y(-50%)"></div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#CE3348] rounded-full transform translate-x(50%) translate-y(-50%)"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#CE3348] rounded-full transform translate-x(-50%) translate-y(50%)"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#CE3348] rounded-full transform translate-x(50%) translate-y(50%)"></div>
                
                <div className="flex items-center">
                  <Image 
                    src="/nailsheart_logo.png" 
                    alt="NailsHeart логотип" 
                    width={60}
                    height={60}
                  />
                  <div className="ml-4">
                    <span className="text-[#393E41] text-2xl">nails</span>
                    <span className="text-[#CE3348] text-2xl">heart</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-[24px] mb-8">Другие версии логотипа</h3>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Image 
                    src="/nailsheart_logo.png" 
                    alt="NailsHeart вертикальный логотип" 
                    width={80}
                    height={80}
                    className="brightness-50 contrast-150 saturate-200"
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <Image 
                    src="/nailsheart_logo.png" 
                    alt="NailsHeart знаковый логотип" 
                    width={80}
                    height={80}
                    className="brightness-200 contrast-200"
                  />
                </div>
                
                <div className="flex flex-col items-center">
                  <Image 
                    src="/nailsheart_logo.png" 
                    alt="NailsHeart текстовый логотип" 
                    width={80}
                    height={80}
                    className="grayscale contrast-150 brightness-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Четвертая секция - Цвет и типографика */}
      <section className="py-[80px] px-5 md:px-10 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#CE3348] text-[40px] md:text-[60px] mb-16">
            Цвет & Типографика
          </h2>
          
          <div className="mb-16">
            <h3 className="text-[42px] mb-3">Comforta</h3>
            <div className="flex gap-6">
              <p className="text-xl">Regular</p>
              <p className="text-xl font-semibold">SemiBold</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-12 lg:gap-0 lg:relative lg:h-[500px] lg:max-w-[600px] lg:mx-auto">
            <div className="flex flex-col items-center lg:absolute lg:left-0 lg:top-0">
              <div className="w-[180px] h-[180px] rounded-full bg-[#CE3348] mb-5"></div>
              <p className="text-center text-lg font-medium">#CE3348</p>
              <p className="text-center text-lg">rusty red</p>
            </div>
            
            <div className="flex flex-col items-center lg:absolute lg:right-0 lg:top-0">
              <div className="w-[180px] h-[180px] rounded-full bg-[#393E41] mb-5"></div>
              <p className="text-center text-lg font-medium">#393E41</p>
              <p className="text-center text-lg">onyx</p>
            </div>
            
            <div className="flex flex-col items-center lg:absolute lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2">
              <div className="w-[180px] h-[180px] rounded-full bg-[#F1E3D3] border border-gray-200 mb-5"></div>
              <p className="text-center text-lg font-medium">#F1E3D3</p>
              <p className="text-center text-lg">almond</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export { NailsHeart } 