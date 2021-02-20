import { useState } from 'react';

const Header = () => {
  const [isClicked, setClicked] = useState('');
  const menus = [
    { id: 1, value: 'home' },
    { id: 2, value: 'services' },
    { id: 3, value: 'about' },
    { id: 4, value: 'contact' },
  ];
  const handleMenu = (menuId) => {
    setClicked(menuId);
  };
  return (
    <div className=" h-screen w-screen bg-white">
      <div className="fixed bg-red-700 h-12 w-full flex justify-center items-center text-xl text-white">
        {menus.map((menu) => (
          <button
            type="button"
            key={menu.id}
            onClick={() => handleMenu(menu.value)}
            className={
              isClicked === menu.value
                ? 'pl-12 capitalize text-blue-700 hover:text-black cursor-pointer'
                : 'pl-12 capitalize hover:text-black cursor-pointer'
            }
          >
            {menu.value}
          </button>
        ))}
        ;
      </div>
      <div className="h-3/4 w-full bg-headerbgimage bg-cover bg-no-repeat" />
    </div>
  );
};
export default Header;
