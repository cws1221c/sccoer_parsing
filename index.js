const express = require('express');
const http = require('http');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');  //여기
const qs = require('querystring');
const iconv = require('iconv-lite');  //인코딩 변환도구
const charset = require('charset'); 
const mysql = require('mysql');

const conn = mysql.createConnection({
    user: "yy_30217",
    password: "1234",
    host: "gondr.asuscomm.com"
});

conn.query("USE yy_30217"); //yy_30201 데이터베이스 사용
let app = express();

app.set('port', 12000);

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json()); //미들웨어로 바디파서를 사용함. //여기
app.use(bodyParser.urlencoded({ extended: true })); //여기

app.get('/', function (req, res) {
    res.render('main', { msg: 'Welcome To Express4' });
});

app.get('/epl', function (req, res) {

    request("https://www.goal.com/kr/%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4-%EB%A6%AC%EA%B7%B8/%EC%88%9C%EC%9C%84/2kwbbcootiqqgmrzs6o5inle5", function (err, response, body) {

        $ = cheerio.load(body);
        let product_list = $(".p0c-competition-tables__table > tbody tr");
        let list = [];
        for (let i = 0; i < product_list.length; i++) {
            let top20 = $(product_list[i]).find(".p0c-competition-tables__team span").text();
            let list_img = $(product_list[i]).find(".p0c-competition-tables__crest").attr("data-srcset");
            let play = $(product_list[i]).find(" .p0c-competition-tables__matches-played").text();
            let win = $(product_list[i]).find(".p0c-competition-tables__matches-won").text();
            let draw = $(product_list[i]).find(".p0c-competition-tables__matches-drawn").text();
            let lose = $(product_list[i]).find(".p0c-competition-tables__matches-lost").text();
            let goal = $(product_list[i]).find(".p0c-competition-tables__goals-for").text();
            let fail = $(product_list[i]).find(".p0c-competition-tables__goals-against").text();
            let score = $(product_list[i]).find(".p0c-competition-tables__pts").text();
            list.push({ top20: top20, list_img: list_img, play: play, win: win, draw: draw, lose: lose, goal: goal, fail: fail, score: score });
        }


        res.render('top', { msg: '프리미어 리그 순위', list: list });
    });
});
app.get('/primera', function (req, res) {
    request("https://www.goal.com/kr/%ED%94%84%EB%A6%AC%EB%A9%94%EB%9D%BC-%EB%A6%AC%EA%B0%80/%EC%88%9C%EC%9C%84/34pl8szyvrbwcmfkuocjm3r6t", function (err, response, body) {
        $ = cheerio.load(body);
        let product_list = $(".p0c-competition-tables__table > tbody tr");
        let list = [];
        for (let i = 0; i < product_list.length; i++) {
            let top20 = $(product_list[i]).find(".p0c-competition-tables__team span").text();
            let list_img = $(product_list[i]).find(".p0c-competition-tables__crest").attr("data-srcset");
            let play = $(product_list[i]).find(" .p0c-competition-tables__matches-played").text();
            let win = $(product_list[i]).find(".p0c-competition-tables__matches-won").text();
            let draw = $(product_list[i]).find(".p0c-competition-tables__matches-drawn").text();
            let lose = $(product_list[i]).find(".p0c-competition-tables__matches-lost").text();
            let goal = $(product_list[i]).find(".p0c-competition-tables__goals-for").text();
            let fail = $(product_list[i]).find(".p0c-competition-tables__goals-against").text();
            let score = $(product_list[i]).find(".p0c-competition-tables__pts").text();
            list.push({ top20: top20, list_img: list_img, play: play, win: win, draw: draw, lose: lose, goal: goal, fail: fail, score: score });
        }

        res.render('top', { msg: '프리메라 리가 리그 순위', list: list });
    });
});
app.get('/seria', function (req, res) {
    request("https://www.goal.com/kr/%EC%84%B8%EB%A6%AC%EC%97%90-a/%EC%88%9C%EC%9C%84/1r097lpxe0xn03ihb7wi98kao", function (err, response, body) {
        $ = cheerio.load(body);
        let product_list = $(".p0c-competition-tables__table > tbody tr");
        let list = [];
        for (let i = 0; i < product_list.length; i++) {
            let top20 = $(product_list[i]).find(".p0c-competition-tables__team span").text();
            let list_img = $(product_list[i]).find(".p0c-competition-tables__crest").attr("data-srcset");
            let play = $(product_list[i]).find(" .p0c-competition-tables__matches-played").text();
            let win = $(product_list[i]).find(".p0c-competition-tables__matches-won").text();
            let draw = $(product_list[i]).find(".p0c-competition-tables__matches-drawn").text();
            let lose = $(product_list[i]).find(".p0c-competition-tables__matches-lost").text();
            let goal = $(product_list[i]).find(".p0c-competition-tables__goals-for").text();
            let fail = $(product_list[i]).find(".p0c-competition-tables__goals-against").text();
            let score = $(product_list[i]).find(".p0c-competition-tables__pts").text();
            list.push({ top20: top20, list_img: list_img, play: play, win: win, draw: draw, lose: lose, goal: goal, fail: fail, score: score });
        }

        res.render('top', { msg: '세리에 A 리그 순위', list: list });
    });
});
app.get('/bundesliga', function (req, res) {
    request("https://www.goal.com/kr/%EB%B6%84%EB%8D%B0%EC%8A%A4%EB%A6%AC%EA%B0%80/%EC%88%9C%EC%9C%84/6by3h89i2eykc341oz7lv1ddd", function (err, response, body) {
        $ = cheerio.load(body);
        let product_list = $(".p0c-competition-tables__table > tbody tr");
        let list = [];
        for (let i = 0; i < product_list.length; i++) {
            top20 = $(product_list[i]).find(".p0c-competition-tables__team span").text();
            list_img = $(product_list[i]).find(".p0c-competition-tables__crest").attr("data-srcset");
            let play = $(product_list[i]).find(" .p0c-competition-tables__matches-played").text();
            let win = $(product_list[i]).find(".p0c-competition-tables__matches-won").text();
            let draw = $(product_list[i]).find(".p0c-competition-tables__matches-drawn").text();
            let lose = $(product_list[i]).find(".p0c-competition-tables__matches-lost").text();
            let goal = $(product_list[i]).find(".p0c-competition-tables__goals-for").text();
            let fail = $(product_list[i]).find(".p0c-competition-tables__goals-against").text();
            let score = $(product_list[i]).find(".p0c-competition-tables__pts").text();
            list.push({ top20: top20, list_img: list_img, play: play, win: win, draw: draw, lose: lose, goal: goal, fail: fail, score: score });
        }
        res.render('top', { msg: '분데스리가 순위', list: list });
    });
});
app.get('/board' ,function(req, res){
    res.render('board', {});
});
app.post('/board', function (req, res) {
    let url = ["https://www.goal.com/kr/%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4-%EB%A6%AC%EA%B7%B8/%EC%88%9C%EC%9C%84/2kwbbcootiqqgmrzs6o5inle5", "https://www.goal.com/kr/%ED%94%84%EB%A6%AC%EB%A9%94%EB%9D%BC-%EB%A6%AC%EA%B0%80/%EC%88%9C%EC%9C%84/34pl8szyvrbwcmfkuocjm3r6t",
    "https://www.goal.com/kr/%EC%84%B8%EB%A6%AC%EC%97%90-a/%EC%88%9C%EC%9C%84/1r097lpxe0xn03ihb7wi98kao","https://www.goal.com/kr/%EB%B6%84%EB%8D%B0%EC%8A%A4%EB%A6%AC%EA%B0%80/%EC%88%9C%EC%9C%84/6by3h89i2eykc341oz7lv1ddd"]
    for(let j = 0; j < 4; j++){
        request(url[j], function (err, response, body) {

            $ = cheerio.load(body);
            let list = [];
            let product_list = $(".p0c-competition-tables__table > tbody tr");
            for (let i = 0; i < product_list.length; i++) {
                let league = $(".dropdown__btn span:first-child").text();
                let top20 = $(product_list[i]).find(".p0c-competition-tables__team span").text();
                let img = $(product_list[i]).find(".p0c-competition-tables__crest").attr("data-srcset");
                let win = $(product_list[i]).find(".p0c-competition-tables__matches-won").text();
                let play = $(product_list[i]).find(" .p0c-competition-tables__matches-played").text();
                let draw = $(product_list[i]).find(".p0c-competition-tables__matches-drawn").text();
                let lose = $(product_list[i]).find(".p0c-competition-tables__matches-lost").text();
                let score = $(product_list[i]).find(".p0c-competition-tables__pts").text();
                list = [
                    [i+1, league,img, top20, play, win, draw, lose, score]];
                    console.log(league);
                    let sql = "INSERT INTO soccer (rank, league, img, team, play, win, draw, lose, score) VALUES ?";
                conn.query(sql, [list], function (err, result, fields) {
            });
            }
            
        });
    }
    
    let sql = "SELECT * FROM soccer WHERE  (team LIKE ? or league LIKE ?) ORDER BY rank ASC";
    let word = req.body.word;
    word = qs.escape(word);
    word = "%" + req.body.word + "%";
    console.log(word);
    conn.query(sql, [word,word], function(err, result){
        res.render('board', {msg:'검색 결과',list:result});
    });
});
app.get('/datalab', function(req, res){
    res.render('datalab',{});
});
app.post('/datalab', function(req, res){
    
    let sql = "SELECT * FROM soccer WHERE ((league LIKE ?)and(rank <= ?)) ORDER BY rank ASC";
    let league = req.body.league;
    league = qs.escape(league);
    league = "%" + req.body.league + "%";
    let rank = req.body.rank;
    rank = qs.escape(rank);
    conn.query(sql, [league,rank], function(err, result){
        res.render('datalab', { msg: '검색 결과',list:result});
    });
});
let server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log(`Express 엔진이 ${app.get('port')}에서 실행중`);
});
