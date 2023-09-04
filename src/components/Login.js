import { forwardRef, useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const { setJwtToken, setAlertMessage, setAlertClassName } = useOutletContext()

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        if(email==="admin@admin.com"){ //faker w/o backend api
            setJwtToken("abc")
            setAlertClassName("d-none")
            setAlertMessage("")

            navigate("/")
        }
        else{
            setAlertClassName("alert-danger")
            setAlertMessage("Invalid Credentials")
        }
    }
    return (
        <>
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <Input
                    title="Email"
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    autoComplete="email-new"
                    onChange={ (event) => setEmail(event.target.value) }
                />

                <Input
                    title="Password"
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    autoComplete="password-new"
                    onChange={ (event) => setPassword(event.target.value) }
                />

                <hr/>

                <input type="submit" className="btn btn-success" value="login" />
            </form>
        </div>
        </>
    )
}

export default Login;