import React, { Fragment, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const [showRoute, setShowRoute] = useState(true);
  const params = useParams();
  const quote = Dummy_Quotes.find((quote) => quote.id === params.quoteId);

  // getting the quote having id equal to id of url
  if (!quote) {
    return <p>No quote Found</p>;
  }
  const changeRouteHandler = () => {
    setShowRoute((prev) => {
      return !prev;
    });
  };

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      {showRoute && (
        <div className="centered">
          <Link
            className="btn--flat"
            to={`/quotes/${params.quoteId}/comments`}
            onClick={changeRouteHandler}
          >
            Load Comments
          </Link>
        </div>
      )}

      <Outlet></Outlet>
    </Fragment>
  );
};

export default QuoteDetail;
