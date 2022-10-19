import express from "express"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"

const app = express()

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

app.listen(8800, ()=> {
    console.log("Backend Connected");
})