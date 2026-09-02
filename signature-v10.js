/* Fauxbulous personal signature control v24 */
(()=>{'use strict';
const $=(q,r=document)=>r.querySelector(q),KEY='faux-personal-signature-v1',DEFAULT_SIG='Rebecca Lynn';
function saved(){return localStorage.getItem(KEY)||DEFAULT_SIG}
function sync(){const toggle=$('#sigOnImg'),wrap=$('#personalSignatureWrap');if(!toggle||!wrap)return;wrap.classList.toggle('hidden',toggle.getAttribute('aria-pressed')==='false')}
function inject(){const toggle=$('#sigOnImg');if(!toggle||$('#personalSignatureWrap'))return;const field=toggle.closest('.field')||toggle.parentElement;const wrap=document.createElement('div');wrap.id='personalSignatureWrap';wrap.style.marginTop='8px';wrap.innerHTML=`<input id="personalSignature" class="textInput" type="text" maxlength="60" placeholder="Your signature"><div class="smallNote" style="margin-top:5px">Your personal signature appears on the image with a tiny “Powered by AI-Fauxbulous” line directly underneath.</div>`;field.appendChild(wrap);const input=$('#personalSignature');input.value=saved();input.addEventListener('input',()=>localStorage.setItem(KEY,input.value.trim()||DEFAULT_SIG));toggle.addEventListener('click',()=>setTimeout(sync,0));sync()}
window.addEventListener('DOMContentLoaded',()=>{inject();setTimeout(inject,300)});
})();