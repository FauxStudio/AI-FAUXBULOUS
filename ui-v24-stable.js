/* AI-FAUXBULOUS loader v45-separated-owner */
(()=>{'use strict';
const params=new URLSearchParams(location.search);const isOwner=params.get('owner')==='rebecca';
if(!document.querySelector('script[data-faux-v25]')){const s=document.createElement('script');s.src='./ui-v25-stable.js?v=45';s.defer=true;s.dataset.fauxV25='1';document.head.appendChild(s);}
if(!document.querySelector('script[data-faux-visuals]')){const p=document.createElement('script');p.src='./visual-v32.js?v=45';p.defer=true;p.dataset.fauxVisuals='1';document.head.appendChild(p);}
if(isOwner&&!document.querySelector('script[data-faux-owner]')){const o=document.createElement('script');o.src='./owner-v33.js?v=45';o.defer=true;o.dataset.fauxOwner='1';document.head.appendChild(o);}
if(!document.querySelector('script[data-faux-sections-clean]')){const c=document.createElement('script');c.src='./section-controls-v43-clean.js?v=45';c.defer=true;c.dataset.fauxSectionsClean='1';document.head.appendChild(c);}
})();