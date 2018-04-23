/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "93e980f724578735d84667484c63c3ba"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "9bcd270cf693e3874457c8c6858d893d"
  },
  {
    "url": "assets/css/9.styles.3beec657.css",
    "revision": "333b0ca4a32ca055894c0b84d16642df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.a12b224f.js",
    "revision": "36bfb84d9a82d0d106f894fa4f463e05"
  },
  {
    "url": "assets/js/1.94bef7e4.js",
    "revision": "5c8fa8d23187146e2decc666bd6c914e"
  },
  {
    "url": "assets/js/2.25dbfa05.js",
    "revision": "ed7e5198971ad488ddc57fd168b7888e"
  },
  {
    "url": "assets/js/3.739d5909.js",
    "revision": "52c4431ee5bd378e680201d946a03aa8"
  },
  {
    "url": "assets/js/4.6235fd24.js",
    "revision": "79e27b6627572b5b49a9efb53395a6f6"
  },
  {
    "url": "assets/js/5.bfbf8875.js",
    "revision": "fcf160b6dd955280f9743f5372785f4a"
  },
  {
    "url": "assets/js/6.80ca2617.js",
    "revision": "f98b4bc85942c6fef2d5f89d8e8be0c0"
  },
  {
    "url": "assets/js/7.ad416a03.js",
    "revision": "72b7482664ed81577c9a6eb03dccacac"
  },
  {
    "url": "assets/js/8.28be9d1a.js",
    "revision": "d17c6f15c81592457cb1afa5105c44c8"
  },
  {
    "url": "assets/js/app.d8d492a0.js",
    "revision": "0c4225ae4c76f349571144542b7407c2"
  },
  {
    "url": "cloud/index.html",
    "revision": "fe96dc5c002e29627bc8469bad919ef4"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "2490227d0faa5a78dafe3cc868e9bdc3"
  },
  {
    "url": "ethik/index.html",
    "revision": "b3ebfb391ffe2c2f4b22d00df6e2e19f"
  },
  {
    "url": "fullstack/index.html",
    "revision": "9af263737e194bdb5040bf19167845d6"
  },
  {
    "url": "index.html",
    "revision": "e4920d06a1e4b6e43a2966075651fd06"
  },
  {
    "url": "kurs/index.html",
    "revision": "98b67a8a5619cb9e80af6969461246b3"
  },
  {
    "url": "reactiv-programming/index.html",
    "revision": "862396cbcf83e51b7296909e22039693"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "1b11f74f1d66fe2d2e902160e0514d0f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
