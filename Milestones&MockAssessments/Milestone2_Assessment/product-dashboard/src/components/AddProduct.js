/*import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/ProductContext";

function AddProduct() {
  const { addProduct } = useContext(ProductContext);

  const formik = useFormik({
    initialValues: { name: "", price: "", category: "", description: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required"),
      description: Yup.string().required("Required")
    }),
    onSubmit: values => addProduct(values)
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-4">
      <h2>Add Product</h2>
      <input name="name" onChange={formik.handleChange} className="form-control" placeholder="Name"/>
      <p className="text-danger">{formik.errors.name}</p>
      <input name="price" onChange={formik.handleChange} className="form-control" placeholder="Price"/>
      <p className="text-danger">{formik.errors.price}</p>
      <button className="btn btn-success mt-2">Add</button>
    </form>
  );
}
export default AddProduct;*/

import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/ProductContext";

function AddProduct() {
  const { addProduct } = useContext(ProductContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      image: ""
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Product name required"),
      price: Yup.number().required("Price required"),
      category: Yup.string().required("Category required"),
      description: Yup.string().required("Description required"),
      image: Yup.string().url("Enter valid image URL").required("Image URL required")
    }),

    onSubmit: values => {
      addProduct(values);
      alert("Product Added!");
    }
  });

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2>Add Product</h2>

        <form onSubmit={formik.handleSubmit}>
          <input name="name" placeholder="Name" className="form-control mb-2" onChange={formik.handleChange} />
          <p className="text-danger">{formik.errors.name}</p>

          <input name="price" placeholder="Price" className="form-control mb-2" onChange={formik.handleChange} />
          <p className="text-danger">{formik.errors.price}</p>

          <input name="category" placeholder="Category" className="form-control mb-2" onChange={formik.handleChange} />
          <p className="text-danger">{formik.errors.category}</p>

          <input name="image" placeholder="Image URL" className="form-control mb-2" onChange={formik.handleChange} />
          <p className="text-danger">{formik.errors.image}</p>

          <textarea name="description" placeholder="Description" className="form-control mb-2" onChange={formik.handleChange}></textarea>
          <p className="text-danger">{formik.errors.description}</p>

          <button className="btn btn-success">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
