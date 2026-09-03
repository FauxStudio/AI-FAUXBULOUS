/* AI-FAUXBULOUS explicit public/user mode v46 */
(()=>{'use strict';
const params=new URLSearchParams(location.search);
const forcePublic=params.get('user')==='1'||params.get('share')==='1';
if(!forcePublic)return;
window.__FAUX_PUBLIC_USER__=true;
const $=(q,r=document)=>r.querySelector(q);
function forceUser(){
  if(document.body)document.body.dataset.rebeccaOwner='0';
  $('#rebeccaOwnerBar')?.remove();
  $('#rebeccaOwnerReturn')?.remove();
  $('#rebeccaCreatorSuite')?.remove();
  document.querySelectorAll('.fsuite').forEach(el=>el.style.setProperty('display','none','important'));
}
function boot(){
  forceUser();
  setTimeout(forceUser,50);
  setTimeout(forceUser,250);
  setTimeout(forceUser,800);
  new MutationObserver(forceUser).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['data-rebecca-owner']});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();