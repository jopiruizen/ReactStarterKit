import { dispatch } from '../../../store';
import { getUsersAPI } from '../../../api/users'; 

export async function getExamples() {
    try {
      
    } catch (error) {
      
    } finally {
       
    }
}

export async function getUsers() {
    try {
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log("effects.getUsers()");
        const data = await getUsersAPI();
        console.log("End response is coming with data users: ...");
        console.log(data);
        this.setUsers(data.users);
    } catch (error) {
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log("Error#");
        console.log(error);
    } finally {
       
    }
}