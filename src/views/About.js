import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faTelegram);

const Aboutpage = () => (
  <>
    <div className="h-20 ">
      <h1 className="md:text-4xl text-xl text-yellow-700 font-bold text-center pt-4 ">
        Contact
      </h1>
    </div>
    <div className="flex justify-center items-center">
      <div className="h-max md:w-3/4 w-auto md:mx-0 mx-6 flex md:flex-row">
        <div className=" text-justify md:pl-8 pb-4 md:w-1/2 w-full">
          <p className="md:pt-0 pt-4 md:text-xl text-base ">
            Lorem ipsum their purpose is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout. A practice not without controversy, laying out pages
            with meaningless filler text can be very useful when the focus is
            meant to be on design, not content.
          </p>
          <div className="md:hidden md:w-1/2 w-full flex md:ml-12 mr-6 justify-center items-center md:h-96 h-72 ">
            <img
              src="./ineza bamboo location.png"
              alt="address"
              className="md:h-96 h-64 w-max"
            />
          </div>
          <div className=" pt-8">
            <p className="text-base text-yellow-700 font-bold">GET IN TOUCH</p>
          </div>
          <div className="pt-4 h-16 text-blue-900  font-bold">
            <a href="mailto:rachelakimana@gmail.com">
              <FontAwesomeIcon icon="envelope" className="text-5xl" />
            </a>
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              className="pl-4 text-5xl"
            />
            <a
              onClick={() => window.open('https://telegram.com', '_blank')}
              href="https://telegram.com"
            >
              {' '}
              <FontAwesomeIcon
                icon={['fab', 'telegram']}
                className="pl-4 text-5xl"
              />
            </a>
          </div>
        </div>
        <div className="hidden md:w-1/2 md:flex md:ml-12 mr-6 justify-center items-center md:h-96 h-72 ">
          <img
            src="./ineza bamboo location.png"
            alt="address"
            className="h-96 w-max"
          />
        </div>
      </div>
    </div>
  </>
);

export default Aboutpage;
