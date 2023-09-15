import React, { useState } from 'react';
import styles from "./module.css";

const wrapper = {
  width: '100%',
  height: '100%',
  padding: '23px',
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center', 
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  margin: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#89A4F3',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

function TodoItem({ todo, onToggle }) {
  // 스타일 객체를 정의합니다.
  const itemStyle = {
    textDecoration: todo.done ? 'line-through' : 'none',
  };

  return (
    <li
      style={itemStyle} // 인라인 스타일을 적용합니다.
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  return (
    <div style={wrapper}>
      <form onSubmit={onSubmit}>
        <input
          style={inputStyle} 
          // className={styles.input}
          value={text}
          placeholder="할 일을 입력하세요"
          onChange={onChange}
        />
        <button
          style={buttonStyle} 
          type="submit"
        >
          등록
        </button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
