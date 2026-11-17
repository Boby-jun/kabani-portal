/* Kabani Safaris portal prototype: shared data, icons and helpers. FAKE DATA ONLY. */
var ICONS = {
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
  arrow: '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
  bed: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.6"/>',
  meal: '<path d="M7 3v8a2 2 0 0 0 2 2v8M11 3v6a2 2 0 0 1-2 2M17 3c-2 1.5-3 4-3 7 0 1.7 1 2.5 3 2.5V21"/>',
  pin: '<path d="M12 21s6.5-5.7 6.5-11A6.5 6.5 0 0 0 5.5 10C5.5 15.3 12 21 12 21z"/><circle cx="12" cy="10" r="2.3"/>',
  route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h6.5a3 3 0 0 0 0-6h-5a3 3 0 0 1 0-6H16"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
  user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.6-3.6 3.4-5.5 7-5.5s6.4 1.9 7 5.5"/>',
  users: '<circle cx="9" cy="9" r="3"/><path d="M3.5 19c.5-3 2.7-4.7 5.5-4.7s5 1.7 5.5 4.7"/><circle cx="17" cy="9.5" r="2.4"/><path d="M16.5 14.4c2.4.1 4 1.5 4.5 4"/>',
  chat: '<path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V15a2.5 2.5 0 0 1-2-2.4z"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>',
  signal: '<path d="M12 19.5v.01M8.5 16a5 5 0 0 1 7 0M5.5 12.8a9.2 9.2 0 0 1 13 0M2.8 9.6a13.4 13.4 0 0 1 18.4 0"/>',
  doc: '<path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z"/><path d="M14 3.5V8h4M9.5 12.5h5M9.5 16h5"/>',
  cross: '<path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z"/>',
  bag: '<rect x="4.5" y="8" width="15" height="12" rx="2"/><path d="M9 8V6a3 3 0 0 1 6 0v2M4.5 13h15"/>',
  star: '<path d="M12 4l2.4 5 5.4.7-4 3.7 1 5.4L12 16l-4.8 2.8 1-5.4-4-3.7 5.4-.7z"/>',
  flag: '<path d="M6 21V4M6 5h11l-2 4 2 4H6"/>',
  lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
  send: '<path d="M20.5 3.5L10 14M20.5 3.5L14 20.5l-4-6.5-6.5-4z"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.3 3.8 8.5S14.6 18.1 12 20.5M12 3.5C9.4 5.9 8.2 8.8 8.2 12s1.2 6.1 3.8 8.5"/>',
  google: '<path d="M19.6 12.2H12M19.8 12a7.8 7.8 0 1 1-2.3-5.5"/>',
  apple: '<path d="M12 8.2c-1.6-1.6-5.7-1-5.7 3.4 0 3.6 2.4 7.4 4.3 7.4.9 0 .9-.5 1.4-.5s.5.5 1.4.5c1.9 0 4.3-3.8 4.3-7.4 0-4.4-4.1-5-5.7-3.4z"/><path d="M12 8.2c0-1.8 1.1-3.5 2.8-4"/>',
  phone: '<path d="M6.5 4h3l1.5 4-2 1.3a10 10 0 0 0 5.7 5.7l1.3-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.5 6a2 2 0 0 1 2-2z"/>',
  wallet: '<rect x="3.5" y="6.5" width="17" height="12" rx="2"/><path d="M3.5 10.5h17M16.5 14.5h.01"/>',
  list: '<path d="M9.5 7h10.5M9.5 12h10.5M9.5 17h10.5M4.5 7h.01M4.5 12h.01M4.5 17h.01"/>',
  'arrow-left': '<path d="M19.5 12h-15M10.5 6l-6 6 6 6"/>',
  bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>'
};
function icon(name, cls) {
  return '<svg class="i ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || '') + '</svg>';
}
function paintIcons(root) {
  (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
    if (!el.querySelector('svg')) el.insertAdjacentHTML('afterbegin', icon(el.getAttribute('data-icon')));
  });
}

/* ---------------------------------------------------------------------------------
   Data layer. Trips live in the Supabase database. The database decides who may see
   what (row-level security): a client receives only their own trip, the admin all.
   Pages call portalStart() once, then use the same simple functions as the prototype.
   --------------------------------------------------------------------------------- */
var CFG = window.KABANI_PORTAL || {};
var sb = (window.supabase && CFG.supabaseUrl)
  ? window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } })
  : null;
var DB = { trips: {}, todos: {}, ids: [], media: {}, email: '', admin: false };
var WEBSITE = CFG.websiteUrl || 'https://kabanisafaris.com';

function clone(o) { return JSON.parse(JSON.stringify(o)); }
function never() { return new Promise(function () {}); }
function isStoragePath(p) { return !!p && !/^(https?:|data:|blob:|\/|media\/)/.test(p); }
function mediaUrl(p) { return isStoragePath(p) ? (DB.media[p] || '') : (p || ''); }

/* role: 'admin' (admin only) or 'any' (signed in). Resolves once the data is loaded. */
function portalStart(role) {
  if (!sb) { document.body.innerHTML = '<p style="padding:32px;font:16px system-ui">The portal is not configured yet.</p>'; return never(); }
  return sb.auth.getSession().then(function (r) {
    var s = r.data && r.data.session;
    if (!s) { location.replace('index.html'); return never(); }
    if (idleExpired()) { expireSession(); return never(); }
    markActive(); watchActivity();
    DB.email = (s.user && s.user.email) || '';
    return sb.rpc('is_admin');
  }).then(function (r) {
    DB.admin = r.data === true;
    if (role === 'admin' && !DB.admin) { location.replace('trip.html'); return never(); }
    return Promise.all([sb.from('trips').select('id,data'), sb.from('trip_progress').select('trip_id,state')]);
  }).then(function (rs) {
    if (rs[0].error || rs[1].error) { throw (rs[0].error || rs[1].error); }
    DB.trips = {}; DB.todos = {};
    rs[0].data.forEach(function (row) { row.data.id = row.id; DB.trips[row.id] = row.data; });
    rs[1].data.forEach(function (row) { DB.todos[row.trip_id] = row.state || {}; });
    DB.ids = Object.keys(DB.trips).sort(function (a, b) {
      var A = DB.trips[a], B = DB.trips[b];
      return String(A.start || '9999').localeCompare(String(B.start || '9999')) || String(A.clientName).localeCompare(String(B.clientName));
    });
    var paths = [];
    DB.ids.forEach(function (id) { var t = DB.trips[id]; [t.hero, t.guide && t.guide.photo].forEach(function (p) { if (isStoragePath(p) && paths.indexOf(p) < 0) paths.push(p); }); });
    if (!paths.length) return;
    return sb.storage.from('trip-media').createSignedUrls(paths, 3600).then(function (r) {
      (r.data || []).forEach(function (o) { if (o.signedUrl) DB.media[o.path] = o.signedUrl; });
    });
  }).catch(function (e) {
    console.error(e);
    document.body.innerHTML = '<p style="padding:32px;font:16px system-ui">We could not load your trip. Please refresh the page, or <a href="index.html">sign in again</a>.</p>';
    return never();
  });
}
/* ---- sign-in memory: you stay signed in while you use the portal, and for 15 minutes after you last used it ---- */
var IDLE_MS = 15 * 60 * 1000, ACT_KEY = 'kabani_portal_last_active';
function lastActive() { try { return +localStorage.getItem(ACT_KEY) || 0; } catch (e) { return 0; } }
function markActive() { try { localStorage.setItem(ACT_KEY, String(Date.now())); } catch (e) {} }
function idleExpired() { var t = lastActive(); return !t || (Date.now() - t) > IDLE_MS; }
function expireSession() {
  return sb.auth.signOut().catch(function () {}).then(function () { try { localStorage.removeItem(ACT_KEY); } catch (e) {} location.replace('index.html?expired=1'); });
}
function watchActivity() {
  var last = 0;
  function bump() { var n = Date.now(); if (n - last > 15000) { last = n; markActive(); } }
  ['click', 'keydown', 'scroll', 'touchstart', 'mousemove'].forEach(function (ev) { window.addEventListener(ev, bump, { passive: true }); });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') { if (idleExpired()) expireSession(); else bump(); }
  });
  setInterval(function () { if (idleExpired()) expireSession(); }, 30000);
}
function signOut() { return sb.auth.signOut().catch(function () {}).then(function () { try { localStorage.removeItem(ACT_KEY); } catch (e) {} location.href = 'index.html'; }); }
function bindSignOut() {
  [].forEach.call(document.querySelectorAll('[data-signout]'), function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); signOut(); });
  });
}

function tripIds() { return DB.ids.slice(); }
function tripId() {
  var p = new URLSearchParams(location.search).get('trip');
  if (p && DB.trips[p]) return p;
  return DB.ids[0] || null;
}
function loadTripById(id) { return DB.trips[id] ? applyRules(clone(DB.trips[id])) : null; }
function loadTodoById(id) { return clone(DB.todos[id] || {}); }
function loadTrip() { var id = tripId(); return id ? loadTripById(id) : null; }
function loadTodo() { var id = tripId(); return id ? loadTodoById(id) : {}; }
/* Saves return a promise that resolves to true or false. The screen already shows the new state. */
function saveTrip(t) {
  var copy = applyRules(clone(t));
  DB.trips[copy.id] = copy; if (DB.ids.indexOf(copy.id) < 0) DB.ids.push(copy.id);
  return sb.from('trips').upsert({ id: copy.id, client_email: String(copy.email || '').trim().toLowerCase(), data: copy }).then(function (r) { if (r.error) console.error(r.error); return !r.error; });
}
function saveTodo(s, id) {
  id = id || tripId(); if (!id) return Promise.resolve(false);
  DB.todos[id] = clone(s);
  return sb.from('trip_progress').upsert({ trip_id: id, state: s }).then(function (r) { if (r.error) console.error(r.error); return !r.error; });
}
function refreshProgress(id) {
  return sb.from('trip_progress').select('state').eq('trip_id', id).maybeSingle().then(function (r) { if (r.data) DB.todos[id] = r.data.state || {}; });
}
function deleteTrip(id) {
  return sb.from('trips').delete().eq('id', id).then(function (r) { if (!r.error) { delete DB.trips[id]; delete DB.todos[id]; DB.ids = DB.ids.filter(function (x) { return x !== id; }); } return !r.error; });
}

/* A new, mostly empty trip with the standard checklist, included and excluded lists. */
function newTrip(o) {
  var slug = String(o.clientName || 'trip').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 24) || 'trip';
  var id = slug + '-' + Math.random().toString(36).slice(2, 6);
  var t = clone(TRIP_TEMPLATE);
  t.id = id; t.clientName = o.clientName; t.firstName = String(o.clientName || '').split(/\s|&/)[0];
  t.email = String(o.email || '').trim().toLowerCase(); t.title = o.title; t.start = o.start || '';
  return applyRules(t);
}
var TRIP_TEMPLATE = {
  clientName: '', firstName: '', email: '', title: '', subtitle: 'Your private safari, day by day.', start: '', countries: 1, price: 0,
  guide: { name: '', base: '', bio: '', languages: [] },
  days: [{ place: '', title: 'Day 1', desc: '', stay: '', meals: '' }],
  included: ['Your guide for the whole journey', 'Accommodation as listed in the itinerary', 'All park and conservation fees', 'Airport pickups and transfers'],
  excluded: ['International flights', 'Travel and medical insurance (mandatory)', 'Personal expenses, drinks and tips'],
  payments: [
    { id: 1, amount: 0, date: '', note: 'Deposit', paid: false },
    { id: 2, amount: 0, date: '', note: 'Final balance', paid: false }
  ],
  bookings: [],
  checklist: [
    { group: 'Documents', key: 'docs', icon: 'doc', items: [
      { id: 'd1', title: 'Passport', detail: 'Valid for at least 6 months after you return.', due: 60 },
      { id: 'd3', title: 'Travel insurance', detail: 'Mandatory. Check it covers medical care and trip cancellation.', due: 30 },
      { id: 'd4', title: 'International flights', detail: 'Not included in the package.', due: 45 }
    ] },
    { group: 'Health', key: 'health', icon: 'cross', items: [
      { id: 'h1', title: 'Vaccinations and malaria advice', detail: 'Check with your travel clinic about 6 weeks before departure.', due: 42 },
      { id: 'h2', title: 'Personal medication', detail: 'Bring enough for the whole trip, plus a few spare days.' }
    ] },
    { group: 'Packing', key: 'packing', icon: 'bag', items: [
      { id: 'p1', title: 'Clothing', detail: 'Neutral colours for game drives and a warm layer for early mornings.' },
      { id: 'p3', title: 'Small US dollar notes', detail: 'Handy for tips and small purchases.', due: 7 }
    ] }
  ],
  contact: { whatsapp: '+41 78 611 23 30', email: 'reservations@kabanisafaris.com' }
};

/* checklist text that follows the payments, e.g. the balance reminder */
function itemDetail(t, i) {
  if (i.dynamic === 'balance') {
    var left = Math.max(0, t.price - paidSum(t)), last = t.payments[t.payments.length - 1];
    return left === 0 ? 'Fully paid. Thank you!' : chf(left) + ' due by ' + fmt(parseISO(last.date), { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + finalDays(t) + ' days before departure. Contact Rafael to pay.';
  }
  return i.detail;
}

function chf(n) { return 'CHF ' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '’'); }
function parseISO(iso) { var p = iso.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
function addDays(iso, n) { var d = parseISO(iso); d.setDate(d.getDate() + n); return d; }
function fmt(d, o) { return d.toLocaleDateString('en-GB', o || { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }); }
function pad2(n) { return (n < 10 ? '0' : '') + n; }
function toISO(d) { return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
function todayISO() { return toISO(new Date()); }
function todayDate() { return parseISO(todayISO()); }
function daysUntil(iso) { return Math.round((parseISO(iso) - todayDate()) / 86400000); }

/* ---- payment rules: the last payment is the final balance. Its date and amount fill themselves in. ---- */
function finalDays(t) { return (t.finalDueDays == null || t.finalDueDays === '' || isNaN(+t.finalDueDays)) ? 14 : +t.finalDueDays; }
function finalWarn(t) { var w = (t.finalWarnDays == null || t.finalWarnDays === '' || isNaN(+t.finalWarnDays)) ? 20 : +t.finalWarnDays; return Math.max(w, finalDays(t)); }
function applyRules(t) {
  if (!t.payments) t.payments = [];
  while (t.payments.length < 2) t.payments.push({ id: Date.now() + t.payments.length, amount: 0, date: '', note: 'Final balance', paid: false });
  var last = t.payments[t.payments.length - 1], others = 0;
  t.payments.slice(0, -1).forEach(function (p) { others += +p.amount || 0; });
  last.amount = Math.max(0, (+t.price || 0) - others);
  if (t.start) last.date = toISO(addDays(t.start, -finalDays(t)));
  return t;
}

/* ---- signals: orange when a deadline is close, red once it has passed ---- */
function sig(t, deadline, warnFrom) {
  if (!t.start || daysUntil(t.start) < 0) return null;
  var now = todayDate(), d = Math.round((deadline - now) / 86400000);
  if (d < 0) return { level: 'late', days: -d };
  if (now >= warnFrom) return { level: 'soon', days: d };
  return null;
}
function sigText(s) {
  if (s.level === 'late') return s.days + (s.days === 1 ? ' day' : ' days') + ' overdue';
  return s.days === 0 ? 'Due today' : 'Due in ' + s.days + (s.days === 1 ? ' day' : ' days');
}
function sigChip(s) { return '<span class="chip ' + s.level + '"><i class="dot"></i>' + sigText(s) + '</span>'; }
function paySignal(t, i) {
  var p = t.payments[i]; if (!p || p.paid || !p.date) return null;
  var last = i === t.payments.length - 1;
  return sig(t, parseISO(p.date), last ? addDays(t.start, -finalWarn(t)) : addDays(p.date, -7));
}
/* a checklist item can carry a rule: it must be ticked N days before departure */
function itemRule(t, it) {
  if (it.due == null || it.due === '' || isNaN(+it.due) || !t.start) return null;
  var due = +it.due, warn = (it.warn == null || it.warn === '' || isNaN(+it.warn)) ? due + 7 : Math.max(+it.warn, due);
  return { due: due, warn: warn, deadline: addDays(t.start, -due), from: addDays(t.start, -warn) };
}
function itemSignal(t, todo, it) {
  if (it.dynamic === 'balance') { if (paidSum(t) >= t.price) return null; return paySignal(t, t.payments.length - 1); }
  if (todo[it.id]) return null;
  var r = itemRule(t, it); return r ? sig(t, r.deadline, r.from) : null;
}
/* everything that needs the client's attention right now, most urgent first */
function alerts(t, todo) {
  var out = [];
  t.payments.forEach(function (p, i) { var s = paySignal(t, i); if (s) out.push({ s: s, where: 'pricing', ref: 'pay:' + i, label: p.note + ', ' + chf(p.amount) }); });
  t.checklist.forEach(function (g) { g.items.forEach(function (it) { if (it.dynamic) return; var s = itemSignal(t, todo, it); if (s) out.push({ s: s, where: 'trip', ref: 'item:' + it.id, label: it.title }); }); });
  return out.sort(function (a, b) {
    var la = a.s.level === 'late', lb = b.s.level === 'late';
    if (la !== lb) return la ? -1 : 1;
    return la ? b.s.days - a.s.days : a.s.days - b.s.days;
  });
}
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

function paidSum(t) { return t.payments.reduce(function (s, p) { return s + (p.paid ? +p.amount : 0); }, 0); }
function todoStats(t, todo) {
  var total = 0, done = 0;
  t.checklist.forEach(function (g) { g.items.forEach(function (i) { total++; if (todo[i.id]) done++; }); });
  return { total: total, done: done };
}
function readiness(t, todo) {
  var pay = t.price ? Math.min(1, paidSum(t) / t.price) : 0;
  var bk = t.bookings.length ? t.bookings.filter(function (b) { return b.status === 'confirmed'; }).length / t.bookings.length : 0;
  var ts = todoStats(t, todo), td = ts.total ? ts.done / ts.total : 0;
  return { pay: pay, book: bk, todo: td, total: Math.round(((pay + bk + td) / 3) * 100) };
}
/* One colour per topic. Red, orange and yellow stay reserved for deadline signals. */
var TOPICS = [{ k: 'pay', label: 'Payments', icon: 'wallet' }, { k: 'book', label: 'Bookings', icon: 'bed' }, { k: 'todo', label: 'Checklist', icon: 'list' }];
function topicBars(r, withLabels) {
  return '<div class="tb' + (withLabels ? ' lab' : '') + '" role="group" aria-label="Readiness by topic">' + TOPICS.map(function (t) {
    var p = Math.round(r[t.k] * 100);
    return '<div class="tb-row t-' + t.k + '" title="' + t.label + ' ' + p + '%"><span class="tb-ic">' + icon(t.icon) + '</span>' + (withLabels ? '<span class="tb-l">' + t.label + '</span>' : '<span class="sr">' + t.label + '</span>') +
      '<span class="tb-bar"><i style="width:' + p + '%"></i></span><span class="tb-p">' + p + '%</span></div>';
  }).join('') + '</div>';
}
function stamps(t, todo) {
  var r = readiness(t, todo);
  var docs = t.checklist.filter(function (g) { return g.key === 'docs'; })[0];
  var docsDone = docs ? docs.items.every(function (i) { return todo[i.id]; }) : false;
  var stays = t.bookings.filter(function (b) { return b.kind === 'stay'; });
  return [
    { key: 'deposit', icon: 'star', label: 'Deposit paid', on: paidSum(t) > 0 },
    { key: 'stays', icon: 'bed', label: 'Stays confirmed', on: stays.length > 0 && stays.every(function (b) { return b.status === 'confirmed'; }) },
    { key: 'docs', icon: 'doc', label: 'Documents ready', on: docsDone },
    { key: 'ready', icon: 'flag', label: 'Ready to go', on: r.total === 100 }
  ];
}

function toast(msg) {
  var el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(function () { el.classList.remove('show'); }, 3200);
}

function initMenu() {
  var b = document.querySelector('.menu-toggle'), s = document.querySelector('.sidebar'), bd = document.querySelector('.sidebar-backdrop'), c = document.querySelector('.sidebar-close');
  if (!b || !s || !bd || !c) return;
  function set(o) { s.classList.toggle('open', o); bd.classList.toggle('show', o); b.setAttribute('aria-expanded', o ? 'true' : 'false'); document.body.classList.toggle('menu-open', o); }
  b.addEventListener('click', function () { set(true); });
  c.addEventListener('click', function () { set(false); });
  bd.addEventListener('click', function () { set(false); });
  s.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 768) set(false); });
}
document.addEventListener('DOMContentLoaded', function () { paintIcons(); initMenu(); });
