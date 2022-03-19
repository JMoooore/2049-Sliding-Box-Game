import express from "express"

const PORT = process.env.PORT || 8000;

const app = express()

app.use(express.static("client"))

app.listen(PORT, () => {
    console.log("Listening on port:"+PORT)
})