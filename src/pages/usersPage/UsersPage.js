import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput, clearValue, deleteValue } from "../../store/usersSlice";
import User from "../../components/User";

function UsersPage(){

    const dispatch = useDispatch()

    const {inputValue, users} = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    const clearInputValue = () => {
        dispatch(clearValue(inputValue))
    }

    const deleteAll = () => {
        dispatch(deleteValue(users))
    }

    return(
        <div>
            <input type="text" value={inputValue} placeholder="name" onChange={changeInputFunc}/>
            <button onClick={addUserFunc}>add user</button>
            <button onClick={clearInputValue}>clear</button>
            <button onClick={deleteAll}>delete all</button>
            {users.map(user => <User name={user} />)}
        </div>
    )
}

export default UsersPage