import React from "react";
import QuoteList from "../quotes/QuoteList";
const Dummy_Quotes = [
  {
    id: "q1",
    author: "Pablo",
    text: "Learning React is Fun!",
  },
  {
    id: "q2",
    author: "Picaso",
    text: "Learning Art is Fun!",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={Dummy_Quotes}></QuoteList>;
};

export default AllQuotes;
