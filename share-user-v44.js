/* AI-FAUXBULOUS explicit share/user mode v44 */
(()=>{'use strict';
const params=new URLSearchParams(location.search);
if(params.get('share')!=='1'&&params.get('user')!=='1')return;
const $=(q,r=document)=>r.querySelector(q);
function forceUser(){
  document.body.dataset.rebeccaOwner='0';
  $('#rebeccaOwnerBar')?.remove();
  $('#rebeccaOwnerReturn')?.remove();
  $('#rebeccaCreatorSuite')?.remove();
  $('.fsuite')?.style.setProperty('display','none','important');
}
function boot(){forceUser();setTimeout(forceUser,100);setTimeout(forceUser,600);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();