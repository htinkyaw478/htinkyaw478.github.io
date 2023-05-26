$(document).ready(function(){
    $('.sliders').ripples({
  dropRadius: 15,
  perturbance: 0.03,
});

$('.profolio').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  gallery: {
      enabled: true
    },
  type: 'image'
  // other options
});
$('#team_members').owlCarousel({
  item:3,
  autoplay: true,
  smartSpeed: 700,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items: 1
    },
    480:{
      items: 2
    },
    768:{
      items: 3
    }
  }
});
$('.counter').counterUp({
    delay: 10,
    time: 5000
});
})
