// 헤더 이미지 슬라이드
const slideItem = document.querySelectorAll('#title_img .slide_item')
const prevBtn = document.querySelector("#btns .prev");
const nextBtn = document.querySelector("#btns .next");

function autoSlide() {
    let i = 0;
    prevBtn.addEventListener("click", () => {
        slideItem[i].classList.remove('active');
        i--;
        
        if(i < 0) {
            i=slideItem.length - 1;
        }
        slideItem[i].classList.add("active")
    });

    nextBtn.addEventListener('click', () => {
        slideItem[i].classList.remove('active');
        i++;
        if (i>=slideItem.length) {
            i=0;
        }
        slideItem[i].classList.add('active');
    });
}

setInterval(function(){
    nextBtn.click()
  }, 5000);
  
  autoSlide();

// 제품소개 swiper
const swiper = new Swiper(".icon_swipper", {
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
});