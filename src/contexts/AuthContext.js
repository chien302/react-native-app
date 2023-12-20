import {createContext, useReducer, useEffect} from 'react';
import AuthReducer from './AuthReducer';
import authApi from '../api/authApi';
import {storeStringData} from '../utils/HandleAsyncStorage';
const INITIAL_STATE = {
  user: null,
  isLoading: true,
  error: false,
  post: null,
  notifications: [],
  listChatUnread: [],
  currentChatMessage: {},
  postUpdate: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({type: 'LOGIN_START'});
      try {
        const res = await authApi.getCurrentUser();
        // console.log('res auth context');
        // console.log(res?.data);
        await storeStringData('currentUserId', res.data?.user?.id);
        dispatch({type: 'LOGIN_SUCCESS', payload: res?.data?.user});
      } catch (error) {
        console.log(error);
        dispatch({type: 'LOGIN_FAILURE'});
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        error: state.error,
        post: state.post,
        notifications: state.notifications,
        listChatUnread: state.listChatUnread,
        currentChatMessage: state.currentChatMessage,
        postUpdate: state.postUpdate,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
