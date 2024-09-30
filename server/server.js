const express = require ("express");
const app = express ();
const cors = require ("cors");
const corsOption = {
  origin: ("http://localhost:5173"),
};

app.use(cors(corsOption));


app.get ("/api", (req , res) => {
  res.json ({
    fruits: ["Apple" , "Orange" , "Pineapple" , "Banana"],
    people: [
      { name: "John", age: 30, gender: "Male" },
      { name: "Sara", age: 24, gender: "Female" },
      { name: "Mike", age: 19, gender: "Male" },
    ],
  });
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});