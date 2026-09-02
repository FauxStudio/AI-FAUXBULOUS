/* AI-FAUXBULOUS Rebecca Owner Mode v33 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const OWNER_KEY='faux-rebecca-owner-mode-v33';
const params=new URLSearchParams(location.search);
const requested=params.get('owner')==='rebecca';
if(requested)localStorage.setItem(OWNER_KEY,'1');
const isOwner=()=>localStorage.getItem(OWNER_KEY)==='1';
const css=`
body:not([data-rebecca-owner="1"]) .fsuite,body:not([data-rebecca-owner="1"]) .suiteTopBtn.owner,body:not([data-rebecca-owner="1"]) #suiteOwner{display:none!important}
body[data-rebecca-owner="1"] .fsuite{display:block!important;margin:14px 0 18px!important}
body[data-rebecca-owner="1"] .suiteTopBtn.owner{display:inline-flex!important;align-items:center!important;justify-content:center!important}
body[data-rebecca-owner="1"] #suiteOwner.suiteModal.hidden{display:none!important}
body[data-rebecca-owner="1"] #suiteOwner.suiteModal:not(.hidden){display:flex!important}
#rebeccaOwnerBar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:10px 0 14px;padding:11px 13px;border:1px solid #ffd46f55;border-radius:18px;background:linear-gradient(135deg,#2a1730,#17101d);color:#fff;box-shadow:0 0 22px #ffd46f13}
#rebeccaOwnerBar b{font-size:12px;letter-spacing:.8px}#rebeccaOwnerBar small{display:block;color:#ffffff8c;font-size:9px;margin-top:2px}
#rebeccaOwnerBar button{border:1px solid #ffffff22;border-radius:999px;background:#ffffff0c;color:#fff;padding:8px 10px;font-weight:900;font-size:10px}
body[data-rebecca-owner="1"] .fsuite>.cardTitle:after{content:' · REBECCA ONLY';font-size:9px;color:#ffd46f;letter-spacing:1px}
@media(max-width:520px){#rebeccaOwnerBar{align-items:flex-start}#rebeccaOwnerBar button{font-size:9px}}
`;
function addStyle(){if($('#ownerV33Style'))return;const s=document.createElement('style');s.id='ownerV33Style';s.textContent=css;document.head.appendChild(s)}
function placeSuite(){const suite=$('.fsuite'),deck=$('#fauxModeDeck');if(suite&&deck&&suite.previousElementSibling!==deck)deck.after(suite)}
function addBar(){if($('#rebeccaOwnerBar')||!isOwner())return;const deck=$('#fauxModeDeck'),hero=$('.hero');if(!deck&&!hero)return;const bar=document.createElement('div');bar.id='rebeccaOwnerBar';bar.innerHTML='<div><b>👑 REBECCA OWNER MODE</b><small>Extra creator controls are unlocked on this device.</small></div><button type="button" id="ownerModeOff">USER VIEW</button>';bar.querySelector('#ownerModeOff').onclick=()=>{localStorage.removeItem(OWNER_KEY);location.href=location.pathname+'?v=33';};(deck||hero).before(bar)}
function revealOwner(){document.body.dataset.rebeccaOwner=isOwner()?'1':'0';if(!isOwner())return;addBar();placeSuite();const ownerBtn=$('.suiteTopBtn.owner');if(ownerBtn){ownerBtn.style.setProperty('display','inline-flex','important');ownerBtn.title='Rebecca Owner Dashboard'}const ownerModal=$('#suiteOwner');if(ownerModal)ownerModal.style.removeProperty('display')}
function boot(){addStyle();revealOwner();setTimeout(revealOwner,250);setTimeout(revealOwner,900);new MutationObserver(()=>{clearTimeout(window.__ownerV33T);window.__ownerV33T=setTimeout(revealOwner,40)}).observe(document.body,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();