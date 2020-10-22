import React from 'react';
import './RosterSlotCard.css';

const RosterSlotCard = (props) => {

    return (
            <div className="container roster-slot-card-row">
                <div className="row">
                    <div className="col-6 roster-slot-name">
                        {props.name}
                    </div>
                    <div className="col-6 roster-slot-info">
                        player {props.i + 1}
                    </div>
                </div>
                
            </div>
    )

}

export default RosterSlotCard;