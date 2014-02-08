# testserver

## install

```
$ npm install -g bloody-testserver
```

## run

```javascript
$ bloodyserver [port=8080]
```

## mocks

If you need to mock an API, use a `Bloodymock.js` file in your directory : 

```javascript
module.exports = function(app){
  app.get("/foo", function(req, res){
    res.status(405)
    res.end("")
  })
}
```
