exports.ids = [2];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tutorial.vue?vue&type=template&id=02720592&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"click":_vm.testSentry}},[_vm._ssrNode("test sentry 1.5")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tutorial.vue?vue&type=template&id=02720592&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tutorial.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Tutorialvue_type_script_lang_js_ = ({
  data() {
    return {
      a: 123
    };
  },

  methods: {
    testSentry() {
      setTimeout(function () {
        this.a.b = 'type error';
      }, 1000);
    }

  }
});
// CONCATENATED MODULE: ./components/Tutorial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tutorialvue_type_script_lang_js_ = (Tutorialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Tutorial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tutorialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f38af08"
  
)

/* harmony default export */ var Tutorial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tutorial.js.map