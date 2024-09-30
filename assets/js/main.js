(function ($) {
  "use strict";

  function OtherJs() {
    /*========== Preloader ==========*/
    $(window).on("load", () => {
      $("#preloader").fadeOut(500);
    });

    $(document).ready(function ($) {
      /* ========= Swiper Slider =========== */
      try {
        new Swiper(".cm-testimonial", {
          slidesPerView: 2,
          spaceBetween: 25,
          loop: true,
          dots: true,
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".pagination__dot",
            clickable: true,
          },
          breakpoints: {
            1601: {
              slidesPerView: 2,
            },
            1600: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            }
          },
        });
      } catch (error) {
        console.log('swiper js not loade')
      }
      // project slider
      try {
        new Swiper(".project-slider", {
          slidesPerView: 3,
          loop: true,
          dots: true,
          speed: 1000,
          spaceBetween: 25,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          breakpoints: {
            1601: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            700: {
              slidesPerView: 2.5,
            },
            650: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            }
          },
        });
      } catch (error) {
        console.log('swiper js not loade')
      }

      /*============ offcanvase Menu =========*/
      try {
        $(".cm-menu-overlay, .cm-close-icon, .light-mode, .dark-mode, .cm-menu ul li a.link").on("click", function () {
          $(".cm-offcanvase").removeClass("cm-active");
          $(".cm-menu-inner").removeClass("cm-active");
        }
        );
        $("#offcanvase, .offcanvase").on("click", function () {
          $(".cm-menu-inner").addClass("cm-active");
          $(".cm-offcanvase").addClass("cm-active");
        });
      } catch (error) {
        console.log("offcanvase Menu Not loaded");
      }
      /*=========== MENU ACTIVE LINK ==========*/
      document.addEventListener("DOMContentLoaded", function () {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('tab-action-item link');

        links.forEach(function (link) {
          const linkPath = link.getAttribute('href');
          if (linkPath === currentPath) {
            link.classList.add('active');
          }
          console.log(links)
        });
      });

      /*=========== SVG INJECT =========*/
      try {
        SVGInject(document.querySelectorAll("img.svg"));
      } catch (error) {
        console.log("svginject not working")
      }

    });

    // dark
    $(document).ready(function () {
      var rts_light = $('.mode-switcher');
      if (rts_light.length) {
        var toggle = $('#theme-mode, #theme-mode-2');
        var storedTheme = localStorage.getItem('axz-portfolio') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
          $('html').attr('data-theme', storedTheme);
        }
        toggle.click(function () {
          var currentTheme = $('html').attr('data-theme');
          var targetTheme = (currentTheme === "light") ? "dark" : "light";
          gsap.to('body', {
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
            onComplete: function () {
              $('html').attr('data-theme', targetTheme);
              localStorage.setItem('axz-portfolio', targetTheme);
              gsap.to('body', {
                opacity: 1,
                duration: 0.2,
                ease: "power1.out",
              });
            }
          });
        });
      }
    });

    // onepage nav
    $(document).ready(function () {
      const navClass = document.querySelectorAll('.link');
      const currentLocation = window.location.pathname;
      navClass.forEach(currentLink => {
        if (currentLink.href.includes(currentLocation)) {
          currentLink.classList.add('active');
        }
      })
    })

  }

  // delay function
  function delay(n) {
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  // gsap page animation
  function anim() {
    let tl = gsap.timeline();
    tl.to(".animation__screen", {
      duration: 1,
      width: "100%",
      left: "0%",
      ease: "Expo.easeInOut",
      // onComplete: function(){
      //   let path = window.location.pathname;
      //   let segments = path.split('/'); 
      //   let lastSegment = segments.pop(); 
      //   let namespace = lastSegment.replace(/\.html$/, ''); 
      //   // if (namespace === 'index') { namespace === 'خانه'}
      //   document.querySelector('.animation__screen').innerText = namespace;
      // }
      onComplete: function () {
        let path = window.location.pathname;
        let segments = path.split('/');
        let lastSegment = segments.pop();
        let namespace = lastSegment.replace(/\.html$/, '');

        let farsiTranslation = '';

        switch (namespace) {
          case 'index':
            farsiTranslation = 'خانه';
            break;
          case 'about':
            farsiTranslation = 'درباره ما';
            break;
          case 'blog-details':
            farsiTranslation = 'جزییات بلاگ';
            break;
          case 'blog':
            farsiTranslation = 'بلاگ';
            break;
          case 'contact':
            farsiTranslation = 'تماس با ما';
            break;
          case 'education':
            farsiTranslation = 'تحصیلات';
            break;
          case 'portfolio-details':
            farsiTranslation = ' جزییات نمونه کار';
            break;
          case 'portfolio':
            farsiTranslation = 'نمونه کار';
            break;
          case 'pricing':
            farsiTranslation = 'قیمت گذاری';
            break;
          case 'service':
            farsiTranslation = 'خدمات';
            break;

          default:
            farsiTranslation = namespace; // Default to namespace if translation not found
            break;
        }

        document.querySelector('.animation__screen').innerText = farsiTranslation;
      }

    });
    tl.to(".animation__screen", {
      duration: 1,
      width: "100%",
      left: "100%",
      ease: "Expo.easeInOut",
      delay: 0.5,
    });
    tl.set(".animation__screen", {
      left: "-100%"
    });
  }

  function textAnimate() {
    let tl = gsap.timeline();
    tl.from("h1.main-title", {
      duration: 1.3,
      y: 30,
      opacity: 0,
      stagger: 0.4,
      delay: 0.2,
    })
  }

  // animation
  function barbaAnim() {
    barba.init({
      sync: true,
      transitions: [{
        async leave(data) {
          const done = this.async();
          anim();
          await delay(1000);
          done();
        },
        async enter(data) {
          textAnimate();
        },
        async once(data) {
          textAnimate();
        }
      }]
    });
    barba.hooks.after(() => {
      OtherJs();
    });
  }
  // run barba
  barbaAnim();
  OtherJs();

})(jQuery);

