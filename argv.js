const args = process.argv.slice(2);
var prefix = '--';

function get (arg) {    
    var index = args.indexOf(prefix + arg);
if (index !== -1 && args[index + 1]) {
    return args[index + 1];
}
return null
};
function contains (val) {
    var valid = true;
    val.forEach(function (elem) {
        if (!get(elem)) {
            valid = false;
        }
    })
     return valid;
};

function setPrefix (str) {
    prefix = str;
}
module.exports = {
    get : get,
    contains: contains,
    setPrefix: setPrefix
}