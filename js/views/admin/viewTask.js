import { totalTask, completeTask, pendingTask, progress, tableAdmin, userLog, logOutAdmin, URLTASK, nameLog, isAdmin, btnAll, btnComplete,btnPending, btnProccess } from "../../doom.js"

let pending = 0;
let inProccess = 0
let Complete = 0;


export async function getTask() {
    if (!userLog) {
        window.location.href = "../index.html";
        return;
    }
    try {
        const response = await fetch(`${URLTASK}`)
        if (!response.ok) throw new Error("User not found")
        const data = await response.json();

        renderTask(data)
    } catch (error) {
        console.error("error in server");
        alert("Error in server");
    }


}
export async function renderTask(task) {
    if(task.length === 0 )return; 
    tableAdmin.innerHTML =""
    
    task.forEach(tasks => {
        totalTask.textContent = `${task.length}`;
        if (tasks.proccess === "pending") {
            pending += 1
        }
        if (tasks.proccess === "Progress") {
            inProccess += 1
        }
        if (tasks.proccess === "Complete") {
            Complete += 1
        }
        
        tableAdmin.innerHTML += `
            <tr class="bg-neutral-primary-soft border-b border-default     hover:bg-neutral-secondary-medium">
                            <th scope="row" class="px-6 py-3 font-medium text-heading whitespace-nowrap">
                                ${tasks.name}
                            </th>
                            <td class="px-12 py-3">
                             ${tasks.userName}    
                             </td>
                             <td class="px-12 py-3">
                               ${tasks.proccess}
                            </td>
                            <td class="px-12 py-3">
                                ${tasks.priority}  
                            </td>
                            <td class="px-12 py-3 ">
                                  ${tasks.date}  
                            </td>
                             <td class="px-12 py-3 ">
                                 <button 
                                class="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 btn-update "data-id ="${tasks.id}">🖋</button>
                                <button 
                                class="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 btn-delete "data-id ="${tasks.id}">🗑️</button> 
                        </tr>
        `
    });
    completeTask.textContent = `${Complete}`;
    pendingTask.textContent = `${pending}`;
    progress.textContent = `${inProccess}`;
}

export async function deleteTask(e) {
    if(!e.target.classList.contains("btn-delete")) return; 
    const id = e.target.dataset.id; 
    try {
        const user = await fetch(`${URLTASK}`)
        if(!user.ok) throw new Error("error find user"); 
        const data = await user.json(); 
                
        const update = await fetch(`${URLTASK}/${id}`, {
            method: "DELETE", 
        });
        location.reload(); 
        if(!update.ok) {
            throw new Error ("Delete error")
        }    
    }catch(error) {
        console.error("error in server");
        alert("error in server")
        
    }
}
export async function updateTask(e) {
    if(!e.target.classList.contains("btn-update")) return; 
       const id = e.target.dataset.id; 

    try {
        const response = await fetch(`${URLTASK}/${id}`);
        const user = await response.json();

        if (user.proccess === "Complete") return;

        if (user.proccess === "pending") {
            user.proccess = "Progress";
        } else if (user.proccess === "Progress") {
            user.proccess = "Complete";
        } 
        const upd = await fetch(`${URLTASK}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ proccess: user.proccess })
        })

        if (!upd.ok) throw new Error("Error upd");
        alert("Update complete");

    } catch (error) {
        console.error(error);
    }
}
export function outSession() {
    sessionStorage.removeItem("admin"); 
    sessionStorage.removeItem("nombre"); 
    sessionStorage.removeItem("usuario"); 
    location.reload(); 
}
export async function filter() {
    const response = await fetch(`${URLTASK}?proccess=Progress`); 
    const data = response.json(); 
    renderTask(data)
}
export function admin() {
    if (!tableAdmin) return;
    if(!userLog || !nameLog || !isAdmin) {
        window.location.href = "../index.html"
    }
    getTask()
    logOutAdmin.addEventListener("click", outSession)
    tableAdmin.addEventListener("click", deleteTask); 
    tableAdmin.addEventListener("click",updateTask ); 
}