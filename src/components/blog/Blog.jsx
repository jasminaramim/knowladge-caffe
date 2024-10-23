import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa'

const Blog = ({blog ,handleAddToBookMark,hanldeMarkAsRead}) => {
    const { title,cover,img,author,reading_time,posted_date,hashtag, }= blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8" src={cover} alt={`Cover pic of the title`} />
            <div className="flex justify-between mb-4">
                <div  className="flex gap-3">
                    <img className="w-14 rounded-full" src={img} alt="" />
                    <div>
                        <h3 className="text-xl font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookMark(blog)} 
                    className="ml-2 mt-2 "> <FaBookmark></FaBookmark> </button>
                    
                </div>
            </div>
            <h2 className="text-3xl ">{title}</h2>
            <p>
                {
                    hashtag
                }
            </p>
            <button onClick={()=> hanldeMarkAsRead (reading_time)} className="text-blue-600 font-bold underline"> Mark as read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func
}

export default Blog;