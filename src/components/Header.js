import { useState } from 'react';

const Header = () => {
  const [isClicked, setClicked] = useState('');
  const menus = [
    { id: 1, value: 'home', link: '/home' },
    { id: 2, value: 'services', link: '/services' },
    { id: 3, value: 'about', link: '/about' },
    { id: 4, value: 'contact', link: '/contact' },
  ];
  const handleMenu = (menu) => {
    setClicked(menu.value);
    window.location.replace(menu.link);
  };
  return (
    <div>
      <div className="fixed bg-yellow-600 h-12 w-full flex justify-center items-center text-xl text-white">
        {menus.map((menu) => (
          <button
            type="button"
            key={menu.id}
            onClick={() => handleMenu(menu)}
            className={
              isClicked === menu.value
                ? 'pl-12 capitalize text-blue-700 hover:text-black cursor-pointer'
                : 'pl-12 capitalize hover:text-black cursor-pointer'
            }
          >
            {menu.value}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Header;
