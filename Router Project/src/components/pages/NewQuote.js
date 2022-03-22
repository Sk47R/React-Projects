import React from "react";
import QuoteForm from "../quotes/QuoteForm";
import { useNavigate } from "react-router-dom";

const NewQuote = () => {
  const navigate = useNavigate();
  // navigate object that can be used to trigger some history changing action
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    // navigating programmatically to quotes page
    navigate("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};

export default NewQuote;
