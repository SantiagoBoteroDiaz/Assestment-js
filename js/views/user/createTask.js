import { nameTaks, formTask, categoty, priority, proccess, description, date, userLog, URLTASK , nameLog} from "../../doom.js";


export async function pushTask(e) {
    e.preventDefault();
    

    const name = nameTaks.value;
    const categotyTask = categoty.value;
    const priorityTask = priority.value;
    const proccessTask = proccess.value;
    const descriptionTask = description.value;
    const dateTask = date.value;

    if (categotyTask === "none" || priorityTask === "none") {
        alert("Todos los campos tienen que estar llenos");
        return;
    }
    const newTask = {
        "name": name,
        "userName": nameLog,
        "idUser":userLog,
        "category": categotyTask,
        "priority": priorityTask,
        "proccess": proccessTask,
        "description": descriptionTask,
        "date": dateTask
    }

    try {
        const updUSer = await fetch(`${URLTASK}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });
        if(!updUSer.ok) throw new Error("Error in update user");
        window.location.href ="./dashboard.html" 
        alert("Task create"); 
    } catch (error) {
        alert("error in server")
        console.error(error);
    }
}

export function createTask() {
    if (!formTask) return;
    if(!userLog){
        window.location.href ="../index.html"
    }
    formTask.addEventListener("submit", pushTask)
}