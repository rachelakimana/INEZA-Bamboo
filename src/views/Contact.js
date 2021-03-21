import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faWhatsapp, faTelegram, faPhone);

const Contactpage = () => (
  <>
    <div className="h-20 ">
      <h1 className="md:text-4xl text-xl text-yellow-700 font-bold text-center pt-4 ">
        Contact
      </h1>
    </div>
    <div className="flex justify-center items-center">
      <div className="h-max md:w-3/4 w-auto md:mx-0 mx-6 flex md:flex-row">
        <div className=" text-justify md:pl-8 pb-4 md:w-1/2 w-full flex flex-col">
          <div className="">
            <p className="md:pt-0 pt-4 md:text-xl text-base ">
              Are you interested ? Write to us or give us a call now, we’re
              always happy to talk and help out with any questions you may ask.
            </p>
          </div>
          <div className="pt-4">
            <form>
              <div className=" w-full flex flex-row">
                <div className="w-1/2">
                  <label htmlFor="fname">First name*</label>
                  <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="w-full border h-10 border-black"
                  />
                </div>
                <div className=" w-1/2 pl-2">
                  <label htmlFor="lname">Last name:</label>
                  <br />
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="w-full border h-10 border-black"
                  />
                </div>
              </div>
              <div className="pt-4 ">
                <label htmlFor="lname">Email*</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="border border-black h-10 w-full"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="lname">Subject</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="border border-black h-10 w-full"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="lname">Messsage</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="border border-black h-32 w-full"
                />
              </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="Submit"
                  className="border bg-yellow-700 h-10 w-full"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex md:ml-4 mr-6 justify-center items-center flex-col md:h-1/2 h-72 ">
          <img
            src="./ineza bamboo location.png"
            alt="address"
            className="md:h-96 h-64 w-max"
          />
          <div className=" pt-4">
            <p className="text-base text-yellow-700 font-bold">GET IN TOUCH</p>
          </div>
          <div className="h-16 text-blue-900  font-bold">
            <a href="mailto:rachelakimana@gmail.com">
              <FontAwesomeIcon icon="envelope" className="text-3xl" />:
              archehjsfj
            </a>
            <br />
            <FontAwesomeIcon icon="phone" className="text-3xl" />: 5456
            <br />
            <FontAwesomeIcon icon={['fab', 'facebook']} className="text-3xl" />
            <br />
            <a
              onClick={() => window.open('https://telegram.com', '_blank')}
              href="https://telegram.com"
            >
              {' '}
              <FontAwesomeIcon
                icon={['fab', 'telegram']}
                className="text-3xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contactpage;
