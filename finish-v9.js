/* Fauxbulous horror finish rotation v9 */
(()=>{'use strict';
const HORROR_LINES=[
  ['BOO. 👻','Your nightmare is ready.'],
  ['SOMETHING ANSWERED. 🕯️','Your nightmare is ready.'],
  ['IT FOLLOWED YOU BACK. 👁️','Your nightmare is ready.'],
  ['DON’T LOOK BEHIND YOU. 🖤','Your nightmare is ready.'],
  ['WELL… THAT’S UNSETTLING. 😈','Your nightmare is ready.'],
  ['THE DARKER SIDE SAYS HI. 🩸','Your nightmare is ready.'],
  ['YOU SUMMONED IT. 🕸️','Your nightmare is ready.'],
  ['TOO LATE TO TURN BACK. 🕯️','Your nightmare is ready.']
];
const $=(q,r=document)=>r.querySelector(q);
function horrorActive(){
  try{
    const mode=localStorage.getItem('faux-ui-mode-v1');
    if(mode==='horror')return true;
    const suite=JSON.parse(localStorage.getItem('faux-suite-v5')||'{}');
    return !!(suite.horror&&suite.horror.type&&suite.horror.type!=='off');
  }catch{return false}
}
function applyFinish(){
  const title=$('#promptModal .modalTitle');
  if(!title)return;
  if(!horrorActive()){title.textContent='READY, SET, FAUX';return}
  const [headline,sub]=HORROR_LINES[Math.floor(Math.random()*HORROR_LINES.length)];
  title.innerHTML=`<span>${headline}</span><small style="display:block;margin-top:4px;font-size:10px;letter-spacing:.6px;color:#ffffff99;font-weight:700">${sub}</small>`;
}
window.addEventListener('DOMContentLoaded',()=>{
  const go=$('#goBtn');
  if(go)go.addEventListener('click',()=>setTimeout(applyFinish,20));
});
})();