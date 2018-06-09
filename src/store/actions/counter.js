import {INCREMENT,DEC,ADD5,SUB5,MUL5,DIV5,CLEAR,REM3}  from './actions';
export const increment = () => {
    return {
        type: INCREMENT
    };
};
export const dec = () => {
    return {
        type: DEC
    };
};
export const add5 = (value) => {
    return {
        type: ADD5,
        value:value
    };
};
export const sub5 = (value) => {
    return {
        type: SUB5,
        value:value

    };
};
export const mul5 = () => {
    return {
        type: MUL5
    };
};
export const div5 = () => {
    return {
        type: DIV5
    };
};
export const rem3 = () => {
    return {
        type: REM3
    };
};
export const clear = () => {
    return {
        type: CLEAR
    };
};
