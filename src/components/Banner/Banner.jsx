
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner2 from '../../assets/banner1.jpg';
import banner3 from '../../assets/banner2.jpg';
import banner6 from '../../assets/banner3.jpg';

const Banner = () => {


  return (
    <div>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner2} className="w-full h-64 sm:h-96 md:h-128 lg:h-192 xl:h-[600px]  object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>  
    </div>
    <div className="max-w-md absolute text-center right-20  md:right-52  top-1/3" >
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-red-700">Explore the Latest Innovations</h1></div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> <p className="py-6 text-sm lg:text-lg text-white">We are ready to find your perfect technology.Simplify your life with Google tech solutions</p>
      <button className="btn btn-primary">Let Get Started</button></div>
    </div>
    
 
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner3} className="w-full h-64 sm:h-96 md:h-128 lg:h-192 xl:h-[600px]  object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="max-w-md absolute   text-center right-20  md:right-52  top-1/3" >
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-fuchsia-900">Power Your Devices with Intel and Microsoft</h1></div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> <p className="py-6 text-sm lg:text-lg">We are ready to find your perfect technology.Intel and Microsoft: Your tech partners for life</p>
      <button className="btn btn-primary">Let Get Started</button></div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner6} className="w-full h-64 sm:h-96 md:h-128 lg:h-192 xl:h-[600px]  object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="max-w-md absolute  text-center right-20  md:right-52  top-1/3" >
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><h1 className="text-lg md:text-3xl lg:text-5xl font-bold">Discover Cutting-Edge Technology</h1></div>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> <p className="py-6 text-sm lg:text-lg">We are ready to find your perfect technology.Elevate your tech game with devices. </p>
      <button className="btn btn-primary">Let Get Started</button></div>
    </div>
  </div> 
</div>
    </div>
  );
};

export default Banner;