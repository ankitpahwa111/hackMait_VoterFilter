import axios from 'axios'
export const PutVoter = (voter) => {
    return (dispatch, getState) => {
        axios.post('',{
            user : {
                aadhaar : voter.aadhaar,
                voterid : voter.VoterId
            }
        }).then((voter) => {
            dispatch({ type: 'PutUser', user: voter })
        }).catch((err) => {
            dispatch({ type: 'AuthError' })
        })

    }
}
export const PutVotingKey = () => {
    return (dispatch, getState) => {
        const { user } = getState();
        axios.post('',{
            user : {
                aadhaar :  user.aadhaar,
                voterid :  user.voterId
            }
        }).then((key) => {
            dispatch({ type: 'PutVotingKey', key: key })
        })
    }
}
export default { PutVoter, PutVotingKey }  