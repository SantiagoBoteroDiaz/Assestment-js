// db JSON 
export const URL = "http://localhost:3000/usuarios" ; 
export const URLTASK = "http://localhost:3000/task"

// user 

export const userLog = sessionStorage.getItem("usuario"); 
export const nameLog = sessionStorage.getItem("nombre"); 
export const isAdmin = sessionStorage.getItem("admin"); 
//Login 

export const nameUser = document.getElementById("nameUser");
export const password = document.getElementById("password"); 
export const formLogin = document.getElementById("formLogin") ; 

// create user 


export const containerForm = document.getElementById("containerForm") ; 
export const btnCreateUser = document.getElementById("createUser"); 

// menu 

export const totalTask = document.getElementById("totalTask"); 
export const completeTask = document.getElementById("completeTask"); 
export const pendingTask = document.getElementById("pendingTask"); 
export const progress = document.getElementById("progress"); 
export const containerTask = document.getElementById("containerTask"); 
export const btnTask = document.getElementById("addTask"); 
export const logOut = document.getElementById("logOut"); 

//create task 

export const nameTaks = document.getElementById("nameTask"); 
export const formTask = document.getElementById("formTask"); 
export const categoty = document.getElementById("categoty"); 
export const priority = document.getElementById("priority"); 
export const proccess = document.getElementById("proccess") ; 
export const description = document.getElementById("description"); 
export const date = document.getElementById("date"); 
export const viewALl = document.getElementById("viewAll"); 
// admin panel 

export const tableAdmin = document.getElementById("containerTaskAdmin"); 
export const logOutAdmin = document.getElementById("logOutAdmin"); 
export const btnAll = document.getElementById("viewALl"); 
export const btnPending = document.getElementById("viewPending"); 
export const btnProccess = document.getElementById("viewProccess"); 
export const btnComplete = document.getElementById("viewComplete"); 