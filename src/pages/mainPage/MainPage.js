import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFetchUser, changeInputAction, changeTitle, changeTitleWithParams } from "../../store/titleSlice";
import User from "../../components/User";

function MainPage(){
    const dispatch = useDispatch()

    const {title, inputValue, users} = useSelector(state => state.titleReducer)

    const withParams = () => {
        dispatch(changeTitleWithParams(inputValue))
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }
    let addFetchU;
    addFetchU = (f) => {
        dispatch(addFetchUser(f))
    }

    const add = () => {
        return async function(dispatch){
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data);
            addFetchU(data)
        }
    }

    return(
        <div>
            <h1>{title}</h1>
            <h2>{inputValue}</h2>
            <input value={inputValue} onChange={changeInput}/>
            <button onClick={() => dispatch(changeTitle())}>change title</button>
            <button onClick={withParams}>with params</button>
            <button onClick={add()}>Add</button>
            {users.map(user => <User user2={user} />)}
        </div>
    )
}

export default MainPage