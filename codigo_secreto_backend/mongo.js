const mongoose = require("mongoose");

const words = [
  "gato",
  "perro",
  "pájaro",
  "avión",
  "casa",
  "montaña",
  "pez",
  "mar",
  "verano",
  "otoño",
  "canción",
  "pirata",
  "pierna",
  "cabeza",
  "brazo",
  "ordenador",
  "mesa",
  "silla",
  "invierno",
  "primavera",
  "armario",
  "cocina",
  "ascensor",
  "corazón",
  "hoja",
  "árbol",
];

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://carlogarro:${password}@cluster0-d0ucm.mongodb.net/secret-code?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const wordSchema = new mongoose.Schema({
  content: String,
});

wordSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

arr = [];
for (let index = 0; index < words.length; index++) {
  arr = arr.concat({ content: words[index] });
}

const Word = mongoose.model("Word", wordSchema);

Word.insertMany(arr)
  .then((result) => {
    console.log("words saved!");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
  });
