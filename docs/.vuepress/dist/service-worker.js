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
    "revision": "73838e684cb71cca00062acb50eda8da"
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
    "url": "assets/js/4.323e93a5.js",
    "revision": "ac32d393ab605edff87542265efb0fc6"
  },
  {
    "url": "assets/js/5.5727c39b.js",
    "revision": "61c06d5bb231343700ff6f6764cf49b3"
  },
  {
    "url": "assets/js/6.4b37c2e3.js",
    "revision": "13edb4286a68a885785d2a560a9bc3bf"
  },
  {
    "url": "assets/js/7.fef17267.js",
    "revision": "71dbb5a502e355d6078a28c86f53ffac"
  },
  {
    "url": "assets/js/8.4d152828.js",
    "revision": "9bfa5569208d9dad924201b859d30341"
  },
  {
    "url": "assets/js/9.15149801.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.f44a7682.js",
    "revision": "402df1ffd150cb98c03e1b5f10e318d7"
  },
  {
    "url": "front/index.html",
    "revision": "3f46d31ed2587302c9560cc49df85994"
  },
  {
    "url": "guide.html",
    "revision": "acb3cc47ecec2ac53bed1e0b9b6a6e3a"
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
    "revision": "b46c96a7a56d3a28fdfd10f78d5bce4c"
  },
  {
    "url": "others/index.html",
    "revision": "8b694872262993d5d136a966e662463c"
  },
  {
    "url": "server/index.html",
    "revision": "030c11fc2b662a08c8ccbe5118011f95"
  },
  {
    "url": "website/index.html",
    "revision": "a135ce95bee43059459d12e2a5055ec8"
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
