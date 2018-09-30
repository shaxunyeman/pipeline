var fs = require('fs');
var preLoader = require('./preLoader');
var config = require('./StaticConfig');
var tools = require('./tools');
var progress = require('./progress_bar');

//var encryption = fs.readFileSync('E:\\work\\js\\ABS\\招商银行股份有限公司');
//var decryption = tools.decrypt(encryption.toString('utf8'), config.LoginKeys.secret);
//console.log(JSON.parse(decryption));

//var pb = new progress('download', 50);
//var num = 0;
//var total = 200;
//function download() {
//    if(num <= total) {
//        pb.render({completed:num, total: total});
//
//        num++;
//        setTimeout(function() {
//            download();
//        }, 500);
//    }
//}
//
//download();

preLoader.load();
