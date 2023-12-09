
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';

const FeaturedProducts = () => {
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(" https://tech-fleet-server-nlyovz2ug-sattam-chakmas-projects.vercel.app/featured")
            .then((response) => response.json())
            .then((data) => {
                setFeatured(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching carts:", error);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(typeof (featured));

    return (
        <div className="max-w-[1300px] mx-auto  mt-20 ">
            <h2 className="text-lg font-poppin text-center mb-10">Featured Products</h2>
            <h2 className="text-4xl text-center">Grab Your one</h2>
            <div className="divider mb-10">Trust on us</div>
            <div className=' '>
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
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label} className="absolute left-96 -bottom-3 transform -translate-y-1/2 z-10 hidden lg:block">
                                Previous
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} className="absolute right-96 -bottom-3 transform -translate-y-1/2 z-10 hidden lg:block">
                                Next
                            </button>
                        )
                    }

                >
                    {featured.map((item) => (

                        <div key={item._id} className="card w-36 md:w-60 lg:w-72 bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt="Shoes" /></figure>
                            <div className="lg:card-body">
                                <div className="lg:card-title text-sm lg:text-base text-black">
                                    <p>{item.name}</p>
                                    <div className="badge badge-secondary">Featured</div>
                                </div>
                                <p>Price: {item.price}</p>
                                <div className="card-actions justify-end">

                                </div>
                            </div>
                        </div>
                    ))}


                </Carousel>

            </div>
        </div>
    );
};

export default FeaturedProducts;

