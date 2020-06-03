export default(state = [], action) => {
    switch(action.type) {
        case "FETCH_RANDOM_IMAGE":
            return [...state, action.payload]
        default:
            return state;
    }
}