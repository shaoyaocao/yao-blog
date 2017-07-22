//require('src/css/style.scss');
//require('style.css');
import css from 'src/assets/style/style.scss';

var path = require('path');
function getUrlQuery(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

class Main {
    test(){
        alert("Main_")
    }
}

var t = getUrlQuery('t');

if("1" === t) {
	System.import("src/scripts/components/test/chunk1").then(module => {
        let chunk=new module.default()
        chunk.test()
    }).catch(err => {
    	console.log("Chunk1 loading failed.");
 	});
}

if("2" === t) {
	System.import("src/scripts/components/test/chunk2").then(module => {
        let chunk=new module.default();
        chunk.test()
    }).catch(err => {
    	console.log("Chunk2 loading failed.");
 	});
}

var loadingImg = require('src/assets/img/img.jpg');
var img = document.createElement('img');
img.src = loadingImg;
document.getElementById("main").appendChild(img);