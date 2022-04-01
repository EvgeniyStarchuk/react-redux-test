import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/actions";
import ProductComponent from "./ProductComponent";

const baseURL = "http://localhost:3000/products";

const AddButton = () => {
  const dispatch = useDispatch()

  // function addItem(id, imageUrl, name, count, size, ) {
  //   axios
  //     .post(baseURL, {
  //       "id": 2,
  //       "imageUrl": "some url here",
  //       "name": "Product name 2",
  //       "count": 10,
  //       "size": {
  //       "width": 300,
  //       "height": 300
  //       },
  //       "weight": "300g",
  //       "comments": ["CommentModel", "CommentModel"]
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }
  return (
    <div className="ui grid container">
    </div>
  )
}

export default AddButton;