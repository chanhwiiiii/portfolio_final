// 아이디가 circle인 요소를 찾아서 지정
const circle = document.querySelector("#circle");
// 태그명이 article인 요소를 찾아서 저장
const articles = circle.querySelectorAll("article");
// article의 전체 개수 만큼 반복하면서 mouseenter, mouseleave 이벤트 연결
for(let el of articles) {
  // article에 마우스 포인터를 올리면 부모인 #circle의 animation-play-state 값을 "paused"로 변경

  el.addEventListener("mouseenter", (e) => {circle.style.animationPlayState = "paused"});

  // article에 마우스 포인터를 떠나면 부모인 #circle의 animation-play-state 값을 "running"으로 변경
  el.addEventListener("mouseleave", (e) => {circle.style.animationPlayState = "running"});
};