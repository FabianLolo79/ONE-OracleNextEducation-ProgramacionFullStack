import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js"; 
import { uniqueDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector('[data-list]');
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(tasksList);

    dates.forEach((date) => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dataFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            console.log(diff); // me dá error en esta línea
            if (diff === 0) {
                list.appendChild(createTask(task));
            }
        });
    });

    
}