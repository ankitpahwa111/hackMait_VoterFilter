const initState = {
    user: {
        aadhaar: 1234567890,
        voterId: 1234567890,
        otp: 1234
    },
    VotingState: 'input',
    VotingKey: '1234567890',
    authError: null
}
const VoterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PutUser': {
            console.log(action)
            return {
                ...state,
                user: action.user,
                VotingState: 'verification',
                authError: null
            }
        }
        case 'AuthError': {
            return {
                ...state,
                authError: 'Authentication Failed'
            }
        }
        case 'PutVotingKey': {
            return {
                ...state,
                VotingState: 'verified',
                VotingKey: action.key,
                authError: null

            }
        }
        default : return state;
    }
}
export default VoterReducer;