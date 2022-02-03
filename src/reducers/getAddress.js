import { LOG_OUT, FETCH_ADDRESS } from "../utils/constants";

const initialState = {
    addresses: null
};

export default function getAddress(state = initialState, action) {
    switch (action.type) {
        case FETCH_ADDRESS: {
            let arr = action.payload;

            let result = arr.map((address) => {
                let objAddress = { name: address, value: address };

                return objAddress;
            });
            
            return {
                ...state,
                addresses: result,
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                addresses: null
            };
        }
        default:
            return state;
    }
}