
import Swal from "sweetalert2";

const AddProduct = () => {

    
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newProduct = { image, name, brandName, type, price, description,rating};

    console.log(newProduct);
    fetch(" https://tech-fleet-server-nlyovz2ug-sattam-chakmas-projects.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Data added successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
          form.reset();
        }
      });
  };


  return (
    
      <div>
        <h2 className="text-xl text-center">Add Product</h2>
        <form
          onSubmit={handleAddProduct}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="input input-bordered"
              accept="image/*"
              required
            />
          </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
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
    placeholder="Rating"
    className="input input-bordered"
    required
    min="0" // Set the minimum value for the rating (e.g., 1)
    max="5" // Set the maximum value for the rating (e.g., 5)
  />
</div>

          <div className="form-control mt-2">
            <button className="btn btn-primary">Add </button>
          </div>
        </form>
      </div>
   
  );
};

export default AddProduct;
