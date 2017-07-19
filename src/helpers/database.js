const DATABASE_UPDATED = new CustomEvent('DatabaseUpdatedEvent');
let data = {
  todos: {
    1: { text: 'Write README', done: true },
    2: { text: 'Create starter React app', done: true },
    3: { text: 'Build todo app', done: false },
    4: { text: 'Store todos in localStorage', done: false },
  },
  todoOrder: ['1', '2', '3', '4'],
};

export const fetchData = () => {
  return data;
};

export const setData = (newData) => {
  data = newData;
  window.dispatchEvent(DATABASE_UPDATED);
}
