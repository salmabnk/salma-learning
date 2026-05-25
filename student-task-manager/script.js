const API_URL = "http://localhost:5000/tasks";

async function fetchTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {

    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <h3 class="${task.completed ? 'completed' : ''}">
        ${task.title}
      </h3>

      <p>${task.description}</p>

      <p>Due Date: ${task.dueDate}</p>

      <button onclick="completeTask('${task._id}', ${task.completed})">
        ${task.completed ? 'Undo' : 'Complete'}
      </button>

      <button onclick="deleteTask('${task._id}')">
        Delete
      </button>
    `;

    taskList.appendChild(div);
  });
}

async function addTask() {

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      description,
      dueDate
    })
  });

  fetchTasks();
}

async function deleteTask(id) {

  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  fetchTasks();
}

async function completeTask(id, completed) {

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      completed: !completed
    })
  });

  fetchTasks();
}

fetchTasks();