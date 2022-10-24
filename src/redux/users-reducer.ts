export type loc = {
    id: string;
    photos: { small: string, large: string },
    followed: boolean;
    name: string;
    status: string;
    location: { city: string; country: string; };
}


export type FindUsersType = {
    users: Array<loc>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


type ToggleFollowACType = ReturnType<typeof toggleFollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType =ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType =ReturnType<typeof setTotalUsersCountAC>
type actionType = ToggleFollowACType | SetUsersACType | setCurrentPageACType |setTotalUsersCountACType

let initialState: FindUsersType = {

    users: [],
    pageSize:5,
    totalUsersCount: 0,
    currentPage: 1

}

export const usersReducer = (state = initialState, action: actionType) => {

    switch (action.type) {
        case "TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID ? {...el, followed: action.followed} : el)
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':{
                return {...state, currentPage:action.currentPage}
        }
        case "SET_TOTAL_COUNT":{
            return {...state, totalUsersCount: action.totalCount}
        }
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
export const setCurrentPageAC = (currentPage: number) => {
  return{
      type: 'SET_CURRENT_PAGE',  currentPage
  }as const
}
export const setTotalUsersCountAC = (totalCount:number) => {
  return{
      type: 'SET_TOTAL_COUNT',  totalCount
  }as const
}