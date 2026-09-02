/* Fauxbulous personal signature v10 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q);
const KEY='faux-personal-signature-v1';
const DEFAULT_SIG='Rebecca Lynn';
function saved(){return localStorage.getItem(KEY)||DEFAULT_SIG}
function inject(){
  const toggle=$('#sigOnImg');if(!toggle||$('#personalSignatureWrap'))return;
  const field=toggle.closest('.field')||toggle.parentElement;
  const wrap=document.createElement('div');
  wrap.id='personalSignatureWrap';
  wrap.style.marginTop='8px';
  wrap.innerHTML=`<input id="personalSignature" class="textInput" type="text" maxlength="60" placeholder="Your signature" value=""><div class="smallNote" style="margin-top:5px">A tiny “Powered by AI‑Fauxbulous” line will appear directly underneath your signature.</div>`;
  field.appendChild(wrap);
  const input=$('#personalSignature');input.value=saved();
  input.addEventListener('input',()=>{localStorage.setItem(KEY,input.value.trim()||DEFAULT_SIG)});
  sync();
  toggle.addEventListener('click',()=>setTimeout(sync,0));
}
function sync(){const toggle=$('#sigOnImg'),wrap=$('#personalSignatureWrap');if(!toggle||!wrap)return;const on=toggle.getAttribute('aria-pressed')!=='false';wrap.classList.toggle('hidden',!on)}
function esc(s){return String(s).replace(/[\\"\n\r]/g,m=>m==='"'?'\\"':' ')}
function enhancePrompt(){
  const toggle=$('#sigOnImg'),ta=$('#promptText');if(!toggle||!ta)return;
  if(toggle.getAttribute('aria-pressed')==='false')return;
  const name=(localStorage.getItem(KEY)||DEFAULT_SIG).trim()||DEFAULT_SIG;
  const original='- Add a very small handwritten "Rebecca Lynn" signature in the bottom-left corner.';
  const replacement=`- Add a very small handwritten "${esc(name)}" personal signature in the bottom-left corner.\n- Directly beneath that signature, add “Powered by AI‑Fauxbulous” in much smaller, subtle, legible text. Keep both marks discreet, unobtrusive and away from faces or important image details.`;
  if(ta.value.includes(original))ta.value=ta.value.replace(original,replacement);
}
window.addEventListener('DOMContentLoaded',()=>{
  inject();
  const go=$('#goBtn');if(go)go.addEventListener('click',()=>setTimeout(enhancePrompt,0));
  const observer=new MutationObserver(()=>sync());const toggle=$('#sigOnImg');if(toggle)observer.observe(toggle,{attributes:true,attributeFilter:['aria-pressed']});
});
})();