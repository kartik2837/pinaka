
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Ban, MoveRight } from "lucide-react";
import Banner1 from '/src/assets/Banner/banner1.png';
import Banner2 from '/src/assets/Banner/banner2.png';
import Banner3 from '/src/assets/Banner/banner3.png';
import Banner4 from '/src/assets/Banner/banner4.png';

const Banner = () => {

    const products = [
        {
            id: 1,
            title: "Elevate Your Space with Our Luxe Bar Chair",
            subTitle: "welcome to Pinaka Art & Exports",
            image: Banner1,
        },
        {
            id: 2,
            title: "Perfect Booth Seating for Every Space",
            subTitle: "welcome to Pinaka Art & Exports",
            image: Banner2,
        },
        {
            id: 3,
            title: "Elevate Your Comfort with Premium Chairs",
            subTitle: "welcome to Pinaka Art & Exports",
            image: Banner3,
        },
        {
            id: 4,
            title: "Designer Sofas for the Discerning Home",
            subTitle: "welcome to Pinaka Art & Exports",
            image: Banner4,
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-24 scroll-hide">
            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {products?.map((product) => (
                        <div
                            key={product?.id}
                            className="banner_slide_item flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] py-6 sm:py-10"
                        >
                            <div className="banner_text w-full lg:w-1/2 text-center lg:text-left">
                                <p className="text-xs sm:text-sm text-[#272343] uppercase font-inter font-normal mb-2">
                                    {product?.subTitle}
                                </p>
                                <h3 className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl text-[#272343] font-inter capitalize leading-snug font-bold mb-4 sm:mb-5 w-full max-w-[90%] mx-auto lg:mx-0 break-words">
                                    {product?.title}
                                </h3>
                                <div className="flex justify-center lg:justify-start">
                                    <button className="w-[140px] sm:w-[160px] md:w-[171px] h-[44px] sm:h-[48px] md:h-[52px] bg-[#029fae] text-white rounded-lg flex items-center justify-center gap-2 capitalize text-sm sm:text-base">
                                        Shop now <MoveRight />
                                    </button>
                                </div>
                            </div>

                            <div className="banner w-full lg:w-1/2 flex justify-center lg:justify-end">
                                <img
                                    src={product?.image}
                                    alt={product?.title}
                                    className="w-[220px] sm:w-[300px] md:w-[400px] lg:w-[480px] xl:w-[600px] h-auto object-contain relative z-[1]"
                                />
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default Banner;