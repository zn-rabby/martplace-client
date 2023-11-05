import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import Swal from "sweetalert2";

const AddJobs = () => {
  const { user } = useContext(AuthContext);
  const [brand, setBrand] = useState("");
  const handleSelectChange = (event) => {
    setBrand(event.target.value);
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const product = {
      name,
      price,
      type,
      description,
      rating,
      image,
      brand,
    };
    console.log(product);
    // try {
    //   const response = await fetch(
    //     "https://digital-store-server-940h97fnc-rabby-webs-projects.vercel.app/products",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(product),
    //     }
    //   );
    //   const result = await response.json();
    //   console.log(result);
    //   if (result.acknowledged) {
    //     Swal.fire("Product Add", "Successfully Product Add", "success");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    // form.reset("");
  };

  return (
    <div className="bg-[#856bb350] rounded-md p-3 md:p-20 my-6 mx-2">
      <h2 className="text-3xl font-bold text-center text-[#186AE3]">Add Job</h2>
      <form onSubmit={handleAddProduct}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-white">Image</span>
            </label>
            <label className="">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-white">Name</span>
            </label>
            <label className="">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* ---- */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label">
              <span className="label-text text-lg text-white">Type</span>
            </label>
            <label className="">
              <input
                type="text"
                name="type"
                placeholder="Product Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-white">Price</span>
            </label>
            <label className="">
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* ---- */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-white">Brand Name</span>
            </label>
            <select
              className="input input-bordered w-full"
              value={brand}
              onChange={handleSelectChange}
            >
              <option className="p-1 border" value="Samsung">
                Samsung
              </option>
              <option className="p-1 border" value="Apple">
                Apple
              </option>
              <option className="p-1 border" value="Microsoft">
                Microsoft
              </option>
              <option className="p-1 border" value="Sony">
                SONY
              </option>
              <option className="p-1 border" value="Lg">
                LG
              </option>
              <option className="p-1 border" value="Toshiba">
                Toshiba
              </option>
            </select>
          </div>

          <div className="form-control md:w-1/2 mx-2">
            <label className="label ">
              <span className="label-text text-lg text-white">Rating</span>
            </label>
            <label className="">
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="form-control w-full mx-2 pr-4">
          <label className="label">
            <span className="label-text text-lg text-white">
              Short description
            </span>
          </label>
          <label className="">
            <input
              type="text"
              name="description"
              placeholder="Short Description"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Add Job"
            className="bg-[#186AE3] hover:bg-[#6C40B8] text-white w-1/2 m-2 rounded-lg py-3 px-4 my-5 text-xl font-semibold"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
