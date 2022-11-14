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
    "revision": "2fa73eb10dc1b0c6385a714852851ff8"
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
    "url": "assets/js/10.cb3d35d9.js",
    "revision": "a37c786ad5f5dbe18530f94060719d06"
  },
  {
    "url": "assets/js/11.d395788a.js",
    "revision": "78fd972df2e828dd160406c6c6a1a638"
  },
  {
    "url": "assets/js/12.e4af9fd4.js",
    "revision": "1425f9549b7a61b788554907507c33f6"
  },
  {
    "url": "assets/js/13.08e4f969.js",
    "revision": "f5788f814a4fb46fd6ac7e58b93343d2"
  },
  {
    "url": "assets/js/14.331781b5.js",
    "revision": "f020a620c3869abb53de7eba70ecf442"
  },
  {
    "url": "assets/js/15.36f03980.js",
    "revision": "99b91df3d7a6375396ee42614d716004"
  },
  {
    "url": "assets/js/16.0aff258b.js",
    "revision": "d6aa23c7d8ce4b7a74a3c305419d3ce3"
  },
  {
    "url": "assets/js/17.fb837f37.js",
    "revision": "dd3a5234c88c0ef9013c6c2d8cbd096c"
  },
  {
    "url": "assets/js/18.e636c95f.js",
    "revision": "fd305204d0feb7d8caf643747a932947"
  },
  {
    "url": "assets/js/19.0aaf4014.js",
    "revision": "b368f9615946dc6535ba8d1e2ab979f1"
  },
  {
    "url": "assets/js/2.fc96abb4.js",
    "revision": "eae9af2ae61d78f44edcf1ac381b73a3"
  },
  {
    "url": "assets/js/20.6959b59b.js",
    "revision": "12b8763068ead194050d463098735fd8"
  },
  {
    "url": "assets/js/21.ad86ae19.js",
    "revision": "a768069de984cf8b3b6e01f63ac1e5bb"
  },
  {
    "url": "assets/js/22.64255427.js",
    "revision": "8321a4121f5742dcd2e040d64b0d9e03"
  },
  {
    "url": "assets/js/23.7b81b3e1.js",
    "revision": "75444954dfaee550287619977df88046"
  },
  {
    "url": "assets/js/3.74f92302.js",
    "revision": "56f814a406ae21656502a5a0fbc6ced1"
  },
  {
    "url": "assets/js/4.fa8f7e36.js",
    "revision": "3edbd8acf88b38a87a29313cfcb8badf"
  },
  {
    "url": "assets/js/5.6887df4f.js",
    "revision": "b7df16fc4d975825213e5f307d9b99fd"
  },
  {
    "url": "assets/js/6.39e25670.js",
    "revision": "d02f44827c54a5aea3bcf145ac033316"
  },
  {
    "url": "assets/js/7.0c7072e3.js",
    "revision": "fc61a110fb01ae2735a5025a72d01e87"
  },
  {
    "url": "assets/js/8.7ee8a491.js",
    "revision": "b06ff51c1ee01e7f604e14394cae56dc"
  },
  {
    "url": "assets/js/9.99dd0396.js",
    "revision": "6a9eeb2303813f0ea7d8dc499795f807"
  },
  {
    "url": "assets/js/app.42598e4b.js",
    "revision": "87cf6450d6d101ea76a58cd025b9077b"
  },
  {
    "url": "excel/index.html",
    "revision": "f25dfc0e006e783d7934f1e592771aea"
  },
  {
    "url": "front/files/echarts.html",
    "revision": "96600ec19efdc3af2e4b1e0ebf948263"
  },
  {
    "url": "front/files/flutter.html",
    "revision": "8c26e2e9baebbe760b9d6e87dde50745"
  },
  {
    "url": "front/files/html.html",
    "revision": "dfd41ff2d083dcaafa4d0c0d1a61ff7f"
  },
  {
    "url": "front/files/javascript.html",
    "revision": "baffd09a26c3c7275d03100f65f0dda3"
  },
  {
    "url": "front/files/node.html",
    "revision": "35fb51b1e083e18ae47ea6f511a21c9a"
  },
  {
    "url": "front/files/react.html",
    "revision": "2df475049d55e2f954a1991c648649e6"
  },
  {
    "url": "front/files/vue.html",
    "revision": "de9d588301abc7b74c854288399c14cf"
  },
  {
    "url": "front/files/vue3.html",
    "revision": "bc4ee2a5e47ff540d3ca9585e646317f"
  },
  {
    "url": "front/files/webpack.html",
    "revision": "674aefc1f03e32e5d7d686776698df19"
  },
  {
    "url": "guide.html",
    "revision": "562a8dbdadf0b550073c53be7e97d3e7"
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
    "revision": "135d36578d1564dc2fecee7e3b04a174"
  },
  {
    "url": "interview/index.html",
    "revision": "c1e6e05c93a2e456f1f950df8c671c7f"
  },
  {
    "url": "others/index.html",
    "revision": "30a2d23958fa2d65ec5351d0e4785081"
  },
  {
    "url": "project/files/node.html",
    "revision": "31b27fed7c92a6f3c9bf1b6524540093"
  },
  {
    "url": "project/files/react.html",
    "revision": "0cc01ac52c615544116cc64aa9c160a3"
  },
  {
    "url": "project/files/vue3.html",
    "revision": "318a75695cbada0632564eca4c10c011"
  },
  {
    "url": "server/files/java.html",
    "revision": "ceb2d111e6780db4bd04d4ae27996ef4"
  },
  {
    "url": "server/files/mysql.html",
    "revision": "a172ba4b9500624b73b684d8b5e67583"
  },
  {
    "url": "website/index.html",
    "revision": "dbe301444354a87b30761845ecb1a70f"
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
