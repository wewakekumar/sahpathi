import React from "react";
import ReactDom from "react-dom/client"

import Form from "./Form";

const submitTask = (...args) => args


test("taskForm", async () => {
    const container = document.createElement("div");

    const root = ReactDom.createRoot(container);

    root.render(<Form />);

    console.log("#conta", Form, container.innerHTML)

    const taskInputs = container.querySelectorAll("input");

    const taskNameInput = taskInputs[0];

    const taskDescriptionInput = taskInputs[1];

    console.log("#taskName", taskNameInput, taskInputs);

    console.log("#taskDescriptionInput", taskDescriptionInput);

    taskNameInput.value = "First";

    taskDescriptionInput.value = "My first task";

    const submitButton = container.querySelector("#submitForm");

    expect(submitTask).toHaveBeenCalledTimes(1);
})