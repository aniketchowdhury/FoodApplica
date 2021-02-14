import React, { useState } from "react";
import CreateExercises from "./CreateExercises";
import { Route, Router, Switch } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    //const { props } = props;
    const [isLogin, setLogin] = useState(false);
    const goToMain = () => {
        setLogin(true)
    }
    const handleChange = (event) => {
        setName(event.target.value)
    }
    // const displayList = () => {
    //     console.log("****check", name);
    //     props.history.push('/list');
    //     // return (
    //     //     <Router><Switch><Route exact path="/list"><CreateExercises /></Route></Switch></Router>

    //     // )
    // }
    return (
        <div>
            <input placeholder="enter your name here" onChange={handleChange} />
            <button onClick={goToMain}>LOGIN</button>
            {isLogin && <CreateExercises name={name} />/*displayList()*/}
            { /*<Route exact path="/list"><CreateExercises /></Route>*/}
        </div>
    )
}
export default Login;
