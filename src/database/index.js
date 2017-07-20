import { loadState, saveState } from './localStorage';

const SAVE_SUCCESS = new CustomEvent('DatabaseSaveSuccessEvent');
const SAVE_FAIL = new CustomEvent('DatabaseSaveFailEvent');

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
    window.dispatchEvent(SAVE_SUCCESS);
  } catch (err) {
    window.dispatchEvent(SAVE_FAIL);
  }
}
