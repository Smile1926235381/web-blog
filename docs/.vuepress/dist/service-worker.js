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
    "revision": "95bf5a8a50f642de1c77b8dc444c78bd"
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
    "url": "assets/js/10.c4787c3d.js",
    "revision": "e1ae8b1c6ed6716dc5b8d33cfc365d9a"
  },
  {
    "url": "assets/js/11.ba7a3a2a.js",
    "revision": "f9759e669feeec472621421fdce6a18d"
  },
  {
    "url": "assets/js/2.5a9b6b78.js",
    "revision": "11090747632baa12847fd6d49d2f66b3"
  },
  {
    "url": "assets/js/3.88973d52.js",
    "revision": "6f3e9559f5c50dfec97d459c6e2850ea"
  },
  {
    "url": "assets/js/4.8ea0f7c2.js",
    "revision": "84c818dccc64298c699d03e8b8d6201e"
  },
  {
    "url": "assets/js/5.1f91f9f4.js",
    "revision": "9c988c26350601dcd524a26957d742ad"
  },
  {
    "url": "assets/js/6.cb450864.js",
    "revision": "ffe241b5b36c686747e296da6acdeb2d"
  },
  {
    "url": "assets/js/7.ba760d8d.js",
    "revision": "0528955b984552b99b35fcc960e67746"
  },
  {
    "url": "assets/js/8.cdfafc50.js",
    "revision": "aeac95f332217f8630cb843334530dd8"
  },
  {
    "url": "assets/js/9.4f244530.js",
    "revision": "e680640e9a40b159399e47653b5bc91b"
  },
  {
    "url": "assets/js/app.5e770132.js",
    "revision": "62b0b4ec88ae71bb305e54cb598215ee"
  },
  {
    "url": "front/index.html",
    "revision": "813483cf69c9754591f0ae80e45bc5f2"
  },
  {
    "url": "guide.html",
    "revision": "9eca2ce19e63d129db4bc86c49cbeb44"
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
    "revision": "ca4decff04a37455f153ce237e7aae2c"
  },
  {
    "url": "interview/index.html",
    "revision": "341cd4d5400a89aa792281fe37a4dbc8"
  },
  {
    "url": "others/index.html",
    "revision": "8f820874e9c1187e6729123d5e7b0fc2"
  },
  {
    "url": "project/index.html",
    "revision": "a302e8b70b65a777c40ecaf634262c58"
  },
  {
    "url": "server/index.html",
    "revision": "52f846691f54ae26a67800ad81f564fb"
  },
  {
    "url": "website/index.html",
    "revision": "2861ba147e2ee5b5a0d5b5d85a7ad795"
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
