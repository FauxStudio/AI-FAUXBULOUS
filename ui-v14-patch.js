/* AI-FAUXBULOUS mode priority hardening v21 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const MODE_KEY='faux-ui-mode-v1',SPICY_KEY='faux-spicy-boudoir-v21',HORROR_KEY='faux-horror-surprise-v20';
const SPICY=[
'SATIN BED BOUDOIR: luxury hotel bed, rumpled satin sheets, opaque lace bodysuit or fitted satin lingerie-inspired fashion, reclining pose, moody bedside practicals, direct sultry eye contact, 50mm intimate editorial framing.',
'DARK FEMININE BOUDOIR: black velvet chaise, fitted corset-and-stockings styling with full opaque coverage, smoky glam, seated hip-shift, low-key side light, deep shadows, 85mm portrait compression.',
'PIN-UP BOUDOIR: polished adult retro boudoir, fitted corset silhouette, stockings, heels, playful confident expression, vanity mirror or upholstered chair, flattering studio beauty light, tasteful non-explicit posing.',
'LEATHER-LUXE BOUDOIR: fitted leather-look bodysuit with opaque coverage, thigh-high boots, dark hotel suite or black studio, low-angle confident pose, glossy rim light, mature bombshell energy.',
'SILK ROBE BOUDOIR: satin slip beneath a loose silk robe with full coverage, robe resting off one shoulder, bed-edge pose, warm lamps, intimate 50mm camera distance, soft skin texture and mature eye contact.',
'VELVET CHAIR BOUDOIR: jewel-toned velvet chair, fitted lace-and-satin boudoir wardrobe, chair-straddle editorial pose while fully clothed, arched posture, dramatic side light, rich fabric texture.',
'MIRROR BOUDOIR: luxury dressing room, fitted bodysuit or corset styling, over-shoulder mirror pose, reflected eye contact, practical vanity bulbs, cinematic reflections, no casual daytime fashion.',
'FLOOR POSE BOUDOIR: dark studio floor, fitted opaque bodysuit with stockings and heels, elegant low-to-the-ground pose, one knee bent, hand at waist or thigh, dramatic top light and rim separation.',
'CANDLELIT BOUDOIR: ornate adult bedroom, fitted satin-and-lace styling with full coverage, reclining chaise or bed-edge pose, warm candlelight and deep shadow, intimate luxury atmosphere.',
'STEAMY GLAM BOUDOIR: steamy tiled luxury bathroom or shower-room set, opaque fitted slip/bodysuit under a silk robe, wet-look hair, condensation, dramatic side light, sensual but fully covered.',
'PENTHOUSE NIGHT BOUDOIR: private luxury penthouse bedroom at night, fitted corsetry or satin slip, heels, skyline bokeh, confident standing or seated pose, rich after-dark lighting.',
'WHITE-SHEET BOUDOIR: crisp white bedding, fitted lace bodysuit with opaque lining, natural skin texture, relaxed reclining pose, soft window light, intimate editorial framing, sophisticated adult mood.'
];
const HORROR=[
'PRACTICAL SFX BODY HORROR: the adult subject is visibly mid-transformation. Use silicone/latex prosthetic appliances, torn-skin seams, bruising, translucent edges, stage blood, practical slime and believable skin interaction. The transformation must dominate the image.',
'POSSESSION HORROR: the adult subject is caught during a physically believable possession event with practical contact-lens eyes, strained facial muscles, anatomically plausible contortion, vascular discoloration, environmental disturbance and a dark presence interacting with the scene.',
'SLASHER AFTERMATH: the adult subject has just escaped a fictional violent encounter. Torn wardrobe, practical stage blood, bruising, abrasions, flashlight or emergency lighting, defensive posture and an approaching threat. Immediate danger must be obvious.',
'CREATURE ATTACK: a practical animatronic/puppet creature is physically interacting with the adult subject. Weight, saliva, contact shadows, fabric pulling and believable reaction. Never pose calmly beside the creature.',
'LIMINAL NIGHTMARE: impossible repeating architecture, wrong door numbering, contradictory exit signs, a distant figure that changes position between reflections, cold fluorescent light and severe psychological dread.',
'HAUNTED TRANSFORMATION: a supernatural event is visibly changing the adult subject or room. Distorted reflection, moving objects with no source, practical eye/skin effects, shadow behaving independently and one unmistakable impossible event.',
'MEDICAL HORROR: abandoned clinical or institutional environment, interrupted procedure, practical prosthetics, restrained body horror, flickering fluorescents, condensation, smeared reflections and clear evidence something has gone terribly wrong.',
'BEAUTIFUL BUT DISTURBING: glamorous adult styling fused to one major horrifying centerpiece such as a realistic prosthetic facial split, duplicated limb, living shadow, parasitic organic growth or impossible anatomical event. Beauty supports the horror, never replaces it.'
];
const pick=a=>a[Math.floor(Math.random()*a.length)];
function mode(){return localStorage.getItem(MODE_KEY)||'normal'}
function cleanBranding(t){return t.replace(/Powered by AI[‑-]Fauxbulous/gi,'').replace(/\bFAUX\b/gi,'').replace(/\bFauxbulous\b(?=\s*(?:logo|text|word|title|watermark))/gi,'')}
function stripModeBlocks(t){return t
.replace(/\n*SPICY MODE[^\n]*[\s\S]*?(?=\n\n(?:HORROR MODE|#rebeccalynndeulen)|$)/gi,'')
.replace(/\n*HORROR MODE[^\n]*[\s\S]*?(?=\n\n(?:SPICY MODE|#rebeccalynndeulen)|$)/gi,'')
.replace(/\n*#rebeccalynndeulen\s+#[A-Za-z0-9]+\s+#AIFauxbulous\s+#[A-Za-z0-9]+\s+#[A-Za-z0-9]+\s*$/i,'').trim();}
function priorityBlock(m){
 if(m==='spicy'){
   let b=localStorage.getItem(SPICY_KEY);if(!b){b=pick(SPICY);localStorage.setItem(SPICY_KEY,b)}
   return `SPICY MODE — HIGHEST PRIORITY — STRICT ADULT BOUDOIR ONLY:\n${b}\n\nMANDATORY:\n- The finished image must read instantly as sexy adult BOUDOIR, not ordinary fashion or lifestyle.\n- Override any earlier bakery, office, street, daytime, casual, sportswear, businesswear, costume, onesie, or normal public-scene choice. Those choices are subordinate to boudoir mode.\n- Use lingerie-inspired adult fashion, corsetry, satin, lace, velvet, fitted opaque bodysuits, stockings, slips, robes, heels or equivalent boudoir wardrobe with intimate areas covered.\n- Use mature sensual posing: reclining, kneeling, bed-edge, floor pose, chair pose, hip-shift, arched posture, over-shoulder body line, hand at waist/thigh/hair, or similarly intentional sexy posing.\n- Use an unmistakable boudoir setting: bedroom, luxury suite, velvet lounge, dressing room, intimate studio, penthouse bedroom, steamy tiled room or similar private adult setting.\n- Clearly adult only. No youthful styling, childish props, scrapbook, school aesthetics, nudity, exposed nipples/genitals, explicit sexual acts or pornographic framing.\n- Do not print FAUX, Fauxbulous, Powered by AI-Fauxbulous, logos, titles or oversized words anywhere on the image. Only the user's personal signature may appear if enabled.`
 }
 if(m==='horror'){
   let b=localStorage.getItem(HORROR_KEY);if(!b){b=pick(HORROR);localStorage.setItem(HORROR_KEY,b)}
   return `HORROR MODE — HIGHEST PRIORITY — UNMISTAKABLE HORROR EVENT:\n${b}\n\nMANDATORY:\n- The image must read as horror at first glance. Horror is the event, not an accessory.\n- Override ordinary lifestyle/fashion choices that weaken the horror.\n- Do NOT make a normal portrait with a creepy book, bone, skull, odd brooch, rain, dark makeup, or background silhouette as the only scary element.\n- Use visible interaction, transformation, danger, impossible reality, practical effects or a strong psychological event.\n- Keep anatomy, lighting, gravity, contact shadows, materials and reactions physically believable.\n- No cartoon, illustration, glossy CGI creature, videogame gore or generic Halloween costume.\n- Do not print FAUX, Fauxbulous, Powered by AI-Fauxbulous, logos, titles or oversized words anywhere on the image. Only the user's personal signature may appear if enabled.`
 }
 return ''
}
function tags(t,m){const sig=(localStorage.getItem('faux-personal-signature-v1')||'Rebecca Lynn').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9]/g,'')||'RebeccaLynn';const dyn=m==='spicy'?['#BoudoirPhotography','#SultryPortrait']:m==='horror'?['#CinematicHorror','#PracticalHorror']:['#UltraPhotorealistic','#CreativePortrait'];return `#rebeccalynndeulen #${sig} #AIFauxbulous ${dyn[0]} ${dyn[1]}`}
function harden(){const ta=$('#promptText');if(!ta?.value.trim())return;const m=mode();let body=stripModeBlocks(cleanBranding(ta.value));const block=priorityBlock(m);if(block)body=block+'\n\n'+body;ta.value=body+'\n\n'+tags(body,m)}
function rerollModeConcept(){const m=mode();if(m==='spicy')localStorage.setItem(SPICY_KEY,pick(SPICY));if(m==='horror')localStorage.setItem(HORROR_KEY,pick(HORROR))}
window.addEventListener('DOMContentLoaded',()=>{setTimeout(()=>{$('#surpriseEverything')?.addEventListener('click',rerollModeConcept);$('#modeSurprise')?.addEventListener('click',rerollModeConcept);$('#rerollBtn')?.addEventListener('click',rerollModeConcept);const go=$('#goBtn');if(go)go.addEventListener('click',()=>[220,420,700].forEach(ms=>setTimeout(harden,ms)))},100)});
})();