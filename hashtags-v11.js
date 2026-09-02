/* Fauxbulous smart five-hashtag ending v11 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q);
const SIG_KEY='faux-personal-signature-v1';
const DEFAULT_SIG='Rebecca Lynn';
const cleanTag=s=>String(s||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9]/g,'').slice(0,45);
const personalTag=()=>`#${cleanTag(localStorage.getItem(SIG_KEY)||DEFAULT_SIG)||'RebeccaLynn'}`;
const RULES=[
  [/psychological|paranoia|uncanny|liminal|dread/i,'#PsychologicalHorror'],
  [/practical sfx|prosthetic|stage blood|body horror|wound|slasher/i,'#PracticalHorror'],
  [/haunted|supernatural|possession|ghost|cursed/i,'#HauntedAesthetic'],
  [/creature|monster|demon|fae/i,'#CreatureDesign'],
  [/horror|nightmare|terror|disturbing/i,'#CinematicHorror'],
  [/boudoir|sultry|sensual|spicy|bombshell|flirty/i,'#SultryEditorial'],
  [/couture|high-fashion|editorial|runway|fashion/i,'#FashionEditorial'],
  [/glam|makeup|beauty|lashes/i,'#GlamPortrait'],
  [/rain|storm|wet pavement|thunder/i,'#RainyCinematic'],
  [/blue hour|twilight|moonlit|midnight|night/i,'#AfterDarkPortrait'],
  [/golden hour|sunset|sunrise/i,'#GoldenHourPortrait'],
  [/vintage|35mm|film grain|polaroid|retro/i,'#VintageAesthetic'],
  [/fantasy|fairy|witch|angel|mermaid|magic/i,'#FantasyPortrait'],
  [/street|alley|city|rooftop|urban/i,'#UrbanEditorial'],
  [/family|wholesome/i,'#FamilyPortrait'],
  [/couple|romantic|holding hands|embrace/i,'#CouplesPortrait'],
  [/macro|extreme close-up|beauty close-up/i,'#MacroBeauty'],
  [/full-body|full body/i,'#FullBodyFashion'],
  [/cinematic|film noir|anamorphic/i,'#CinematicPortrait'],
  [/ultra-photorealistic|photorealistic|camera photograph/i,'#UltraPhotorealistic']
];
function imageTags(text){const out=[];for(const [rx,tag] of RULES){if(rx.test(text)&&!out.includes(tag))out.push(tag);if(out.length===2)break}for(const t of ['#UltraPhotorealistic','#CreativePortrait','#AIImagePrompt']){if(out.length<2&&!out.includes(t))out.push(t)}return out.slice(0,2)}
function apply(){const ta=$('#promptText');if(!ta||!ta.value.trim())return;let text=ta.value.replace(/\n*HASHTAGS:\s*#[^\n]*(?:\n#[^\n]*)*\s*$/i,'').replace(/\n*#rebeccalynndeulen\s+#[A-Za-z0-9]+\s+#AIFauxbulous\s+#[A-Za-z0-9]+\s+#[A-Za-z0-9]+\s*$/i,'').trimEnd();const fixed=['#rebeccalynndeulen',personalTag(),'#AIFauxbulous'];const dynamic=imageTags(text);const tags=[...fixed,...dynamic].slice(0,5);ta.value=`${text}\n\n${tags.join(' ')}`}
window.addEventListener('DOMContentLoaded',()=>{const go=$('#goBtn');if(go)go.addEventListener('click',()=>setTimeout(apply,25));});
})();