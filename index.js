var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')

var CloudEditor = function (port, options) {
    this.filePath = options.filePath
    this.fileType = options.fileType || getFileTypeWithFilePath(options.filePath)
    this.port = port
    this.start()
}

var EXT_MAP = {
    'js': 'javascript',
    'java': 'java',
    'py': 'python'
}

var getFileTypeWithFilePath = function (filePath) {
    var t = filePath.split('.')
    var ext
    if (t.length > 0) {
        ext = t[t.length - 1]
    }
    var ret = EXT_MAP[ext] || 'text'
    return ret
}

CloudEditor.prototype.get = function (cb) {
    fs.readFile(this.filePath, function (err, content) {
        cb(err || ('' + content))
    })
}

CloudEditor.prototype.save = function (content, cb) {
    fs.writeFile(this.filePath, content, cb)
}

CloudEditor.prototype.start = function () {
    var app = express()
    app.use(bodyParser.text())
    app.use(bodyParser.urlencoded())
    app.use('/', express.static(__dirname + '/static'))
    var that = this
    app.get('/filecontent', function (req, res) {
        that.get(function (content) {
            res.send({
                fileType: that.fileType,
                content: content
            })
        })
    })
    app.post('/save', function (req, res) {
        that.save(req.body.data, function (err) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send('ok')
            }
        })
    })
    app.listen(this.port)
    console.log('CloudEditor already started, visit 127.0.0.1:' + this.port + ' to enjoy it!')
}

module.exports = CloudEditor