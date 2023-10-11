export const addItemToCart = (message, userId, from) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_CHAT",
            payload: {
                message: message,
                from: from
            }
        });
    }
}
