import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">НЕМНОГО О НАС</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-accent text-accent-foreground inline-block px-4 py-2 rounded-lg text-4xl font-bold">
                Н
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  аша компания оказывает услуги по перевозке грузов по городу Красноярску и Красноярскому краю, а также мы работаем в других направлениях с 2009 года.
                </p>
                <p className="leading-relaxed">
                  Узнать о предложении больше, обсудить детали сотрудничества или ознакомиться с прайскурантом цен, Вы можете, позвонив по указанному ниже телефону, отправив запрос на электронную почту или зайти на одну из наших страниц в социальных сетях.
                </p>
                <p className="leading-relaxed font-medium text-primary">
                  Наша работа — гарантия Вашего спокойствия и хорошего настроения!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Автомобили от 1,5 до 20 тонн</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Package" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Экспедирование грузов</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Crane" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Услуги манипулятора</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Грузоперевозки</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="CreditCard" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Отсрочки по платежам</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Опытные водители</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Package" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Услуги грузчиков</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-accent/10 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Индивидуальный подход к каждому клиенту</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ПОЧЕМУ ВЫБИРАЮТ НАС
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Award" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Опыт работы с 2009 года</h3>
                <p className="text-gray-600">Более 15 лет успешной работы в сфере грузоперевозок</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Users" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Профессиональная команда</h3>
                <p className="text-gray-600">Квалифицированные водители и грузчики</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Работаем круглосуточно</h3>
                <p className="text-gray-600">24/7 готовы выполнить ваш заказ в любое время</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;