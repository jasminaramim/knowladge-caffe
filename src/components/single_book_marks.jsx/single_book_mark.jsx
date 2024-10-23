
import PropTypes from "prop-types";

const Single_book_mark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className="bg-slate-300 p-4 rounded m-4">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};
Single_book_mark.PropTypes={
    bookmark:PropTypes.object
}
export default Single_book_mark;