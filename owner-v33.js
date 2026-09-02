/* AI-FAUXBULOUS Rebecca's Owner Mode v36 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q);
const ACCESS_KEY='faux-rebecca-owner-access-v34';
const VIEW_KEY='faux-rebecca-owner-view-v34';
const params=new URLSearchParams(location.search);
if(params.get('owner')==='rebecca'){localStorage.setItem(ACCESS_KEY,'1');localStorage.setItem(VIEW_KEY,'1');}
const hasAccess=()=>localStorage.getItem(ACCESS_KEY)==='1';
const ownerView=()=>hasAccess()&&localStorage.getItem(VIEW_KEY)!=='0';
const css=`
body:not([data-rebecca-owner="1"]) .fsuite{display:none!important}
body[data-rebecca-owner="1"] .fsuite{display:block!important;margin:14px 0 18px!important;visibility:visible!important;opacity:1!important}
#rebeccaOwnerBar,#rebeccaOwnerReturn,#rebeccaOwnerTools{margin:10px 0 14px;border:1px solid #ffd46f55;border-radius:20px;background:linear-gradient(135deg,#2b1730,#17101d);color:#fff;box-shadow:0 0 24px #ffd46f14}
#rebeccaOwnerBar,#rebeccaOwnerReturn{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 13px}
#rebeccaOwnerBar b,#rebeccaOwnerReturn b{font-size:12px;letter-spacing:.8px}#rebeccaOwnerBar small,#rebeccaOwnerReturn small{display:block;color:#ffffff8c;font-size:9px;margin-top:2px}
#rebeccaOwnerBar button,#rebeccaOwnerReturn button,.ownerQuick{border:1px solid #ffffff22;border-radius:999px;background:#ffffff0c;color:#fff;padding:9px 11px;font-weight:900;font-size:10px}
#rebeccaOwnerTools{padding:14px}#rebeccaOwnerTools .otitle{font-size:14px;font-weight:1000;letter-spacing:.8px;color:#ffd46f;margin-bottom:4px}#rebeccaOwnerTools .osub{font-size:9px;color:#ffffff8c;margin-bottom:11px}#rebeccaOwnerTools .ogrid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.ownerQuick{min-height:50px;border-radius:16px;font-size:11px}.ownerQuick:last-child{grid-column:1/-1}
body[data-rebecca-owner="1"] .fsuite>.cardTitle:after{content:' · REBECCA ONLY';font-size:9px;color:#ffd46f;letter-spacing:1px}
@media(max-width:520px){#rebeccaOwnerBar,#rebeccaOwnerReturn{align-items:flex-start}.ownerQuick{font-size:10px}}
`;
function addStyle(){if($('#ownerV36Style'))return;const s=document.createElement('style');s.id='ownerV36Style';s.textContent=css;document.head.appendChild(s)}
function clearOwnerUI(){$('#rebeccaOwnerBar')?.remove();$('#rebeccaOwnerReturn')?.remove();$('#rebeccaOwnerTools')?.remove()}
function host(){return $('#fauxModeDeck')||$('.hero')}
function clickWhenReady(selector){const el=$(selector);if(el){el.click();return}setTimeout(()=>$(selector)?.click(),250)}
function addOwnerBar(){if(!ownerView()||$('#rebeccaOwnerBar'))return;const h=host();if(!h)return;const bar=document.createElement('div');bar.id='rebeccaOwnerBar';bar.innerHTML='<div><b>👑 REBECCA\'S OWNER MODE</b><small>Your private creator controls are active.</small></div><button type="button">USER VIEW</button>';bar.querySelector('button').onclick=()=>{localStorage.setItem(VIEW_KEY,'0');apply()};h.before(bar)}
function addReturnBar(){if(!hasAccess()||ownerView()||$('#rebeccaOwnerReturn'))return;const h=host();if(!h)return;const bar=document.createElement('div');bar.id='rebeccaOwnerReturn';bar.innerHTML='<div><b>👑 OWNER ACCESS</b><small>You are previewing the regular user app.</small></div><button type="button">OWNER VIEW</button>';bar.querySelector('button').onclick=()=>{localStorage.setItem(VIEW_KEY,'1');apply()};h.before(bar)}
function addTools(){if(!ownerView()||$('#rebeccaOwnerTools'))return;const deck=$('#fauxModeDeck');if(!deck)return;const box=document.createElement('section');box.id='rebeccaOwnerTools';box.innerHTML='<div class="otitle">👑 REBECCA\'S CREATOR SUITE</div><div class="osub">Extra controls available only in your Owner app.</div><div class="ogrid"><button class="ownerQuick" data-open="#hBtn">🩸 HORROR LAB</button><button class="ownerQuick" data-open="#cBtn">📸 CAMERA LAB</button><button class="ownerQuick" data-open="#rBtn">🧬 REFERENCE / ID LOCK</button><button class="ownerQuick" data-open=".suiteTopBtn.vault">🗝 PROMPT VAULT</button><button class="ownerQuick" id="ownerAdvanced">✨ SHOW ADVANCED CREATOR SUITE</button></div>';box.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>clickWhenReady(b.dataset.open));box.querySelector('#ownerAdvanced').onclick=()=>{const suite=$('.fsuite');if(suite){suite.style.setProperty('display','block','important');suite.scrollIntoView({behavior:'smooth',block:'start'})}};deck.after(box)}
function revealSuite(){const suite=$('.fsuite');if(ownerView()&&suite){suite.style.setProperty('display','block','important');suite.style.setProperty('visibility','visible','important');suite.style.setProperty('opacity','1','important');if($('#rebeccaOwnerTools')&&suite.previousElementSibling!==$('#rebeccaOwnerTools'))$('#rebeccaOwnerTools').after(suite)}}
function apply(){clearOwnerUI();document.body.dataset.rebeccaOwner=ownerView()?'1':'0';if(ownerView()){addOwnerBar();addTools();revealSuite()}else if(hasAccess())addReturnBar()}
function boot(){addStyle();apply();setTimeout(apply,250);setTimeout(apply,900);new MutationObserver(()=>{clearTimeout(window.__ownerV36T);window.__ownerV36T=setTimeout(()=>{apply();revealSuite()},60)}).observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();