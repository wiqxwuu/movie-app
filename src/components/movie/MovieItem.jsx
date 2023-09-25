import React, { useState } from 'react'
import './MovieItem.css'

const MovieItem = ({title, image, onDeleteMovie, id}) => {

  const [rating, setRaiting] = useState(0)

  const clickHandler = () => {
    const star = 1
    if(rating < 10){
      setRaiting(rating + star)
    }
  }

  return (
    <div id={id} className='movie_item'>
      <img src={image} alt={title}/>
        <div className="text_content">
            <h3>{title}</h3>
            <div className="btn_block">
                <button onClick={clickHandler} className='stars'>{rating + "/10 stars"}</button>
                <button onClick={()=>onDeleteMovie(id)} className='delete'>DELETE</button>
                <button className='edit'>EDIT</button>
            </div>
        </div>
    </div>
  )
}

export default MovieItem
