import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootStateType, DispatchType} from "../../redux/redux-store";
import {AuthReducerType, setUserDateAC} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<RenderProps> {

    componentDidMount() {
        usersAPI.authUser().then(response => {

                    let{ id, login, email}= response.data.data
                    this.props.setUserDate(id, login, email)
                this.props.setUserDate(id, login, email)

            })

    }

    render() {
        return <Header {...this.props}/>
    }
}

 type RenderProps = mapDispatchToPropsType & mapStateToPropsType
export type  mapStateToPropsType = { auth: AuthReducerType, isAuth: boolean }
export type  mapDispatchToPropsType = {
    setUserDate: (id:number, login: string, email:string) => void
}
let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        auth: state.auth,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToPropsType = (dispatch: DispatchType): mapDispatchToPropsType => {
    return {
        setUserDate:  (id:number, login: string, email:string) => {
            dispatch(setUserDateAC(id, login, email))
        }
    }
}


export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToPropsType)(HeaderContainer)