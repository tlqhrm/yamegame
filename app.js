// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})
// app.get('/', function(req,res) {
//     res.send("<h1>hi friend!</h1>")
// })
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/main.html")
})
app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/public/main.html")
})
// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/download/:filename', function(req,res) {
    const filename = req.params.filename;
    const file = __dirname+'/public/'+filename;
    res.download(file);
    // res.sendFile(__dirname + "/public/포켓 몬스터 루비(K).gba")
})

// 이제 터미널에 node app.js 를 입력해보자.