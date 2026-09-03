/* AI-FAUXBULOUS loader v46 hard-public */
(()=>{'use strict';
const params=new URLSearchParams(location.search);
const forcePublic=params.get('user')==='1'||params.get('share')==='1';
const isOwner=!forcePublic&&params.get('owner')==='rebecca';
if(forcePublic&&!document.querySelector('script[data-faux-share-user]')){const u=document.createElement('script');u.src='./share-user-v44.js?v=46';u.defer=true;u.dataset.fauxShareUser='1';document.head.appendChild(u);}
if(!document.querySelector('script[data-faux-v25]')){const s=document.createElement('script');s.src='./ui-v25-stable.js?v=46';s.defer=true;s.dataset.fauxV25='1';document.head.appendChild(s);}
if(!document.querySelector('script[data-faux-visuals]')){const p=document.createElement('script');p.src='./visual-v32.js?v=46';p.defer=true;p.dataset.fauxVisuals='1';document.head.appendChild(p);}
if(isOwner&&!document.querySelector('script[data-faux-owner]')){const o=document.createElement('script');o.src='./owner-v33.js?v=46';o.defer=true;o.dataset.fauxOwner='1';document.head.appendChild(o);}
if(!document.querySelector('script[data-faux-sections-clean]')){const c=document.createElement('script');c.src='./section-controls-v43-clean.js?v=46';c.defer=true;c.dataset.fauxSectionsClean='1';document.head.appendChild(c);}
})();