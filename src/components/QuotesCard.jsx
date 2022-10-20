// import { React, useState } from "react";
// import { Text } from "@nextui-org/react";
// import axios from "axios";
// import { Button } from "@nextui-org/react";

// export default function QuotesCard() {


//     const [quote, setQuote] = useState("");

//     const getQuote = () => {
//         axios
//             .get("https://api.quotable.io/random")
//             .then((res) => {
//                 setQuote(res.data.content)
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
//     return (
//         <div className="">
//             <Button className="left-0">
//                 <div className="hover:cursor-pointer font-bold color-white" onClick={getQuote}>
//                     New Quote!
//                 </div>
//             </Button>
//             <div className="left-0">
//                 {quote ? <h1 className="font-bold italic">{quote}</h1> : null}
//             </div>


//         </div>
//     );
// }