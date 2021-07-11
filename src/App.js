import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const projectId = "8890a266-57de-4a6a-9f72-95ff429be78d"
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height = "100vh"
            projectID = {projectId}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;