var CryptoJS = require("crypto-js");

function alertName() {
	var file = document.getElementById('name');
    
    file.addEventListener('change', function() {
        alert("File name: " + this.files[0].name );
    });
}

function alertSize(){    
    var file = document.getElementById('size');
    
    file.addEventListener('change', function() {
        alert("Size : " + this.files[0].size + " bytes");
    });
}

function alertSha1(){
	var file = document.getElementById('sha1');

    file.addEventListener('change', function() {
        alert("Sha1 Digest of " + this.files[0].name + ": " + CryptoJS.SHA1(this.files[0].name).toString());
    });
}

function alertMD5() {
	var file = document.getElementById('md5');

    file.addEventListener('change', function() {
        alert("MD5 Digest of " + this.files[0].name + ": " + CryptoJS.MD5(this.files[0].name).toString());
    });
}