/* AI-FAUXBULOUS Interaction Stability v37 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const css=`
button,.pickBtn,.segBtn,.pill,.toggleBtn,.ownerQuick,.fauxFold{-webkit-tap-highlight-color:transparent;touch-action:manipulation}
button:active,.pickBtn:active,.segBtn:active,.pill:active,.toggleBtn:active,.ownerQuick:active,.fauxFold:active{transform:scale(.975)!important;filter:brightness(1.14)!important}
.fauxTapFlash{animation:fauxTapFlash .28s ease-out!important}@keyframes fauxTapFlash{0%{box-shadow:0 0 0 0 #fff8}50%{box-shadow:0 0 0 4px #fff4,0 0 28px #ff4bc766}100%{box-shadow:inherit}}
.pickBtn.fauxSelected,.segBtn.active,.pill.active,.toggleBtn[aria-pressed="true"]{position:relative!important;border-color:#fff!important;box-shadow:0 0 0 2px #fff4,0 0 25px #ff45bf66!important}
.pickBtn.fauxSelected:after{content:'✓ SELECTED';position:absolute;right:42px;top:50%;transform:translateY(-50%);font-size:8px;letter-spacing:.7px;font-weight:1000;color:#fff;background:#0007;border:1px solid #ffffff35;border-radius:999px;padding:4px 7px;pointer-events:none}
.fauxFold{position:relative!important;z-index:3!important;cursor:pointer!important;pointer-events:auto!important}.fauxFold.open{border-color:#ffffff55!important;box-shadow:0 0 0 1px #fff2,0 0 18px #ff44bb24!important}.fauxFold.open small{color:#fff!important}.fauxFold .arrow{pointer-events:none}
#fauxTapToast{position:fixed;left:50%;bottom:max(28px,calc(env(safe-area-inset-bottom) + 16px));transform:translateX(-50%) translateY(10px);z-index:9999;background:#140b18ee;color:#fff;border:1px solid #ffffff30;border-radius:999px;padding:8px 12px;font-size:10px;font-weight:900;letter-spacing:.3px;opacity:0;pointer-events:none;transition:.18s;box-shadow:0 10px 30px #0009;max-width:82vw;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#fauxTapToast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.ownerQuick{position:relative!important}.ownerQuick.fauxWorking:after{content:'OPENING…';position:absolute;inset:0;display:grid;place-items:center;border-radius:inherit;background:#2b1730f2;color:#ffd46f;font-size:9px;font-weight:1000;letter-spacing:.7px}
@media(max-width:520px){.pickBtn.fauxSelected:after{right:34px;font-size:7px;padding:3px 5px}}
`;
function style(){if($('#fauxInteractionV37'))return;const s=document.createElement('style');s.id='fauxInteractionV37';s.textContent=css;document.head.appendChild(s)}
function toast(msg){let t=$('#fauxTapToast');if(!t){t=document.createElement('div');t.id='fauxTapToast';document.body.appendChild(t)}t.textContent=msg;clearTimeout(window.__fauxToastT);requestAnimationFrame(()=>t.classList.add('show'));window.__fauxToastT=setTimeout(()=>t.classList.remove('show'),850)}
function flash(el){if(!el)return;el.classList.remove('fauxTapFlash');void el.offsetWidth;el.classList.add('fauxTapFlash');setTimeout(()=>el.classList.remove('fauxTapFlash'),320)}
function markSelections(){
  $$('.pickBtn').forEach(b=>{const t=(b.textContent||'').replace(/✓\s*SELECTED/gi,'').trim();const chosen=!!t&&!/^(Pick|Choose|Select)(\s|$)/i.test(t);b.classList.toggle('fauxSelected',chosen)});
}
function toggleFold(b){const card=b.nextElementSibling;if(!card)return;const isOpen=b.classList.contains('open')||card.style.display!=='none';const willOpen=!isOpen;card.style.setProperty('display',willOpen?'':'none','important');if(willOpen)card.style.removeProperty('display');b.classList.toggle('open',willOpen);const sm=b.querySelector('small');if(sm)sm.textContent=willOpen?'tap to close':'tap to open';b.setAttribute('aria-expanded',willOpen?'true':'false');const a=b.querySelector('.arrow');if(a)a.textContent=willOpen?'⌄':'›';flash(b);toast(willOpen?'Section opened':'Section collapsed')}
function openModal(id,label){const m=$(id);if(!m){toast(label+' is still loading…');setTimeout(()=>{const later=$(id);if(later){later.classList.remove('hidden');later.style.setProperty('display','flex','important');toast(label+' opened')}},350);return}m.classList.remove('hidden');m.style.setProperty('display','flex','important');m.setAttribute('aria-hidden','false');toast(label+' opened')}
function ownerAction(btn){const text=(btn.textContent||'').toUpperCase();btn.classList.add('fauxWorking');setTimeout(()=>btn.classList.remove('fauxWorking'),320);
  if(text.includes('HORROR'))return openModal('#suiteHorror','Horror Lab');
  if(text.includes('CAMERA'))return openModal('#suiteCam','Camera Lab');
  if(text.includes('REFERENCE'))return openModal('#suiteRef','Reference / ID Lock');
  if(text.includes('VAULT'))return openModal('#suiteVault','Prompt Vault');
  if(text.includes('ADVANCED')){const suite=$('.fsuite');if(suite){suite.style.setProperty('display','block','important');suite.style.setProperty('visibility','visible','important');suite.scrollIntoView({behavior:'smooth',block:'start'});toast('Advanced Creator Suite opened')}else toast('Creator Suite is still loading…');return}
}
function handleClick(e){const fold=e.target.closest('.fauxFold');if(fold){e.preventDefault();e.stopImmediatePropagation();toggleFold(fold);return}
  const owner=e.target.closest('.ownerQuick');if(owner){e.preventDefault();e.stopImmediatePropagation();flash(owner);ownerAction(owner);return}
  const tap=e.target.closest('button,.pickBtn,.segBtn,.pill,.toggleBtn');if(tap){flash(tap);setTimeout(()=>{markSelections();const txt=(tap.textContent||'').replace(/\s+/g,' ').trim();if(tap.matches('.pickBtn,.segBtn,.pill')&&txt)toast('Selected: '+txt.replace(/^✓\s*/,'').slice(0,42));},40)}
}
function repairFolds(){ $$('.fauxFold').forEach(b=>{const card=b.nextElementSibling;if(!card)return;const open=card.style.display!=='none'&&getComputedStyle(card).display!=='none';b.classList.toggle('open',open);b.setAttribute('aria-expanded',open?'true':'false');const sm=b.querySelector('small');if(sm)sm.textContent=open?'tap to close':'tap to open';const a=b.querySelector('.arrow');if(a)a.textContent=open?'⌄':'›';}); }
function boot(){style();markSelections();repairFolds();document.addEventListener('click',handleClick,true);document.addEventListener('pointerdown',e=>{const b=e.target.closest('button,.pickBtn,.segBtn,.pill,.toggleBtn,.ownerQuick,.fauxFold');if(b)flash(b)},true);setTimeout(()=>{markSelections();repairFolds()},600);new MutationObserver(()=>{clearTimeout(window.__fauxI37M);window.__fauxI37M=setTimeout(()=>{markSelections();repairFolds()},60)}).observe(document.body,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();