import {ProfilePageType} from "./store";
import {v1} from "uuid";
import exp from "constants";
// type UsersType = ReturnType<typeof d >
export type loc =

    {
        id: string; photos: {
            small: string
            large: string
        }, followed: boolean;  name: string; status: string; location: { city: string; country: string; };
    }
export type FindUsersType = {

    users: Array<loc>
}
type ToggleFollowACType = ReturnType<typeof toggleFollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type actionType = ToggleFollowACType | SetUsersACType
let initialState: FindUsersType = {

    users: [
        // {
        //     id: v1(),
        //     photoURL:
        //         'https://roscongress.org/upload/resize_cache/iblock/16b/289_289_2/dfe711a4_cfb4_4a51_937a_7f9f0ac9a70c.jpg',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'am boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: v1(),
        //     photoURL:
        //         'https://roscongress.org/upload/resize_cache/iblock/16b/289_289_2/dfe711a4_cfb4_4a51_937a_7f9f0ac9a70c.jpg',
        //     followed: false,
        //     fullName: 'sasha',
        //     status: 'am ',
        //     location: {city: 'Moscow', country: 'russia'}
        // },
        // {
        //     id: v1(),
        //     photoURL:
        //         'https://roscongress.org/upload/resize_cache/iblock/16b/289_289_2/dfe711a4_cfb4_4a51_937a_7f9f0ac9a70c.jpg',
        //     followed: true,
        //     fullName: 'Andru',
        //     status: 'treen',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },

    ]
}
export const usersReducer = (state = initialState, action: actionType): FindUsersType => {

    switch (action.type) {
        case "TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: action.followed} : el)
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}
export const toggleFollowAC = (userID: string, followed: boolean,) => {
    return {
        type: "TOGGLE_FOLLOW", followed, userID
    } as const
}
export const setUsersAC = (users: Array<loc>) => {
    return {
        type: 'SET-USERS', users
    } as const
}