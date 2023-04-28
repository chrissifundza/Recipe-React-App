import React, { useContext, useEffect } from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/authContext';


const HomePage = () => {
  const {categories, meals, categoryLoading, mealsLoading} = useMealContext();
const navigate = useNavigate();
const {CurrentUser}=useContext(AuthContext)
useEffect(()=>{
  if (CurrentUser===null) navigate("/account")
},[CurrentUser])
  return (
    <>
    <Header />
    <main className='main-content'>
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
    </main>
    </>
   
  )
}

export default HomePage;
