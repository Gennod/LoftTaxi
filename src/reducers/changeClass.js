const initialState = {
    activeLink: "map"
};

export default function changeClass(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_CLASS": {
            return {
                ...state,
                activeLink: action.clazz
            }
        }
        case "LOG_OUT": {
            return {
                ...state,
                activeLink: "map"
            };
        }
        default:
            return state;
    }
}