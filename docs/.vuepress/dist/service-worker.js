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
    "revision": "d090c695d6058abe8f85ccfb1aca13f6"
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
    "url": "assets/img/peizhi.7a3c498c.jpg",
    "revision": "7a3c498c5f353be765812eae562dfaee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6dc06d43.js",
    "revision": "841345a3c747e330eb01ea753ae17afc"
  },
  {
    "url": "assets/js/11.a6a551fe.js",
    "revision": "2b460678d254e242e3a44c68bbe380f1"
  },
  {
    "url": "assets/js/12.6b9c44c5.js",
    "revision": "99238df3bbc81e3a280a5e557e2a87c7"
  },
  {
    "url": "assets/js/13.3556790b.js",
    "revision": "85f9cf8df075bad8106d35395d03f34c"
  },
  {
    "url": "assets/js/14.a56c0fb6.js",
    "revision": "07736b0e16a67ea79a8783356a3b216c"
  },
  {
    "url": "assets/js/15.b48f65ad.js",
    "revision": "bdef780225f386f3d4570e36c865d430"
  },
  {
    "url": "assets/js/16.0e6d602c.js",
    "revision": "703941d9426528b350d3b6e2f09a6f5b"
  },
  {
    "url": "assets/js/17.c22ba834.js",
    "revision": "28219a9ed7899e62672a12d0f2fafa9c"
  },
  {
    "url": "assets/js/18.e7fc9524.js",
    "revision": "d676bdf13345ac042799dd93ea704e64"
  },
  {
    "url": "assets/js/19.2b7b7c5d.js",
    "revision": "60a4b932c19f6321cdd9eaa435dc49a0"
  },
  {
    "url": "assets/js/2.00e4cf3d.js",
    "revision": "92398322f7629228760c639068553b79"
  },
  {
    "url": "assets/js/20.0dfd1e63.js",
    "revision": "30aed9db9c18c8c3825ca3779eb6ebec"
  },
  {
    "url": "assets/js/21.49935482.js",
    "revision": "8489bc60b503dd1c4721a995910f1f22"
  },
  {
    "url": "assets/js/3.19fa6d12.js",
    "revision": "b3ca3b57f218c1333ed79c3a005179f2"
  },
  {
    "url": "assets/js/4.af6400fe.js",
    "revision": "3e4cb6e3a5a6b08aa0f484b51feeaab2"
  },
  {
    "url": "assets/js/5.1d1a9900.js",
    "revision": "7a8f18af6e8f3b901af936df7661948c"
  },
  {
    "url": "assets/js/6.35d2333f.js",
    "revision": "69721b76c6e22dbb5c02a57a0a4b02ee"
  },
  {
    "url": "assets/js/7.3f1c033d.js",
    "revision": "5da89a4d95332e655af62ac0ac3767f4"
  },
  {
    "url": "assets/js/8.87b31d0f.js",
    "revision": "dc702b46a54bc87fa5def586488533ac"
  },
  {
    "url": "assets/js/9.c09dacb1.js",
    "revision": "51625fffa2bc139792dc3b28cba9528e"
  },
  {
    "url": "assets/js/app.487e391e.js",
    "revision": "45eb4697220fa6bc41eb71f81b30e45c"
  },
  {
    "url": "front/files/echarts.html",
    "revision": "3c676c61db8b30069a3a0bc4b4c80bed"
  },
  {
    "url": "front/files/flutter.html",
    "revision": "380e811e6fa0060326e28ff93fa0b4a3"
  },
  {
    "url": "front/files/html.html",
    "revision": "10a553118ada60af67741143d5b12a50"
  },
  {
    "url": "front/files/javascript.html",
    "revision": "4af6dbac50841ce86cf2e9e797c7a12f"
  },
  {
    "url": "front/files/node.html",
    "revision": "f98f3cb76a794131c9c5ec67831d50a3"
  },
  {
    "url": "front/files/react.html",
    "revision": "f0ea4371482d049d0b883e69df58ea20"
  },
  {
    "url": "front/files/vue.html",
    "revision": "6b632eb3def5779cc2ce2ac18e4e33fe"
  },
  {
    "url": "front/files/webpack.html",
    "revision": "4448df1fe5bdffa6f1cfbcd557b59ba8"
  },
  {
    "url": "guide.html",
    "revision": "11c10a1d6105a815346ddb8773b57153"
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
    "revision": "f2573dd0ce022277d13b71554f1aa7ed"
  },
  {
    "url": "interview/index.html",
    "revision": "ce9507b07431d8b29ea7717e32d6e6a8"
  },
  {
    "url": "others/index.html",
    "revision": "fa126093032b14834d1c33b604ca2938"
  },
  {
    "url": "project/files/node.html",
    "revision": "d29c549a9862a559da35bfe3c47f3296"
  },
  {
    "url": "project/files/react.html",
    "revision": "1594ad256490f5b6d426f8f485fa45bf"
  },
  {
    "url": "project/files/vue3.html",
    "revision": "8c19e2cc8d71a87875d340206d5784d5"
  },
  {
    "url": "server/files/java.html",
    "revision": "f5ae853b4b83f45c5f7e793ee30b27a0"
  },
  {
    "url": "server/files/mysql.html",
    "revision": "ac2c5d75b1482665213c70989e9697d9"
  },
  {
    "url": "website/index.html",
    "revision": "6ab42e0cb49b8a2a373457abe8e82c1a"
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
