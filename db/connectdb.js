import mongoose from "mongoose";
// mongoose.connect()
const connect = async (url) => {
  await mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};
export default connect;
