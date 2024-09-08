import express from "express";
import mongoose from "mongoose";
import router from './router.js'
import fileUpload from 'express-fileupload';
import 'dotenv/config'

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT, () => console.log("Listening port" + process.env.PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
