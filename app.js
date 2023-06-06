const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Para que funcionen los formularios

app.get('/', (req, res) => {
  console.log(req.body)
  res.json({usuario: "Bienvenido!"})
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})