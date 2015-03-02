cloud-editor
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

A light weight file editor with a web page.

Installation
---

```sh
npm install cloud-editor [-g]
```

Usage
---

```shell

cloud-editor -f test.js -p 9000 -fileType javascript


```

OR

```javascript

var CloudEditor = require('cloud-editor')

new CloudEditor(9000, {
    filePath: './test.js',
    fileType: 'markdown'
})

```

Then you can visitor 127.0.0.1:9000 to editor your file.


License
---

ISC

[npm-image]: https://img.shields.io/npm/v/cloud-editor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cloud-editor
[downloads-image]: http://img.shields.io/npm/dm/cloud-editor.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/cloud-editor