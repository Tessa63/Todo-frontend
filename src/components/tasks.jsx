import { useEffect, useState } from "react";
import Card from "./Card";
import Input from "./input";
const Task = () => {
    
      const initial_task = [
    
  ];
  const [tasks, setTask] = useState(initial_task);

  const addTaskHandler = async (newTask) => {
    let newTaskobj = {
      task_id:Math.random(),
      task_name:newTask
    };

    const response =await fetch ("https://todo-backend-gkte.onrender.com",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify (newTaskobj),
    })
    if (response.status === 201){
    getTask();
    alert("new task added successfully");
    }
    else{
      alert("Failed to add task")
    }
  }
  const deleteTaskHandler =async (taskId) => {
    const response= await fetch("https://todo-backend-gkte.onrender.com"+taskId,{
      method:"DELETE"
    })
    if(response.status == 200){
      getTask();
      alert("Task deleted")
    }
    else {
      alert("Failed to delete task")
    }
  }
  const getTask = async () =>{
    const response= await fetch("https://todo-backend-gkte.onrender.com");
    const taskList= await response.json();
    console.log(taskList);
    setTask(taskList)
  }
  useEffect(()=> {
    getTask()
  },[]);
    return (
        <div id="tasks">
              <Input onAddTask={addTaskHandler}  />
              { 
              tasks.map((tk) => (
                
                <Card task={tk} 
                onDeleteTask={deleteTaskHandler}/>
                
              ))
              }
              
              
            </div>
    )
}

export default Task;