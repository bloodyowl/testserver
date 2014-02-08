var http = require("http")
  , tape = require("tape")

require("../")

tape("Bloodymock.js", function(test){
  test.plan(1)
  http.get("http://localhost:8080/foo", function(res){
    test.equal(res.statusCode, 405, "detects and applies mock")
    test.end()
    process.exit(0)
  }).on("error", function(e) {
    test.fail()
    test.end()
    process.exit(1)
  })
})

