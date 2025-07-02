import { useEffect, useState } from "react";
const Input = (props) =>{
  const [ enteredTask, setEnteredTask ] =useState("");
  const [disableButton, setDisableButton] = useState(false);
  const handleChange = (e) => {
    
    setEnteredTask(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTask(enteredTask);
    setEnteredTask("");
  }
  useEffect(() => {
    if(enteredTask.length < 3){
      setDisableButton(true);
    }
    else{
      setDisableButton(false);
    }
  }, [enteredTask]);

    return (
    <form id="add-task" onSubmit={handleSubmit}>
                <input placeholder="Enter Task"
                onChange={handleChange}
                value={enteredTask}/>
                <button className="add-task-button"
                disabled={disableButton}>Add Task</button>
              </form>
              )
}
export default Input;