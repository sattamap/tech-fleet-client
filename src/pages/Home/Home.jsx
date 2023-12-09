import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-lg font-poppin text-center mt-24 mb-10">Our Brands</h2>
            <h2 className="text-4xl text-center">WELCOME TO TECH WORLD</h2>
            <div className="divider mb-10">We explore everything</div>


            <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-24'>
                
    {
        brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
      }
    </div>

     <FeaturedProducts></FeaturedProducts>
     <Testimonial></Testimonial>
     <Footer></Footer>
        </div>

        
    );
};

export default Home;
