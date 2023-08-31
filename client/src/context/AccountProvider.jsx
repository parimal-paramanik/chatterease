import { createContext, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {

    const [ account, setAccount ] = useState();
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const [activeUsers, setActiveUsers] = useState([]);
    
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('https://chatterease-socket.onrender.com');
    }, [])

    return (
        <AccountContext.Provider value={{ 
            account, 
            setAccount, 
            showloginButton,
            setShowloginButton,
            showlogoutButton,
            setShowlogoutButton,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;