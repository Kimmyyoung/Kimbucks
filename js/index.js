

  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotion = false;

  promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion =! isHidePromotion;
    console.log(isHidePromotion);
    if(isHidePromotion === true) {
        promotionEl.classList.add('hide');
    }else {
        promotionEl.classList.remove('hide');
    }
  })


  // swiper 설정 
  new Swiper(".promotion .swiper-container", {
    direction: 'horizontal', // 수평 방향은 기본값이라 생략가능
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
      delay: 5000, // 5초 동안 자동 슬라이드
    },
    pagination: {
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 이전버튼 다음버튼
      prevEl: '.promotion .swiper-prev', // div 요소 선택자
      nextEl: '.promotion .swiper-next', // div 요소 선택자
    }
  });


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  loop: true,
  autoplay: {delay: 1000},  
});


//Scroll Magic 
const spyElems = document.querySelectorAll('section.scroll-spy');
spyElems.forEach((spyElems) => {
  new ScrollMagic
  .Scene({
    triggerElement: spyElems,
    triggerHook : .8
  })
  .setClassToggle(spyElems, 'show')
  .addTo(new ScrollMagic.Controller());
}) 