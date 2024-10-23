
import PropTypes from 'prop-types';
import Single_book_mark from '../single_book_marks.jsx/single_book_mark';

const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className=" text-xl bg-slate-400 p-4 rounded-lg font-bold mt-5 ml-3 mb-[2950px] ">
            <div className='bg-slate-400'>
                <h3>Reading Time : {readingTime} minutes</h3>
            </div>
            <h2>Book Marked blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Single_book_mark key={bookmark.id} bookmark={bookmark}></Single_book_mark>)
            }
            
        </div>
    );
};
BookMarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;