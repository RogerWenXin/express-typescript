module.exports = function(res) {
   return res.header('Access-Control-Allow-Origin', '*')
      .header('Access-Control-Allow-Methods', 'post')
      .header('Access-Control-Allow-Headers', 'x-requested-with,content-type')
}