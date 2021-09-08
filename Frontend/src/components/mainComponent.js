import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

//Importando componentes
import Student from './studentComponent';
import Teacher from './teacherComponent';
import Admin from './adminComponent';
import Header from './headerComponent';
import HomePage from './homepageComponent';
import AboutUs from './aboutusComponent';
import Footer  from './footerComponent';



class MainComponent extends Component {
  	constructor(props){
		  super(props)
	  }
	render() {
    	return (
      		<div> 
				<Header/>
				<Route path="/" exact component={HomePage}/>
				<Route path="/admin" component={Admin}/>
				<Route path="/student" component={Student}/>
				<Route path="/teacher" component={Teacher}/>
				<Route path="/aboutus" component={AboutUs}/>
        <Footer/>
      		</div>
    	);
  	};
}

export default MainComponent;