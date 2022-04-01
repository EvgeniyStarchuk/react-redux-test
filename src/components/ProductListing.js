import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/actions";
import ProductComponent from "./ProductComponent";

const baseURL = "http://localhost:3000/products";

const ProductListing = () => {
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios
      .get(baseURL)
      .catch((err) => {
        console.log("Err", err);
      })
      dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing;