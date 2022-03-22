import { Routes, Route, Navigate } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function App() {
  const params = useParams();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes"></Navigate>}></Route>
        <Route path="/quotes" element={<AllQuotes></AllQuotes>}></Route>
        <Route path="/quotes/:quoteId" element={<QuoteDetail></QuoteDetail>}>
          <Route
            path="/quotes/:quoteId/comments"
            element={<Comments></Comments>}
          ></Route>
        </Route>
        {/* this :quoteId is to render the detail page of the quotes */}
        <Route path="/new-quote" element={<NewQuote></NewQuote>}></Route>
        {/* for error path */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
        {/*  here "*" tells that any url should match this route */}
      </Routes>
    </Layout>
  );
}

export default App;
