import { btnCreateUser, containerForm, URL } from "../doom.js";

export function createUser(e) {
    e.preventDefault();
    
    containerForm.innerHTML = `
           <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="text-2xl font-bold mb-6 text-center">Crudzaso</h2>
            <p class="mt-2 text-center">create your account</p>
        </div>
        <form id="formRegist" >
            <div class="mb-4">
                <label for="nameUser" class="block text-gray-700">Full name</label>
                <input type="text" id="newNameUser" name="nameUser"
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. John Doe" required>
            </div>
            <div class="mb-4">
                <label for="nameUser" class="block text-gray-700">Email</label>
                <input type="email" id="newNEmailUser" name="nameUser"
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="name@example" required>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700">Password</label>
                <input type="password" id="password" name="password"
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="" required>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700">Comfirm password</label>
                <input type="password" id="Comfirmpassword" name="password"
                    class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="" required>
            </div>

            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <button type="submit"
                    class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Create User</button>
                    <p class ="text-center"><a href=""> return </a></p>
            </div>
            </form>
    `
    const formRegist = document.getElementById("formRegist");
    formRegist.addEventListener("submit", registUser)
}

export async function registUser(e) {
    e.preventDefault();
    const newName = document.getElementById("newNameUser").value;
    const newEmail = document.getElementById("newNEmailUser").value;
    const password = document.getElementById("password").value;
    const comfirmpassword = document.getElementById("Comfirmpassword").value;

    if(password !== comfirmpassword) {
        alert("The passwords do not match"); 
        return; 
    }

    const newUser = {
        "nombre": newName,
        "email": newEmail,
        "password": password,
        "typeUser": "user",
        "task" : [] 
    }

    try {
        const check = await fetch(
            `${URL}?email=${newEmail}`
        ) 
        if (!check.ok) {
            throw new Error("Conection failed");  
        }
        const checkOn = await check.json(); 

        if (checkOn.length > 0) {
            alert("Email already create"); 
            return
        } 
        const response = await fetch(`${URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        }
        )
        if (!response.ok) {
            throw new Error("connection to the server failed")
        }
        alert("user created")
    } catch (error) {
        console.error(error);
        alert("connection to the server failed")
    }

}

export function createUserForm() {
    if (!btnCreateUser) return ; 
    btnCreateUser.addEventListener("click", createUser)
}