import {createUserForm} from "./forms/createUser.js" 
import {login} from "./forms/login.js" 
import { createTask } from "./views/user/createTask.js"
import { viewTask } from "./views/user/dashboard.js"
import { admin } from "./views/admin/viewTask.js"



login()
createUserForm()
createTask()
viewTask()
admin()
