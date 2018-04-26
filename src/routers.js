import React, { Component } from 'react';
import Dashboard from '../src/Pages/Dashboard';
import NotFound from '../src/Pages/NotFound';
import ProductPage from '../src/Pages/Product.Page';
import AddProductPage from '../src/Pages/AddProduct.Page';
import PlanPage from '../src/Pages/Plan.Page';
import AddPlan from '../src/Pages/AddPlan.Page';
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
		path: '/plan',
		exact: true,
		main: () => <PlanPage />
	},
	{
		path: '/plan/add',
		exact: true,
		main: ({history}) => <AddPlan history = {history}/>
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound />	
	}

];

export default routers;