/*import React, { Component } from 'react';
import Navbar from '../component/Navbar.js';
import Footer from '../component/Footer.js'

class About extends Component {
    rende() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h2>This is About page</h2>
                    <p>About page is about ghe all the instruction regarding this website or can we say mini website</p>
                </div>
                <Footer/>
            </div>
            
        );
    }
}

export default About*/



import React, { Component } from 'react';
import Navbar from '../component/Navbar.js';
import Footer from '../component/Footer.js'

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h2>This is About page</h2>
                    <p>About page is about ghe all the instruction regarding this website or can we say mini website</p>
                </div>
                <Footer />
            </div>

        );
    }
}
export default About