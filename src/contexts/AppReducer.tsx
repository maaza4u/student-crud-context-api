import { IState, IAction, ActionTypes } from '../types';

export const reducer = (currentState: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.REMOVE_USER:
      return {
        ...currentState,
        users: currentState.users.filter(user => {
          return user.id !== action.payload;
        }),
      };

    case ActionTypes.ADD_USER:
      return {
        ...currentState,
        users: [action.payload, ...currentState.users],
      };

    case ActionTypes.EDIT_USER:
      const updateUser = action.payload;

      const updateUsers = currentState.users.map(user => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      return {
        ...currentState,
        users: updateUsers,
      };

    default:
      return currentState;
  }
};
