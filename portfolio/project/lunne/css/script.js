// AOS 적용
AOS.init();

// title 이미지 슬라이드
/* var currentIndex = 0;
setInterval(function () {
  if (currentIndex < 2) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  var slidePosition = currentIndex * (-100) + "%";
  $(".slideList").animate({ left: slidePosition }, 400);
}, 3000); */

// 메뉴 배경색
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos < 600) {
            $("nav").css('background-color', 'rgba(255,255,255,0)'),
                $('nav>#menu>li>a').css('color', '#fff'),
                $('nav>#login>li>a').css('color', '#fff');

        } else {
            $("nav").css('background-color', 'rgba(255,255,255,0.6)'),
                $('nav>#menu>li>a').css('color', '#000'),
                $('nav>#login>li>a').css('color', '#000');
        }
    });
});


// 컬렉션 이미지 슬라이드
var slides = document.querySelector('.product_img'),
    slide = document.querySelectorAll('.product_img li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 386,
    slideMargin = 40;

makeClone();

function makeClone() {
    for (var i = 0; i < slideCount; i++) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for (var i = slideCount - 1; i >= 0; i--) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function () {
        slides.classList.add('animate');
    }, 100);
}

function updateWidth() {
    var currentSlides = document.querySelectorAll('.product_img li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}
function setInitialPos() {
    var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}

function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;

    if (currentIdx == slideCount || currentIdx == -slideCount) {

        setTimeout(function () {
            slides.classList.remove('animate');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function () {
            slides.classList.add('animate');
        }, 600);
    }
}

// 컬렉션 자동슬라이드 적용
var timer = undefined;
function autoSlide() {
    if (timer == undefined) {
        timer = setInterval(function () {
            moveSlide(currentIdx + 1);
        }, 2000);
    }
}
autoSlide();
function stopSlide() {
    clearInterval(timer);
    timer = undefined;
}
slides.addEventListener('mouseenter', function () {
    stopSlide();
});
slides.addEventListener('mouseleave', function () {
    autoSlide();
});
