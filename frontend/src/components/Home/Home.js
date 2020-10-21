import React, { Component } from 'react';
import Roster from '../Roster/Roster';
import './Home.css'

class Home extends Component {


    render() {
        return (
            <div className="container">
                <div className="row title">
                    <div className="col-12">
                        <h1>Injury Report</h1>
                    </div>
                </div>
                <div className="row">
                    <Roster />
                </div>
            </div>
        );
    }
}

export default Home;