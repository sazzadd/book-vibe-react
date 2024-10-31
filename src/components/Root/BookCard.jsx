import React from "react";

const BookCard = ({ book }) => {
  const object = {
    bookId: 1,
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    review:
      "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 192,
    rating: 4.5,
    category: "Classic",
    tags: ["Fiction", "Romance"],
    publisher: "Scribner",
    yearOfPublishing: 1925,
  };
  const { image, bookId, bookName, author, tags, rating } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
