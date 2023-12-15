//스크롤 부드럽게
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 2000)
})

gsap.ticker.lagSmoothing(0)

window.onload = function () {
    $('body, html').animate({
        scrollTop: (0, 0)
    });
}

//Text split
const split = new SplitType('.split', {
  types: 'chars',
});

//preloader
$('.count').each(function () {
  var $this = $(this),
    countTo = 100;
  $({
    countNum: $this.text()
  }).animate({
    countNum: countTo
  }, {
    duration: 2000,
    easing: 'linear',
    step: function () {
      $this.text(Math.floor(this.countNum));
    },
    complete: function () {
      $this.text(this.countNum);
    }
  });
});

const loaderTl = gsap.timeline({});
loaderTl.to('.preloader', {
  scale: 30,
  rotate: -90,
  duration: 1.5,
  opacity: 0,
  display: 'none',
  delay: 2,
  ease: "power1.inOut"
})

//gnb 
gsap.from('.header .inner .logo a .char', {
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trnasform',
  stagger: 0.05,
  delay: 1,
}, 'a')
gsap.from('.header .inner .btn_start .char', {
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trnasform',
  stagger: 0.05,
  delay: 1,
}, 'a+=0.2')
gsap.from('.header .inner .btn_allMenu .char', {
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trnasform',
  stagger: 0.05,
  delay: 1,
}, 'a+=0.4')
gsap.from('.header .inner .contact_wrap a .char', {
  transform: 'translate(0, 120%) scale(0.7, 2.3)',
  opacity: 0,
  willChange: 'opacity, trnasform',
  stagger: 0.05,
  delay: 1,
}, 'a+=0.6')
gsap.from('.header .inner .contact_wrap .ico', {
  opacity: 0,
  delay: 1,
}, 'a+=1.2')

//Main
let mm = gsap.matchMedia();
mm.add("(min-width: 901px)", () => {
  const mainTl = gsap.timeline({})

  mainTl.from('.sc_main .main .overtitle span', 1, {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    marginLeft: 0,
    stagger: 0.05,
    delay: 4.5,
  })
  mainTl.to('.sc_main .main .overtitle span:nth-child(2)', 1, {
    marginLeft: '7.5vw',
  }, 'a')
  mainTl.to('.sc_main .main .overtitle span:nth-child(3)', 1, {
    marginLeft: '11.5vw',
  }, 'a')
  mainTl.to('.sc_main .main .overtitle span:nth-child(4)', 1, {
    marginLeft: '16.6vw',
  }, 'a')
  mainTl.to('.sc_main .main .overtitle span:nth-child(5)', 1, {
    marginLeft: '37.09vw',
  }, 'a')
  mainTl.from('.sc_main .main .head_wrap .main_head .main_head_top .char', 1.5, {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    stagger: 0.05,
    ease: "back.inOut(2)",
  }, 'a')
  mainTl.from('.sc_main .main .head_wrap .main_head .main_head_mid .char', 1.5, {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    stagger: 0.05,
    ease: "back.inOut(2)",
  }, 'a+=0.1')
  mainTl.from('.sc_main .main .head_wrap .main_head .main_head_btm .char', 1.5, {
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trnasform',
    stagger: 0.05,
    ease: "back.inOut(2)",
  }, 'a+=0.2')

  mainTl.from('.sc_main .main .big_title .char', 1, {
    transform: 'translate(0, 1170px)',
    opacity: 0,
    willChange: 'trnasform',
    stagger: {
      each: 0.05,
      from: 'center',
    },
  })

  //About
  aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_about",
      start: "0% 90%",
      end: "30% 80%",
      scrub: 1,
      // markers: true,
    },
  })
  aboutTl.from('.sc_about .about_top .headline .char', 1.5, {
    transformOrigin: '50% 0%',
    transform: ' translate(0%, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trasnfrom',
    stagger: {
      each: 0.03,
      amount: 0.5,
    },
    ease: "back.inOut(2)",
  }, 'a')
  aboutTl.from('.sc_about .about_top .section_txt .char', 1.5, {
    transformOrigin: '50% 0%',
    transform: ' translate(0%, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trasnfrom',
    stagger: {
      each: 0.03,
      amount: 0.5
    },
    ease: "back.inOut(2)",
  }, 'a')

  let imgFlag = false;

  aboutTl3 = gsap.timeline({
    paused: true,
    onUpdate: self => {
      if (!imgFlag) {
        imgFlag = true;
      }
    },
    onComplete: function () {
      setTimeout(() => {
        imgFlag = false;
      }, 300);
    }
  });
  aboutTl3.to('.sc_about .about_txt img', {
    yPercent: 5
  });
  aboutTl3.to('.sc_about .about_txt img', {
    yPercent: 0
  });
  ScrollTrigger.create({
    trigger: ".sc_about",
    start: "0% 0%",
    end: "100% 100%",
    onUpdate: self => {
      if (self.direction > 0) {
        if (!imgFlag) {
          aboutTl3.restart();
        }
      }
    }
  })

  aboutTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_about",
      start: "0% 0%",
      end: "30% 0%",
      scrub: 1,
      // markers: true,
    },
  });

  aboutTl2.from('.sc_about .about_txt_wrap .about_txt .char', {
    transformOrigin: '50% 0%',
    transform: ' translate(0%, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, transform',
    stagger: {
      each: 0.03,
      amount: 1,
    },
  })
})

// .fromTo('.sc_about .about_container .about_txt img', {
// transform: 'translate(0%, 0%)',
// }, {
//   transform: 'translate(0%, 40%)',
// })


// aboutTl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sc_about",
//     start: "0% 0%",
//     end: "100% 100%",
//     ease: "back.inOut(2)",
//     markers: true
//   },
// })
// aboutTl3.fromTo('.sc_about .about_container .about_txt img', {
//   transform: 'translate(0%, 0%)',
// }, {
//   transform: 'translate(0%, 40%)',
// })

//Service
serviceTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc_service",
    start: "0% 50%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
})

serviceTl.to('.sc_service  .labels_inner', {
  xPercent: -15,
  willChange: 'transform'
}, 'a')
serviceTl.to('.sc_service  .service_bg', {
  yPercent: -5,
  willChange: 'transform'
}, 'a')

//Work
mm.add("(min-width: 901px", () => {
  workTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_work .work_head",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
    },
  })
  workTl.from('.sc_work .work_head  .healine_wrap', 1, {
    transform: 'translate(-50%, -50%) scale(5,5)'
  }, 'a')

  hori = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_work .sticky_wrap',
      start: "3% 0%",
      end: "100% 100%",
      scrub: 0,
      invalidateOnRefresh: true,
      onUpdate: function () {}
    },
    defaults: {
      ease: "none",
    }
  })
  hori.to('.work_body_inner', {
    xPercent: -100,
    x: function () {
      return window.innerWidth;
    },
  }, 'a')

  hori2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc_work',
      start: "10% 0%",
      end: "100% 100%",
      scrub: 0,
    },
    defaults: {
      ease: "none",
    }
  })

  hori2.to(".sc_work", {
    backgroundColor: "#FD8D14",
    ease: "none"
  })
  hori2.to(".sc_work", {
    backgroundColor: "#E556AE",
    ease: "none"
  })
  hori2.to(".sc_work", {
    backgroundColor: "#0000F4",
    ease: "none"
  })
  hori2.to(".sc_work", {
    backgroundColor: "#4FA778",
    ease: "none"
  })
  hori2.to(".sc_work", {
    backgroundColor: "#000",
    ease: "none"
  })

  //Fragments
  fragmentTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_fragments .inner",
      start: "0% 50%",
      end: "90% 100%",
      scrub: 1,
      //markers: true,
    },
  })
  fragmentTl.from('.sc_fragments .fragments_top .st1 .char:nth-child(3)', 1, {
    transform: 'translate(0, 24vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')
  fragmentTl.from('.sc_fragments .fragments_top .st1 .char:nth-child(4)', 1, {
    transform: 'translate(0, 46vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')

  fragmentTl.from('.sc_fragments .fragments_top .st2 .char:nth-child(3)', 1, {
    transform: 'translate(0, 34vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')
  fragmentTl.from('.sc_fragments .fragments_top .st2 .char:nth-child(4)', 1, {
    transform: 'translate(0, 34vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')
  fragmentTl.from('.sc_fragments .fragments_top .st2 .char:nth-child(5)', 1, {
    transform: 'translate(0, 24vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')
  fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(1)', 1, {
    transform: 'translate(0, 77vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')
  fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(2)', 1, {
    transform: 'translate(0, 77vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')
  fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(3)', 1, {
    transform: 'translate(0, 77vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')
  fragmentTl.from('.sc_fragments .fragments_top .st3 .char:nth-child(4)', 1, {
    transform: 'translate(0, 40vh)',
    willChange: 'transform',
    stagger: 0.1,
  }, 'a')

  fragmentTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_fragments .inner",
      start: "0% 50%",
      end: "100% 100%",
      scrub: 1,
      //markers: true,
    },
  })
  fragmentTl2.from('.sc_fragments .fragments_title_wrap .big_title .char', 1.5, {
    transform: 'translate(0, 1170px)',
    opacity: 0,
    willChange: 'transform, opacity',
    stagger: {
      each: 0.05,
      from: 'center',
    },
  })

  fragmentTl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_fragments .item_wrap",
      start: "0% 100%",
      end: "100% 100%",
      //markers: true,
    },
  })

  const fragmentsTl3 = gsap.timeline({
    repeat: -1
  })
  fragmentsTl3.to('.sc_fragments .coment .coment_bg', 1, {
    backgroundColor: '#855CFE'
  }).to('.sc_fragments .coment .coment_bg', 1, {
    backgroundColor: '#4FA778'
  }).to('.sc_fragments .coment .coment_bg', 1, {
    backgroundColor: '#E03122'
  }).to('.sc_fragments .coment .coment_bg', 1, {
    backgroundColor: '#0000F4'
  }).to('.sc_fragments .coment .coment_bg', 1, {
    backgroundColor: '#855CFE'
  })

  fragmentTl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_fragments",
      start: "80% 0%",
      end: "100% 100%",
      scrub: 0,
      //markers: true,
    },
  })
  fragmentTl4.to('.sc_fragments .big_title', {
    opacity: 0
  })
})

//footer
mm.add("(min-width: 901px)", () => {
  footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "0% 100%",
      end: "40% 70%",
      scrub: 1,
      // markers: true,
    },
  })
  footerTl.from('.footer h2.headline .char', 1.5, {
    transformOrigin: '50% 0%',
    transform: ' translate(0%, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'opacity, trasnfrom',
    stagger: {
      each: 0.03,
      // amount: 1,
    },
    ease: "back.inOut(2)",
  })

  footerTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "0% 80%",
      end: "100% 100%",
      scrub: 0,
      //markers: true,
    },
  })
  footerTl2.from('.footer .inner .col_left .tit .char', {
    transformOrigin: '50% 0%',
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'transform, opacity',
    stagger: 0.01,
    ease: "back.inOut(2)",
  }, 'a')

  footerTl2.from('.footer .inner .col_left .email .char', {
    transformOrigin: '50% 0%',
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'transform, opacity',
    stagger: 0.01,
    ease: "back.inOut(2)",
  }, 'a')
  footerTl2.from('.footer .inner .col_right .txt_box .char', {
    transformOrigin: '50% 0%',
    transform: 'translate(0, 120%) scale(0.7, 2.3)',
    opacity: 0,
    willChange: 'transform, opacity',
    stagger: 0.01,
    ease: "back.inOut(2)",
  }, 'a')
})

//cursor
var cursor = $(".cursor");
var radius = cursor.width() / 2

var posX = 0,
  posY = 0;
var mouseX = 0,
  mouseY = 0;

$(window).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, 1, {
    css: {
      left: mouseX - radius,
      top: mouseY - radius
    }
  });

  gsap.to('.sc_main .main_video', {
    transform: `translate(${mouseX/10}px, ${mouseY/10}px)`
  })
  gsap.to('.all_menu .img_wrap', {
    css: {
      left: mouseX - radius,
      top: mouseY - radius,
    }
  })
  // $('.all_menu .gnb').hover(function () {
  //   $('.img_wrap').addClass('show')
  // }, function () {
  //   $('.img_wrap').removeClass('show')
  // })
})

$('a, button').hover(function () {
  $('.cursor').css('transform', 'scale(5,5)')
}, function () {
  $('.cursor').css('transform', 'scale(1,1)')
})

//allmenu
const transitionTl = gsap.timeline({
  paused: true,
  onReverseComplete: function () {
    $('.all_menu').removeClass('open')
  }
})
transitionTl.to(".transition", {
  duration: 1.4,
  ease: "power2.inOut",
  scale: 2.7,
  rotate: -90,
  backgroundColor: "#000",
  zIndex: 99
}, 0).to(".transition_line", {
  translateX: "20%",
  duration: 1,
  ease: "power1.inOut",
  stagger: .04
}, 0).to(".transition_line", {
  opacity: 1,
  duration: 1,
  ease: "power1.in"
}, 0).to(".transition_line", {
  translateX: "60%",
  duration: 1,
  ease: "power1.inOut",
  stagger: .04
}, 1).to('.all_menu .transition', {
  display: 'none'
}, 'a').to('.all_menu .inner', {
  left: 0,
}, 'a').from('.all_menu .logo', {
  willChange: 'opacity, transform',
  opacity: 0,
  yPercent: 120,
  scaleY: 2.3,
  scaleX: .7,
  transformOrigin: '50% 0%'
}, 'b').from('.all_menu .btn_close', {
  willChange: 'opacity',
  opacity: 0,
  scaleY: 2,
  scaleX: 2,
}, 'b').from('.all_menu .gnb ul li a', {
  willChange: 'opacity, transform',
  opacity: 0,
  yPercent: 120,
  scaleY: 2.3,
  scaleX: .7,
  transformOrigin: '50% 0%'
}, 'b')

$('.all_menu .gnb ul li a').click(function (e) {
  e.preventDefault();
  targetName = $(this).data('target');
  transitionTl.reverse();
  lenis.scrollTo(targetName);
})

// $('.gnb li').hover(function(){
//   idx= $(this).index();
//   gsap.to('.all_menu .img_wrap img',{
//     yPercent:-100*idx
//   })
// })

$('.btn_allMenu').click(function () {
  transitionTl.play();
  $('.all_menu').addClass('open')
})
$(".btn_close").click(function () {
  transitionTl.reverse();
})
