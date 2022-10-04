const express = require('express');
const database = require('./configs/db');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post.routes');
const userRouter = require('./routes/user.routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    return res.send('Hello World!');
});




app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/blogs", postRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    database();
    console.log(`Listening on port ${PORT}`);
});