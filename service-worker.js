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
    "revision": "1cad02711461c45db32532e6e4988638"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "770690884c30c0e0fdb83c43596e07b3"
  },
  {
    "url": "assets/css/8.styles.d6faa884.css",
    "revision": "333b0ca4a32ca055894c0b84d16642df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.70daa90a.js",
    "revision": "2402b9607438f0dc73d2e5bf95532601"
  },
  {
    "url": "assets/js/1.2d6a636c.js",
    "revision": "d9024a5111f7be25bf3d48999594ec82"
  },
  {
    "url": "assets/js/2.18640894.js",
    "revision": "62fbe21cf40c148275b13457734ab4a0"
  },
  {
    "url": "assets/js/3.76d120d2.js",
    "revision": "addec872899b6369872193514846b38d"
  },
  {
    "url": "assets/js/4.cac5ff0d.js",
    "revision": "bd0160fc465103ce31a7d9657879eb72"
  },
  {
    "url": "assets/js/5.e64f79b6.js",
    "revision": "44a1280b8fbea3b49334db3e069cdf16"
  },
  {
    "url": "assets/js/6.f927390c.js",
    "revision": "32e82f9d9f4c1f40cf29ce32cb5e5869"
  },
  {
    "url": "assets/js/7.d28ab770.js",
    "revision": "9088389fce7972487df141cc9f396063"
  },
  {
    "url": "assets/js/app.e13b38a1.js",
    "revision": "90ecaf96eff250a7a902d85fb399534a"
  },
  {
    "url": "cloud/index.html",
    "revision": "8881382aa97820498ca334c4ea1e5175"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "ff03e0316d85939c0de07f8901b158d8"
  },
  {
    "url": "ethik/index.html",
    "revision": "4a83ff6723d9493e9d40ed88a6639961"
  },
  {
    "url": "fullstack/index.html",
    "revision": "f6dea2296d6fb9f6761d852e50870360"
  },
  {
    "url": "index.html",
    "revision": "ad18365dc09ab3d221698e34ad6f80e0"
  },
  {
    "url": "kurs/index.html",
    "revision": "e54613378c8d01f0374636c3e37dcc06"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "2324b8cdc009767f83a429eee31c2ebd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
