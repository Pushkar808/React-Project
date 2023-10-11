import InitialMessageData from '../data/message.json';

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_CHAT":
            console.log(state)
            return {
                ...state,
                chat: [
                    ...state,
                    action.payload
                ]
            }
        default:
            return state;
    }
}


export default cartReducer;