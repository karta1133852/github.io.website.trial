"use strict";
var aDatas = [
	"期末考QAQ<br>準備放寒假!!",
	"CYC<br>放寒假囉^ ^!!",
	"雲嘉會出遊<br>Dcard公布實習條件",
  "雲嘉會尾牙<br>Dcard面試",
	"母親節<br>雲嘉會美食周",
	"未定",
	"成大資訊營",
	"父親節",
	"未定",
	"未定",
	"未定",
	"未定",
];

window.onload = function() {
  
  /*function resize() {
    parent.document.getElementById("mainframe").height = document.body.scrollHeight + 'px';
  }*/
  
	var oDiv = document.getElementById('tab');
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aBtn = oUl.getElementsByTagName('li');
	var oTxt = oDiv.getElementsByTagName('div')[0];
	
  oUl.className = "engMonth";
	for (var i = 0; i < aBtn.length; i++) {
		aBtn[i].index = i;
		aBtn[i].onclick = function() {
			for (i = 0; i < aBtn.length; i++) {
				aBtn[i].className = '';
			}
			this.className = 'active';
			oTxt.innerHTML = '<h2>' + (this.index+1) + '月</h2><p>' + aDatas[this.index] + '</p>';
		};
	}
};
