import React, {useState} from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8080/ws-telemetry';

const App2 = () => {
    const [message, setMessage] = useState();

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onMessageReceived = (msg) => {
        setMessage(msg);
        console.log(msg)
    }

    return (
        <div>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/*']}
                onConnect={onConnected}
                onDisconnect={console.log("Disconnected!")}
                onMessage={msg => onMessageReceived(msg)}
                debug={false}
            />
            <div>{message && message.rocketId && "rocketId : "+message.rocketId +" acceleration:"+message.acceleration}</div>
        </div>
    );
}

export default App2;
