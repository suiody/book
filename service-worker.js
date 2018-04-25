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
    "revision": "57f30dca5c77c6df4f314c4c555690bc"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "86f25c51d94fcd5f9e079aacf02d1cec"
  },
  {
    "url": "assets/css/13.styles.a268ce64.css",
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
    "url": "assets/js/10.87471727.js",
    "revision": "aa6bfaee50940098983f278827f7f6b2"
  },
  {
    "url": "assets/js/11.b235da59.js",
    "revision": "8eca28282ecd1534b3de344e94b54a25"
  },
  {
    "url": "assets/js/12.626ed68f.js",
    "revision": "24f5241f31e69b04fb327bc68d735004"
  },
  {
    "url": "assets/js/2.aaf61e35.js",
    "revision": "71c815c50d95e2a8fb9371e35c451b80"
  },
  {
    "url": "assets/js/3.a6025089.js",
    "revision": "5fe414bdfdf95f3b4e23397c6dc28462"
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
    "url": "assets/js/6.83a07062.js",
    "revision": "8ad590de7e60989d95760804062295ad"
  },
  {
    "url": "assets/js/7.e2ebae07.js",
    "revision": "f5489000af74b10f5a1f6d97495ae29d"
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
    "url": "assets/js/app.f1a7b57f.js",
    "revision": "44622e0741f3810226029d84c159769e"
  },
  {
    "url": "cloud/index.html",
    "revision": "b0cca52262766c23eb9610e8238040f9"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "cca7da581b5162f4db790e5fc97efc4e"
  },
  {
    "url": "embedded/index.html",
    "revision": "8f36b17b198cf0ea3dac4eb6b47db6f1"
  },
  {
    "url": "ethik/index.html",
    "revision": "a91046458e966b04eb433f7579e48fba"
  },
  {
    "url": "fullstack/backend/index.html",
    "revision": "287b95defdb7d3e6ca242b50aee13f38"
  },
  {
    "url": "fullstack/frontend/index.html",
    "revision": "c6dbeb367f15fdd130a52308eed21a49"
  },
  {
    "url": "index.html",
    "revision": "7a44565b893d4305d3c45ae34eed9e2f"
  },
  {
    "url": "kurs/index.html",
    "revision": "a1304dd8ad7a97897bda2df93ae02d07"
  },
  {
    "url": "microservices/index.html",
    "revision": "90ae780b0abe15854e6c7d1420cf4ebe"
  },
  {
    "url": "reactiv-programming/index.html",
    "revision": "1f6513d761b9a76a5478063981430def"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "8fc57858d189355b8870c4ae03104d99"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "0a91976238e8933b103d987dad1771ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
