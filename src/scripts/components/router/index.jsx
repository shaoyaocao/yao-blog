import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route } from 'react-router'
import Main from '../layouts/Main'
import Login from '../login'
import HomeArticle from '../article'
import Message from '../article/message'
import NotFound from '../notfound'
import Forgot from '../password'
import Register from '../register'
import Home from '../home'
import LockScreen from '../lockscreen'
import MainView from '../views/Main'
import MinorView from '../views/Minor'
import ArticleView from '../views/Article'

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
  },
  { 
  	path: '/article',
  	exact:true,
  	strict:true,
		component: ArticleView
  },
]

const RootRouter=({history})=>(
	<ConnectedRouter history={history} >
		<Switch>
			<Route exact strict path="/" component={Home}/>
			<Route exact strict path="/login" component={Login}/>
			<Route exact strict path="/read/:id" component={HomeArticle}/>
			{/* <Route exact strict path="/forgot" component={Forgot}/> 未开放 */}
			{/* <Route exact strict path="/register" component={Register} 未开放/> */}
			{/* <Route exact strict path="/lockscreen" component={LockScreen} 未开放/> */}
			<Route exact strict path="/main" component={Main}/>
			<Route exact strict path="/minor" component={Main}/>
			<Route exact strict path="/article" component={Main}/>
			<Route component={NotFound}/>
		</Switch>
	</ConnectedRouter>
)








export {RouterConfig,RootRouter}