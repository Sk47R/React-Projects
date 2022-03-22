import React, { useEffect, useState } from "react";
import Tours from "./components/Tours";
import { BounceLoader, BeatLoader } from "react-spinners";
import "./App.css";

const App = () => {
  const [tourData, setTourData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const removeTour = (id) => {
    const newTour = tourData.filter((tour) => {
      return id !== tour.id;
    });

    setTourData(newTour);
  };

  const fetchingData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-http-5366c-default-rtdb.firebaseio.com/destinations.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Worng");
      }

      const data = await response.json();
      let loadedTourData = [];
      for (const key in data) {
        // setTourData();
        loadedTourData.push({
          id: key,
          destiny: data[key].destiny,
          image: data[key].image,
          price: data[key].price,
          description: data[key].description,
        });
      }
      setIsLoading(false);
      setTourData(loadedTourData);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading__state">
        <h1>Loading...</h1>
        <BeatLoader color="green" size={30} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error__state">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Tours
        tourData={tourData}
        removeTour={removeTour}
        refresh={fetchingData}
      ></Tours>
    </React.Fragment>
  );
};

export default App;
