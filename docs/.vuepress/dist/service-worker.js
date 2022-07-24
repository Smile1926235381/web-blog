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
    "revision": "20876e98da0803f8c4228f62af86f133"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
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
    "url": "assets/img/calc.ea17c68c.jpg",
    "revision": "ea17c68c4411c8330362704e45c75528"
  },
  {
    "url": "assets/img/less1.e2a420cf.jpg",
    "revision": "e2a420cfded9739feea0f142eeb977fa"
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
    "url": "assets/js/10.dc102ac1.js",
    "revision": "841345a3c747e330eb01ea753ae17afc"
  },
  {
    "url": "assets/js/11.054c10f1.js",
    "revision": "2b460678d254e242e3a44c68bbe380f1"
  },
  {
    "url": "assets/js/12.f7058a00.js",
    "revision": "99238df3bbc81e3a280a5e557e2a87c7"
  },
  {
    "url": "assets/js/13.b1e7d94f.js",
    "revision": "85f9cf8df075bad8106d35395d03f34c"
  },
  {
    "url": "assets/js/14.6afd8f05.js",
    "revision": "07736b0e16a67ea79a8783356a3b216c"
  },
  {
    "url": "assets/js/15.9a406c90.js",
    "revision": "bdef780225f386f3d4570e36c865d430"
  },
  {
    "url": "assets/js/16.306d0419.js",
    "revision": "703941d9426528b350d3b6e2f09a6f5b"
  },
  {
    "url": "assets/js/17.493e41de.js",
    "revision": "28219a9ed7899e62672a12d0f2fafa9c"
  },
  {
    "url": "assets/js/18.85fa5b5d.js",
    "revision": "58b12bfa8d8cb76ba70ab366f3fc2d15"
  },
  {
    "url": "assets/js/19.ba1874ab.js",
    "revision": "60a4b932c19f6321cdd9eaa435dc49a0"
  },
  {
    "url": "assets/js/2.ff4dc118.js",
    "revision": "da2178aa95a53dd550ddba08a373145c"
  },
  {
    "url": "assets/js/20.e2507063.js",
    "revision": "156e30b8646b9bf17423e8438e77ad5a"
  },
  {
    "url": "assets/js/21.49935482.js",
    "revision": "8489bc60b503dd1c4721a995910f1f22"
  },
  {
    "url": "assets/js/3.da27d948.js",
    "revision": "b3ca3b57f218c1333ed79c3a005179f2"
  },
  {
    "url": "assets/js/4.170a109b.js",
    "revision": "3e4cb6e3a5a6b08aa0f484b51feeaab2"
  },
  {
    "url": "assets/js/5.ee7c8241.js",
    "revision": "7a8f18af6e8f3b901af936df7661948c"
  },
  {
    "url": "assets/js/6.d195d346.js",
    "revision": "2cc2aa3c12daa258adefe7ce460be507"
  },
  {
    "url": "assets/js/7.c9061091.js",
    "revision": "5da89a4d95332e655af62ac0ac3767f4"
  },
  {
    "url": "assets/js/8.6ccc96dd.js",
    "revision": "dc702b46a54bc87fa5def586488533ac"
  },
  {
    "url": "assets/js/9.ef364540.js",
    "revision": "51625fffa2bc139792dc3b28cba9528e"
  },
  {
    "url": "assets/js/app.ae9d3736.js",
    "revision": "e1d1b9bab1bc26fb7752ad25d0b41c56"
  },
  {
    "url": "front/files/echarts.html",
    "revision": "271be18ef00a4bf6134148988631cf78"
  },
  {
    "url": "front/files/flutter.html",
    "revision": "8ebd66984c02d75b72a71999bab17e63"
  },
  {
    "url": "front/files/html.html",
    "revision": "a1483ee9df602f8348a4bf8567efcfcf"
  },
  {
    "url": "front/files/javascript.html",
    "revision": "2cf56ebf1b4be7aa59e5ecf6f2897206"
  },
  {
    "url": "front/files/node.html",
    "revision": "9cf41ce8ff7007c08473356559bdfdd8"
  },
  {
    "url": "front/files/react.html",
    "revision": "a40aef05033fc649cc15f4e51f54d415"
  },
  {
    "url": "front/files/vue.html",
    "revision": "16aeb9f7675664d0c95671c48fb0f2cd"
  },
  {
    "url": "front/files/webpack.html",
    "revision": "b4339c5fb963223ce177657f6b7a5854"
  },
  {
    "url": "guide.html",
    "revision": "f4042693819a303d676e8fb294d60669"
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
    "url": "images/photo.gif",
    "revision": "d25a6cc85d301d3573a94d6d96a747f6"
  },
  {
    "url": "images/photo.jpg",
    "revision": "7c84f9895d61ce7554c804d4a0c2ae79"
  },
  {
    "url": "index.html",
    "revision": "7c5149036f9927438231bb09ac01082e"
  },
  {
    "url": "interview/index.html",
    "revision": "a1afbe18633801f7a0504c2e11ffbfcf"
  },
  {
    "url": "others/index.html",
    "revision": "9d0f12ac9a3a49c397b8085a2900773c"
  },
  {
    "url": "project/files/node.html",
    "revision": "b3d85b4f596be80a30351101dc1ecd65"
  },
  {
    "url": "project/files/react.html",
    "revision": "52bc1be161e52866910bc01d59814707"
  },
  {
    "url": "project/files/vue3.html",
    "revision": "3b77b2356c9de9be3fdbd5cee9dbc3a8"
  },
  {
    "url": "server/files/java.html",
    "revision": "36f2fd811a8fb2c0a40ccf29ee8ca832"
  },
  {
    "url": "server/files/mysql.html",
    "revision": "ac50f4a3ba45733c0a95ef6354f9a609"
  },
  {
    "url": "website/index.html",
    "revision": "8cc8b8a13520f8a7452272d311d8617b"
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
