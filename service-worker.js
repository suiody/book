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
    "revision": "f9ad0fd7791392e8b3dbb7341db5351f"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "d60fc8b5f4bae0ec21360b89489db5cb"
  },
  {
    "url": "assets/css/5.styles.ebe5f93c.css",
    "revision": "9a6d11d1ee563404e2027dc636e91890"
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
    "url": "assets/js/app.c0967505.js",
    "revision": "64df87b9087987d9bb94fa3b76b920a7"
  },
  {
    "url": "ethik/index.html",
    "revision": "b7712987b5f45ca7447b7b92a4a6f54b"
  },
  {
    "url": "guide/ethik.html",
    "revision": "38f85a987e5f8424edc972ef308b0337"
  },
  {
    "url": "guide/index.html",
    "revision": "2a361d1e19e8cc52abad6a8a75c17576"
  },
  {
    "url": "index.html",
    "revision": "1859bfebd7c490d5d7ec145c510c4e94"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
