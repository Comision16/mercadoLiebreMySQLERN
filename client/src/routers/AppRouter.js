import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { ProductDetail } from '../pages/ProductDetail';
import { Profile } from '../pages/Profile';
import { Register } from '../pages/Register';
import { Root } from './Root';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path='/' element={<Root/>}
        >
            <Route path='/' element={<Home/>}/>
            <Route path='/users/login' element={<Login/>}/>
            <Route path='/users/register' element={<Register/>}/>
            <Route path='/products/detail/:id' element={<ProductDetail/>}/>
            <Route path='/users/profile' element={<Profile/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
    )
)

export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
