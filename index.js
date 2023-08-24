const express = require('express')
const app = express()
const port = 3000
// const root='/home/arsalan/Documents/Work_Docker/Nodejs_docker_img/'
// var options = {
//     dotfiles: 'allow',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//       res.set('x-timestamp', Date.now())
//     }
// } 
// app.use(express.static(root,options))
// app.use(express.static(root))

const path = require('path')
app.use(express.static(path.join(__dirname)))


app.get('/main', (req, res) => {
  res.json({
    "hello": "World"
  })
})

app.get('/', (req,res) => {
    res.render(index.html)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})