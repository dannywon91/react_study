

import {createAction, handleActions} from 'redux-actions';


//액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';




//액션 생성함수 정의
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//1초뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => dispatch => {
    setTimeout(
        () => {
        dispatch(increase());
    }, 1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

const initialState = 0;
//초기상태 정의




//리듀서 작성
const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    }, initialState
);

export default counter;