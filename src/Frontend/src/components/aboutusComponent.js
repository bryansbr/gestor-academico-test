import React, { Component } from 'react'

//Importamos axios para hacer peticiones a la apirest
import axios from 'axios';

class AboutusComponent extends Component {
	constructor(props){
		super(props);
		this.state=({
			role: 
			"profesor"
		})
	}



  	render() {
    	return (
      		<div>
        		this is about component
     		</div>
   		);
  	};
}

export default AboutusComponent;