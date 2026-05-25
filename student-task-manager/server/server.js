const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* GET TASKS */
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

/* ADD TASK */
app.post("/tasks", async (req, res) => {

  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate
  });

  await task.save();

  res.json(task);
});

/* UPDATE TASK */
app.put("/tasks/:id", async (req, res) => {

  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedTask);
});

/* DELETE TASK */
app.delete("/tasks/:id", async (req, res) => {

  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: "Task deleted"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});