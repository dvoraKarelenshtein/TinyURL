
// import LinksController from "../Models/Task.js";

import Link from "../Models/Link.js";
const LinksController = {
    getList: async (req, res) => {
        try {
            const links = await Link.find();//ללא סינון
            //   const filtered1 = await Link.find({ complete: true });//סינון 1
            //   const filtered2 = await Link.where('isComplete', false);//סינון 2
            res.json(links);
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
                originalUrl: req.body.originalUrl

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

    // redirect: async (req, res) => 
    // {

    //     const linkId = req.params.id;
    //     try {
    //         const link = await Link.findById(linkId);
    //         if (link) {
    //             const newClice = {
    //                 insertedAt: new Date(), // הזמן בו בוצע הקליק
    //                 ipAddress: req.ip // כתובת ה-IP של המשתמש
    //             };
    //             link.clicks.push(newClice);
    //             await link.save();

    //             res.redirect(link.originalUrl);
    //         } else {
    //             res.status(500).json({ message: 'Internal Server Error' });

    //         }

    //     }catch (error) {
    //         // בעיה בחיפוש הקישור או בשמירת הקליק
    //         console.error(error);
    //         res.status(500).json({ message: 'Internal Server Error' });
    //       }
    // }

    redirect: async (req, res) => {
        const { id } = req.params;
        const ipAddress = req.ip;  // כתובת ה-IP של המשתמש

        try {
            const link = await Link.findById(id);
            if (!link) {
                return res.status(404).json({ message: "Link not found" });
            }

            // הוספת קליק למערך הקליקים של הקישור
            link.clicks.push({
                insertedAt: new Date(),
                ipAddress
            });

            await link.save();

            // הפנייה מחדש ל-URL המקורי
            res.redirect(link.originalUrl);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    clickSegmentation: async (req, res) => {
        const { id } = req.params;
    
        try {
            const link = await Link.findById(id);
            if (!link) {
                return res.status(404).json({ message: "Link not found" });
            }
    
            const targetParamValue = req.query[link.targetParamName] || '';
    
            const clicksBySource = {};
            link.clicks.forEach(click => {
                const source = click.targetParamValue || "Unknown";
                if (!clicksBySource[source]) {
                    clicksBySource[source] = 1;
                } else {
                    clicksBySource[source]++;
                }
            });
    
            res.json(clicksBySource);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
    
};

export default LinksController;
