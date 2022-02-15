import React from 'react'

export default function Todo({todo}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'start',
    }}>
      <ul style={{
        width: '20%',
        backgroundColor: '#f4f4f4',
        padding: '10px',
        listStyle: 'none',
        textDecoration: todo.completed ? 'strike' : 'none',
        cursor: !todo.completed ? 'pointer' : 'default',
      }}
      onClick={(e) => { 
        todo.completed = !todo.completed;
        todo.completed ? e.target.style.pointerEvents = 'pointer' : e.target.style.pointerEvents = 'default';
        console.log();
      }} >
        <li style={{display: 'flex', justifyContent: 'space-between'}}>
          {todo.completed ? <del>{todo.name}</del> : <span>{todo.name}</span>}
          <button style={{
            border: 'none',
            backgroundColor: 'none',
            cursor: !todo.completed ? 'pointer' : 'default',
          }} disabled>{!todo.disabled ? 'v' : 'x'}</button></li>
      </ul>
    </div>
  )
}
