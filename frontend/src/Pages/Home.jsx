import Banner from "../Components/Banner/Banner";
import Brand from "../Components/Brand/Brand";
import Categories from "../Components/Categories/Categories";
import Poster from "../Components/Poster/Poster";
import Product from "../Components/Product/Product";
import Recent from "../Components/Recent/Recent";
import Delivery from '../Components/Delivery/Delivery';
import Features from '../Components/Features/Features';

const Home = () => {
    return (
        <div>



            {/* banner component  */}
            <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">

                <Banner></Banner>
            </div>

            {/* delivery component */}
            <div className="delivery_component w-full min-h-[#150px]">
                <Delivery></Delivery>
            </div>


            {/* brand component  */}
            <div className="brand flex items-center justify-center w-full h-[171px] sm:h-[171px] h-[120px] my-96 sm:my-28">
                <Brand />
            </div>


            {/* features component */}
            <div className="w-full flex items-center justify-center mt-[50px] mb-10 md:mb-[80px]">
                <Features />
            </div>

            {/* features component */}
            <div className="w-full flex items-center justify-center mb-[80px]">
                <Categories></Categories>
            </div>

            {/* product component  */}
            <div className="w-full flex items-center justify-center pb-[80px]">
                <Product></Product>
            </div>


            {/* client say component  */}
            <div className="w-full px-18 rounded-xl">
                <Poster />
            </div>


            {/* Recent component  */}
            <div className="w-full flex items-center justify-center pb-[80px] pt-[80px]">
                <Recent></Recent>
            </div>

        </div>
    );
};

export default Home;