import { useState } from 'react';
import Headercolor from './Headercolor';

const Header = () => {
  const [isClicked, setClicked] = useState('home');

  return (
    <div className=" h-screen w-screen bg-white">
      <div className="fixed bg-red-700 h-12 w-full flex justify-center items-center text-xl text-white">
        <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <button
            type="button"
            onClick={() => setClicked('Test')}
            className={isClicked === 'Test' ? 'capitalize text-blue-700' : 'capitalize'}
          >
            Test
          </button>
        </div>
        <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'home'} setClicked={setClicked}>
            home
          </Headercolor>
        </div>
        <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'services'} setClicked={setClicked}>
            services
          </Headercolor>
        </div>
        <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'about'} setClicked={setClicked}>
            about
          </Headercolor>
        </div>
        <div className="pl-12 capitalize hover:text-black cursor-pointer">
          <Headercolor isActive={isClicked === 'contact'} setClicked={setClicked}>
            contact
          </Headercolor>
        </div>
      </div>
      <div className="h-3/4 w-full bg-headerbgimage bg-cover bg-no-repeat" />
    </div>
  );
};
export default Header;
