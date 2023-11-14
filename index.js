import * as task1 from '/js/Task1/index.js';


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
    new linkInfo("Task 1 - 1", task1.operationOnTwoNumbers, taskTypes.js),
    new linkInfo("Task 1 - 2", task1.gradeFun, taskTypes.js),
    new linkInfo("Task 1 - 3", task1.containPI, taskTypes.js),
    new linkInfo("Task 1 - 4", task1.helloGoodby, taskTypes.js),

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

    taskHolder.appendChild(taskIconDiv);
    taskHolder.appendChild(taskNameDiv);

    
    taskHolder.addEventListener("click", function(){
        if(taskInfo.taskType != taskTypes.js)
            showModal(taskInfo);
        else
            taskInfo.taskLink();
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
            document.getElementById("js-tasks").appendChild(createTaskHolder(links[i], iconType.js));
            break;
    }
}

function showModal(taskInfo){
    const modal = document.querySelector(".modal");
    modal.style.display = "block";

    document.getElementById('title').innerHTML = `${taskInfo.taskType} - ${taskInfo.taskName}`;
    // set the iframe source
    document.querySelector(".modal iframe").src = taskInfo.taskLink;
    document.getElementById('link').href = taskInfo.taskLink;
}

function closeModal(){
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}

document.querySelector(".modal .close").addEventListener("click", closeModal);


