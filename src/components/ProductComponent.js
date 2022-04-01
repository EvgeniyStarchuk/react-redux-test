import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, count, imageUrl, name, size, weight} = product;
    return (
    <div className="four wide column" key={id}>
      <div className="ui link cards">
        <div className="card">
          <div className="image"><img src={imageUrl} alt={name} /></div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="meta">Width: {size.width}</div>
            <div className="meta">Height: {size.height}</div>
            <div className="meta">{weight}</div>
          </div>
        </div>
      </div>
    </div>
    
    )
  })
  return <>{renderList}</>;
}

export default ProductComponent;