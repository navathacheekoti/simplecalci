
import {CLEAR,STORE_RESULT,DELETE_RESULT}  from '../actions/actions';
const initialState = {
    result: []
};

const ResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR:
            return {
                ...state,
                result:[]
                // result:state.result.filter(res=>null)
            };
        case STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({
                    id: new Date(),
                    value: action.result
                })
            };
        case DELETE_RESULT:
            return {
                ...state,
                result:state.result.filter(res => res.id !== action.resElId)
            };
    }
    return state;
};


export default ResultReducer;
