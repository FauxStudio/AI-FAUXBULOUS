/* Fauxbulous v12 compatibility hook */
(()=>{'use strict';
window.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{
  if(!document.querySelector('#personCardTitle')){
    const host=document.querySelector('[data-section="look"] .smartBody')||document.body;
    const el=document.createElement('div');el.id='personCardTitle';el.className='smartHidden';el.setAttribute('aria-hidden','true');host.prepend(el);
  }
},90));
})();