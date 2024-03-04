import React from "react";
import "./ProductDisplay.scss";
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import * as String from "../../Assets/Utils/Strings";
function ProductDisplay(props) {
  console.log("ProductDisplay", props);
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt=""  className="small-image"/>
          <img src={product.image} alt=""  className="small-image"/>
          <img src={product.image} alt=""  className="small-image"/>
          <img src={product.image} alt=""  className="small-image"/>
        
      
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
          ₹{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
          ₹{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, mollitia!
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, laborum?
        </div>
        <div className="productdisplay-right-size">
          <h1>{String.Select_Size}</h1>
          <div className="productdisplay-right-sizes">
            <ul>
            <li><button>XS</button></li>
            <li><button>S</button></li>
            <li><button>M</button></li>
            <li><button>L</button></li>
            <li><button>XL</button></li>
            <li><button>XXL</button></li>
            </ul>
          </div>

        </div>
      
        <button className="add-to-cart">{String.ADD_TO_CART}</button>

   
        <p className="productdisplay-right-category"><span><strong>{String.Category} :</strong></span> Women , T shirt ,Crop Top</p>
        <p className="productdisplay-right-tags"><span><strong>{String.Tags} :</strong></span> Modern , Letest </p>
      </div>
    </div>
    
    
  );
}

export default ProductDisplay;
