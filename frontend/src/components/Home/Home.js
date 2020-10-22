import React, { Component } from 'react';
import Roster from '../Roster/Roster';
import FormContainer from '../Form/FormContainer'
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
                    <div className="container main-container">
                        <div className="row">
                            <div className="col-4">
                                <Roster />
                            </div>
                            <div className="col-8">
                                <FormContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;