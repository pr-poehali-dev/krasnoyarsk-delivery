import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: 'УСЛУГИ ГРУЗЧИКОВ',
      image: 'https://cdn.poehali.dev/files/f238769a-397a-4166-8550-5a2f34c16fa6.png',
      description: 'Профессиональные услуги грузчиков'
    },
    {
      title: 'ГРУЗОПЕРЕВОЗКИ',
      image: 'https://cdn.poehali.dev/files/f238769a-397a-4166-8550-5a2f34c16fa6.png',
      description: 'Надежные грузоперевозки по городу'
    },
    {
      title: 'ВЫВОЗ МУСОРА',
      image: 'https://cdn.poehali.dev/files/f238769a-397a-4166-8550-5a2f34c16fa6.png',
      description: 'Быстрый вывоз строительного мусора'
    },
    {
      title: 'ПЕРЕЕЗДЫ',
      image: 'https://cdn.poehali.dev/files/f238769a-397a-4166-8550-5a2f34c16fa6.png',
      description: 'Квартирные и офисные переезды'
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Скорость и пунктуальность',
      description: 'Быстрая подача машины в течение 30 минут после вызова в любом районе города. Мы приезжаем вовремя и на протяжении всего заказа поддерживаем связь с клиентом.'
    },
    {
      icon: 'Target',
      title: 'Целостность груза',
      description: 'У нас большой выбор упаковки и приспособлений для транспортировки, мы помогаем со сборкой и разборкой мебели, ваши вещи будут бережно упакованы и транспортированы.'
    },
    {
      icon: 'Car',
      title: 'Большой парк своих автомобилей',
      description: 'Мы располагаем большим собственным автопарком для грузоперевозок, у нас всегда найдется свободный автомобиль.'
    },
    {
      icon: 'Users',
      title: 'Собственные грузчики',
      description: 'Наши грузчики – ответственные, аккуратные и вежливые – профессионалы своего дела. Поэтому с упаковкой вещей, бережно и правильно погрузят ваши вещи.'
    },
    {
      icon: 'DollarSign',
      title: 'Низкие цены и удобная оплата',
      description: 'Наши цены – честные и прозрачные. Мы снизили стоимость перевозок за счет собственного автопарка. Оплата наличными, картой или расчетный счет.'
    },
    {
      icon: 'Clock3',
      title: 'Работаем круглосуточно',
      description: 'Вы сможете нанять газель с грузчиками и оформить заказ в комфортное вам время, даже в праздничные дни.'
    }
  ];

  const vehicles = [
    { title: 'ГАЗЕЛЬ 3 М (ДО 1.5 Т)', image: 'https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png' },
    { title: 'ГАЗЕЛЬ 4 М (ДО 1.5 Т)', image: 'https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png' },
    { title: 'ГАЗЕЛЬ 5 М (ДО 1.5 Т)', image: 'https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png' },
    { title: 'ГАЗЕЛЬ ФЕРМЕР', image: 'https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png' },
    { title: 'МАНИПУЛЯТОР', image: 'https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png' },
    { title: 'ГАЗЕЛЬ ОТКРЫТАЯ', image: 'https://cdn.poehali.dev/files/0e95eff0-ad1e-49dd-9141-f6af0f344fe1.png' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-blue-900">ГРУЗТАКСИ24</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-orange-500 transition-colors">Преимущества</a>
              <a href="#fleet" className="text-gray-700 hover:text-orange-500 transition-colors">Автопарк</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Icon name="MessageCircle" className="w-6 h-6 text-blue-600" />
              <a href="tel:+73912321089" className="text-xl font-bold text-orange-500">
                8 (391) 232-10-89
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ГРУЗОВОЕ ТАКСИ
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
              КВАРТИРНО - ОФИСНЫЕ, ДАЧНЫЕ ПЕРЕЕЗДЫ
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-orange-400">
              ВЫВОЗ СТРОЙ МУСОРА
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              СРОЧНЫЙ ВЫЕЗД ЗА 30 МИНУТ С МОМЕНТА ЗАЯВКИ
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-lg">
              ЗАКАЗАТЬ АВТО
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
          <div className="w-full h-full bg-gradient-to-l from-transparent to-blue-900"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            КОМПЛЕКСЫ УСЛУГ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-dashed border-gray-300 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={service.image} alt={service.title} className="w-24 h-24 object-contain" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">{service.title}</h3>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  ЗАКАЗАТЬ УСЛУГУ
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ОТВЕТЬТЕ НА 7 ВОПРОСОВ И МЫ БЫСТРО РАССЧИТАЕМ ДЛЯ ВАС СТОИМОСТЬ УСЛУГ.
          </h2>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 py-4 mb-4">
            УЗНАТЬ СТОИМОСТЬ
          </Button>
          <p className="text-gray-600">Опрос займет не более 2 минут.</p>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            НАШИ ПРЕИМУЩЕСТВА
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={advantage.icon} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">{advantage.title}</h3>
                <p className="text-gray-200 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            НАШ АВТОПАРК
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="border-2 border-dashed border-gray-300 p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-4 text-gray-800">{vehicle.title}</h3>
                <div className="mb-6">
                  <img src={vehicle.image} alt={vehicle.title} className="w-full h-40 object-contain" />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  ЗАКАЗАТЬ
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-8 text-orange-400">
                НЕМНОГО О НАС
              </h2>
              <div className="space-y-6">
                <p className="text-gray-200 leading-relaxed">
                  Наша компания оказывает услуги по перевозке грузов по городу Красноярску и Красноярскому краю, а также мы работаем в других направлениях с 2009 года.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Узнать о предложении больше, обсудить детали сотрудничества или ознакомиться с прейскурантом цен, Вы можете, позвонив по указанному ниже телефону, отправив запрос на электронную почту или зайти на одну из наших страниц в социальных сетях.
                </p>
                <p className="text-gray-200 leading-relaxed font-semibold">
                  Наша работа — гарантия Вашего спокойствия и хорошего настроения!
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="Truck" className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">Автомобили от 1,5 до 20 тонн</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="Package" className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">Экспедирование грузов</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="Crane" className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">Услуги манипулятора</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="Recycle" className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">Грузоперевозки</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="CreditCard" className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">Отсрочки по платежам</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="UserCheck" className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">Опытные водители</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="Users" className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">Услуги грузчиков</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="User" className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">Индивидуальный подход к каждому клиенту</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
            ОСТАЛИСЬ ВОПРОСЫ? СВЯЖИТЕСЬ С НАМИ!
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Icon name="Phone" className="w-6 h-6 text-orange-500" />
                <a href="tel:+73912321089" className="text-2xl font-bold text-orange-400">
                  8 (391) 232-10-89
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" className="w-6 h-6 text-orange-500" />
                <a href="tel:+79029421089" className="text-2xl font-bold text-orange-400">
                  8 (902) 942-10-89
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-8 md:mt-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Phone" className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Users" className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-right mt-8 md:mt-0">
              <p className="text-lg">E-mail: info2311089@mail.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 ГРУЗТАКСИ24. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;