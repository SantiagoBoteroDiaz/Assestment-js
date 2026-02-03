import {nameUser, password , formLogin, URL} from "../doom.js" 


export async function enterUser(e) {    
    e.preventDefault() ; 

    const user = nameUser.value ; 
    const passwordUser = password.value ; 

    const response = await fetch (`${URL}?email=${user}&password=${passwordUser}`) ; 

    
    if(!response.ok) throw new Error("find user failed") ; 
    
    const data = await response.json() ; 
    
    
    if (data.length === 0) {
        alert("usuario no encontrado.")
    }
    
    const usuario = data[0] ; 
   
    if(usuario.typeUser === "user") {
        window.location.href = "./pages/dashboard.html"
        sessionStorage.setItem("usuario", usuario.id); 
        sessionStorage.setItem("nombre", user); 
    }
     if(usuario.typeUser === "admin") {
        window.location.href = "./pages/admin.html"
        sessionStorage.setItem("admin", "isAdmin")
        sessionStorage.setItem("usuario", usuario.id); 
        sessionStorage.setItem("nombre", usuario.nombre);
    }
}


export function login() {
    if(!formLogin) return; 
    formLogin.addEventListener("submit", enterUser); 
}