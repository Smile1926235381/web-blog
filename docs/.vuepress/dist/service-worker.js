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
    "revision": "992308bcbc17936b2b83ee24fa21c8a1"
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
    "url": "assets/js/10.99895122.js",
    "revision": "56b13d045f37f0ea65ac2ee137eb98c1"
  },
  {
    "url": "assets/js/11.1a9cffb8.js",
    "revision": "a349c4aa698f9fb585a9bc32f8bcd00e"
  },
  {
    "url": "assets/js/12.eb8d62e5.js",
    "revision": "b6ad3c5c69b30922a75373a58852525f"
  },
  {
    "url": "assets/js/13.e63453e3.js",
    "revision": "3c1ecb972b12eb52f075d1a685f6998b"
  },
  {
    "url": "assets/js/14.1298e436.js",
    "revision": "7916f482753e99ac249904281ff16fcf"
  },
  {
    "url": "assets/js/15.848a5e7a.js",
    "revision": "f509ce0bef7d6da6097f510c481e3240"
  },
  {
    "url": "assets/js/16.e068c218.js",
    "revision": "5b45325fbd89ffb973581d53741d98e9"
  },
  {
    "url": "assets/js/17.7ecafa6a.js",
    "revision": "7886687effcd4a5eab5662bd2072094c"
  },
  {
    "url": "assets/js/2.5a9b6b78.js",
    "revision": "11090747632baa12847fd6d49d2f66b3"
  },
  {
    "url": "assets/js/3.6b43b2da.js",
    "revision": "e58c40afd11d55b46f31f24afd785a23"
  },
  {
    "url": "assets/js/4.32f26875.js",
    "revision": "a8ff4a60e9b3ce6416997318cb63e37b"
  },
  {
    "url": "assets/js/5.e1a1b6d9.js",
    "revision": "cc355171a07e50f90e04cd42fb8a0e16"
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
    "url": "assets/js/8.7f804485.js",
    "revision": "72644b228b6dca0dad9f8af45c630ea7"
  },
  {
    "url": "assets/js/9.f3e59f11.js",
    "revision": "c8860d50c90fd36586f6b60fd9384c88"
  },
  {
    "url": "assets/js/app.6b940db4.js",
    "revision": "1cbc066745e106ec5c156eaf8ab887ba"
  },
  {
    "url": "front/files/echarts.html",
    "revision": "bae01514c35a4aeeeb9233ecebe3c183"
  },
  {
    "url": "front/files/html.html",
    "revision": "eb389482105392cce6a62324dff0131e"
  },
  {
    "url": "front/files/javascript.html",
    "revision": "bfa79aff1689280bde51e03ee8cd5702"
  },
  {
    "url": "front/files/node.html",
    "revision": "71414d2c890299f7df842dff7d4203ab"
  },
  {
    "url": "front/files/react.html",
    "revision": "3283652b276f93d12646dc0c4ceb6651"
  },
  {
    "url": "front/files/vue.html",
    "revision": "d6e1713f56bb8fc90f6a5b6043227645"
  },
  {
    "url": "front/files/webpack.html",
    "revision": "bc8fd599b54da3993ea6e6b475729fc4"
  },
  {
    "url": "guide.html",
    "revision": "3654c637ca673a46b2107ab613139d4d"
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
    "revision": "ae441f5596b360dbd87f646f4e8d9a16"
  },
  {
    "url": "interview/index.html",
    "revision": "dfa69454f3f7adc004d480ed1e308235"
  },
  {
    "url": "others/index.html",
    "revision": "572855a2454254c0c634ad857357e6e9"
  },
  {
    "url": "project/index.html",
    "revision": "c10ce27b068e97d7f3cca720b8eeb2db"
  },
  {
    "url": "server/index.html",
    "revision": "7e9205cd8b0fb1632760bffea21315e3"
  },
  {
    "url": "website/index.html",
    "revision": "124f0e5b2cc8d6ceef7c56546d2777be"
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
