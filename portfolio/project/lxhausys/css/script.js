// 헤더 이미지 슬라이드
const slideItem = document.querySelectorAll('#title_img .slide_item')
const prevBtn = document.querySelector("#btns .prev");
const nextBtn = document.querySelector("#btns .next");

function autoSlide() {
  let i = 0;
  prevBtn.addEventListener("click", () => {
    slideItem[i].classList.remove('active');
    i--;

    if (i < 0) {
      i = slideItem.length - 1;
    }
    slideItem[i].classList.add("active")
  });

  nextBtn.addEventListener('click', () => {
    slideItem[i].classList.remove('active');
    i++;
    if (i >= slideItem.length) {
      i = 0;
    }
    slideItem[i].classList.add('active');
  });
}

setInterval(function () {
  nextBtn.click()
}, 5000);

autoSlide();

// 제품소개 swiper
/* const swiper = new Swiper(".icon_swipper", {
  slidesPerView: 1, // 화면에 보여지는 이미지 갯수
  // spaceBetween: 30, 이미지 사이 간격
  loop: true,
  autoplay: {
    // 자동실행
    delay: 2500, // 2.5초 대기 후 이동
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 스크린 사이즈가 415보다 크거나 같으면 실행
    415: {
      slidesPerView: 2,
    },
  },
}); */
new Swiper('.swiper-container', {

  slidesPerView: 3, // 동시에 보여줄 슬라이드 갯수
  spaceBetween: 30, // 슬라이드간 간격
  slidesPerGroup: 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

  // 그룹수가 맞지 않을 경우 빈칸으로 메우기
  // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
  loopFillGroupWithBlank: true,

  loop: true, // 무한 반복

  pagination: { // 페이징
    el: '.swiper-pagination',
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  },
  navigation: { // 네비게이션
    nextEl: '.swiper-button-next', // 다음 버튼 클래스명
    prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
  },

  breakpoints: {
    415: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
