
import { useState, useRef } from 'react';
import Cookies from 'universal-cookie';
import { Login } from "./login";
// import Cookies from "universal-cookies";
const cookies = new Cookies();


export const Geral = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(cookies.get("auth-token"))
    const [room, setRoom] = useState(null);
    const roomInput = useRef('');

    if (!isAuthenticated) {
        return (
            <Login setAuthenticated={setIsAuthenticated}/>
        )
    }
    return (
        <div>
            {room ?
                <div>Chat</div> :
                <div>
                    <label>Entrar na Sala</label>
                    <input ref={roomInput}/>
                    <button type="submit" onClick={() => setRoom(roomInput.current.value)}>Entrar no Chat</button>
                </div>
            }
        </div>
    );

}