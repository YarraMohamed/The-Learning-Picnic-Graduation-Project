
export const setAuthUser = (data) => {
    // save object to the local storage
    // stringify the object data to text
    localStorage.setItem("user", JSON.stringify(data))
}

export const getAuthUser = (data) => {
    // get object from the local storage
    // parse the object data
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export const removeAuthUser = () => {
    if(localStorage.getItem("user")) localStorage.removeItem("user")
}