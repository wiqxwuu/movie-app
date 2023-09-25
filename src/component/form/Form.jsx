import React, { useState } from 'react'
import './MovieForm.css'

const MovieForm = ({onAddMovie, onClose}) => {

    const [title, setTitle] = useState('')
    // const [mark, setMark] = useState(0)
    const [url, setUrl] = useState('')

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    // const markChangeHandler = (event) => {
    //     setMark(event.target.value)
    // }

    const urlChangeHandler = (event) => {
        setUrl(event.target.value)
    }

  return (
    <form>
        <div>
            <label htmlFor='title'>Название фильма</label>
            <input id='title' type='text' onChange={titleChangeHandler}/>
        </div>
        {/* <div>
            <label>Оценка</label>
            <input onChange={markChangeHandler} type='number'/>
        </div> */}
        <div>
            <label htmlFor='url'>Ссылка на картинку</label>
            <input id='url' onChange={urlChangeHandler} type='text'/>
            <button onClick={(e)=>{
                onAddMovie(title, url)
                e.preventDefault()
            }}>Добавить фильм</button>
            <button onClick={onClose} style={{backgroundColor: 'red'}}>Oтмена</button>
        </div>
    </form>
  )
}

export default MovieForm
