export const saveInLocal=(key,payload)=>{
    return localStorage.setItem(key,JSON.stringify(payload))
}

export const getFromLocal =(key)=>{
    const data = localStorage.getItem(key)
    return JSON.parse(data);
}