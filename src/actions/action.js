export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const addContact = Contact =>{
    debugger;
    return{
        type: ADD_CONTACT,
        payload:{
            Contact
        }
    }
}