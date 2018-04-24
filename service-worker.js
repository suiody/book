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
    "revision": "b333a0016d0721ba8961a43802ea9197"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "f7b4766a016e3ea397d94ed512620954"
  },
  {
    "url": "assets/css/10.styles.df391d28.css",
    "revision": "333b0ca4a32ca055894c0b84d16642df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.041f035c.js",
    "revision": "3a0e4bedf6b4f1215a594fc03c296790"
  },
  {
    "url": "assets/js/1.72c9278d.js",
    "revision": "d9d1f96f95a0eb371eda34e20edd7488"
  },
  {
    "url": "assets/js/2.a20468b6.js",
    "revision": "24dd9eb0c35dba7a13d8a64a6816c12c"
  },
  {
    "url": "assets/js/3.ccc81fd0.js",
    "revision": "4f389ca453f6dadbe5930476cdcf902f"
  },
  {
    "url": "assets/js/4.e89213b4.js",
    "revision": "9f4550fe3ba5efe98d5ce90444f64ade"
  },
  {
    "url": "assets/js/5.a3b98079.js",
    "revision": "ae8bbdab068adfe025d0dfa9df8d0a05"
  },
  {
    "url": "assets/js/6.baba5a65.js",
    "revision": "b55ecc6c81bacfabe04b4bdaaf9c2212"
  },
  {
    "url": "assets/js/7.292861c9.js",
    "revision": "f3c1fb0aaef460b4c8651ce7fbd99727"
  },
  {
    "url": "assets/js/8.d9055fe0.js",
    "revision": "fb7f805012a0021354e9fa330ced8e2d"
  },
  {
    "url": "assets/js/9.af57291e.js",
    "revision": "dd3b6edd9c3997dc58639b5e0d734868"
  },
  {
    "url": "assets/js/app.0440f4c4.js",
    "revision": "08d4175b5b35d55aae667be5944e278d"
  },
  {
    "url": "cloud/index.html",
    "revision": "4fe7ba3cf74d86ad54ba07f2cd826725"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "32284f15fb4dd62bd3bfcb8942780a79"
  },
  {
    "url": "embedded/index.html",
    "revision": "0fe5dbb2fe6c1a4c86b9ee76eba77829"
  },
  {
    "url": "ethik/index.html",
    "revision": "22cc0bc3af81aa7a78ca611ee561ff55"
  },
  {
    "url": "fullstack/index.html",
    "revision": "7274abfb6a11e51fec29ccc901b8f0a1"
  },
  {
    "url": "index.html",
    "revision": "c56a1cef6f7e0f36c5dc926aa69a0df1"
  },
  {
    "url": "kurs/index.html",
    "revision": "9e644dec1798be83e622d3263a53a694"
  },
  {
    "url": "reactiv-programming/index.html",
    "revision": "37a54301e8920c6e2db3d771e017373f"
  },
  {
    "url": "vr-ai/index.html",
    "revision": "97b1156e6c9cae8f44013b4f3a651ff6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
