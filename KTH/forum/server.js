const express = require('express');
const app = express();
const {MongoClient, ObjectId} = require('mongodb');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let db;
const url =
  'mongodb+srv://admin:qwer1234@atlascluster.ri2pein.mongodb.net/?retryWrites=true&w=majority';
new MongoClient(url)
  .connect()
  .then((client) => {
    app.listen(8080, () => {
      console.log('http://localhost:8080 에서 서버 실행중');
    });
    console.log('DB연결성공');
    db = client.db('forum');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html');
});

app.get('/news', (요청, 응답) => {
  // db.collection('post').insertOne({title: '어쩌구'});
  응답.send('오늘 비옴');
});

app.get('/list', async (요청, 응답) => {
  let result = await db.collection('post').find().toArray(); // 모든 도큐멘트 출력
  // 응답.send(result[0].title);
  응답.render('list.ejs', {글목록: result});
});

app.get('/shop', (요청, 응답) => {
  응답.send('쇼핑페이지 입니다.');
});

app.get('/about', (요청, 응답) => {
  응답.sendFile(__dirname + '/introduce.html');
});

app.get('/time', async (요청, 응답) => {
  응답.render('time.ejs', {현재시간: new Date()});
});

app.get('/write', (요청, 응답) => {
  응답.render('write.ejs');
});

app.post('/add', async (요청, 응답) => {
  let a = 요청.body.title;
  let b = 요청.body.content;

  try {
    if (요청.body.title == '') {
      응답.send('제목을 입력 해 주세요.');
    } else {
      await db.collection('post').insertOne({title: a, content: b});
      응답.redirect('/list');
    }
  } catch (e) {
    console.log(e);
    응답.status(500).send('서버 에러');
  }
});

app.get('/detail/:id', async (요청, 응답) => {
  try {
    let result = await db.collection('post').findOne({_id: new ObjectId(요청.params.id)});
    if (result == null) {
      응답.status(400).send('이상한 url 입력함');
    }
    // console.log(result);
    // console.log(요청.params);
    응답.render('detail.ejs', {상세글목록: result});
  } catch (e) {
    console.log(e);
    응답.status(400).send('이상한 url 입력함');
  }
});

app.get('/edit/:id', async (요청, 응답) => {
  let result = await db.collection('post').findOne({_id: new ObjectId(요청.params.id)});
  응답.render('edit.ejs', {result: result});
});

app.put('/update', async (요청, 응답) => {
  // await db.collection('post').updateMany({_id: 1}, {$mul: {like: 5}});

  let a = 요청.body.title;
  let b = 요청.body.content;
  let c = 요청.body.id;

  try {
    if (요청.body.title == '') {
      응답.send('제목을 입력 해 주세요.');
    } else {
      await db.collection('post').updateOne({_id: new ObjectId(c)}, {$set: {title: a, content: b}});
      응답.redirect('/list');
    }
  } catch (e) {
    console.log(e);
    응답.status(500).send('서버 에러');
  }
});

app.delete('/delete', (요청, 응답) => {
  // 요청.body._id = parseInt(요청.body._id);
  db.collection('post').deleteOne({_id: new ObjectId(요청.query.docid)});
  // 응답.redirect('/list');
});
