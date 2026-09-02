const CACHE_NAME="ai-fauxbulous-v5";
const ASSETS=["./","./index.html","./style.css","./script.js","./suite-v5.js","./manifest.json","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png","./icons/favicon-32.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);if(u.origin!==location.origin)return;
  if(e.request.mode==="navigate"){
    e.respondWith(fetch(e.request,{cache:"no-store"}).then(async r=>{
      if(!r.ok)return r;
      let html=await r.text();
      if(!html.includes("suite-v5.js"))html=html.replace("</body>",'<script defer src="./suite-v5.js"></script></body>');
      const out=new Response(html,{status:r.status,statusText:r.statusText,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"}});
      caches.open(CACHE_NAME).then(c=>c.put(e.request,out.clone())).catch(()=>{});
      return out;
    }).catch(async()=>await caches.match(e.request)||caches.match("./index.html")));
    return;
  }
  const shell=/\.(?:html|js|css|json)$/.test(u.pathname);
  if(shell){e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,cp)).catch(()=>{})}return r}).catch(async()=>await caches.match(e.request)||Promise.reject()));return}
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,cp)).catch(()=>{})}return r})));
});