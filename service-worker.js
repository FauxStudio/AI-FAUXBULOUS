const CACHE_NAME="ai-fauxbulous-v15";
const ASSETS=["./","./index.html","./style.css","./script.js","./suite-v5.js","./learn-v6.js","./creator-v7.js","./finish-v9.js","./signature-v10.js","./hashtags-v11.js","./ui-v12.js","./ui-v12-fix.js","./ui-v14-patch.js","./spicy-v15.js","./assets/rebecca-recline.webp","./manifest.json","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png","./icons/favicon-32.png"];
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
      if(!html.includes("learn-v6.js"))html=html.replace("</body>",'<script defer src="./learn-v6.js"></script></body>');
      if(!html.includes("creator-v7.js"))html=html.replace("</body>",'<script defer src="./creator-v7.js"></script></body>');
      if(!html.includes("finish-v9.js"))html=html.replace("</body>",'<script defer src="./finish-v9.js"></script></body>');
      if(!html.includes("signature-v10.js"))html=html.replace("</body>",'<script defer src="./signature-v10.js"></script></body>');
      if(!html.includes("hashtags-v11.js"))html=html.replace("</body>",'<script defer src="./hashtags-v11.js"></script></body>');
      if(!html.includes("ui-v12.js"))html=html.replace("</body>",'<script defer src="./ui-v12.js"></script></body>');
      if(!html.includes("ui-v12-fix.js"))html=html.replace("</body>",'<script defer src="./ui-v12-fix.js"></script></body>');
      if(!html.includes("ui-v14-patch.js"))html=html.replace("</body>",'<script defer src="./ui-v14-patch.js?v=15"></script></body>');
      if(!html.includes("spicy-v15.js"))html=html.replace("</body>",'<script defer src="./spicy-v15.js?v=15"></script></body>');
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