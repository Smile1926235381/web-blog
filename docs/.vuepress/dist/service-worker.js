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
    "revision": "66f9f054636b29c7773d1835252f2a01"
  },
  {
    "url": "assets/css/0.styles.0d8f249b.css",
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
    "url": "assets/img/calc.ea17c68c.jpg",
    "revision": "ea17c68c4411c8330362704e45c75528"
  },
  {
    "url": "assets/img/jinzhi.46842e2c.png",
    "revision": "46842e2cd5cd9ceceb2b894190824174"
  },
  {
    "url": "assets/img/jinzhi2.19613eb3.jpg",
    "revision": "19613eb36f402db475cad51182171a2e"
  },
  {
    "url": "assets/img/less1.e2a420cf.jpg",
    "revision": "e2a420cfded9739feea0f142eeb977fa"
  },
  {
    "url": "assets/img/line.dc081f42.jpg",
    "revision": "dc081f42144ca751367ecfc27208c80a"
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
    "url": "assets/img/shujuluru.2ca5cd2d.png",
    "revision": "2ca5cd2d2d5799ca6849b64ee8333afb"
  },
  {
    "url": "assets/img/tiancong.80d8f17f.png",
    "revision": "80d8f17f7a141562d37202e82cd2694f"
  },
  {
    "url": "assets/js/10.3fdc9c12.js",
    "revision": "7718ee836b062056bf7a4bb9077a6e37"
  },
  {
    "url": "assets/js/11.fdd6c3c0.js",
    "revision": "c251558fc7a6ce1e847c09b8e61f0234"
  },
  {
    "url": "assets/js/12.604ed25b.js",
    "revision": "c2063fb8351d5543a6f9cad99f6964d3"
  },
  {
    "url": "assets/js/13.d5dddcf6.js",
    "revision": "f5c4ad97f27311e1f7464f36441b76eb"
  },
  {
    "url": "assets/js/14.3166ae70.js",
    "revision": "75d119f71d1396f9fb33c0f64adfdab0"
  },
  {
    "url": "assets/js/15.b71719f2.js",
    "revision": "fd924be3c543de87521b81b2154f3f75"
  },
  {
    "url": "assets/js/16.a0b2d173.js",
    "revision": "ebca80b61892163bf187c4402cd918b1"
  },
  {
    "url": "assets/js/17.b20777b3.js",
    "revision": "71e4b2f46e4928d82a667e3503992c1d"
  },
  {
    "url": "assets/js/18.85070b53.js",
    "revision": "7cda42829af3d32ea46660142e9e9121"
  },
  {
    "url": "assets/js/19.ae1fd628.js",
    "revision": "26dd41391b73f89e18bfacf8627e43da"
  },
  {
    "url": "assets/js/2.bbc8bbe5.js",
    "revision": "29363c0a6d1832d208db16a21e4950e2"
  },
  {
    "url": "assets/js/20.25a41166.js",
    "revision": "84bd68f651bccc48c3d3256a363d0edc"
  },
  {
    "url": "assets/js/21.8748336e.js",
    "revision": "117998b42952e77435eae1ebd8221bf9"
  },
  {
    "url": "assets/js/22.96cf76f4.js",
    "revision": "67553a4d55984a669a1647afadc90c1a"
  },
  {
    "url": "assets/js/23.0f1af4e6.js",
    "revision": "3eb3e30ba55a50c2678cf1cb1a065eb4"
  },
  {
    "url": "assets/js/3.5e0a98fc.js",
    "revision": "6c799a76a74e9c1a933f2a628c08cc72"
  },
  {
    "url": "assets/js/4.119fedec.js",
    "revision": "63ed71e49b98d164760ab4b108c00a26"
  },
  {
    "url": "assets/js/5.11dcb13f.js",
    "revision": "f67ab751d06b1ff908c810ef35beb0d9"
  },
  {
    "url": "assets/js/6.73204fe0.js",
    "revision": "dd5d85e65c3274cdc8759ccd2fe76141"
  },
  {
    "url": "assets/js/7.cfe21607.js",
    "revision": "172ccc31c41ca4ffafc51128d6307eaa"
  },
  {
    "url": "assets/js/8.fdfee6ee.js",
    "revision": "9b40587d1ee9d46f720263fb98447ea8"
  },
  {
    "url": "assets/js/9.38e5c906.js",
    "revision": "517a36b5369edc755b3cfc886789b57f"
  },
  {
    "url": "assets/js/app.408df628.js",
    "revision": "18dc4b59d207932857982c2319326899"
  },
  {
    "url": "excel/index.html",
    "revision": "d16d58e4582297070793d0c1af456849"
  },
  {
    "url": "front/files/echarts.html",
    "revision": "cdfb29b002345f0a9e6ddafd29162ea7"
  },
  {
    "url": "front/files/flutter.html",
    "revision": "4a7fa7257759f5b4e96c9eafc30623c7"
  },
  {
    "url": "front/files/html.html",
    "revision": "5f9cdbc2f6014628500d3206e10ed81c"
  },
  {
    "url": "front/files/javascript.html",
    "revision": "70b7b06eedf7c28fd6c922d6a79b139f"
  },
  {
    "url": "front/files/node.html",
    "revision": "4d27bebc92af122c963bd13b7734da51"
  },
  {
    "url": "front/files/react.html",
    "revision": "c33fc5e77df33a5ef4107de0f184ebf3"
  },
  {
    "url": "front/files/vue.html",
    "revision": "516b4bf0249f974ae09fa43e47886bad"
  },
  {
    "url": "front/files/vue3.html",
    "revision": "baa2ce2f27b834ab691b9512de26519c"
  },
  {
    "url": "front/files/webpack.html",
    "revision": "148e80b72bd92119ebaac6e96a8cc944"
  },
  {
    "url": "guide.html",
    "revision": "80d1c30694c57388971c81bcfe6a8076"
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
    "revision": "7101ef80fb9ac6aa53a4700fc6f3d12a"
  },
  {
    "url": "interview/index.html",
    "revision": "f994cb6d5710f539b4c80d4243788542"
  },
  {
    "url": "others/index.html",
    "revision": "13dba06d38e1d0e1c6967bd8c64e209f"
  },
  {
    "url": "project/files/node.html",
    "revision": "cefd3c6a2975ae404de2628e840170bf"
  },
  {
    "url": "project/files/react.html",
    "revision": "5e4c8726cba54ecd1093809413ad2976"
  },
  {
    "url": "project/files/vue3.html",
    "revision": "09b99777988c1bd60910a7231c580d92"
  },
  {
    "url": "server/files/java.html",
    "revision": "ddc867655646ba3716327b39bc6f275f"
  },
  {
    "url": "server/files/mysql.html",
    "revision": "ee762d86431bb15b4dec50a9caa4f45b"
  },
  {
    "url": "website/index.html",
    "revision": "0e0201fdeecad5d8bac34cbcb02f6961"
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
