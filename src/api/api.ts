import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b32f5f25-23a2-49a7-8139-79ea8f882efe'
    }
})

export const getUsers = (currentPage: number, pageSize: number) => {

    return instanse.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true}
    )
}
export const deleteUser = (id: string) => {

    return instanse.delete(`follow/${id}`,)
}

export const addUser = (id: string) => {

    return instanse.post(`follow/${id}`, {},)
}
export const authUser = () => {
    return instanse.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
}