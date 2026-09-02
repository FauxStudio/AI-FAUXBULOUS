/* AI-FAUXBULOUS visual layer v31 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const CLOSE_KEY='faux-creator-card-closed-v31';
const CREATOR='./assets/rebecca-creator-v31.jpg?v=31';
const WIDE='./assets/rebecca-wide-v31.jpg?v=31';
const css=`
.hero{display:block!important;visibility:visible!important;min-height:0!important;background:linear-gradient(135deg,#1d1324,#151021)!important;color:#fff!important}.hero>*{display:block!important;visibility:visible!important;opacity:1!important}.hero .spicyBtn{display:none!important}
.creatorCard,.fauxCreatorCard,#fauxCreatorCard,[data-faux-creator]{display:none!important}
#creatorV31{display:grid!important;grid-template-columns:112px 1fr;gap:16px;align-items:center;position:relative;margin:14px 0 18px;padding:14px;border:1px solid #ffffff22;border-radius:24px;background:linear-gradient(135deg,#211524,#15101d);overflow:hidden;color:#fff}
#creatorV31 img{width:112px;height:112px;display:block;object-fit:cover;object-position:50% 32%;border-radius:22px;border:1px solid #ffffff33}
#creatorV31 .ey{font-size:9px;letter-spacing:3px;color:#ffffff8c;font-weight:900;margin-bottom:5px}#creatorV31 .nm{font-size:18px;font-weight:950;line-height:1.08}#creatorV31 .sb{font-size:11px;line-height:1.35;color:#ffffffb8;margin-top:7px}
#creatorV31 .x{position:absolute;right:12px;top:12px;width:38px;height:38px;border-radius:50%;border:1px solid #ffffff30;background:#09060c;color:#fff;font-size:20px;font-weight:900}
#founderMini,#founderV31{display:none!important}
#founderV31{position:relative;margin:0 0 14px;border-radius:20px;overflow:hidden;background:#050307;border:1px solid #ffffff20}
#founderV31 img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:contain;background:#050307}
#founderV31 .tag{position:absolute;right:12px;bottom:10px;padding:6px 10px;border-radius:999px;background:#08060bcc;border:1px solid #ffffff25;color:#fff;font-size:8px;font-weight:900;letter-spacing:1.3px}
@media(max-width:520px){#creatorV31{grid-template-columns:94px 1fr;padding:12px}#creatorV31 img{width:94px;height:94px}#creatorV31 .nm{font-size:16px}.heroTitle{font-size:26px!important}.heroSub{font-size:13px!important}}
`;
function style(){if($('#visualV31Style'))return;const s=document.createElement('style');s.id='visualV31Style';s.textContent=css;document.head.appendChild(s)}
function restoreHero(){const h=$('.hero');if(!h)return;h.innerHTML='<div><div class="eyebrow">FAUX STUDIO</div><div class="heroTitle">Build something <span>fauxbulous.</span></div><div class="heroSub">Custom image prompts with identity-safe styling, camera direction, story, and glam.</div></div>';}
function purgeOld(){$$('.creatorCard,.fauxCreatorCard,#fauxCreatorCard,[data-faux-creator]').forEach(e=>e.remove());const fm=$('#founderMini');if(fm)fm.remove();$$('section.card').forEach(c=>{const t=(c.textContent||'').trim();if(!t&&c.querySelector('button'))c.remove();});}
function creator(){if(localStorage.getItem(CLOSE_KEY)==='1')return;if($('#creatorV31'))return;const deck=$('#fauxModeDeck'),hero=$('.hero');if(!deck&&!hero)return;const c=document.createElement('section');c.id='creatorV31';c.innerHTML='<img src="'+CREATOR+'" alt=""><div><div class="ey">THE HUMAN BEHIND THE FAUX</div><div class="nm">Brought to you by Rebecca Lynn / Fauxbulous</div><div class="sb">Better AI image prompts without needing a photography degree or seventeen browser tabs.</div></div><button class="x" type="button" aria-label="Close creator card">×</button>';c.querySelector('.x').onclick=()=>{localStorage.setItem(CLOSE_KEY,'1');c.remove()};(deck||hero).after(c);}
function founder(){const action=$('.actionCard');if(!action)return;let f=$('#founderV31');if(!f){f=document.createElement('div');f.id='founderV31';f.innerHTML='<img src="'+WIDE+'" alt=""><div class="tag">REBECCA LYNN · FAUXBULOUS</div>';action.prepend(f)}f.style.setProperty('display','block','important');}
function boot(){style();purgeOld();restoreHero();creator();founder();setTimeout(()=>{purgeOld();creator();founder()},700);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();