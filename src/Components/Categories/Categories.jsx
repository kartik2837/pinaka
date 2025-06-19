import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import './category.css'; 
import marbleTable1 from '/src/assets/table/marble/marble_table1.png';
import stool1 from '/src/assets/Barstool/stool1.png';
import booth1 from '/src/assets/Booths/both1.png';
import chair1 from '/src/assets/chair/chair1.png';
import sofa1 from '/src/assets/sofa/sofa1.png';

const Card = ({ image, title, products }) => (
  <div className="card-container-cat">
    <img src={image} alt={title} className="card-image-cat" />
    <div className="card-content-overlay-cat">
      <h3 className="card-title-cat">{title}</h3>
      <p>{products}</p>
    </div>
  </div>
);

const Features = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  const cardsData = [
   {
            title: 'Table',
            products: '157 Products',
            image: marbleTable1,
        },
        {
            title: 'Bar Stool',
            products: '50 Products',
            image: stool1,
        },
        {
            title: 'Booth',
            products: '48 Products',
            image: booth1,
        },
        {
            title: 'Chair',
            products: '87 Products',
            image: chair1,
        },
        {
            title: 'Sofa',
            products: '35 Products',
            image: sofa1,
        },
  ];

  return (
    <div className="app-container-cat">
      <SectionTitle title="Top Categories" mb="mb-11" />
      <Slider {...settings}>
        {cardsData.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default Features;
