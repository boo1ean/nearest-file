## Find nearest file in path

```javascript
var find = require('nearest-file');
// Get content of nearest .gitconfig in given path from end to root
var config = find(__dirname, '.gitconfig');
```
