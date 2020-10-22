import React, { Component } from 'react';
import RosterSlotCard from './RosterSlotCard';
import './Roster.css';

class Roster extends Component {


    renderRosterSlots = () => {
        const rosterData = ["Derek Carr", "Josh Jacobs", "Aaron Rodgers", "Russel Wilson", "Derek Carr", "Josh Jacobs", "Aaron Rodgers", "Russel Wilson"]

        return rosterData.map((item, i) => {
            return (
                <div key={i} className="row">
                    <div className="col-12">
                        <RosterSlotCard name={item} i={i} />    
                    </div>
                    
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container roster-container">
                {this.renderRosterSlots()}
            </div>
        )
    }
}

export default Roster;
