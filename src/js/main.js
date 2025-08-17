console.log("js 연결됨");

// 전체 섹션 스크롤 제어
const sections = document.querySelectorAll('section:not(#page1)');
let currentSection = 0;
let isScrolling = false;
let allowScrollTrigger = false; // 휠제어 시작 여부

const page1 = document.querySelector("#page1");

// 1. page1 스크롤 끝 감지
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const page1Bottom = page1.offsetTop + page1.offsetHeight;

  // page1 거의 끝까지 스크롤하면 휠 이벤트 활성화
  if (scrollY >= page1Bottom - window.innerHeight * 1.05) {
    allowScrollTrigger = true;
  } else {
    allowScrollTrigger = false;
  }
});

// 2. 휠 이벤트로 section 이동
window.addEventListener("wheel", (e) => {
  if (!allowScrollTrigger) return; // page1 끝나기 전까지 무시
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++;
  } else if (e.deltaY < 0 && currentSection > 0) {
    currentSection--;
  }

  sections[currentSection].scrollIntoView({
    behavior: "smooth",
  });

  setTimeout(() => {
    isScrolling = false;
  }, 1500);
});


//  #page1.title 영역 스크롤 시 왼쪽으로 슬라이드
gsap.registerPlugin(ScrollTrigger);

gsap.to("#page1 .title", {
  x: "-120%", // 왼쪽으로 나가게 (원하는 만큼 조절 가능)
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top", // 300vh 만큼 스크롤되는 동안
    scrub: 2,       // 스크롤 연동
  }
});


//  #page2 마우스 따라 움직이는 이미지

$(function () {
  let baseRight1, baseBottom1, baseLeft2, baseTop2;

  function updateBasePositions() {
    baseRight1 = $(window).width() * 0.2;   // pebbles1 기본 right
    baseBottom1 = $(window).height() * 0.1; // pebbles1 기본 bottom
    baseTop2 = $(window).height() * 0.2;   // 20%로 내려서 보이게
    baseLeft2 = $(window).width() * 0.25; // 25%로 왼쪽으로 이동
  }

  // 초기값 계산
  updateBasePositions();

  // 창 크기 변경될 때 다시 계산
  $(window).on("resize", updateBasePositions);

  $("#page2").on("mousemove", function (e) {
    let posX = e.pageX;
    let posY = e.pageY;

    $(".pebbles1").css({
      right: baseRight1 + (posX / 100),
      bottom: baseBottom1 - (posY / 80)
    });

    $(".pebbles2").css({
      top: baseTop2 + (posX / 100),
      left: baseLeft2 - (posY / 80) // left 대신 right 사용
    });
  });
});


//  #page3 애니메이션 트리거
const mainArea = document.querySelector('#page3 .main_area');
const etcArea = document.querySelector('#page3 .etc_area');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
      mainArea.classList.add('show');
      etcArea.classList.add('show');
    } else {
      mainArea.classList.remove('show');
      etcArea.classList.remove('show');
    }
  });
}, {
  threshold: [0.3]
});

const page3 = document.querySelector('#page3');
if (page3) observer.observe(page3);


// #page4 , #page5 hover시 오버레이+글자
document.querySelectorAll('#page4 .project, #page5 .project').forEach(project => {
    // 오버레이 요소 생성
    const overlayBg = document.createElement('div');
    overlayBg.classList.add('overlay-bg');

    const overlayText = document.createElement('div');
    overlayText.classList.add('overlay-text');
    overlayText.textContent = 'Click me';

    project.appendChild(overlayBg);
    project.appendChild(overlayText);

    // 이벤트 연결
    project.addEventListener('mouseenter', () => {
      project.classList.add('hovered');
    });

    project.addEventListener('mouseleave', () => {
      project.classList.remove('hovered');
    });
  });
