import { configureStore } from '@reduxjs/toolkit';
import taskReducer, { TaskState } from './taskSlice';
import throttle from 'lodash/throttle';
import { delayTime } from '../constants';

export interface RootState {
  task: TaskState;
}

const loadState = (): RootState => {
  try {
    const serializedState = localStorage.getItem('taskReduxState');
    if (serializedState) {
      return JSON.parse(serializedState) as RootState;
    } else {
      return {
        task: {
          tasks: [],
          searchKey: '',
          isLandedFirstTime: true,
        },
      };
    }
  } catch (err) {
    console.error('Failed to load state from local storage:', err);
    return {
      task: {
        tasks: [],
        searchKey: '',
        isLandedFirstTime: true,
      },
    };
  }
};

const saveState = throttle((state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('taskReduxState', serializedState);
  } catch (err) {
    console.error('Failed to save state to local storage:', err);
  }
}, delayTime);

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export default store;
