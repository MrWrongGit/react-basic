import React from 'react';
import ReactDOM from 'react-dom';

//store middleware
import { createStore, applyMiddleware, compose } from 'redux';
//middleware for async
import thunk from 'redux-thunk'

//router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Provider } from 'react-redux';
import { mainReducer } from '../reducer/main-reducer'

const store = createStore(mainReducer, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

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
