import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, bookId, bookName, author, tags, rating, category } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100  shadow-xl">
        <div className="bg-[#F3F3F3] m-8 rounded-xl">
          <figure className="p-5">
            <img src={image} className="h-[166px]" alt="Shoes" />
          </figure>
        </div>

        <div className="card-body">
          <div>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-sm border border text-[#23BE0A] rounded-2xl font-['Work Sans'] mr-2"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title play-font">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>by : {author}</p>
          <div className="border-t-2 border-dashed b py-2 mt-2"></div>
          <div className="card-actions justify-between">
            <div className="">
              <p>{category}</p>
            </div>
            <div className="">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
