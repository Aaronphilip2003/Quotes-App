import axios from "axios";
import { React, useState } from "react";
import quotes_img from "../images/quotes_img.webp"

export default function Card() {

    const [quote, setQuote] = useState("");

    const getQuote = () => {
        axios
            .get("https://api.quotable.io/random")
            .then((res) => {
                setQuote(res.data.content)
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div class="flex justify-center mt-32">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src={quotes_img} alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Quotes ❤️</h5>
                    <p class="text-gray-700 text-base mb-4">
                        {quote ? <h1 className="font-bold italic">{quote}</h1> : null}
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={getQuote}>New Quote</button>
                </div>
            </div>
        </div>
    )
}
