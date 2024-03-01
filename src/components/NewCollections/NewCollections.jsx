import React from 'react'
import './NewCollections.scss';
import new_collections from '../../Assets/new_collections'
import * as String from '../../Assets/Utils/Strings'
import Items from '../Items/Items';
function NewCollections() {
  return (
    <div className='new-collections'>
      <h1>{String.New_Collections}</h1>
      <hr />
      <div className="collections">
    {new_collections.map((item,i)=>{
        return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
      </div>
    </div>
  )
}

export default NewCollections
