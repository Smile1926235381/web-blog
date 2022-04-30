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
    "revision": "0f855c8f140dc2eedbbd67eb28239c6e"
  },
  {
    "url": "assets/css/0.styles.bc82b140.css",
    "revision": "9d971640436e77102a9484c970f615d1"
  },
  {
    "url": "assets/img/1.ff751ffb.jpg",
    "revision": "ff751ffb05a71593a5ff5377088e9fb0"
  },
  {
    "url": "assets/img/3.a3a21853.jpg",
    "revision": "a3a218538af882b7fc00d296d73b381b"
  },
  {
    "url": "assets/img/peizhi.7a3c498c.jpg",
    "revision": "7a3c498c5f353be765812eae562dfaee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bb0c5ecd.js",
    "revision": "ca0d13ac4f163be2857388cbb1c0e46d"
  },
  {
    "url": "assets/js/2.983f0928.js",
    "revision": "cf09ec3e8b52b19a5c15a0802ffd558e"
  },
  {
    "url": "assets/js/3.42da3ec5.js",
    "revision": "527fecac910006994cbe5fc351ec0106"
  },
  {
    "url": "assets/js/4.cc1ede37.js",
    "revision": "f2e81abb57d4c3752789212dfbc8908d"
  },
  {
    "url": "assets/js/5.4cb536e2.js",
    "revision": "9e719a3ea0e6d54fe5f27ce2f47cbaa0"
  },
  {
    "url": "assets/js/6.6526197d.js",
    "revision": "33f0595b0a9afc73b307497e99ddc153"
  },
  {
    "url": "assets/js/7.ed666a35.js",
    "revision": "ef33a98ad1f7784ce7d6557232617d76"
  },
  {
    "url": "assets/js/8.8232e55f.js",
    "revision": "2f04317dae52b58c21ee5a52f7b29385"
  },
  {
    "url": "assets/js/9.218e0499.js",
    "revision": "13ad9052db4c2c0b9bdd4d93b05a0262"
  },
  {
    "url": "assets/js/app.fdafaab6.js",
    "revision": "b60ced8f4914812003feeceb84db993e"
  },
  {
    "url": "front/index.html",
    "revision": "3bddc03c7950234193872e235c5c62e8"
  },
  {
    "url": "guide.html",
    "revision": "7caea12d1debca1f977b27c009a6e723"
  },
  {
    "url": "images/1photo.jpg",
    "revision": "7c84f9895d61ce7554c804d4a0c2ae79"
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
    "revision": "3406d86e3ddc491dc9b44434b0560218"
  },
  {
    "url": "index.html",
    "revision": "f2cb7cc3bbe6c15bb4feda4591d75ab0"
  },
  {
    "url": "interview/index.html",
    "revision": "0b878b47424693bf65c8cf8d612d0376"
  },
  {
    "url": "others/index.html",
    "revision": "8464edb309abec0e5b260b3a72f1e8a9"
  },
  {
    "url": "server/index.html",
    "revision": "c4a24ec3909b70115325b6ed68a94cc1"
  },
  {
    "url": "website/index.html",
    "revision": "d03c9b647ecb7021a40d64a402c72adf"
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
