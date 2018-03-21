import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from '../reducer/main-reducer'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const store = createStore(mainReducer)

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/' componet={}></Route>

				<Redirect to=''></Redirect>
			</Switch>
		</BrowserRouter>
	</Provider>
),document.getElementById('root'));
