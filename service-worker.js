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
    "revision": "199b9530220f82188a47f8bfa46092d2"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "8e1f1908bb2d6c28f7627abd0a513530"
  },
  {
    "url": "assets/css/15.styles.06fa1a09.css",
    "revision": "333b0ca4a32ca055894c0b84d16642df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.4b588455.js",
    "revision": "a402ac2670e37f61768039b29df4d92d"
  },
  {
    "url": "assets/js/1.3875f36e.js",
    "revision": "ca613866e7538f65ba4749e41e21f820"
  },
  {
    "url": "assets/js/10.2d4de7fd.js",
    "revision": "d307158af0c3aed617e297fc9e424af3"
  },
  {
    "url": "assets/js/11.39ac999e.js",
    "revision": "5c83a50b0913f59096fd8e5b78253846"
  },
  {
    "url": "assets/js/12.f04c00a1.js",
    "revision": "09818b0eab12f9ef1d1474341ecd1945"
  },
  {
    "url": "assets/js/13.99062778.js",
    "revision": "9248e3ccb58ef6d1f74264f7687eb8af"
  },
  {
    "url": "assets/js/14.8324bf41.js",
    "revision": "ec3f4c0d5b37c21d11a2f76cb46f8922"
  },
  {
    "url": "assets/js/2.9d34084b.js",
    "revision": "34cff2b82f6bff51d06985af283a8034"
  },
  {
    "url": "assets/js/3.f008b416.js",
    "revision": "bbab5be391e880bfdf3c74d91d2b98f3"
  },
  {
    "url": "assets/js/4.86c4f8a2.js",
    "revision": "a51c00b98605962828b5df4f8c497def"
  },
  {
    "url": "assets/js/5.8f8e8860.js",
    "revision": "3a22df72e1d6d0399234ecc7c9fe99a5"
  },
  {
    "url": "assets/js/6.554e3257.js",
    "revision": "15292faed1a81d4c03ef20eceee2c845"
  },
  {
    "url": "assets/js/7.ae8f7459.js",
    "revision": "ba91d710f8a8d97b9824837eee86c302"
  },
  {
    "url": "assets/js/8.d9435284.js",
    "revision": "6aa918503624305756ee997c4422e7a8"
  },
  {
    "url": "assets/js/9.1c3451f2.js",
    "revision": "14bf0633d5b22516d45366fc5eef5795"
  },
  {
    "url": "assets/js/app.c3677130.js",
    "revision": "f3418568319cf1e6ac072043a06d0b3c"
  },
  {
    "url": "cloud/index.html",
    "revision": "c84ea8ebeb33b7509c84460c8fb8dbbc"
  },
  {
    "url": "continuous-software-engineering/index.html",
    "revision": "52df290b5c35f3c6cc35f0f572382045"
  },
  {
    "url": "dezentralisierung/index.html",
    "revision": "4768a0cc30b5873b9a32fdb0828b0b59"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "eaf2630ab2d5e43e0b936ab25455c1e2"
  },
  {
    "url": "embedded/index.html",
    "revision": "0241b67d1f7a53947d2ae0e76512a97b"
  },
  {
    "url": "ethik/index.html",
    "revision": "de346b50936de2670a0da7b697b77803"
  },
  {
    "url": "fullstack/backend/index.html",
    "revision": "b58217c410575747798d5ffb55f14396"
  },
  {
    "url": "fullstack/frontend/index.html",
    "revision": "177fd700277897a8583a4639a245ecc3"
  },
  {
    "url": "index.html",
    "revision": "6660217ef9c8b25008b11207e32cd807"
  },
  {
    "url": "kurs/index.html",
    "revision": "a8554b2199eff5505ee253bcb699b5cc"
  },
  {
    "url": "microservices/index.html",
    "revision": "95afe71e6dc08eead8c3b3204d699bbc"
  },
  {
    "url": "reactive-programming/index.html",
    "revision": "4bc118c346b6d1bf08dd5b1586e4dce9"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "8f10e8497d13b044ba9bf63ec3af63f3"
  },
  {
    "url": "vr-ar/index.html",
    "revision": "70d67acda6ddb3d4b47ce02ec6aa35d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
