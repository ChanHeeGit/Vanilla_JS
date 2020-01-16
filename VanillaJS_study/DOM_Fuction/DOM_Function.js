//DOM은 html 안의 id를 가져와 DOM 객체로 바꾼다.
const title = document.getElementById("title");

//해당 id 안의 html을 바꿈
title.innerHTML="kkkkkkkkkkk";

//글자색 바꿈
title.style.color='red';

document.title = "MODIFY TITLE";