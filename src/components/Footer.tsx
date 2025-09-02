import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-accent text-accent-foreground rounded-lg p-2">
                <Icon name="Truck" size={24} />
              </div>
              <span className="text-xl font-bold">КрасГруз24</span>
            </div>
            <p className="text-gray-400">
              Надежные грузоперевозки по Красноярску и краю с 2009 года. 
              Собственный автопарк и профессиональная команда.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Icon name="MessageCircle" size={16} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Icon name="MessageCircle" size={16} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Icon name="Users" size={16} className="text-white" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-accent transition-colors">Грузоперевозки</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Услуги грузчиков</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Квартирные переезды</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Офисные переезды</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Вывоз мусора</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Услуги манипулятора</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-accent transition-colors">О нас</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Наши работы</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Автопарк</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Вакансии</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-accent" />
                <div>
                  <div className="text-white font-medium">8 (391) 232-10-89</div>
                  <div className="text-white font-medium">8 (902) 942-10-89</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-accent" />
                <span className="text-gray-400">info2311089@mail.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-accent" />
                <span className="text-gray-400">г. Красноярск</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="text-gray-400">Круглосуточно</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 КрасГруз24. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;