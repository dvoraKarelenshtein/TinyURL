// import mongoose from 'mongoose';

// // יצירת הסכמה של Link
// const linkSchema = new mongoose.Schema({
//   // _id:{type:Number},
//   originalUrl: { type: String, required: true },
//   shortenedUrl: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
//   clicks: { type: Number, default: 0 }
// });

// // יצירת המודל
// // const Link = 
// export default mongoose.model('Link', linkSchema);
import mongoose from 'mongoose';

const clickSchema = new mongoose.Schema({
//   _id: { type: Number, required: true },
  insertedAt: { type: Date, default: Date.now },
  ipAddress: { type: String, required: true }
});

const linkSchema = new mongoose.Schema({
//   _id: { type: Number, required: true },
  originalUrl: { type: String, required: true },
  clicks: [{ type: clickSchema }] // מערך של קליקים במקום קליק יחיד
});

export default mongoose.model('Link', linkSchema);
