import React, { Component } from 'react';
import './FormContainer.css';

class FormContainer extends Component {

    state = {
        playerPositions: ["QB", "RB", "WR", "TE", "DEF", "K"]
    }

    // componentDidMount() {
    //     // More To Come
    //     // Load up all the weekly injuries using sportsradar
    //     // To check if your player is on the list
    // }

    renderPositionOptions = () => {
        return this.state.playerPositions.map(position => <option value={position}>{position}</option>)
    }


    render() {
        return (
            <div className="container player-form-container">
                <h3 className="form-title">Search For Player</h3>
                <form>
                    <div className="form-group row">
                        <div className="col-6">
                            <label forHTML="teamName">Team City</label>
                            <select className="form-control" name="playerName" id="playerName" >
                                <option>LV</option>
                                <option>SEA</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <label forHTML="position">Player Position</label>
                            <select className="form-control" id="position" name="position">
                                {this.renderPositionOptions()}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormContainer;