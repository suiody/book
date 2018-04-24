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
    "revision": "ca2f35e34472fefbc540c8ab9e4769a2"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "4990c367b1eb81135ff03d9f94cb8ff8"
  },
  {
    "url": "assets/css/12.styles.98724933.css",
    "revision": "333b0ca4a32ca055894c0b84d16642df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.e145b766.js",
    "revision": "13b5b5c52c786a6177731aec9b152393"
  },
  {
    "url": "assets/js/1.4f5df5e7.js",
    "revision": "da01e3a951bf072396eaa6d969647136"
  },
  {
    "url": "assets/js/10.9593d5cd.js",
    "revision": "d3f5603739bc12961a2321e5eec546dc"
  },
  {
    "url": "assets/js/11.4c928b1e.js",
    "revision": "43dac29b0531216c8bbbcff14c3353a2"
  },
  {
    "url": "assets/js/2.811fa323.js",
    "revision": "7fc0ada932542103b349c46f9aab330e"
  },
  {
    "url": "assets/js/3.2aec8ebf.js",
    "revision": "0e5c1a2e782b6f6fb0ff0ca48758700f"
  },
  {
    "url": "assets/js/4.6ea3148a.js",
    "revision": "5be593283333b6e607d886ad3e7c5540"
  },
  {
    "url": "assets/js/5.fb4e6aef.js",
    "revision": "7cbfc85caff5a4dd52d4200562466960"
  },
  {
    "url": "assets/js/6.bf930170.js",
    "revision": "6d91e6de8817c4257002617680c2d4b6"
  },
  {
    "url": "assets/js/7.4bd30a68.js",
    "revision": "88a0f267308dafd68b250376c13305fa"
  },
  {
    "url": "assets/js/8.e05eae42.js",
    "revision": "6d1b2e17d601e0d840c3d3e6b700d503"
  },
  {
    "url": "assets/js/9.058332b9.js",
    "revision": "e03f2fb3a549d99908e296d89153effd"
  },
  {
    "url": "assets/js/app.d860f000.js",
    "revision": "742b2e9545a636135cfa8a6f5a8b7467"
  },
  {
    "url": "cloud/index.html",
    "revision": "bc2fb156e61c02100cb1deba29855f09"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "e954cc73455fdb879fc34e7f0d05a541"
  },
  {
    "url": "embedded/index.html",
    "revision": "c4a34ac6c13024dee0208c15650f2ce1"
  },
  {
    "url": "ethik/index.html",
    "revision": "142af2e0edc33282ba4170ddf87df5a1"
  },
  {
    "url": "fullstack/index.html",
    "revision": "f96f531ecd95f007990ae1b22975c673"
  },
  {
    "url": "index.html",
    "revision": "7cbf9b21069698ecaddea530a3d94491"
  },
  {
    "url": "kurs/index.html",
    "revision": "21a5129eff5cd98aeeec38715eb45b7c"
  },
  {
    "url": "microservices/index.html",
    "revision": "7cd2499b8d8378e9271b8450d1931ebf"
  },
  {
    "url": "reactiv-programming/index.html",
    "revision": "0b48fec00b5002ef850b4a1e8861e9ee"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "2f3ca3eca7249138a500b5cd493bd69f"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "64fee358931f52d655fa3e600a492df0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
