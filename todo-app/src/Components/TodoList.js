
import React, { useCallback } from 'react';
// import {List} from 'react-virtualized'
import TodoListItem from './TodoListItem.js';
import './TodoList.scss';




//todos 배열을 props로 받아온 후, 이를 배열 내장함수 map을 사용하여
//여러개의 TodoListItem 컴포넌트로 변환하여 보여줌

const TodoList = ({todos, onRemove, onToggle}) => {
    // const rowRenderer = useCallback(
    //     ({index, key}) => {
    //         const todo = todos[index];
    //         return(
    //             <TodoListItem 
    //                 todo = { todo }
    //                 key = {key}
    //                 onRemove = {onRemove}
    //                 onToggle = {onToggle}
    //                 />
    //         ); //return
    //     }, [onRemove, onToggle, todos]
    // );//rowRenderer


    return(
        // <List
        //     className="TodoList"
        //     width={512} //전체크기
        //     height={513} //전체높이
        //     rowCount={todos.length} //항목개수
        //     rowHeight={57} //항목 높이
        //     rowRenderer={rowRenderer} //항목을 랜더링할때 쓰는 함수
        //     list={todos} //배열
        //     style={{outline: 'none'}} //List에 기본 적용되는 outline 스타일 제거
        //     />
        <div className="TodoList">
            {todos.map( todo => (
                <TodoListItem 
                    todo={ todo } 
                    key={ todo.id }
                    onRemove={onRemove} 
                    onToggle={onToggle} />
            ))}
        </div>
    );//return
};

export default React.memo(TodoList);