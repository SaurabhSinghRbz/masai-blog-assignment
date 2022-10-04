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
    return res.send({
        message: 'Welcome to my blog API',
        registration: 'https://saurabh-blog-api.herokuapp.com/api/auth/register',
        login: 'https://saurabh-blog-api.herokuapp.com/api/auth/login',
        getAllUsers: "httpd://saurabh-blog-api.herokuapp.com/api/users",
        getUserById: "httpd://saurabh-blog-api.herokuapp.com/api/users/:id",
        updateUser: "httpd://saurabh-blog-api.herokuapp.com/api/users/:id",
        getAllPosts: "https://saurabh-blog-api.herokuapp.com/api/posts",
        getPostById: "https://saurabh-blog-api.herokuapp.com/api/posts/:id",
        createPost: "https://saurabh-blog-api.herokuapp.com/api/posts",
        updatePost: "https://saurabh-blog-api.herokuapp.com/api/posts/:id",
        deletePost: "https://saurabh-blog-api.herokuapp.com/api/posts/:id"
    });
});




app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/blogs", postRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    database();
    console.log(`Listening on port ${PORT}`);
});