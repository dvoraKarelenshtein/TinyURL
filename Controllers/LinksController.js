
// import LinksController from "../Models/Task.js";

import Link from "../Models/Link.js";
const LinksController = {
  getList: async (req, res) => {
    try {
      const links = await Link.find();//ללא סינון
    //   const filtered1 = await Link.find({ complete: true });//סינון 1
    //   const filtered2 = await Link.where('isComplete', false);//סינון 2
      res.json( links);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const link = await Link.findById(req.params._id);//שליפה לפי מזהה
      res.json(link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { originalUrl } = req.body;
    try {
      const newLink = await Link.create({ originalUrl });//הוספת חדש
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await User.findByIdAndUpdate(id, req.body, {
        originalUrl:req.body.originalUrl
       
      });//עדכון לפי מזהה
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Link.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default LinksController;
