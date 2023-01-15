import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Home from './Components/Home';
import Listings from './Components/Listings';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import { CssBaseline } from '@mui/material';
import Header from './Components/Header';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useImmerReducer } from "use-immer";

import DispatchContext from './Contexts/DispatchContext';
import StateContext from './Contexts/StateContext';

function App() {

  const initialState = {
    userUsername: localStorage.getItem("theUserUsername"),
    userEmail: localStorage.getItem("theUserEmail"),
    userId: localStorage.getItem("theUserId"),
    userToken: localStorage.getItem("theUserToken"),
    userIsLogged: localStorage.getItem("theUserUsername") ? true : false,
  };

  function ReducerFuction(draft, action) {
    switch (action.type) {
      case "catchToken":
        draft.userToken = action.tokenValue;
        break;
      case "userSignsIn":
        draft.userUsername = action.usernameInfo;
        draft.userEmail = action.emailInfo;
        draft.userId = action.IdInfo;
        draft.userIsLogged = true;
        break;

      case "logout":
        draft.userIsLogged = false;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

  useEffect(() => {
    if (state.userIsLogged) {
      localStorage.setItem("theUserUsername", state.userUsername);
      localStorage.setItem("theUserEmail", state.userEmail);
      localStorage.setItem("theUserId", state.userId);
      localStorage.setItem("theUserToken", state.userToken);
    } else {
      localStorage.removeItem("theUserUsername");
      localStorage.removeItem("theUserEmail");
      localStorage.removeItem("theUserId");
      localStorage.removeItem("theUserToken");
    }
  }, [state.userIsLogged]);

  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <StyledEngineProvider injectFirst>
            <BrowserRouter>
              <CssBaseline />
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/listings" element={<Listings />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </StyledEngineProvider>
        </DispatchContext.Provider>
      </StateContext.Provider>

    </>
  );
}

export default App;
