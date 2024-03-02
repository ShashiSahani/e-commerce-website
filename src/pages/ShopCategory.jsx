import React, {  useContext } from 'react'
import './CSS/ShopCategory.scss'
import { ShopContext } from '../components/Context/ShopContext'
function ShopCategory(props) {
  const {all_product}=useContext(ShopContext)
  console.log("all_product====>",all_product)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>

  )
}

export default ShopCategory
