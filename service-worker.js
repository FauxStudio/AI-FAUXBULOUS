const CACHE_NAME='ai-fauxbulous-v24-stable';
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.map(k=>caches.delete(k)));await self.clients.claim()})()));
function stableHtml(html){
  return html
    .replace(/<script defer src="\.\/ui-v12\.js[^>]*><\/script>/g,'')
    .replace(/<script defer src="\.\/ui-v12-fix\.js[^>]*><\/script>/g,'')
    .replace(/<script defer src="\.\/signature-v10\.js[^>]*><\/script>/g,'')
    .replace(/<script defer src="\.\/ui-v24-stable\.js[^>]*><\/script>/g,'')
    .replace('</body>','<script defer src="./ui-v24-stable.js?v=24"></script></body>');
}
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);if(u.origin!==location.origin)return;
  if(e.request.mode==='navigate'||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/AI-FAUXBULOUS/')){
    e.respondWith((async()=>{try{const r=await fetch(e.request,{cache:'no-store'});const t=await r.text();return new Response(stableHtml(t),{status:r.status,statusText:r.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})}catch{return new Response('<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><body style="background:#08030d;color:white;font-family:system-ui;padding:24px">Fauxbulous needs a connection. Reopen when online.</body>',{headers:{'Content-Type':'text/html; charset=utf-8'}})}})());
    return;
  }
  e.respondWith(fetch(e.request,{cache:'no-store'}));
});
