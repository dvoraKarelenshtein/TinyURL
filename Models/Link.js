
// import mongoose from 'mongoose';

// const clickSchema = new mongoose.Schema({
// //   _id: { type: Number, required: true },
//   insertedAt: { type: Date, default: Date.now },
//   ipAddress: { type: String, required: true }
// });

// const linkSchema = new mongoose.Schema({
// //   _id: { type: Number, required: true },
//   originalUrl: { type: String, required: true },
//   clicks: [{ type: clickSchema }] // מערך של קליקים במקום קליק יחיד
// });

// export default mongoose.model('Link', linkSchema);
import mongoose from 'mongoose';

const clickSchema = new mongoose.Schema({
  insertedAt: { type: Date, default: Date.now },
  ipAddress: { type: String, required: true },
  targetParamValue: { type: String, default: '' }  // הוספת השדה targetParamValue
});

const targetValueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true }
});

const linkSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  clicks: [{ type: clickSchema }], // מערך של קליקים במקום קליק יחיד
  targetParamName: { type: String, default: 't' }, // הוספת השדה targetParamName
  targetValues: [{targetValueSchema}]  // הוספת המערך targetValues
});

export default mongoose.model('Link', linkSchema);
