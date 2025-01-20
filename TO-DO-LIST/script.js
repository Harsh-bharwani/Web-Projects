let addTaskbtn=document.querySelector("#add-task-btn");
let main=document.querySelector("main");
let taskContainer=document.querySelector(".task-container");
let taskList=document.querySelector(".task-list")
let modeBtn=document.querySelector("#mode-btn")
let delBtn=document.querySelector("#del-btn");
// let resetBtn=
addTaskbtn.addEventListener("click", ()=>{
    let li=document.createElement("li");
    let delBtn=document.querySelector("#del-btn");
    taskList.append(li);
    // li.classList.add("", '');
    li.innerHTML=`
                <div class="bg-secondary rounded-2 p-2 m-2">
                    <div class="d-flex justify-content-between">
                        <div class="m-2 p-1">    
                            <input id="task-checkbox" type="checkbox" disabled>
                            <input class="rounded" id="task-input" required type="text" placeholder="Enter the task">
                        </div>
                        <button id="del-btn" class="btn btn-danger m-2 me-4">Delete</button>
                    </div>
                    <div class="features d-flex justify-content-around m-2">
                        <span>
                            <select class="form-select me-1" name="priority" id="priority-select">
                                <option value="" selected disabled>priority</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </span>
                        <span>
                            <select class="form-select me-1" name="deadline" id="deadline-select">
                                <option value="" selected disabled>deadline</option>
                                <option value="today">Today</option>
                                <option value="tomorrow">Tomorrow</option>
                                <option value="thisWeek">This Week</option>
                            </select>
                        </span>
                        <span>
                            <select class="form-select me-1" name="category" id="category-select">
                                <option value="" selected disabled>category</option>
                                <option value="personal">personal</option>
                                <option value="work">work</option>
                            </select>
                        </span>
                        <span>
                            <select class="form-select me-1" name="repeatation" id="repeatation-select">
                                <option value="" selected disabled>repetition</option>
                                <option value="daily">daily</option>
                                <option value="weekly">weekly</option>
                                <option value="monthly">monthly</option>
                            </select>
                        </span>
                    </div>
                </div>`;
    li.querySelector('#del-btn').addEventListener('click', () => {
        li.remove();
        oldProgMax=document.querySelector("progress").getAttribute("max");
        document.querySelector("progress").setAttribute("max",Number(oldProgMax)-1);
        if(li.querySelector("#task-checkbox").checked){
            oldProgVal=document.querySelector("progress").getAttribute("value");
            document.querySelector("progress").setAttribute("value",Number(oldProgVal)-1);
        }
    });
    li.querySelector("#task-checkbox").addEventListener("change", ()=>{
            if(!li.querySelector("#task-checkbox").checked){
                li.querySelector("#task-input").classList.remove("strikethrough");
                oldProgVal=document.querySelector("progress").getAttribute("value");
                document.querySelector("progress").setAttribute("value",Number(oldProgVal)-1);
            }
            else{
                li.querySelector("#task-input").classList.add("strikethrough");
                oldProgVal=document.querySelector("progress").getAttribute("value");
                document.querySelector("progress").setAttribute("value",Number(oldProgVal)+1)
            }
    })
    oldProgMax=document.querySelector("progress").getAttribute("max");
    document.querySelector("progress").setAttribute("max",Number(oldProgMax)+1);
    li.querySelector("#task-input").addEventListener("input", (event)=>{
        let value=event.target.value;
        if(value.trim()!=="") {
            li.querySelector("#task-checkbox").disabled=false;
        }
    }) 
});

modeBtn.addEventListener("click", ()=>{
    if(document.body.classList.contains("bg-light")){
        document.body.classList.add("bg-dark", "text-light");
        document.body.classList.remove("bg-light", "text-dark");
    }
    else{
        document.body.classList.add("bg-light", "text-dark");
        document.body.classList.remove("bg-dark", "text-light");
    }
});
