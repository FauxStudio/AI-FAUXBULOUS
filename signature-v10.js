/* Fauxbulous personal signature v22 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q);
const KEY='faux-personal-signature-v1';
const DEFAULT_SIG='Rebecca Lynn';
function saved(){return localStorage.getItem(KEY)||DEFAULT_SIG}
function inject(){
  const toggle=$('#sigOnImg');if(!toggle||$('#personalSignatureWrap'))return;
  const field=toggle.closest('.field')||toggle.parentElement;
  const wrap=document.createElement('div');wrap.id='personalSignatureWrap';wrap.style.marginTop='8px';
  wrap.innerHTML=`<input id="personalSignature" class="textInput" type="text" maxlength="60" placeholder="Your signature" value=""><div class="smallNote" style="margin-top:5px">Your personal signature appears on the finished image with a much smaller “Powered by AI-Fauxbulous” line directly underneath it.</div>`;
  field.appendChild(wrap);const input=$('#personalSignature');input.value=saved();
  input.addEventListener('input',()=>localStorage.setItem(KEY,input.value.trim()||DEFAULT_SIG));sync();toggle.addEventListener('click',()=>setTimeout(sync,0));
}
function sync(){const toggle=$('#sigOnImg'),wrap=$('#personalSignatureWrap');if(!toggle||!wrap)return;wrap.classList.toggle('hidden',toggle.getAttribute('aria-pressed')==='false')}
function esc(s){return String(s).replace(/[\\"\n\r]/g,m=>m==='"'?'\\"':' ')}
function enhancePrompt(){const toggle=$('#sigOnImg'),ta=$('#promptText');if(!toggle||!ta)return;let t=ta.value;
  if(toggle.getAttribute('aria-pressed')==='false'){
    t=t.replace(/- Add (?:only )?a very small handwritten "[^"]+"(?: personal)? signature[^\n]*\n?/gi,'');
    t=t.replace(/- Directly beneath that signature,[^\n]*\n?/gi,'');
    ta.value=t;return;
  }
  const name=(localStorage.getItem(KEY)||DEFAULT_SIG).trim()||DEFAULT_SIG;
  const block=`- Add a very small handwritten "${esc(name)}" personal signature in the extreme bottom-left corner.\n- Directly beneath it, add “Powered by AI-Fauxbulous” in much smaller, subtle, legible text. Keep both marks discreet and unobtrusive. Do not add any other logo, giant FAUX text, title, brand name, watermark, or oversized typography anywhere else on the image.`;
  if(/- Add a very small handwritten "Rebecca Lynn" signature in the bottom-left corner\./i.test(t)){
    t=t.replace(/- Add a very small handwritten "Rebecca Lynn" signature in the bottom-left corner\./i,block);
  }else if(/- Add (?:only )?a very small handwritten "[^"]+"(?: personal)? signature[^\n]*/i.test(t)){
    t=t.replace(/- Add (?:only )?a very small handwritten "[^"]+"(?: personal)? signature[^\n]*/i,block);
  }else if(!/Powered by AI-Fauxbulous/i.test(t)){
    t+='\n'+block;
  }
  ta.value=t;
}
window.addEventListener('DOMContentLoaded',()=>{inject();const go=$('#goBtn');if(go)go.addEventListener('click',()=>[0,90,260].forEach(ms=>setTimeout(enhancePrompt,ms)));const observer=new MutationObserver(()=>sync());const toggle=$('#sigOnImg');if(toggle)observer.observe(toggle,{attributes:true,attributeFilter:['aria-pressed']})});
})();
