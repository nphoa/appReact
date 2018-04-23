import React, { Component } from 'react';
import Dashboard from '../src/Pages/Dashboard';
import NotFound from '../src/Pages/NotFound';
import ProductPage from '../src/Pages/Product.Page';
import AddProductPage from '../src/Pages/AddProduct.Page';
const routers = [
	{
		path: '/',
		exact: true,
		main: () => <Dashboard />	
	},
	{
		path: '/product',
		exact: true,
		main: () => <ProductPage />
	},
	{
		path: '/product/add',
		exact: true,
		main: () => <AddProductPage />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound />	
	}

];

export default routers;