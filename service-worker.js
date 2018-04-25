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
    "revision": "4f70a84108b876ddbe08b607c7a89563"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "0e1f958490bd4fcc7185c79c7f57ed10"
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
    "url": "assets/js/14.0c435fb6.js",
    "revision": "7e5cc61ed3464da27cea77af81ca791b"
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
    "url": "assets/js/app.2520f6d4.js",
    "revision": "543a4c83fa049418be58f8835ba1e7e1"
  },
  {
    "url": "cloud/index.html",
    "revision": "6dcf513a259cf5e633a3c9656d11877b"
  },
  {
    "url": "continuous-software-engineering/index.html",
    "revision": "fc0aa31e96f2d69bfa931fb24369255b"
  },
  {
    "url": "dezentralisierung/index.html",
    "revision": "8a73df8fdf846fef6b4be0920b416a5e"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "462352ea268e7c51e32e4f94fb0a816b"
  },
  {
    "url": "embedded/index.html",
    "revision": "af02e667b730c56352b4d2140259d5a6"
  },
  {
    "url": "ethik/index.html",
    "revision": "f6bb2a06c1b82ff4728d601b06ff4ea8"
  },
  {
    "url": "fullstack/backend/index.html",
    "revision": "9e97ca52600ce316d48987ae8401e097"
  },
  {
    "url": "fullstack/frontend/index.html",
    "revision": "cab5f5234ae2e1218f7b3bdc72a1c870"
  },
  {
    "url": "index.html",
    "revision": "4a778a83047b25fa17b045d178936cfe"
  },
  {
    "url": "kurs/index.html",
    "revision": "eaed6ddb8d045c49f385788502928f0b"
  },
  {
    "url": "microservices/index.html",
    "revision": "07dc0fe6989bbc3765bc86198f080407"
  },
  {
    "url": "reactive-programming/index.html",
    "revision": "b27e8d3fa045e2691fbd98a9aba00ece"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "6741674f6f40ec89a6a4525279eed8f4"
  },
  {
    "url": "vr-ar/index.html",
    "revision": "3651f9707a9fad5b968ff9eb4e24c3c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
