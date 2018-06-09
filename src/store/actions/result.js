import {STORE_RESULT,DELETE_RESULT}  from './actions';

export const saveResult=(result)=>{
    return {
        type: STORE_RESULT,
        result:result
    };
}
export const storeResult = (result) => {
    return (dispatch,getState)=> {
        setTimeout(() => {
            const oldCount=getState().ctr.counter;
            console.log(oldCount);
            dispatch(saveResult(result))
        },500)
    }



};
export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resElId:id
    };
};
