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
    "revision": "93dd06596a215a523d9fc7aeda9164c0"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "8fdc4868a6741ecec6d19c0acde2e3e9"
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
    "url": "assets/js/0.0f1de423.js",
    "revision": "a2f69a6ac9eec4b8717df046bfcf07d8"
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
    "url": "assets/js/2.8e56480f.js",
    "revision": "bdb12a3ca25a7f72a00761b53162d4c3"
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
    "url": "assets/js/app.95eaa43f.js",
    "revision": "d777784833f17d35c33eed035773d3e7"
  },
  {
    "url": "cloud/index.html",
    "revision": "86d93690a2be2364c25976ad1261019d"
  },
  {
    "url": "continuous-software-engineering/index.html",
    "revision": "208817b877bf2a447bcf353b9466a52d"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "8d43e046149237dd4b86f7dd85fcbca2"
  },
  {
    "url": "embedded/index.html",
    "revision": "1b62bcca7ec7b47fed8bbbe997d22011"
  },
  {
    "url": "ethik/index.html",
    "revision": "1c936cee3a3bb7236c1c3fca414ce736"
  },
  {
    "url": "fullstack/backend/index.html",
    "revision": "161d6e3607e2bce2f739f7ff7a36cfcd"
  },
  {
    "url": "fullstack/frontend/index.html",
    "revision": "b7a4769f118f8d844a75bd6dcda0139b"
  },
  {
    "url": "index.html",
    "revision": "85dbe3c07c2e799f8f3148693c60abd7"
  },
  {
    "url": "kurs/index.html",
    "revision": "9ced3c84df5ae7f8a75d01307f22a735"
  },
  {
    "url": "microservices/index.html",
    "revision": "38e54788682c2c4e21bd668d37e12997"
  },
  {
    "url": "reactiv-programming/index.html",
    "revision": "1b3a6b704a709d6c3036291fe67730d3"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "6ffae61323a4e8c73b6b0edef5745f29"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "796a3c91d686ec258260474d2a9d96b8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
