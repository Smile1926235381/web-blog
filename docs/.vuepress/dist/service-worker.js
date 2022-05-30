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
    "revision": "804042bd9ee731e72bd8ee6b1d97ecd9"
  },
  {
    "url": "assets/css/0.styles.bc82b140.css",
    "revision": "9d971640436e77102a9484c970f615d1"
  },
  {
    "url": "assets/img/1.5efd14f5.png",
    "revision": "5efd14f5f52f64c43e4db426c3b72118"
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
    "url": "assets/js/10.386f2f21.js",
    "revision": "cf9b0e2d55468ce603408557bf2e7c10"
  },
  {
    "url": "assets/js/11.c317e9b6.js",
    "revision": "c8f173d783694ec549357e70d557ce5d"
  },
  {
    "url": "assets/js/12.99b09d68.js",
    "revision": "7af52e8245840f4f95e2003a9eac6bcd"
  },
  {
    "url": "assets/js/13.78aa8ec1.js",
    "revision": "4725797c28b30bec78e74a332c9ab7ec"
  },
  {
    "url": "assets/js/14.ac46aab7.js",
    "revision": "4e37a6aaa614578286f426294eee4e44"
  },
  {
    "url": "assets/js/15.076fe1e3.js",
    "revision": "93e853f0ab2fb5fa0fb59808276c2d33"
  },
  {
    "url": "assets/js/16.a7e88768.js",
    "revision": "cbb6d58473101576dacbdaba0bf9efaf"
  },
  {
    "url": "assets/js/17.49c627c6.js",
    "revision": "b2b9a99695c692bc17b502487246fd88"
  },
  {
    "url": "assets/js/18.774b0104.js",
    "revision": "6974e1b7d167e88b014cf2cf684cc6a4"
  },
  {
    "url": "assets/js/19.67a5a65e.js",
    "revision": "0035b7cee70ff77fe4c3e9b7d364226a"
  },
  {
    "url": "assets/js/2.5a9b6b78.js",
    "revision": "11090747632baa12847fd6d49d2f66b3"
  },
  {
    "url": "assets/js/3.3fcd5abb.js",
    "revision": "8f12247a21c80c07bb9d80b6ace93234"
  },
  {
    "url": "assets/js/4.c7bc58ac.js",
    "revision": "2f58a287c788c2db7069b5b0f75fb6c0"
  },
  {
    "url": "assets/js/5.1549275b.js",
    "revision": "dbdcfc14f9e3ce893fb87add6b8cdcd9"
  },
  {
    "url": "assets/js/6.cb450864.js",
    "revision": "ffe241b5b36c686747e296da6acdeb2d"
  },
  {
    "url": "assets/js/7.a9526479.js",
    "revision": "49e72ea0a907400392eee9697e9df214"
  },
  {
    "url": "assets/js/8.8efa69a8.js",
    "revision": "7a2df1f8e42d99b0e22ce060e7fd5dc9"
  },
  {
    "url": "assets/js/9.19cbf9aa.js",
    "revision": "2c214999062b2c002bbd8224d26a9892"
  },
  {
    "url": "assets/js/app.58b2513c.js",
    "revision": "aa876f3308fa4568101a9625497ccc33"
  },
  {
    "url": "front/files/echarts.html",
    "revision": "c041dd44a2240fb62410a15b0efac83e"
  },
  {
    "url": "front/files/flutter.html",
    "revision": "6efdd2e03f554740be38e80c3016214f"
  },
  {
    "url": "front/files/html.html",
    "revision": "92bf4d2df8eac14a26ad6e0b765e8671"
  },
  {
    "url": "front/files/javascript.html",
    "revision": "e6414ebfa649b4bb5a90b8296cb3fed0"
  },
  {
    "url": "front/files/node.html",
    "revision": "a196c950616be1b04d7a7cb4598356bd"
  },
  {
    "url": "front/files/react.html",
    "revision": "80824033f8388a67ee8f867236a8c2a8"
  },
  {
    "url": "front/files/vue.html",
    "revision": "bc6df554e909508d23c0e56471197ffe"
  },
  {
    "url": "front/files/webpack.html",
    "revision": "55de9ac394dee5d1d74cd9e76a4d12e1"
  },
  {
    "url": "guide.html",
    "revision": "c222498c82769996db262fe8f1d2cb01"
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
    "revision": "8ab253655493ed3657da3ed4de605749"
  },
  {
    "url": "interview/index.html",
    "revision": "331393a3f905d01a1c4de363d78a3fbb"
  },
  {
    "url": "others/index.html",
    "revision": "911c43082b7713b15daa0e45454f3b9b"
  },
  {
    "url": "project/files/node.html",
    "revision": "ce0a85914a567ae7f550a5468818679c"
  },
  {
    "url": "project/files/vue3.html",
    "revision": "9c3a85cd6936585f837661ea6a0eb83d"
  },
  {
    "url": "server/index.html",
    "revision": "81a55b81428f7ad9dfc575fd23ecaad2"
  },
  {
    "url": "website/index.html",
    "revision": "12ab450fb228846e0ec6defc022a9e9c"
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
