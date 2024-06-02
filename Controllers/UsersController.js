// const TasksController = {
//     getList: (req, res) => {
//       console.log(req.query.status);
//       res.send([
//         { id: 1, name: "task 1", status: "TODO" },
//         { id: 2, name: "task 2", status: "Done" },
//       ]);
//     },
//     getById: (req, res) => {
//       res.send(`get task by id ${req.params.id}`);
//     },
//   };

//   export default TasksController;


// import UsersController from "../Models/Task.js";
// import UsersController from "../Controllers/UsersContrller"
// import UsersController from '../Controllers/UsersController.js';
import User from "../Models/User.js";
import Link from "../Models/Link.js";
const UsersController = {
  getList: async (req, res) => {
    try {
      const users = await User.find().populate('links');//ללא סינון
      // const filtered1 = await User.find({ complete: true });//סינון 1
      // const filtered2 = await User.where('isComplete', false);//סינון 2
      res.json(users);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('links');//שליפה לפי מזהה
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  add: async (req, res) => {
    // הוספת הודעת לוג כדי לבדוק את גוף הבקשה שמתקבל
    console.log("Request Body: ", req.body);

    // הוצאת הנתונים מהבקשה
    const { _id, name, email, password, links } = req.body;

    // בדיקה אם הנתונים הנדרשים קיימים
    if (!name || !email || !password || !Array.isArray(links)) {
      return res.status(400).json({ message: "Missing required fields or incorrect data format" });
    }

    try {
      const linkObjects = await Link.insertMany(links); // יצירת קישורים חדשים אם יש קישורים במערך
      const linkIds = linkObjects.map(link => link._id); // יצירת מערך של מזהי הקישורים
      // יצירת משתמש חדש
      const newUser = await User.create({ _id, name, email, password, links: linkIds });
      // שליחת המשתמש החדש בתשובה
      res.json(newUser);
    } catch (e) {
      // הדפסת הודעת השגיאה
      console.error(e);
      // שליחת הודעת שגיאה במידה ויש בעיה
      res.status(400).json({ message: e.message });
    }
  },

  // add: async (req, res) => {
  //   const { name, email, password,links } = req.body;
  //   try {
  //     const newUser = await User.create({ name,email,password,links });//הוספת חדש
  //     res.json(newUser);
  //   } catch (e) {
  //     res.status(400).json({ message: e.message });
  //   }
  // },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, email, password, links } = req.body;

    try {
      const linkObjects = await Link.insertMany(links); // יצירת קישורים חדשים אם יש קישורים במערך
      const linkIds = linkObjects.map(link => link._id); // יצירת מערך של מזהי הקישורים
      const updatedUser = await User.findByIdAndUpdate(id, {name,email,password,links:linkIds},{new:true}).populate('links');// עדכון משתמש כולל ייבוא הקישורים
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await User.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UsersController;
