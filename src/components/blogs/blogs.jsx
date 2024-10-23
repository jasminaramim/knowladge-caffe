import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookMark , hanldeMarkAsRead}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])

    return (
        <div className="md:w-2/3 "> 
            <h1 className="text-2xl mb-2 font-bold">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => 
                <Blog key={blog.id} 
                blog={blog}
                hanldeMarkAsRead={hanldeMarkAsRead}
                handleAddToBookMark ={handleAddToBookMark}> 
                </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func,
    hanldeMarkAsRead:PropTypes.func
}
export default Blogs;