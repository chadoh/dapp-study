import { loadState, saveState } from './localStorage';

export const SAVE_SUCCESS = 'DatabaseSaveSuccessEvent';
export const SAVE_FAIL = 'DatabaseSaveFailEvent';

const initialState = {
  todos: {},
  todoOrder: [],
};

export const fetchData = () => {
  return loadState() || initialState;
};

export const setData = (newData) => {
  try {
    saveState(newData);
    window.dispatchEvent(new CustomEvent(SAVE_SUCCESS));
  } catch (err) {
    window.dispatchEvent(new CustomEvent(SAVE_FAIL));
  }
}
