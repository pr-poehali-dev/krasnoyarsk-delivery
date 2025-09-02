import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  ГРУЗОВОЕ ТАКСИ
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  КВАРТИРНО - ОФИСНЫЕ, ДАЧНЫЕ ПЕРЕЕЗДЫ<br/>
                  ВЫВОЗ СТРОЙ МУСОРА
                </h2>
                <p className="text-xl text-white/90">
                  СРОЧНЫЙ ВЫЕЗД ЗА 30 МИНУТ С МОМЕНТА ЗАЯВКИ
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold">
                  <Icon name="Truck" size={24} className="mr-2" />
                  ЗАКАЗАТЬ АВТО
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://cdn.poehali.dev/files/f238769a-397a-4166-8550-5a2f34c16fa6.png" 
                alt="Грузовые автомобили" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              КОМПЛЕКСЫ УСЛУГ
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Icon name="Package" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">УСЛУГИ ГРУЗЧИКОВ</h3>
                <p className="text-gray-600 mb-4 text-sm">Профессиональная погрузка и разгрузка товаров любой сложности</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  ЗАКАЗАТЬ УСЛУГУ
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Icon name="Truck" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">ГРУЗОПЕРЕВОЗКИ</h3>
                <p className="text-gray-600 mb-4 text-sm">Быстрая и надёжная доставка грузов по городу и области</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  ЗАКАЗАТЬ УСЛУГУ
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Icon name="Trash2" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">ВЫВОЗ МУСОРА</h3>
                <p className="text-gray-600 mb-4 text-sm">Утилизация строительного и бытового мусора</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  ЗАКАЗАТЬ УСЛУГУ
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Icon name="Home" size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">ПЕРЕЕЗДЫ</h3>
                <p className="text-gray-600 mb-4 text-sm">Квартирные, офисные и дачные переезды под ключ</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  ЗАКАЗАТЬ УСЛУГУ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            ОТВЕТЬТЕ НА 7 ВОПРОСОВ И МЫ БЫСТРО РАССЧИТАЕМ ДЛЯ ВАС СТОИМОСТЬ УСЛУГ.
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold">
            УЗНАТЬ СТОИМОСТЬ
          </Button>
          <p className="text-gray-600 mt-4">Опрос займёт не более 2 минут.</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">НАШИ ПРЕИМУЩЕСТВА</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Clock" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Скорость и пунктуальность</h3>
              <p className="text-white/90">Быстрая подача машины в течение 30 минут после вызова в любом районе города. Мы приезжаем вовремя и на протяжении всего заказа поддерживаем связь с клиентом.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Shield" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Целостность груза</h3>
              <p className="text-white/90">У нас большой выбор упаковки и приспособлений для транспортировки, мы поможем со сборкой и разборкой мебели, ваши вещи будут бережно упакованы и транспортированы.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Car" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Большой парк своих автомобилей</h3>
              <p className="text-white/90">Мы располагаем большим собственным автопарком для грузоперевозок, у нас всегда найдётся свободный автомобиль.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Users" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Собственные грузчики</h3>
              <p className="text-white/90">Наши грузчики – ответственные, аккуратные и вежливые - профессионалы своего дела. Поэтому с упаковкой вещей, бережно и правильно погрузят ваши вещи.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Icon name="DollarSign" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Низкие цены и удобная оплата</h3>
              <p className="text-white/90">Наши цены – честные и прозрачные. Мы снизили стоимость перевозок за счёт собственного автопарка. Оплата наличными, картой или расчётный счёт.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Clock" size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Работаем круглосуточно</h3>
              <p className="text-white/90">Вы сможете начать газель с грузчиками и оформить заказ в комфортное вам время, даже в праздничные дни.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;