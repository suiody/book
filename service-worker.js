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
    "revision": "7c2606678aac5bd292a329384bcc1948"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "55f83a86cb5b4d4e979904325d43043f"
  },
  {
    "url": "assets/css/11.styles.07eebad6.css",
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
    "url": "assets/js/1.117d4429.js",
    "revision": "0ef0402fbf3ff9b0f776e57d4cfa300e"
  },
  {
    "url": "assets/js/10.08c023bf.js",
    "revision": "55efe2de2761676b846252a463d7e876"
  },
  {
    "url": "assets/js/2.157f5d12.js",
    "revision": "50f1b7f4a29c9401dbd2d34280e9748f"
  },
  {
    "url": "assets/js/3.f76110b4.js",
    "revision": "1b7b15e5d0ab94a583781dd6a3e4fde8"
  },
  {
    "url": "assets/js/4.e8f8af59.js",
    "revision": "e4daefdab63b9350000ce4d61429b6b1"
  },
  {
    "url": "assets/js/5.6b537d96.js",
    "revision": "6be301d364847cc864a666ee6ef5ac44"
  },
  {
    "url": "assets/js/6.fe6e8ddd.js",
    "revision": "b27430c57cda6543c7c8c22a27579833"
  },
  {
    "url": "assets/js/7.bbd0d426.js",
    "revision": "6b631f5f842b5acf21012b0d69999be7"
  },
  {
    "url": "assets/js/8.7be95416.js",
    "revision": "519ba712701d2e27f158892f21bb4cd1"
  },
  {
    "url": "assets/js/9.def5b16f.js",
    "revision": "3e6ace74d67b27a5f2d5bf4636f49847"
  },
  {
    "url": "assets/js/app.c7e7caa3.js",
    "revision": "b68412ccf7478f3996b4b37ff76ea3a3"
  },
  {
    "url": "cloud/index.html",
    "revision": "d1a4f473e4927f88a5aba4c1818fe6af"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "ed31956f28813e92c9263f52da7297bb"
  },
  {
    "url": "embedded/index.html",
    "revision": "3a63b7554a68846c5ad0b8b5a38ed014"
  },
  {
    "url": "ethik/index.html",
    "revision": "a51a209eae548ff22646474eb3e2a9fd"
  },
  {
    "url": "fullstack/index.html",
    "revision": "465bc5bfe3e91c0e668b42d5d8f64418"
  },
  {
    "url": "index.html",
    "revision": "89e11470371ff63e1f12409d432c980a"
  },
  {
    "url": "kurs/index.html",
    "revision": "b3da915536243ff3f40378459ac5ccb4"
  },
  {
    "url": "reactiv-programming/index.html",
    "revision": "b4d7961124007510e939820123197a8f"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "bc87fb6670fed9050164afa218ec3ae5"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "3db03df5329f3edd092b24f3e5b2cdf4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
