import express from "express";
import fs from "fs";
import path from "path";

import { format } from "date-fns";

//Initialization
const app = express();
const PORT = 4000;

//routes
app.get("/create", (request, response) => {
  let now = format(new Date(), "dd-mm-yyyy-hh-mm-ss");
  //   console.log(now);
  let filePath = `TimeStamp/${now}.txt`;
  fs.writeFileSync(filePath, `${now}`, "utf8");
  response.status(200).send(`New file Creates as ${now}`);
});

app.get("/read", (request, response) => {
  let folderPath = path.basename("TimeStamp");

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      response.status(500).send("Files Does not Retrive");
    }
    response.status(200).send(files);
  });
});

//App port listening
app.listen(PORT, () => {
  console.log(`This App is running in http://localhost:${PORT}`);
});
