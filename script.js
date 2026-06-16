/* ====================== I18N ====================== */
const STRINGS = {
  en: {
    tagline: 'Obstruction analysis · point-to-point WiFi links',
    mapHint: 'Click the map to place Site A and Site B',
    langLabel: 'LANG',
    unitsLabel: 'UNITS',
    sitesLabel: 'Link sites',
    notSet: 'Not set — click the map',
    siteA: 'Site A · transmitter',
    siteB: 'Site B · receiver',
    instructions1: 'Heights are the <b>mast/antenna height above the roof or ground</b> at each site. The first click places A, the second places B. Click A or B again (or drag the pins) to move them.',
    freqLabel: 'Link frequency',
    freq24: '24 GHz (license-free)',
    freqLora24: '2.4 GHz (LoRa / Meshtastic)',
    groupLora: 'LoRa / Meshtastic',
    groupWifi: 'WiFi',
    groupOther: 'Other',
    instructions2: 'Used to compute the radius of the <b>first Fresnel zone</b>, which needs to be mostly clear of obstacles in addition to the direct line of sight.',
    runBtn: 'Analyze link',
    resultLabel: 'Result',
    distance: 'Distance',
    minClearance: 'Min. clearance',
    legendTerrain: 'Terrain',
    legendBuildings: 'Buildings',
    legendLos: 'Line of sight OK',
    legendFresnel: 'Fresnel compromised',
    legendBlocked: 'Blocked',
    footerSources: 'Sources of data:',
    apiUsageLabel: 'API calls today:',
    apiUsageElevationUnit: 'elevation',
    apiUsageOverpassUnit: 'buildings',
    apiUsageTooltip: 'Number of requests sent to the elevation and building-data APIs today. Public demo servers have daily limits (Open-Topo-Data: ~1000/day).',
    mapColorNote: 'These same colors are drawn on the link on the map, marking which stretch of the path has issues.',
    profileHint: 'Click the chart to enlarge',
    profileModalTitle: 'Link profile',
    statusProfile: 'Computing corridor profile...',
    statusElevation: (n)=>`Fetching terrain elevation (${n} points)...`,
    statusBuildings: 'Fetching nearby buildings (OpenStreetMap)...',
    statusNoBuildings: 'Buildings unavailable, using terrain only...',
    statusComputing: 'Computing line of sight and Fresnel zone...',
    statusDone: (n,b)=>`Done · ${n} samples · ${b} buildings in corridor`,
    statusError: (msg)=>`Error: ${msg}`,
    elevationError: (msg)=>`Could not fetch elevation data (both Open-Topo-Data and Open-Elevation failed). This may be a network/CORS block in this environment. Detail: ${msg}`,
    verdictBlockedTitle: 'Line of sight blocked',
    verdictBlockedBody: (clr)=>`An obstacle (building or terrain) cuts the direct line between A and B. Minimum clearance: ${clr} (negative = blocked).`,
    verdictFresnelTitle: 'Line of sight clear, but Fresnel zone compromised',
    verdictFresnelBody: (freqStr)=>`There's no direct blockage, but an obstacle intrudes into more than 60% of the first Fresnel zone at ${freqStr}, which can cause signal loss from diffraction/interference.`,
    verdictOkTitle: 'Link is clear',
    verdictOkBody: (freqStr, clr)=>`Direct line of sight is clear and the Fresnel zone is mostly unobstructed at ${freqStr}. Minimum clearance: ${clr}.`,
    // equipment & link budget
    equipLabel: 'Radio equipment',
    equipGroupCustom: 'Custom',
    equipCustom: 'Custom / Manual',
    equipGroupUbiquiti: 'Ubiquiti airMAX',
    equipGroupAirFiber: 'Ubiquiti airFiber',
    equipGroupLora: 'LoRa / Meshtastic',
    equipGroupMikrotik: 'Mikrotik',
    equipTxPower: 'TX Power',
    equipGainA: 'Antenna gain A',
    equipGainB: 'Antenna gain B',
    equipRxSens: 'RX sensitivity',
    equipCableLoss: 'Cable losses',
    rfLabel: 'RF / Link budget',
    budgetMargin: 'Margin',
    budgetFspl: 'Free-space path loss',
    budgetTxPower: 'TX Power',
    budgetGains: 'Total antenna gain',
    budgetCable: 'Cable/connector losses',
    budgetRxSens: 'RX sensitivity',
    budgetRxSignal: 'Estimated RX signal',
    budgetTotal: 'Link margin',
    budgetGoodLabel: 'Excellent link',
    budgetWarnLabel: 'Marginal link',
    budgetBadLabel: 'Link insufficient',
  },
  es: {
    tagline: 'Análisis de obstrucción · enlaces WiFi punto a punto',
    mapHint: 'Hacé clic en el mapa para ubicar Sitio A y Sitio B',
    langLabel: 'IDIOMA',
    unitsLabel: 'UNIDADES',
    sitesLabel: 'Sitios del enlace',
    notSet: 'Sin definir — hacé clic en el mapa',
    siteA: 'Sitio A · transmisor',
    siteB: 'Sitio B · receptor',
    instructions1: 'Las alturas son la <b>altura del mástil/antena sobre el techo o el suelo</b> en cada sitio. El primer clic ubica A, el segundo ubica B. Volvé a hacer clic en A o B (o arrastrá los pines) para reubicarlos.',
    freqLabel: 'Frecuencia del enlace',
    freq24: '24 GHz (licencia libre)',
    freqLora24: '2.4 GHz (LoRa / Meshtastic)',
    groupLora: 'LoRa / Meshtastic',
    groupWifi: 'WiFi',
    groupOther: 'Otras',
    instructions2: 'Se usa para calcular el radio de la <b>primera zona de Fresnel</b>, que necesita estar mayormente libre de obstáculos además de la línea de visión directa.',
    runBtn: 'Analizar enlace',
    resultLabel: 'Resultado',
    distance: 'Distancia',
    minClearance: 'Despeje mínimo',
    legendTerrain: 'Terreno',
    legendBuildings: 'Edificios',
    legendLos: 'Línea de visión OK',
    legendFresnel: 'Fresnel comprometida',
    legendBlocked: 'Obstruida',
    footerSources: 'Fuentes consultadas:',
    apiUsageLabel: 'Llamadas a API hoy:',
    apiUsageElevationUnit: 'elevación',
    apiUsageOverpassUnit: 'edificios',
    apiUsageTooltip: 'Cantidad de solicitudes enviadas hoy a las APIs de elevación y edificios. Los servidores públicos de demo tienen límites diarios (Open-Topo-Data: ~1000/día).',
    mapColorNote: 'Estos mismos colores se pintan sobre el enlace en el mapa, marcando qué tramo del trayecto tiene problemas.',
    profileHint: 'Hacé clic en el gráfico para ampliarlo',
    profileModalTitle: 'Perfil del enlace',
    statusProfile: 'Calculando perfil del corredor...',
    statusElevation: (n)=>`Consultando elevación del terreno (${n} puntos)...`,
    statusBuildings: 'Consultando edificios cercanos (OpenStreetMap)...',
    statusNoBuildings: 'Edificios no disponibles, usando solo terreno...',
    statusComputing: 'Calculando línea de visión y zona de Fresnel...',
    statusDone: (n,b)=>`Listo · ${n} muestras · ${b} edificios en el corredor`,
    statusError: (msg)=>`Error: ${msg}`,
    elevationError: (msg)=>`No se pudo obtener elevación (Open-Topo-Data y Open-Elevation fallaron). Puede ser un bloqueo de red/CORS en este entorno. Detalle: ${msg}`,
    verdictBlockedTitle: 'Línea de visión bloqueada',
    verdictBlockedBody: (clr)=>`Hay un obstáculo (edificio o terreno) que corta la línea directa entre A y B. Despeje mínimo: ${clr} (negativo = bloqueo).`,
    verdictFresnelTitle: 'Línea de visión libre, pero zona de Fresnel comprometida',
    verdictFresnelBody: (freqStr)=>`No hay bloqueo directo, pero un obstáculo invade más del 60% de la primera zona de Fresnel a ${freqStr}, lo que puede causar pérdida de señal por difracción/interferencia.`,
    verdictOkTitle: 'Enlace despejado',
    verdictOkBody: (freqStr, clr)=>`Línea de visión directa libre y zona de Fresnel mayormente sin obstrucciones a ${freqStr}. Despeje mínimo: ${clr}.`,
    // equipment & link budget
    equipLabel: 'Equipo de radio',
    equipGroupCustom: 'Personalizado',
    equipCustom: 'Personalizado / Manual',
    equipGroupUbiquiti: 'Ubiquiti airMAX',
    equipGroupAirFiber: 'Ubiquiti airFiber',
    equipGroupLora: 'LoRa / Meshtastic',
    equipGroupMikrotik: 'Mikrotik',
    equipTxPower: 'Potencia TX',
    equipGainA: 'Ganancia antena A',
    equipGainB: 'Ganancia antena B',
    equipRxSens: 'Sensibilidad RX',
    equipCableLoss: 'Pérdida cables',
    rfLabel: 'RF / Presupuesto de enlace',
    budgetMargin: 'Margen',
    budgetFspl: 'Pérdida en espacio libre',
    budgetTxPower: 'Potencia TX',
    budgetGains: 'Ganancia total de antenas',
    budgetCable: 'Pérdida de cables/conectores',
    budgetRxSens: 'Sensibilidad RX',
    budgetRxSignal: 'Señal RX estimada',
    budgetTotal: 'Margen del enlace',
    budgetGoodLabel: 'Enlace excelente',
    budgetWarnLabel: 'Enlace marginal',
    budgetBadLabel: 'Enlace insuficiente',
  }
};

let currentLang = 'en';
let currentUnits = 'metric'; // 'metric' | 'imperial'

function t(key, ...args){
  const entry = STRINGS[currentLang][key];
  return typeof entry === 'function' ? entry(...args) : entry;
}

function applyI18n(){
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = STRINGS[currentLang][key];
    if(typeof val === 'string') el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-group]').forEach(el => {
    const key = el.getAttribute('data-i18n-group');
    const val = STRINGS[currentLang][key];
    if(typeof val === 'string') el.label = val;
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = STRINGS[currentLang][key];
    if(typeof val === 'string') el.title = val;
  });
  document.title = currentLang === 'es'
    ? 'LinkSight — Análisis de línea de visión WiFi P2P'
    : 'LinkSight — WiFi P2P Line-of-Sight Analysis';

  // refresh pin coord labels if points already set
  if(pointA) document.getElementById('coordsA').textContent = fmtCoord(pointA);
  if(pointB) document.getElementById('coordsB').textContent = fmtCoord(pointB);

  updateHeightUnitLabels();
}

function updateHeightUnitLabels(){
  const label = currentUnits === 'metric' ? 'm' : 'ft';
  document.getElementById('unitLabelA').textContent = label;
  document.getElementById('unitLabelB').textContent = label;
}

/* ====================== API USAGE COUNTER ====================== */
// Tracks how many requests are sent to the elevation and Overpass APIs,
// reset daily, persisted in localStorage so it survives page reloads.
const API_USAGE_KEY = 'linksight_api_usage';

function todayKey(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function loadApiUsage(){
  try {
    const raw = localStorage.getItem(API_USAGE_KEY);
    if(!raw) return { date: todayKey(), elevation: 0, overpass: 0 };
    const parsed = JSON.parse(raw);
    if(parsed.date !== todayKey()){
      // new day, reset counters
      return { date: todayKey(), elevation: 0, overpass: 0 };
    }
    return parsed;
  } catch(e){
    return { date: todayKey(), elevation: 0, overpass: 0 };
  }
}

let apiUsage = loadApiUsage();

function saveApiUsage(){
  try {
    localStorage.setItem(API_USAGE_KEY, JSON.stringify(apiUsage));
  } catch(e){
    console.warn('Could not persist API usage counter', e);
  }
}

function recordApiCall(kind){
  // kind: 'elevation' | 'overpass'
  if(apiUsage.date !== todayKey()){
    apiUsage = { date: todayKey(), elevation: 0, overpass: 0 };
  }
  apiUsage[kind] = (apiUsage[kind] || 0) + 1;
  saveApiUsage();
  updateApiUsageDisplay();
}

function updateApiUsageDisplay(){
  const elevEl = document.getElementById('apiUsageElevation');
  const overEl = document.getElementById('apiUsageOverpass');
  if(elevEl) elevEl.textContent = apiUsage.elevation || 0;
  if(overEl) overEl.textContent = apiUsage.overpass || 0;
}

/* ====================== UNIT CONVERSION ====================== */
const M_TO_FT = 3.28084;

function metersToDisplayLength(m){
  // returns a formatted string with the right unit
  if(currentUnits === 'metric') return m.toFixed(1) + ' m';
  return (m * M_TO_FT).toFixed(1) + ' ft';
}

function metersToDisplayDistance(m){
  if(currentUnits === 'metric'){
    return (m/1000).toFixed(2) + ' km';
  }
  const miles = m / 1609.344;
  return miles.toFixed(2) + ' mi';
}

// convert a user-entered height (in the currently selected display unit) to meters
function inputHeightToMeters(value){
  const v = parseFloat(value) || 0;
  return currentUnits === 'metric' ? v : v / M_TO_FT;
}

/* ====================== RADIO EQUIPMENT DATABASE ====================== */
// Equipment data is loaded from data/equipment.json at startup.
// EQUIPMENT_DB is populated after fetch; keyed by equipment id.
let EQUIPMENT_GROUPS = []; // raw groups data, kept for i18n rebuilds
let EQUIPMENT_DB = {};     // flat map keyed by equipment id, populated after fetch

async function loadEquipmentData(){
  try {
    const res = await fetch('data/equipment.json');
    if(!res.ok) throw new Error('Could not load equipment data: ' + res.status);
    const data = await res.json();
    EQUIPMENT_GROUPS = data.groups;
    buildEquipSelect();
  } catch(err){
    console.warn('Equipment data unavailable, select will be empty.', err);
  }
}

function buildEquipSelect(){
  const sel = document.getElementById('equipSelect');
  const prevVal = sel.value || null;
  sel.innerHTML = '';

  EQUIPMENT_GROUPS.forEach(group => {
    const og = document.createElement('optgroup');
    og.label = currentLang === 'es' ? group.label_es : group.label_en;

    group.equipment.forEach(eq => {
      EQUIPMENT_DB[eq.id] = eq; // populate lookup map
      const opt = document.createElement('option');
      opt.value = eq.id;
      opt.textContent = currentLang === 'es' ? eq.label_es : eq.label_en;
      og.appendChild(opt);
    });

    sel.appendChild(og);
  });

  // restore previous selection or default to first option
  if(prevVal && EQUIPMENT_DB[prevVal]){
    sel.value = prevVal;
  } else {
    const firstId = sel.options[0]?.value;
    if(firstId) loadEquipPreset(firstId);
  }
}

function loadEquipPreset(id){
  const preset = EQUIPMENT_DB[id];
  if(!preset) return;
  document.getElementById('equipTxPower').value   = preset.txPower;
  document.getElementById('equipGainA').value     = preset.gainA;
  document.getElementById('equipGainB').value     = preset.gainB;
  document.getElementById('equipRxSens').value    = preset.rxSens;
  document.getElementById('equipCableLoss').value = preset.cable;
  if(preset.freq !== null){
    const freqSel = document.getElementById('freq');
    const opt = Array.from(freqSel.options).find(o => parseFloat(o.value) === preset.freq);
    if(opt) freqSel.value = opt.value;
  }
}

document.getElementById('equipSelect').addEventListener('change', (e)=>{
  loadEquipPreset(e.target.value);
});

/* ====================== LINK BUDGET ====================== */
// Free-Space Path Loss (dB): FSPL = 20*log10(d_km) + 20*log10(f_ghz) + 92.45
function calcFSPL(distanceMeters, freq_ghz){
  const d_km = distanceMeters / 1000;
  if(d_km <= 0) return 0;
  return 20 * Math.log10(d_km) + 20 * Math.log10(freq_ghz) + 92.45;
}

function getEquipParams(){
  return {
    txPower:   parseFloat(document.getElementById('equipTxPower').value)  || 0,
    gainA:     parseFloat(document.getElementById('equipGainA').value)    || 0,
    gainB:     parseFloat(document.getElementById('equipGainB').value)    || 0,
    rxSens:    parseFloat(document.getElementById('equipRxSens').value)   || -90,
    cableLoss: parseFloat(document.getElementById('equipCableLoss').value) || 0,
  };
}

function calcLinkBudget(distanceMeters, freq_ghz){
  const p = getEquipParams();
  const fspl        = calcFSPL(distanceMeters, freq_ghz);
  const totalGain   = p.gainA + p.gainB;
  const rxSignal    = p.txPower + totalGain - fspl - p.cableLoss;
  const margin      = rxSignal - p.rxSens;
  return { fspl, txPower: p.txPower, totalGain, cableLoss: p.cableLoss, rxSens: p.rxSens, rxSignal, margin };
}

function renderLinkBudget(budget){
  // bar: margin mapped 0–30 dB → 0–100%, color by threshold
  const pct    = Math.max(0, Math.min(100, (budget.margin / 30) * 100));
  const color  = budget.margin >= 15 ? '#5be7c4' : budget.margin >= 6 ? '#ffd166' : '#ff6a5b';
  const cls    = budget.margin >= 15 ? 'good'    : budget.margin >= 6 ? 'warn'    : 'bad';
  const label  = budget.margin >= 15 ? t('budgetGoodLabel') : budget.margin >= 6 ? t('budgetWarnLabel') : t('budgetBadLabel');

  document.getElementById('budgetBarFill').style.width      = pct + '%';
  document.getElementById('budgetBarFill').style.background = color;
  document.getElementById('budgetBarLabel').textContent     = label;

  const marginEl = document.getElementById('budgetMarginVal');
  marginEl.textContent  = (budget.margin >= 0 ? '+' : '') + budget.margin.toFixed(1) + ' dB';
  marginEl.className    = 'budget-margin-val ' + cls;

  const rows = [
    { key: 'budgetTxPower',  val: '+' + budget.txPower.toFixed(1) + ' dBm', cls: 'pos' },
    { key: 'budgetGains',    val: '+' + budget.totalGain.toFixed(1) + ' dBi', cls: 'pos' },
    { key: 'budgetFspl',     val: '−' + budget.fspl.toFixed(1) + ' dB',  cls: 'neg' },
    { key: 'budgetCable',    val: '−' + budget.cableLoss.toFixed(1) + ' dB', cls: 'neg' },
    { key: 'budgetRxSignal', val: budget.rxSignal.toFixed(1) + ' dBm', cls: '' },
    { key: 'budgetRxSens',   val: budget.rxSens.toFixed(1) + ' dBm', cls: '' },
    { key: 'budgetTotal',    val: (budget.margin >= 0 ? '+' : '') + budget.margin.toFixed(1) + ' dB',
      cls: cls === 'good' ? 'pos' : cls === 'bad' ? 'neg' : '', total: true },
  ];

  document.getElementById('budgetRows').innerHTML = rows.map(r =>
    `<div class="budget-row${r.total ? ' total' : ''}">
      <span class="bk">${t(r.key)}</span>
      <span class="bv ${r.cls}">${r.val}</span>
    </div>`
  ).join('');
}

/* ====================== TOGGLES ====================== */
document.getElementById('langToggle').addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  currentLang = btn.dataset.value;
  document.querySelectorAll('#langToggle button').forEach(b => b.classList.toggle('active', b===btn));
  applyI18n();
  buildEquipSelect(); // rebuild select labels for new language
  redrawAllProfiles();
});

document.getElementById('unitsToggle').addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const newUnits = btn.dataset.value;
  if(newUnits === currentUnits) return;

  // convert the existing height input values so the underlying meters stay the same
  const heightAInput = document.getElementById('heightA');
  const heightBInput = document.getElementById('heightB');
  const metersA = inputHeightToMeters(heightAInput.value);
  const metersB = inputHeightToMeters(heightBInput.value);

  currentUnits = newUnits;
  document.querySelectorAll('#unitsToggle button').forEach(b => b.classList.toggle('active', b===btn));
  updateHeightUnitLabels();

  if(currentUnits === 'metric'){
    heightAInput.value = metersA.toFixed(1);
    heightBInput.value = metersB.toFixed(1);
  } else {
    heightAInput.value = (metersA * M_TO_FT).toFixed(1);
    heightBInput.value = (metersB * M_TO_FT).toFixed(1);
  }

  redrawAllProfiles();
});

/* ====================== MAP ====================== */
const CHICAGO = { lat: 41.8781, lng: -87.6298 };
const DEFAULT_ZOOM = 13;

const map = L.map('map', { zoomControl: true }).setView([CHICAGO.lat, CHICAGO.lng], DEFAULT_ZOOM);

// try to center on the user's actual location; fall back to Chicago if denied/unavailable
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      map.setView([pos.coords.latitude, pos.coords.longitude], DEFAULT_ZOOM);
    },
    (err) => {
      console.warn('Geolocation unavailable, defaulting to Chicago', err);
    },
    { timeout: 8000, maximumAge: 5 * 60 * 1000 }
  );
}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let markerA = null, markerB = null;
let pointA = null, pointB = null;

const iconA = L.divIcon({ className: '', html: '<div style="width:26px;height:26px;border-radius:50%;background:#5be7c4;border:2px solid #06231c;display:flex;align-items:center;justify-content:center;font-family:monospace;font-weight:700;color:#06231c;box-shadow:0 0 10px rgba(91,231,196,.6)">A</div>', iconSize:[26,26], iconAnchor:[13,13]});
const iconB = L.divIcon({ className: '', html: '<div style="width:26px;height:26px;border-radius:50%;background:#ffd166;border:2px solid #3a2a00;display:flex;align-items:center;justify-content:center;font-family:monospace;font-weight:700;color:#3a2a00;box-shadow:0 0 10px rgba(255,209,102,.6)">B</div>', iconSize:[26,26], iconAnchor:[13,13]});

let linkLine = null;
let resultSegments = []; // colored polylines representing signal status per segment

function clearResultSegments(){
  resultSegments.forEach(seg => map.removeLayer(seg));
  resultSegments = [];
}

function fmtCoord(latlng){
  return latlng.lat.toFixed(5) + ', ' + latlng.lng.toFixed(5);
}

function updateLine(){
  if(linkLine){ map.removeLayer(linkLine); linkLine = null; }
  clearResultSegments();
  if(pointA && pointB){
    linkLine = L.polyline([pointA, pointB], { color:'#5be7c4', weight:2, opacity:.7, dashArray:'6,6' }).addTo(map);
  }
  document.getElementById('runBtn').disabled = !(pointA && pointB);
}

map.on('click', (e)=>{
  if(!pointA){
    pointA = e.latlng;
    markerA = L.marker(pointA, { icon: iconA, draggable:true }).addTo(map);
    markerA.on('drag', ()=>{ pointA = markerA.getLatLng(); document.getElementById('coordsA').textContent = fmtCoord(pointA); updateLine(); });
    document.getElementById('coordsA').textContent = fmtCoord(pointA);
  } else if(!pointB){
    pointB = e.latlng;
    markerB = L.marker(pointB, { icon: iconB, draggable:true }).addTo(map);
    markerB.on('drag', ()=>{ pointB = markerB.getLatLng(); document.getElementById('coordsB').textContent = fmtCoord(pointB); updateLine(); });
    document.getElementById('coordsB').textContent = fmtCoord(pointB);
  } else {
    // reset and start over with A
    map.removeLayer(markerA); map.removeLayer(markerB);
    if(linkLine) map.removeLayer(linkLine);
    pointA = e.latlng;
    markerA = L.marker(pointA, { icon: iconA, draggable:true }).addTo(map);
    markerA.on('drag', ()=>{ pointA = markerA.getLatLng(); document.getElementById('coordsA').textContent = fmtCoord(pointA); updateLine(); });
    document.getElementById('coordsA').textContent = fmtCoord(pointA);
    pointB = null; markerB = null;
    document.getElementById('coordsB').textContent = t('notSet');
    document.getElementById('results').style.display = 'none';
  }
  updateLine();
});

/* ====================== GEO UTILITIES ====================== */
const R_EARTH = 6371000; // m

function toRad(d){ return d * Math.PI / 180; }

function haversine(p1, p2){
  const dLat = toRad(p2.lat - p1.lat);
  const dLng = toRad(p2.lng - p1.lng);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(p1.lat))*Math.cos(toRad(p2.lat))*Math.sin(dLng/2)**2;
  return 2 * R_EARTH * Math.asin(Math.sqrt(a));
}

// interpolate N points between p1 and p2 (lat/lng)
function interpolatePoints(p1, p2, n){
  const pts = [];
  for(let i=0;i<n;i++){
    const f = i/(n-1);
    pts.push({
      lat: p1.lat + (p2.lat - p1.lat)*f,
      lng: p1.lng + (p2.lng - p1.lng)*f,
      frac: f
    });
  }
  return pts;
}

/* ====================== ELEVATION ====================== */
// Open-Topo-Data (global SRTM 30m, supports CORS) with fallback to Open-Elevation
async function fetchElevations(points){
  // Open-Topo-Data accepts up to 100 locations per GET request, separated by '|'
  const locStr = points.map(p => p.lat.toFixed(6) + ',' + p.lng.toFixed(6)).join('|');
  const url = 'https://api.opentopodata.org/v1/srtm30m?locations=' + encodeURIComponent(locStr);

  try {
    recordApiCall('elevation');
    const res = await fetch(url);
    if(!res.ok) throw new Error('Open-Topo-Data returned ' + res.status);
    const data = await res.json();
    if(data.status !== 'OK') throw new Error('Open-Topo-Data: ' + (data.error || data.status));
    return data.results.map(r => r.elevation ?? 0);
  } catch(errPrimary){
    console.warn('Open-Topo-Data failed, trying Open-Elevation...', errPrimary);
    try {
      recordApiCall('elevation');
      const body = { locations: points.map(p => ({ latitude: p.lat, longitude: p.lng })) };
      const res2 = await fetch('https://api.open-elevation.com/api/v1/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if(!res2.ok) throw new Error('Open-Elevation returned ' + res2.status);
      const data2 = await res2.json();
      return data2.results.map(r => r.elevation);
    } catch(errFallback){
      throw new Error(t('elevationError', errFallback.message));
    }
  }
}

/* ====================== BUILDINGS (Overpass) ====================== */
async function fetchBuildings(p1, p2){
  // bbox covering the corridor with margin
  const south = Math.min(p1.lat, p2.lat) - 0.0015;
  const north = Math.max(p1.lat, p2.lat) + 0.0015;
  const west  = Math.min(p1.lng, p2.lng) - 0.0015;
  const east  = Math.max(p1.lng, p2.lng) + 0.0015;

  const query = `
    [out:json][timeout:25];
    (
      way["building"](${south},${west},${north},${east});
    );
    out geom;
  `;

  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: 'data=' + encodeURIComponent(query)
  });
  recordApiCall('overpass');
  if(!res.ok) throw new Error('Overpass returned ' + res.status);
  const data = await res.json();

  return data.elements
    .filter(el => el.type === 'way' && el.geometry)
    .map(el => {
      let height = null;
      const tags = el.tags || {};
      if(tags.height) height = parseFloat(tags.height);
      else if(tags['building:levels']) height = parseFloat(tags['building:levels']) * 3; // ~3m per floor
      if(!height || isNaN(height)) height = 9; // default ~3 floors
      return {
        coords: el.geometry.map(g => ({lat:g.lat, lng:g.lon})),
        height
      };
    });
}

// ray casting point-in-polygon
function pointInPolygon(pt, poly){
  let inside = false;
  for(let i=0, j=poly.length-1; i<poly.length; j=i++){
    const xi=poly[i].lng, yi=poly[i].lat;
    const xj=poly[j].lng, yj=poly[j].lat;
    const intersect = ((yi>pt.lat) !== (yj>pt.lat)) &&
      (pt.lng < (xj-xi)*(pt.lat-yi)/(yj-yi) + xi);
    if(intersect) inside = !inside;
  }
  return inside;
}

function buildingHeightAt(pt, buildings){
  let h = 0;
  for(const b of buildings){
    if(pointInPolygon(pt, b.coords)){
      h = Math.max(h, b.height);
    }
  }
  return h;
}

/* ====================== FRESNEL ====================== */
// radius of the first Fresnel zone in meters, at a point d1 from A and d2 from B (d1+d2=D)
function fresnelRadius(d1_km, d2_km, freq_ghz){
  // F = 17.31 * sqrt( (d1*d2) / (f * (d1+d2)) )  -- distances in km, f in GHz, result in meters
  const D = d1_km + d2_km;
  if(D === 0) return 0;
  return 17.31 * Math.sqrt((d1_km*d2_km) / (freq_ghz * D));
}

// formats a frequency given in GHz as a human-readable string, switching to MHz below 1 GHz
function formatFreq(freq_ghz){
  if(freq_ghz < 1){
    const mhz = Math.round(freq_ghz * 1000);
    return mhz + ' MHz';
  }
  // trim trailing zeros (e.g. 5 instead of 5.0, but keep 2.4)
  const ghz = freq_ghz % 1 === 0 ? freq_ghz.toFixed(0) : freq_ghz.toString();
  return ghz + ' GHz';
}

/* ====================== MAIN ANALYSIS ====================== */
const statusEl = document.getElementById('status');
const runBtn = document.getElementById('runBtn');

runBtn.addEventListener('click', runAnalysis);

async function runAnalysis(){
  if(!pointA || !pointB) return;
  runBtn.disabled = true;
  document.getElementById('results').style.display = 'none';
  statusEl.textContent = t('statusProfile');

  try{
    const distance = haversine(pointA, pointB); // meters
    const N = Math.max(20, Math.min(80, Math.round(distance / 15))); // 1 sample every ~15m, max 80
    const samples = interpolatePoints(pointA, pointB, N);

    statusEl.textContent = t('statusElevation', N);
    const elevations = await fetchElevations(samples);

    statusEl.textContent = t('statusBuildings');
    let buildings = [];
    try {
      buildings = await fetchBuildings(pointA, pointB);
    } catch(e){
      console.warn('Overpass failed, continuing with terrain only', e);
      statusEl.textContent = t('statusNoBuildings');
    }

    statusEl.textContent = t('statusComputing');

    const heightA = inputHeightToMeters(document.getElementById('heightA').value);
    const heightB = inputHeightToMeters(document.getElementById('heightB').value);
    const freq = parseFloat(document.getElementById('freq').value);

    // antenna height A and B above sea level
    const groundA = elevations[0];
    const groundB = elevations[elevations.length-1];
    const antennaA = groundA + heightA;
    const antennaB = groundB + heightB;

    // obstacle profile (terrain + building) per sample
    const profile = samples.map((s, i) => {
      const terrain = elevations[i];
      const bldgH = buildingHeightAt(s, buildings);
      const obstacle = terrain + bldgH; // total obstacle height at this point
      return { ...s, terrain, bldgH, obstacle };
    });

    // earth curvature correction (simplified): apparent drop = d1*d2 / (2*k*R), k~4/3 for standard refraction
    const k = 4/3;
    const D = distance / 1000; // km

    let minClearance = Infinity;
    let obstructed = false;

    profile.forEach((p, i) => {
      const d1 = D * p.frac;
      const d2 = D * (1 - p.frac);

      // geometric line-of-sight height at this point (linear interpolation A-B)
      const losHeight = antennaA + (antennaB - antennaA) * p.frac;

      // drop due to earth curvature
      const earthBulge = (d1 * d2) / (2 * k * (R_EARTH/1000)) * 1000; // meters

      const effectiveLOS = losHeight - earthBulge;

      const fr = fresnelRadius(d1, d2, freq);

      p.losHeight = effectiveLOS;
      p.fresnelRadius = fr;
      p.clearance = effectiveLOS - p.obstacle; // positive = clear

      if(p.clearance < minClearance){
        minClearance = p.clearance;
      }
      if(p.clearance < 0) obstructed = true;
      // fresnel check: if the obstacle eats into more than 60% of the fresnel radius, signal degrades
      if(p.clearance < fr * 0.6 && i > 0 && i < profile.length-1){
        p.fresnelIntrusion = true;
      }
    });

    const fresnelObstructed = profile.some(p => p.fresnelIntrusion);

    lastProfile = profile;
    lastDistance = distance;
    drawProfile(profileCanvas, profile, distance);
    drawMapSegments(profile);

    // results
    document.getElementById('statDist').textContent = metersToDisplayDistance(distance);
    document.getElementById('statClear').textContent = (minClearance >= 0 ? '+' : '') + metersToDisplayLength(minClearance);

    const verdict = document.getElementById('verdict');
    verdict.className = 'verdict ' + (obstructed ? 'bad' : (fresnelObstructed ? 'bad' : 'ok'));

    const clearanceStr = metersToDisplayLength(minClearance);
    const freqStr = formatFreq(freq);

    if(obstructed){
      verdict.innerHTML = `<div class="icon">⛔</div><div><b>${t('verdictBlockedTitle')}</b>${t('verdictBlockedBody', clearanceStr)}</div>`;
    } else if(fresnelObstructed){
      verdict.innerHTML = `<div class="icon">⚠️</div><div><b>${t('verdictFresnelTitle')}</b>${t('verdictFresnelBody', freqStr)}</div>`;
    } else {
      verdict.innerHTML = `<div class="icon">✅</div><div><b>${t('verdictOkTitle')}</b>${t('verdictOkBody', freqStr, clearanceStr)}</div>`;
    }

    // link budget
    const budget = calcLinkBudget(distance, freq);
    renderLinkBudget(budget);

    document.getElementById('results').style.display = 'flex';
    statusEl.textContent = t('statusDone', N, buildings.length);

  } catch(err){
    console.error(err);
    statusEl.textContent = t('statusError', err.message);
  } finally {
    runBtn.disabled = false;
  }
}

/* ====================== MAP SEGMENTS ====================== */
function segmentStatus(p1, p2){
  const blocked = (p1.clearance < 0 || p2.clearance < 0);
  if(blocked) return 'blocked';
  const fresnel = (p1.fresnelIntrusion || p2.fresnelIntrusion);
  if(fresnel) return 'fresnel';
  return 'ok';
}

const SEGMENT_STYLE = {
  ok:      { color:'#5be7c4', weight:4, opacity:.9 },
  fresnel: { color:'#ffd166', weight:4, opacity:.9 },
  blocked: { color:'#ff6a5b', weight:5, opacity:.95 }
};

function drawMapSegments(profile){
  clearResultSegments();
  // hide the generic dashed line while results are shown
  if(linkLine){ map.removeLayer(linkLine); linkLine = null; }

  // group consecutive points with the same status into a single polyline
  let currentStatus = null;
  let currentCoords = [];

  function flush(){
    if(currentCoords.length >= 2){
      const style = SEGMENT_STYLE[currentStatus] || SEGMENT_STYLE.ok;
      const poly = L.polyline(currentCoords, style).addTo(map);
      resultSegments.push(poly);
    }
  }

  for(let i=0;i<profile.length-1;i++){
    const p1 = profile[i], p2 = profile[i+1];
    const status = segmentStatus(p1, p2);
    if(status !== currentStatus){
      // close the previous segment including the junction point, then start a new one from there
      if(currentStatus !== null){
        currentCoords.push([p1.lat, p1.lng]);
        flush();
      }
      currentStatus = status;
      currentCoords = [[p1.lat, p1.lng]];
    }
    currentCoords.push([p2.lat, p2.lng]);
  }
  flush();
}

/* ====================== PROFILE CHART ====================== */
function formatAxisLabel(meters){
  if(currentUnits === 'metric') return meters.toFixed(0) + 'm';
  return (meters * M_TO_FT).toFixed(0) + 'ft';
}

function drawProfile(canvas, profile, distance){
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0,0,W,H);

  // scale factor so larger canvases get proportionally larger fonts/lines
  const scale = W / 760;

  const pad = { l: 50*scale, r: 16*scale, t: 16*scale, b: 28*scale };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;

  // vertical range: min/max of terrain, obstacle, los +/- fresnel
  let minY = Infinity, maxY = -Infinity;
  profile.forEach(p => {
    minY = Math.min(minY, p.terrain, p.obstacle, p.losHeight - p.fresnelRadius);
    maxY = Math.max(maxY, p.terrain, p.obstacle, p.losHeight + p.fresnelRadius);
  });
  const marginY = (maxY - minY) * 0.08 || 1;
  minY -= marginY; maxY += marginY;

  const X = frac => pad.l + frac * plotW;
  const Y = val => pad.t + plotH - ((val - minY)/(maxY - minY)) * plotH;

  // horizontal grid + height labels
  ctx.strokeStyle = '#1c2733';
  ctx.fillStyle = '#7d92a6';
  ctx.font = (10*scale) + 'px monospace';
  ctx.lineWidth = 1;
  const steps = 4;
  for(let i=0;i<=steps;i++){
    const val = minY + (maxY-minY)*i/steps;
    const y = Y(val);
    ctx.beginPath();
    ctx.moveTo(pad.l, y); ctx.lineTo(W-pad.r, y);
    ctx.stroke();
    ctx.fillText(formatAxisLabel(val), 4*scale, y+3*scale);
  }

  // Fresnel zone (fill)
  ctx.fillStyle = 'rgba(255,209,102,.18)';
  ctx.beginPath();
  profile.forEach((p,i) => {
    const x = X(p.frac), y = Y(p.losHeight + p.fresnelRadius);
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  for(let i=profile.length-1;i>=0;i--){
    const p = profile[i];
    ctx.lineTo(X(p.frac), Y(p.losHeight - p.fresnelRadius));
  }
  ctx.closePath();
  ctx.fill();

  // terrain (solid fill below)
  ctx.fillStyle = '#2c3a48';
  ctx.beginPath();
  ctx.moveTo(X(0), Y(minY));
  profile.forEach(p => ctx.lineTo(X(p.frac), Y(p.terrain)));
  ctx.lineTo(X(1), Y(minY));
  ctx.closePath();
  ctx.fill();

  // buildings (fill above terrain)
  ctx.fillStyle = 'rgba(180,138,90,.55)';
  ctx.beginPath();
  ctx.moveTo(X(0), Y(profile[0].terrain));
  profile.forEach(p => ctx.lineTo(X(p.frac), Y(p.obstacle)));
  profile.slice().reverse().forEach(p => ctx.lineTo(X(p.frac), Y(p.terrain)));
  ctx.closePath();
  ctx.fill();

  // line of sight, colored segment by segment based on clearance
  ctx.lineWidth = 2.5*scale;
  for(let i=0;i<profile.length-1;i++){
    const p1 = profile[i], p2 = profile[i+1];
    const ok = p1.clearance >= 0 && p2.clearance >= 0;
    ctx.strokeStyle = ok ? '#5be7c4' : '#ff6a5b';
    ctx.beginPath();
    ctx.moveTo(X(p1.frac), Y(p1.losHeight));
    ctx.lineTo(X(p2.frac), Y(p2.losHeight));
    ctx.stroke();
  }

  // A and B markers
  ctx.fillStyle = '#5be7c4';
  ctx.beginPath(); ctx.arc(X(0), Y(profile[0].losHeight), 4*scale, 0, 7); ctx.fill();
  ctx.fillStyle = '#ffd166';
  ctx.beginPath(); ctx.arc(X(1), Y(profile[profile.length-1].losHeight), 4*scale, 0, 7); ctx.fill();

  // X axis labels
  ctx.fillStyle = '#7d92a6';
  ctx.fillText('A', X(0)-3*scale, H-8*scale);
  ctx.fillText('B', X(1)-3*scale, H-8*scale);
  ctx.fillText(metersToDisplayDistance(distance), W/2-20*scale, H-8*scale);
}

/* ====================== PROFILE MODAL ====================== */
let lastProfile = null;
let lastDistance = null;

const profileCanvas = document.getElementById('profile');
const profileModal = document.getElementById('profileModal');
const profileLargeCanvas = document.getElementById('profileLarge');

function redrawAllProfiles(){
  if(!lastProfile) return;
  drawProfile(profileCanvas, lastProfile, lastDistance);
  if(profileModal.classList.contains('open')){
    drawProfile(profileLargeCanvas, lastProfile, lastDistance);
  }
}

function openProfileModal(){
  if(!lastProfile) return;
  profileModal.classList.add('open');
  // give the modal layout a tick to settle before measuring/drawing
  requestAnimationFrame(()=>{
    const rect = profileLargeCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    profileLargeCanvas.width = Math.max(760, Math.round(rect.width * dpr));
    profileLargeCanvas.height = Math.max(220, Math.round(rect.height * dpr));
    drawProfile(profileLargeCanvas, lastProfile, lastDistance);
  });
}

function closeProfileModal(){
  profileModal.classList.remove('open');
}

profileCanvas.addEventListener('click', openProfileModal);
document.getElementById('profileModalClose').addEventListener('click', closeProfileModal);
profileModal.addEventListener('click', (e)=>{
  if(e.target === profileModal) closeProfileModal();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && profileModal.classList.contains('open')) closeProfileModal();
});
window.addEventListener('resize', ()=>{
  if(profileModal.classList.contains('open')){
    const rect = profileLargeCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    profileLargeCanvas.width = Math.max(760, Math.round(rect.width * dpr));
    profileLargeCanvas.height = Math.max(220, Math.round(rect.height * dpr));
    drawProfile(profileLargeCanvas, lastProfile, lastDistance);
  }
});

/* ====================== INIT ====================== */
updateApiUsageDisplay();
loadEquipmentData();
