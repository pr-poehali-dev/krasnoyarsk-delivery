import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <Icon name="Truck" size={24} />
              </div>
              <span className="text-xl font-bold text-primary">КрасГруз24</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/') ? 'text-accent' : 'text-gray-600'
              }`}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/about') ? 'text-accent' : 'text-gray-600'
              }`}
            >
              О нас
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/services') ? 'text-accent' : 'text-gray-600'
              }`}
            >
              Услуги
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/portfolio') ? 'text-accent' : 'text-gray-600'
              }`}
            >
              Портфолио
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/contact') ? 'text-accent' : 'text-gray-600'
              }`}
            >
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-primary">
              <Icon name="Phone" size={16} />
              <span className="text-sm font-medium">8 (391) 232-10-89</span>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Заказать звонок
            </Button>
          </div>

          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-accent">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;