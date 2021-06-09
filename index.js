/*
 * @Description: 
 * @Version: 2.0
 * @Author: Yaowen Liu
 * @Date: 2021-06-01 10:11:12
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-06-02 18:12:38
 */
var express = require('express');

var app = express();

app.use(express.static('static'));

// app.get('/getName', function(res, req) {
//   req.send('dwadwda')
// })

app.listen(5000, function() {
  console.log('服务器启动: 5000');
})