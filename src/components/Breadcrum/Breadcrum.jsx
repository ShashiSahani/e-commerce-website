import React from 'react'
import './Breadcrum.scss'
import * as String from '../../Assets/Utils/Strings'
import arrow_icon from '../../Assets/breadcrum_arrow.png'
function Breadcrum(props) {
    const {product}=props;
  return (
    <div className='breadcrum'>
      {String.Home} <img src={arrow_icon} alt='arrow icon'/>{String.Home}
       <img src={arrow_icon} alt="arrow icon"  />
       {product?.category}
      <img src={arrow_icon} alt='arrow icon' />
      {product?.name}
    </div>
  )
}

export default Breadcrum
