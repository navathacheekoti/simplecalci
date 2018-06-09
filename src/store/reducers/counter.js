import {updateObject} from '../utility';
import {INCREMENT,DEC,ADD5,SUB5,MUL5,DIV5,CLEAR,REM3}  from '../actions/actions';
const initialState = {
    counter: 0,

};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };

        case DEC:
            return {
                ...state,
                counter: state.counter - 1
            };

        case ADD5:
            return {
                ...state,
                counter: state.counter + action.value
            };

        case SUB5:
            return {
                ...state,
                counter: state.counter - action.value
            };

        case MUL5:
            return {
                ...state,
                counter: state.counter * 5
            };

        case DIV5:
            return {
                ...state,
                counter: state.counter / 5
            };

        case REM3:
            return updateObject(state,{counter: state.counter % 3})
            // return {
//     ...state,
//     counter: state.counter % 3
// };


        case CLEAR:
            return {
                ...state,
                counter:0,
                // counter: state.counter-state.counter,
            };

    }
    return state;
};


export default CounterReducer;
