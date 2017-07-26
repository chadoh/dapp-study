import { loadState, saveState } from './localStorage';

export const SAVE_SUCCESS = 'DatabaseSaveSuccessEvent';
export const SAVE_FAIL = 'DatabaseSaveFailEvent';

let id = 0;

class Database {

  constructor(initialState) {
    this.id = id;
    id += 1;
    this.initialState = initialState;
  }

  fetchData() {
    return loadState(this.id) || this.initialState;
  }

  setData(newData)  {
    try {
      saveState(this.id, newData);
      window.dispatchEvent(new CustomEvent(SAVE_SUCCESS));
    } catch (err) {
      window.dispatchEvent(new CustomEvent(SAVE_FAIL));
    }
  }

}

export default ({initialState}) => new Database(initialState);
