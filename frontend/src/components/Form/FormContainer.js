import React, { Component } from 'react';
import './FormContainer.css';

class FormContainer extends Component {


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