const FETCH_ADDRESS = "FETCH_ADDRESS";
const LOG_OUT = "LOG_OUT";

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