// import mongoose from "mongoose";

// // יצירת הסכמה
// const userSchema = new mongoose.Schema({
//     _id:{type:Number},
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   links: { type: [String], default: [] }
// });

import mongoose from "mongoose";
// import Link from "./Link";

// יצירת הסכמהimport Link from './Link.js'; // ודא שהנתיב נכון

const userSchema = new mongoose.Schema({
  // _id: {type:Number},
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // links: { type: [Link], default: [] }
  links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }] // ייחוס למודל Link

});

// יצירת המודל
// const User = mongoose.model("User", userSchema);

// export default User;
export default mongoose.model("User", userSchema);