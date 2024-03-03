import React, {  useContext } from 'react'
import './CSS/ShopCategory.scss'
import dropdownIcon from '../Assets/dropdown_icon.png'
import { ShopContext } from '../components/Context/ShopContext'
import Items from '../components/Items/Items'
import  * as String from '../Assets/Utils/Strings'
function ShopCategory(props) {
  const {all_product}=useContext(ShopContext)
  console.log(all_product)
  return (
    <div className='shop-category'>
      <img  className="shop-category-banner" src={props.banner} alt="banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} product
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdownIcon} alt=''/>

        </div>
      </div>
      <div className="shopcategory-products">
        {
         all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Items  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null
          }
         }) 
        }
      </div>
      
      <div className="shopcategory-loadmore">
       {String.Explore_More}
      </div>
    </div>

  )
}

export default ShopCategory
