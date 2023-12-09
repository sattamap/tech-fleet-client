import {  useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";


const ProductDetail = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const {user} = useContext(AuthContext);
    
    useEffect(() => {
        fetch(" https://tech-fleet-server-nlyovz2ug-sattam-chakmas-projects.vercel.app/products")
            .then((response) => response.json())
            .then((data) => {
                // console.log("Cart Data:", data);
                // Update the cart data in your context provider
                // Assuming you have a function to set the cart data in your context
                // Replace 'setCartDataInContext' with the actual function name
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching carts:", error);
            });
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    }
    const productDetail = products.find((product) => product._id === id);

    const handleAddToCart = () => {
        const userEmail = user.email; // Replace 'user.email' with the actual path to the user's email in your context

        // Create a new cartData object by spreading the properties of productDetail
        const cartData = { ...productDetail };
      
        // Remove the _id property from cartData
        delete cartData._id;
      
        // Add the user's email to the cartData
        cartData.userEmail = userEmail;
        // console.log(user);
        // Assuming you have a server route to add the product to the cart
        fetch(" https://tech-fleet-server-nlyovz2ug-sattam-chakmas-projects.vercel.app/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        })
          .then((response) => response.json())
          
          .then((data) => {
            console.log(data);
            // Show a success message
            Swal.fire({
              title: "Success!",
              text: "Product added to cart",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            console.error("Error adding product to cart:", error);
            // Show an error message if something goes wrong
            Swal.fire({
              title: "Error",
              text: "Failed to add product to cart",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      };
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={productDetail.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{productDetail.name}</h1>
      <h1 className=" "><span className="text-2xl font-bold">Brand:</span> <span className="text-lg">{productDetail.brandName} </span></h1>
      <h1 className=""><span className="text-2xl font-bold">Product Type:</span> <span className="text-lg">{productDetail.type}</span></h1>
      <h3 className=""><span className="text-2xl font-bold">Price:</span> <span className="text-lg">{productDetail.price}</span></h3>
      <p className="py-6">{productDetail.description}</p>
      <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetail;
