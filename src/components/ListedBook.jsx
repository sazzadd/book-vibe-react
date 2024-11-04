import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../utility/addToDb";

const ListedBook = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);
  return (
    <div>
      <h1>listed book</h1>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read</h2>
          <h2>{readList.length}</h2>
          {readList.map((book) => (
            <div className="bg-[#ffff] text-white p-4 rounded-lg shadow-lg  border border-[#d1cece] flex items-center space-x-4 w-full mx-auto">
              <div className="w-1/4">
                <img
                  src={book.image}
                  alt="Book Cover"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-3/4">
                <h2 className="text-3xl play-font font-semibold text-gray-800">
                  {book.bookName}
                </h2>
                <p className="text-[17px] text-gray-600">{book.author}</p>
                <div className="mt-2">
                  <span className="inline-block bg-green-500 text-xs px-2 py-1 rounded-full mr-2">
                    #Young Adult
                  </span>
                  <span className="inline-block bg-green-500 text-xs px-2 py-1 rounded-full">
                    #Identity
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  <span className="inline-block mr-2">
                    📅 Year of Publishing: {book.yearOfPublishing}
                  </span>
                  <span className="inline-block mr-2">
                    👤 Publisher: {book.publisher}
                  </span>
                  <span>📄 Page {book.totalPages}</span>
                </p>
                <br></br>
                <hr />
                <div className="mt-4 flex space-x-2">
                  <div className="bg-[#328eff33] text-blue-500 text-sm font-semibold px-4 py-2 rounded-full">
                    Category: {book.category}
                  </div>
                  <div className="bg-yellow-500 text-xs font-semibold px-4 py-2 rounded-full">
                    Rating: {book.rating}
                  </div>
                  <button className="bg-green-500 text-xs font-semibold px-4 py-2 rounded-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>wish i read</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
