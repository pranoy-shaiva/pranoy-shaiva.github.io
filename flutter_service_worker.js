'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9ab15be1d71c3295bd13ac1203ef6d57",
"assets/AssetManifest.json": "7c942d7ae4bbde840f4299416ac414e3",
"assets/assets/camera.glb": "8d0992fc1bf5de65e6b750087bd9cb13",
"assets/assets/flash.wav": "e698ee50d26f22b72e86717e9bf482cb",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "3f4837a39ba086d09183f77752e8d1aa",
"assets/images/alpine.jpg": "a8963f7d242df28c7e69f9f312ed10b6",
"assets/images/aurora.jpg": "ff2e1bab76053f9df1977b8b10909fde",
"assets/images/balcony.jpg": "ab4c6401682d1810cac56676d2918c16",
"assets/images/bednipath.jpg": "e10c137c7133406221121a78da77dbcd",
"assets/images/bednisunset.jpg": "71746032fd5f91512aab9f51a63109f6",
"assets/images/behance.png": "ad82d1bae6dfcb06666eacf5bdd97407",
"assets/images/bucketboard.jpg": "f07a47a7c559abc22521c53b4c82fec3",
"assets/images/bucketboard2.jpg": "f985979f24965761d577f6ddd0350a0b",
"assets/images/bunnyhop.jpg": "0188e6b6371fb99e62bcfec58204e97e",
"assets/images/busline.jpg": "4e4b0ab45f1776cc1bd006bbd88ba727",
"assets/images/caa.jpg": "7f95333eb8338db1a28d92752190dcba",
"assets/images/caa2.jpg": "767cbe55b4c39b8f009826f884745b5a",
"assets/images/caa3.jpg": "bd133be130b67be57c2a57467610e4fe",
"assets/images/caa5.jpg": "21d55d4c712cd5e51a58414048971e4e",
"assets/images/caa6.jpg": "164221bc6f1a62bb79e178ac218d257d",
"assets/images/caa7.jpg": "73a092109eb1bab956e945ea043d968a",
"assets/images/chandu1.jpg": "b47d462d2fff2c93de9c056e1b67827b",
"assets/images/clothesline.jpg": "9d6d258a34019c8510ab87ca658844d0",
"assets/images/composite.jpg": "d8d6239e615080963171ca4f93bb4c90",
"assets/images/diksha2.jpg": "71e4816b8681a17ff51ab5e7176d4493",
"assets/images/dp.jpg": "48e57af21661ae053dc3fd70274b49af",
"assets/images/faces.jpg": "9ec5c428d46aeb9990d8291577705600",
"assets/images/farmersprotest3.jpg": "08369e4fec13f05c6e12dc95ed54113f",
"assets/images/farmersprotest4.jpg": "dc27dbc72051621e57ecc483f17b6ef7",
"assets/images/farmersprotest4.png": "5d1486d6378a2bc9f482ea21a0e42cb0",
"assets/images/farmersprotest8.jpg": "5f481a070a2cbc3bdd2425976560812b",
"assets/images/flip.jpg": "4f17fdd88350bead2b17058c6ec950e3",
"assets/images/fridays.jpg": "3b32895cc70e3ac0f0f95e2cafefa829",
"assets/images/hairlightdiksha.jpg": "9641e7203260027bc7e011319e8f50b5",
"assets/images/hampibnw.jpg": "c18b44482933769c6e8bd1927c578e64",
"assets/images/hampidays.jpg": "f8bfd65d7df4a62b52e9f3ca05801d0b",
"assets/images/hampigranite.jpg": "9af62a9c2a99acb11272daeeb8b05d1a",
"assets/images/hampinights.jpg": "26d43df0a4dba0be9c75b1dc5678047e",
"assets/images/himalayancalm.jpg": "6a4a70e48362828e371ef41467442db2",
"assets/images/insta_logo.png": "24ff602dfc658fc483dca8b652c46bb9",
"assets/images/ishika3.jpg": "66e9ef85452d56470db63220ec164f11",
"assets/images/ishika5.jpg": "6bcda52e15ea243ac9a6cf912f32d9a2",
"assets/images/jess1.jpg": "26b4d66cd4619ad77fc7855f1b34f373",
"assets/images/jess4.jpg": "d33c92e86d7db772a9ae1dbe3e9e5cea",
"assets/images/jess5.jpg": "42ef795cff8337277eef81742041e31b",
"assets/images/kerelabackwaters.jpg": "a677ed45c6bf051f1be73342e3544742",
"assets/images/keymonk1.jpg": "09c9ecd64e4ce71485603d2d47914121",
"assets/images/keymonk2.jpg": "655e3d031e4eb1c27e2c992b45e52ee1",
"assets/images/kharsocial.jpg": "d808d10f5cf8ab652797fb8df217943a",
"assets/images/kickflip.jpg": "5cfc2e6a9240a8cf64d42d063cca2ae3",
"assets/images/linkedin.png": "f9ed832684a8759eb0cf91ebd5e1355e",
"assets/images/maleria.jpg": "64fd46915d03fdcf143322aeb986028e",
"assets/images/Mansi.jpg": "ec0eb950650cd9c9a0d2f370fb6aae19",
"assets/images/mermaid.jpg": "6ead04b11540247431a6f3bd7ad5b16e",
"assets/images/morning.jpg": "c16a4dedf47c56f65fc55da77c6e25ff",
"assets/images/mosque.jpg": "8c42fa145052ad53003214f447acf3e8",
"assets/images/mumbaimornings.jpg": "feea42753986602b12a36be257377b64",
"assets/images/nikibeach.jpg": "7b5c22855d7cc41c2b92e6e68d424b5a",
"assets/images/pani.jpg": "98cf7a689676980af73c814f50a5dac2",
"assets/images/path.jpg": "ef659b27f5c30a27272731b1394fd12b",
"assets/images/rishi2.jpg": "c5fc9fc7e4881854355cf65edddf9acf",
"assets/images/rishi3.jpg": "cfb5cb266e217ef78c86f40e9e075bef",
"assets/images/sabr-chinmay1.jpg": "e1c995866c13cafc8bf96eb878f660b8",
"assets/images/sabr-chinmay2.jpg": "117c418f663209d6163ab05b9cfe8331",
"assets/images/saurabh1.jpg": "eb2c0a91edb52ace4c4d36c1151dc0a2",
"assets/images/saurabh3.jpg": "70bb91d98000b7655ef84eb8dfa129ad",
"assets/images/saurabh6.jpg": "f01cf1f79166763f325c7fa3f87b41d6",
"assets/images/shamika2.jpg": "475a0c06d4acbb86dfc79dbb4486a469",
"assets/images/shreyasF.jpg": "8d78da51be6e55a5c79f8383d2b19825",
"assets/images/solitude.jpg": "4ef27aba19a8b75494c36f6cb1141ef9",
"assets/images/stuck.jpg": "09a2b03200d9878b7b8e3ccb5f1f35b7",
"assets/images/swach.jpg": "ccea953f893de0032f4f1ddc77732699",
"assets/images/tanya.jpg": "597014e5f42b78b62b0303db97d213c6",
"assets/images/tanya2.jpg": "8166bb8d51fe93d7b24d5d71e8fa433c",
"assets/images/trishul.jpg": "b12b04adefd1ddae02376a2361e86dee",
"assets/images/vada.jpg": "c3a94578a45e4d41a82ae5e471bbda1a",
"assets/images/vinita2.jpg": "989ea14f486fa02bf8f2b03b1381237b",
"assets/images/wari.jpg": "3bdbde5f9a6717edc133490231df8ab5",
"assets/images/whistle.jpg": "c9e944a3796fb9fc238ea2c12add7c83",
"assets/NOTICES": "7c36fba15989d2d776978b2e4129b04e",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "4226392bee9372f20a688343e51e7b54",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "f32cfcc5e3fe114e87ea37fa4195c025",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88bfd6e79e7a4f87ee05de50fdeab766",
"/": "88bfd6e79e7a4f87ee05de50fdeab766",
"main.dart.js": "dfecc2a8eee66179d04e661eed7830fa",
"manifest.json": "1ae08fc7dcd4b8bae8f03f494c5f1c0a",
"version.json": "cdd3b02281f732a019df60444f204487"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
