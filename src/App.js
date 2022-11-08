import React from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { productsInputs, userInputs } from './formSource';
import "./style/dark.scss";
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";


function App() {

const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark": "app"}>
<BrowserRouter>
<Routes>
<Route path="/">

  <Route index element={<Home />} />
  <Route path="login" element={<Login/>}/>

        <Route path="users">
        <Route index element={<List path="/users/test" pathNew="/users/new"/>}/>
        <Route path=":userId" element={<Single/>}/>
        <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
        </Route>
        <Route path="products">
        <Route index element={<List path="/products/test" pathNew="/products/new"/>}/>
        <Route path=":productId" element={<Single/>}/>
        <Route path="new" element={<New inputs={productsInputs} title="Add New Product"/>}/>
        </Route>

  </Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;