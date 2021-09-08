import React, { Component } from 'react'

class HomepageComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div class="container">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                     Default checkbox
                    </label>
                </div>
                <div class="row">
                    <div class="col-sm-8">col-sm-8</div>
                    <div class="col-sm-4">col-sm-4</div>
                    
                </div>
                
                <div class="row">
                    <div class="col-sm">
                        <button className="btn btn-default" style={{backgroundColor: '#1E6738'}}
                            href={"https://www.youtube.com/watch?v=RW75cGvO5xY"}>
                            <img src= "https://q10storage.blob.core.windows.net/q10academico-public/057125456558/057125456558.png" width="100" height="100" /> Ingresa
                        </button>
                    </div>
                    <div class="col-sm">col-sm</div>
                    <div class="col-sm">col-sm</div>
                </div>            
            </div>
    )
  }
}

export default HomepageComponent