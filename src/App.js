// import React from "react";
import Header from './components/Header'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'



const App = () => {
    const [tasks, setTasks] = useState(
[
    {
        id: 1,
        text: 'Shopping',
        day: 'Feb 1 th at 10:00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 5 th at 11:00am',
        reminder: true,
    },
      {
        id: 3,
        text: 'Walk dog',
        day: 'Feb 6 th at 10:00pm',
        reminder: false,
    },
])
  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id);
      setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
        setTasks(tasks.map((task) =>
            task.id == id ? { ...task, reminder: !task.reminder } : task))
        console.log(id)
  }

  return (
    <div className="container">
      <Header />
      <AddTask/>
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}
//
// class App extends React.Component {
//     render(){
//         return <h1>Hello from a class</h1>
//     }
// }

export default App;
