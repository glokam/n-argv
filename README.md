# n-argv
## node cli argv parser

### Getting started:
```js
const argv = require("n-argv");
```
### get
> argv.get(argName)
**argName** - *string*
**return** - *string*

```
node app.js --param value1 --param2 value2
```
```js
var arg = argv.get('param');
console.log(arg) // 'value1'
```
### contains
> argv.contains(tableOfArgs)
**tableOfArgs** - *table*
**return** - *boolean*
```
node app.js --param value1 --param2 value2
```
```js
argv.contains(['param2']); //return true
argv.contains(['param','param3']); //return false
```

### setPrefix
> argv.setPrefix(argPrefix)
**argPrefix** - *string*
```
node app.js --param value1 --param2 value2 -param3 value3
```
```js
argv.setPrefix('-']);
argv.get('param'); //return null
argv.get('param3'); //return value3
```
