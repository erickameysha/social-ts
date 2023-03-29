import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ad653c9f-7f6e-4de5-b3d6-ac286fa8078e'
    }
})

export const usersAPI =  {
    getUsers  (currentPage: number, pageSize: number) {

        return instanse.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true}
        )
    },
    deleteUser (id: string) {

        return instanse.delete(`follow/${id}`,)
    },
    addUser  (id: string){

        return instanse.post(`follow/${id}`, {},)
    },
    authUser  () {
        return instanse.get(`auth/me`)
    }


}

