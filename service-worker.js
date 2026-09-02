const CACHE_NAME="ai-fauxbulous-v4";
const ASSETS=["./","./index.html","./style.css","./script.js","./manifest.json","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png","./icons/favicon-32.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url); if(u.origin!==location.origin)return;
  const shell=e.request.mode==="navigate"||/\.(?:html|js|css|json)$/.test(u.pathname);
  if(shell){e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,cp)).catch(()=>{})}return r}).catch(async()=>await caches.match(e.request)|| (e.request.mode==="navigate"?caches.match("./index.html"):Promise.reject())));return}
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,cp)).catch(()=>{})}return r})));
});