import React, { Component } from 'react';
import './FormContainer.css';

class FormContainer extends Component {

    // componentDidMount() {
    //     // More To Come
    //     // Load up all the weekly injuries using sportsradar
    //     // To check if your player is on the list
    // }


    render() {
        return (
            <div className="container player-form-container">
                <h3 className="form-title">Search For Player</h3>
                <form>
                    <div className="form-group row">
                        <div className="col-6">
                            <label forHTML="playerName">Player Name</label>
                            <input className="form-control" type="text" name="playerName" id="playerName" />
                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormContainer;