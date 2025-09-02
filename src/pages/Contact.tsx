import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      details: ["8 (391) 232-10-89", "8 (902) 942-10-89"],
      description: "Звоните круглосуточно"
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["info2311089@mail.ru"],
      description: "Ответим в течение часа"
    },
    {
      icon: "MapPin",
      title: "Адрес",
      details: ["г. Красноярск", "ул. Примерная, 123"],
      description: "Работаем по всему городу"
    },
    {
      icon: "Clock",
      title: "Время работы",
      details: ["Круглосуточно", "Без выходных"],
      description: "Всегда готовы помочь"
    }
  ];

  const socialLinks = [
    { icon: "MessageCircle", name: "Telegram", color: "bg-blue-500" },
    { icon: "MessageCircle", name: "WhatsApp", color: "bg-green-500" },
    { icon: "Users", name: "VKontakte", color: "bg-blue-600" }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">КОНТАКТЫ</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить 
            на ваши вопросы и помочь с организацией перевозки.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group border-2 hover:border-accent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={info.icon as any} size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{info.title}</h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-accent font-medium">{detail}</div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ОСТАЛИСЬ ВОПРОСЫ?<br/>СВЯЖИТЕСЬ С НАМИ!
              </h2>
              <div className="w-24 h-1 bg-accent mb-6"></div>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-600 text-lg">
                  Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения деталей заказа.
                </p>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}>
                      <Icon name={social.icon as any} size={20} className="text-white" />
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-primary">
                    <Icon name="Phone" size={20} />
                    <div>
                      <div className="font-semibold">8 (391) 232-10-89</div>
                      <div className="font-semibold">8 (902) 942-10-89</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-primary">
                    <Icon name="Mail" size={20} />
                    <span className="font-medium">info2311089@mail.ru</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Оставьте заявку</h3>
                  <form className="space-y-6">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        className="border-gray-300 focus:border-accent"
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Телефон" 
                        type="tel"
                        className="border-gray-300 focus:border-accent"
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Email (необязательно)" 
                        type="email"
                        className="border-gray-300 focus:border-accent"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Опишите вашу задачу" 
                        className="border-gray-300 focus:border-accent min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                  <p className="text-gray-500 text-sm mt-4 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ГОТОВЫ НАЧАТЬ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Позвоните нам прямо сейчас, и мы быстро организуем вашу перевозку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold">
              <Icon name="Phone" size={24} className="mr-2" />
              8 (391) 232-10-89
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;