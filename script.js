/* AI-FAUXBULOUS — stable controller v3 */
(() => {
  "use strict";

  const $ = (q, root = document) => root.querySelector(q);
  const $$ = (q, root = document) => Array.from(root.querySelectorAll(q));
  const STORAGE_KEY = "ai-fauxbulous-state-v3";
  const WELCOME_KEY = "ai-fauxbulous-welcomed-v3";

  const COLORS = ["Black","White","Silver","Gold","Rose gold","Charcoal","Ivory","Cream","Beige","Tan","Chocolate","Espresso","Crimson","Cherry red","Burgundy","Hot pink","Neon pink","Magenta","Violet","Royal purple","Lavender","Cobalt blue","Navy","Electric cyan","Teal","Emerald","Olive","Mustard","Orange","Metallic chrome"];
  const EXPRESSIONS = ["Soft smile","Big laugh","Smirk","Serious","Mysterious","Confident","Playful","Flirty","Focused","Shocked","Surprised","Curious","Bored","Annoyed","Sarcastic","Sassy","Proud","Dramatic","Calm","Dreamy","Intense stare","Side-eye","Raised eyebrow","Pout","Gasp","Gritty tough","Tender","Joyful","Nervous","Unimpressed"];
  const HAIR_STYLE = ["Voluminous waves","Sleek straight","High ponytail","Low ponytail","Messy bun","Slicked-back","Blowout","Beach waves","Hollywood curls","Braids","French braid","Dutch braids","Box braids","Half-up half-down","Space buns","Pigtails","Side part glam","Middle part sleek","Wet look","Tousled texture","Curly defined","Coily natural","Afro glam","Pixie cut","Bob cut","Long layers","Short shag","Bangs","Curtain bangs","Updo couture"];
  const HAIR_TEXTURE = ["Pin-straight","Loose wave","Wavy","Deep wave","Soft curls","Tight curls","Coily","Kinky-coily","Silky","Thick","Fine","High volume","Low volume","Frizzy texture","Defined curls","Fluffy curls","Wet texture","Blown-out texture","Textured shag","Polished","Tousled","Smooth","Air-dried","Heat-styled","Natural texture","Braided texture","Crimped texture","Sleek gloss","Matte texture","Wind-blown"];
  const MAKEUP = ["No-makeup makeup","Soft glam","Full glam","Smoky eye","Bronzed glow","Glass skin","Bold wing liner","Graphic liner","Classic red lip","Nude lip gloss","Matte nude lip","Ombré lip","Cherry stain","Metallic highlight","Editorial metallic eye","Pearl shimmer lids","Monochrome blush","Draped blush","Bold contour","Natural contour","Freckles added","Under-eye sparkle","Glossy lid","Frosted eye","90s supermodel glam","Y2K glossy glam","Goth glam","Punk glam","Vogue editorial glam","Runway avant-garde"];
  const NAILS_STYLE = ["Short natural","Oval","Almond","Coffin","Stiletto","Square","Squoval","French tip","Reverse French","Chrome","Glitter","Rhinestone accent","Ombre","Aura nails","Marble nails","Cat-eye gel","Holographic","Matte","Glossy","3D charms","Pearl accents","Butterfly accents","Swirl art","Checkerboard","Flame art","Neon tips","Minimal line art","Gold foil","Silver foil","Press-on luxe"];
  const POSE = ["Power stance","Hand on hip","Over-shoulder look","Walking mid-step","Seated elegance","Leaning on wall","Hands in hair","Arms crossed","Casual candid","Laughing candid","Looking away","Direct stare","Chin tilt","Kneeling pose","Lying editorial pose","One foot forward","Spinning motion","Hair flip moment","Holding phone selfie pose","Peace sign","Rock on hand sign","I-love-you hand sign","Wave hello","Pointing at camera","Hands in pockets","Adjusting jacket","Holding accessory","Sitting on stairs","Stretch pose","Dramatic cape pose"];
  const INTERACTION = ["Holding hands","Arm around shoulder","Laughing together","Sharing headphones","Taking a selfie together","Back-to-back pose","Dancing together","Whispering","High-five","Side hug","Piggyback","Handing a gift","Sitting close","Pointing at something","Cheering together","Protective stance","Mock argument (funny)","Looking at each other","Mirror pose","One leads the other","Posing like a magazine cover duo","Holding an umbrella together","Dramatic cinematic embrace","Running together","Celebration jump","Sharing a drink","One person fixes the other’s collar","Playful push","Fashion duo vibe"];
  const TOPS = ["Tank top","Crop top","Graphic tee","Plain tee","Button-down shirt","Silk blouse","Corset top","Bodysuit","Hoodie","Sweater","Turtleneck","Off-shoulder top","Lace top","Leather top","Denim jacket layer","Blazer","Bustier","Mesh top","Sequin top","Rhinestone top","Camisole","Sports bra top","Cardigan","Peplum top","Puffer vest","Trench layer","Kimono layer","Band tee","Vogue tee","Asymmetric top"];
  const BOTTOMS = ["Bootcut jeans","Skinny jeans","Wide-leg jeans","Cargo pants","Leather pants","Leggings","Joggers","Tailored trousers","Shorts","Biker shorts","Mini skirt","Midi skirt","Maxi skirt","Pleated skirt","Denim skirt","Slit skirt","Pencil skirt","Culottes","High-waist pants","Low-rise pants","Flared pants","Sequin pants","Satin pants","Sweatpants","Overalls","Culotte jumpsuit","Bike leggings","Ripped jeans","Printed pants","Metallic pants"];
  const DRESSES = ["Couture gown","Slip dress","Bodycon dress","A-line dress","Wrap dress","Mini dress","Midi dress","Maxi dress","Blazer dress","Sequin dress","Velvet dress","Satin dress","Lace dress","Corset dress","Cut-out dress","Backless dress","High-slit dress","One-shoulder dress","Off-shoulder dress","Mermaid gown","Tulle dress","Fringe dress","Feather trim dress","Metallic dress","Sheer overlay dress","Rhinestone dress","Leather dress","Denim dress","Sweater dress","Sculptural editorial dress"];
  const ONESIES = ["Cozy pajama onesie","Kigurumi onesie","Fleece hooded onesie","Footed onesie","Animal onesie","Space onesie","Princess onesie","Superhero onesie","Dinosaur onesie","Unicorn onesie","Galaxy onesie","Tiger onesie","Panda onesie","Bear onesie","Dragon onesie","Mermaid onesie","Skeleton onesie","Pumpkin onesie","Angel onesie","Devil onesie","Robot onesie","Cow onesie","Frog onesie","Cat onesie","Dog onesie","Koala onesie","Shark onesie","Astronaut onesie","Wizard onesie","Custom character onesie"];
  const COSTUMES = ["Masquerade look","Cyberpunk costume","Fantasy warrior","Fairy costume","Gothic vampire","Witch look","Angel look","Devil look","Superhero","Villain chic","Cowgirl","Rockstar","Pop star","Regency glam","Steampunk","Space captain","Time traveler","Mermaid","Pirate","Clown (stylish)","Skeleton glam","Zombie fashion","Monster couture","Anime-inspired","Street art character","Neon rave","Disco icon","80s icon","90s icon","Custom costume"];
  const SHOES = ["Sneakers","High-top sneakers","Chunky sneakers","Heels","Stilettos","Platform heels","Ankle boots","Knee-high boots","Cowboy boots","Combat boots","Loafers","Oxford shoes","Sandals","Strappy heels","Wedges","Flip-flops","Running shoes","Skate shoes","Ballet flats","Mary Janes","Mules","Clogs","Clear heels","Metallic heels","Rhinestone heels","Studded boots","Fur slides","Sock boots","Pointed boots","Designer pumps"];
  const ACCESSORIES = ["Sunglasses","Oversized sunglasses","Tiny sunglasses","Hat","Baseball cap","Beanie","Fedora","Beret","Headband","Bandana","Scarf","Silk scarf","Gloves","Leather gloves","Clutch bag","Designer handbag","Crossbody bag","Backpack","Fanny pack","Phone accessory","Belt","Statement belt","Hair clips","Pearl hair clips","Chains accessory","Body chain","Umbrella","Fan accessory","Camera prop","Custom accessory"];
  const JEWELRY = ["Gold hoops","Silver hoops","Diamond studs","Pearl earrings","Choker","Layered necklaces","Pendant necklace","Statement necklace","Gold chain","Silver chain","Bracelets stack","Bangle","Cuff bracelet","Rings stack","Statement ring","Watch","Luxury watch","Anklet","Body jewelry","Pearl necklace","Gemstone necklace","Charm bracelet","Ear cuffs","Nose jewelry","Belly chain","Tiara","Crown headpiece","Brooch","Pins set","Custom jewelry"];
  const SCENE_IO = ["Indoor","Outdoor","Random"];
  const ENVIRON = ["Luxury studio set","Neon street corner","Graffiti alley","Rooftop skyline","Hotel lobby luxe","Penthouse interior","Boutique shopping street","Art gallery opening","Marble hallway","Industrial warehouse set","Mirror room","Black seamless studio","White seamless studio","Golden hour park","Beach promenade","Night market","Carnival midway","Arcade","Retro diner","Record store","Bookstore aesthetic","Coffee shop","Concert venue","Backstage prep","Runway backstage","City crosswalk","Rainy street","Snowy sidewalk","Desert road","Futuristic plaza"];
  const TIME = ["Sunrise","Morning","Late morning","Noon","Afternoon","Golden hour","Blue hour","Sunset","Twilight","Night","Midnight neon","Overcast daytime","Stormy late afternoon","Foggy morning","Dawn haze","Late night city glow","Club night","Stage spotlight night","Moonlit night","Candlelit evening","Early evening","Late evening","Brunch vibe","Coffee run morning","After-school afternoon","Workday noon","Weekend afternoon","Festival evening","Holiday night","Road-trip morning"];
  const WEATHER = ["Clear skies","Soft clouds","Overcast","Light rain","Heavy rain","Thunderstorm","Drizzle","Fog","Misty haze","Snow flurries","Heavy snow","Windy","Hot heat shimmer","Cool crisp air","Humid haze","Golden dust in air","Neon rain reflections","Sunbeams through clouds","Rainbow after rain","Icy breath visible","Wet pavement shine","Autumn leaves falling","Cherry blossoms drifting","Sand in the wind","Ocean mist","City smog glow","Hailstorm (cinematic)","Lightning in distance","Frosty morning","Monsoon vibe"];
  const ANGLE = ["Eye-level portrait","Low angle hero shot","High angle editorial","Overhead vibe","Dutch tilt","Over-the-shoulder","Profile silhouette","Three-quarter angle","Wide cinematic","Tight beauty close-up","Full-body fashion","Waist-up editorial","Walking toward camera","Walking away glance back","Mirror reflection shot","Through glass shot","Doorway frame","Foreground blur framing","Bokeh city lights frame","Staircase angle","Car window frame","Neon sign frame","Shadow-play angle","Spotlight stage angle","Runway end shot","Backlit halo","Lens flare angle","Candid paparazzi angle","Selfie mode angle","Group selfie angle"];
  const LIGHT = ["Soft beauty light","Hard fashion light","Rembrandt lighting","Split lighting","Neon rim light","Golden hour glow","Blue hour cool light","Streetlight glow","Studio strobe","Ring light beauty","Window light","Cinematic side light","Moody shadow light","Spotlight stage","Backlight halo","Volumetric haze beams","Disco ball sparkle","LED panel modern","Flash pop","VHS cam light","Film noir contrast","Under-glow light","Top-down spotlight","Color gel accents","Warm tungsten","Cool daylight","Mixed realistic","Rain reflections","Snow bounce light","Lightning flicker"];
  const LENS = ["DSLR ultra-realistic","Cinematic 35mm","Cinematic 50mm","85mm portrait","Wide 24mm fashion","Film grain 90s","Disposable flash","Polaroid instant","VHS still","Y2K digicam","Soft diffusion glam","Anamorphic flare","High contrast editorial","Low contrast dreamy","HDR modern","Black & white editorial","Neon noir","Pastel soft light","Ultra sharp studio","Vintage vignette","Tilt-shift","Bokeh heavy","Shallow depth close-up","Deep focus street","Magazine cover framing","Runway photojournal","Paparazzi street shot","Mirror selfie phone shot","Front camera selfie","Candid phone"];
  const MOOD = ["Luxury editorial","Street chic","Glamorous","Gritty cool","Funny chaotic","Romantic","Mysterious","Boss energy","Soft dreamy","Wild party","Elegant calm","High-fashion serious","Playful bestie energy","Sarcastic vibe","Sweet wholesome","Futuristic","Fantasy","Horror-lite stylish","Noir","Bright pop","Minimal clean","Maximal bold","Retro 80s","Y2K","90s grunge","Runway drama","Celebrity paparazzi","Cinematic action","Cozy nostalgic","Epic heroic"];
  const SCRAP_LEVELS = ["None","Light","Medium","Heavy"];
  const SCRAP_STYLE = ["Classic scrapbook","Vintage paper collage","Neon scrapbook","Street-art scrapbook","Polaroid collage","Magazine cutout collage","Glitter glam scrapbook","Gold foil scrapbook","Pastel kawaii scrapbook","Goth scrapbook","VHS nostalgia scrapbook","Y2K sticker bomb","90s sticker collage","Luxury fashion scrapbook","Travel postcard scrapbook","Concert ticket scrapbook","Movie night scrapbook","Bookish scrapbook","Graffiti sticker scrapbook","Holographic scrapbook","Minimal clean scrapbook","Maximal layered scrapbook","Floral pressed scrapbook","Metallic chrome scrapbook","Cyberpunk scrapbook","Fantasy scrapbook","Spooky scrapbook","Disco scrapbook","Beach scrapbook","Custom scrapbook theme"];
  const SCRAP_EL = ["Polaroid frames","Washi tape corners","Ticket stubs","Film strips","Handwritten notes","Postcards","Calendar scraps","Gold paper clips","Pressed flowers","Sticker bomb","Neon doodles","Graffiti tags (on paper)","Scrapbook borders","Glitter dust","Foil accents","Ripped paper edges","Staples + pins","Marker highlights","Wavy doodle lines","Stamped dates","Vintage labels","Receipt scraps","Map snippets","QR sticker","Holographic stickers","Stitched thread detail","Charms dangling","Confetti bits","Newspaper clippings","Custom scrapbook elements"];
  const LAYOUTS = ["Single photo","2-panel","3-panel","4-panel"];

  const emptyPerson = () => ({
    expression:"", hairStyle:"", hairColor:"", hairTexture:"",
    makeupOn:false, makeup:"", lashesOn:false,
    nailsStyle:"", nailsColor:"", pose:"",
    tops:"", topsColor:"", bottoms:"", bottomsColor:"",
    dresses:"", dressesColor:"", onesies:"", onesiesColor:"",
    costumes:"", costumesColor:"", shoes:"", shoesColor:"",
    accessories:"", jewelry:"",
    piercingsOn:false, piercings:"",
    tattoosOn:false, tattoos:""
  });

  const defaultState = () => ({
    mode:"custom",
    peopleCount:1,
    groupGender:"female",
    namesOnImage:false,
    dateOnImage:false,
    signatureOn:true,
    layout:"Single photo",
    activePerson:1,
    names:["","","",""],
    per:[emptyPerson(), emptyPerson(), emptyPerson(), emptyPerson()],
    global:{
      sceneIO:"", environment:"", timeOfDay:"", weather:"",
      cameraAngle:"", lighting:"", lens:"", mood:"",
      scrapbookOn:true, scrapbookLevel:"Medium", scrapStyle:"",
      scrapElements:"", interaction:""
    }
  });

  let state = defaultState();

  function hydrate(raw) {
    const fresh = defaultState();
    if (!raw || typeof raw !== "object") return fresh;
    Object.assign(fresh, raw);
    fresh.peopleCount = Math.min(4, Math.max(1, Number(raw.peopleCount) || 1));
    fresh.activePerson = Math.min(fresh.peopleCount, Math.max(1, Number(raw.activePerson) || 1));
    fresh.names = Array.from({length:4}, (_, i) => String(raw.names?.[i] || ""));
    fresh.per = Array.from({length:4}, (_, i) => Object.assign(emptyPerson(), raw.per?.[i] || {}));
    fresh.global = Object.assign(defaultState().global, raw.global || {});
    return fresh;
  }

  function loadState() {
    try { state = hydrate(JSON.parse(localStorage.getItem(STORAGE_KEY))); }
    catch (_) { state = defaultState(); }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  const els = {};
  const ids = [
    "modeCustom","modeSurprise","surpriseTip","countPills","genderPills",
    "namesOnImg","dateOnImg","sigOnImg","layoutPick","namesInputs","nameInputs",
    "personTabs","personCard","personCardTitle","sceneCard","mkToggle","mkPick",
    "lashToggle","pierToggle","pierInput","tatToggle","tatInput","scrapToggle",
    "scrapFields","scrapLevelPills","rerollBtn","clearBtn","goBtn","pickerModal",
    "pickerTitle","pickerList","pickerClose","pickerConfirm","customBox","customInput",
    "promptModal","promptText","promptClose","promptOk","copyBtn","welcomeModal",
    "enterBtn","stuckBtn","stuckModal","stuckClose","stuckOk","stuckLetter",
    "langBtn","langMenu","langClose","langSelect"
  ];
  ids.forEach(id => els[id] = document.getElementById(id));

  function show(el){ if(el) el.classList.remove("hidden"); }
  function hide(el){ if(el) el.classList.add("hidden"); }
  function setPressed(btn, on, onText, offText){
    if(!btn) return;
    btn.setAttribute("aria-pressed", String(Boolean(on)));
    btn.textContent = on ? onText : offText;
  }
  function pill(text, onClick){
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pill";
    b.textContent = text;
    b.addEventListener("click", onClick);
    return b;
  }
  function rand(arr){ return arr[Math.floor(Math.random() * arr.length)]; }
  function currentPerson(){ return state.per[state.activePerson - 1]; }
  function genderLabel(){
    return state.groupGender === "male" ? "male" : state.groupGender === "nonbinary" ? "non-binary" : "female";
  }
  function personLabel(i){
    const name = (state.names[i-1] || "").trim();
    return name || `PERSON ${i} — ${genderLabel().toUpperCase()}`;
  }
  function setPer(key, value){
    currentPerson()[key] = value;
    saveState();
  }
  function getPer(i, key){ return state.per[i-1]?.[key] || ""; }

  function buildCount(){
    els.countPills.innerHTML = "";
    for(let i=1;i<=4;i++){
      const b = pill(String(i), () => {
        state.peopleCount = i;
        if(state.activePerson > i) state.activePerson = i;
        if(i === 1) state.global.interaction = "";
        saveState();
        renderAll();
      });
      if(i === state.peopleCount) b.classList.add("active");
      els.countPills.appendChild(b);
    }
  }

  function buildGender(){
    els.genderPills.innerHTML = "";
    [["female","FEMALE"],["male","MALE"],["nonbinary","NON-BINARY"]].forEach(([key,text]) => {
      const b = pill(text, () => {
        state.groupGender = key;
        saveState();
        buildGender();
        buildTabs();
      });
      if(key === state.groupGender) b.classList.add("active");
      els.genderPills.appendChild(b);
    });
  }

  function buildNames(){
    els.nameInputs.innerHTML = "";
    for(let i=1;i<=state.peopleCount;i++){
      const wrap = document.createElement("div");
      wrap.className = "field";
      const lab = document.createElement("div");
      lab.className = "label";
      lab.textContent = `Person ${i} name (optional)`;
      const inp = document.createElement("input");
      inp.className = "textInput";
      inp.type = "text";
      inp.placeholder = `Name for Person ${i}…`;
      inp.value = state.names[i-1] || "";
      inp.addEventListener("input", () => {
        state.names[i-1] = inp.value;
        saveState();
        buildTabs();
      });
      wrap.append(lab, inp);
      els.nameInputs.appendChild(wrap);
    }
    state.namesOnImage ? show(els.namesInputs) : hide(els.namesInputs);
  }

  function buildTabs(){
    els.personTabs.innerHTML = "";
    for(let i=1;i<=state.peopleCount;i++){
      const b = pill(personLabel(i), () => {
        state.activePerson = i;
        saveState();
        buildTabs();
        renderPerson();
      });
      if(i === state.activePerson) b.classList.add("active");
      els.personTabs.appendChild(b);
    }
    renderPerson();
  }

  function buildScrapLevels(){
    els.scrapLevelPills.innerHTML = "";
    SCRAP_LEVELS.forEach(level => {
      const b = pill(level.toUpperCase(), () => {
        state.global.scrapbookLevel = level;
        if(level === "None") state.global.scrapbookOn = false;
        else state.global.scrapbookOn = true;
        saveState();
        renderScrapbook();
      });
      if(level === state.global.scrapbookLevel) b.classList.add("active");
      els.scrapLevelPills.appendChild(b);
    });
  }

  function renderScrapbook(){
    setPressed(els.scrapToggle, state.global.scrapbookOn, "Scrapbook: ON", "Scrapbook: OFF");
    if(state.global.scrapbookOn) show(els.scrapFields); else hide(els.scrapFields);
    buildScrapLevels();
    labels();
  }

  function renderPerson(){
    show(els.personCard);
    show(els.sceneCard);
    const p = currentPerson();
    els.personCardTitle.textContent = personLabel(state.activePerson);

    const inter = $("#interPick");
    if(inter){
      const canInteract = state.activePerson === 1 && state.peopleCount > 1;
      inter.disabled = !canInteract;
      inter.style.opacity = canInteract ? "1" : "0.45";
    }

    setPressed(els.mkToggle, p.makeupOn, "Makeup: ON", "Makeup: OFF");
    p.makeupOn ? show(els.mkPick) : hide(els.mkPick);
    setPressed(els.lashToggle, p.lashesOn, "Lashes: ON", "Lashes: OFF");

    setPressed(els.pierToggle, p.piercingsOn, "Piercings: ON", "Piercings: OFF");
    els.pierInput.value = p.piercings || "";
    p.piercingsOn ? show(els.pierInput) : hide(els.pierInput);

    setPressed(els.tatToggle, p.tattoosOn, "Tattoos: ON", "Tattoos: OFF");
    els.tatInput.value = p.tattoos || "";
    p.tattoosOn ? show(els.tatInput) : hide(els.tatInput);

    labels();
  }

  function setPickLabel(selector, value, placeholder){
    const b = $(selector);
    if(b) b.textContent = value && String(value).trim() ? value : placeholder;
  }
  function toggleColor(base, chosen){
    const map = {
      tops:$("#topsColorBtn"), bottoms:$("#bottomsColorBtn"), dresses:$("#dressesColorBtn"),
      onesies:$("#onesiesColorBtn"), costumes:$("#costumesColorBtn"), shoes:$("#shoesColorBtn")
    };
    const btn = map[base];
    if(!btn) return;
    if(chosen && String(chosen).trim()) show(btn);
    else hide(btn);
  }

  function labels(){
    const i = state.activePerson;
    setPickLabel("#layoutPick", state.layout, "Pick layout");
    setPickLabel('[data-pick="expression"]', getPer(i,"expression"), "Pick expression");
    setPickLabel('[data-pick="hairStyle"]', getPer(i,"hairStyle"), "Pick hair style");
    setPickLabel('[data-pick="hairColor"]', getPer(i,"hairColor"), "Pick hair color");
    setPickLabel('[data-pick="hairTexture"]', getPer(i,"hairTexture"), "Pick hair texture");
    setPickLabel('[data-pick="makeup"]', getPer(i,"makeup"), "Pick makeup");
    setPickLabel('[data-pick="nailsStyle"]', getPer(i,"nailsStyle"), "Pick nails");
    setPickLabel('[data-pick="nailsColor"]', getPer(i,"nailsColor"), "Pick nail color");
    setPickLabel('[data-pick="pose"]', getPer(i,"pose"), "Pick pose");
    setPickLabel('[data-pick="interaction"]', state.global.interaction, "Pick interaction");

    ["tops","bottoms","dresses","onesies","costumes","shoes"].forEach(base => toggleColor(base, getPer(i,base)));
    setPickLabel('[data-pick="tops"]', getPer(i,"tops"), "Pick tops");
    setPickLabel('[data-pick="topsColor"]', getPer(i,"topsColor"), "Pick top color");
    setPickLabel('[data-pick="bottoms"]', getPer(i,"bottoms"), "Pick bottoms");
    setPickLabel('[data-pick="bottomsColor"]', getPer(i,"bottomsColor"), "Pick bottom color");
    setPickLabel('[data-pick="dresses"]', getPer(i,"dresses"), "Pick dresses");
    setPickLabel('[data-pick="dressesColor"]', getPer(i,"dressesColor"), "Pick dress color");
    setPickLabel('[data-pick="onesies"]', getPer(i,"onesies"), "Pick onesies");
    setPickLabel('[data-pick="onesiesColor"]', getPer(i,"onesiesColor"), "Pick onesie color");
    setPickLabel('[data-pick="costumes"]', getPer(i,"costumes"), "Pick costumes");
    setPickLabel('[data-pick="costumesColor"]', getPer(i,"costumesColor"), "Pick costume color");
    setPickLabel('[data-pick="shoes"]', getPer(i,"shoes"), "Pick shoes");
    setPickLabel('[data-pick="shoesColor"]', getPer(i,"shoesColor"), "Pick shoe color");
    setPickLabel('[data-pick="accessories"]', getPer(i,"accessories"), "Pick accessories");
    setPickLabel('[data-pick="jewelry"]', getPer(i,"jewelry"), "Pick jewelry");

    setPickLabel('[data-pick="sceneIO"]', state.global.sceneIO, "Pick");
    setPickLabel('[data-pick="environment"]', state.global.environment, "Pick environment");
    setPickLabel('[data-pick="timeOfDay"]', state.global.timeOfDay, "Pick time");
    setPickLabel('[data-pick="weather"]', state.global.weather, "Pick weather");
    setPickLabel('[data-pick="cameraAngle"]', state.global.cameraAngle, "Pick angle");
    setPickLabel('[data-pick="lighting"]', state.global.lighting, "Pick lighting");
    setPickLabel('[data-pick="lens"]', state.global.lens, "Pick lens look");
    setPickLabel('[data-pick="mood"]', state.global.mood, "Pick mood");
    setPickLabel('[data-pick="scrapStyle"]', state.global.scrapStyle, "Pick style");
    setPickLabel('[data-pick="scrapElements"]', state.global.scrapElements, "Pick elements");
  }

  function clearOutfit(except){
    const p = currentPerson();
    const groups = {
      separates:["tops","topsColor","bottoms","bottomsColor"],
      dress:["dresses","dressesColor"],
      onesie:["onesies","onesiesColor"],
      costume:["costumes","costumesColor"]
    };
    Object.entries(groups).forEach(([group, keys]) => {
      if(group !== except) keys.forEach(k => p[k] = "");
    });
  }

  const PICK = {
    layout:{t:"Image layout",list:LAYOUTS,custom:false,set:v=>state.layout=v},
    expression:{t:"Expression",list:EXPRESSIONS,custom:true,set:v=>setPer("expression",v)},
    hairStyle:{t:"Hair style",list:HAIR_STYLE,custom:true,set:v=>setPer("hairStyle",v)},
    hairColor:{t:"Hair color",list:COLORS,custom:true,set:v=>setPer("hairColor",v)},
    hairTexture:{t:"Hair texture",list:HAIR_TEXTURE,custom:true,set:v=>setPer("hairTexture",v)},
    makeup:{t:"Makeup style",list:MAKEUP,custom:true,set:v=>{setPer("makeup",v);currentPerson().makeupOn=Boolean(v);}},
    nailsStyle:{t:"Nails style",list:NAILS_STYLE,custom:true,set:v=>setPer("nailsStyle",v)},
    nailsColor:{t:"Nails color",list:COLORS,custom:true,set:v=>setPer("nailsColor",v)},
    pose:{t:"Pose",list:POSE,custom:true,set:v=>setPer("pose",v)},
    interaction:{t:"Interaction",list:INTERACTION,custom:true,set:v=>state.global.interaction=v},

    tops:{t:"Tops",list:TOPS,custom:true,set:v=>{if(v) clearOutfit("separates");setPer("tops",v);}},
    topsColor:{t:"Top color",list:COLORS,custom:true,set:v=>setPer("topsColor",v)},
    bottoms:{t:"Bottoms",list:BOTTOMS,custom:true,set:v=>{if(v) clearOutfit("separates");setPer("bottoms",v);}},
    bottomsColor:{t:"Bottom color",list:COLORS,custom:true,set:v=>setPer("bottomsColor",v)},
    dresses:{t:"Dresses",list:DRESSES,custom:true,set:v=>{if(v) clearOutfit("dress");setPer("dresses",v);}},
    dressesColor:{t:"Dress color",list:COLORS,custom:true,set:v=>setPer("dressesColor",v)},
    onesies:{t:"Onesies",list:ONESIES,custom:true,set:v=>{if(v) clearOutfit("onesie");setPer("onesies",v);}},
    onesiesColor:{t:"Onesie color",list:COLORS,custom:true,set:v=>setPer("onesiesColor",v)},
    costumes:{t:"Costumes",list:COSTUMES,custom:true,set:v=>{if(v) clearOutfit("costume");setPer("costumes",v);}},
    costumesColor:{t:"Costume color",list:COLORS,custom:true,set:v=>setPer("costumesColor",v)},
    shoes:{t:"Shoes",list:SHOES,custom:true,set:v=>setPer("shoes",v)},
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
    scrapElements:{t:"Scrapbook elements",list:SCRAP_EL,custom:true,set:v=>state.global.scrapElements=v}
  };

  let pickKey = null;
  let pickVal = null;

  function openPicker(key){
    const cfg = PICK[key];
    if(!cfg) return;
    pickKey = key;
    pickVal = null;
    els.pickerTitle.textContent = cfg.t;
    els.pickerList.innerHTML = "";
    els.customInput.value = "";
    hide(els.customBox);

    const addItem = (text, value) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "pickItem";
      item.textContent = text;
      item.addEventListener("click", () => {
        $$(".pickItem", els.pickerList).forEach(x => x.classList.remove("active"));
        item.classList.add("active");
        pickVal = value;
        if(value === "__custom__"){
          show(els.customBox);
          setTimeout(() => els.customInput.focus(), 0);
        } else hide(els.customBox);
      });
      els.pickerList.appendChild(item);
    };

    if(cfg.custom){
      addItem("Blank / clear choice", "");
      addItem("Custom…", "__custom__");
    }
    cfg.list.forEach(v => addItem(v, v));
    show(els.pickerModal);
  }

  function closePicker(){
    hide(els.pickerModal);
    pickKey = null;
    pickVal = null;
    els.customInput.value = "";
    hide(els.customBox);
  }

  function confirmPicker(){
    if(!pickKey) return;
    if(pickVal === null){
      els.pickerConfirm.textContent = "PICK ONE FIRST";
      setTimeout(() => els.pickerConfirm.textContent = "CONFIRM", 900);
      return;
    }
    let value = pickVal;
    if(value === "__custom__"){
      value = els.customInput.value.trim();
      if(!value){
        els.customInput.focus();
        return;
      }
    }
    PICK[pickKey].set(value || "");
    saveState();
    closePicker();
    renderPerson();
    renderScrapbook();
  }

  function reroll(){
    state.mode = "surprise";
    for(let i=0;i<state.peopleCount;i++){
      const p = state.per[i];
      p.expression = rand(EXPRESSIONS);
      p.hairStyle = rand(HAIR_STYLE);
      p.hairColor = rand(COLORS);
      p.hairTexture = rand(HAIR_TEXTURE);
      p.makeupOn = true;
      p.makeup = rand(MAKEUP);
      p.lashesOn = Math.random() > 0.25;
      p.nailsStyle = rand(NAILS_STYLE);
      p.nailsColor = rand(COLORS);
      p.pose = rand(POSE);
      p.tops = rand(TOPS);
      p.topsColor = rand(COLORS);
      p.bottoms = rand(BOTTOMS);
      p.bottomsColor = rand(COLORS);
      p.dresses = p.dressesColor = p.onesies = p.onesiesColor = p.costumes = p.costumesColor = "";
      p.shoes = rand(SHOES);
      p.shoesColor = rand(COLORS);
      p.accessories = rand(ACCESSORIES);
      p.jewelry = rand(JEWELRY);
    }
    state.layout = rand(LAYOUTS);
    state.global.sceneIO = rand(["Indoor","Outdoor"]);
    state.global.environment = rand(ENVIRON);
    state.global.timeOfDay = rand(TIME);
    state.global.weather = rand(WEATHER);
    state.global.cameraAngle = rand(ANGLE);
    state.global.lighting = rand(LIGHT);
    state.global.lens = rand(LENS);
    state.global.mood = rand(MOOD);
    if(state.global.scrapbookOn){
      state.global.scrapbookLevel = rand(["Light","Medium","Heavy"]);
      state.global.scrapStyle = rand(SCRAP_STYLE);
      state.global.scrapElements = rand(SCRAP_EL);
    }
    state.global.interaction = state.peopleCount > 1 ? rand(INTERACTION) : "";
    saveState();
    renderAll();
  }

  function todayStr(){
    return new Date().toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
  }

  function buildPrompt(){
    const L = [];
    const g = state.global;
    const gender = genderLabel();

    L.push("Create ONE ultra-photorealistic image using the uploaded photo(s) as the exclusive facial and body identity reference for each person.");
    L.push(`People count: exactly ${state.peopleCount}. Group gender selection: ${gender}. Do not add extra people.`);
    L.push("Preserve each person’s recognizable adult face, authentic apparent age, natural skin texture, body proportions, distinguishing features and natural asymmetry. Do not merge identities, duplicate faces, slim, reshape, de-age, over-smooth, or replace anyone with a generic model.");
    L.push("");
    L.push(`IMAGE LAYOUT: ${state.layout}.`);
    L.push("");
    L.push("SCENE & STYLE:");
    if(g.sceneIO) L.push(`- Indoor / outdoor: ${g.sceneIO}.`);
    if(g.environment) L.push(`- Environment: ${g.environment}.`);
    if(g.timeOfDay) L.push(`- Time of day: ${g.timeOfDay}.`);
    if(g.weather) L.push(`- Weather / atmosphere: ${g.weather}.`);
    if(g.cameraAngle) L.push(`- Camera angle / composition: ${g.cameraAngle}.`);
    if(g.lighting) L.push(`- Lighting: ${g.lighting}.`);
    if(g.lens) L.push(`- Lens / photographic treatment: ${g.lens}.`);
    if(g.mood) L.push(`- Mood: ${g.mood}.`);
    if(g.scrapbookOn && g.scrapbookLevel !== "None"){
      L.push(`- Scrapbook styling: ${g.scrapbookLevel}.`);
      if(g.scrapStyle) L.push(`- Scrapbook theme: ${g.scrapStyle}.`);
      if(g.scrapElements) L.push(`- Scrapbook elements: ${g.scrapElements}.`);
      L.push("- Scrapbook materials must read as real tactile paper, tape, frames, stickers and layered physical textures, never flat app UI.");
    } else {
      L.push("- Scrapbook styling: OFF.");
    }

    L.push("");
    L.push("PEOPLE:");
    for(let i=1;i<=state.peopleCount;i++){
      const p = state.per[i-1];
      const nm = (state.names[i-1] || "").trim();
      const label = nm || `Person ${i}`;
      L.push(`- ${label} (${gender}):`);
      if(p.expression) L.push(`  Expression: ${p.expression}.`);
      if(p.hairStyle) L.push(`  Hair style: ${p.hairStyle}.`);
      if(p.hairColor) L.push(`  Hair color: ${p.hairColor}.`);
      if(p.hairTexture) L.push(`  Hair texture: ${p.hairTexture}.`);
      if(p.makeupOn) L.push(`  Makeup: ${p.makeup || "glamorous, polished makeup"}.`);
      else L.push("  Makeup: none / natural bare-face realism.");
      L.push(`  Lashes: ${p.lashesOn ? "voluminous and defined" : "natural"}.`);
      if(p.nailsStyle) L.push(`  Nails: ${p.nailsStyle}${p.nailsColor ? ` in ${p.nailsColor}` : ""}.`);
      if(p.pose) L.push(`  Pose: ${p.pose}.`);

      const outfit = [];
      if(p.tops) outfit.push(`top: ${p.tops}${p.topsColor ? ` (${p.topsColor})` : ""}`);
      if(p.bottoms) outfit.push(`bottoms: ${p.bottoms}${p.bottomsColor ? ` (${p.bottomsColor})` : ""}`);
      if(p.dresses) outfit.push(`dress: ${p.dresses}${p.dressesColor ? ` (${p.dressesColor})` : ""}`);
      if(p.onesies) outfit.push(`onesie: ${p.onesies}${p.onesiesColor ? ` (${p.onesiesColor})` : ""}`);
      if(p.costumes) outfit.push(`costume: ${p.costumes}${p.costumesColor ? ` (${p.costumesColor})` : ""}`);
      if(p.shoes) outfit.push(`shoes: ${p.shoes}${p.shoesColor ? ` (${p.shoesColor})` : ""}`);
      if(outfit.length) L.push(`  Wardrobe: ${outfit.join(", ")}.`);
      if(p.accessories) L.push(`  Accessories: ${p.accessories}.`);
      if(p.jewelry) L.push(`  Jewelry: ${p.jewelry}.`);
      if(p.piercingsOn && p.piercings.trim()) L.push(`  Piercings: ${p.piercings.trim()}.`);
      if(p.tattoosOn && p.tattoos.trim()) L.push(`  Tattoos: ${p.tattoos.trim()}.`);
    }

    if(state.peopleCount > 1 && g.interaction){
      L.push("");
      L.push(`GROUP INTERACTION: ${g.interaction}. Keep the interaction anatomically natural and preserve every person’s distinct identity.`);
    }

    if(state.namesOnImage || state.dateOnImage || state.signatureOn){
      L.push("");
      L.push("TEXT / OVERLAYS:");
      if(state.namesOnImage){
        const named = state.names.slice(0,state.peopleCount).map((n,i)=>n.trim() || `Person ${i+1}`);
        L.push(`- Names: ${named.join(", ")}. Place them small and elegant along an outer edge or border, never across a face or body.`);
      }
      if(state.dateOnImage) L.push(`- Date: ${todayStr()}, small and discreet along an outer edge.`);
      if(state.signatureOn) L.push('- Add a very small handwritten "Rebecca Lynn" signature in the extreme bottom-left corner.');
    }

    L.push("");
    L.push("FINAL REALISM RULES:");
    L.push("- Genuine high-resolution camera photograph, realistic skin pores, believable anatomy, real fabric physics, coherent shadows and reflections.");
    L.push("- No CGI, illustration, cartoon, anime, plastic skin, warped hands, extra fingers, duplicate limbs, floating objects or accidental text.");
    if(state.layout !== "Single photo") L.push("- Keep each panel visually distinct while preserving the same people and requested styling; do not duplicate the exact same pose in every panel.");
    return L.join("\n");
  }

  function renderMode(){
    const surprise = state.mode === "surprise";
    els.modeSurprise.classList.toggle("active", surprise);
    els.modeCustom.classList.toggle("active", !surprise);
    surprise ? show(els.surpriseTip) : hide(els.surpriseTip);
  }

  function renderToggles(){
    setPressed(els.namesOnImg, state.namesOnImage, "Names on image: ON", "Names on image: OFF");
    setPressed(els.dateOnImg, state.dateOnImage, "Date on image: ON", "Date on image: OFF");
    setPressed(els.sigOnImg, state.signatureOn, "Signature: ON", "Signature: OFF");
  }

  function renderAll(){
    renderMode();
    renderToggles();
    buildCount();
    buildGender();
    buildNames();
    buildTabs();
    renderScrapbook();
    labels();
  }

  function clearAll(){
    state = defaultState();
    saveState();
    renderAll();
  }

  async function copyPrompt(){
    const text = els.promptText.value;
    let ok = false;
    try{
      if(navigator.clipboard && window.isSecureContext){
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch (_) {}
    if(!ok){
      try{
        els.promptText.removeAttribute("readonly");
        els.promptText.focus();
        els.promptText.select();
        els.promptText.setSelectionRange(0, text.length);
        ok = document.execCommand("copy");
        els.promptText.setAttribute("readonly","");
      } catch (_) {}
    }
    els.copyBtn.textContent = ok ? "COPIED!" : "SELECT + COPY";
    setTimeout(() => els.copyBtn.textContent = "COPY", 1200);
  }

  function setWelcome(){
    let seen = false;
    try { seen = localStorage.getItem(WELCOME_KEY) === "1"; } catch (_) {}
    if(seen) hide(els.welcomeModal);
    else show(els.welcomeModal);
  }

  function initLanguage(){
    const langs = [
      ["en","English"],["es","Español"],["fr","Français"],["de","Deutsch"],["pt","Português"],
      ["it","Italiano"],["nl","Nederlands"],["sv","Svenska"],["no","Norsk"],["da","Dansk"]
    ];
    els.langSelect.innerHTML = "";
    langs.forEach(([code,name]) => {
      const o = document.createElement("option");
      o.value = code;
      o.textContent = name;
      els.langSelect.appendChild(o);
    });
    const phone = (navigator.language || "en").slice(0,2).toLowerCase();
    const saved = (() => { try { return localStorage.getItem("ai-fauxbulous-lang"); } catch (_) { return null; } })();
    const lang = langs.some(([c])=>c===saved) ? saved : (langs.some(([c])=>c===phone) ? phone : "en");
    els.langSelect.value = lang;
    document.documentElement.lang = lang;
    els.langSelect.addEventListener("change", () => {
      document.documentElement.lang = els.langSelect.value;
      try { localStorage.setItem("ai-fauxbulous-lang", els.langSelect.value); } catch (_) {}
    });
  }

  function initHelp(){
    els.stuckLetter.innerHTML = `Hey there ✨<br><br>
      <b>1)</b> Choose <b>CUSTOM</b> for full control or <b>SURPRISE ME</b> for an instant randomized setup.<br>
      <b>2)</b> Pick 1–4 people, gender, optional names and image text settings.<br>
      <b>3)</b> Use each person tab to set expression, hair, makeup, pose, wardrobe and details. Custom choices are allowed in every picker.<br>
      <b>4)</b> For 2+ people, choose the group interaction once from Person 1.<br>
      <b>5)</b> Set the scene, camera, lighting, mood and optional scrapbook treatment.<br>
      <b>6)</b> Tap <b>GET FAUXBULOUS</b> to build the finished prompt, then <b>COPY</b> it.<br><br>
      Your choices save automatically on this device. <b>CLEAR ALL</b> truly resets everything. 💜`;
  }

  function registerServiceWorker(){
    if(!("serviceWorker" in navigator)) return;
    let reloading = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if(reloading) return;
      reloading = true;
      window.location.reload();
    });
    navigator.serviceWorker.register("./service-worker.js").then(reg => {
      reg.update().catch(()=>{});
    }).catch(()=>{});
  }

  function bindEvents(){
    els.modeCustom.addEventListener("click", () => {
      state.mode = "custom";
      saveState();
      renderMode();
    });
    els.modeSurprise.addEventListener("click", () => reroll());

    els.namesOnImg.addEventListener("click", () => {
      state.namesOnImage = !state.namesOnImage;
      saveState(); renderToggles(); buildNames();
    });
    els.dateOnImg.addEventListener("click", () => {
      state.dateOnImage = !state.dateOnImage;
      saveState(); renderToggles();
    });
    els.sigOnImg.addEventListener("click", () => {
      state.signatureOn = !state.signatureOn;
      saveState(); renderToggles();
    });

    els.mkToggle.addEventListener("click", () => {
      const p = currentPerson();
      p.makeupOn = !p.makeupOn;
      if(!p.makeupOn) p.makeup = "";
      saveState(); renderPerson();
    });
    els.lashToggle.addEventListener("click", () => {
      currentPerson().lashesOn = !currentPerson().lashesOn;
      saveState(); renderPerson();
    });
    els.pierToggle.addEventListener("click", () => {
      currentPerson().piercingsOn = !currentPerson().piercingsOn;
      saveState(); renderPerson();
    });
    els.pierInput.addEventListener("input", () => {
      currentPerson().piercings = els.pierInput.value;
      saveState();
    });
    els.tatToggle.addEventListener("click", () => {
      currentPerson().tattoosOn = !currentPerson().tattoosOn;
      saveState(); renderPerson();
    });
    els.tatInput.addEventListener("input", () => {
      currentPerson().tattoos = els.tatInput.value;
      saveState();
    });

    els.scrapToggle.addEventListener("click", () => {
      state.global.scrapbookOn = !state.global.scrapbookOn;
      if(state.global.scrapbookOn && state.global.scrapbookLevel === "None") state.global.scrapbookLevel = "Medium";
      saveState(); renderScrapbook();
    });

    document.addEventListener("click", e => {
      const b = e.target.closest("[data-pick]");
      if(b && !b.disabled) openPicker(b.getAttribute("data-pick"));
    });

    els.pickerClose.addEventListener("click", closePicker);
    els.pickerConfirm.addEventListener("click", confirmPicker);
    els.pickerModal.addEventListener("click", e => { if(e.target === els.pickerModal) closePicker(); });
    els.customInput.addEventListener("keydown", e => { if(e.key === "Enter") confirmPicker(); });

    els.enterBtn.addEventListener("click", () => {
      try { localStorage.setItem(WELCOME_KEY, "1"); } catch (_) {}
      hide(els.welcomeModal);
    });

    els.goBtn.addEventListener("click", () => {
      els.promptText.value = buildPrompt();
      show(els.promptModal);
      setTimeout(() => els.promptText.scrollTop = 0, 0);
    });
    els.promptClose.addEventListener("click", () => hide(els.promptModal));
    els.promptOk.addEventListener("click", () => hide(els.promptModal));
    els.promptModal.addEventListener("click", e => { if(e.target === els.promptModal) hide(els.promptModal); });
    els.copyBtn.addEventListener("click", copyPrompt);

    els.stuckBtn.addEventListener("click", () => show(els.stuckModal));
    els.stuckClose.addEventListener("click", () => hide(els.stuckModal));
    els.stuckOk.addEventListener("click", () => hide(els.stuckModal));
    els.stuckModal.addEventListener("click", e => { if(e.target === els.stuckModal) hide(els.stuckModal); });

    els.rerollBtn.addEventListener("click", reroll);
    els.clearBtn.addEventListener("click", clearAll);

    const openLang = () => { show(els.langMenu); els.langBtn.setAttribute("aria-expanded","true"); };
    const closeLang = () => { hide(els.langMenu); els.langBtn.setAttribute("aria-expanded","false"); };
    els.langBtn.addEventListener("click", e => {
      e.stopPropagation();
      els.langMenu.classList.contains("hidden") ? openLang() : closeLang();
    });
    els.langClose.addEventListener("click", closeLang);
    document.addEventListener("click", e => { if(!e.target.closest(".langWrap")) closeLang(); });

    document.addEventListener("keydown", e => {
      if(e.key !== "Escape") return;
      if(!els.pickerModal.classList.contains("hidden")) closePicker();
      else if(!els.promptModal.classList.contains("hidden")) hide(els.promptModal);
      else if(!els.stuckModal.classList.contains("hidden")) hide(els.stuckModal);
      else hide(els.langMenu);
    });
  }

  function init(){
    loadState();
    initLanguage();
    initHelp();
    bindEvents();
    renderAll();
    setWelcome();
    registerServiceWorker();
  }

  init();
})();