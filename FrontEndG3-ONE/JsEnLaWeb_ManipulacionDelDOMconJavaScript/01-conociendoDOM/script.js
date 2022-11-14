/*const btn = document.querySelector ('[data-form-btn]');

// funcion flecha o funciones anónimas
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector ('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add ('card');
    input.value = '';

    // console.log (checkComplete());
    const taskContent = document.createElement('div');
    const titleTask = document.createComment('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
    // console.log (content);
};*/

// console.log (btn);
/*btn.addEventListener ("click", createTask); 

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far');
    i.classList.add('fa-check-square');
    i.classList.add('icon');
    return i;
}*/
import checkComplete from "./Components/checkComplete.js";
import deleteIcon from "./Components/deleteIcon.js";

    const btn = document.querySelector('[data-form-btn]');
    
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
      //backticks
        const taskContent = document.createElement('div');
        
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        // task.innerHTML = content;

        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
        };
    
        //Arrow functions o funciones anonimas
        btn.addEventListener('click', createTask);
    
        



