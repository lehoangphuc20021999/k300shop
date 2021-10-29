/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/backToTop.js":
/*!*****************************!*\
  !*** ./src/js/backToTop.js ***!
  \*****************************/
/*! exports provided: backToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backToTop", function() { return backToTop; });
function backToTop() {
  $(document).ready(function () {
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').addClass('open');
      } else {
        $('.back-to-top').removeClass('open');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false; //- Do có tag a nên dùng để tránh bị trở về đầu trang
    });
  });
}



/***/ }),

/***/ "./src/js/fixed-nav.js":
/*!*****************************!*\
  !*** ./src/js/fixed-nav.js ***!
  \*****************************/
/*! exports provided: fixedNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedNav", function() { return fixedNav; });
function fixedNav() {
  $(document).ready(function () {
    var mainNav = $(".header");
    var headerTop = $(".header-top");
    var headerHeight = $(".header-top").height() + $(".header-bottom").height();
    var headerTopHeight = $(".header-top").height();
    $(window).scroll(function () {
      if ($(window).width() < 768) {
        if ($(this).scrollTop() > headerTopHeight) {
          headerTop.addClass("fixed inView");
        } else {
          headerTop.removeClass("fixed inView");
        }
      } else {
        if ($(this).scrollTop() > headerHeight) {
          mainNav.addClass("fixed inView");
        } else {
          mainNav.removeClass("fixed inView");
        }
      }
    });
  });
}



/***/ }),

/***/ "./src/js/forgot-password-switch.js":
/*!******************************************!*\
  !*** ./src/js/forgot-password-switch.js ***!
  \******************************************/
/*! exports provided: forgotPasswordSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPasswordSwitch", function() { return forgotPasswordSwitch; });
function forgotPasswordSwitch() {
  $(document).ready(function () {
    $('#forgot-password').click(function () {
      $('#CustomerLoginForm').addClass('close');
      $('#CustomerForgetPasswordForm').addClass('open');
    });
    $('#return-login').click(function () {
      $('#CustomerLoginForm').removeClass('close');
      $('#CustomerForgetPasswordForm').removeClass('open');
    });
  });
}



/***/ }),

/***/ "./src/js/home-main-slider.js":
/*!************************************!*\
  !*** ./src/js/home-main-slider.js ***!
  \************************************/
/*! exports provided: homeMainSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeMainSlider", function() { return homeMainSlider; });
function homeMainSlider() {
  $(document).ready(function () {
    $('.main-slider').owlCarousel({
      margin: 0,
      items: 1,
      loop: false,
      rewind: true,
      dots: true,
      nav: true,
      autoHeight: false,
      smartSpeed: 1000
    });
  });
}



/***/ }),

/***/ "./src/js/home-new-arrivals.js":
/*!*************************************!*\
  !*** ./src/js/home-new-arrivals.js ***!
  \*************************************/
/*! exports provided: homeNewArrivalsSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeNewArrivalsSlider", function() { return homeNewArrivalsSlider; });
function homeNewArrivalsSlider() {
  $(document).ready(function () {
    $('.new-arrivals-slider').owlCarousel({
      margin: 0,
      items: 4,
      navText: ["<a><i class='fas fa-angle-left'></i></a>", "<a><i class='fas fa-angle-right'></i></a>"],
      loop: false,
      rewind: true,
      dots: true,
      nav: true,
      smartSpeed: 1000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          nav: true
        },
        768: {
          items: 3,
          nav: true
        },
        1200: {
          items: 4,
          nav: true,
          loop: false
        }
      }
    });
  });
}



/***/ }),

/***/ "./src/js/js-quantity.js":
/*!*******************************!*\
  !*** ./src/js/js-quantity.js ***!
  \*******************************/
/*! exports provided: jsQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsQuantity", function() { return jsQuantity; });
function jsQuantity() {
  $(document).ready(function () {
    $('.minus-icon').click(function () {
      var quantity = parseInt($('#quantity').val());
      quantity -= 1;

      if (quantity > 0) {
        $('#quantity').val(quantity);
      } else {
        $('#quantity').val(parseInt(1));
      }
    });
    $('.plus-icon').click(function () {
      var quantity = parseInt($('#quantity').val());
      quantity += 1;
      $('#quantity').val(quantity);
    });
  });
}



/***/ }),

/***/ "./src/js/modalAddCart.js":
/*!********************************!*\
  !*** ./src/js/modalAddCart.js ***!
  \********************************/
/*! exports provided: modalAddCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalAddCart", function() { return modalAddCart; });
function modalAddCart() {
  $(document).ready(function () {
    $('#addToCart').click(function () {
      $('#modalAddComplete, .overlay').addClass('open');
      $('body').css('overflow', 'hidden');
    });
    $('.modalAddComplete-close').click(function () {
      $('#modalAddComplete, .overlay').removeClass('open');
      $('body').css('overflow', 'visible');
    });
    $('.overlay').click(function () {
      $('#modalAddComplete, .overlay').removeClass('open');
      $('body').css('overflow', 'visible');
    });
    $('#addToCartForm').on('submit', function (e) {
      e.preventDefault(); // Now nothing will happen
    });
  });
}



/***/ }),

/***/ "./src/js/navToggleMobile.js":
/*!***********************************!*\
  !*** ./src/js/navToggleMobile.js ***!
  \***********************************/
/*! exports provided: navToggleMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navToggleMobile", function() { return navToggleMobile; });
function navToggleMobile() {
  $(document).ready(function () {
    function linksToogle() {
      var elm = $(".mobile-nav__toggle");

      if ($(window).width() < 768) {
        elm.parent().next('.sub-items').hide();

        if (elm.find("i").hasClass('fa-minus')) {
          elm.find("i").removeClass('fa-minus');
          elm.find("i").addClass('fa-plus');
        }

        elm.off('click.linksToogle').on('click.linksToogle', function (e) {
          $(this).parent().next('.sub-items').slideToggle(300);
          $(this).find("i").toggleClass('fa-minus fa-plus');
        });
      } else {
        elm.off('click.linksToogle');
        elm.parent().next('.sub-items').show();
      }
    }

    ;
    linksToogle();
    $(window).resize(function () {
      linksToogle();
    });
  });
}



/***/ }),

/***/ "./src/js/open-navMobile.js":
/*!**********************************!*\
  !*** ./src/js/open-navMobile.js ***!
  \**********************************/
/*! exports provided: openNavMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNavMobile", function() { return openNavMobile; });
function openNavMobile() {
  $(document).ready(function () {
    $(".fa-bars").click(function () {
      $(".header-bottom").addClass("open");
      $('.overlay').addClass('open');
      $('body').css('overflow', 'hidden');
    });
    $(".button.mobile-nav__close").click(function () {
      $(".header-bottom").removeClass("open");
      $('.overlay').removeClass('open');
      $('body').css('overflow', 'visible');
    });
  });
}



/***/ }),

/***/ "./src/js/openSearchHeader.js":
/*!************************************!*\
  !*** ./src/js/openSearchHeader.js ***!
  \************************************/
/*! exports provided: openSearchHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSearchHeader", function() { return openSearchHeader; });
function openSearchHeader() {
  $(document).ready(function () {
    $('.search-header').click(function () {
      $('.form-search-header').toggleClass('open');
    }); //- Click outside search

    $(document).on("click", function (e) {
      var container = $('.form-search-header');

      if (!container.is(e.target) && container.has(e.target).length === 0 && !$(e.target).hasClass('search-header')) {
        container.removeClass('open');
      }
    });
  });
}



/***/ }),

/***/ "./src/js/openSidebarCollection.js":
/*!*****************************************!*\
  !*** ./src/js/openSidebarCollection.js ***!
  \*****************************************/
/*! exports provided: openSidebarCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSidebarCollection", function() { return openSidebarCollection; });
function openSidebarCollection() {
  $(document).ready(function () {
    $('.filter').on('click', function () {
      $('.collection-sidebar').addClass('open');
      $('.collection-list').addClass('marginLeft');
    });
    $('.close-sideBar').on('click', function () {
      $('.collection-sidebar').removeClass('open');
      $('.collection-list').removeClass('marginLeft');
    });
  });
}



/***/ }),

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/*! exports provided: checkRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRadio", function() { return checkRadio; });
function checkRadio() {
  $(document).ready(function () {
    var i, x;

    for (i = 0; i <= 1; i++) {
      $("label[for*='swatch-" + i + "']:first").addClass("sd");
      $("label[for*='swatch-" + i + "']:first .img-check").addClass("block");
    } //- Nó sẽ chạy hết các class .input-product


    $('.input-product').click(function () {
      x = $(this).next().attr('for').split('-'); // Khi chọn button cụ thể thì sẽ xóa trạng thái các button xung quanh

      if ($(this).next().attr('for').includes("swatch-" + x[1] + "-")) {
        $("label[for*='swatch-" + x[1] + "']").removeClass("sd");
        $("label[for*='swatch-" + x[1] + "'] .img-check").removeClass("block");
      } // CSS khi chọn button cụ thể


      if ($('.input-product').is(':checked')) {
        $(this).next().addClass("sd");
        $("label[for='swatch-" + x[1] + "-" + x[2] + "'] .img-check").addClass("block");
      }
    });
  });
}



/***/ }),

/***/ "./src/js/related-slider.js":
/*!**********************************!*\
  !*** ./src/js/related-slider.js ***!
  \**********************************/
/*! exports provided: relatedSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relatedSlider", function() { return relatedSlider; });
function relatedSlider() {
  $(document).ready(function () {
    $('.related-product-slider').owlCarousel({
      margin: 0,
      items: 3,
      navText: ["<a><i class='fas fa-angle-left'></i></a>", "<a><i class='fas fa-angle-right'></i></a>"],
      loop: false,
      rewind: true,
      dots: true,
      nav: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  });
}



/***/ }),

/***/ "./src/js/resizeScreen.js":
/*!********************************!*\
  !*** ./src/js/resizeScreen.js ***!
  \********************************/
/*! exports provided: resizeScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeScreen", function() { return resizeScreen; });
function resizeScreen() {
  $(document).ready(function () {
    var mainNav = $(".header");
    var headerTop = $(".header-top");
    $(window).resize(function () {
      if ($(window).width() >= 768) {
        $('.overlay').trigger('click');
        headerTop.removeClass("fixed inView");
        mainNav.css('z-index', '101');
      } else {
        mainNav.removeClass("fixed inView");
        mainNav.css('z-index', '222');
      }
    });
  });
}



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_main_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-main-slider.js */ "./src/js/home-main-slider.js");
/* harmony import */ var _home_new_arrivals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-new-arrivals.js */ "./src/js/home-new-arrivals.js");
/* harmony import */ var _fixed_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-nav.js */ "./src/js/fixed-nav.js");
/* harmony import */ var _slider_image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-image.js */ "./src/js/slider-image.js");
/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.js */ "./src/js/products.js");
/* harmony import */ var _js_quantity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js-quantity.js */ "./src/js/js-quantity.js");
/* harmony import */ var _modalAddCart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalAddCart.js */ "./src/js/modalAddCart.js");
/* harmony import */ var _related_slider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./related-slider.js */ "./src/js/related-slider.js");
/* harmony import */ var _seen_product_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./seen-product.js */ "./src/js/seen-product.js");
/* harmony import */ var _navToggleMobile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navToggleMobile.js */ "./src/js/navToggleMobile.js");
/* harmony import */ var _open_navMobile_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./open-navMobile.js */ "./src/js/open-navMobile.js");
/* harmony import */ var _resizeScreen_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resizeScreen.js */ "./src/js/resizeScreen.js");
/* harmony import */ var _openSidebarCollection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./openSidebarCollection.js */ "./src/js/openSidebarCollection.js");
/* harmony import */ var _toggleItemsSidebar_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toggleItemsSidebar.js */ "./src/js/toggleItemsSidebar.js");
/* harmony import */ var _openSearchHeader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./openSearchHeader.js */ "./src/js/openSearchHeader.js");
/* harmony import */ var _forgot_password_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot-password-switch */ "./src/js/forgot-password-switch.js");
/* harmony import */ var _backToTop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./backToTop */ "./src/js/backToTop.js");

















Object(_home_main_slider_js__WEBPACK_IMPORTED_MODULE_0__["homeMainSlider"])();
Object(_home_new_arrivals_js__WEBPACK_IMPORTED_MODULE_1__["homeNewArrivalsSlider"])();
Object(_fixed_nav_js__WEBPACK_IMPORTED_MODULE_2__["fixedNav"])();
Object(_slider_image_js__WEBPACK_IMPORTED_MODULE_3__["sliderImage"])();
Object(_products_js__WEBPACK_IMPORTED_MODULE_4__["checkRadio"])();
Object(_js_quantity_js__WEBPACK_IMPORTED_MODULE_5__["jsQuantity"])();
Object(_modalAddCart_js__WEBPACK_IMPORTED_MODULE_6__["modalAddCart"])();
Object(_related_slider_js__WEBPACK_IMPORTED_MODULE_7__["relatedSlider"])();
Object(_seen_product_js__WEBPACK_IMPORTED_MODULE_8__["seenProduct"])();
Object(_navToggleMobile_js__WEBPACK_IMPORTED_MODULE_9__["navToggleMobile"])();
Object(_open_navMobile_js__WEBPACK_IMPORTED_MODULE_10__["openNavMobile"])();
Object(_resizeScreen_js__WEBPACK_IMPORTED_MODULE_11__["resizeScreen"])();
Object(_openSidebarCollection_js__WEBPACK_IMPORTED_MODULE_12__["openSidebarCollection"])();
Object(_toggleItemsSidebar_js__WEBPACK_IMPORTED_MODULE_13__["toggleItemsSidebar"])();
Object(_openSearchHeader_js__WEBPACK_IMPORTED_MODULE_14__["openSearchHeader"])();
Object(_forgot_password_switch__WEBPACK_IMPORTED_MODULE_15__["forgotPasswordSwitch"])();
Object(_backToTop__WEBPACK_IMPORTED_MODULE_16__["backToTop"])();

/***/ }),

/***/ "./src/js/seen-product.js":
/*!********************************!*\
  !*** ./src/js/seen-product.js ***!
  \********************************/
/*! exports provided: seenProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seenProduct", function() { return seenProduct; });
function seenProduct() {
  $(document).ready(function () {
    $('.seen-product-slider').owlCarousel({
      margin: 0,
      items: 4,
      navText: ["<a><i class='fas fa-angle-left'></i></a>", "<a><i class='fas fa-angle-right'></i></a>"],
      loop: false,
      rewind: true,
      dots: true,
      nav: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
  });
}



/***/ }),

/***/ "./src/js/slider-image.js":
/*!********************************!*\
  !*** ./src/js/slider-image.js ***!
  \********************************/
/*! exports provided: sliderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderImage", function() { return sliderImage; });
function sliderImage() {
  $(document).ready(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<div class='prev-arrow'><i class='fas fa-chevron-left'></i></div>",
      nextArrow: "<div class='next-arrow'><i class='fa fa-angle-right'></i></div>",
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: false,
      dots: true,
      centerMode: true,
      vertical: true,
      focusOnSelect: true
    });
    /**
    * Initiate lightbox 
    */

    var imageLightbox = GLightbox({
      selector: '.image-lightbox',
      openEffect: 'zoom',
      closeEffect: 'fade'
    });
  });
}



/***/ }),

/***/ "./src/js/toggleItemsSidebar.js":
/*!**************************************!*\
  !*** ./src/js/toggleItemsSidebar.js ***!
  \**************************************/
/*! exports provided: toggleItemsSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleItemsSidebar", function() { return toggleItemsSidebar; });
function toggleItemsSidebar() {
  $(document).ready(function () {
    $(".open-items").click(function () {
      $(this).next('.body').slideToggle("fast");
      $(this).find("i").toggleClass('fa-minus fa-plus');
    });
  });
}



/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/script.js */"./src/js/script.js");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map