import { useState } from "react";

//firebase authentication
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

/* third party packages */
import { Button, Container, Input, useMediaQuery } from '@material-ui/core';

/* style */
import './signUp.css'

function SignUp(props) {

    const matches = useMediaQuery('(min-width:720px)');

    const auth = getAuth();

    //let email = "nada@nada.com"
    //let password = "nadada"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("user", user)
                sessionStorage.setItem('user', JSON.stringify(user));
                // ...
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
            <Container style={matches ? { width: "50%" } : {}}>
                <h1 style={{ textAlign: "center" }}>Registrarse</h1>
                <Input
                    placeholder="Email"
                    label="Email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    fullWidth
                />
                <Input
                    placeholder="Password"
                    label="Password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    value={password}
                    fullWidth
                />
                <p>{error}</p>
                <Button fullWidth variant="contained" color="primary" onClick={signUp}>Registrarse</Button>
            </Container>
        </>
    )
}
export default SignUp;


