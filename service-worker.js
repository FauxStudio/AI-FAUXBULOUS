const CACHE_NAME='ai-fauxbulous-v43-clean-sections';
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);if(u.origin!==location.origin)return;
  e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>new Response('<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><body style="background:#08030d;color:white;font-family:system-ui;padding:24px">Fauxbulous needs a connection. Reopen when online.</body>',{headers:{'Content-Type':'text/html; charset=utf-8'}})));
});