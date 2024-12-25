const express = require ('express')
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

const app = express();

const port = 3000;

app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
  })

app.use('/api/v1/tasks', tasks)

// connect to database before listening to the server
connectDB()
    .then(() => console.log("Connected to mongodb"))
    .then(() => app.listen(port, console.log(`listening on port ${port}...`)))
    .catch((err) => console.log(err.errmsg));
