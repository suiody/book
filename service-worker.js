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
    "revision": "d90212e8c3c286f151c98a6376a10ee4"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "55eb9f3d63b178160f13aa3ea397535b"
  },
  {
    "url": "assets/css/14.styles.88287639.css",
    "revision": "333b0ca4a32ca055894c0b84d16642df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.8f63c3b8.js",
    "revision": "2a4e0cb9d646a7a2d4932e475ff8a73b"
  },
  {
    "url": "assets/js/1.0393ce96.js",
    "revision": "dbf110e666b8b57e88d53b2d6a2e9015"
  },
  {
    "url": "assets/js/10.67c35fea.js",
    "revision": "afd36ce84247c4ea047628b7022faa27"
  },
  {
    "url": "assets/js/11.c41c251d.js",
    "revision": "f47900317a5ffcfc0091b45256ccda57"
  },
  {
    "url": "assets/js/12.24a120a9.js",
    "revision": "0b0bb6545e8e37559c8153b11a32f9ee"
  },
  {
    "url": "assets/js/13.b5788d62.js",
    "revision": "e2112e2c9712643ef6466cbe0b0a54b1"
  },
  {
    "url": "assets/js/2.049740a4.js",
    "revision": "24a32c63ca47ea91ce76077a02eaedad"
  },
  {
    "url": "assets/js/3.f008b416.js",
    "revision": "bbab5be391e880bfdf3c74d91d2b98f3"
  },
  {
    "url": "assets/js/4.6ea3148a.js",
    "revision": "5be593283333b6e607d886ad3e7c5540"
  },
  {
    "url": "assets/js/5.68d1e43b.js",
    "revision": "855ff3ac8f58f147ba19de5d4914ee47"
  },
  {
    "url": "assets/js/6.aace2e51.js",
    "revision": "7ac13e30fb44dae9a84b402ad91e071e"
  },
  {
    "url": "assets/js/7.96e748cc.js",
    "revision": "f4fe8dce1833c5ddd2c5cded619e1c5c"
  },
  {
    "url": "assets/js/8.d9435284.js",
    "revision": "6aa918503624305756ee997c4422e7a8"
  },
  {
    "url": "assets/js/9.3b9d2a8a.js",
    "revision": "2a5a465d4210a8b3dc58cc6ac614dae6"
  },
  {
    "url": "assets/js/app.5f5f4b94.js",
    "revision": "c67e94467672effd14bb25fd8c7fafb3"
  },
  {
    "url": "cloud/index.html",
    "revision": "393c353e4412a487d0fed082031b1653"
  },
  {
    "url": "continuous-software-engineering/index.html",
    "revision": "978a0548c4d3caab0bec99d63f9b0c11"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "b5018bcc90ed1225deb3a0ff14b5b125"
  },
  {
    "url": "embedded/index.html",
    "revision": "74b38abcd93a1638e7b50d7a40abf6b2"
  },
  {
    "url": "ethik/index.html",
    "revision": "ecfedc30841f43a2554958a80bee284f"
  },
  {
    "url": "fullstack/backend/index.html",
    "revision": "79998969632d1c1f12d3092dd1a9a8c2"
  },
  {
    "url": "fullstack/frontend/index.html",
    "revision": "efc89989cfe89f1925e1291c5a6b5913"
  },
  {
    "url": "index.html",
    "revision": "49c54ed0d871222066021dadbbc06232"
  },
  {
    "url": "kurs/index.html",
    "revision": "70346cb9a8d81ee92a967c96b210683e"
  },
  {
    "url": "microservices/index.html",
    "revision": "5d6bbdafec828215dce3571c3f7a1c74"
  },
  {
    "url": "reactive-programming/index.html",
    "revision": "d968730ece1d898d69c28c3b46b7c845"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "97ae4052b19e3c7eae106963d3018a5e"
  },
  {
    "url": "vr-ar/index.html",
    "revision": "431e6a6bad5287e46cb44547bb531f81"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
