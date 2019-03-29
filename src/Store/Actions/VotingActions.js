import axios from 'axios'
export const PutVoter = (voter) => {
    return (dispatch, getState) => {
        const dummyVoter = {
            aadhaar : 'voter.aadhaar',
            voterid : 'voter.VoterId'
        }
        // axios.post('',{
        //     user : {
        //         aadhaar : voter.aadhaar,
        //         voterid : voter.VoterId
        //     }
        // }).then((dummyVoter) => {
            //dispatch({ type: 'PutUser', dummyVoter })
        // }).catch((err) => {
        //     dispatch({ type: 'AuthError' })
        // })

    }
}
export const PutVotingKey = () => {
    return (dispatch, getState) => {
        const { user } = getState();
        const dummyKey = '123567899'
        axios.post('',{
            user : {
                aadhaar :  user.aadhaar,
                voterid :  user.voterId
            }
        }).then((dummyKey) => {
            dispatch({ type: 'PutVotingKey', key: dummyKey })
        })
    }
}
export default { PutVoter, PutVotingKey }  