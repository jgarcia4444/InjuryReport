import React, { Component } from 'react';
import Roster from '../Roster/Roster';

class Home extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <Roster />
                </div>
            </div>
        );
    }
}

export default Home;