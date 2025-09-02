import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const vehicles = [
    {
      title: "ГАЗЕЛЬ 3 М (ДО 1.5 Т)",
      image: "https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png",
      description: "Компактный грузовик для небольших перевозок"
    },
    {
      title: "ГАЗЕЛЬ 4 М (ДО 1.5 Т)", 
      image: "https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png",
      description: "Средний грузовик для городских перевозок"
    },
    {
      title: "ГАЗЕЛЬ 5 М (ДО 1.5 Т)",
      image: "https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png", 
      description: "Большой грузовик для объёмных грузов"
    },
    {
      title: "ГАЗЕЛЬ ФЕРМЕР",
      image: "https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png",
      description: "Специализированный транспорт"
    },
    {
      title: "МАНИПУЛЯТОР",
      image: "https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png",
      description: "Для погрузо-разгрузочных работ"
    },
    {
      title: "ГАЗЕЛЬ ОТКРЫТАЯ",
      image: "https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png",
      description: "Для перевозки габаритных грузов"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">НАШИ УСЛУГИ</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Полный спектр услуг по грузоперевозкам в Красноярске и области. 
            Собственный автопарк и профессиональные водители.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              НАШ АВТОПАРК
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Современные и надежные автомобили для перевозки грузов любого типа и объема
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent overflow-hidden">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{vehicle.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{vehicle.description}</p>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                    ЗАКАЗАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-accent group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Услуги грузчиков</h3>
                <p className="text-gray-600 mb-6">Профессиональная погрузка и разгрузка любых грузов</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-accent group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Home" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Квартирные переезды</h3>
                <p className="text-gray-600 mb-6">Полный комплекс услуг по переезду квартир</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-accent group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Building" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Офисные переезды</h3>
                <p className="text-gray-600 mb-6">Быстрый и аккуратный переезд офисов</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-accent group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Trash2" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Вывоз мусора</h3>
                <p className="text-gray-600 mb-6">Утилизация строительного и бытового мусора</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-accent group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Package" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Экспедирование</h3>
                <p className="text-gray-600 mb-6">Сопровождение грузов и документооборот</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-accent group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Crane" size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Услуги манипулятора</h3>
                <p className="text-gray-600 mb-6">Погрузочно-разгрузочные работы краном</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ГОТОВЫ ЗАКАЗАТЬ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом, и мы подберём оптимальное решение для вашей задачи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;