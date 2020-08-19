import React from 'react';

const Header = () => {
  let dots = [];
  for (let i = 0; i < 50; i++) {
    dots.push(<div className="dot" />);
  }

  return (
    <div className="header">
      <d iv className="gallery">
        <h1>Галерея проектов</h1>
        <p>
          Сумма экономики рассчитана в сравнении с суммой цен этого же перечня
          товаров по отдельности
        </p>
        <button>Выбрать дизайн</button>
      </d>
      <div className="about">
        {dots}
        <p>
          Мы успешно завершили уже <span>более 450</span> заказов
        </p>
      </div>
    </div>
  );
};

export default Header;
