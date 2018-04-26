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
    "revision": "4c871d0f5b0becf7ede80ca78abcf803"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "723b5236b8ff2ab855322d243c7dfa64"
  },
  {
    "url": "assets/css/15.styles.4d28fd3c.css",
    "revision": "a88276f8a7dda9e4541b94083fbe9e60"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.3be4b0db.js",
    "revision": "f83add397b8375acd22c9981d2328962"
  },
  {
    "url": "assets/js/1.ecb36dcf.js",
    "revision": "bff98e02746715ac9a8158638b7df8ee"
  },
  {
    "url": "assets/js/10.76c7e20b.js",
    "revision": "faaf514eec7d3c1d0b200672c5db6d82"
  },
  {
    "url": "assets/js/11.d71cf1d3.js",
    "revision": "e81315c9678ec9ec4da574a5332d1623"
  },
  {
    "url": "assets/js/12.4d5cafe3.js",
    "revision": "3b3554d5704f7be7a2bf4b23f09f3764"
  },
  {
    "url": "assets/js/13.a2aadd15.js",
    "revision": "2e22696e8925a472db04691eff36c2d3"
  },
  {
    "url": "assets/js/14.b2f9a4ac.js",
    "revision": "4377d6b9a63ee6ca31dc74505668c1ea"
  },
  {
    "url": "assets/js/2.c6457b7a.js",
    "revision": "4ed2e133ec02ead4be98f5199f7a2a8d"
  },
  {
    "url": "assets/js/3.11bf057b.js",
    "revision": "5cbe31b427603c9476bde1df199bbff3"
  },
  {
    "url": "assets/js/4.be4b5189.js",
    "revision": "7753ee15772bdf78015d7e5de96a0e7c"
  },
  {
    "url": "assets/js/5.64af34d4.js",
    "revision": "2d8512ff502e4df3079cbc9a63724543"
  },
  {
    "url": "assets/js/6.5dcaef3b.js",
    "revision": "bc508fb3c4a84f90f0c44eb1124668c6"
  },
  {
    "url": "assets/js/7.f8fd04f9.js",
    "revision": "d074cd432e961d3fe4635f921486f4ae"
  },
  {
    "url": "assets/js/8.b96cc173.js",
    "revision": "ad9abe055dacb3ad096cc29b04abbf26"
  },
  {
    "url": "assets/js/9.0bb2bcd5.js",
    "revision": "aaa9757daec49ae7270ff9a0526f1a5b"
  },
  {
    "url": "assets/js/app.59375883.js",
    "revision": "ef0908d4eceaa82e48f28e0c381974ca"
  },
  {
    "url": "cloud/index.html",
    "revision": "eef42df1e4987dce82247b7018dba36c"
  },
  {
    "url": "continuous-software-engineering/index.html",
    "revision": "a69760f9c3882a623680a93796bdcb03"
  },
  {
    "url": "dezentralisierung/index.html",
    "revision": "38fbd14efb0c1f0ae72af3e62cab257a"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "6b34a53fa778b0b98aee39eb4dadf5b9"
  },
  {
    "url": "embedded/index.html",
    "revision": "d76490ef2388fc88b5f88efd015c7a53"
  },
  {
    "url": "ethik/index.html",
    "revision": "740ba2492f06688a35ab11b3ced7f6b8"
  },
  {
    "url": "fullstack/backend/index.html",
    "revision": "07db6214d2b1cf179aad6493a2e78d64"
  },
  {
    "url": "fullstack/frontend/index.html",
    "revision": "c7a29e50e5b4e232df2193e9e2d0c623"
  },
  {
    "url": "index.html",
    "revision": "c0a4a610e882c00436f763e24099d61d"
  },
  {
    "url": "kurs/index.html",
    "revision": "056ad82bf0ff4ec41bdcbda6a7d5d82d"
  },
  {
    "url": "microservices/index.html",
    "revision": "25ca4e5e3f9ade6cf3418bd8ae5681ce"
  },
  {
    "url": "reactive-programming/index.html",
    "revision": "4f56c5416e4a8f66faccc8c6fda8dd23"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "b28fcd417fa5ae58665b1af414a114c1"
  },
  {
    "url": "vr-ar/index.html",
    "revision": "a2bd6ce16c6d9ea3132a15079be22ec1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
