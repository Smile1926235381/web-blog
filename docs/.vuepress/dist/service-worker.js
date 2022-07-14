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
    "revision": "d40d83e4dc4e5a854d7aaec2019f3444"
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
    "url": "assets/img/calc.ea17c68c.jpg",
    "revision": "ea17c68c4411c8330362704e45c75528"
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
    "url": "assets/js/10.77f6a7e9.js",
    "revision": "ce924ff41e44587c6cb26cd521e6d0ad"
  },
  {
    "url": "assets/js/11.8b87159b.js",
    "revision": "305377cd2e6c52859bc519fb91b60582"
  },
  {
    "url": "assets/js/12.5f6cb404.js",
    "revision": "d4948abc3b6282de94a9918ebaa07ad3"
  },
  {
    "url": "assets/js/13.2023880e.js",
    "revision": "fe6370117cd0fa167c31bd33302c2dd5"
  },
  {
    "url": "assets/js/14.bb34a64c.js",
    "revision": "e58ac9ff95ce831094f9275a4a42bdd3"
  },
  {
    "url": "assets/js/15.b119332e.js",
    "revision": "142255dc764caff5f1414dc13116f370"
  },
  {
    "url": "assets/js/16.4c9ece29.js",
    "revision": "2d5ca42e3cc1987c8d22a9435bd6214d"
  },
  {
    "url": "assets/js/17.a6eab48f.js",
    "revision": "542012168f3ba72244240a03187cec6a"
  },
  {
    "url": "assets/js/18.a8a610d7.js",
    "revision": "429efba718c3405ba1c2a8b3d12bf60c"
  },
  {
    "url": "assets/js/19.c1072651.js",
    "revision": "ef399f7d4d4451ae5b0dbc0213aa97e2"
  },
  {
    "url": "assets/js/2.00c70bad.js",
    "revision": "a0285c6ff9b9a996768e43a375e5837e"
  },
  {
    "url": "assets/js/20.57aee3b3.js",
    "revision": "1f198bae0d79bce22aa36298be484e18"
  },
  {
    "url": "assets/js/21.81844b7c.js",
    "revision": "432409711eba1349406dc12215031a82"
  },
  {
    "url": "assets/js/3.66b2ad18.js",
    "revision": "9db9d976245511a43e852574ca35a68e"
  },
  {
    "url": "assets/js/4.1d160aed.js",
    "revision": "adbd158b53e212d60dde48a6ab352553"
  },
  {
    "url": "assets/js/5.35e0c3f1.js",
    "revision": "3f5aba901c7748a8d2e6b84a5f974732"
  },
  {
    "url": "assets/js/6.eaa9c8c5.js",
    "revision": "f2307d62f938936f7f7880f61d3dda80"
  },
  {
    "url": "assets/js/7.0fa21955.js",
    "revision": "55d300e8679b227681e7151e0bb0fffc"
  },
  {
    "url": "assets/js/8.f34d325e.js",
    "revision": "6e36337bbf1c6e31d02ac61f720a617f"
  },
  {
    "url": "assets/js/9.050a8787.js",
    "revision": "f3a5bd798817f830e16b0e0a6ec5f0f0"
  },
  {
    "url": "assets/js/app.d294a21f.js",
    "revision": "e1a73372775290486de6b300dd3ed5cb"
  },
  {
    "url": "front/files/echarts.html",
    "revision": "036ef3ffaa43dc0adde578bf62a61b2e"
  },
  {
    "url": "front/files/flutter.html",
    "revision": "bb5ad6721a3fad40660ade9fb7ace020"
  },
  {
    "url": "front/files/html.html",
    "revision": "9fcdcfea88aa3bae7fb8a37a96904a9b"
  },
  {
    "url": "front/files/javascript.html",
    "revision": "e9be976dc9efccba817dd26adaea1a3e"
  },
  {
    "url": "front/files/node.html",
    "revision": "0154dfaff4e0d99d5146001957fe34cf"
  },
  {
    "url": "front/files/react.html",
    "revision": "22fe5a9862d6f09c05f14c9c0eae8100"
  },
  {
    "url": "front/files/vue.html",
    "revision": "efffdb02a83bb44a7643396aba13a6ea"
  },
  {
    "url": "front/files/webpack.html",
    "revision": "3388f34ff29aad30023be38306edcd23"
  },
  {
    "url": "guide.html",
    "revision": "ba441c42be0d13cb82b0f8c488267967"
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
    "revision": "62b09963ca8ad921bd8e3c266eee76ad"
  },
  {
    "url": "interview/index.html",
    "revision": "cb405a59251f4629b7c9a4e9b385d27f"
  },
  {
    "url": "others/index.html",
    "revision": "19ba8132d1a9ac4ed533a6ebe4559d85"
  },
  {
    "url": "project/files/node.html",
    "revision": "b31b0300191c05da461664d751eafa6a"
  },
  {
    "url": "project/files/react.html",
    "revision": "dbbf28cab740c277cfe6fbce9ecd5b2a"
  },
  {
    "url": "project/files/vue3.html",
    "revision": "e7ab21bddaa99385f83b7eb17195c35d"
  },
  {
    "url": "server/files/java.html",
    "revision": "03e70bff2cc13b3a509018362a421974"
  },
  {
    "url": "server/files/mysql.html",
    "revision": "1fe65b7be27120c33e8bc3adbd79541b"
  },
  {
    "url": "website/index.html",
    "revision": "4903a4d95b53d431b098c19a7b2d849c"
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
