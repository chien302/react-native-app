import {createContext} from 'react';
import {io} from 'socket.io-client';

//const ENDPOINT = 'http://192.168.1.10:8080';
//const ENDPOINT = 'http://128.16.4.254:8080'; //TA2_ACTVN_5Ghz_T34
const ENDPOINT = 'http://192.168.0.105:8080'; // chien

export const socket = io(ENDPOINT);

export const SocketContext = createContext();
export const SocketContextProvider = ({children}) => {
  return (
    <SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>
  );
};
