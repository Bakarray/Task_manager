const express = require ('express')
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const dotenv = require('dotenv')
const notFound = require("./middleware/not-found")


dotenv.config()
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.use(notFound)

// connect to database before listening to the server
connectDB(process.env.MONGO_URI)
    .then(() => console.log("Connected to mongodb"))
    .then(() => app.listen(port, console.log(`listening on port ${port}...`)))
    .catch((err) => console.log('server error =', err.errmsg));
