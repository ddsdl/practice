/* eslint-disable new-cap */
const express = require('express');
const boardDAO = require('./../models/boardDAO');
const router = express.Router();

// router.get('/Board', (req, res, next) => {
router.get('/BoardList', (req, res, next) => {
  const query = req.query;
  boardDAO.boardList(query, (resp) => {
    res.json(resp);
  });
});

// router.get('/Board/:id', (req, res, next) => {
router.get('/Board/:id', (req, res, next) => {
  const params = req.params; // { id:5 }
  boardDAO.board(params, (resp) => {
    res.send(resp);
  });
});
// router.post('/board', (req, res, next) => {

router.post('/insert', (req, res, next) => {
  const body = req.body;
  boardDAO.insert(body, (resp) => {
    res.send(resp);
  });
});
// router.put('/board', (req, res, next) => {

router.put('/update', (req, res, next) => {
  const body = req.body;
  boardDAO.update(body, (resp) => {
    res.send(resp);
  });
});

// router.delete('/board/:id', (req, res, next) => {

router.delete('/delete/:id', (req, res, next) => {
  const params = req.params; // { no: 1}
  boardDAO.delete(params, (resp) => {
    res.send(resp);
  });
});

module.exports = router;
