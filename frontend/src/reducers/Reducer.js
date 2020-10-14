
const defaultRoster = {
    qb: "QB",
    rb1: "RB1",
    rb2: "RB2",
    wr1: "WR1",
    wr2: "WR2",
    te: "TE",
    flex: "Flex",
    def: "Defense",
    k: "Kicker"
}

function reducer(state = {roster: defaultRoster}, action) {
    switch(action.type) {
        case 'ADD_PLAYER':
            // More To Come
        default:
            return {
                ...state
            }
    }
}