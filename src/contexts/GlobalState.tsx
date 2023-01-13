import React, { createContext, Dispatch, useContext, useReducer } from 'react';

import { v4 as uuid } from 'uuid';
import { IUser } from '../types';

import { reducer } from './AppReducer';

interface IGlobalContextData {
  currentState: { users: IUser[] };
  dispatch: Dispatch<{ type: string; payload: IUser }>;

  removeUser: (id: typeof uuid) => void;
  addUser: (user: IUser) => void;
  editUser: (user: IUser) => void;
}

interface Props {
  children: React.ReactNode;
}

// Initial State
const initialState = {
  users: [
  
  ],
};

export const SnackbarContext = createContext({
  openSnackbar: () => {},
  closeSnackbar: () => {},
  setSnackbarSeverity: (severity?: AlertColor) => {},
  setSnackbarMessage: (message: string) => {}
})

export const useSnackbarContext = () => useContext(SnackbarContext)

export interface SnackbarContextProviderProps {
  children: ReactNode
}

export const SnackbarContextProvider = ({children}: SnackbarContextProviderProps) => {
  const [opened, setOpened] = useState(false)
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor | undefined>(undefined)
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const openSnackbar = useCallback(() => {
      setOpened(true)
  }, [setOpened])

  const closeSnackbar = useCallback(() => {
      setOpened(false)
  }, [setOpened])

  const value = useMemo(() => ({
      openSnackbar,
      closeSnackbar,
      setSnackbarSeverity,
      setSnackbarMessage
  }), [openSnackbar, closeSnackbar, setSnackbarSeverity, setSnackbarMessage])

  return (
    <Fragment>
        <Snackbar open={opened} onClose={closeSnackbar}>
            <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
        </Snackbar>
        <SnackbarContext.Provider value={value}>
            {children}
        </SnackbarContext.Provider>
    </Fragment>
)
}

// Create Context
const GlobalState = createContext({} as IGlobalContextData);

export const GlobalContext: React.FC<Props> = ({ children}) => {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  // console.log(currentState);

  // Actions
  const removeUser = (id: typeof uuid) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id,
    });
  };

  const addUser = (user: IUser) => {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    });
  };

  const editUser = (user: IUser) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user,
    });
  };

  return (
    <GlobalState.Provider
      value={{ currentState, dispatch, removeUser, addUser, editUser }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalState);
  if (!context)
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    );

  return context;
}
