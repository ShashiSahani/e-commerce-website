import React from 'react'
import './NewsLetter.scss'
import *as  String from '../../Assets/Utils/Strings'
function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>{String.Get_Exclusive_offers_on_your_Email}</h1>
      <p>{String.newsLetterp}</p>
      <div>
        <input type="email" name="" id="" placeholder={String.youremail} />
      <button>{String.Subscribe}</button>
      </div>
    </div>
  )
}

export default NewsLetter
