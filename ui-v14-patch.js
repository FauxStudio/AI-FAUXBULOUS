/* AI-FAUXBULOUS visible UI patch v14 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const css=`
/* V14: keep mode bar clear of the header on phones */
.modeDock{position:relative!important;top:auto!important;z-index:20!important;margin:10px 0 14px!important}
.topbar{z-index:60!important}
@media(max-width:600px){.topbar{position:relative!important}.modeDock{position:relative!important;top:auto!important}.creatorCard{margin-top:0!important}}
/* mode changes should be unmistakable */
body[data-faux-mode="normal"]{background:#0b0610!important}
body[data-faux-mode="horror"]{background:radial-gradient(circle at 50% -10%,#4b0715 0,#130308 34%,#050204 78%) fixed!important}
body[data-faux-mode="horror"] .card{border-color:#8f1a32!important;background:linear-gradient(180deg,#1d070d,#090306)!important;box-shadow:0 12px 35px #0009,0 0 22px #a20e2d22!important}
body[data-faux-mode="horror"] .brandTitle,body[data-faux-mode="horror"] .heroTitle span{color:#ff4968!important;text-shadow:0 0 20px #d80f3666}
body[data-faux-mode="horror"] .modeDock{background:linear-gradient(180deg,#23070e,#080204)!important;border-color:#a21b35!important}
body[data-faux-mode="spicy"]{background:radial-gradient(circle at 50% -10%,#5c0733 0,#18030e 36%,#060204 80%) fixed!important}
body[data-faux-mode="spicy"] .card{border-color:#7f2255!important;background:linear-gradient(180deg,#240817,#0b0308)!important;box-shadow:0 12px 35px #0009,0 0 22px #ff3b9220!important}
body[data-faux-mode="spicy"] .brandTitle,body[data-faux-mode="spicy"] .heroTitle span{color:#ff5aa8!important;text-shadow:0 0 20px #ff3b9255}
body[data-faux-mode="spicy"] .modeDock{background:linear-gradient(180deg,#2b071b,#090205)!important;border-color:#b92e6f!important}
.modeBtn[data-mode="horror"]{color:#ffdbe2}.modeBtn[data-mode="spicy"]{color:#ffe1ef}.modeBtn[data-mode="normal"]{color:#f4e7ff}
/* collapsed cards are visibly compact */
.smartSection.sectionCollapsed{padding-bottom:12px!important}
.smartSection.sectionCollapsed .smartBody{display:none!important}
.smartSection.sectionCollapsed .smartHead{min-height:34px!important}
.smartSection.sectionCollapsed .smartSummary{display:block!important}
.smartSection.sectionCollapsed .smartChevron{transform:rotate(-90deg)!important}
/* creator images must never collapse to zero */
.creatorCard{min-height:96px!important}
.creatorPhoto{display:block!important;visibility:visible!important;opacity:1!important}
.fauxFounderFrame{display:block!important;visibility:visible!important;opacity:1!important}
.fauxFounderImage{display:block!important;visibility:visible!important;opacity:.98!important}
/* remove legacy spicy control once the 3-mode bar exists */
body:has(#modeDock) #spicyToggle,body:has(#modeDock) #spicyNote{display:none!important}
`;
function installCss(){if($('#v14Style'))return;const s=document.createElement('style');s.id='v14Style';s.textContent=css;document.head.appendChild(s)}
function ensureModeVisibility(){const dock=$('#modeDock');if(!dock)return false;dock.style.display='block';$$('.modeBtn',dock).forEach(b=>b.style.display='block');return true}
function collapseDefault(){const cards=$$('.smartSection');if(!cards.length)return false;cards.forEach(c=>{c.classList.add('sectionCollapsed');c.classList.remove('sectionOpen')});return true}
function ensureCreator(){const img=$('.creatorPhoto'),founder=$('.fauxFounderImage');[img,founder].forEach(el=>{if(!el)return;el.src='./assets/rebecca-recline.webp?v=15';el.onerror=()=>{el.onerror=null;el.src='./icons/icon-192.png'}})}
function patchModeButtons(){const dock=$('#modeDock');if(!dock)return;const labels={normal:'✨ NORMAL',horror:'👁 HORROR',spicy:'🔥 SPICY'};$$('.modeBtn',dock).forEach(b=>b.textContent=labels[b.dataset.mode]||b.textContent);}
function loadSpicyV15(){if($('#spicyV15Loader'))return;const s=document.createElement('script');s.id='spicyV15Loader';s.src='./spicy-v15.js?v=15';s.defer=true;document.head.appendChild(s)}
function run(){installCss();ensureModeVisibility();patchModeButtons();collapseDefault();ensureCreator();loadSpicyV15();}
window.addEventListener('DOMContentLoaded',()=>{setTimeout(run,180);setTimeout(run,700)});
})();