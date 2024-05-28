// ChatsPage.js
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import 'C:/Users/Q1/ChatProject/frontend/ChatsPage.css'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='952d9fb0-47c7-49e1-8b97-d73f819ebb5d'
                username={props.user.username}
                secret={props.user.secret}
                className="pretty-chat-window" 
                style={{ height: '100%' }}
            />
        </div>
    );
}

export default ChatsPage;
