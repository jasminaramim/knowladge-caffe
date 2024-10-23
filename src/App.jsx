

import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/blogs'
import BookMarks from './components/bookMark/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const hanldeMarkAsRead = time =>{
 setReadingTime(readingTime + time);

  }

  const handleAddToBookMark = blog =>{
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks);
  }

  return (
    <div>
     
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto items-center '> 
      <Blogs hanldeMarkAsRead={hanldeMarkAsRead} handleAddToBookMark={handleAddToBookMark} ></Blogs>
      <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
    </div>
    </div>
  )
}

export default App
