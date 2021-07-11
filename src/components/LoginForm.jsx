import { useState } from 'react';
import axios from 'axios';



const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // project-id of chatengine.io
        const authObject = {'Project-ID': "xxxx-xxx-xx-xx" ,'User-Name':username,'User-Secret':password}

        try{
            await axios.get("https://api.chatengine.io/chats", {'headers':authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
        }catch(err){
            setError('Oops, incorrect credentials.');
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <spna>Start Chatting</spna>
                        </button>
                        
                    </div>
                </form>
                <h1>{error}</h1>
            </div>

        </div>
    )
}

export default LoginForm;