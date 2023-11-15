import {task1} from './JS/Task1/index.js';
import { loopsTask2 } from './JS/Task2/loops.js';
import { functionsTask2 } from './JS/Task2/function1.js';
import { mappingTask4 } from './JS/Task4/map.js';
import { foreachTask4 } from './JS/Task4/for_each.js';


function linkInfo(name, link, type){
    this.taskName = name;
    this.taskLink = link;
    this.taskType = type;
}

const taskTypes = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
}

const iconType = {
    html: "fa-html5",
    css: "fa-css3-alt",
    js: "fa-js-square",
}

const links = [
    // HTML tasks
    new linkInfo("Task 1", "html/task1.html", taskTypes.html),
    new linkInfo("Task 2", "html/task2.html", taskTypes.html),
    new linkInfo("Task 3", "html/task3.html", taskTypes.html),
    new linkInfo("Task 4", "html/task4.html", taskTypes.html),
    new linkInfo("Task 5", "html/task5.html", taskTypes.html),
    new linkInfo("Task 6", "html/task6.html", taskTypes.html),
    new linkInfo("Task 7 - 1", "html/t7.1.html", taskTypes.html),
    new linkInfo("Task 7 - 2", "html/t7.2.html", taskTypes.html),
    new linkInfo("Task 7 - 3", "html/t7.3.html", taskTypes.html),
    new linkInfo("Task 7 - 4", "html/t7.4.html", taskTypes.html),
    new linkInfo("Task 7 - 5", "html/t7.5.html", taskTypes.html),
    new linkInfo("Task 7 - 6", "html/t7.6.html", taskTypes.html),


    // CSS tasks
    new linkInfo("Task 1", "css/Task1/scn.html", taskTypes.css),

    new linkInfo("Task 2 - 1", "css/Task2/Screen1/scn.html", taskTypes.css),
    new linkInfo("Task 2 - 2", "css/Task2/Screen2/scn.html", taskTypes.css),
    new linkInfo("Task 2 - 3", "css/Task2/Screen3/scn.html", taskTypes.css),
    new linkInfo("Task 2 - 4", "css/Task2/Screen4/scn.html", taskTypes.css),

    new linkInfo("Task 3 - 1", "css/Task3/Screen1/scn.html", taskTypes.css),
    new linkInfo("Task 3 - 2", "css/Task3/Screen2/scn.html", taskTypes.css),
    
    new linkInfo("Task 4 - 1", "css/Task4/Screen1/scn.html", taskTypes.css),
    new linkInfo("Task 4 - 2", "css/Task4/Screen2/scn.html", taskTypes.css),
    new linkInfo("Task 4 - 3", "css/Task4/Screen3/scn.html", taskTypes.css),
    
    new linkInfo("Task 5 - 1", "css/Task5/Screen1/scn.html", taskTypes.css),
    new linkInfo("Task 5 - 2", "css/Task5/Screen2/scn.html", taskTypes.css),
    new linkInfo("Task 5 - 3", "css/Task5/Screen3/scn.html", taskTypes.css),

    new linkInfo("Task 6 - 1", "css/Task6/Screen1/scn.html", taskTypes.css),
    new linkInfo("Task 6 - 2", "css/Task6/Screen2/scn.html", taskTypes.css),
    new linkInfo("Task 6 - 3", "css/Task6/Screen3/scn.html", taskTypes.css),
    new linkInfo("Task 6 - 4", "css/Task6/Screen4/scn.html", taskTypes.css),
    new linkInfo("Task 6 - 5", "css/Task6/Screen5/scn.html", taskTypes.css),    

    
    // JavaScript tasks
    new linkInfo("Task 1", task1 , taskTypes.js),
    new linkInfo("Functions", functionsTask2, taskTypes.js),
    new linkInfo("Loops", loopsTask2, taskTypes.js),
    new linkInfo("Mapping", mappingTask4, taskTypes.js),
    new linkInfo("ForEach", foreachTask4, taskTypes.js)
]


function createTaskHolder(taskInfo, iconType){
    const taskHolder = document.createElement("div");
    taskHolder.classList.add("task-holder");

    const taskIconDiv = document.createElement("div");
    taskIconDiv.classList.add("task-icon");
    const taskIcon = document.createElement("i");
    taskIcon.classList.add("fab");
    taskIcon.classList.add(iconType);
    taskIconDiv.appendChild(taskIcon);

    const taskNameDiv = document.createElement("div");
    const taskName = document.createElement("h3");
    taskNameDiv.appendChild(taskName);
    taskName.innerHTML = taskInfo.taskName;

    const showMoreDiv = document.createElement("div");
    showMoreDiv.classList.add("show-more");
    const p = document.createElement("p");
    p.innerHTML = "Show More";
    showMoreDiv.appendChild(p);

    taskHolder.addEventListener("mouseover", function(){
        showMoreDiv.style.display = "block";
    });

    taskHolder.addEventListener("mouseout", function(){
        showMoreDiv.style.display = "none";
    });

    taskHolder.appendChild(taskIconDiv);
    taskHolder.appendChild(taskNameDiv);
    taskHolder.appendChild(showMoreDiv);

    
    taskHolder.addEventListener("click", function(){
            showModal(taskInfo);
    });
    
    return taskHolder;
}

for(let i = 0; i < links.length; i++){
    switch(links[i].taskType){
        case taskTypes.html:
            document.getElementById("html-tasks").appendChild(createTaskHolder(links[i], iconType.html));
            break;
        case taskTypes.css:
            document.getElementById("css-tasks").appendChild(createTaskHolder(links[i], iconType.css));
            break;
        case taskTypes.js:
            let jsContainer = document.getElementById("js-tasks");
            jsContainer.appendChild(createTaskHolder(links[i], iconType.js));
            break;
    }
}

function showModal(taskInfo){
    const modal = document.querySelector(".modal");
    modal.style.display = "block";

    document.getElementById('title').innerHTML = `${taskInfo.taskType} - ${taskInfo.taskName}`;
    
    
    if(taskInfo.taskType == taskTypes.js){
        document.getElementById('js-sub-task-holder-list').style.display = "block";
        document.getElementById('js-run-button').style.display = "block";
        document.getElementById('js-sub-task-holder-list').innerHTML = "";
        document.getElementById('link').style.display = "none";
        document.querySelector(".modal iframe").style.display = "none";
        document.querySelector(".modal .modal-body").appendChild(makeJSTaskHolder(taskInfo.taskLink));
    }
    else{
        document.getElementById('js-sub-task-holder-list').style.display = "none";
        document.getElementById('js-run-button').style.display = "none";
        document.getElementById('link').style.display = "block";
        document.querySelector(".modal iframe").style.display = "block";
        document.querySelector(".modal iframe").src = taskInfo.taskLink;
        document.getElementById('link').href = taskInfo.taskLink;
    }
}

function closeModal(){
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}

document.querySelector(".modal .close").addEventListener("click", closeModal);


function makeJSTaskHolder(callBacFunctionsList){
    const list = document.getElementById("js-sub-task-holder-list");

    callBacFunctionsList.forEach((fun) => {
        const option = document.createElement("option");
        option.textContent = fun.name.toUpperCase();
        list.appendChild(option);
    });
    
    const runButton = document.getElementById("js-run-button");

    runButton.addEventListener("click", function(){
        callBacFunctionsList[list.selectedIndex]();
    })

    const subtaskHolder = document.createElement("div");
    subtaskHolder.classList.add("sub-task-holder");
    subtaskHolder.appendChild(list);
    subtaskHolder.appendChild(runButton);

    return subtaskHolder;
}

