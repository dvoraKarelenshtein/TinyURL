import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  // _id: {type:Number},
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }] // ייחוס למודל Link

});

// יצירת המודל
// const User = mongoose.model("User", userSchema);
// export default User;
export default mongoose.model("User", userSchema);