/* AI-FAUXBULOUS mobile cleanup v19 */
(()=>{'use strict';
const css=`
#fauxFounderFrame,.fauxFounderCaption{display:none!important}
.actionCard{margin-top:0!important;padding-top:15px!important;overflow:hidden!important}
@media(max-width:600px){
  .topbar{display:flex!important;flex-wrap:wrap!important;align-items:center!important;gap:8px!important;padding-top:calc(8px + env(safe-area-inset-top))!important}
  .brand{width:100%!important;min-width:0!important}
  .brandTitle{font-size:16px!important;white-space:nowrap!important}
  .topActions{width:100%!important;display:flex!important;justify-content:flex-end!important;gap:6px!important;flex-wrap:wrap!important}
  .topActions .miniBtn,.topActions .suiteTopBtn{font-size:9px!important;padding:7px 9px!important;min-height:34px!important}
  .content{padding-top:10px!important}
  .modeDock{margin-top:0!important}
}
`;
function add(){if(document.getElementById('mobileCleanV19'))return;const s=document.createElement('style');s.id='mobileCleanV19';s.textContent=css;document.head.appendChild(s);document.querySelectorAll('#fauxFounderFrame,.fauxFounderCaption').forEach(x=>x.remove())}
window.addEventListener('DOMContentLoaded',()=>{add();setTimeout(add,300)});
})();
