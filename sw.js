if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-56079563"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0a301732.631c3d1bdd467d676f79.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/69b2bcf5.2038961d17908fdf1a45.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/ae51ba48.72fa8a5110d595dd9de9.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/commons.4522356e0b5c95bc3727.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/d85cebb091eeae51cc371e66ee0b36b9dcaa427b.9934fa30c7bb549f9711.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/e4a5b23614197ef5c569da8f060562c7f1cb4bce.105c21567bb248ebc177.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/framework.1a5e6c0bcaecf178eee2.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/main-33fb5ca4fea27ec0c9d9.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/pages/_app-a43c42ca8acd96dfc3f1.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/pages/_error-4e2126b725f0ba0a0100.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/pages/history-e34c868a0ce8c00693a0.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/pages/index-974d0e1bd90e08fccba2.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/polyfills-3933e42d5d0cf7767956.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/pXJOjgm1JQ8JsbqKJN_-y/_buildManifest.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/_next/static/pXJOjgm1JQ8JsbqKJN_-y/_ssgManifest.js",revision:"pXJOjgm1JQ8JsbqKJN_-y"},{url:"/favicon.ico",revision:"30d3c5d305c6ba1dca113165042d0541"},{url:"/manifest.json",revision:"b1bed84d82b0256b0068933bcc871abb"},{url:"/static/icons/android-chrome-192x192.png",revision:"a3a72ff9a310897740b4356c7ab45c86"},{url:"/static/icons/android-chrome-384x384.png",revision:"858e460b9fa2e60a05382c2f7cc87483"},{url:"/static/icons/apple-touch-icon-152x152.png",revision:"38dab76adf099b878ac9a6b2af5ea630"},{url:"/static/icons/apple-touch-icon-180x180.png",revision:"8a7d03abfb19c7e0f164f7faa325a194"},{url:"/static/icons/apple-touch-icon.png",revision:"8a7d03abfb19c7e0f164f7faa325a194"},{url:"/static/icons/icon-512x512.png",revision:"cba36f4016779356f438d8b3685aa1d9"},{url:"/static/images/apple-splash-1125-2436.jpg",revision:"9a672977f32729816a93722d277c0a45"},{url:"/static/images/apple-splash-1242-2208.jpg",revision:"db1a237cd6c668ff8dcb092cc81cecea"},{url:"/static/images/apple-splash-1536-2048.jpg",revision:"6a9394fc0e90eec34c6b608dfe5cb551"},{url:"/static/images/apple-splash-1668-2224.jpg",revision:"9c7484c0c87409f0619a8350981e9653"},{url:"/static/images/apple-splash-2048-2732.jpg",revision:"d146f4250b3107749105cb238de34599"},{url:"/static/images/apple-splash-640-1136.jpg",revision:"37be9482db749ea40681e7ffb898a4db"},{url:"/static/images/apple-splash-750-1334.jpg",revision:"1810442f0d2d31d8a5f2184a8fdf6331"},{url:"/static/images/ogp.jpg",revision:"a29dc8e3a96b98f03bfd44ca5708fa4c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
