// 헤더 이미지 슬라이드
const slideItem = document.querySelectorAll("#title_img .slide_item");
const prevBtn = document.querySelector("#btns .prev");
const nextBtn = document.querySelector("#btns .next");

function autoSlide() {
  let i = 0;
  prevBtn.addEventListener("click", () => {
    slideItem[i].classList.remove("active");
    i--;

    if (i < 0) {
      i = slideItem.length - 1;
    }
    slideItem[i].classList.add("active");
  });

  nextBtn.addEventListener("click", () => {
    slideItem[i].classList.remove("active");
    i++;
    if (i >= slideItem.length) {
      i = 0;
    }
    slideItem[i].classList.add("active");
  });
}

setInterval(function () {
  nextBtn.click();
}, 5000);

autoSlide();

// 메뉴 슬라이드
 $(document).ready(function(){
		$("nav ul.sub_menu").hide();
		$("nav ul#menu li").click(function(){
			$("ul",this).slideToggle("fast");
		});
	});
 
// 버튼클릭
 $(function(){
 
 $("#slide-open").click(function()    {
   if($("#burgur").hasClass('on')){
     $("#burgur").removeClass('on');
     $("#slide").removeClass('on');
    
   } else{
     $("#burgur").addClass('on');
    $("#slide").addClass('on'); 
   }
 });
 
});
   



// 제품소개 swiper
/* new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

   breakpoints: {
    415: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  
}); */
$(document).ready(function () {
  slideAct();
})

function slideAct(){
  var view = 0; //보이는 슬라이드 개수
  var realInx = 0; //현재 페이지
  var swiper = undefined;

  //디바이스 체크
  var winWChk = '';
  $(window).on('load resize', function (){
    var winW = window.innerWidth;
    if(winWChk != 'mo' && winW <= 768){ //모바일 버전으로 전환할 때
      slideList()
      winWChk = 'mo';
    }
    if(winWChk != 'pc' && winW >= 769){ //PC 버전으로 전환할 때
      slideList()
      winWChk = 'pc';
    }
  })  

  function slideList(){
    //리스트 초기화
    if ($('.slider .list').parent().hasClass('swiper-slide')){
      $('.slider .swiper-slide-duplicate').remove();
      $('.slider .list').unwrap('swiper-slide');
    }

    //보이는 슬라이드 개수 설정
    if (window.innerWidth > 768){ //PC 버전
      view = 6;
    }else{ //mobile 버전
      view = 6;
    } 

    //리스트 그룹 생성 (swiper-slide element 추가)
    var num = 0;
    $('.slider').find('.list').each(function(i) {
      $(this).addClass('list'+(Math.floor((i+view)/view)));
      num = Math.floor((i+view)/view)
    }).promise().done(function(){
      for (var i = 1; i < num+1; i++) {
        $('.slider').find('.list'+i+'').wrapAll('<div class="swiper-slide"></div>');
        $('.slider').find('.list'+i+'').removeClass('list'+i+'');
      }
    });

    sliderStart()
  }

  //슬라이드 시작
  function sliderStart(){
    //슬라이드 초기화
    if(swiper != undefined) {
      swiper.destroy();
      swiper == undefined;
    }

    //슬라이드 실행
    swiper = new Swiper('.slider .inner', {
      slidesPerView: 1,
      initialSlide :Math.floor(realInx/view),
      resistanceRatio : 0,
      loop:true,
      navigation: {
        nextEl: $('.slider').find('.swiper-next'),
        prevEl: $('.slider').find('.swiper-prev'),
      },
      on: {
        slideChange: function () {
          realInx = this.realIndex*view
        }
      },
    });
  }
} 
