import React, { useState } from 'react';

const HighOrderWorkItem = (Component) => (props) =>
  !props.todos ? null : <Component {...props} />;

function WorkItem({ todos }) {
  return (
    <>
      {todos.map((ele) => (
        <div key={ele.id}>
          <h1>{ele.task}</h1>
          <span>{ele.desc}</span>
        </div>
      ))}
    </>
  );
}
const TodoswithCheck = HighOrderWorkItem(WorkItem);

function Todo() {
  const [item, setItem] = useState([
    { id: 1, task: 'workout', desc: 'excercise' },
    { id: 2, task: 'swim', desc: 'water' },
    { id: 3, task: 'eat', desc: 'healthy' },
    { id: 4, task: 'walk', desc: 'run' },
  ]);
  return (
    <div>
      {/* <WorkItem todos={item} /> */}
      <TodoswithCheck todos={item} />
    </div>
  );
}

export default Todo;
