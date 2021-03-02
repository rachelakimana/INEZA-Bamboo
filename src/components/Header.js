import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Header = () => {
  const [isClicked, setClicked] = useState('');
  const [showMEnu, setShowMenu] = useState(false);
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
  const handleShowMenu = () => {
    setShowMenu(!showMEnu);
  };
  return (
    <>
      <div className="hidden fixed bg-yellow-600 h-12 w-full md:flex justify-center text-xl text-white">
        {menus.map((menu) => (
          <button
            type="button"
            key={menu.id}
            onClick={() => handleMenu(menu)}
            className={` pl-12 capitalize hover:text-black cursor-pointer ${
              isClicked === menu.value ? ' text-blue-700 ' : ''
            }`}
          >
            {menu.value}
          </button>
        ))}
      </div>
      {showMEnu && (
        <div className="md:hidden z-40 absolute top-0 left-0 bg-yellow-600 h-screen w-2/3">
          <div className="text-center flex flex-col text-base text-white">
            <div>
              <div className="p-4 capitalize hover:text-black cursor-pointer text-right w-full">
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => handleShowMenu(showMEnu)}
                  className=" text-white "
                  size="2x"
                />
              </div>
            </div>
            {menus.map((menu) => (
              <div>
                <button
                  type="button"
                  key={menu.id}
                  onClick={() => handleMenu(menu)}
                  className={`p-4 text-lg capitalize font-bold hover:text-black cursor-pointer w-full   ${
                    isClicked === menu.value ? ' text-blue-700 ' : ''
                  }`}
                >
                  {menu.value}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className=" md:hidden fixed pl-4 pt-4 z-20">
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleShowMenu}
          className=" text-yellow-700 "
          size="2x"
        />
      </div>
    </>
  );
};
export default Header;
