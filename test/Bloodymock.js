module.exports = function(app){
  app.get("/foo", function(req, res){
    res.status(405)
    res.end("")
  })
}
