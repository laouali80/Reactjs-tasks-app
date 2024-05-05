import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // show task add button state
  const [showAddTask, setShowAddTask] = useState(false);

  // tasks state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at Scholl",
      day: "Feb 25th at 5:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 4th at 3:30pm",
      reminder: false,
    },
  ]);

  // delete Task
  const deleteTask = (id) => {
    // console.log(id);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    // creating an id property and copy everything from task object
    const newTask = { id, ...task };

    //copying all the tasks object and adding the new task
    setTasks([...tasks, newTask]);
    console.log(task);
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Add a Task to Track"
      )}
    </div>
  );
}

// class component
// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <Header />
//       </div>
//     );
//   }
// }

export default App;
