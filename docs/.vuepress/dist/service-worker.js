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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c27f0c009f30cd5a35d7a3ccf339b50a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "129691d27c386531f26a233dc171cf88"
  },
  {
    "url": "assets/css/0.styles.bc82b140.css",
    "revision": "9d971640436e77102a9484c970f615d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.91878b03.js",
    "revision": "02716f586e1619a44597c1290dbc9fb1"
  },
  {
    "url": "assets/js/3.0b769485.js",
    "revision": "79d535a9dd7f81156e73c93b63860feb"
  },
  {
    "url": "assets/js/4.cc125fde.js",
    "revision": "7303bb6c8e9bf3325795b9b9132a121d"
  },
  {
    "url": "assets/js/5.bc6c1cdb.js",
    "revision": "61c06d5bb231343700ff6f6764cf49b3"
  },
  {
    "url": "assets/js/6.110f6f16.js",
    "revision": "3f1e26ceacbd713cccb8d61ebb8e1eb4"
  },
  {
    "url": "assets/js/7.dc48ff69.js",
    "revision": "4f06051541855034cac021eae5300e90"
  },
  {
    "url": "assets/js/8.12f716cf.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.fefbf7ca.js",
    "revision": "c55231a01bff512b8346f76601efd696"
  },
  {
    "url": "front/index.html",
    "revision": "4a7ec1b9b1d5f5f069aa10355d420a1a"
  },
  {
    "url": "guide.html",
    "revision": "3312bdaf025f577822ab803a427cc1e5"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "890cf7c948715660e2eba5cf3ae23104"
  },
  {
    "url": "others/index.html",
    "revision": "b401fb00db1e8977cfcfee94a3dadf80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
