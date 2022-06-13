import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import CrudService from "./services/CrudService";
import "./App.css";
import UsersList from "./components/UsersList";
import HomePage from "./components/HomePage";

// exports context variable to the app
export const ReverseContext = React.createContext();
//const LOCAL_STORAGE_KEY = "schoolsoft.clicks";

/* 
En väldigt enkel applikation.
Men jag använder mig av så mycket olika tekniker i React för att hantera datan som möjligt.
Som bland annat useContext/useState/useEffect/Routing/useLocation/Props/Link/ApiService/Localstorage/olika typer av funktioner/Css och Flexbox.
Tryck på Reverso knappen för att vända på text.
 */

function App() {
  // state variables
  const [usersList, setUsersList] = useState();
  const [reversedUsersList, setReversedUsersList] = useState();
  const [reverse, setReverse] = useState(false);

  /*  // fetches from local storage
  useEffect(() => {
    const storedClicks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedClicks) setClickCounter(storedClicks);
  });

  // saves local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(clickCounter));
  }, [clickCounter]); 
  */

  //  Gets Users from api
  useEffect(() => {
    CrudService.getUsers().then(
      (response) => {
        setUsersList(response.data);
        console.log("its working");
      },
      (error) => {
        const _questions =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setUsersList(_questions);
        console.log("its not working :(");
      }
    );
  }, []);

  // gets users with reversed firstnames from api
  useEffect(() => {
    CrudService.getUsersWithReversedNames().then(
      (response) => {
        setReversedUsersList(response.data);
        console.log("its working");
      },
      (error) => {
        const _questions =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setReversedUsersList(_questions);
        console.log("its not working :(");
      }
    );
  }, []);

  return (
    <div className="App">
      {/* Wraps components who are gonna use context variable */}
      <ReverseContext.Provider value={reverse}>
        <button
          className="userListReverseButton"
          onClick={() => setReverse(!reverse)}
        >
          Reverso!
        </button>

        <div className="">
          {/* Routes users to diffrent pages */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/userslist"
              element={
                <UsersList
                  //sending variables as props
                  users={usersList}
                  reversedUsers={reversedUsersList}
                />
              }
            />
          </Routes>
        </div>
      </ReverseContext.Provider>
    </div>
  );
}

export default App;
