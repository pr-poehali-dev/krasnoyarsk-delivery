import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const projects = [
    {
      title: "Переезд офиса IT-компании",
      description: "Полный переезд офиса на 50 сотрудников с компьютерной техникой и мебелью",
      category: "Офисный переезд",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      stats: { vehicles: 3, movers: 6, time: "1 день" }
    },
    {
      title: "Квартирный переезд с антиквариатом",
      description: "Аккуратная перевозка 4-комнатной квартиры с антикварной мебелью",
      category: "Квартирный переезд",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=300&fit=crop",
      stats: { vehicles: 2, movers: 4, time: "6 часов" }
    },
    {
      title: "Доставка строительных материалов",
      description: "Регулярная доставка материалов на строительную площадку",
      category: "Грузоперевозки",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop",
      stats: { vehicles: 5, movers: 10, time: "2 недели" }
    },
    {
      title: "Переезд ресторана",
      description: "Перевозка кухонного оборудования и мебели ресторана",
      category: "Коммерческий переезд",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      stats: { vehicles: 4, movers: 8, time: "2 дня" }
    },
    {
      title: "Вывоз строительного мусора",
      description: "Очистка строительной площадки от мусора после ремонта",
      category: "Вывоз мусора",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop",
      stats: { vehicles: 3, movers: 6, time: "1 день" }
    },
    {
      title: "Дачный переезд",
      description: "Перевозка мебели и садового инвентаря на дачу",
      category: "Дачный переезд", 
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      stats: { vehicles: 1, movers: 2, time: "4 часа" }
    }
  ];

  const stats = [
    { number: "500+", label: "Выполненных заказов", icon: "CheckCircle" },
    { number: "50+", label: "Постоянных клиентов", icon: "Users" },
    { number: "15", label: "Лет опыта", icon: "Award" },
    { number: "24/7", label: "Работаем круглосуточно", icon: "Clock" }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">НАШЕ ПОРТФОЛИО</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Примеры успешно выполненных проектов. Мы гордимся каждым заказом 
            и всегда стремимся превзойти ожидания клиентов.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                    <Icon name={stat.icon as any} size={28} className="text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ВЫПОЛНЕННЫЕ ПРОЕКТЫ
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждый проект уникален, и мы подходим к решению задач индивидуально
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-accent font-bold">{project.stats.vehicles}</div>
                      <div className="text-xs text-gray-500">Автомобилей</div>
                    </div>
                    <div>
                      <div className="text-accent font-bold">{project.stats.movers}</div>
                      <div className="text-xs text-gray-500">Грузчиков</div>
                    </div>
                    <div>
                      <div className="text-accent font-bold">{project.stats.time}</div>
                      <div className="text-xs text-gray-500">Время</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ХОТИТЕ СТАТЬ ЧАСТЬЮ НАШЕГО ПОРТФОЛИО?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Доверьте нам свой проект, и мы выполним его качественно и в срок
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
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

export default Portfolio;