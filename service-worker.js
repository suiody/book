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
    "revision": "7a58a6e8ee08abc8137c1699c09afa8a"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "cd817d5f0c41974c8f3368445acf4392"
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
    "url": "assets/js/7.d28ab770.js",
    "revision": "9088389fce7972487df141cc9f396063"
  },
  {
    "url": "assets/js/app.673d494d.js",
    "revision": "4cdc60b5c6b025d19db307e3b83aac5a"
  },
  {
    "url": "cloud/index.html",
    "revision": "fbefb2adfb0d44ac2a149cdafbdadab1"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "6269fa8a5ff6ee4f2109c48c90bc78f9"
  },
  {
    "url": "ethik/index.html",
    "revision": "0ac7219e615fa37a17019ac542e7fff6"
  },
  {
    "url": "fullstack/index.html",
    "revision": "6416171a55bd907dd76cbcd1462227a7"
  },
  {
    "url": "index.html",
    "revision": "0ea9c9a84c5d53ca6cbd3cdc60237bd3"
  },
  {
    "url": "kurs/index.html",
    "revision": "d50a5aae8334830c8e92849a4d483add"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "9b36d6bbbf1f0c9adebe19b0b34d2fca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
