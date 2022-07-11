import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert'
// import TodoListItem from './Components/TodoListItem';
import TodoList from './Components/TodoList';

function createBulkTodos(){
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      text: 
        <div>
          <span className="cd2 co31">할</span> <span className="cd2 co31">일</span>
        </div>,
      checked: false
    });
    
  }; //for

  return array;
  
}; //createBulkTodos()


const App = () => {
  const [todos, setTodos] = useState(createBulkTodos)

  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos => todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    []); //onInsert

    const onRemove = useCallback(
      id => {
      setTodos(todos => todos.filter(todo => todo.id !==id));
    },[]); //onRemove

    const onToggle = useCallback(
      id => {
        setTodos(
          todos => todos.map(
            todo => todo.id === id ? { ...todo, checked: !todo.checked} : todo),
        );
      }, []); // onToggle


  return(
    <TodoTemplate>

      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />

    </TodoTemplate>
      
  );//return

};//App


export default App;
