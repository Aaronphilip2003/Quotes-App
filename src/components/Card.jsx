import axios from "axios";
import { React, useState } from "react";
import quotes_img from "../images/quotes_img.webp";

export default function Card() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div className="flex justify-center mt-12">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img className="rounded-t-lg" src={quotes_img} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Quotes ❤️</h5>
          <p className="text-gray-700 text-base mb-4">
            {quote ? (
              <h1 className="font-bold italic">{quote}</h1>
            ) : null}
            ---------------------------------------------
            {author ? (
              <h2 className="font-bold italic">{author}</h2>
            ) : null}
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={getQuote}
          >
            New Quote
          </button>
        </div>
      </div>
   </div>
   )
}