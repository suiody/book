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
    "revision": "80c71ee88fef877819b904b07eba4ebb"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "8bc959032bb44d4037847de9987d8ac4"
  },
  {
    "url": "assets/css/8.styles.ebce3281.css",
    "revision": "9a6d11d1ee563404e2027dc636e91890"
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
    "url": "assets/js/7.83c6bcf1.js",
    "revision": "c2f5ae2c213486cfe81075cbf6088f6e"
  },
  {
    "url": "assets/js/app.e0cdfb7d.js",
    "revision": "687c873d9e3b9cd502ac10f5ae81392f"
  },
  {
    "url": "cloud/index.html",
    "revision": "0f6c1e4aefd9094277f0dd0b2311dfc8"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "34711ddb9a1b772c4de8db5531e1dc3a"
  },
  {
    "url": "ethik/index.html",
    "revision": "f9a3b26956d2ef8e2593415d0229aec6"
  },
  {
    "url": "fullstack/index.html",
    "revision": "7a11a1320d7bac8afcde46a094b91c64"
  },
  {
    "url": "index.html",
    "revision": "e8ca208454cd7efbf18c19c554525375"
  },
  {
    "url": "kurs/index.html",
    "revision": "9b93f9388c58c34606a7ea0f6a051eaa"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "d772f197cfe9616f51b7bf267b0bc410"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
