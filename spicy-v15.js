/* Fauxbulous Spicy Mode hardening v15 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const MODE_KEY='faux-ui-mode-v1',STATE_KEY='ai-fauxbulous-state-v4',HEAT_KEY='faux-spicy-heat-v1';
const css=`
body[data-faux-mode="spicy"] #scrapToggle,
body[data-faux-mode="spicy"] #scrapFields,
body[data-faux-mode="spicy"] .field:has(#scrapToggle){display:none!important}
body[data-faux-mode="spicy"] [data-pick="scrapStyle"],
body[data-faux-mode="spicy"] [data-pick="scrapElements"]{display:none!important}
.spicyCleanNote{font-size:9px;color:#ffd2e5aa;margin-top:8px;line-height:1.4}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function getMode(){return localStorage.getItem(MODE_KEY)||'normal'}
function syncCoreSpicy(){try{const s=JSON.parse(localStorage.getItem(STATE_KEY)||'{}');const on=getMode()==='spicy';s.spicy=on;if(on&&s.global){s.global.scrapbookOn=false;s.global.scrapbookLevel='None';s.global.scrapStyle='';s.global.scrapElements=''}localStorage.setItem(STATE_KEY,JSON.stringify(s));const toggle=$('#spicyToggle');if(toggle){const pressed=toggle.getAttribute('aria-pressed')==='true';if(on!==pressed)toggle.click()}}catch{}}
function cleanSpicyUI(){const on=getMode()==='spicy';if(on){const scrap=$('#scrapToggle');if(scrap?.getAttribute('aria-pressed')==='true')scrap.click();const extras=document.querySelector('[data-section="extras"] .smartBody');if(extras&&!$('#spicyCleanNote')){const n=document.createElement('div');n.id='spicyCleanNote';n.className='spicyCleanNote';n.textContent='Spicy mode removes scrapbook/sticker styling so the result stays adult, polished and editorial.';extras.prepend(n)}}else $('#spicyCleanNote')?.remove()}
function heatText(){const h=localStorage.getItem(HEAT_KEY)||'Hot editorial';if(/Maximum/i.test(h))return 'Maximum non-explicit heat: bold adult sensuality, body-conscious fashion, confident provocative posing, strong eye contact, dramatic curves and luxe after-dark styling. Keep all intimate areas fully covered and do not depict sexual acts.';if(/Soft/i.test(h))return 'Soft tease: clearly adult, flirtatious glamour with elegant body language, fitted fashion, alluring eye contact and tasteful after-dark styling. Keep it non-explicit.';if(/Flirty/i.test(h))return 'Flirty: clearly adult, playful sensuality with confident pose mechanics, fitted fashion, glossy beauty styling and suggestive but non-explicit editorial energy.';return 'Hot editorial: clearly adult, sultry high-fashion imagery with body-conscious wardrobe, confident seductive body language, intense eye contact, luxe textures, cinematic after-dark atmosphere and polished magazine-level glamour. Keep all intimate areas covered and do not depict sexual acts.'}
function enhanceSpicyPrompt(){if(getMode()!=='spicy')return;const ta=$('#promptText');if(!ta?.value)return;let t=ta.value;
  t=t.replace(/- Scrapbook styling:[^\n]*\n?/gi,'').replace(/- Scrapbook theme:[^\n]*\n?/gi,'').replace(/- Scrapbook elements:[^\n]*\n?/gi,'').replace(/- Scrapbook materials[^\n]*\n?/gi,'');
  const block=`\n\nSPICY MODE — ADULT EDITORIAL DIRECTION:\n- ${heatText()}\n- The subject must read as unmistakably adult and self-possessed, never youthful, childish, cutesy or teen-coded.\n- Prioritize sensual fashion photography: flattering posture, believable body compression, intentional hand placement, confident hip/shoulder lines, expressive eye contact and sophisticated pose mechanics.\n- Wardrobe should feel luxe, fitted and fashion-forward using materials such as satin, velvet, lace, leather, translucent overlays over opaque coverage, sculpted tailoring or sleek eveningwear as appropriate to the selected outfit.\n- Use mature environments and styling such as luxury interiors, dark lounges, hotel suites, dressing rooms, rooftops, studios or cinematic nightlife when compatible with the user's scene choices.\n- No scrapbook stickers, juvenile doodles, childish collage motifs, school aesthetics, toy-like props, novelty kid styling or playful elements that weaken the adult editorial concept.\n- No nudity, exposed nipples or genitals, explicit sexual activity or pornographic framing. Keep the image seductive through fashion, expression, composition and atmosphere rather than explicitness.`;
  if(/SPICY MODE — ADULT EDITORIAL DIRECTION:/i.test(t))t=t.replace(/\n\nSPICY MODE — ADULT EDITORIAL DIRECTION:[\s\S]*?(?=\n\n(?:IMAGE LAYOUT|SCENE & STYLE|PEOPLE|TEXT \/ OVERLAYS|FINAL REALISM RULES|#rebeccalynndeulen)|$)/i,block);else{
    const ix=t.indexOf('\n\nIMAGE LAYOUT:');
    t=ix>=0?t.slice(0,ix)+block+t.slice(ix):t+block;
  }
  ta.value=t;
}
function modeChanged(){syncCoreSpicy();setTimeout(cleanSpicyUI,0)}
window.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{syncCoreSpicy();cleanSpicyUI();$$('.modeBtn').forEach(b=>b.addEventListener('click',()=>setTimeout(modeChanged,0)));const go=$('#goBtn');if(go)go.addEventListener('click',()=>setTimeout(enhanceSpicyPrompt,60));new MutationObserver(()=>cleanSpicyUI()).observe(document.body,{attributes:true,attributeFilter:['data-faux-mode']});},80);
});
})();