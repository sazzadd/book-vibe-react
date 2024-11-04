import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  // console.log(data.bookName);

  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookId: bookid,
    bookName,
    author,
    tags,
    rating,
    category,
    review,
  } = book;
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  return (
    <div>
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg flex max-w-3xl mx-auto">
        {/* Left Section: Book Cover Image */}
        <div className="w-1/3 flex-shrink-0">
          <img
            src={image}
            alt="kindpng-7318921"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Section: Book Details */}
        <div className="ml-6 w-2/3 work-sans">
          {/* Book Title */}
          <h2 className="text-3xl font-semibold mb-2 play-font">{bookName}</h2>
          <p className="text-gray-400 text-sm">{author}</p>
          <div className="border-t my-3 border"></div>
          <p className="text-gray-400 text-sm mb-4">{category}</p>
          <div className="border-t my-3 border"></div>
          {/* Review Text */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{review}</p>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            {/* <span className="bg-green-600 text-xs px-3 py-1 rounded-full">
              #Young Adult
            </span>
            <span className="bg-green-600 text-xs px-3 py-1 rounded-full">
              #Identity
            </span> */}

            {tags.map((tag, index) => (
              <span
                key={index}
                className="border text-[#23BE0A]  border-gray-500 text-[14px] font-semibold  px-3 py-1 rounded-full"
              >
                # {tag}
              </span>
            ))}
          </div>
          <div className="border-t my-3 border"></div>
          {/* Additional Information */}
          <div className="text-gray-400 text-sm mb-4">
            <p>Number of Pages: 281</p>
            <p>Publisher: J.B Lippincott & Co.</p>
            <p>Year of Publishing: 1960</p>
            <p>Rating: {rating}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline px-4 py-2 rounded-lg"
            >
              Mark as Read
            </button>
            <button className="bg-[#50B1C9] text-white px-4 py-2 rounded-lg">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
