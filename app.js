/* ════════════════════════════════════════════════════
   I18N
════════════════════════════════════════════════════ */
const LANGS = {
  ru: {
    tab_login:'Вход', tab_reg:'Регистрация', label_email:'Никнейм или Email', label_pass:'Пароль',
    btn_login:'Войти в игру', btn_reg:'Создать аккаунт', label_nick:'Никнейм',
    label_email2:'Email', label_pass2:'Пароль', btn_google:'Войти через Google', or:'или',
    banner_tag:'🏆 Топ сезона', banner_title:'Найди лучших игроков для буста', banner_cta:'Смотреть услуги →',
    stats_title:'Статистика сервиса', stat_players:'Активных игроков', stat_services:'Услуг сегодня',
    stat_clans:'Кланов', stat_rating:'Средний рейтинг', popular_services:'Популярные услуги',
    all_link:'Все →', all_link2:'Все →', active_clans:'Активные кланы',
    cat_all:'Все', cat_boost:'⚔️ Буст', cat_coaching:'🎯 Обучение', cat_items:'🎒 Предметы',
    cat_team:'👥 Тиммейты', cat_acc:'🔑 Аккаунты', sort_label:'Сортировка:', sort_default:'По умолчанию',
    sort_price_asc:'Цена ↑', sort_price_desc:'Цена ↓', sort_rating:'⭐ Рейтинг', sort_new:'Новые',
    nav_home:'Главная', nav_market:'Маркет', nav_chat:'Чаты', nav_profile:'Профиль',
    pstat_deals:'Сделок', pstat_rating:'Рейтинг', pstat_clans:'Клана',
    edit_profile:'Редактировать профиль', edit_profile_desc:'Никнейм, аватар, описание',
    dota_stats:'Статистика Dota 2', dota_stats_desc:'Герои, WR, матчи', wallet:'Кошелёк',
    notif_setting:'Уведомления', notif_setting_desc:'Push-уведомления включены',
    dark_mode:'Тёмная тема', dark_mode_desc:'Текущая тема: Тёмная', lang_setting:'Язык / Language',
    favorites:'Избранное', cart:'Корзина', privacy:'Политика конфиденциальности',
    privacy_desc:'Правила использования', btn_logout:'Выйти из аккаунта',
    toast_welcome:'✅ Добро пожаловать, ', toast_reg:'🎉 Аккаунт создан! Добро пожаловать!',
    toast_logout:'👋 До встречи на арене!', toast_added:'✅ Добавлено в корзину',
    toast_fav:'❤️ Добавлено в избранное', toast_unfav:'💔 Убрано из избранного',
    toast_clan:'✅ Заявка отправлена в ', toast_clan_full:'❌ Клан заполнен',
    toast_checkout:'✅ Заказ оформлен! Спасибо!', toast_funds_added:'💰 +500 ₽ добавлено',
    toast_withdraw:'💸 Запрос на вывод отправлен', toast_saved:'✅ Профиль сохранён!',
    toast_published:'🎉 Объявление опубликовано!', toast_fill:'❗ Заполните все поля',
    toast_passlen:'❗ Пароль минимум 6 символов', toast_google:'✅ Вход через Google выполнен',
    toast_notif_on:'✅ Push-уведомления включены', toast_notif_off:'❌ Push-уведомления выключены',
    loading_sub:'Loading arena...', hero_sub:'Dota 2 Services Platform',
    cart_title:'Корзина', cart_empty:'Корзина пуста', cart_total:'Итого:',
    fav_title:'Избранное', fav_empty:'Избранное пусто',
    wallet_balance_lbl:'Текущий баланс', wallet_history_title:'История транзакций',
    btn_add_funds:'+ Пополнить', btn_withdraw:'Вывести',
    privacy_text:'<p style="margin-bottom:12px"><b>1. Сбор данных</b><br>Мы собираем только необходимые данные: никнейм, email, игровая статистика.</p><p style="margin-bottom:12px"><b>2. Безопасность</b><br>Все данные передаются по HTTPS и хранятся в зашифрованном виде.</p><p><b>3. Контакт</b><br>privacy@viktor.gg</p>',
    lang_changed:'🌍 Язык изменён', notif_panel_title:'Уведомления',
    lbl_listing_name:'Название', lbl_listing_cat:'Категория', lbl_listing_price:'Цена (₽)',
    lbl_listing_desc:'Описание', btn_publish:'Опубликовать', lbl_nick:'Никнейм', lbl_mmr:'MMR',
    lbl_bio:'О себе', btn_save_profile:'Сохранить', stats_modal_title:'Статистика Dota 2',
    edit_title:'Редактировать профиль', fav_modal_title:'Избранное', wallet_title:'Кошелёк',
    lang_modal_title:'Язык / Language', privacy_modal_title:'Политика конфиденциальности',
    listing_modal_title:'Новое объявление', new_chat:'✍️ Найдите игрока через поиск',
  },
  en: {
    tab_login:'Login', tab_reg:'Register', label_email:'Nickname or Email', label_pass:'Password',
    btn_login:'Enter Arena', btn_reg:'Create Account', label_nick:'Nickname',
    label_email2:'Email', label_pass2:'Password', btn_google:'Sign in with Google', or:'or',
    banner_tag:'🏆 Top Season', banner_title:'Find the best boosters', banner_cta:'Browse Services →',
    stats_title:'Platform Stats', stat_players:'Active Players', stat_services:'Services Today',
    stat_clans:'Clans', stat_rating:'Avg Rating', popular_services:'Popular Services',
    all_link:'All →', all_link2:'All →', active_clans:'Active Clans',
    cat_all:'All', cat_boost:'⚔️ Boost', cat_coaching:'🎯 Coaching', cat_items:'🎒 Items',
    cat_team:'👥 Teammates', cat_acc:'🔑 Accounts', sort_label:'Sort:', sort_default:'Default',
    sort_price_asc:'Price ↑', sort_price_desc:'Price ↓', sort_rating:'⭐ Rating', sort_new:'Newest',
    nav_home:'Home', nav_market:'Market', nav_chat:'Chats', nav_profile:'Profile',
    pstat_deals:'Deals', pstat_rating:'Rating', pstat_clans:'Clans',
    edit_profile:'Edit Profile', edit_profile_desc:'Nickname, avatar, bio',
    dota_stats:'Dota 2 Stats', dota_stats_desc:'Heroes, WR, matches', wallet:'Wallet',
    notif_setting:'Notifications', notif_setting_desc:'Push notifications enabled',
    dark_mode:'Dark Mode', dark_mode_desc:'Current theme: Dark', lang_setting:'Language',
    favorites:'Favorites', cart:'Cart', privacy:'Privacy Policy', privacy_desc:'Terms of use',
    btn_logout:'Log Out', toast_welcome:'✅ Welcome, ', toast_reg:'🎉 Account created! Welcome!',
    toast_logout:'👋 See you on the arena!', toast_added:'✅ Added to cart',
    toast_fav:'❤️ Added to favorites', toast_unfav:'💔 Removed from favorites',
    toast_clan:'✅ Request sent to ', toast_clan_full:'❌ Clan is full',
    toast_checkout:'✅ Order placed! Thank you!', toast_funds_added:'💰 +500 ₽ added',
    toast_withdraw:'💸 Withdrawal request sent', toast_saved:'✅ Profile saved!',
    toast_published:'🎉 Listing published!', toast_fill:'❗ Please fill all fields',
    toast_passlen:'❗ Password min 6 chars', toast_google:'✅ Google sign-in successful',
    toast_notif_on:'✅ Push notifications enabled', toast_notif_off:'❌ Push notifications disabled',
    loading_sub:'Loading arena...', hero_sub:'Dota 2 Services Platform',
    cart_title:'Cart', cart_empty:'Cart is empty', cart_total:'Total:',
    fav_title:'Favorites', fav_empty:'No favorites yet',
    wallet_balance_lbl:'Current Balance', wallet_history_title:'Transaction History',
    btn_add_funds:'+ Add Funds', btn_withdraw:'Withdraw',
    privacy_text:'<p style="margin-bottom:12px"><b>1. Data Collection</b><br>We collect only necessary data: nickname, email, game stats.</p><p><b>2. Contact</b><br>privacy@viktor.gg</p>',
    lang_changed:'🌍 Language changed', notif_panel_title:'Notifications',
    lbl_listing_name:'Title', lbl_listing_cat:'Category', lbl_listing_price:'Price (₽)',
    lbl_listing_desc:'Description', btn_publish:'Publish', lbl_nick:'Nickname', lbl_mmr:'MMR',
    lbl_bio:'About me', btn_save_profile:'Save', stats_modal_title:'Dota 2 Stats',
    edit_title:'Edit Profile', fav_modal_title:'Favorites', wallet_title:'Wallet',
    lang_modal_title:'Language', privacy_modal_title:'Privacy Policy',
    listing_modal_title:'New Listing', new_chat:'✍️ Find a player using search above',
  },
  es: {
    tab_login:'Entrar', tab_reg:'Registrarse', label_email:'Nick o Email', label_pass:'Contraseña',
    btn_login:'Entrar al Arena', btn_reg:'Crear Cuenta', label_nick:'Nickname',
    label_email2:'Email', label_pass2:'Contraseña', btn_google:'Entrar con Google', or:'o',
    banner_tag:'🏆 Top Temporada', banner_title:'Encuentra a los mejores boosters',
    banner_cta:'Ver Servicios →', stats_title:'Estadísticas', stat_players:'Jugadores Activos',
    stat_services:'Servicios Hoy', stat_clans:'Clanes', stat_rating:'Rating Promedio',
    popular_services:'Servicios Populares', all_link:'Ver todo →', all_link2:'Ver todo →',
    active_clans:'Clanes Activos', cat_all:'Todo', cat_boost:'⚔️ Boost', cat_coaching:'🎯 Coaching',
    cat_items:'🎒 Objetos', cat_team:'👥 Compañeros', cat_acc:'🔑 Cuentas', sort_label:'Ordenar:',
    sort_default:'Defecto', sort_price_asc:'Precio ↑', sort_price_desc:'Precio ↓',
    sort_rating:'⭐ Rating', sort_new:'Nuevos', nav_home:'Inicio', nav_market:'Mercado',
    nav_chat:'Chats', nav_profile:'Perfil', pstat_deals:'Tratos', pstat_rating:'Rating',
    pstat_clans:'Clanes', edit_profile:'Editar Perfil', edit_profile_desc:'Nick, avatar, descripción',
    dota_stats:'Stats Dota 2', dota_stats_desc:'Héroes, WR, partidas', wallet:'Cartera',
    notif_setting:'Notificaciones', notif_setting_desc:'Notificaciones push activas',
    dark_mode:'Modo Oscuro', dark_mode_desc:'Tema actual: Oscuro', lang_setting:'Idioma',
    favorites:'Favoritos', cart:'Carrito', privacy:'Política de Privacidad',
    privacy_desc:'Términos de uso', btn_logout:'Cerrar Sesión',
    toast_welcome:'✅ Bienvenido, ', toast_reg:'🎉 ¡Cuenta creada!', toast_logout:'👋 ¡Hasta luego!',
    toast_added:'✅ Agregado al carrito', toast_fav:'❤️ Agregado a favoritos',
    toast_unfav:'💔 Eliminado de favoritos', toast_clan:'✅ Solicitud enviada a ',
    toast_clan_full:'❌ Clan lleno', toast_checkout:'✅ ¡Pedido realizado!',
    toast_funds_added:'💰 +500 ₽ agregado', toast_withdraw:'💸 Solicitud de retiro enviada',
    toast_saved:'✅ ¡Perfil guardado!', toast_published:'🎉 ¡Anuncio publicado!',
    toast_fill:'❗ Rellena todos los campos', toast_passlen:'❗ Contraseña mín. 6 chars',
    toast_google:'✅ Inicio de sesión exitoso', toast_notif_on:'✅ Notificaciones activadas',
    toast_notif_off:'❌ Notificaciones desactivadas', loading_sub:'Cargando arena...',
    hero_sub:'Dota 2 Services Platform', cart_title:'Carrito', cart_empty:'El carrito está vacío',
    cart_total:'Total:', fav_title:'Favoritos', fav_empty:'Sin favoritos aún',
    wallet_balance_lbl:'Saldo Actual', wallet_history_title:'Historial de Transacciones',
    btn_add_funds:'+ Agregar Fondos', btn_withdraw:'Retirar',
    privacy_text:'<p>Solo recopilamos datos necesarios. Contacto: privacy@viktor.gg</p>',
    lang_changed:'🌍 Idioma cambiado', notif_panel_title:'Notificaciones',
    lbl_listing_name:'Título', lbl_listing_cat:'Categoría', lbl_listing_price:'Precio (₽)',
    lbl_listing_desc:'Descripción', btn_publish:'Publicar', lbl_nick:'Nickname', lbl_mmr:'MMR',
    lbl_bio:'Sobre mí', btn_save_profile:'Guardar', stats_modal_title:'Stats Dota 2',
    edit_title:'Editar Perfil', fav_modal_title:'Favoritos', wallet_title:'Cartera',
    lang_modal_title:'Idioma', privacy_modal_title:'Política de Privacidad',
    listing_modal_title:'Nuevo Anuncio', new_chat:'✍️ Busca un jugador con la búsqueda',
  }
};
let currentLang = 'ru';
function t(key) { return (LANGS[currentLang]&&LANGS[currentLang][key])||(LANGS.ru[key])||key; }
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=val; else el.textContent=val;
  });
  document.getElementById('hero-sub-text').textContent = t('hero_sub');
  document.getElementById('loading-sub').textContent = t('loading_sub');
  document.getElementById('lang-desc').textContent = LANGUAGE_NAMES[currentLang]||'Русский';
  const ct=document.getElementById('cart-title'); if(ct) ct.textContent=t('cart_title');
  const ft=document.getElementById('fav-title'); if(ft) ft.textContent=t('fav_title');
  const nt=document.getElementById('notif-title-text'); if(nt) nt.textContent=t('notif_panel_title');
}
const LANGUAGE_NAMES = { ru:'Русский', en:'English', es:'Español' };
function buildLangList() {
  document.getElementById('lang-list').innerHTML = Object.entries(LANGUAGE_NAMES).map(([code,name])=>`
    <div class="lang-option ${code===currentLang?'selected':''}" onclick="setLanguage('${code}')">
      <span>${name}</span>${code===currentLang?'<span>✓</span>':''}
    </div>`).join('');
}
function setLanguage(code) {
  currentLang = code;
  applyLang();
  closeModal('lang-modal');
  showToast(t('lang_changed')+' → '+LANGUAGE_NAMES[code]);
  buildMarket(); buildChats(); buildHomeClans(); buildHomeServices(); updateFavDesc(); updateCartDesc();
}

/* ════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════ */
const STATE = {
  loggedIn: false,
  user: { nick:'Viktor_GG', email:'viktor@gg.com', mmr:5200, bio:'' },
  cart: [], favorites: [], wallet: 1250,
  walletTx: [
    {name:'Пополнение',amount:+500,date:'15.06.2025',type:'plus'},
    {name:'Буст MMR +500',amount:-320,date:'14.06.2025',type:'minus'},
    {name:'Пополнение',amount:+1000,date:'10.06.2025',type:'plus'},
    {name:'Аrkana Item',amount:-180,date:'08.06.2025',type:'minus'},
    {name:'Продажа услуги',amount:+250,date:'05.06.2025',type:'plus'},
  ],
  notifications: [
    {icon:'🎯',msg:'Ваш заказ "Буст MMR +500" выполнен!',time:'5 мин назад',read:false},
    {icon:'💬',msg:'Invoker_Pro написал вам сообщение',time:'20 мин назад',read:false},
    {icon:'⚔️',msg:'Red Legion приглашает вас на тренировку',time:'1 час назад',read:false},
    {icon:'💰',msg:'Пополнение кошелька на 500₽',time:'3 часа назад',read:true},
    {icon:'🏆',msg:'Вы получили значок "Ветеран"',time:'вчера',read:true},
  ],
  currentScreen: 'auth',
  activeFilter: 'all', activeSort: 'default',
  userRatings: {}, userReviews: {},
  joinedClans: new Set(),
  myClanIds: new Set(),
  pushEnabled: true, lightTheme: false,
  activeFilters: { cat:'all', minPrice:null, maxPrice:null, minRating:0, badge:'all', free:false, sale:false, hot:false },
  reviewTarget: null,
};

/* ════════════════════════════════════════════════════
   PARTICLES
════════════════════════════════════════════════════ */
(function initParticles(){
  const canvas=document.getElementById('particles-canvas'); if(!canvas)return;
  const ctx=canvas.getContext('2d'); let w,h,pts;
  function resize(){const hero=document.querySelector('.auth-hero');w=canvas.width=hero?hero.offsetWidth:window.innerWidth;h=canvas.height=hero?hero.offsetHeight:300;}
  function mkPts(){pts=Array.from({length:55},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.4,vx:(Math.random()-.5)*.4,vy:-Math.random()*.6-.15,a:Math.random(),hue:Math.random()>.7?'#F5C518':'#C8102E'}));}
  function draw(){ctx.clearRect(0,0,w,h);pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.hue+Math.round(p.a*180).toString(16).padStart(2,'0');ctx.fill();p.x+=p.vx;p.y+=p.vy;p.a-=.003;if(p.a<=0||p.y<-10){p.x=Math.random()*w;p.y=h+5;p.a=Math.random()*.7+.3;p.vy=-Math.random()*.6-.15;}});requestAnimationFrame(draw);}
  resize();mkPts();draw();window.addEventListener('resize',()=>{resize();mkPts();});
})();

/* ════════════════════════════════════════════════════
   LOADING
════════════════════════════════════════════════════ */
setTimeout(()=>{
  const ls=document.getElementById('loading-screen');
  ls.style.opacity='0';
  setTimeout(()=>{ls.style.display='none';showScreen('auth');},500);
},1800);

/* ════════════════════════════════════════════════════
   SCREEN NAVIGATION
════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById('screen-'+id);
  if(el) el.classList.add('active');
  STATE.currentScreen=id;
  const nav=document.getElementById('bottom-nav');
  if(id==='auth'){nav.style.display='none';return;}
  nav.style.display='flex';
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const nb=document.getElementById('nav-'+id); if(nb) nb.classList.add('active');
  if(id==='home'){setTimeout(runCounters,200);buildHomeServices();buildHomeClans();}
  if(id==='market') buildMarket();
  if(id==='chat') buildChats();
  if(id==='clans') buildClansTab('browse');
  if(id==='profile') updateProfileUI();
}
function navTo(id){showScreen(id);}

/* ════════════════════════════════════════════════════
   AUTH
════════════════════════════════════════════════════ */
function switchAuthTab(tab){
  document.getElementById('tab-login').classList.toggle('active',tab==='login');
  document.getElementById('tab-reg').classList.toggle('active',tab==='reg');
  document.getElementById('form-login').style.display=tab==='login'?'flex':'none';
  document.getElementById('form-reg').style.display=tab==='reg'?'flex':'none';
}
function doLogin(){
  const email=document.getElementById('login-email').value.trim();
  const pass=document.getElementById('login-pass').value;
  const btn=document.getElementById('btn-login');
  if(!email||!pass){showToast(t('toast_fill'));return;}
  btn.classList.add('btn-ripple'); btn.textContent='⏳ ...';
  setTimeout(()=>{
    STATE.loggedIn=true; STATE.user.nick=email.split('@')[0]||'Player';
    btn.textContent=t('btn_login'); btn.classList.remove('btn-ripple');
    setUserUI(); showScreen('home');
    showToast(t('toast_welcome')+STATE.user.nick+'!');
    sendPushNotification('🎮','Добро пожаловать!','Вы вошли в VIKTOR.GG');
    runCounters();
  },1000);
}
function doRegister(){
  const nick=document.getElementById('reg-nick').value.trim();
  const email=document.getElementById('reg-email').value.trim();
  const pass=document.getElementById('reg-pass').value;
  const btn=document.getElementById('btn-reg');
  if(!nick||!email||!pass){showToast(t('toast_fill'));return;}
  if(pass.length<6){showToast(t('toast_passlen'));return;}
  btn.classList.add('btn-ripple'); btn.textContent='⏳ ...';
  setTimeout(()=>{
    STATE.loggedIn=true; STATE.user.nick=nick; STATE.user.email=email;
    btn.textContent=t('btn_reg'); btn.classList.remove('btn-ripple');
    setUserUI(); showScreen('home');
    showToast(t('toast_reg'));
    sendPushNotification('🎉','Аккаунт создан!','Добро пожаловать в VIKTOR.GG, '+nick+'!');
  },1200);
}
function doGoogleLogin(){
  const names=['ProGamer_GG','DotaKing99','ShadowMage','IceDragon'];
  const nick=names[Math.floor(Math.random()*names.length)];
  STATE.loggedIn=true; STATE.user.nick=nick;
  setUserUI(); showScreen('home');
  showToast(t('toast_google'));
  sendPushNotification('✅','Google Sign-in','Вы вошли как '+nick);
  runCounters();
}
function doLogout(){
  STATE.loggedIn=false; showScreen('auth'); showToast(t('toast_logout'));
}
function setUserUI(){
  const initials=STATE.user.nick.slice(0,2).toUpperCase();
  ['profile-avatar-text','avatar-home','avatar-market','avatar-clans'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.textContent=initials;
  });
  document.getElementById('profile-name').textContent=STATE.user.nick;
  document.getElementById('profile-tag').textContent=`#DOTA2 • MMR ${STATE.user.mmr}`;
}

/* ════════════════════════════════════════════════════
   COUNTER ANIMATION
════════════════════════════════════════════════════ */
function runCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=parseFloat(el.dataset.count);
    const isFloat=!Number.isInteger(target);
    let cur=0; const dur=1200; const step=target/(dur/16);
    const tick=()=>{cur=Math.min(cur+step,target);el.textContent=isFloat?cur.toFixed(1):Math.floor(cur);if(cur<target)requestAnimationFrame(tick);};
    tick();
  });
}

/* ════════════════════════════════════════════════════
   PUSH NOTIFICATIONS (simulated in-app)
════════════════════════════════════════════════════ */
let pushTimer = null;
function sendPushNotification(icon, title, msg) {
  if (!STATE.pushEnabled) return;
  const banner = document.getElementById('push-banner');
  document.getElementById('push-banner-icon').textContent = icon;
  document.getElementById('push-banner-title').textContent = title;
  document.getElementById('push-banner-msg').textContent = msg;
  banner.classList.add('show');
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => banner.classList.remove('show'), 4500);
  // also add to notif list
  addNotification(icon, title + ': ' + msg);
  // Request real browser push permission
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().then(perm => {
      if (perm === 'granted') {
        new Notification('VIKTOR.GG — ' + title, { body: msg, icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23C8102E" rx="20"/><text y=".9em" font-size="80">⚔️</text></svg>' });
      }
    });
  } else if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('VIKTOR.GG — ' + title, { body: msg });
  }
}
function closePushBanner() {
  document.getElementById('push-banner').classList.remove('show');
}

/* ════════════════════════════════════════════════════
   1. LIGHT / DARK THEME TOGGLE (WORKING)
════════════════════════════════════════════════════ */
function toggleTheme(el) {
  el.classList.toggle('on');
  const isDark = el.classList.contains('on');
  if (isDark) {
    document.body.classList.remove('light-theme');
    STATE.lightTheme = false;
    document.getElementById('theme-desc').textContent = 'Текущая тема: Тёмная';
    showToast('🌙 Тёмная тема включена');
  } else {
    document.body.classList.add('light-theme');
    STATE.lightTheme = true;
    document.getElementById('theme-desc').textContent = 'Текущая тема: Светлая';
    showToast('☀️ Светлая тема включена');
  }
}

/* ════════════════════════════════════════════════════
   MARKET DATA
════════════════════════════════════════════════════ */
let MARKET_ITEMS = [
  {id:1,emoji:'🗡️',name:'Бустер MMR +500',price:320,old:null,badge:'hot',cat:'boost',rating:4.9,votes:128,isNew:false},
  {id:2,emoji:'🛡️',name:'Arcana — Demon Witch',price:1200,old:1800,badge:'sale',cat:'items',rating:5.0,votes:64,isNew:false},
  {id:3,emoji:'🎯',name:'Коучинг 1 час',price:150,old:null,badge:'new',cat:'coaching',rating:4.8,votes:43,isNew:true},
  {id:4,emoji:'🔑',name:'Аккаунт Ancient 5',price:2500,old:3000,badge:'sale',cat:'acc',rating:4.6,votes:17,isNew:false},
  {id:5,emoji:'📊',name:'Анализ реплеев',price:200,old:null,badge:null,cat:'coaching',rating:5.0,votes:55,isNew:false},
  {id:6,emoji:'👥',name:'Тиммейт Pos 5',price:0,old:null,badge:'new',cat:'team',rating:4.7,votes:32,isNew:true},
  {id:7,emoji:'⚡',name:'Быстрый буст +200',price:180,old:220,badge:'sale',cat:'boost',rating:4.9,votes:89,isNew:false},
  {id:8,emoji:'🏆',name:'Immortal Sword Set',price:890,old:null,badge:'hot',cat:'items',rating:4.8,votes:71,isNew:false},
  {id:9,emoji:'🧙',name:'Обучение Invoker',price:250,old:null,badge:null,cat:'coaching',rating:5.0,votes:39,isNew:false},
  {id:10,emoji:'🎮',name:'Тиммейт Carry',price:0,old:null,badge:'new',cat:'team',rating:4.5,votes:22,isNew:true},
];

/* ════════════════════════════════════════════════════
   3. OZON-STYLE FILTERS
════════════════════════════════════════════════════ */
const FP = { cat:'all', minPrice:null, maxPrice:null, minRating:0, badge:'all', free:false, sale:false, hot:false };

function openFilterPanel() {
  // Sync UI with current FP state
  document.querySelectorAll('#fp-category .filter-option').forEach(o=>{
    o.classList.toggle('selected', o.dataset.val === FP.cat);
  });
  document.querySelectorAll('#fp-badge .filter-option').forEach(o=>{
    o.classList.toggle('selected', o.dataset.val === FP.badge);
  });
  document.querySelectorAll('#fp-rating .filter-rating-opt').forEach(o=>{
    o.classList.toggle('selected', parseFloat(o.dataset.val) === FP.minRating);
  });
  document.getElementById('fp-price-min').value = FP.minPrice || '';
  document.getElementById('fp-price-max').value = FP.maxPrice || '';
  document.getElementById('filter-panel-overlay').classList.add('open');
}
function closeFilterPanel(e) {
  if (!e || e.target === document.getElementById('filter-panel-overlay')) {
    document.getElementById('filter-panel-overlay').classList.remove('open');
  }
}
function fpToggle(el, group) {
  if (group === 'cat') {
    document.querySelectorAll('#fp-category .filter-option').forEach(o=>o.classList.remove('selected'));
    FP.cat = el.dataset.val;
  } else if (group === 'badge') {
    document.querySelectorAll('#fp-badge .filter-option').forEach(o=>o.classList.remove('selected'));
    FP.badge = el.dataset.val;
  }
  el.classList.add('selected');
}
function fpToggleRating(el) {
  document.querySelectorAll('#fp-rating .filter-rating-opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  FP.minRating = parseFloat(el.dataset.val);
}
function applyFilters() {
  FP.minPrice = parseFloat(document.getElementById('fp-price-min').value) || null;
  FP.maxPrice = parseFloat(document.getElementById('fp-price-max').value) || null;
  STATE.activeFilters = { ...FP };
  document.getElementById('filter-panel-overlay').classList.remove('open');
  buildMarket();
  updateActiveFiltersRow();
  const filterBtn = document.getElementById('filter-toggle-main');
  filterBtn.classList.toggle('has-filter', hasAnyFilter());
}
function resetFilters() {
  FP.cat='all'; FP.minPrice=null; FP.maxPrice=null; FP.minRating=0; FP.badge='all';
  FP.free=false; FP.sale=false; FP.hot=false;
  document.querySelectorAll('#fp-category .filter-option').forEach(o=>o.classList.toggle('selected',o.dataset.val==='all'));
  document.querySelectorAll('#fp-badge .filter-option').forEach(o=>o.classList.toggle('selected',o.dataset.val==='all'));
  document.querySelectorAll('#fp-rating .filter-rating-opt').forEach(o=>o.classList.toggle('selected',o.dataset.val==='0'));
  document.getElementById('fp-price-min').value='';
  document.getElementById('fp-price-max').value='';
  STATE.activeFilters = {...FP};
  applyFilters();
}
function hasAnyFilter() {
  return FP.cat!=='all'||FP.minPrice!==null||FP.maxPrice!==null||FP.minRating>0||FP.badge!=='all'||FP.free||FP.sale||FP.hot;
}
function toggleFreeFilter(btn) {
  FP.free = !FP.free; btn.classList.toggle('has-filter', FP.free);
  STATE.activeFilters.free = FP.free;
  buildMarket(); updateActiveFiltersRow();
}
function toggleSaleFilter(btn) {
  FP.sale = !FP.sale; btn.classList.toggle('has-filter', FP.sale);
  STATE.activeFilters.sale = FP.sale;
  buildMarket(); updateActiveFiltersRow();
}
function toggleTopFilter(btn) {
  FP.hot = !FP.hot; btn.classList.toggle('has-filter', FP.hot);
  STATE.activeFilters.hot = FP.hot;
  buildMarket(); updateActiveFiltersRow();
}
function updateActiveFiltersRow() {
  const row = document.getElementById('active-filters-row');
  const chips = [];
  if (FP.cat !== 'all') chips.push({label: '⚙️ '+FP.cat, remove:()=>{FP.cat='all';applyFilters();}});
  if (FP.minPrice !== null) chips.push({label: '₽ от '+FP.minPrice, remove:()=>{FP.minPrice=null;applyFilters();}});
  if (FP.maxPrice !== null) chips.push({label: '₽ до '+FP.maxPrice, remove:()=>{FP.maxPrice=null;applyFilters();}});
  if (FP.minRating > 0) chips.push({label: '⭐ '+FP.minRating+'+', remove:()=>{FP.minRating=0;applyFilters();}});
  if (FP.badge !== 'all') chips.push({label: FP.badge, remove:()=>{FP.badge='all';applyFilters();}});
  if (FP.free) chips.push({label: '🎁 Бесплатно', remove:()=>{FP.free=false;document.getElementById('fp-free-toggle').classList.remove('has-filter');applyFilters();}});
  if (FP.sale) chips.push({label: '🏷 Скидки', remove:()=>{FP.sale=false;document.getElementById('fp-sale-toggle').classList.remove('has-filter');applyFilters();}});
  if (FP.hot) chips.push({label: '🔥 Топ', remove:()=>{FP.hot=false;document.getElementById('fp-top-toggle').classList.remove('has-filter');applyFilters();}});
  row.innerHTML = chips.map((_,i)=>`<div class="active-filter-chip" onclick="removeActiveFilter(${i})">${chips[i].label} ✕</div>`).join('');
  row._chips = chips;
}
function removeActiveFilter(i) {
  const row = document.getElementById('active-filters-row');
  if (row._chips && row._chips[i]) { row._chips[i].remove(); }
}

function buildMarket(filter, sort) {
  const grid = document.getElementById('market-grid');
  filter = filter || STATE.activeFilter;
  sort = sort || STATE.activeSort;
  const searchVal = (document.getElementById('market-search')?document.getElementById('market-search').value:'').toLowerCase();
  const af = STATE.activeFilters;

  let items = [...MARKET_ITEMS];
  // category chip filter
  if (filter !== 'all') items = items.filter(i=>i.cat===filter);
  // advanced filters
  if (af.cat && af.cat !== 'all') items = items.filter(i=>i.cat===af.cat);
  if (af.minPrice !== null) items = items.filter(i=>i.price>=af.minPrice);
  if (af.maxPrice !== null) items = items.filter(i=>i.price<=af.maxPrice);
  if (af.minRating > 0) items = items.filter(i=>i.rating>=af.minRating);
  if (af.badge && af.badge !== 'all') items = items.filter(i=>i.badge===af.badge);
  if (af.free) items = items.filter(i=>i.price===0);
  if (af.sale) items = items.filter(i=>i.old!==null);
  if (af.hot) items = items.filter(i=>i.badge==='hot');
  if (searchVal) items = items.filter(i=>i.name.toLowerCase().includes(searchVal));

  if (sort==='price_asc') items.sort((a,b)=>a.price-b.price);
  else if (sort==='price_desc') items.sort((a,b)=>b.price-a.price);
  else if (sort==='rating') items.sort((a,b)=>b.rating-a.rating);
  else if (sort==='new') items.sort((a,b)=>b.isNew-a.isNew);

  if (!items.length) {
    grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text3);font-size:14px">🔍 Ничего не найдено</div>`;
    return;
  }
  grid.innerHTML = items.map((it,idx)=>{
    const isFav = STATE.favorites.some(f=>f.id===it.id);
    const userRating = STATE.userRatings[it.id]||0;
    const displayRating = STATE.userRatings[it.id]?((it.rating*it.votes+userRating)/(it.votes+1)).toFixed(1):it.rating;
    const reviewCount = STATE.userReviews[it.id] ? (it.votes+1) : it.votes;
    return `
    <div class="market-card" style="animation-delay:${idx*.05}s">
      <div class="market-card-img">
        ${it.badge?`<span class="market-badge ${it.badge}">${it.badge==='new'?'NEW':it.badge==='hot'?'HOT':'SALE'}</span>`:''}
        <button class="fav-btn-market" onclick="toggleFav(${it.id},event)">${isFav?'❤️':'🤍'}</button>
        ${it.emoji}
      </div>
      <div class="market-card-body">
        <div class="market-card-name">${it.name}</div>
        <div class="market-card-price">${it.price===0?'Бесплатно':it.price+'₽'}${it.old?`<s>${it.old}₽</s>`:''}</div>
        <div class="star-rating-row">
          <div class="stars" id="stars-${it.id}">
            ${[1,2,3,4,5].map(s=>`<span class="star ${s<=(userRating||Math.round(it.rating))?'filled':''}" onclick="openReviewModal(${it.id},event)">★</span>`).join('')}
          </div>
          <span class="rating-val">${displayRating}</span>
          <span class="review-count-badge">${reviewCount}</span>
        </div>
        ${(STATE.myListingIds && STATE.myListingIds.has(it.id))
          ? '<button class="del-btn" onclick="deleteListing('+it.id+',event)">🗑 Удалить</button>'
          : '<button class="add-to-cart" onclick="addToCart('+it.id+')">'+(it.price===0?'+ Откликнуться':'+ В корзину')+'</button>'
        }
      </div>
    </div>`}).join('');
}

function setChip(el,cat){
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active'); STATE.activeFilter=cat; buildMarket(cat);
}
function setSort(el,sortKey){
  document.querySelectorAll('.sort-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active'); STATE.activeSort=sortKey; buildMarket();
}
function filterMarket(val){ buildMarket(); }

/* ════════════════════════════════════════════════════
   6. REVIEW / RATING MODAL
════════════════════════════════════════════════════ */
let pendingReviewStars = 0;
function openReviewModal(id, e) {
  if(e) e.stopPropagation();
  const item = MARKET_ITEMS.find(i=>i.id===id);
  if (!item) return;
  STATE.reviewTarget = id;
  pendingReviewStars = STATE.userRatings[id] || 0;
  document.getElementById('review-item-name').textContent = item.emoji + ' ' + item.name;
  document.getElementById('review-comment').value = (STATE.userReviews[id]||{}).comment || '';
  renderReviewStars(pendingReviewStars);
  const labels = ['','Ужасно 😠','Плохо 😕','Нормально 🙂','Хорошо 👍','Отлично! 🔥'];
  document.getElementById('review-star-label').textContent = pendingReviewStars ? labels[pendingReviewStars] : 'Нажмите на звезду';
  openModal('review-modal');
}
function setReviewStar(n) {
  pendingReviewStars = n;
  renderReviewStars(n);
  const labels = ['','Ужасно 😠','Плохо 😕','Нормально 🙂','Хорошо 👍','Отлично! 🔥'];
  document.getElementById('review-star-label').textContent = labels[n];
}
function renderReviewStars(n) {
  document.querySelectorAll('.review-star-big').forEach(s=>{
    s.classList.toggle('filled', parseInt(s.dataset.s) <= n);
  });
}
function submitReview() {
  if (!pendingReviewStars) { showToast('❗ Поставьте оценку'); return; }
  const id = STATE.reviewTarget;
  const comment = document.getElementById('review-comment').value.trim();
  STATE.userRatings[id] = pendingReviewStars;
  STATE.userReviews[id] = { stars: pendingReviewStars, comment };
  closeModal('review-modal');
  showToast(`⭐ Отзыв отправлен! Оценка: ${pendingReviewStars}/5`);
  sendPushNotification('⭐','Отзыв принят!','Спасибо за оценку '+pendingReviewStars+'/5');
  buildMarket();
}

/* ════════════════════════════════════════════════════
   CART
════════════════════════════════════════════════════ */
function addToCart(id){
  const item=MARKET_ITEMS.find(i=>i.id===id); if(!item)return;
  STATE.cart.push({...item}); updateCartUI();
  const pop=document.getElementById('cart-pop');
  pop.textContent='✓ '+t('toast_added').replace('✅ ','');
  pop.classList.add('show'); setTimeout(()=>pop.classList.remove('show'),2000);
  sendPushNotification('🛒','Добавлено в корзину',item.name);
}
function updateCartUI(){
  const badge=document.getElementById('cart-badge');
  const count=STATE.cart.length;
  badge.textContent=count; badge.style.display=count>0?'flex':'none'; updateCartDesc();
}
function updateCartDesc(){
  const d=document.getElementById('cart-desc');
  if(d) d.textContent=STATE.cart.length+' товаров в корзине';
}
function openCart(){ buildCartModal(); openModal('cart-modal'); }
function buildCartModal(){
  const list=document.getElementById('cart-items-list');
  const totalEl=document.getElementById('cart-total-val');
  const lbl=document.getElementById('cart-total-label'); if(lbl) lbl.textContent=t('cart_total');
  const ct=document.getElementById('cart-title'); if(ct) ct.textContent=t('cart_title');
  if(!STATE.cart.length){ list.innerHTML=`<div style="text-align:center;padding:32px;color:var(--text3)">${t('cart_empty')}</div>`; totalEl.textContent='0 ₽'; return; }
  list.innerHTML=STATE.cart.map((item,idx)=>`
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">${item.price===0?'Бесплатно':item.price+' ₽'}</div></div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})">✕</button>
    </div>`).join('');
  const total=STATE.cart.reduce((s,i)=>s+(i.price||0),0);
  totalEl.textContent=total+' ₽';
}
function removeFromCart(idx){ STATE.cart.splice(idx,1); updateCartUI(); buildCartModal(); }
function doCheckout(){
  if(!STATE.cart.length)return;
  const total=STATE.cart.reduce((s,i)=>s+(i.price||0),0);
  if(STATE.wallet<total){ showToast('❗ Недостаточно средств'); return; }
  STATE.wallet-=total;
  STATE.walletTx.unshift({name:`Заказ (${STATE.cart.length} тов.)`,amount:-total,date:new Date().toLocaleDateString('ru'),type:'minus'});
  const deals=parseInt(document.getElementById('pstat-deals').textContent)||0;
  document.getElementById('pstat-deals').textContent=deals+STATE.cart.length;
  STATE.cart=[]; updateCartUI(); closeModal('cart-modal');
  showToast(t('toast_checkout'));
  sendPushNotification('✅','Заказ оформлен!','Ваш заказ на '+total+' ₽ принят в обработку');
  updateWalletDesc();
}

/* ════════════════════════════════════════════════════
   FAVORITES
════════════════════════════════════════════════════ */
function toggleFav(id,e){
  if(e) e.stopPropagation();
  const item=MARKET_ITEMS.find(i=>i.id===id); if(!item)return;
  const idx=STATE.favorites.findIndex(f=>f.id===id);
  if(idx>-1){ STATE.favorites.splice(idx,1); showToast(t('toast_unfav')); }
  else { STATE.favorites.push({...item}); showToast(t('toast_fav')); sendPushNotification('❤️','Добавлено в избранное',item.name); }
  updateFavUI(); buildMarket();
}
function updateFavUI(){
  const badge=document.getElementById('fav-badge');
  const count=STATE.favorites.length;
  badge.textContent=count; badge.style.display=count>0?'flex':'none'; updateFavDesc();
}
function updateFavDesc(){
  const d=document.getElementById('fav-desc');
  if(d) d.textContent=STATE.favorites.length+' товаров в избранном';
}
function openFav(){ buildFavModal(); openModal('fav-modal'); }
function buildFavModal(){
  const list=document.getElementById('fav-items-list');
  const ft=document.getElementById('fav-title'); if(ft) ft.textContent=t('fav_title');
  if(!STATE.favorites.length){ list.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text3)">${t('fav_empty')}</div>`; return; }
  list.innerHTML=STATE.favorites.map(item=>`
    <div class="fav-card">
      <div class="fav-card-emoji">${item.emoji}</div>
      <div class="fav-card-name">${item.name}</div>
      <div class="fav-card-price">${item.price===0?'Бесплатно':item.price+'₽'}</div>
      <button class="fav-remove" onclick="toggleFav(${item.id}); buildFavModal()">✕ Убрать</button>
    </div>`).join('');
}

/* ════════════════════════════════════════════════════
   HOME SERVICES & CLANS
════════════════════════════════════════════════════ */
function buildHomeServices(){
  const el=document.getElementById('home-services-scroll'); if(!el)return;
  el.innerHTML=MARKET_ITEMS.slice(0,4).map((it,idx)=>`
    <div class="service-card" style="animation-delay:${idx*.05}s" onclick="navTo('market')">
      <div class="service-card-img">${it.emoji}</div>
      <div class="service-card-body">
        <div class="service-card-name">${it.name}</div>
        <div class="service-card-seller">⭐ ${it.rating}</div>
        <div class="service-card-footer">
          <div class="service-price">${it.price===0?'Free':it.price+'₽'}</div>
        </div>
      </div>
    </div>`).join('');
}

let CLANS_DATA = [
  {id:1,emoji:'🔥',bg:'rgba(200,16,46,.15)',name:'Red Legion',desc:'Ищем carry/mid игроков 4k+',count:24,max:30,open:true,members:[{name:'ProCarry',role:'leader'},{name:'Midder99',role:'member'},{name:'SupportKing',role:'member'}]},
  {id:2,emoji:'⚡',bg:'rgba(245,197,24,.12)',name:'Thunder Force',desc:'Турниры 5x5 каждую пятницу',count:30,max:30,open:false,members:[{name:'Zeus_Pro',role:'leader'},{name:'Storm_GG',role:'member'}]},
  {id:3,emoji:'❄️',bg:'rgba(79,195,247,.12)',name:'Ice Breakers',desc:'Casual + competitive mix',count:18,max:25,open:true,members:[{name:'IceDragon',role:'leader'},{name:'FrostMage',role:'member'},{name:'ColdBear',role:'member'}]},
];

function buildHomeClans(){
  const el=document.getElementById('home-clans-grid'); if(!el)return;
  el.innerHTML=CLANS_DATA.map((c,i)=>{
    const joined=STATE.joinedClans.has(c.id);
    const canJoin=c.open&&!joined;
    return `<div class="clan-card" style="animation-delay:${i*.05}s" onclick="navTo('clans')">
      <div class="clan-avatar" style="background:${c.bg}">${c.emoji}</div>
      <div class="clan-info">
        <div class="clan-name">${c.name}</div>
        <div class="clan-desc">${c.desc}</div>
        <div class="clan-meta">
          <span class="clan-badge">👥 ${c.count}/${c.max}</span>
          <span class="clan-badge ${c.open?'open':''}">${c.open?'Открыт':'Закрыт'}</span>
        </div>
      </div>
      <button class="clan-join" style="${!canJoin?'background:var(--border);color:var(--text2)':''}" onclick="joinClan(${c.id});event.stopPropagation()">
        ${joined?'✓ Вступил':c.open?'Вступить':'Полон'}
      </button>
    </div>`;}).join('');
}

function joinClan(id){
  const clan=CLANS_DATA.find(c=>c.id===id); if(!clan)return;
  if(!clan.open){showToast(t('toast_clan_full'));return;}
  if(STATE.joinedClans.has(id)){showToast('✅ Вы уже в этом клане!');return;}
  STATE.joinedClans.add(id); clan.count++;
  clan.members.push({name:STATE.user.nick,role:'member'});
  const clans=parseInt(document.getElementById('pstat-clans').textContent)||0;
  document.getElementById('pstat-clans').textContent=clans+1;
  showToast(t('toast_clan')+clan.name+'!');
  sendPushNotification('⚔️','Вы вступили в клан!',clan.name+' ждёт вас на арене!');
  buildHomeClans();
  buildClansTab('browse');
}

/* ════════════════════════════════════════════════════
   4. CLANS SCREEN — BROWSE + MY + CREATE
════════════════════════════════════════════════════ */
let activeClansTab = 'browse';
function switchClansTab(tab, el) {
  activeClansTab = tab;
  document.querySelectorAll('.clans-tab').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  else { const tabs=['browse','my','create']; const btns=document.querySelectorAll('.clans-tab'); btns[tabs.indexOf(tab)]&&btns[tabs.indexOf(tab)].classList.add('active'); }
  buildClansTab(tab);
}
function buildClansTab(tab) {
  const content = document.getElementById('clans-tab-content'); if(!content)return;
  if (tab === 'browse') {
    content.innerHTML = `
      <div style="padding:0 16px 10px">
        <div style="position:relative">
          <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:17px;color:var(--text3)">🔍</span>
          <input class="search-input" style="padding-left:44px" type="search" id="clan-search" placeholder="Поиск клана..." oninput="filterClans(this.value)"/>
        </div>
      </div>
      <div id="clans-browse-list" style="padding:0 16px;display:flex;flex-direction:column;gap:10px"></div>`;
    renderClanList(CLANS_DATA);
  } else if (tab === 'my') {
    const myClans = CLANS_DATA.filter(c=>STATE.joinedClans.has(c.id)||STATE.myClanIds.has(c.id));
    if (!myClans.length) {
      content.innerHTML=`<div style="text-align:center;padding:48px 24px;color:var(--text3)">
        <div style="font-size:48px;margin-bottom:12px">⚔️</div>
        <div style="font-size:16px;font-weight:600;color:var(--text2)">Вы не состоите ни в одном клане</div>
        <div style="font-size:13px;margin-top:8px">Вступите в существующий или создайте свой</div>
        <button class="btn-primary" style="margin-top:20px;max-width:200px" onclick="switchClansTab('create',null)">Создать клан</button>
      </div>`;
    } else {
      content.innerHTML = `<div style="padding:0 16px;display:flex;flex-direction:column;gap:12px" id="my-clans-list"></div>`;
      document.getElementById('my-clans-list').innerHTML = myClans.map(c=>`
        <div class="clan-detail-card">
          <div class="clan-detail-header">
            <div class="clan-detail-avatar" style="background:${c.bg}">${c.emoji}</div>
            <div>
              <div class="clan-detail-name">${c.name}</div>
              <div class="clan-detail-desc">${c.desc}</div>
              <div class="clan-meta" style="margin-top:6px">
                <span class="clan-badge">👥 ${c.count}/${c.max}</span>
                <span class="clan-badge ${c.open?'open':''}">${c.open?'Открыт':'Закрыт'}</span>
                ${STATE.myClanIds.has(c.id)?'<span class="clan-badge" style="background:rgba(245,197,24,.12);color:var(--gold);border-color:rgba(245,197,24,.3)">👑 Вы создатель</span>':''}
              </div>
            </div>
          </div>
          <div class="clan-members-title">Участники (${c.members.length})</div>
          ${c.members.map(m=>`
            <div class="clan-member-row">
              <div class="clan-member-avatar">${m.name.slice(0,2).toUpperCase()}</div>
              <div class="clan-member-name">${m.name}</div>
              <span class="clan-member-role ${m.role==='leader'?'leader':''}">${m.role==='leader'?'👑 Лидер':'Участник'}</span>
            </div>`).join('')}
        </div>`).join('');
    }
  } else if (tab === 'create') {
    content.innerHTML = `
      <div class="create-clan-form">
        <div style="text-align:center;margin-bottom:4px">
          <div style="font-size:48px" id="clan-emoji-preview">⚔️</div>
          <div style="font-size:11px;color:var(--text3);margin-top:4px">Нажми для смены эмодзи</div>
          <div id="clan-emoji-picker" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:10px;background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:12px">
            ${['⚔️','🔥','⚡','❄️','🐉','🦁','🌑','💀','🏆','🌊','🛡️','🎯'].map(e=>`<span style="font-size:24px;cursor:pointer;padding:4px;border-radius:6px;transition:background .15s" onclick="selectClanEmoji('${e}')" onmouseenter="this.style.background='var(--border)'" onmouseleave="this.style.background=''">${e}</span>`).join('')}
          </div>
        </div>
        <div><div class="field-label">Название клана</div><input class="field-input" type="text" id="new-clan-name" placeholder="Например: Dragon Force"/></div>
        <div><div class="field-label">Описание</div><textarea class="field-input" id="new-clan-desc" rows="2" placeholder="О чём ваш клан..."></textarea></div>
        <div><div class="field-label">Максимум участников</div>
          <select class="select-input" id="new-clan-max">
            <option value="10">10 человек</option>
            <option value="20">20 человек</option>
            <option value="30" selected>30 человек</option>
            <option value="50">50 человек</option>
          </select>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:14px">
          <div>
            <div style="font-size:14px;font-weight:500;color:var(--text)">Открытый клан</div>
            <div style="font-size:11px;color:var(--text3)">Любой может вступить без подтверждения</div>
          </div>
          <div class="toggle on" id="new-clan-open" onclick="this.classList.toggle('on')"></div>
        </div>
        <button class="btn-primary" onclick="createClan()">⚔️ Создать клан</button>
      </div>`;
  }
}
let selectedClanEmoji = '⚔️';
function selectClanEmoji(e) {
  selectedClanEmoji = e;
  document.getElementById('clan-emoji-preview').textContent = e;
}
function createClan() {
  const name = (document.getElementById('new-clan-name')||{}).value||'';
  const desc = (document.getElementById('new-clan-desc')||{}).value||'';
  const maxEl = document.getElementById('new-clan-max');
  const openEl = document.getElementById('new-clan-open');
  if (!name.trim()) { showToast('❗ Введите название клана'); return; }
  const max = parseInt(maxEl?maxEl.value:30)||30;
  const open = openEl?openEl.classList.contains('on'):true;
  const colors = ['rgba(200,16,46,.15)','rgba(245,197,24,.12)','rgba(79,195,247,.12)','rgba(76,175,80,.12)'];
  const newClan = {
    id: Date.now(), emoji: selectedClanEmoji,
    bg: colors[Math.floor(Math.random()*colors.length)],
    name: name.trim(), desc: desc.trim()||'Новый клан VIKTOR.GG',
    count: 1, max, open, members: [{name: STATE.user.nick, role:'leader'}]
  };
  CLANS_DATA.unshift(newClan);
  STATE.myClanIds.add(newClan.id);
  STATE.joinedClans.add(newClan.id);
  const clans=parseInt(document.getElementById('pstat-clans').textContent)||0;
  document.getElementById('pstat-clans').textContent=clans+1;
  showToast('🎉 Клан "'+newClan.name+'" создан!');
  sendPushNotification('⚔️','Клан создан!','Вы основали клан "'+newClan.name+'"');
  switchClansTab('my', null);
  buildHomeClans();
}
function filterClans(val) {
  const filtered = val ? CLANS_DATA.filter(c=>c.name.toLowerCase().includes(val.toLowerCase())||c.desc.toLowerCase().includes(val.toLowerCase())) : CLANS_DATA;
  renderClanList(filtered);
}
function renderClanList(clans) {
  const list = document.getElementById('clans-browse-list'); if(!list)return;
  if(!clans.length){ list.innerHTML=`<div style="text-align:center;padding:32px;color:var(--text3)">🔍 Кланы не найдены</div>`; return; }
  list.innerHTML = clans.map((c,i)=>{
    const joined=STATE.joinedClans.has(c.id);
    const canJoin=c.open&&!joined;
    return `<div class="clan-card" style="animation-delay:${i*.05}s" onclick="showClanDetail(${c.id})">
      <div class="clan-avatar" style="background:${c.bg}">${c.emoji}</div>
      <div class="clan-info">
        <div class="clan-name">${c.name}</div>
        <div class="clan-desc">${c.desc}</div>
        <div class="clan-meta">
          <span class="clan-badge">👥 ${c.count}/${c.max}</span>
          <span class="clan-badge ${c.open?'open':''}">${c.open?'Открыт':'Закрыт'}</span>
        </div>
      </div>
      <button class="clan-join" style="${!canJoin?'background:var(--border);color:var(--text2)':''}" onclick="joinClan(${c.id});event.stopPropagation()">
        ${joined?'✓ Вступил':c.open?'Вступить':'Полон'}
      </button>
    </div>`;}).join('');
}
function showClanDetail(id) {
  const clan = CLANS_DATA.find(c=>c.id===id); if(!clan)return;
  // show detail inline
  const content = document.getElementById('clans-tab-content');
  content.innerHTML = `
    <div style="padding:0 16px">
      <button style="background:none;border:none;color:var(--text2);font-size:13px;cursor:pointer;padding:8px 0;display:flex;align-items:center;gap:6px" onclick="buildClansTab('browse')">← Назад</button>
      <div class="clan-detail-card">
        <div class="clan-detail-header">
          <div class="clan-detail-avatar" style="background:${clan.bg}">${clan.emoji}</div>
          <div>
            <div class="clan-detail-name">${clan.name}</div>
            <div class="clan-detail-desc">${clan.desc}</div>
            <div class="clan-meta" style="margin-top:6px">
              <span class="clan-badge">👥 ${clan.count}/${clan.max}</span>
              <span class="clan-badge ${clan.open?'open':''}">${clan.open?'Открыт':'Закрыт'}</span>
            </div>
          </div>
        </div>
        ${!STATE.joinedClans.has(clan.id) && clan.open ?
          `<button class="btn-primary" style="margin-bottom:16px" onclick="joinClan(${clan.id});buildClansTab('browse')">Вступить в клан</button>` :
          STATE.joinedClans.has(clan.id) ? `<div style="background:rgba(76,175,80,.1);border:1px solid rgba(76,175,80,.3);border-radius:var(--r);padding:12px;text-align:center;color:var(--green);font-weight:600;margin-bottom:16px">✅ Вы состоите в этом клане</div>` : ''}
        <div class="clan-members-title">Участники (${clan.members.length})</div>
        ${clan.members.map(m=>`
          <div class="clan-member-row">
            <div class="clan-member-avatar">${m.name.slice(0,2).toUpperCase()}</div>
            <div class="clan-member-name">${m.name}</div>
            <span class="clan-member-role ${m.role==='leader'?'leader':''}">${m.role==='leader'?'👑 Лидер':'Участник'}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ════════════════════════════════════════════════════
   2. CHAT — USER SEARCH
════════════════════════════════════════════════════ */
const ALL_USERS = [
  {name:'Invoker_Pro',avatar:'🧙',bg:'rgba(79,195,247,.15)',mmr:6500,online:true,role:'Midlaner'},
  {name:'Red Legion',avatar:'🔥',bg:'rgba(200,16,46,.15)',mmr:null,online:true,role:'Клан'},
  {name:'Phantom_GG',avatar:'👻',bg:'rgba(245,197,24,.12)',mmr:5800,online:false,role:'Carry'},
  {name:'Zeus_Supreme',avatar:'⚡',bg:'rgba(200,16,46,.1)',mmr:7200,online:true,role:'Mid'},
  {name:'Shadow_Fiend',avatar:'😈',bg:'rgba(130,0,200,.15)',mmr:5100,online:false,role:'Carry'},
  {name:'Crystal_Queen',avatar:'💎',bg:'rgba(79,195,247,.2)',mmr:4800,online:true,role:'Support'},
  {name:'Nature_God',avatar:'🌿',bg:'rgba(76,175,80,.15)',mmr:6100,online:true,role:'Offlaner'},
  {name:'Dragon_Knight',avatar:'🐉',bg:'rgba(200,50,16,.15)',mmr:5900,online:false,role:'Carry'},
];

function searchUsers(val) {
  const results = document.getElementById('user-search-results');
  if (!val.trim()) { results.classList.remove('visible'); return; }
  const found = ALL_USERS.filter(u=>u.name.toLowerCase().includes(val.toLowerCase()));
  if (!found.length) {
    results.innerHTML = `<div class="no-results-msg">Игроки не найдены по запросу "${val}"</div>`;
    results.classList.add('visible'); return;
  }
  results.innerHTML = found.map(u=>`
    <div class="user-search-item">
      <div class="user-search-avatar" style="background:${u.bg}">${u.avatar}</div>
      <div class="user-search-info">
        <div class="user-search-name">${u.name}</div>
        <div class="user-search-meta">${u.role}${u.mmr?' • MMR '+u.mmr:''} • ${u.online?'🟢 Онлайн':'⚫ Оффлайн'}</div>
      </div>
      <button class="user-search-msg-btn" onclick="startChatWithUser('${u.name}','${u.avatar}','${u.bg}',${u.online})">💬</button>
    </div>`).join('');
  results.classList.add('visible');
}

function startChatWithUser(name, avatar, bg, online) {
  document.getElementById('user-search-results').classList.remove('visible');
  document.getElementById('chat-user-search').value = '';
  // Check if chat already exists
  let chat = CHATS_DATA.find(c=>c.name===name);
  if (!chat) {
    chat = {
      id: Date.now(), name, avatar, bg, online,
      last: 'Начните диалог...',
      time: 'сейчас', unread: 0,
      messages: []
    };
    CHATS_DATA.unshift(chat);
    buildChats();
  }
  setTimeout(()=>openChat(chat.id), 100);
}

const CHATS_DATA = [
  {id:1,name:'Invoker_Pro',avatar:'🧙',bg:'rgba(79,195,247,.15)',online:true,last:'Хорошо, буду онлайн в 20:00',time:'сейчас',unread:2,messages:[
    {me:false,text:'Привет! Интересует буст до Divine?',time:'19:42'},
    {me:true,text:'Да, сколько стоит +500 MMR?',time:'19:43'},
    {me:false,text:'320₽, беру в работу за 2-3 дня',time:'19:44'},
    {me:true,text:'Отлично, оформляю заказ',time:'19:45'},
    {me:false,text:'Хорошо, буду онлайн в 20:00',time:'19:46'},
  ]},
  {id:2,name:'Red Legion',avatar:'🔥',bg:'rgba(200,16,46,.15)',online:true,last:'Ждём тебя на тренировке!',time:'5 мин',unread:5,messages:[
    {me:false,text:'Привет всем! Сегодня в 21:00 тренировочный матч',time:'18:00'},
    {me:true,text:'Я буду!',time:'18:05'},
    {me:false,text:'Ждём тебя на тренировке!',time:'18:30'},
  ]},
  {id:3,name:'Phantom_GG',avatar:'👻',bg:'rgba(245,197,24,.12)',online:false,last:'Отправил скриншот реплея',time:'1 ч',unread:0,messages:[
    {me:true,text:'Можешь разобрать мой последний матч?',time:'17:00'},
    {me:false,text:'Да, кинь ссылку на реплей',time:'17:05'},
    {me:false,text:'Отправил скриншот реплея',time:'17:30'},
  ]},
];

function buildChats(){
  const list=document.getElementById('chat-list'); if(!list)return;
  list.innerHTML=CHATS_DATA.map((c,i)=>`
    <div class="chat-item" style="animation-delay:${i*.06}s" onclick="openChat(${c.id})">
      <div class="chat-avatar" style="background:${c.bg}">
        ${c.avatar}${c.online?'<div class="online-dot"></div>':''}
      </div>
      <div class="chat-info">
        <div class="chat-name"><span>${c.name}</span><span class="chat-time">${c.time}</span></div>
        <div class="chat-preview">${c.last}</div>
      </div>
      ${c.unread?`<div class="chat-unread">${c.unread}</div>`:''}
    </div>`).join('');
}

let activeChatId=null;
function openChat(id){
  activeChatId=id;
  const chat=CHATS_DATA.find(c=>c.id===id); if(!chat)return;
  document.getElementById('chat-peer-avatar').textContent=chat.avatar;
  document.getElementById('chat-peer-avatar').style.background=chat.bg;
  document.getElementById('chat-peer-name').textContent=chat.name;
  document.getElementById('chat-peer-status').textContent=chat.online?'● Онлайн':'○ Оффлайн';
  chat.unread=0; buildChats();
  renderMessages(chat.messages);
  document.getElementById('open-chat-screen').classList.add('open');
  setTimeout(()=>{const a=document.getElementById('messages-area');a.scrollTop=a.scrollHeight;},100);
}
function renderMessages(msgs){
  const area=document.getElementById('messages-area');
  area.innerHTML=msgs.map((m,i)=>`
    <div class="msg ${m.me?'me':'them'}" style="animation-delay:${i*.04}s">
      <div class="msg-bubble">${m.text}</div>
      <div class="msg-time">${m.time}</div>
    </div>`).join('');
}
function closeChat(){document.getElementById('open-chat-screen').classList.remove('open');}
function sendMessage(){
  const input=document.getElementById('chat-input');
  const text=input.value.trim(); if(!text)return;
  input.value='';
  const chat=CHATS_DATA.find(c=>c.id===activeChatId); if(!chat)return;
  const now=new Date();
  const time=`${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;
  chat.messages.push({me:true,text,time}); chat.last=text;
  renderMessages(chat.messages);
  setTimeout(()=>{const a=document.getElementById('messages-area');a.scrollTop=a.scrollHeight;},50);
  setTimeout(()=>{
    const replies=['Понял, принял! 👍','Отлично, договорились!','Буду онлайн через час','ОК, проверю и напишу','Звучит хорошо 🔥','⚔️ GG!','Принято, жди ответ'];
    const reply=replies[Math.floor(Math.random()*replies.length)];
    const t2=new Date(); const t2s=`${t2.getHours()}:${String(t2.getMinutes()).padStart(2,'0')}`;
    chat.messages.push({me:false,text:reply,time:t2s}); chat.last=reply;
    buildChats();
    if(activeChatId===chat.id){ renderMessages(chat.messages); setTimeout(()=>{const a=document.getElementById('messages-area');a.scrollTop=a.scrollHeight;},50); }
    sendPushNotification('💬',chat.name,reply);
  },1200+Math.random()*1000);
}
function msgKeydown(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}}
function newChatPrompt(){showToast(t('new_chat'));}

/* ════════════════════════════════════════════════════
   PROFILE
════════════════════════════════════════════════════ */
function updateProfileUI(){ setUserUI(); updateCartDesc(); updateFavDesc(); updateWalletDesc(); }
function updateWalletDesc(){
  const d=document.getElementById('wallet-desc'); if(d) d.textContent='Баланс: '+STATE.wallet.toLocaleString()+' ₽';
}
function prefillEdit(){
  document.getElementById('edit-nick').value=STATE.user.nick;
  document.getElementById('edit-mmr').value=STATE.user.mmr;
  document.getElementById('edit-bio').value=STATE.user.bio||'';
}
function saveProfile(){
  const nick=document.getElementById('edit-nick').value.trim();
  const mmr=parseInt(document.getElementById('edit-mmr').value)||STATE.user.mmr;
  const bio=document.getElementById('edit-bio').value.trim();
  if(!nick){showToast(t('toast_fill'));return;}
  STATE.user.nick=nick; STATE.user.mmr=mmr; STATE.user.bio=bio;
  setUserUI(); closeModal('edit-profile-modal'); showToast(t('toast_saved'));
}
function buildStatsDetail(){
  const el=document.getElementById('stats-detail-content');
  const t2=document.getElementById('stats-modal-title'); if(t2) t2.textContent=t('stats_modal_title');
  const stats=[['🎮 Матчей сыграно','1,247'],['⚔️ WR','54.2%'],['🏆 MMR',STATE.user.mmr],['🦸 Любимый герой','Invoker'],['💀 KDA','4.7'],['⏱ Среднее время','38 мин'],['🥇 Топ роль','Midlaner'],['📅 Последний матч','сегодня']];
  el.innerHTML=stats.map(([label,val])=>`
    <div class="stat-detail-row">
      <div class="stat-detail-label">${label}</div>
      <div class="stat-detail-val">${val}</div>
    </div>`).join('');
}
function buildWallet(){
  const wt=document.getElementById('wallet-title'); if(wt) wt.textContent=t('wallet_title');
  document.getElementById('wallet-amount').textContent=STATE.wallet.toLocaleString()+' ₽';
  document.getElementById('wallet-balance-lbl').textContent=t('wallet_balance_lbl');
  document.getElementById('btn-add-funds').textContent=t('btn_add_funds');
  document.getElementById('btn-withdraw').textContent=t('btn_withdraw');
  document.getElementById('wallet-history-title').textContent=t('wallet_history_title');
  document.getElementById('wallet-tx-list').innerHTML=STATE.walletTx.map(tx=>`
    <div class="wallet-tx">
      <div><div class="wallet-tx-name">${tx.name}</div><div class="wallet-tx-date">${tx.date}</div></div>
      <div class="wallet-tx-amount ${tx.type}">${tx.amount>0?'+':''}${tx.amount} ₽</div>
    </div>`).join('');
}
function addFunds(){
  STATE.wallet+=500;
  STATE.walletTx.unshift({name:'Пополнение',amount:+500,date:new Date().toLocaleDateString('ru'),type:'plus'});
  buildWallet(); updateWalletDesc();
  showToast(t('toast_funds_added'));
  sendPushNotification('💰','Пополнение баланса!','+500 ₽ добавлено на счёт');
}
function withdrawFunds(){
  if(STATE.wallet<100){showToast('❗ Минимум 100 ₽');return;}
  showToast(t('toast_withdraw'));
  sendPushNotification('💸','Вывод средств','Запрос на вывод обрабатывается');
}

/* ════════════════════════════════════════════════════
   SETTINGS TOGGLES
════════════════════════════════════════════════════ */
function toggleSetting(el, type){
  el.classList.toggle('on');
  const on=el.classList.contains('on');
  if(type==='notif'){
    STATE.pushEnabled=on;
    showToast(on?t('toast_notif_on'):t('toast_notif_off'));
    document.getElementById('notif-setting-desc').textContent=on?'Push-уведомления включены':'Push-уведомления выключены';
    if(on){ sendPushNotification('🔔','Уведомления включены','Вы будете получать Push-уведомления'); }
    // Request browser push permission
    if(on && 'Notification' in window && Notification.permission==='default'){
      Notification.requestPermission().then(perm=>{ if(perm==='granted') showToast('✅ Push-разрешение получено!'); });
    }
  }
}

/* ════════════════════════════════════════════════════
   PRIVACY
════════════════════════════════════════════════════ */
function buildPrivacy(){
  const pt=document.getElementById('privacy-modal-title'); if(pt) pt.textContent=t('privacy_modal_title');
  document.getElementById('privacy-content').innerHTML=t('privacy_text');
}

/* ════════════════════════════════════════════════════
   NEW LISTING
════════════════════════════════════════════════════ */
function publishListing(){
  const name=document.getElementById('listing-name').value.trim();
  const price=parseInt(document.getElementById('listing-price').value)||0;
  const cat=document.getElementById('listing-cat').value;
  if(!name){showToast(t('toast_fill'));return;}
  const emojis={boost:'⚔️',coaching:'🎯',items:'🎒',team:'👥',acc:'🔑'};
  MARKET_ITEMS.unshift({id:Date.now(),emoji:emojis[cat]||'🎮',name,price,old:null,badge:'new',cat,rating:5.0,votes:0,isNew:true});
  document.getElementById('listing-name').value='';
  document.getElementById('listing-price').value='';
  document.getElementById('listing-desc').value='';
  closeModal('listing-modal'); showToast(t('toast_published'));
  buildMarket(); sendPushNotification('🎉','Объявление опубликовано!','"'+name+'" теперь на маркете');
}

/* ════════════════════════════════════════════════════
   NOTIFICATIONS
════════════════════════════════════════════════════ */
function addNotification(icon,msg){
  STATE.notifications.unshift({icon,msg,time:'только что',read:false});
  updateNotifDots();
}
function updateNotifDots(){
  const unread=STATE.notifications.filter(n=>!n.read).length;
  ['notif-dot-home','notif-dot-profile','notif-dot-clans'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.style.display=unread>0?'block':'none';
  });
}
function openNotifPanel(){
  const nt=document.getElementById('notif-title-text'); if(nt) nt.textContent=t('notif_panel_title');
  buildNotifList();
  document.getElementById('notif-panel').classList.add('open');
  document.getElementById('notif-overlay').classList.add('active');
}
function closeNotifPanel(){
  document.getElementById('notif-panel').classList.remove('open');
  document.getElementById('notif-overlay').classList.remove('active');
  STATE.notifications.forEach(n=>n.read=true);
  updateNotifDots(); buildNotifList();
}
function buildNotifList(){
  const list=document.getElementById('notif-list'); if(!list)return;
  if(!STATE.notifications.length){ list.innerHTML=`<div style="padding:24px;text-align:center;color:var(--text3)">Нет уведомлений</div>`; return; }
  list.innerHTML=STATE.notifications.map(n=>`
    <div class="notif-item ${n.read?'':'unread'}" onclick="closeNotifPanel()">
      <div class="notif-icon">${n.icon}</div>
      <div class="notif-text"><div class="notif-msg">${n.msg}</div><div class="notif-time">${n.time}</div></div>
      ${!n.read?'<div class="notif-unread-dot"></div>':''}
    </div>`).join('');
}

/* ════════════════════════════════════════════════════
   MODAL HELPERS
════════════════════════════════════════════════════ */
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(el=>{
  el.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});
});

/* ════════════════════════════════════════════════════
   TOAST
════════════════════════════════════════════════════ */
let toastTimer;
function showToast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('show'),2500);
}

/* ════════════════════════════════════════════════════
   PREVENT DOUBLE-TAP ZOOM
════════════════════════════════════════════════════ */
let lastTap=0;
document.addEventListener('touchend',e=>{
  const now=Date.now(); if(now-lastTap<300) e.preventDefault(); lastTap=now;
},{passive:false});

/* ════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════ */
applyLang();
updateNotifDots();
STATE.activeFilters = {...FP};

// Simulate periodic push notifications when logged in
setTimeout(()=>{
  if(STATE.loggedIn && STATE.pushEnabled){
    const msgs=[
      {icon:'⚔️',title:'Новый матч!',msg:'Invoker_Pro зовёт тебя в игру'},
      {icon:'💰',title:'Новая сделка',msg:'Кто-то откликнулся на ваше объявление'},
      {icon:'🏆',title:'Турнир',msg:'Red Legion объявил тренировку на 21:00'},
    ];
    const m=msgs[Math.floor(Math.random()*msgs.length)];
    sendPushNotification(m.icon,m.title,m.msg);
  }
}, 8000);

/* ════════════════════════════════════════════════════
   PERSISTENCE LAYER (localStorage)
   Accounts saved by email, shared data (clans/announcements) saved globally
════════════════════════════════════════════════════ */

// ── Helpers ──────────────────────────────────────────
function LS_get(key, def) {
  try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : def; } catch(e){ return def; }
}
function LS_set(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch(e){}
}

// ── Shared data keys (visible to all users on this device/browser) ──
const KEY_SHARED_CLANS  = 'viktorgg_shared_clans_v2';
const KEY_SHARED_MARKET = 'viktorgg_shared_market_v2';
const KEY_SHARED_CHATS  = 'viktorgg_shared_chats_v2';
const KEY_ACCOUNTS      = 'viktorgg_accounts_v2';

// ── Load shared clans (merge with defaults) ──────────
function loadSharedClans() {
  const saved = LS_get(KEY_SHARED_CLANS, null);
  if (saved && Array.isArray(saved) && saved.length) {
    // Merge: keep default clans that haven't been deleted, add user-created ones
    const userCreated = saved.filter(c => c._userCreated);
    const defaults = CLANS_DATA.filter(c => !saved.find(s => s.id === c.id && s._deleted));
    // Merge join counts from saved into defaults
    const defWithCounts = defaults.map(d => {
      const match = saved.find(s => s.id === d.id);
      return match ? {...d, count: match.count, members: match.members || d.members} : d;
    });
    CLANS_DATA.length = 0;
    [...defWithCounts, ...userCreated].forEach(c => CLANS_DATA.push(c));
  }
}

// ── Save shared clans ──────────────────────────────
function saveSharedClans() {
  LS_set(KEY_SHARED_CLANS, CLANS_DATA.map(c => ({...c})));
}

// ── Load shared market listings ──────────────────────
let _defaultMarketCount = 0;
function loadSharedMarket() {
  _defaultMarketCount = MARKET_ITEMS.length;
  const userListings = LS_get(KEY_SHARED_MARKET, []);
  if (userListings.length) {
    MARKET_ITEMS.unshift(...userListings);
  }
}

// ── Save shared market listings ──────────────────────
function saveSharedMarket() {
  const userListings = MARKET_ITEMS.filter(i => i._userCreated && !i._deleted);
  LS_set(KEY_SHARED_MARKET, userListings);
}

// ── Dota 2 Stats: generate realistic stats deterministically by nickname ──
function generateDotaStats(nick) {
  // Seed random from nick characters for determinism
  let seed = 0;
  for (let i = 0; i < nick.length; i++) seed = (seed * 31 + nick.charCodeAt(i)) >>> 0;
  function rng(min, max) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return min + (seed / 0xFFFFFFFF) * (max - min);
  }
  const heroes = ['Invoker','Pudge','Juggernaut','Anti-Mage','Crystal Maiden','Phantom Assassin','Storm Spirit','Windranger','Dragon Knight','Templar Assassin','Shadow Fiend','Ember Spirit'];
  const roles = ['Midlaner','Carry','Support','Offlaner','Hard Support','Roamer'];
  const matches = Math.floor(rng(600, 3200));
  const wr = (rng(42, 62)).toFixed(1);
  const kda = (rng(2.1, 7.8)).toFixed(1);
  const avgTime = Math.floor(rng(28, 48));
  const heroIdx = Math.floor(rng(0, heroes.length - 0.01));
  const roleIdx = Math.floor(rng(0, roles.length - 0.01));
  const mmr = Math.floor(rng(1800, 8500) / 50) * 50;
  const daysAgo = Math.floor(rng(0, 5));
  const lastMatch = daysAgo === 0 ? 'сегодня' : daysAgo === 1 ? 'вчера' : daysAgo + ' дня назад';
  return { matches, wr, kda, avgTime, hero: heroes[heroIdx], role: roles[roleIdx], mmr, lastMatch };
}

// ── Account system ──────────────────────────────────
function getAccounts() { return LS_get(KEY_ACCOUNTS, {}); }
function saveAccounts(accs) { LS_set(KEY_ACCOUNTS, accs); }

function saveCurrentAccount() {
  if (!STATE.loggedIn || !STATE.user.email) return;
  const accs = getAccounts();
  accs[STATE.user.email] = {
    nick: STATE.user.nick,
    email: STATE.user.email,
    mmr: STATE.user.mmr,
    bio: STATE.user.bio || '',
    wallet: STATE.wallet,
    cart: STATE.cart,
    favorites: STATE.favorites,
    walletTx: STATE.walletTx,
    joinedClans: [...STATE.joinedClans],
    myClanIds: [...STATE.myClanIds],
    myListingIds: [...(STATE.myListingIds||[])],
    pushEnabled: STATE.pushEnabled,
    lightTheme: STATE.lightTheme,
    dotaStats: STATE.dotaStats,
    googleAccount: STATE.user.googleAccount || false,
  };
  saveAccounts(accs);
}

function loadAccount(email) {
  const accs = getAccounts();
  return accs[email] || null;
}

// ── Override doLogin to persist ──────────────────────
const _origDoLogin = doLogin;
window.doLogin = function() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const btn   = document.getElementById('btn-login');
  if (!email || !pass) { showToast(t('toast_fill')); return; }
  const accs = getAccounts();
  // Check if account exists with this email
  const acc = accs[email];
  if (!acc) { showToast('❌ Аккаунт не найден. Сначала зарегистрируйтесь.'); return; }
  // Simple password check (stored hashed not possible without backend, so we check by stored flag)
  if (acc.passHash && acc.passHash !== simpleHash(pass)) { showToast('❌ Неверный пароль'); return; }
  btn.classList.add('btn-ripple'); btn.textContent = '⏳ ...';
  setTimeout(() => {
    restoreAccountState(email, acc);
    btn.textContent = t('btn_login'); btn.classList.remove('btn-ripple');
    setUserUI(); showScreen('home');
    showToast(t('toast_welcome') + STATE.user.nick + '!');
    sendPushNotification('🎮', 'Добро пожаловать!', 'Вы вошли в VIKTOR.GG');
    runCounters();
  }, 1000);
};

// ── Override doRegister ──────────────────────────────
window.doRegister = function() {
  const nick  = document.getElementById('reg-nick').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-pass').value;
  const btn   = document.getElementById('btn-reg');
  if (!nick || !email || !pass) { showToast(t('toast_fill')); return; }
  if (pass.length < 6) { showToast(t('toast_passlen')); return; }
  const accs = getAccounts();
  if (accs[email]) { showToast('❌ Аккаунт с такой почтой уже существует'); return; }
  btn.classList.add('btn-ripple'); btn.textContent = '⏳ ...';
  setTimeout(() => {
    STATE.loggedIn = true;
    STATE.user = { nick, email, mmr: 0, bio: '', googleAccount: false };
    const stats = generateDotaStats(nick);
    STATE.user.mmr = stats.mmr;
    STATE.dotaStats = stats;
    STATE.myListingIds = new Set();
    accs[email] = {
      nick, email, mmr: stats.mmr, bio: '', wallet: 1250,
      cart: [], favorites: [], walletTx: STATE.walletTx,
      joinedClans: [], myClanIds: [], myListingIds: [],
      pushEnabled: true, lightTheme: false,
      dotaStats: stats, passHash: simpleHash(pass),
    };
    saveAccounts(accs);
    btn.textContent = t('btn_reg'); btn.classList.remove('btn-ripple');
    setUserUI(); showScreen('home');
    showToast(t('toast_reg'));
    sendPushNotification('🎉', 'Аккаунт создан!', 'Добро пожаловать в VIKTOR.GG, ' + nick + '!');
  }, 1200);
};

// ── Override doGoogleLogin ──────────────────────────
window.doGoogleLogin = function() {
  // Use a consistent Google pseudo-email based on random pick but remembered
  const googleNames = ['ProGamer_GG','DotaKing99','ShadowMage','IceDragon','LegendCarry','MidGod2000'];
  const accs = getAccounts();
  // Check if there's an existing google account
  const googleAcc = Object.values(accs).find(a => a.googleAccount);
  if (googleAcc) {
    restoreAccountState(googleAcc.email, googleAcc);
  } else {
    const nick = googleNames[Math.floor(Math.random() * googleNames.length)];
    const email = 'google_' + nick.toLowerCase() + '@gmail.fake';
    const stats = generateDotaStats(nick);
    STATE.loggedIn = true;
    STATE.user = { nick, email, mmr: stats.mmr, bio: '', googleAccount: true };
    STATE.dotaStats = stats;
    STATE.myListingIds = new Set();
    accs[email] = {
      nick, email, mmr: stats.mmr, bio: '', wallet: 1250,
      cart: [], favorites: [], walletTx: STATE.walletTx,
      joinedClans: [], myClanIds: [], myListingIds: [],
      pushEnabled: true, lightTheme: false, dotaStats: stats, googleAccount: true,
    };
    saveAccounts(accs);
  }
  setUserUI(); showScreen('home');
  showToast(t('toast_google'));
  sendPushNotification('✅', 'Google Sign-in', 'Вы вошли как ' + STATE.user.nick);
  runCounters();
};

// ── Override doLogout ────────────────────────────────
const _origDoLogout = doLogout;
window.doLogout = function() {
  saveCurrentAccount();
  STATE.loggedIn = false;
  STATE.user = { nick: 'Viktor_GG', email: '', mmr: 5200, bio: '' };
  STATE.dotaStats = null;
  STATE.myListingIds = new Set();
  STATE.joinedClans = new Set();
  STATE.myClanIds = new Set();
  showScreen('auth');
  showToast(t('toast_logout'));
};

// ── Restore account state from saved data ──────────
function restoreAccountState(email, acc) {
  STATE.loggedIn = true;
  STATE.user = { nick: acc.nick, email: acc.email || email, mmr: acc.mmr || 5200, bio: acc.bio || '', googleAccount: acc.googleAccount || false };
  STATE.wallet = acc.wallet || 1250;
  STATE.walletTx = acc.walletTx || STATE.walletTx;
  STATE.cart = acc.cart || [];
  STATE.favorites = acc.favorites || [];
  STATE.joinedClans = new Set(acc.joinedClans || []);
  STATE.myClanIds = new Set(acc.myClanIds || []);
  STATE.myListingIds = new Set(acc.myListingIds || []);
  STATE.dotaStats = acc.dotaStats || generateDotaStats(acc.nick);
  STATE.pushEnabled = acc.pushEnabled !== undefined ? acc.pushEnabled : true;
  if (acc.lightTheme && !document.body.classList.contains('light-theme')) {
    document.body.classList.add('light-theme');
  } else if (!acc.lightTheme) {
    document.body.classList.remove('light-theme');
  }
  updateCartUI(); updateFavUI();
}

// ── Simple hash for password ────────────────────────
function simpleHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) + str.charCodeAt(i);
  return (h >>> 0).toString(36);
}

// ── Override saveProfile to persist ─────────────────
const _origSaveProfile = saveProfile;
window.saveProfile = function() {
  const nick = document.getElementById('edit-nick').value.trim();
  const mmr  = parseInt(document.getElementById('edit-mmr').value) || STATE.user.mmr;
  const bio  = document.getElementById('edit-bio').value.trim();
  if (!nick) { showToast(t('toast_fill')); return; }
  STATE.user.nick = nick; STATE.user.mmr = mmr; STATE.user.bio = bio;
  // Regenerate dota stats if nick changed
  STATE.dotaStats = generateDotaStats(nick);
  STATE.dotaStats.mmr = mmr; // override with user-set MMR
  setUserUI();
  saveCurrentAccount();
  closeModal('edit-profile-modal');
  showToast(t('toast_saved'));
};

// ── Override buildStatsDetail to use real per-user stats ──
window.buildStatsDetail = function() {
  const el = document.getElementById('stats-detail-content');
  const t2 = document.getElementById('stats-modal-title'); if (t2) t2.textContent = t('stats_modal_title');
  const ds = STATE.dotaStats || generateDotaStats(STATE.user.nick);
  const stats = [
    ['🎮 Матчей сыграно', ds.matches.toLocaleString()],
    ['⚔️ WR', ds.wr + '%'],
    ['🏆 MMR', STATE.user.mmr || ds.mmr],
    ['🦸 Любимый герой', ds.hero],
    ['💀 KDA', ds.kda],
    ['⏱ Среднее время', ds.avgTime + ' мин'],
    ['🥇 Топ роль', ds.role],
    ['📅 Последний матч', ds.lastMatch],
  ];
  el.innerHTML = stats.map(([label, val]) => `
    <div class="stat-detail-row">
      <div class="stat-detail-label">${label}</div>
      <div class="stat-detail-val">${val}</div>
    </div>`).join('');
};

// ── Override createClan to persist and support delete ──
const _origCreateClan = createClan;
window.createClan = function() {
  const name = (document.getElementById('new-clan-name') || {}).value || '';
  const desc = (document.getElementById('new-clan-desc') || {}).value || '';
  const maxEl  = document.getElementById('new-clan-max');
  const openEl = document.getElementById('new-clan-open');
  if (!name.trim()) { showToast('❗ Введите название клана'); return; }
  const max  = parseInt(maxEl ? maxEl.value : 30) || 30;
  const open = openEl ? openEl.classList.contains('on') : true;
  const colors = ['rgba(200,16,46,.15)','rgba(245,197,24,.12)','rgba(79,195,247,.12)','rgba(76,175,80,.12)'];
  const newClan = {
    id: Date.now(), emoji: selectedClanEmoji,
    bg: colors[Math.floor(Math.random() * colors.length)],
    name: name.trim(), desc: desc.trim() || 'Новый клан VIKTOR.GG',
    count: 1, max, open, members: [{ name: STATE.user.nick, role: 'leader' }],
    _userCreated: true, _creatorEmail: STATE.user.email,
  };
  CLANS_DATA.unshift(newClan);
  STATE.myClanIds.add(newClan.id);
  STATE.joinedClans.add(newClan.id);
  const clans = parseInt(document.getElementById('pstat-clans').textContent) || 0;
  document.getElementById('pstat-clans').textContent = clans + 1;
  saveSharedClans();
  saveCurrentAccount();
  showToast('🎉 Клан "' + newClan.name + '" создан!');
  sendPushNotification('⚔️', 'Клан создан!', 'Вы основали клан "' + newClan.name + '"');
  switchClansTab('my', null);
  buildHomeClans();
};

// ── Delete clan (only own) ──────────────────────────
window.deleteClan = function(id, e) {
  if (e) e.stopPropagation();
  const clan = CLANS_DATA.find(c => c.id === id);
  if (!clan) return;
  if (!STATE.myClanIds.has(id)) { showToast('❌ Вы не можете удалить этот клан'); return; }
  if (!confirm('Удалить клан "' + clan.name + '"? Это действие необратимо.')) return;
  const idx = CLANS_DATA.indexOf(clan);
  if (idx !== -1) CLANS_DATA.splice(idx, 1);
  STATE.myClanIds.delete(id);
  STATE.joinedClans.delete(id);
  const clans = parseInt(document.getElementById('pstat-clans').textContent) || 0;
  document.getElementById('pstat-clans').textContent = Math.max(0, clans - 1);
  saveSharedClans();
  saveCurrentAccount();
  showToast('🗑 Клан удалён');
  buildClansTab('my');
  buildHomeClans();
};

// ── Override buildClansTab 'my' to show delete button ──
const _origBuildClansTab = buildClansTab;
window.buildClansTab = function(tab) {
  _origBuildClansTab(tab);
  if (tab !== 'my') return;
  // After original renders, patch in delete buttons for own clans
  setTimeout(() => {
    const myClans = CLANS_DATA.filter(c => STATE.joinedClans.has(c.id) || STATE.myClanIds.has(c.id));
    if (!myClans.length) return;
    const cards = document.querySelectorAll('#my-clans-list .clan-detail-card');
    cards.forEach((card, i) => {
      const clan = myClans[i];
      if (!clan || !STATE.myClanIds.has(clan.id)) return;
      if (card.querySelector('.delete-clan-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'delete-clan-btn';
      btn.innerHTML = '🗑 Удалить клан';
      btn.style.cssText = 'width:100%;background:rgba(200,16,46,.12);border:1px solid rgba(200,16,46,.3);color:var(--red);border-radius:var(--r);padding:11px;font-size:13px;font-weight:600;cursor:pointer;margin-top:8px;';
      btn.onclick = (e) => deleteClan(clan.id, e);
      card.appendChild(btn);
    });
  }, 50);
};

// ── Override joinClan to persist ────────────────────
const _origJoinClan = joinClan;
window.joinClan = function(id) {
  _origJoinClan(id);
  saveSharedClans();
  saveCurrentAccount();
};

// ── Override publishListing to persist & track ownership ──
const _origPublishListing = publishListing;
window.publishListing = function() {
  const name  = document.getElementById('listing-name').value.trim();
  const price = parseInt(document.getElementById('listing-price').value) || 0;
  const cat   = document.getElementById('listing-cat').value;
  if (!name) { showToast(t('toast_fill')); return; }
  const emojis = { boost:'⚔️', coaching:'🎯', items:'🎒', team:'👥', acc:'🔑' };
  const newListing = {
    id: Date.now(), emoji: emojis[cat] || '🎮', name, price, old: null, badge: 'new', cat,
    rating: 5.0, votes: 0, isNew: true,
    _userCreated: true, _creatorEmail: STATE.user.email, _creatorNick: STATE.user.nick,
  };
  MARKET_ITEMS.unshift(newListing);
  STATE.myListingIds = STATE.myListingIds || new Set();
  STATE.myListingIds.add(newListing.id);
  document.getElementById('listing-name').value = '';
  document.getElementById('listing-price').value = '';
  document.getElementById('listing-desc').value = '';
  closeModal('listing-modal');
  showToast(t('toast_published'));
  saveSharedMarket();
  saveCurrentAccount();
  buildMarket();
  sendPushNotification('🎉', 'Объявление опубликовано!', '"' + name + '" теперь на маркете');
};

// ── Delete listing (own only) ────────────────────────
window.deleteListing = function(id, e) {
  if (e) { e.stopPropagation(); e.preventDefault(); }
  if (!STATE.myListingIds || !STATE.myListingIds.has(id)) { showToast('❌ Вы не можете удалить это объявление'); return; }
  const idx = MARKET_ITEMS.findIndex(i => i.id === id);
  if (idx !== -1) MARKET_ITEMS.splice(idx, 1);
  STATE.myListingIds.delete(id);
  saveSharedMarket();
  saveCurrentAccount();
  showToast('🗑 Объявление удалено');
  buildMarket();
};

// ── Chat: prevent messaging yourself, add real user search ──
const _origSearchUsers = searchUsers;
window.searchUsers = function(val) {
  const results = document.getElementById('user-search-results');
  if (!val.trim()) { results.classList.remove('visible'); return; }
  // Filter out current user from results
  const found = ALL_USERS.filter(u =>
    u.name.toLowerCase().includes(val.toLowerCase()) &&
    u.name.toLowerCase() !== STATE.user.nick.toLowerCase()
  );
  // Also search registered accounts
  const accs = getAccounts();
  const registeredUsers = Object.values(accs)
    .filter(a => a.email !== STATE.user.email &&
      a.nick.toLowerCase().includes(val.toLowerCase()) &&
      !found.find(f => f.name.toLowerCase() === a.nick.toLowerCase()))
    .map(a => ({
      name: a.nick, avatar: a.nick.slice(0, 2).toUpperCase(),
      bg: 'rgba(200,16,46,.12)', mmr: a.mmr, online: false, role: 'Игрок'
    }));
  const allFound = [...found, ...registeredUsers];
  if (!allFound.length) {
    results.innerHTML = `<div class="no-results-msg">Игроки не найдены по запросу "${val}"</div>`;
    results.classList.add('visible'); return;
  }
  results.innerHTML = allFound.map(u => `
    <div class="user-search-item">
      <div class="user-search-avatar" style="background:${u.bg}">${typeof u.avatar === 'string' && u.avatar.length <= 2 ? u.avatar : u.avatar}</div>
      <div class="user-search-info">
        <div class="user-search-name">${u.name}</div>
        <div class="user-search-meta">${u.role}${u.mmr ? ' • MMR ' + u.mmr : ''} • ${u.online ? '🟢 Онлайн' : '⚫ Оффлайн'}</div>
      </div>
      <button class="user-search-msg-btn" onclick="startChatWithUser('${u.name}','${u.avatar}','${u.bg}',${u.online})">💬</button>
    </div>`).join('');
  results.classList.add('visible');
};

// ── Auto-save on important actions ──────────────────
const _origSendMessage = sendMessage;
window.sendMessage = function() {
  _origSendMessage();
  // Save chat state
  if (STATE.loggedIn) {
    const chatData = CHATS_DATA.map(c => ({...c, messages: c.messages.slice(-50)}));
    LS_set(KEY_SHARED_CHATS + '_' + (STATE.user.email || 'anon'), chatData);
  }
};

function loadUserChats() {
  if (!STATE.user.email) return;
  const saved = LS_get(KEY_SHARED_CHATS + '_' + STATE.user.email, null);
  if (saved && Array.isArray(saved)) {
    // Merge saved chats: add new ones, update messages in existing
    saved.forEach(sc => {
      const existing = CHATS_DATA.find(c => c.id === sc.id || c.name === sc.name);
      if (existing) {
        existing.messages = sc.messages || existing.messages;
        existing.last = sc.last || existing.last;
        existing.unread = sc.unread || 0;
      } else {
        CHATS_DATA.unshift(sc);
      }
    });
  }
}

// ── Init: load all persistent data ──────────────────
(function initPersistence() {
  loadSharedClans();
  loadSharedMarket();
  STATE.myListingIds = STATE.myListingIds || new Set();
})();

// ── Toggle theme override: save to account ──────────
const _origToggleTheme = toggleTheme;
window.toggleTheme = function(el) {
  _origToggleTheme(el);
  STATE.lightTheme = document.body.classList.contains('light-theme');
  saveCurrentAccount();
};

// ── Auto-save wallet/cart on purchase ───────────────
const _origDoCheckout = doCheckout;
window.doCheckout = function() {
  _origDoCheckout();
  saveCurrentAccount();
};

const _origAddFunds = addFunds;
window.addFunds = function() {
  _origAddFunds();
  saveCurrentAccount();
};