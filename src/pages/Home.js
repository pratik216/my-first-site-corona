import React, { Component } from 'react';
import Navbar from '../component/Navbar.js';
import Footer from '../component/Footer.js';
import { withRouter } from 'react-router-dom';

class Home extends Component{
    callabout=()=>{
        
        this.props.history.push('/About')
        console.log(this)
    }
render(){
    return(
<div>
    <Navbar/>
    <div className="container">
        <h1>Welcome To The Home Page</h1>
        <p>This is Hoome page of our first react application not exactly first but first is the sense of complete first react application</p>
        <button onClick={this.callabout}>About</button>
    </div>
    <Footer/>
</div>
    );
}
}
 export default withRouter(Home)