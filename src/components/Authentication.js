import { useNavigate } from "react-router-dom";
import Imagen from "../img/comida.jpg";
import { useState } from 'react';
import { Button, Segment } from 'semantic-ui-react'

export function Login({ changeLog }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const u = 'Paul';
        const p = '12345';

        if (username === u && password === p) {
            console.log('Bienvenido');
            changeLog(true);
            navigate("/home");

        } else {
            alert('usuario o contraseña invalidos');
        }
    }

    function handleUsername(e) {
        const valorU = e.target.value;
        setUsername(valorU);
    }

    function handlePassword(e) {
        const valorP = e.target.value;
        setPassword(valorP);
    }

    return (
        <main role="main" class="container my-auto">
            <div class="row">
                <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 id="textForm" class="text-center">¡BIENVENIDO!</h2>
                    <img class="img-fluid mx-auto d-block rounded"
                        src={Imagen} alt="" /><br></br>

                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label id="textuyc" for="Usuario"><b>Usuario</b></label>
                            <input id="Usuario" name="Usuario"
                                class="form-control" type="text"
                                placeholder="User"
                                onChange={handleUsername} />
                        </div>
                        <div class="form-group">
                            <label id="textuyc" for="palabraSecreta"><b>Contraseña</b></label>
                            <input id="palabraSecreta" name="palabraSecreta"
                                class="form-control" type="password"
                                placeholder="Password"
                                onChange={handlePassword} />
                        </div>
                        <br></br>
                        <button id="Button" type="submit" class="btn btn-light">Iniciar Sesión</button>
                        <br></br>

                    </form>
                </div>
            </div>
        </main>
    );
}