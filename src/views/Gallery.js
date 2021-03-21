const Gallerypage = () => {
  const products = [
    {
      link: './bamboolamp1.jpg',
      alt: 'Lamp1',
    },
    {
      link: './image2.jpg',
      alt: 'img1',
    },
    {
      link: './image1.jpg',
      alt: 'img2',
    },
    {
      link: './bamboochair3.jpg',
      alt: 'img3',
    },
    {
      link: './bamboochair4.jpg',
      alt: 'img4',
    },
    {
      link: './bamboorob.jpg',
      alt: 'img5',
    },
    {
      link: './bamboochair5.jpg',
      alt: 'Lamp1',
    },
    {
      link: './image3.jpg',
      alt: 'img6',
    },
    {
      link: './image4.jpg',
      alt: 'img7',
    },
    {
      link: './image5.jpg',
      alt: 'img8',
    },
    {
      link: './image6.jpg',
      alt: 'img9',
    },
    {
      link: './image7.jpg',
      alt: 'img10',
    },
    {
      link: './image8.jpg',
      alt: 'img11',
    },
    {
      link: './image9.jpg',
      alt: 'img12',
    },
    {
      link: './image10.jpg',
      alt: 'img13',
    },
    {
      link: './image11.jpg',
      alt: 'img14',
    },
    {
      link: './image12.jpg',
      alt: 'img15',
    },
    {
      link: './image13.jpg',
      alt: 'img16',
    },
    {
      link: './image14.jpg',
      alt: 'img17',
    },
    {
      link: './image15.jpg',
      alt: 'img18',
    },
    {
      link: './image16.jpg',
      alt: 'img19',
    },
    {
      link: './image17.jpg',
      alt: 'img20',
    },
    {
      link: './image18.jpg',
      alt: 'img21',
    },
    {
      link: './image19.jpg',
      alt: 'img22',
    },
  ];
  return (
    <>
      <div className="md:h-48 w-full">
        <h1 className="md:text-4xl text-xl text-yellow-700 font-bold text-center pt-4 ">
          Gallery
        </h1>
        <p className="pt-4 text-base text-justify item-center pb-4 md:mx-24 mx-6">
          Because we have our critical, role and desire to invest in bamboo,
          fabrication and shift the focus, towards Bamboo arts and Craft to
          meet, markets for wood, fibre products and recreational green
          environment as the core implementing partner in of bamboo, so we have
          to do research a lot more, design standards and codes that will then
          empower architects, engineers and designers to specify, and design
          with it thus huge demand at the market place.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-max md:w-3/4 w-auto flex flex-row justify-center flex-wrap ">
          {products.map(({ link, alt }, index) => (
            <div key={index} className=" bg-red-300 shadow-2xl m-2">
              <img
                src={link}
                alt={alt}
                className="h-72 w-80 transform hover:scale-110 motion-reduce:transform-none"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Gallerypage;
