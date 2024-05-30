const TasksController = {
    getList: (req, res) => {
      console.log(req.query.status);
      res.send([
        { id: 1, name: "task 1", status: "TODO" },
        { id: 2, name: "task 2", status: "Done" },
      ]);
    },
    getById: (req, res) => {
      res.send(`get task by id ${req.params.id}`);
    },
  };
  
  export default TasksController;
  