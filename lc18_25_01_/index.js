// events
// 1. types of events (top-5)
// 2. add events (which event type & on which element)
// 3. handlers

// WEB FLOW
// 1. get data
// 2. render
// 3. update data, dont update DOM (!!!)
// 4. re-render

const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

//= =======

// create task
// create btn - click +++

// update task
// checkbox - click/ change
// list - click +++

// code quality rules
// validation first
// chose correct tool

function createTaskHandler() {
  const taskInputEl = document.querySelector('.task-input');

  if (!taskInputEl.value) {
    return;
  }

  tasks.push({ text: taskInputEl.value, done: false });

  taskInputEl.value = '';
  renderTasks(tasks);
}

const createBtnEl = document.querySelector('.create-task-btn');
createBtnEl.addEventListener('click', createTaskHandler);

// change task - algo
//
// 1. if not checkbox - end
// 2. find by id
// 3. update task

const changeTaskHandler = event => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const foundedTask = tasks.find(task => task.id === event.target.dataset.id);
  foundedTask.done = !foundedTask.done;

  renderTasks(tasks);
};

listElem.addEventListener('click', changeTaskHandler);
