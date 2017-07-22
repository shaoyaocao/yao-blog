import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route } from 'react-router'
import Main from '../layouts/Main'
import Login from '../login'
import NotFound from '../notfound'
import Forgot from '../password'
import Register from '../register'
import Home from '../home'
import LockScreen from '../lockscreen'
import Dashboard from '../dashboard'
import MainView from '../views/Main'
import MinorView from '../views/Minor'

const RouterConfig = [
  { 
  	path: '/main',
  	exact:true,
  	strict:true,
    component: MainView
  },
  { 
  	path: '/minor',
  	exact:true,
  	strict:true,
    component: MinorView
  }
]

const RootRouter=({history})=>(
	<ConnectedRouter history={history} >
		<Switch>
			<Route exact strict path="/" component={Home}/>
			<Route exact strict path="/login" component={Login}/>
			<Route exact strict path="/forgot" component={Forgot}/>
			<Route exact strict path="/register" component={Register}/>
			<Route exact strict path="/lockscreen" component={LockScreen}/>
			<Route exact strict path="/dashboard" component={Dashboard}/>
			<Route exact strict path="/main" component={Main}/>
			<Route exact strict path="/minor" component={Main}/>
			<Route component={NotFound}/>
		</Switch>
	</ConnectedRouter>
)








export {RouterConfig,RootRouter}