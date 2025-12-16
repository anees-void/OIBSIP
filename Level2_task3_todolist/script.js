const titleInput = document.getElementById('taskTitle');
const descInput = document.getElementById('taskDesc');
const deadlineInput = document.getElementById('taskDeadline');
const addBtn = document.getElementById('addBtn');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

const successQuotes = [
  "Discipline beats motivation. Well done",
  "You kept your promise to yourself",
  "Consistency wins. Proud of you",
  "Task completed on time"
];

const failQuotes = [
  "You didn’t fail — you learned.",
  "Late today, strong tomorrow",
  "Progress matters more than perfection.",
  "Fall seven times, stand up eight."
];

function randomQuote(list) {
  return list[Math.floor(Math.random() * list.length)];
}

addBtn.addEventListener('click', addTask);

function addTask() {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  const deadline = deadlineInput.value;

  if (!title || !deadline) return;

  const li = document.createElement('li');

  const info = document.createElement('div');
  info.className = 'task-info';
  info.innerHTML = `
    <strong>${title}</strong>
    <span>${desc}</span>
    <span class="time">Deadline: ${new Date(deadline).toLocaleString()}</span>
  `;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.onclick = () => completeTask(li, deadline);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = () => li.remove();

  actions.append(completeBtn, deleteBtn);
  li.append(info, actions);
  pendingList.appendChild(li);

  titleInput.value = '';
  descInput.value = '';
  deadlineInput.value = '';
}

function completeTask(taskItem, deadline) {
  const completedTime = new Date();
  const deadlineTime = new Date(deadline);

  const quote = document.createElement('span');
  quote.className = 'time';

  if (completedTime <= deadlineTime) {
    quote.textContent = "✔ " + randomQuote(successQuotes);
  } else {
    quote.textContent = "⚠ " + randomQuote(failQuotes);
  }

  taskItem.querySelector('.actions').remove();
  taskItem.querySelector('.task-info').appendChild(quote);
  completedList.appendChild(taskItem);
}
