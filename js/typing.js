function changeText(cont1,cont2,speed){
	var Otext=cont1.text();
	var Ocontent=Otext.split("");
	var i=0;
	function show(){
		if(i<Ocontent.length)
		{		
			cont2.append(Ocontent[i]);
			i=i+1;
		};
	};
		var Otimer=setInterval(show,speed);	
};
$(document).ready(function(){
  changeText($(".origin-text"),$("#text"),150);
  changeText($(".origin-text2"),$("#text2"),150);  
});


// var text = "안녕하세요.<br> 성장하는 것을 좋아하는 이예진입니다.";

// var cnt = 0;
// var speed = 100; //글자가 찍히는 속도
// var timer1 = null;
// var word = "";

// function gogogo(){
//     word = text.substring(0, cnt);
//     document.getElementById('text').innerHTML =  word;
//     console.log(text.substring(cnt-1,cnt));
//     cnt++;
//     timer1 = setTimeout('gogogo()', speed);
//     speed = 100;
//     if(text.length < cnt){
//         // 아래 주석으로 처리된 부분을 지우면 한번만 실행됩니다.
//         clearTimeout(timer1)
//         cnt = 0;
//     }
//   }

//   gogogo();
// // $(document).ready(function(){
// //   gogogo();
// // });