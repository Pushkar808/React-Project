export const addItemToCart = (message, userId) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_CHAT",
            payload: {
                message: message,
                userId:userId
            }
        });
    }
}
