import InitialMessageData from '../data/message.json';

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_CHAT":
            console.log(action.payload)
            InitialMessageData[state?.payload?.userId].push=(state?.payload?.message);
            console.log(InitialMessageData[state?.payload?.userId])
            return {
                chat: [
                    action.payload
                ]
            }
        default:
            return state;
    }
}


export default cartReducer;