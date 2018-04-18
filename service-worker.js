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
    "revision": "f46e1a7c17d9789379e75f5063531187"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "12d086134179a751883ff41b7671fc59"
  },
  {
    "url": "assets/css/5.styles.b91153f2.css",
    "revision": "231cbd041123079ec179e90adac4f778"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.f5ae3ccb.js",
    "revision": "8cdeff81739eeeceb3bff77d0f22715f"
  },
  {
    "url": "assets/js/1.93f1ccf6.js",
    "revision": "d02042b1a2f45f2581fb80f9fa1f156c"
  },
  {
    "url": "assets/js/2.bffea407.js",
    "revision": "c853c51716f7612768592a514c9e61b8"
  },
  {
    "url": "assets/js/3.f03478c0.js",
    "revision": "0c3946203d7c190eac2a96311132a308"
  },
  {
    "url": "assets/js/4.890be526.js",
    "revision": "84ee74ff47e6c0842abdb52e74cfe539"
  },
  {
    "url": "assets/js/app.e0be8653.js",
    "revision": "8cd15b7ea9958233f7c8be14a440e62b"
  },
  {
    "url": "ethik/index.html",
    "revision": "a75a0f04f19c9dac0e6b422c2f8f6ef8"
  },
  {
    "url": "guide/ethik.html",
    "revision": "23771bea212fb3d3249f3bbddedb3589"
  },
  {
    "url": "guide/index.html",
    "revision": "0dfa1732dfcf92e31c3e7c117afb0e3b"
  },
  {
    "url": "index.html",
    "revision": "71aa8f853a689e61ef390a925b59924f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
