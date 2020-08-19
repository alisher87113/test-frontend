import React from 'react';

const Sidebar = ({ types, setCurrType, flats, setCurrFlat, setCurrPic }) => {
  const changeFlat = (flatTitle) => {
    flats.map((item) => {
      if (item.title === flatTitle) {
        setCurrFlat(item);
        setCurrPic(item.images[0]);
      }
    });
  };

  return (
    <div className="sidebar">
      <div className="type">
        <h4>Тип ремонта</h4>
        <select
          onChange={(e) => {
            setCurrType(e.target.value);
          }}
        >
          {types.map((type) => {
            return <option key={type}>{type}</option>;
          })}
        </select>
      </div>
      <div className="finished">
        <h4>Сделанные ремонты</h4>
        <select onChange={(e) => changeFlat(e.target.value)}>
          {flats.map((item) => {
            return <option>{item.title}</option>;
          })}
        </select>
      </div>
      <div className="finishedList">
        <div className="found">Найдено {flats.length} объекта</div>
        <ul>
          {flats.map((item) => {
            return (
              <li>
                <span onClick={() => changeFlat(item.title)}>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
