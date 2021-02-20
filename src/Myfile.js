import { useState } from 'react';

const Myfile = () => {
  const [isClicked, setClicked] = useState('home');
  const menus = [
    { id: 1, value: 'home' },
    { id: 2, value: 'services' },
    { id: 3, value: 'about' },
    { id: 4, value: 'contact' },
  ];
  const handleMenu = (menuId) => {
    setClicked(menuId);
  };

  console.log(isClicked);
  return menus.map((menu) => (
    <button
      type="button"
      key={menu.id}
      onClick={() => handleMenu(menu.value)}
      className={
        isClicked === menu.value
          ? 'capitalize text-blue-700 bg-red-400'
          : 'capitalize'
      }
    >
      {menu.value}
    </button>
  ));
  /* <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'home'} setClicked={setClicked}>
            home
          </Headercolor>
        </div>
        <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor
            isActive={isClicked === 'services'}
            setClicked={setClicked}
          >
            services
          </Headercolor>
        </div>
        <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'about'} setClicked={setClicked}>
            about
          </Headercolor>
        </div>
        <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor
            isActive={isClicked === 'contact'}
            setClicked={setClicked}
          >
            contact
          </Headercolor>
        </div>
          </div> */
};
export default Myfile;
