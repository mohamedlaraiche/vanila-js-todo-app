let form = document.querySelector('form');
let input = document.querySelector('.input');
let addTask = document.querySelector('.addTask');
let taskList = document.querySelector('ul');
let msg = document.querySelector('.msg');

onload = input.focus();

let submitHandler = (e) => {
  e.preventDefault();
  if (!input.value) {
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
    onload = input.focus();
  } else {
    createNewTask(input.value);
  }
};
form.addEventListener('submit', submitHandler);
let createNewTask = (task) => {
  let li = document.createElement('li');
  li.className = 'newTask';
  li.textContent = task;
  let link = document.createElement('a');
  link.href = '#';
  link.className = 'delLink';
  link.innerHTML = '<i class="fa-solid fa-circle-minus"><i>';
  li.appendChild(link);
  taskList.appendChild(li);
  input.value = '';
};
let deleteHandler = (e) => {
  if (e.target.parentElement.classList.contains('delLink')) {
    e.target.parentElement.parentElement.remove();
  }
};
taskList.addEventListener('click', deleteHandler);
