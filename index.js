var path = require("path")
  , currentPath = path.resolve(".")
  , express = require("express")
  , http = require("http")
  , path = require("path")
  , app = express()
  , fs = require("fs")
  , parameters = process.argv.slice(2)
  , port = parameters[0] && parseInt(parameters[0], 10) || 8080
  , colors = {
      green: function (str) {
        return "\033[0m\033[32m" + str + "\033[0m"
      },
      red: function (str) {
        return "\033[0m\033[31m" + str + "\033[0m"
      },
      blue: function (str) {
        return "\033[0m\033[34m" + str + "\033[0m"
      },
      yellow: function (str) {
        return "\033[0m\033[33m" + str + "\033[0m"
      }
    }

console.log("\n  " + colors.red("Bloody server 💥\n") + "  ---\n")

app.configure(function () {
  app.use(express.compress())
  app.set("port", port)
  app.use(express.json())
  app.use(express.urlencoded())
  app.use(express.logger("dev"))
  app.use(express.static(currentPath))
})

if(fs.existsSync(path.resolve("./", "Bloodymock.js"))) {
  require(path.resolve("./", "Bloodymock.js"))(app)
}

http.createServer(app).listen(app.get("port"), function () {
  console.log(colors.blue("  Test server running on port ") + colors.green(app.get("port")) + "\n")
})
