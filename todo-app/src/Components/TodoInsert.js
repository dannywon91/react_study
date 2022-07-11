import React, {useState, useCallback} from "react";
import {MdAddBox} from 'react-icons/md';
import './TodoInsert.scss';


//새로운 항목을 입력하고 추가할 수 있는 컴포넌트.
//state를 통해 인풋의 상태를 관리한다.

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState("");

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(""); //value값 초기화

            //submit 이벤트는 브라우저에서 새로고침을 발생시킴
            // 이를 방지하기 위해 e.preventDefault();를 호출하여준다
            e.preventDefault();
        }, [onInsert, value]);//onSubmit

    
    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange} />
            
            <button type="submit">
                <MdAddBox />
            </button>
            
        </form>
    );
};



export default TodoInsert;