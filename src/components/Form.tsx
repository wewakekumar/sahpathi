"use client";

import { useState } from "react";

import classes from "./Components.module.scss";

const Form = () => {
  const [taskData, setTaskData] = useState({
    taskName: "",
    taskDescription: "",
  });

  const submitTask = (task: any) => {
    console.log("#task", task);
  };

  return (
    <div className={classes.formDiv}>
      <label htmlFor="taskName">Task Name</label>
      <input
        data-test-id="taskName"
        value={taskData.taskName}
        onChange={(e) =>
          setTaskData((prevData) => ({ ...prevData, taskName: e.target.value }))
        }
        id="taskName"
      />
      <label htmlFor="taskDescription">Task Description</label>
      <input
        data-test-id="taskDescription"
        value={taskData.taskDescription}
        onChange={(e) =>
          setTaskData((prevData) => ({
            ...prevData,
            taskDescription: e.target.value,
          }))
        }
        id="taskDescription"
      />
      <button onClick={() => submitTask(taskData)} id="submitForm">
        Submit
      </button>
    </div>
  );
};

export default Form;
