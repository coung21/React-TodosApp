import React from 'react'
import Task from './Task'
import AddForm from './AddForm';

function TasksList() {
  return (
    <ul className='py-10'>
      <AddForm />
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </ul>
  );
}

export default TasksList