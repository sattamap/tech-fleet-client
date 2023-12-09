import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
   
    const products = useLoaderData();
    
    const{_id, image, name, brandName, type, price, description,rating } = products;
    
    console.log(products);
    const handleUpdateProduct = event =>{
        event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const updateProduct = { image, name, brandName, type, price, description,rating };

      
        console.log(updateProduct);
        fetch(` https://tech-fleet-server-nlyovz2ug-sattam-chakmas-projects.vercel.app/products/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateProduct),
        })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })
                    
                }
            })

    }


    return (
        <div>
        <h2 className="text-xl text-center">UpdateProduct</h2>
        <form
          onSubmit={handleUpdateProduct}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
        
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              defaultValue={image}
              placeholder="Image URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              name="brandName"
              defaultValue={brandName}
              placeholder="Brand Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              name="type"
              defaultValue={type}
              placeholder="Type"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
              required
            />
        
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Short Description"
              className="input input-bordered"
              required
            />
         
          </div>
          <div className="form-control">
  <label className="label">
    <span className="label-text">Rating</span>
  </label>
  <input
    type="number"
    name="rating"
    defaultValue={rating}
    placeholder="Rating"
    className="input input-bordered"
    required
    min="0" // Set the minimum value for the rating (e.g., 1)
    max="5" // Set the maximum value for the rating (e.g., 5)
  />
</div>

          <div className="form-control mt-2">
            <button className="btn btn-primary">Update </button>
          </div>
        </form>
      </div>
    );
};

export default Update;