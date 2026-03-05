/* AI‑FAUXBULOUS — Rebuild */
(()=>{const $=(q,e=document)=>e.querySelector(q),$$=(q,e=document)=>Array.from(e.querySelectorAll(q));
const state={mode:"custom",peopleCount:1,groupGender:"female",namesOnImage:false,dateOnImage:false,signatureOn:true,layout:"Single photo",activePerson:1,names:["","","",""],per:[{},{},{},{}],global:{sceneIO:"",environment:"",timeOfDay:"",weather:"",cameraAngle:"",lighting:"",lens:"",mood:"",scrapbookOn:true,scrapbookLevel:"Medium",scrapStyle:"",scrapElements:"",interaction:""}};
const COLORS=["Black","White","Silver","Gold","Rose gold","Charcoal","Ivory","Cream","Beige","Tan","Chocolate","Espresso","Crimson","Cherry red","Burgundy","Hot pink","Neon pink","Magenta","Violet","Royal purple","Lavender","Cobalt blue","Navy","Electric cyan","Teal","Emerald","Olive","Mustard","Orange","Metallic chrome"];
const EXPRESSIONS=["Soft smile","Big laugh","Smirk","Serious","Mysterious","Confident","Playful","Flirty","Focused","Shocked","Surprised","Curious","Bored","Annoyed","Sarcastic","Sassy","Proud","Dramatic","Calm","Dreamy","Intense stare","Side‑eye","Raised eyebrow","Pout","Gasp","Gritty tough","Tender","Joyful","Nervous","Unimpressed"];
const HAIR_STYLE=["Voluminous waves","Sleek straight","High ponytail","Low ponytail","Messy bun","Slicked‑back","Blowout","Beach waves","Hollywood curls","Braids","French braid","Dutch braids","Box braids","Half‑up half‑down","Space buns","Pigtails","Side part glam","Middle part sleek","Wet look","Tousled texture","Curly defined","Coily natural","Afro glam","Pixie cut","Bob cut","Long layers","Short shag","Bangs","Curtain bangs","Updo couture"];
const HAIR_TEXTURE=["Pin‑straight","Loose wave","Wavy","Deep wave","Soft curls","Tight curls","Coily","Kinky‑coily","Silky","Thick","Fine","High volume","Low volume","Frizzy texture","Defined curls","Fluffy curls","Wet texture","Blown‑out texture","Textured shag","Polished","Tousled","Smooth","Air‑dried","Heat‑styled","Natural texture","Braided texture","Crimped texture","Sleek gloss","Matte texture","Wind‑blown"];
const MAKEUP=["No‑makeup makeup","Soft glam","Full glam","Smoky eye","Bronzed glow","Glass skin","Bold wing liner","Graphic liner","Classic red lip","Nude lip gloss","Matte nude lip","Ombré lip","Cherry stain","Metallic highlight","Editorial metallic eye","Pearl shimmer lids","Monochrome blush","Draped blush","Bold contour","Natural contour","Freckles added","Under‑eye sparkle","Glossy lid","Frosted eye","90s supermodel glam","Y2K glossy glam","Goth glam","Punk glam","Vogue editorial glam","Runway avant‑garde"];
const NAILS_STYLE=["Short natural","Oval","Almond","Coffin","Stiletto","Square","Squoval","French tip","Reverse French","Chrome","Glitter","Rhinestone accent","Ombre","Aura nails","Marble nails","Cat‑eye gel","Holographic","Matte","Glossy","3D charms","Pearl accents","Butterfly accents","Swirl art","Checkerboard","Flame art","Neon tips","Minimal line art","Gold foil","Silver foil","Press‑on luxe"];
const POSE=["Power stance","Hand on hip","Over‑shoulder look","Walking mid‑step","Seated elegance","Leaning on wall","Hands in hair","Arms crossed","Casual candid","Laughing candid","Looking away","Direct stare","Chin tilt","Kneeling pose","Lying editorial pose","One foot forward","Spinning motion","Hair flip moment","Holding phone selfie pose","Peace sign","Rock on hand sign","I‑love‑you hand sign","Wave hello","Pointing at camera","Hands in pockets","Adjusting jacket","Holding accessory","Sitting on stairs","Stretch pose","Dramatic cape pose"];
const INTERACTION=["Holding hands","Arm around shoulder","Laughing together","Sharing headphones","Taking a selfie together","Back‑to‑back pose","Dancing together","Whispering","High‑five","Side hug","Piggyback","Handing a gift","Sitting close","Pointing at something","Cheering together","Protective stance","Mock argument (funny)","Looking at each other","Mirror pose","One leads the other","Posing like a magazine cover duo","Holding an umbrella together","Dramatic cinematic embrace","Running together","Celebration jump","Sharing a drink","One person fixes the other’s collar","Playful push","Fashion duo vibe","(custom)"];
const TOPS=["Tank top","Crop top","Graphic tee","Plain tee","Button‑down shirt","Silk blouse","Corset top","Bodysuit","Hoodie","Sweater","Turtleneck","Off‑shoulder top","Lace top","Leather top","Denim jacket layer","Blazer","Bustier","Mesh top","Sequin top","Rhinestone top","Camisole","Sports bra top","Cardigan","Peplum top","Puffer vest","Trench layer","Kimono layer","Band tee","Vogue tee","Asymmetric top"];
const BOTTOMS=["Bootcut jeans","Skinny jeans","Wide‑leg jeans","Cargo pants","Leather pants","Leggings","Joggers","Tailored trousers","Shorts","Biker shorts","Mini skirt","Midi skirt","Maxi skirt","Pleated skirt","Denim skirt","Slit skirt","Pencil skirt","Culottes","High‑waist pants","Low‑rise pants","Flared pants","Sequin pants","Satin pants","Sweatpants","Overalls","Culotte jumpsuit","Bike leggings","Ripped jeans","Printed pants","Metallic pants"];
const DRESSES=["Couture gown","Slip dress","Bodycon dress","A‑line dress","Wrap dress","Mini dress","Midi dress","Maxi dress","Blazer dress","Sequin dress","Velvet dress","Satin dress","Lace dress","Corset dress","Cut‑out dress","Backless dress","High‑slit dress","One‑shoulder dress","Off‑shoulder dress","Mermaid gown","Tulle dress","Fringe dress","Feather trim dress","Metallic dress","Sheer overlay dress","Rhinestone dress","Leather dress","Denim dress","Sweater dress","Sculptural editorial dress"];
const ONESIES=["Cozy pajama onesie","Kigurumi onesie","Fleece hooded onesie","Footed onesie","Animal onesie","Space onesie","Princess onesie","Superhero onesie","Dinosaur onesie","Unicorn onesie","Galaxy onesie","Tiger onesie","Panda onesie","Bear onesie","Dragon onesie","Mermaid onesie","Skeleton onesie","Pumpkin onesie","Angel onesie","Devil onesie","Robot onesie","Cow onesie","Frog onesie","Cat onesie","Dog onesie","Koala onesie","Shark onesie","Astronaut onesie","Wizard onesie","Custom character onesie"];
const COSTUMES=["Masquerade look","Cyberpunk costume","Fantasy warrior","Fairy costume","Gothic vampire","Witch look","Angel look","Devil look","Superhero","Villain chic","Cowgirl","Rockstar","Pop star","Regency glam","Steampunk","Space captain","Time traveler","Mermaid","Pirate","Clown (stylish)","Skeleton glam","Zombie fashion","Monster couture","Anime‑inspired","Street art character","Neon rave","Disco icon","80s icon","90s icon","Custom costume"];
const SHOES=["Sneakers","High‑top sneakers","Chunky sneakers","Heels","Stilettos","Platform heels","Ankle boots","Knee‑high boots","Cowboy boots","Combat boots","Loafers","Oxford shoes","Sandals","Strappy heels","Wedges","Flip‑flops","Running shoes","Skate shoes","Ballet flats","Mary Janes","Mules","Clogs","Clear heels","Metallic heels","Rhinestone heels","Studded boots","Fur slides","Sock boots","Pointed boots","Designer pumps"];
const ACCESSORIES=["Sunglasses","Oversized sunglasses","Tiny sunglasses","Hat","Baseball cap","Beanie","Fedora","Beret","Headband","Bandana","Scarf","Silk scarf","Gloves","Leather gloves","Clutch bag","Designer handbag","Crossbody bag","Backpack","Fanny pack","Phone accessory","Belt","Statement belt","Hair clips","Pearl hair clips","Chains accessory","Body chain","Umbrella","Fan accessory","Camera prop","Custom accessory"];
const JEWELRY=["Gold hoops","Silver hoops","Diamond studs","Pearl earrings","Choker","Layered necklaces","Pendant necklace","Statement necklace","Gold chain","Silver chain","Bracelets stack","Bangle","Cuff bracelet","Rings stack","Statement ring","Watch","Luxury watch","Anklet","Body jewelry","Pearl necklace","Gemstone necklace","Charm bracelet","Ear cuffs","Nose jewelry","Belly chain","Tiara","Crown headpiece","Brooch","Pins set","Custom jewelry"];
const SCENE_IO=["Indoor","Outdoor","Random","Custom"];
const ENVIRON=["Luxury studio set","Neon street corner","Graffiti alley","Rooftop skyline","Hotel lobby luxe","Penthouse interior","Boutique shopping street","Art gallery opening","Marble hallway","Industrial warehouse set","Mirror room","Black seamless studio","White seamless studio","Golden hour park","Beach promenade","Night market","Carnival midway","Arcade","Retro diner","Record store","Bookstore aesthetic","Coffee shop","Concert venue","Backstage prep","Runway backstage","City crosswalk","Rainy street","Snowy sidewalk","Desert road","Futuristic plaza"];
const TIME=["Sunrise","Morning","Late morning","Noon","Afternoon","Golden hour","Blue hour","Sunset","Twilight","Night","Midnight neon","Overcast daytime","Stormy late afternoon","Foggy morning","Dawn haze","Late night city glow","Club night","Stage spotlight night","Moonlit night","Candlelit evening","Early evening","Late evening","Brunch vibe","Coffee run morning","After‑school afternoon","Workday noon","Weekend afternoon","Festival evening","Holiday night","Road‑trip morning"];
const WEATHER=["Clear skies","Soft clouds","Overcast","Light rain","Heavy rain","Thunderstorm","Drizzle","Fog","Misty haze","Snow flurries","Heavy snow","Windy","Hot heat shimmer","Cool crisp air","Humid haze","Golden dust in air","Neon rain reflections","Sunbeams through clouds","Rainbow after rain","Icy breath visible","Wet pavement shine","Autumn leaves falling","Cherry blossoms drifting","Sand in the wind","Ocean mist","City smog glow","Hailstorm (cinematic)","Lightning in distance","Frosty morning","Monsoon vibe"];
const ANGLE=["Eye‑level portrait","Low angle hero shot","High angle editorial","Overhead vibe","Dutch tilt","Over‑the‑shoulder","Profile silhouette","Three‑quarter angle","Wide cinematic","Tight beauty close‑up","Full‑body fashion","Waist‑up editorial","Walking toward camera","Walking away glance back","Mirror reflection shot","Through glass shot","Doorway frame","Foreground blur framing","Bokeh city lights frame","Staircase angle","Car window frame","Neon sign frame","Shadow‑play angle","Spotlight stage angle","Runway end shot","Backlit halo","Lens flare angle","Candid paparazzi angle","Selfie mode angle","Group selfie angle"];
const LIGHT=["Soft beauty light","Hard fashion light","Rembrandt lighting","Split lighting","Neon rim light","Golden hour glow","Blue hour cool light","Streetlight glow","Studio strobe","Ring light beauty","Window light","Cinematic side light","Moody shadow light","Spotlight stage","Backlight halo","Volumetric haze beams","Disco ball sparkle","LED panel modern","Flash pop","VHS cam light","Film noir contrast","Under‑glow light","Top‑down spotlight","Color gel accents","Warm tungsten","Cool daylight","Mixed realistic","Rain reflections","Snow bounce light","Lightning flicker"];
const LENS=["DSLR ultra‑realistic","Cinematic 35mm","Cinematic 50mm","85mm portrait","Wide 24mm fashion","Film grain 90s","Disposable flash","Polaroid instant","VHS still","Y2K digicam","Soft diffusion glam","Anamorphic flare","High contrast editorial","Low contrast dreamy","HDR modern","Black & white editorial","Neon noir","Pastel soft light","Ultra sharp studio","Vintage vignette","Tilt‑shift","Bokeh heavy","Shallow depth close‑up","Deep focus street","Magazine cover framing","Runway photojournal","Paparazzi street shot","Mirror selfie phone shot","Front camera selfie","Candid phone"];
const MOOD=["Luxury editorial","Street chic","Glamorous","Gritty cool","Funny chaotic","Romantic","Mysterious","Boss energy","Soft dreamy","Wild party","Elegant calm","High‑fashion serious","Playful bestie energy","Sarcastic vibe","Sweet wholesome","Futuristic","Fantasy","Horror‑lite stylish","Noir","Bright pop","Minimal clean","Maximal bold","Retro 80s","Y2K","90s grunge","Runway drama","Celebrity paparazzi","Cinematic action","Cozy nostalgic","Epic heroic"];
const SCRAP_LEVELS=["None","Light","Medium","Heavy"];
const SCRAP_STYLE=["Classic scrapbook","Vintage paper collage","Neon scrapbook","Street‑art scrapbook","Polaroid collage","Magazine cutout collage","Glitter glam scrapbook","Gold foil scrapbook","Pastel kawaii scrapbook","Goth scrapbook","VHS nostalgia scrapbook","Y2K sticker bomb","90s sticker collage","Luxury fashion scrapbook","Travel postcard scrapbook","Concert ticket scrapbook","Movie night scrapbook","Bookish scrapbook","Graffiti sticker scrapbook","Holographic scrapbook","Minimal clean scrapbook","Maximal layered scrapbook","Floral pressed scrapbook","Metallic chrome scrapbook","Cyberpunk scrapbook","Fantasy scrapbook","Spooky scrapbook","Disco scrapbook","Beach scrapbook","Custom scrapbook theme"];
const SCRAP_EL=["Polaroid frames","Washi tape corners","Ticket stubs","Film strips","Handwritten notes","Postcards","Calendar scraps","Gold paper clips","Pressed flowers","Sticker bomb","Neon doodles","Graffiti tags (on paper)","Scrapbook borders","Glitter dust","Foil accents","Ripped paper edges","Staples + pins","Marker highlights","Wavy doodle lines","Stamped dates","Vintage labels","Receipt scraps","Map snippets","QR sticker","Holographic stickers","Stitched thread detail","Charms dangling","Confetti bits","Newspaper clippings","Custom scrapbook elements"];
const LAYOUTS=["Single photo","2‑panel","3‑panel","4‑panel"];
// Elements
const modeCustom=$("#modeCustom"),modeSurprise=$("#modeSurprise"),surpriseTip=$("#surpriseTip");
const countPills=$("#countPills"),genderPills=$("#genderPills"),namesOnImg=$("#namesOnImg"),dateOnImg=$("#dateOnImg"),sigOnImg=$("#sigOnImg"),layoutPick=$("#layoutPick");
const namesInputs=$("#namesInputs"),nameInputs=$("#nameInputs"),personTabs=$("#personTabs"),personCard=$("#personCard"),personCardTitle=$("#personCardTitle"),sceneCard=$("#sceneCard");
const mkToggle=$("#mkToggle"),mkPick=$("#mkPick"),lashToggle=$("#lashToggle"),pierToggle=$("#pierToggle"),pierInput=$("#pierInput"),tatToggle=$("#tatToggle"),tatInput=$("#tatInput");
const scrapToggle=$("#scrapToggle"),scrapFields=$("#scrapFields"),scrapLevelPills=$("#scrapLevelPills");
const rerollBtn=$("#rerollBtn"),clearBtn=$("#clearBtn"),goBtn=$("#goBtn");
const pickerModal=$("#pickerModal"),pickerTitle=$("#pickerTitle"),pickerList=$("#pickerList"),pickerClose=$("#pickerClose"),pickerConfirm=$("#pickerConfirm"),customBox=$("#customBox"),customInput=$("#customInput");
const promptModal=$("#promptModal"),promptText=$("#promptText"),promptClose=$("#promptClose"),promptOk=$("#promptOk"),copyBtn=$("#copyBtn");
const welcomeModal=$("#welcomeModal"),enterBtn=$("#enterBtn");
const stuckBtn=$("#stuckBtn"),stuckModal=$("#stuckModal"),stuckClose=$("#stuckClose"),stuckOk=$("#stuckOk"),stuckLetter=$("#stuckLetter");
const langBtn=$("#langBtn"),langMenu=$("#langMenu"),langClose=$("#langClose"),langSelect=$("#langSelect");
const LANGS=[{code:"en",name:"English"},{code:"es",name:"Español"},{code:"fr",name:"Français"},{code:"de",name:"Deutsch"},{code:"pt",name:"Português"},{code:"it",name:"Italiano"},{code:"nl",name:"Nederlands"},{code:"sv",name:"Svenska"},{code:"no",name:"Norsk"},{code:"da",name:"Dansk"}];
let lang="en";
const todayStr=()=>new Date().toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
const show=e=>e.classList.remove("hidden"),hide=e=>e.classList.add("hidden");
const setPressed=(b,p,on,off)=>{b.setAttribute("aria-pressed",String(p));b.textContent=p?on:off;};
const pill=(t,fn)=>{const b=document.createElement("button");b.type="button";b.className="pill";b.textContent=t;b.addEventListener("click",fn);return b;};
const getPersonLabel=i=>{const nm=(state.names[i-1]||"").trim();if(nm) return nm;const g=state.groupGender==="female"?"FEMALE":state.groupGender==="male"?"MALE":"NON‑BINARY";return `PERSON ${i} — ${g}`;};
const setPer=(k,v)=>{state.per[state.activePerson-1][k]=v;};
const getPer=(i,k)=>state.per[i-1]?.[k]||"";
function buildCount(){countPills.innerHTML="";for(let i=1;i<=4;i++){const b=pill(String(i),()=>{state.peopleCount=i;if(state.activePerson>i) state.activePerson=1;buildNames();buildTabs();rules();labels();});if(i===state.peopleCount)b.classList.add("active");countPills.appendChild(b);}}
function buildGender(){genderPills.innerHTML="";[{k:"female",t:"FEMALE"},{k:"male",t:"MALE"},{k:"nonbinary",t:"NON‑BINARY"}].forEach(o=>{const b=pill(o.t,()=>{state.groupGender=o.k;buildTabs();labels();});if(o.k===state.groupGender)b.classList.add("active");genderPills.appendChild(b);});}
function buildNames(){nameInputs.innerHTML="";for(let i=1;i<=state.peopleCount;i++){const wrap=document.createElement("div");wrap.className="field";const lab=document.createElement("div");lab.className="label";lab.textContent=`Person ${i} name (optional)`;const inp=document.createElement("input");inp.className="textInput";inp.type="text";inp.placeholder=`Name for Person ${i}…`;inp.value=state.names[i-1]||"";inp.addEventListener("input",()=>{state.names[i-1]=inp.value;buildTabs();});wrap.appendChild(lab);wrap.appendChild(inp);nameInputs.appendChild(wrap);}state.namesOnImage?show(namesInputs):hide(namesInputs);}
function buildTabs(){personTabs.innerHTML="";for(let i=1;i<=state.peopleCount;i++){const b=pill(getPersonLabel(i),()=>{state.activePerson=i;renderPerson();});if(i===state.activePerson)b.classList.add("active");personTabs.appendChild(b);}renderPerson();}
function renderPerson(){show(personCard);personCardTitle.textContent=getPersonLabel(state.activePerson);const inter=$("#interPick");if(state.activePerson===1 && state.peopleCount>1){inter.disabled=false;inter.style.opacity="1";}else{inter.disabled=true;inter.style.opacity="0.45";}rules();labels();}
function buildScrapLevels(){scrapLevelPills.innerHTML="";SCRAP_LEVELS.forEach(l=>{const b=pill(l.toUpperCase(),()=>{state.global.scrapbookLevel=l;$$(".pill",scrapLevelPills).forEach(x=>x.classList.remove("active"));b.classList.add("active");});if(l===state.global.scrapbookLevel)b.classList.add("active");scrapLevelPills.appendChild(b);});}
function updateSections(){show(personCard);show(sceneCard);state.namesOnImage?show(namesInputs):hide(namesInputs);state.global.scrapbookOn?show(scrapFields):hide(scrapFields);}
let pickKey=null,pickVal=null;
const PICK={layout:{t:"Image layout",list:LAYOUTS,custom:false,set:v=>state.layout=v},
expression:{t:"Expression",list:EXPRESSIONS,custom:true,set:v=>setPer("expression",v)},
hairStyle:{t:"Hair style",list:HAIR_STYLE,custom:true,set:v=>setPer("hairStyle",v)},
hairColor:{t:"Hair color",list:COLORS,custom:true,set:v=>setPer("hairColor",v)},
hairTexture:{t:"Hair texture",list:HAIR_TEXTURE,custom:true,set:v=>setPer("hairTexture",v)},
makeup:{t:"Makeup style",list:MAKEUP,custom:true,set:v=>setPer("makeup",v)},
nailsStyle:{t:"Nails style",list:NAILS_STYLE,custom:true,set:v=>setPer("nailsStyle",v)},
nailsColor:{t:"Nails color",list:COLORS,custom:true,set:v=>setPer("nailsColor",v)},
pose:{t:"Pose",list:POSE,custom:true,set:v=>setPer("pose",v)},
interaction:{t:"Interaction",list:INTERACTION,custom:true,set:v=>{state.global.interaction=v;rules();}},
tops:{t:"Tops",list:TOPS,custom:true,set:v=>{setPer("tops",v);toggleColor("tops",v);}},
topsColor:{t:"Top color",list:COLORS,custom:true,set:v=>setPer("topsColor",v)},
bottoms:{t:"Bottoms",list:BOTTOMS,custom:true,set:v=>{setPer("bottoms",v);toggleColor("bottoms",v);}},
bottomsColor:{t:"Bottom color",list:COLORS,custom:true,set:v=>setPer("bottomsColor",v)},
dresses:{t:"Dresses",list:DRESSES,custom:true,set:v=>{setPer("dresses",v);toggleColor("dresses",v);}},
dressesColor:{t:"Dress color",list:COLORS,custom:true,set:v=>setPer("dressesColor",v)},
onesies:{t:"Onesies",list:ONESIES,custom:true,set:v=>{setPer("onesies",v);toggleColor("onesies",v);}},
onesiesColor:{t:"Onesie color",list:COLORS,custom:true,set:v=>setPer("onesiesColor",v)},
costumes:{t:"Costumes",list:COSTUMES,custom:true,set:v=>{setPer("costumes",v);toggleColor("costumes",v);}},
costumesColor:{t:"Costume color",list:COLORS,custom:true,set:v=>setPer("costumesColor",v)},
shoes:{t:"Shoes",list:SHOES,custom:true,set:v=>{setPer("shoes",v);toggleColor("shoes",v);}},
shoesColor:{t:"Shoe color",list:COLORS,custom:true,set:v=>setPer("shoesColor",v)},
accessories:{t:"Accessories",list:ACCESSORIES,custom:true,set:v=>setPer("accessories",v)},
jewelry:{t:"Jewelry",list:JEWELRY,custom:true,set:v=>setPer("jewelry",v)},
sceneIO:{t:"Indoor / Outdoor",list:SCENE_IO,custom:true,set:v=>state.global.sceneIO=v},
environment:{t:"Environment",list:ENVIRON,custom:true,set:v=>state.global.environment=v},
timeOfDay:{t:"Time of day",list:TIME,custom:true,set:v=>state.global.timeOfDay=v},
weather:{t:"Weather",list:WEATHER,custom:true,set:v=>state.global.weather=v},
cameraAngle:{t:"Camera angle",list:ANGLE,custom:true,set:v=>state.global.cameraAngle=v},
lighting:{t:"Lighting",list:LIGHT,custom:true,set:v=>state.global.lighting=v},
lens:{t:"Lens / filter",list:LENS,custom:true,set:v=>state.global.lens=v},
mood:{t:"Mood",list:MOOD,custom:true,set:v=>state.global.mood=v},
scrapStyle:{t:"Scrapbook style",list:SCRAP_STYLE,custom:true,set:v=>state.global.scrapStyle=v},
scrapElements:{t:"Scrapbook elements",list:SCRAP_EL,custom:true,set:v=>state.global.scrapElements=v},
};
function openPicker(k){pickKey=k;const cfg=PICK[k];if(!cfg)return;pickerTitle.textContent=cfg.t;pickerList.innerHTML="";customInput.value="";pickVal=null;hide(customBox);
const addItem=(txt,val)=>{const it=document.createElement("button");it.type="button";it.className="pickItem";it.textContent=txt;it.addEventListener("click",()=>{$$(".pickItem",pickerList).forEach(x=>x.classList.remove("active"));it.classList.add("active");pickVal=val;if(val==="__custom__"){show(customBox);customInput.focus();}else hide(customBox);});pickerList.appendChild(it);return it;};
if(cfg.custom){addItem("Blank","");addItem("Custom","__custom__");}
cfg.list.forEach(v=>addItem(v,v));
show(pickerModal);}
function closePicker(){hide(pickerModal);pickKey=null;pickVal=null;customInput.value="";hide(customBox);}
function confirmPicker(){if(!pickKey)return;let v=pickVal;if(v==="__custom__") v=customInput.value.trim();PICK[pickKey].set(v||"");closePicker();labels();rules();}
function toggleColor(base,chosen){const map={tops:$("#topsColorBtn"),bottoms:$("#bottomsColorBtn"),dresses:$("#dressesColorBtn"),onesies:$("#onesiesColorBtn"),costumes:$("#costumesColorBtn"),shoes:$("#shoesColorBtn")};const btn=map[base];if(!btn)return;if(chosen&&chosen.trim())show(btn);else{hide(btn);setPer(base+"Color","");}}
function rules(){const inter=(state.global.interaction||"").trim().length>0;const poseBtn=$("#posePick");if(state.peopleCount>1 && state.activePerson>=2){if(inter){poseBtn.disabled=true;poseBtn.style.opacity="0.45";}else{poseBtn.disabled=false;poseBtn.style.opacity="1";}}else{poseBtn.disabled=false;poseBtn.style.opacity="1";}}
function setPickLabel(sel,val,ph){const b=$(sel);if(!b)return;b.textContent=(val&&val.trim())?val:ph;}
function labels(){setPickLabel('#layoutPick',state.layout,'Pick layout');
const i=state.activePerson;
setPickLabel('[data-pick="expression"]',getPer(i,"expression"),"Pick expression");
setPickLabel('[data-pick="hairStyle"]',getPer(i,"hairStyle"),"Pick hair style");
setPickLabel('[data-pick="hairColor"]',getPer(i,"hairColor"),"Pick hair color");
setPickLabel('[data-pick="hairTexture"]',getPer(i,"hairTexture"),"Pick hair texture");
setPickLabel('[data-pick="makeup"]',getPer(i,"makeup"),"Pick makeup");
setPickLabel('[data-pick="nailsStyle"]',getPer(i,"nailsStyle"),"Pick nails");
setPickLabel('[data-pick="nailsColor"]',getPer(i,"nailsColor"),"Pick nail color");
setPickLabel('[data-pick="pose"]',getPer(i,"pose"),"Pick pose");
setPickLabel('[data-pick="interaction"]',state.global.interaction,"Pick interaction");
setPickLabel('[data-pick="tops"]',getPer(i,"tops"),"Pick tops");setPickLabel('[data-pick="topsColor"]',getPer(i,"topsColor"),"Pick top color");toggleColor("tops",getPer(i,"tops"));
setPickLabel('[data-pick="bottoms"]',getPer(i,"bottoms"),"Pick bottoms");setPickLabel('[data-pick="bottomsColor"]',getPer(i,"bottomsColor"),"Pick bottom color");toggleColor("bottoms",getPer(i,"bottoms"));
setPickLabel('[data-pick="dresses"]',getPer(i,"dresses"),"Pick dresses");setPickLabel('[data-pick="dressesColor"]',getPer(i,"dressesColor"),"Pick dress color");toggleColor("dresses",getPer(i,"dresses"));
setPickLabel('[data-pick="onesies"]',getPer(i,"onesies"),"Pick onesies");setPickLabel('[data-pick="onesiesColor"]',getPer(i,"onesiesColor"),"Pick onesie color");toggleColor("onesies",getPer(i,"onesies"));
setPickLabel('[data-pick="costumes"]',getPer(i,"costumes"),"Pick costumes");setPickLabel('[data-pick="costumesColor"]',getPer(i,"costumesColor"),"Pick costume color");toggleColor("costumes",getPer(i,"costumes"));
setPickLabel('[data-pick="shoes"]',getPer(i,"shoes"),"Pick shoes");setPickLabel('[data-pick="shoesColor"]',getPer(i,"shoesColor"),"Pick shoe color");toggleColor("shoes",getPer(i,"shoes"));
setPickLabel('[data-pick="accessories"]',getPer(i,"accessories"),"Pick accessories");
setPickLabel('[data-pick="jewelry"]',getPer(i,"jewelry"),"Pick jewelry");
setPickLabel('[data-pick="sceneIO"]',state.global.sceneIO,"Pick");
setPickLabel('[data-pick="environment"]',state.global.environment,"Pick environment");
setPickLabel('[data-pick="timeOfDay"]',state.global.timeOfDay,"Pick time");
setPickLabel('[data-pick="weather"]',state.global.weather,"Pick weather");
setPickLabel('[data-pick="cameraAngle"]',state.global.cameraAngle,"Pick angle");
setPickLabel('[data-pick="lighting"]',state.global.lighting,"Pick lighting");
setPickLabel('[data-pick="lens"]',state.global.lens,"Pick lens look");
setPickLabel('[data-pick="mood"]',state.global.mood,"Pick mood");
setPickLabel('[data-pick="scrapStyle"]',state.global.scrapStyle,"Pick style");
setPickLabel('[data-pick="scrapElements"]',state.global.scrapElements,"Pick elements");
}
// Surprise / reroll
const rand=a=>a[Math.floor(Math.random()*a.length)];
function reroll(){if(state.mode!=="surprise") return;
for(let i=1;i<=state.peopleCount;i++){const p=state.per[i-1];
p.expression=rand(EXPRESSIONS);p.hairStyle=rand(HAIR_STYLE);p.hairColor=rand(COLORS);p.hairTexture=rand(HAIR_TEXTURE);
p.makeup=rand(MAKEUP);p.nailsStyle=rand(NAILS_STYLE);p.nailsColor=rand(COLORS);p.pose=rand(POSE);
p.tops=rand(TOPS);p.topsColor=rand(COLORS);p.bottoms=rand(BOTTOMS);p.bottomsColor=rand(COLORS);
p.dresses="";p.onesies="";p.costumes="";p.shoes=rand(SHOES);p.shoesColor=rand(COLORS);
p.accessories=rand(ACCESSORIES);p.jewelry=rand(JEWELRY);}
state.layout=rand(LAYOUTS);
state.global.sceneIO=rand(["Indoor","Outdoor"]);state.global.environment=rand(ENVIRON);state.global.timeOfDay=rand(TIME);state.global.weather=rand(WEATHER);
state.global.cameraAngle=rand(ANGLE);state.global.lighting=rand(LIGHT);state.global.lens=rand(LENS);state.global.mood=rand(MOOD);
if(state.global.scrapbookOn){state.global.scrapbookLevel=rand(["Light","Medium","Heavy"]);state.global.scrapStyle=rand(SCRAP_STYLE);state.global.scrapElements=rand(SCRAP_EL);}
state.global.interaction = state.peopleCount>1 ? rand(INTERACTION.slice(0,INTERACTION.length-1)) : "";
setPressed(mkToggle,true,"Makeup: ON","Makeup: OFF");show(mkPick);labels();rules();}
function buildPrompt(){const L=[];L.push("AI‑FAUXBULOUS PROMPT:");L.push("");L.push("Using the photo(s) provided for complete facial and body reference, create an image of …");L.push("Photorealistic, high detail, natural skin texture, real fabric physics, realistic lighting, 300 DPI.");L.push("");L.push(`Image layout: ${state.layout}.`);
const g=state.global;L.push("");L.push("SCENE & STYLE (applies to the whole image):");
if(g.sceneIO) L.push(`- Indoor/Outdoor: ${g.sceneIO}.`);if(g.environment) L.push(`- Environment: ${g.environment}.`);if(g.timeOfDay) L.push(`- Time of day: ${g.timeOfDay}.`);if(g.weather) L.push(`- Weather: ${g.weather}.`);
if(g.cameraAngle) L.push(`- Camera angle: ${g.cameraAngle}.`);if(g.lighting) L.push(`- Lighting: ${g.lighting}.`);if(g.lens) L.push(`- Lens / filter look: ${g.lens}.`);if(g.mood) L.push(`- Mood: ${g.mood}.`);
if(g.scrapbookOn){L.push(`- Scrapbook styling: ON (${g.scrapbookLevel}).`);if(g.scrapStyle) L.push(`  Scrapbook theme: ${g.scrapStyle}.`);if(g.scrapElements) L.push(`  Scrapbook elements: ${g.scrapElements}.`);L.push("  Scrapbook rule: layered paper textures, frames, tape/stickers, decorative elements, color pops—must look like a real scrapbook design (not flat UI).");}else{L.push("- Scrapbook styling: OFF.");}
L.push("");L.push("PEOPLE (do not add extra people):");
for(let i=1;i<=state.peopleCount;i++){const p=state.per[i-1],nm=(state.names[i-1]||"").trim();const label=nm?nm:`Person ${i}`;L.push(`- ${label}:`);
if(p.expression) L.push(`  Expression: ${p.expression}.`);if(p.hairStyle) L.push(`  Hair style: ${p.hairStyle}.`);if(p.hairColor) L.push(`  Hair color: ${p.hairColor}.`);if(p.hairTexture) L.push(`  Hair texture: ${p.hairTexture}.`);
if(mkToggle.getAttribute("aria-pressed")==="true" && p.makeup) L.push(`  Makeup: ${p.makeup}.`); else L.push("  Makeup: none.");
if(lashToggle.getAttribute("aria-pressed")==="true") L.push("  Lashes: voluminous, defined."); else L.push("  Lashes: natural.");
if(p.nailsStyle) L.push(`  Nails: ${p.nailsStyle}${p.nailsColor?` in ${p.nailsColor}`:""}.`);
if(state.peopleCount>1 && g.interaction && i===1){L.push(`  Interaction: ${g.interaction}.`);} else if(!(state.peopleCount>1 && g.interaction && i>=2)){if(p.pose) L.push(`  Pose: ${p.pose}.`);}
const outfit=[];if(p.tops) outfit.push(`Top: ${p.tops}${p.topsColor?` (${p.topsColor})`:""}`);if(p.bottoms) outfit.push(`Bottoms: ${p.bottoms}${p.bottomsColor?` (${p.bottomsColor})`:""}`);if(p.dresses) outfit.push(`Dress: ${p.dresses}${p.dressesColor?` (${p.dressesColor})`:""}`);if(p.onesies) outfit.push(`Onesie: ${p.onesies}${p.onesiesColor?` (${p.onesiesColor})`:""}`);if(p.costumes) outfit.push(`Costume: ${p.costumes}${p.costumesColor?` (${p.costumesColor})`:""}`);if(p.shoes) outfit.push(`Shoes: ${p.shoes}${p.shoesColor?` (${p.shoesColor})`:""}`);if(outfit.length) L.push(`  Outfit: ${outfit.join(", ")}.`);
if(p.accessories) L.push(`  Accessories: ${p.accessories}.`);if(p.jewelry) L.push(`  Jewelry: ${p.jewelry}.`);
if(pierToggle.getAttribute("aria-pressed")==="true" && pierInput.value.trim()) L.push(`  Piercings: ${pierInput.value.trim()}.`);
if(tatToggle.getAttribute("aria-pressed")==="true" && tatInput.value.trim()) L.push(`  Tattoos: ${tatInput.value.trim()}.`);
}
L.push("");L.push("TEXT / OVERLAYS (do not cover faces or bodies):");
if(state.namesOnImage) L.push("- Names: small elegant text along an outer edge or border, never centered, never large.");
if(state.dateOnImage) L.push(`- Date: ${todayStr()} — small elegant text along an outer edge or border, never large.`);
if(state.signatureOn) L.push("Signature: Fauxbulous/RLD (very small, extreme bottom-left)");
L.push("");L.push("FINAL RULES:");L.push("- Keep identities distinct; do not merge faces; do not duplicate the same pose across panels.");return L.join("\n");}
// stuck letter
stuckLetter.innerHTML=`Hey there — I’m glad you made it. ✨<br><br><b>1)</b> Tap <b>CUSTOM</b> for control, or <b>SURPRISE ME</b> for chaos (the fun kind).<br><b>2)</b> Pick how many people (1–4) and the group gender.<br><b>3)</b> Tap the person buttons and style them. If there’s more than one person, choose <b>interaction</b> once on Person 1.<br><b>4)</b> Pick your scene + camera vibe + scrapbook settings.<br><b>5)</b> Smash <b>GET FAUXBULOUS</b>, copy the prompt, and go make magic.<br><br>P.S. If something comes out weird… blame the AI, not me. 😇<br><br>💜 Rebecca`;
// events
modeCustom.addEventListener("click",()=>{state.mode="custom";modeCustom.classList.add("active");modeSurprise.classList.remove("active");hide(surpriseTip);});
modeSurprise.addEventListener("click",()=>{state.mode="surprise";modeSurprise.classList.add("active");modeCustom.classList.remove("active");show(surpriseTip);reroll();});
namesOnImg.addEventListener("click",()=>{state.namesOnImage=!state.namesOnImage;setPressed(namesOnImg,state.namesOnImage,"Names on image: ON","Names on image: OFF");buildNames();});
dateOnImg.addEventListener("click",()=>{state.dateOnImage=!state.dateOnImage;setPressed(dateOnImg,state.dateOnImage,"Date on image: ON","Date on image: OFF");});
sigOnImg.addEventListener("click",()=>{state.signatureOn=!state.signatureOn;setPressed(sigOnImg,state.signatureOn,"Signature: ON","Signature: OFF");});
mkToggle.addEventListener("click",()=>{const on=mkToggle.getAttribute("aria-pressed")==="true";setPressed(mkToggle,!on,"Makeup: ON","Makeup: OFF");!on?show(mkPick):hide(mkPick);if(on)setPer("makeup","");labels();});
lashToggle.addEventListener("click",()=>{const on=lashToggle.getAttribute("aria-pressed")==="true";setPressed(lashToggle,!on,"Lashes: ON","Lashes: OFF");});
pierToggle.addEventListener("click",()=>{const on=pierToggle.getAttribute("aria-pressed")==="true";setPressed(pierToggle,!on,"Piercings: ON","Piercings: OFF");!on?show(pierInput):(hide(pierInput),pierInput.value="");});
tatToggle.addEventListener("click",()=>{const on=tatToggle.getAttribute("aria-pressed")==="true";setPressed(tatToggle,!on,"Tattoos: ON","Tattoos: OFF");!on?show(tatInput):(hide(tatInput),tatInput.value="");});
scrapToggle.addEventListener("click",()=>{const on=scrapToggle.getAttribute("aria-pressed")==="true";state.global.scrapbookOn=!on;setPressed(scrapToggle,state.global.scrapbookOn,"Scrapbook: ON","Scrapbook: OFF");state.global.scrapbookOn?show(scrapFields):hide(scrapFields);});
document.addEventListener("click",(e)=>{const b=e.target.closest("[data-pick]");if(!b)return;if(b.disabled)return;openPicker(b.getAttribute("data-pick"));});
pickerClose.addEventListener("click",closePicker);pickerConfirm.addEventListener("click",confirmPicker);pickerModal.addEventListener("click",(e)=>{if(e.target===pickerModal)closePicker();});
enterBtn.addEventListener("click",()=>hide(welcomeModal));
goBtn.addEventListener("click",()=>{promptText.value=buildPrompt();show(promptModal);});
promptClose.addEventListener("click",()=>hide(promptModal));promptOk.addEventListener("click",()=>hide(promptModal));promptModal.addEventListener("click",(e)=>{if(e.target===promptModal)hide(promptModal);});
copyBtn.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(promptText.value);copyBtn.textContent="COPIED!";setTimeout(()=>copyBtn.textContent="COPY",900);}catch(_){promptText.select();document.execCommand("copy");}});
stuckBtn.addEventListener("click",()=>show(stuckModal));stuckClose.addEventListener("click",()=>hide(stuckModal));stuckOk.addEventListener("click",()=>hide(stuckModal));stuckModal.addEventListener("click",(e)=>{if(e.target===stuckModal)hide(stuckModal);});
rerollBtn.addEventListener("click",()=>{if(state.mode==="surprise")reroll();});
function clearAll(){Object.assign(state,{mode:"custom",peopleCount:1,groupGender:"female",namesOnImage:false,dateOnImage:false,signatureOn:true,layout:"Single photo",activePerson:1,names:["","","",""],per:[{},{},{},{}],global:{sceneIO:"",environment:"",timeOfDay:"",weather:"",cameraAngle:"",lighting:"",lens:"",mood:"",scrapbookOn:true,scrapbookLevel:"Medium",scrapStyle:"",scrapElements:"",interaction:""}});
modeCustom.classList.add("active");modeSurprise.classList.remove("active");hide(surpriseTip);
setPressed(namesOnImg,false,"Names on image: ON","Names on image: OFF");setPressed(dateOnImg,false,"Date on image: ON","Date on image: OFF");setPressed(sigOnImg,true,"Signature: ON","Signature: OFF");
setPressed(mkToggle,false,"Makeup: ON","Makeup: OFF");hide(mkPick);setPressed(lashToggle,false,"Lashes: ON","Lashes: OFF");
setPressed(pierToggle,false,"Piercings: ON","Piercings: OFF");hide(pierInput);pierInput.value="";
setPressed(tatToggle,false,"Tattoos: ON","Tattoos: OFF");hide(tatInput);tatInput.value="";
setPressed(scrapToggle,true,"Scrapbook: ON","Scrapbook: OFF");show(scrapFields);
buildCount();buildGender();buildNames();buildTabs();buildScrapLevels();updateSections();labels();}
clearBtn.addEventListener("click",clearAll);
function openLang(){langMenu.classList.remove("hidden");langBtn.setAttribute("aria-expanded","true");}
function closeLang(){langMenu.classList.add("hidden");langBtn.setAttribute("aria-expanded","false");}
langBtn.addEventListener("click",()=>{langMenu.classList.contains("hidden")?openLang():closeLang();});
langClose.addEventListener("click",closeLang);
document.addEventListener("click",(e)=>{if(!e.target.closest(".langWrap")) closeLang();});
function initLang(){langSelect.innerHTML="";LANGS.forEach(l=>{const o=document.createElement("option");o.value=l.code;o.textContent=l.name;langSelect.appendChild(o);});
const phone=(navigator.language||"en").slice(0,2).toLowerCase();lang=LANGS.some(x=>x.code===phone)?phone:"en";langSelect.value=lang;langSelect.addEventListener("change",()=>{lang=langSelect.value;});}
function init(){setPressed(namesOnImg,false,"Names on image: ON","Names on image: OFF");setPressed(dateOnImg,false,"Date on image: ON","Date on image: OFF");setPressed(sigOnImg,true,"Signature: ON","Signature: OFF");
setPressed(mkToggle,false,"Makeup: ON","Makeup: OFF");hide(mkPick);setPressed(lashToggle,false,"Lashes: ON","Lashes: OFF");
setPressed(pierToggle,false,"Piercings: ON","Piercings: OFF");hide(pierInput);setPressed(tatToggle,false,"Tattoos: ON","Tattoos: OFF");hide(tatInput);
setPressed(scrapToggle,true,"Scrapbook: ON","Scrapbook: OFF");
buildCount();buildGender();buildNames();buildTabs();buildScrapLevels();updateSections();labels();initLang();
if("serviceWorker" in navigator){navigator.serviceWorker.register("./service-worker.js").catch(()=>{});}
}
init();
})();