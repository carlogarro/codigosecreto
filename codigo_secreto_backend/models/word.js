const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const wordSchema = new mongoose.Schema({
  content: Array,
});

wordSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const teamSchema = new mongoose.Schema({
  playing: Boolean,
  content: Array,
});

teamSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = {
  Word: mongoose.model("Word", wordSchema),
  Team: mongoose.model("Team", teamSchema),
};
// module.exports = mongoose.model("Team", teamSchema);
