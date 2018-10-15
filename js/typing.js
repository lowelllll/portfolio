var text = "안녕하세요. <br> 항상 성장하고 싶은 이예진입니다.";

var cnt = 0;
var speed = 100; //글자가 찍히는 속도
var timer1 = null;
var word = "";

function typing(){
    word = text.substring(0, cnt);
    if(cnt < text.length) {
      word += "|";
    }
    if(text.substring(cnt-1,cnt)!='<'){
      document.getElementById('text').innerHTML =  word;
    }
    cnt++;
    timer1 = setTimeout('typing()', speed);
    speed = 100;
    if(text.length < cnt){
        clearTimeout(timer1);
        cnt = 0;
    }
  }

  typing();