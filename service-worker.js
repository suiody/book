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
    "revision": "8d34f2d0a2ee88a4dfef35494d0019d0"
  },
  {
    "url": "ai-ml/ai/index.html",
    "revision": "056c676c326af9e3bb4004705b078937"
  },
  {
    "url": "ai-ml/gan/index.html",
    "revision": "fdffd8fe1ae37a5a2fbb51764eac8303"
  },
  {
    "url": "ai-ml/index.html",
    "revision": "902676ce44827ef32704e9adf6c78a91"
  },
  {
    "url": "ai-ml/ml/index.html",
    "revision": "46e49a4aef1ae8f4a01a5f44bac5feb2"
  },
  {
    "url": "ai-ml/nn/index.html",
    "revision": "0d262a75bf8549b1180e5845744f6af0"
  },
  {
    "url": "ai-ml/overview/index.html",
    "revision": "227a7ea1ac9ee8bf686304e3b4c0bc1f"
  },
  {
    "url": "assets/css/20.styles.3f80ca09.css",
    "revision": "a88276f8a7dda9e4541b94083fbe9e60"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.cef764ad.js",
    "revision": "d9e68e6bcd2cbf27ef23b323430572c3"
  },
  {
    "url": "assets/js/1.b467de89.js",
    "revision": "206b4e75cbb244bca17c04d5035896b9"
  },
  {
    "url": "assets/js/10.0de8d831.js",
    "revision": "fb7fb08922b21c7a4f420792f28cf72e"
  },
  {
    "url": "assets/js/11.47d390ab.js",
    "revision": "c31179dd57981c17c5799407aff5843a"
  },
  {
    "url": "assets/js/12.5ae49387.js",
    "revision": "0152fc823f6559ff53c187bdcaf2ece1"
  },
  {
    "url": "assets/js/13.4f85c888.js",
    "revision": "49577b82df5a3bb4731c6b31ce4c1f47"
  },
  {
    "url": "assets/js/14.f325eb8a.js",
    "revision": "d6d497c52ee36a53951d728e725edcda"
  },
  {
    "url": "assets/js/15.97945928.js",
    "revision": "521c93743d381bae1c9819315da60262"
  },
  {
    "url": "assets/js/16.34e4555c.js",
    "revision": "b325dc5dc4af3bf3203a6557c0170aa7"
  },
  {
    "url": "assets/js/17.2fae844a.js",
    "revision": "85629416ad756a0e278070ff3ecf79ac"
  },
  {
    "url": "assets/js/18.b822c718.js",
    "revision": "ad51bbbeb8051f9283989b50e17596e2"
  },
  {
    "url": "assets/js/19.92238ce8.js",
    "revision": "b3712c43e0342da56945f5deb5f14830"
  },
  {
    "url": "assets/js/2.21f21ec2.js",
    "revision": "cf8ac6b7b86e57049dfd7ea5f9432ee6"
  },
  {
    "url": "assets/js/3.11bf057b.js",
    "revision": "5cbe31b427603c9476bde1df199bbff3"
  },
  {
    "url": "assets/js/4.aad5c091.js",
    "revision": "7ee5efab05f06fe6d45eb2b0ceb711fc"
  },
  {
    "url": "assets/js/5.603e2fb6.js",
    "revision": "be62b19b74bc4332b5891a5989f4bf78"
  },
  {
    "url": "assets/js/6.a29ea226.js",
    "revision": "217233f9fc1ed3c1f322c0f56fd6dd13"
  },
  {
    "url": "assets/js/7.21cf1081.js",
    "revision": "180f8faf3861999fec7cbd702f901ac1"
  },
  {
    "url": "assets/js/8.82a924a5.js",
    "revision": "bd8fb312453cd1366c72e5dc0ee5a5a9"
  },
  {
    "url": "assets/js/9.517b7e98.js",
    "revision": "da48a799a16ad18e3e6ce9a6798b2885"
  },
  {
    "url": "assets/js/app.2ff16ed5.js",
    "revision": "f872d7a0fb89c1d434076510e538b5af"
  },
  {
    "url": "cloud/index.html",
    "revision": "3b18087d219ba72294a03838ecc9cf46"
  },
  {
    "url": "continuous-software-engineering/index.html",
    "revision": "03bb7fad87852c24bebddc83ab4dab71"
  },
  {
    "url": "dezentralisierung/index.html",
    "revision": "999fb140e1c4afe897935493f92b5e72"
  },
  {
    "url": "digitalisierung/index.html",
    "revision": "9f7034720cd8f6427d9145191f09f6a0"
  },
  {
    "url": "embedded/index.html",
    "revision": "60847b9136a5ace6ffe2f42ed6e50f57"
  },
  {
    "url": "ethik/index.html",
    "revision": "2d6726a87e592cd2da1c171da3860981"
  },
  {
    "url": "fullstack/backend/index.html",
    "revision": "faa5463178c3685077f5464f482782d4"
  },
  {
    "url": "fullstack/frontend/index.html",
    "revision": "ebd603b2108a70c01ddb1b0d999663dc"
  },
  {
    "url": "index.html",
    "revision": "5a97c256029919202cb10be676f9c1ca"
  },
  {
    "url": "kurs/index.html",
    "revision": "0510f5034fff788f7fee8ab19e4e2c98"
  },
  {
    "url": "microservices/index.html",
    "revision": "fe370f3338550fdfa6f7b9fe28027456"
  },
  {
    "url": "reactive-programming/index.html",
    "revision": "0ffbd93eacd465d44f81f86f8535b544"
  },
  {
    "url": "streaming-architectures/index.html",
    "revision": "db61ced078ca35a2d604679b717ef3aa"
  },
  {
    "url": "vr-ar/index.html",
    "revision": "c840334a548eb87cd7df42b134b88983"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
