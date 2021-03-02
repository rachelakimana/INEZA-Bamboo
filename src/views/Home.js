const Homepage = () => (
  <>
    <div className="md:h-3/4 h-2/5 flex w-full bg-blue-400 bg-headerbgimage bg-cover bg-center bg-no-repeat" />
    <div className="h-auto md:pb-12 pb-4 md:px-20 px-4 text-justify">
      <h1 className="md:text-4xl text-2xl md:pt-8 pt-6 text-yellow-700 font-bold ">
        Who we are?
      </h1>

      <p className="md:pt-6 pt-4 md:text-xl text-base ">
        Ineza Bamboo Weaving Products Ltd, is the company that was founded in
        2019 as the bamboo furnishing making and crafts company, the company is
        supplying a variety of bamboo art and craft products and interior on the
        local market place and engaging the community in an environmentally,
        economically and gender sensitive context with special emphasis on data
        requirements for the Millennium Development Goals related to
        environmental concerns.
      </p>
    </div>
    <div className="flex md:flex-row flex-col h-auto w-full md:pb-6">
      <div className="md:w-1/2 w-full md:mr-4 md:ml-8 ml-0 justify-center items-center bg-center bg-homeimage1 bg-cover bg-no-repeat md:h-96 h-72" />
      <div className="md:mx-4 px-4 text-justify md:w-1/2 w-full">
        <h1 className="md:text-4xl text-2xl md:pt-0 pt-4 text-yellow-700 font-bold ">
          What we do?
        </h1>
        <p className="pb-4 pt-4 md:text-xl text-base">
          The company aims at facilitating subsequent networking among bamboo
          actors through interactive sharing and management of practical
          knowledge to produce the different bamboo products. Furthermore, Ineza
          Bamboo project has come to strengthen links between producers and with
          her chief aim and purpose of to make bamboo products an alternative
          preference to steel, plastics, concrete
        </p>
      </div>
    </div>
    <div className="flex md:flex-row flex-col h-auto w-full">
      <div className="md:hidden w-full md:ml-8 mr-6 justify-center items-center bg-center bg-homeimage3 bg-cover bg-no-repeat md:h-auto h-72 " />
      <div className=" text-justify md:pl-8 pb-4 md:px-0 px-4 md:w-1/2 w-full">
        <h1 className="md:text-4xl text-2xl md:pt-0 pt-4 text-yellow-700 font-bold ">
          service we offer
        </h1>
        <p className="md:pt-6 pt-4 md:text-xl md:pr-0 text-base ">
          Environment Mainstreaming With Bamboo. ||Empowering Interdisciplinary
          Researchers To Define Standards/Codes Of Bamboo Material. ||Building
          With It Is A Solid Solution To Greenhouse Gas Emission. ||Employment
          Promotion
        </p>
      </div>
      <div className="md:w-1/2 hidden md:flex md:ml-12 mr-6 justify-center items-center bg-center bg-homeimage3 bg-cover bg-no-repeat md:h-96 h-72 " />
    </div>
  </>
);
export default Homepage;
