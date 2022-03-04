import { useState } from "react";

//firebase authentication
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/* third party packages */
import { Button, Container, Input, useMediaQuery } from '@material-ui/core';

//routing
import { useHistory } from "react-router-dom";

/* style */
import './login.css'

function Login(props) {

    const matches = useMediaQuery('(min-width:1200px)');

    const history = useHistory();

    const auth = getAuth();

    //let email = "nada@nada.com"
    //let password = "nadada"
    const contextUser = JSON.parse(sessionStorage.getItem('user'));


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const logout = () => {
        sessionStorage.removeItem('user')
        history.go(0)
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("user", user)
                sessionStorage.setItem('user', JSON.stringify(user));
                history.go(0)
            })
            .catch((error) => {
                console.log("error")
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("errorCode", errorCode)
                console.log("errorMessage", errorMessage)
                setError(errorMessage)
            });
    }

    return (
        <>
            <br></br>
            {/* BIENVENIDO A ... */}
            {contextUser ? <>
                <Container style={matches ? { width: "50%" } : { height: "100vh" }}>
                    <h1 style={{ textAlign: "center" }}>Actualmente en sesión con el correo: {contextUser.email}</h1>
                    <Button fullWidth variant="contained" color="primary" onClick={logout}>Cerrar sesión</Button>
                </Container>
            </> : <>
                <Container style={matches ? { width: "50%" } : { height: "100vh" }}>
                    <h1 style={{ textAlign: "center" }}>Iniciar Sesión</h1>
                    <Input
                        style={{ backgroundColor: "white" }}
                        placeholder="Email"
                        label="Email"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        fullWidth
                    />
                    <br />
                    <Input
                        style={{ backgroundColor: "white" }}
                        placeholder="Password"
                        label="Password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        value={password}
                        fullWidth
                    />
                    <p>{error}</p>
                    <p>¿No tienes cuenta? <span style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} onClick={() => { history.push("/signup") }}>regístrate</span></p>
                    <Button fullWidth variant="contained" color="primary" onClick={login}>Iniciar sesión</Button>
                </Container>
            </>}
        </>
    )
}
export default Login;


