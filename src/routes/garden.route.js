const express = require('express')
const makeRespose = require('./makeResponse');
module.exports = function gardenRoute(app) {
  app.post('/confession/garden-config', (req, res)=> {
    makeRespose(res).json({ code: 0, data: {} });
  })
  
  // express().post('', (req,res) => {
  //   res.header('Access-Control-Allow-Origin', '*')
  //     .header('Access-Control-Allow-Methods', 'post')
  //     .header('Access-Control-Allow-Headers', 'x-requested-with,content-type')
  // })


}