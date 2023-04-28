import React from "react"
import './App.scss';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// pages
import { Home, MealDetails, Error, Category } from "./pages/index";
// components

import Sidebar from "./components/Sidebar/Sidebar";
import LoginRegister from './pages/loggin';
import LandingPage from './pages/landingPage';
import {ThemeProvider} from '@mui/system'
import Profile from './pages/profile';
import theme from './theme';
import Reset from './pages/loggin/reset';
import PasswordChange from './pages/loggin/passwordchange';
import Update from "./pages/loggin/update";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
     
      <Sidebar />
      <Routes>
      <Route path = "/" element = {<LandingPage />} />
        <Route path = "/userhome" element = {<Home />} />
        <Route path = "/account" element={<LoginRegister/>}/>
        <Route path = "/reset" element={<Reset/>}/>
        <Route path = "/update" element={<Update/>}/>
        <Route path = "/passwordchange" element={<PasswordChange/>}/>
        <Route path = "/profile" element ={<Profile/>}/>
        <Route path = "/meal/:id" element = {<MealDetails />} />
        <Route path = "/meal/category/:name" element = {<Category />} />
        <Route path  = "*" element = {<Error />} />
      </Routes>
   
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
