
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Testimonial = () => {
  return (
    <div className='max-w-[1000px] mx-auto mt-20'>
      <h2 className="text-lg font-poppin text-center mb-10">Testimonials</h2>
      <h2 className="text-4xl text-center">YOUR HAPPINESS IS OUR SPIRIT</h2>
      <div className="divider mb-10">Trust on us</div>

      <div className=''> 
      <Carousel
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status indicator
        infiniteLoop={true} // Enable infinite loop
        autoPlay={true} // Enable auto-play
        interval={5000} // Auto-play interval in milliseconds
        swipeable={true} // Enable swipe gestures on mobile
        emulateTouch={true} // Enable touch emulation for desktop
        dynamicHeight={false} // Adjust slide height dynamically
        centerMode={true} // Center the current slide
        centerSlidePercentage={33} // Set the percentage width of the center slide
    
        
      >
        <div className='border rounded-xl shadow-xl p-6 mx-2'>
          <p className='text-xs font-normal'>
          TechFleet has transformed the way I stay updated with the tech world. Their easy navigation and diverse product range make tech shopping delightful.</p>
        </div>
        <div className='border rounded-xl shadow-xl p-6 mx-2'>
          <p className='text-xs font-normal'>
          TechFleet is my one-stop shop for everything tech. Their insightful content and product offerings make them the ultimate destination for tech enthusiasts.  </p>
        </div>
        <div className='border rounded-xl shadow-xl p-6 mx-2'>
          <p className='text-xs font-normal'>
          I have been a loyal TechFleet customer for years. Their dedication to showcasing the latest innovations and exceptional customer service keeps me coming back </p>
        </div>
        <div className='border rounded-xl shadow-xl p-6 mx-2'>
          <p className='text-xs font-normal'>
          TechFleet has simplified my tech research. Their detailed reviews and curated selection have saved me time and helped me make informed buying decisions. </p>
        </div>
        <div className='border rounded-xl shadow-xl p-6 mx-2'>
          <p className='text-xs font-normal'>
          echFleet has made tech shopping a pleasure. They offer an array of top brands, and their informative guides are a tech geek  dream come true.</p>
        </div>
        <div className='border rounded-xl shadow-xl p-6 mx-2'>
          <p className='text-xs font-normal'>
          TechFleet has simplified my tech shopping experience. They showcase the best from Apple, Samsung, Google, and more. A tech-savvy paradise! </p>
        </div>
        
      </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
