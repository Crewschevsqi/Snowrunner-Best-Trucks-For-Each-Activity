/* =====================================================================
   APPLICATION LOGIC (view-only)
   =====================================================================
   This file does NOT let users add/edit/delete vehicles.
   The only place to change the content is data.js — see the comment
   at the top of that file.
   ===================================================================== */

const el = (id) => document.getElementById(id);
let activeCategory = null;

function escapeHtml(s){
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}
function chevSvg(){
  return '<svg class="chev" viewBox="0 0 9 15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l6 6-6 6"/></svg>';
}

/* ---------- HOME: category list ---------- */
function renderHome(){
  const q = (el('searchInput').value || '').trim().toLowerCase();
  const wrap = el('categoryList');
  wrap.innerHTML = '';

  const filteredCats = q ? CATEGORIES.filter(c => c.toLowerCase().includes(q)) : CATEGORIES;

  filteredCats.forEach(cat => {
    const count = VEHICLES.filter(v => v.category === cat).length;
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
      <div class="row-icon">📁</div>
      <div class="row-main"><div class="row-title">${escapeHtml(cat)}</div></div>
      <div class="row-trail"><span>${count}</span>${chevSvg()}</div>`;
    row.onclick = () => openCategory(cat);
    wrap.appendChild(row);
  });

  el('categoryList').parentElement.style.display = filteredCats.length ? 'block' : 'none';
  el('homeEmpty').style.display = (CATEGORIES.length === 0) ? 'block' : 'none';
}
el('searchInput').addEventListener('input', renderHome);

/* ---------- Navigation Home <-> Category ---------- */
function openCategory(cat){
  activeCategory = cat;
  el('categoryNavTitle').textContent = cat;
  el('categoryLargeTitle').textContent = cat;
  el('vehicleSearchInput').value = '';
  renderVehicleList();
  el('panelHome').classList.add('pushed-back');
  el('panelCategory').classList.add('pushed');
}
function closeCategory(){
  el('panelHome').classList.remove('pushed-back');
  el('panelCategory').classList.remove('pushed');
}
el('btnBack').onclick = closeCategory;

/* ---------- Vehicle list ---------- */
function renderVehicleList(){
  const q = (el('vehicleSearchInput').value || '').trim().toLowerCase();
  let list = VEHICLES.filter(v => v.category === activeCategory);
  if(q) list = list.filter(v => v.name.toLowerCase().includes(q));

  el('vehicleCountLabel').textContent = list.length + (list.length === 1 ? ' vehicle' : ' vehicles');
  const wrap = el('vehicleList');
  wrap.innerHTML = '';

  if(list.length === 0){
    wrap.parentElement.style.display = 'none';
    el('vehicleEmpty').style.display = 'block';
    return;
  }
  el('vehicleEmpty').style.display = 'none';
  wrap.parentElement.style.display = 'block';

  list.forEach(v => {
    const row = document.createElement('div');
    row.className = 'row';
    const thumbContent = v.image
      ? `<img src="${v.image}" onerror="this.parentElement.textContent='🚛'">`
      : '🚛';
    row.innerHTML = `
      <div class="thumb">${thumbContent}</div>
      <div class="row-main">
        <div class="row-title">${escapeHtml(v.name)}</div>
        <div class="row-sub">${v.unlocked ? 'Available from the start' : ('Region: ' + escapeHtml(v.region || '—'))}</div>
      </div>
      <div class="row-trail">
        <span class="dot ${v.unlocked ? 'on' : 'off'}"></span>
        ${chevSvg()}
      </div>`;
    row.onclick = () => openDetail(v);
    wrap.appendChild(row);
  });
}
el('vehicleSearchInput').addEventListener('input', renderVehicleList);

/* ---------- Vehicle detail card (view-only) ---------- */
function openDetail(v){
  const photo = el('detailPhoto');
  photo.innerHTML = v.image
    ? `<img src="${v.image}" onerror="this.parentElement.textContent='🚛'">`
    : '🚛';
  el('detailName').textContent = v.name;
  el('detailCategory').textContent = v.category;
  el('detailStatus').textContent = v.unlocked ? 'Available from the start' : 'Needs to be unlocked';
  const regionRow = el('detailRegionRow');
  if(v.unlocked){
    regionRow.style.display = 'none';
  } else {
    regionRow.style.display = 'flex';
    el('detailRegion').textContent = v.region || '—';
  }
  el('detailSheet').classList.add('show');
}
el('detailSheet').addEventListener('click', (e) => {
  if(e.target.id === 'detailSheet') el('detailSheet').classList.remove('show');
});
el('detailCloseBar').addEventListener('click', () => el('detailSheet').classList.remove('show'));

/* ---------- Init ---------- */
renderHome();

/* ---------- PWA: service worker registration ---------- */
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
