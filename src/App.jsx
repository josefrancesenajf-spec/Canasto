import React, { useState, useEffect } from 'react';

// Paleta
const C = {
  primary: '#1FC87E',
  night: '#0A3D26',
  lime: '#E5FF6D',
  ice: '#F4FBF7',
  white: '#FFFFFF',
  gray: '#888780',
  carbon: '#1A1A1A',
  error: '#E24B4A',
  border: 'rgba(0,0,0,0.1)',
  borderSoft: '#C3EDDB',
};

const DISPLAY = '"Fraunces", "Cormorant Garamond", Georgia, serif';
const BODY = '"Inter", -apple-system, BlinkMacSystemFont, sans-serif';

const FontInjector = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);
  return null;
};

const Iso = ({ size = 28, color = '#FFFFFF', dotColor = '#E5FF6D' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="9" cy="6" r="1.5" fill={dotColor} />
    <circle cx="16" cy="5" r="1.5" fill={dotColor} />
    <circle cx="23" cy="6" r="1.5" fill={dotColor} />
    <path d="M5 12 L27 12 L24 26 Q24 28 22 28 L10 28 Q8 28 8 26 Z" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    <line x1="12" y1="15" x2="13" y2="25" stroke={color} strokeWidth="1.2" />
    <line x1="16" y1="15" x2="16" y2="25" stroke={color} strokeWidth="1.2" />
    <line x1="20" y1="15" x2="19" y2="25" stroke={color} strokeWidth="1.2" />
  </svg>
);

const Icon = ({ name, size = 20, color = 'currentColor', stroke = 1.5 }) => {
  const paths = {
    search: <><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" /></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
    home: <><path d="M3 11 L12 3 L21 11 V20 Q21 21 20 21 H15 V14 H9 V21 H4 Q3 21 3 20 Z" /></>,
    list: <><line x1="8" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="20" y2="12" /><line x1="8" y1="18" x2="20" y2="18" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></>,
    bag: <><path d="M5 8 H19 L18 21 H6 Z" /><path d="M9 8 V5 Q9 3 12 3 Q15 3 15 5 V8" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21 Q4 14 12 14 Q20 14 20 21" /></>,
    pin: <><path d="M12 22 Q5 14 5 9 Q5 4 12 4 Q19 4 19 9 Q19 14 12 22 Z" /><circle cx="12" cy="9" r="2.5" /></>,
    check: <><polyline points="4 12 10 18 20 6" /></>,
    chevron: <><polyline points="9 6 15 12 9 18" /></>,
    trash: <><line x1="5" y1="7" x2="19" y2="7" /><path d="M7 7 L8 20 H16 L17 7" /><path d="M10 7 V5 Q10 4 11 4 H13 Q14 4 14 5 V7" /></>,
    star: <><polygon points="12 3 14.5 9 21 9.5 16 14 17.5 20.5 12 17 6.5 20.5 8 14 3 9.5 9.5 9" /></>,
    arrow: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></>,
    back: <><polyline points="15 6 9 12 15 18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></>,
    moto: <><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M9 17 L13 9 L17 9 L19 14" /></>,
    bell: <><path d="M6 16 V11 Q6 6 12 6 Q18 6 18 11 V16 L20 18 H4 Z" /><path d="M10 18 Q10 20 12 20 Q14 20 14 18" /></>,
    paste: <><rect x="7" y="4" width="10" height="3" rx="1" /><path d="M7 5 H5 Q4 5 4 6 V20 Q4 21 5 21 H19 Q20 21 20 20 V6 Q20 5 19 5 H17" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    sparkle: <><path d="M12 3 L13.5 10.5 L21 12 L13.5 13.5 L12 21 L10.5 13.5 L3 12 L10.5 10.5 Z" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

const fmt = (n) => '$' + Math.round(n).toLocaleString('es-AR');

const CATEGORIES = [
  { id: 'lacteos', name: 'Lácteos', emoji: '🥛', color: '#E8F4FF' },
  { id: 'almacen', name: 'Almacén', emoji: '🥫', color: '#FFF4E6' },
  { id: 'bebidas', name: 'Bebidas', emoji: '🥤', color: '#E6F7FF' },
  { id: 'panificados', name: 'Panificados', emoji: '🍞', color: '#FFF0E0' },
  { id: 'carnes', name: 'Carnicería', emoji: '🥩', color: '#FFE8E8' },
  { id: 'verduleria', name: 'Verdulería', emoji: '🥬', color: '#EAFBE7' },
  { id: 'limpieza', name: 'Limpieza', emoji: '🧴', color: '#F0EBFF' },
  { id: 'higiene', name: 'Higiene', emoji: '🧼', color: '#FFF0F5' },
  { id: 'congelados', name: 'Congelados', emoji: '🧊', color: '#E8F8FF' },
  { id: 'mascotas', name: 'Mascotas', emoji: '🐾', color: '#FFF7E6' },
];

const CATALOG = [
  { id: 1, name: 'Leche La Serenísima', detail: 'Entera 1L', emoji: '🥛', cat: 'lacteos', keywords: ['leche'] },
  { id: 2, name: 'Pan lactal Bimbo', detail: 'Blanco 460g', emoji: '🍞', cat: 'panificados', keywords: ['pan', 'lactal'] },
  { id: 3, name: 'Yerba Playadito', detail: '1kg', emoji: '🧉', cat: 'almacen', keywords: ['yerba'] },
  { id: 4, name: 'Aceite Cocinero', detail: 'Girasol 900ml', emoji: '🫒', cat: 'almacen', keywords: ['aceite'] },
  { id: 5, name: 'Fideos Matarazzo', detail: 'Spaghetti 500g', emoji: '🍝', cat: 'almacen', keywords: ['fideos', 'pasta'] },
  { id: 6, name: 'Arroz Gallo', detail: 'Largo fino 1kg', emoji: '🍚', cat: 'almacen', keywords: ['arroz'] },
  { id: 7, name: 'Café La Virginia', detail: 'Molido 250g', emoji: '☕', cat: 'almacen', keywords: ['café', 'cafe'] },
  { id: 8, name: 'Manteca La Paulina', detail: '200g', emoji: '🧈', cat: 'lacteos', keywords: ['manteca'] },
  { id: 9, name: 'Huevos color', detail: 'Docena', emoji: '🥚', cat: 'almacen', keywords: ['huevos', 'huevo'] },
  { id: 10, name: 'Tomate triturado Arcor', detail: '520g', emoji: '🥫', cat: 'almacen', keywords: ['tomate', 'triturado', 'salsa'] },
  { id: 11, name: 'Coca Cola', detail: '2.25L', emoji: '🥤', cat: 'bebidas', keywords: ['coca', 'gaseosa'] },
  { id: 12, name: 'Agua Villavicencio', detail: '2L', emoji: '💧', cat: 'bebidas', keywords: ['agua'] },
  { id: 13, name: 'Cerveza Quilmes', detail: 'Lata 473ml', emoji: '🍺', cat: 'bebidas', keywords: ['cerveza', 'quilmes'] },
  { id: 14, name: 'Yogur Yogurísimo', detail: 'Bebible 1L', emoji: '🥛', cat: 'lacteos', keywords: ['yogur', 'yoghurt'] },
  { id: 15, name: 'Queso cremoso', detail: 'La Paulina 400g', emoji: '🧀', cat: 'lacteos', keywords: ['queso'] },
  { id: 16, name: 'Detergente Magistral', detail: '750ml', emoji: '🧴', cat: 'limpieza', keywords: ['detergente'] },
  { id: 17, name: 'Lavandina Ayudín', detail: '1L', emoji: '🧴', cat: 'limpieza', keywords: ['lavandina'] },
  { id: 18, name: 'Papel higiénico Higienol', detail: 'x4 rollos', emoji: '🧻', cat: 'higiene', keywords: ['papel', 'higienico'] },
  { id: 19, name: 'Shampoo Sedal', detail: '340ml', emoji: '🧴', cat: 'higiene', keywords: ['shampoo'] },
  { id: 20, name: 'Pollo entero', detail: 'Por kg', emoji: '🍗', cat: 'carnes', keywords: ['pollo'] },
  { id: 21, name: 'Carne picada común', detail: 'Por kg', emoji: '🥩', cat: 'carnes', keywords: ['picada', 'carne'] },
  { id: 22, name: 'Asado tira', detail: 'Por kg', emoji: '🥩', cat: 'carnes', keywords: ['asado'] },
  { id: 23, name: 'Tomate', detail: 'Por kg', emoji: '🍅', cat: 'verduleria', keywords: ['tomate'] },
  { id: 24, name: 'Papa', detail: 'Por kg', emoji: '🥔', cat: 'verduleria', keywords: ['papa', 'papas'] },
  { id: 25, name: 'Cebolla', detail: 'Por kg', emoji: '🧅', cat: 'verduleria', keywords: ['cebolla'] },
  { id: 26, name: 'Manzana roja', detail: 'Por kg', emoji: '🍎', cat: 'verduleria', keywords: ['manzana'] },
  { id: 27, name: 'Helado Frigor', detail: '1kg', emoji: '🍦', cat: 'congelados', keywords: ['helado'] },
  { id: 28, name: 'Hamburguesas Paty', detail: 'x4 unidades', emoji: '🍔', cat: 'congelados', keywords: ['hamburguesa', 'paty'] },
  { id: 29, name: 'Alimento perro Dog Chow', detail: '15kg', emoji: '🐕', cat: 'mascotas', keywords: ['perro', 'dog chow', 'alimento perro'] },
  { id: 30, name: 'Alimento gato Whiskas', detail: '1.5kg', emoji: '🐈', cat: 'mascotas', keywords: ['gato', 'whiskas'] },
  { id: 31, name: 'Azúcar Ledesma', detail: '1kg', emoji: '🍬', cat: 'almacen', keywords: ['azucar', 'azúcar'] },
  { id: 32, name: 'Harina 000', detail: 'Pureza 1kg', emoji: '🌾', cat: 'almacen', keywords: ['harina'] },
];

const SUPERS = [
  { id: 'laanonima', name: 'La Anónima', short: 'LA', type: 'minorista', color: '#D4202E', factor: 1.00 },
  { id: 'carrefour', name: 'Carrefour', short: 'CA', type: 'minorista', color: '#005AA0', factor: 0.97 },
  { id: 'coto', name: 'Coto', short: 'CO', type: 'minorista', color: '#003DA5', factor: 0.99 },
  { id: 'jumbo', name: 'Jumbo', short: 'JU', type: 'minorista', color: '#00A859', factor: 1.02 },
  { id: 'changomas', name: 'Changomas', short: 'CH', type: 'minorista', color: '#FFC220', factor: 0.94 },
  { id: 'vea', name: 'Vea', short: 'VE', type: 'minorista', color: '#E30613', factor: 0.96 },
  { id: 'disco', name: 'Disco', short: 'DI', type: 'minorista', color: '#E30613', factor: 1.03 },
  { id: 'cooperativa', name: 'Coop. Obrera', short: 'CB', type: 'minorista', color: '#1B5E20', factor: 0.93 },
  { id: 'dia', name: 'Día', short: 'DI', type: 'minorista', color: '#D8232A', factor: 0.91 },
  { id: 'vital', name: 'Vital', short: 'VT', type: 'mayorista', color: '#F39200', factor: 0.85 },
  { id: 'diarco', name: 'Diarco', short: 'DC', type: 'mayorista', color: '#003366', factor: 0.86 },
  { id: 'makro', name: 'Makro', short: 'MK', type: 'mayorista', color: '#003C7E', factor: 0.84 },
  { id: 'mamut', name: 'Mamut', short: 'MM', type: 'mayorista', color: '#8B4513', factor: 0.88 },
  { id: 'yaguar', name: 'Yaguar', short: 'YA', type: 'mayorista', color: '#FF6B00', factor: 0.87 },
];

const BASE_PRICES = {
  1: 1850, 2: 2400, 3: 6900, 4: 3200, 5: 1450, 6: 2100, 7: 3850, 8: 2950, 9: 3400, 10: 1280,
  11: 3200, 12: 1450, 13: 1850, 14: 2200, 15: 4500, 16: 2800, 17: 1900, 18: 3400, 19: 4200, 20: 3800,
  21: 7500, 22: 9200, 23: 1800, 24: 1200, 25: 950, 26: 2400, 27: 8500, 28: 4800, 29: 28500, 30: 9800,
  31: 1850, 32: 2100,
};

const getPrice = (productId, superId) => {
  const base = BASE_PRICES[productId];
  const sup = SUPERS.find((s) => s.id === superId);
  const seed = (productId * 31 + superId.charCodeAt(0)) % 100;
  const variation = 0.93 + (seed / 100) * 0.14;
  return base * sup.factor * variation;
};

const parseList = (text) => {
  const lines = text.split(/[\n,;]+/).map((l) => l.trim()).filter(Boolean);
  const results = [];
  lines.forEach((line) => {
    const qtyMatch = line.match(/^(\d+)\s*(?:x|×)?\s+/i);
    const qty = qtyMatch ? parseInt(qtyMatch[1]) : 1;
    const cleanLine = (qtyMatch ? line.replace(qtyMatch[0], '') : line).toLowerCase().trim();
    const found = CATALOG.find((p) => p.keywords.some((k) => cleanLine.includes(k)));
    if (found) {
      results.push({ matched: true, product: found, qty, raw: line });
    } else {
      results.push({ matched: false, raw: line });
    }
  });
  return results;
};

const TopBar = ({ title, onBack, showSearch, search, setSearch, right }) => (
  <div style={{ background: C.primary, padding: '14px 16px 12px', color: C.white, display: 'flex', flexDirection: 'column', gap: 12 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {onBack ? (
        <button onClick={onBack} style={{ background: 'transparent', border: 'none', color: C.white, padding: 0, cursor: 'pointer', display: 'flex' }}>
          <Icon name="back" size={22} color={C.white} />
        </button>
      ) : (
        <Iso size={26} />
      )}
      <div style={{ fontSize: 18, fontWeight: 500, flex: 1, color: C.white, fontFamily: DISPLAY, letterSpacing: -0.3 }}>{title}</div>
      {right || <Icon name="bell" size={20} color={C.white} />}
    </div>
    {showSearch && (
      <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 24, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Icon name="search" size={18} color="rgba(255,255,255,0.85)" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="buscar productos..."
          style={{ background: 'transparent', border: 'none', outline: 'none', color: C.white, fontSize: 14, flex: 1, fontFamily: BODY }} />
      </div>
    )}
  </div>
);

const BottomNav = ({ active, setScreen }) => {
  const items = [
    { id: 'home', icon: 'home', label: 'inicio', route: 'home' },
    { id: 'list', icon: 'list', label: 'mi lista', route: 'mylist' },
    { id: 'orders', icon: 'bag', label: 'pedidos', route: 'tracking' },
    { id: 'profile', icon: 'user', label: 'perfil', route: 'profile' },
  ];
  return (
    <div style={{ background: C.white, borderTop: `0.5px solid ${C.border}`, display: 'flex', padding: '8px 0 10px' }}>
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <button key={item.id} onClick={() => setScreen(item.route)}
            style={{ flex: 1, background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '6px 0', color: isActive ? C.primary : C.gray, fontFamily: BODY }}>
            <Icon name={item.icon} size={22} color={isActive ? C.primary : C.gray} stroke={isActive ? 2 : 1.5} />
            <span style={{ fontSize: 10, fontWeight: isActive ? 500 : 400 }}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

const SplashScreen = ({ setScreen }) => (
  <div style={{ background: C.night, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 18 }}>
    <Iso size={72} color={C.white} dotColor={C.lime} />
    <div style={{ fontSize: 44, fontWeight: 400, color: C.white, letterSpacing: -1.5, fontFamily: DISPLAY, fontStyle: 'italic' }}>canasto</div>
    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginTop: -8, fontFamily: BODY, letterSpacing: 0.3 }}>
      comprá más barato, sin vueltas
    </div>
    <button onClick={() => setScreen('login')}
      style={{ marginTop: 40, background: C.primary, color: C.white, border: 'none', padding: '14px 48px', borderRadius: 24, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: BODY }}>
      Empezar
    </button>
  </div>
);

const LoginScreen = ({ setScreen }) => (
  <div style={{ background: C.ice, height: '100%', padding: '60px 24px 24px', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40 }}>
      <Iso size={28} color={C.night} dotColor={C.primary} />
      <span style={{ fontSize: 24, fontWeight: 400, color: C.night, fontFamily: DISPLAY, fontStyle: 'italic', letterSpacing: -0.5 }}>canasto</span>
    </div>
    <div style={{ fontSize: 30, fontWeight: 400, color: C.carbon, marginBottom: 8, fontFamily: DISPLAY, letterSpacing: -0.8 }}>Bienvenido</div>
    <div style={{ fontSize: 14, color: C.gray, marginBottom: 32, fontFamily: BODY }}>Ingresá para comparar precios</div>
    <input placeholder="Email" defaultValue="jose@email.com"
      style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: '14px 16px', fontSize: 14, marginBottom: 12, outline: 'none', fontFamily: BODY, color: C.carbon }} />
    <input type="password" placeholder="Contraseña" defaultValue="••••••••"
      style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: '14px 16px', fontSize: 14, marginBottom: 24, outline: 'none', fontFamily: BODY, color: C.carbon }} />
    <button onClick={() => setScreen('address')}
      style={{ background: C.primary, color: C.white, border: 'none', padding: '14px', borderRadius: 24, fontSize: 15, fontWeight: 500, cursor: 'pointer', marginBottom: 16, fontFamily: BODY }}>
      Ingresar
    </button>
    <button onClick={() => setScreen('address')}
      style={{ background: C.white, color: C.carbon, border: `0.5px solid ${C.border}`, padding: '14px', borderRadius: 24, fontSize: 14, cursor: 'pointer', marginBottom: 24, fontFamily: BODY }}>
      Continuar con Google
    </button>
    <div style={{ textAlign: 'center', fontSize: 13, color: C.gray, fontFamily: BODY }}>
      ¿No tenés cuenta? <span style={{ color: C.primary, fontWeight: 500 }}>Registrarme</span>
    </div>
  </div>
);

const AddressScreen = ({ setScreen }) => {
  const [city, setCity] = useState('General Roca');
  const cities = ['General Roca', 'Fernández Oro', 'Cipolletti', 'Neuquén', 'Plottier', 'Centenario'];
  return (
    <div style={{ background: C.ice, height: '100%', padding: '60px 24px 24px', display: 'flex', flexDirection: 'column' }}>
      <button onClick={() => setScreen('login')} style={{ background: 'transparent', border: 'none', padding: 0, marginBottom: 24, cursor: 'pointer', alignSelf: 'flex-start' }}>
        <Icon name="back" size={22} color={C.carbon} />
      </button>
      <div style={{ fontSize: 28, fontWeight: 400, color: C.carbon, marginBottom: 8, fontFamily: DISPLAY, letterSpacing: -0.8 }}>¿Dónde entregamos?</div>
      <div style={{ fontSize: 14, color: C.gray, marginBottom: 24, fontFamily: BODY }}>Elegí tu ciudad y dirección</div>
      <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8, fontFamily: BODY }}>Ciudad</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
        {cities.map((c) => (
          <button key={c} onClick={() => setCity(c)}
            style={{ background: city === c ? C.primary : C.white, color: city === c ? C.white : C.carbon, border: `0.5px solid ${city === c ? C.primary : C.border}`, borderRadius: 20, padding: '6px 12px', fontSize: 12, cursor: 'pointer', fontFamily: BODY, fontWeight: city === c ? 500 : 400 }}>
            {c}
          </button>
        ))}
      </div>
      <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <Icon name="pin" size={20} color={C.primary} />
        <input defaultValue="Mitre 1240" placeholder="Calle y número"
          style={{ border: 'none', outline: 'none', fontSize: 14, flex: 1, color: C.carbon, fontFamily: BODY, background: 'transparent' }} />
      </div>
      <div style={{ background: C.white, border: `0.5px solid ${C.borderSoft}`, borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Icon name="check" size={18} color={C.primary} />
          <span style={{ fontSize: 13, fontWeight: 500, color: C.night, fontFamily: BODY }}>14 supermercados disponibles en {city}</span>
        </div>
        <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 8, marginBottom: 6, fontFamily: BODY }}>Minoristas</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
          {SUPERS.filter((s) => s.type === 'minorista').map((s) => (
            <div key={s.id} style={{ fontSize: 11, padding: '4px 8px', background: C.ice, borderRadius: 8, color: C.carbon, fontFamily: BODY }}>{s.name}</div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 6, fontFamily: BODY }}>Mayoristas</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {SUPERS.filter((s) => s.type === 'mayorista').map((s) => (
            <div key={s.id} style={{ fontSize: 11, padding: '4px 8px', background: '#FFF9E6', borderRadius: 8, color: C.carbon, fontFamily: BODY }}>{s.name}</div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <button onClick={() => setScreen('home')}
        style={{ background: C.primary, color: C.white, border: 'none', padding: '14px', borderRadius: 24, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: BODY }}>
        Confirmar dirección
      </button>
    </div>
  );
};

const HomeScreen = ({ setScreen, list }) => {
  const [search, setSearch] = useState('');
  return (
    <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <TopBar title="canasto" showSearch search={search} setSearch={setSearch} right={
        <div style={{ width: 32, height: 32, borderRadius: 16, background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, fontSize: 12, fontWeight: 500, fontFamily: BODY }}>JR</div>
      } />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 80px' }}>
        <div style={{ fontSize: 28, fontWeight: 400, color: C.carbon, marginBottom: 4, fontFamily: DISPLAY, letterSpacing: -0.6 }}>Hola, José</div>
        <div style={{ fontSize: 13, color: C.gray, marginBottom: 24, fontFamily: BODY }}>Mitre 1240, General Roca</div>
        <div style={{ background: C.night, borderRadius: 12, padding: 16, marginBottom: 24, color: C.white, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 4, fontFamily: BODY }}>Ahorro este mes</div>
            <div style={{ fontSize: 26, fontWeight: 500, color: C.lime, fontFamily: DISPLAY, letterSpacing: -0.5 }}>$14.350</div>
          </div>
          <Icon name="arrow" size={20} color={C.lime} />
        </div>
        <div style={{ fontSize: 15, fontWeight: 500, color: C.carbon, marginBottom: 12, fontFamily: DISPLAY, letterSpacing: -0.3 }}>¿Cómo querés armar tu lista?</div>
        <button onClick={() => setScreen('mylist')}
          style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 16, marginBottom: 10, cursor: 'pointer', width: '100%', textAlign: 'left', fontFamily: BODY, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: '#E8FBF1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="search" size={22} color={C.primary} stroke={1.8} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>Buscar productos</div>
            <div style={{ fontSize: 12, color: C.gray, marginTop: 2, fontFamily: BODY }}>Agregalos uno a uno</div>
          </div>
          <Icon name="chevron" size={18} color={C.gray} />
        </button>
        <button onClick={() => setScreen('paste')}
          style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 16, marginBottom: 10, cursor: 'pointer', width: '100%', textAlign: 'left', fontFamily: BODY, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF6D9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="paste" size={22} color={C.night} stroke={1.8} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY, display: 'flex', alignItems: 'center', gap: 6 }}>
              Pegar mi lista
              <span style={{ background: C.lime, color: C.night, fontSize: 9, padding: '2px 6px', borderRadius: 8, fontWeight: 600, letterSpacing: 0.3 }}>NUEVO</span>
            </div>
            <div style={{ fontSize: 12, color: C.gray, marginTop: 2, fontFamily: BODY }}>Detectamos los productos automáticamente</div>
          </div>
          <Icon name="chevron" size={18} color={C.gray} />
        </button>
        <button onClick={() => setScreen('categories')}
          style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 16, marginBottom: 24, cursor: 'pointer', width: '100%', textAlign: 'left', fontFamily: BODY, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: '#F0EBFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="grid" size={22} color="#6B4FBB" stroke={1.8} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>Ver por categoría</div>
            <div style={{ fontSize: 12, color: C.gray, marginTop: 2, fontFamily: BODY }}>Explorá el catálogo completo</div>
          </div>
          <Icon name="chevron" size={18} color={C.gray} />
        </button>
        {list.length > 0 && (
          <>
            <div style={{ fontSize: 15, fontWeight: 500, color: C.carbon, marginBottom: 12, fontFamily: DISPLAY, letterSpacing: -0.3 }}>Tu última lista</div>
            <button onClick={() => setScreen('mylist')}
              style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 24, cursor: 'pointer', width: '100%', textAlign: 'left', fontFamily: BODY, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.ice, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🛒</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>Compra semanal</div>
                <div style={{ fontSize: 12, color: C.gray, marginTop: 2, fontFamily: BODY }}>{list.length} productos · Hace 3 días</div>
              </div>
              <Icon name="chevron" size={18} color={C.gray} />
            </button>
          </>
        )}
      </div>
      <BottomNav active="home" setScreen={setScreen} />
    </div>
  );
};

const PasteListScreen = ({ setScreen, list, setList }) => {
  const [text, setText] = useState('2 leches\n1 yerba 1kg\nfideos\naceite girasol\nazucar\n6 huevos\npan lactal');
  const [parsed, setParsed] = useState(null);
  const handleParse = () => { setParsed(parseList(text)); };
  const handleConfirm = () => {
    const newItems = parsed.filter((r) => r.matched).map((r) => ({ ...r.product, qty: r.qty }));
    const merged = [...list];
    newItems.forEach((ni) => {
      const ex = merged.find((m) => m.id === ni.id);
      if (ex) ex.qty += ni.qty;
      else merged.push(ni);
    });
    setList(merged);
    setScreen('mylist');
  };
  return (
    <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TopBar title="Pegar mi lista" onBack={() => setScreen('home')} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 100px' }}>
        {!parsed ? (
          <>
            <div style={{ background: C.lime, borderRadius: 12, padding: 14, marginBottom: 16, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <Icon name="sparkle" size={20} color={C.night} />
              <div style={{ fontSize: 13, color: C.night, fontFamily: BODY, lineHeight: 1.4 }}>
                Pegá tu lista del super tal cual la escribís — uno por línea o separados por coma. Detectamos cantidades y productos.
              </div>
            </div>
            <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8, fontFamily: BODY }}>Tu lista</div>
            <textarea value={text} onChange={(e) => setText(e.target.value)}
              style={{ width: '100%', minHeight: 220, background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 14, fontSize: 14, fontFamily: BODY, color: C.carbon, outline: 'none', resize: 'none', boxSizing: 'border-box', lineHeight: 1.6 }} />
            <button onClick={handleParse}
              style={{ background: C.primary, color: C.white, border: 'none', padding: '14px', borderRadius: 24, fontSize: 15, fontWeight: 500, cursor: 'pointer', width: '100%', fontFamily: BODY, marginTop: 16 }}>
              Detectar productos
            </button>
          </>
        ) : (
          <>
            <div style={{ fontSize: 22, fontWeight: 400, color: C.carbon, marginBottom: 4, fontFamily: DISPLAY, letterSpacing: -0.5 }}>
              Encontramos {parsed.filter((p) => p.matched).length} de {parsed.length}
            </div>
            <div style={{ fontSize: 13, color: C.gray, marginBottom: 16, fontFamily: BODY }}>Revisá los matches y confirmá</div>
            {parsed.map((r, i) => (
              <div key={i} style={{ background: C.white, border: `0.5px solid ${r.matched ? C.borderSoft : 'rgba(226,75,74,0.3)'}`, borderRadius: 12, padding: 12, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: r.matched ? '#E8FBF1' : '#FCE8E8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                  {r.matched ? r.product.emoji : '❓'}
                </div>
                <div style={{ flex: 1 }}>
                  {r.matched ? (
                    <>
                      <div style={{ fontSize: 13, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>{r.qty}× {r.product.name}</div>
                      <div style={{ fontSize: 11, color: C.gray, fontFamily: BODY }}>de "{r.raw}"</div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: 13, fontWeight: 500, color: C.error, fontFamily: BODY }}>"{r.raw}"</div>
                      <div style={{ fontSize: 11, color: C.gray, fontFamily: BODY }}>No encontrado</div>
                    </>
                  )}
                </div>
                {r.matched && <Icon name="check" size={18} color={C.primary} stroke={2} />}
              </div>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <button onClick={() => setParsed(null)}
                style={{ flex: 1, background: C.white, color: C.carbon, border: `0.5px solid ${C.border}`, padding: '14px', borderRadius: 24, fontSize: 14, cursor: 'pointer', fontFamily: BODY }}>
                Editar
              </button>
              <button onClick={handleConfirm}
                style={{ flex: 2, background: C.primary, color: C.white, border: 'none', padding: '14px', borderRadius: 24, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: BODY }}>
                Agregar {parsed.filter((p) => p.matched).length} productos
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CategoriesScreen = ({ setScreen, setSelectedCategory }) => (
  <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <TopBar title="Categorías" onBack={() => setScreen('home')} />
    <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
      <div style={{ fontSize: 13, color: C.gray, marginBottom: 16, fontFamily: BODY }}>Explorá productos por categoría</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {CATEGORIES.map((c) => (
          <button key={c.id} onClick={() => { setSelectedCategory(c.id); setScreen('catProducts'); }}
            style={{ background: c.color, border: 'none', borderRadius: 14, padding: 16, cursor: 'pointer', textAlign: 'left', fontFamily: BODY, aspectRatio: '1.2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 32 }}>{c.emoji}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: DISPLAY, letterSpacing: -0.3 }}>{c.name}</div>
              <div style={{ fontSize: 11, color: C.gray, marginTop: 2 }}>{CATALOG.filter((p) => p.cat === c.id).length} productos</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const CategoryProductsScreen = ({ setScreen, category, list, setList }) => {
  const cat = CATEGORIES.find((c) => c.id === category);
  const products = CATALOG.filter((p) => p.cat === category);
  const addProduct = (p) => {
    const ex = list.find((i) => i.id === p.id);
    if (ex) setList(list.map((i) => i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
    else setList([...list, { ...p, qty: 1 }]);
  };
  return (
    <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TopBar title={cat.name} onBack={() => setScreen('categories')} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 100px' }}>
        {products.map((p) => {
          const inList = list.find((i) => i.id === p.id);
          return (
            <div key={p.id} style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 12, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.ice, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{p.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>{p.name}</div>
                <div style={{ fontSize: 12, color: C.gray, fontFamily: BODY }}>{p.detail}</div>
              </div>
              <button onClick={() => addProduct(p)}
                style={{ background: inList ? C.primary : C.white, color: inList ? C.white : C.primary, border: `1px solid ${C.primary}`, borderRadius: 20, padding: '6px 12px', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: BODY }}>
                {inList ? `${inList.qty} en lista` : 'Agregar'}
              </button>
            </div>
          );
        })}
      </div>
      {list.length > 0 && (
        <div style={{ padding: 16, background: C.ice, borderTop: `0.5px solid ${C.border}` }}>
          <button onClick={() => setScreen('mylist')}
            style={{ background: C.primary, color: C.white, border: 'none', padding: '14px', borderRadius: 24, fontSize: 15, fontWeight: 500, cursor: 'pointer', width: '100%', fontFamily: BODY }}>
            Ver mi lista ({list.length})
          </button>
        </div>
      )}
    </div>
  );
};

const MyListScreen = ({ setScreen, list, setList }) => {
  const [search, setSearch] = useState('');
  const filtered = search.length > 0
    ? CATALOG.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.keywords.some((k) => k.includes(search.toLowerCase())))
    : [];
  const addProduct = (p) => {
    const ex = list.find((i) => i.id === p.id);
    if (ex) setList(list.map((i) => i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
    else setList([...list, { ...p, qty: 1 }]);
    setSearch('');
  };
  const removeProduct = (id) => setList(list.filter((i) => i.id !== id));
  const updateQty = (id, delta) => setList(list.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  return (
    <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TopBar title="Mi lista" onBack={() => setScreen('home')} showSearch search={search} setSearch={setSearch} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 100px' }}>
        {filtered.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, color: C.gray, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.8, fontFamily: BODY }}>Resultados</div>
            {filtered.map((p) => (
              <button key={p.id} onClick={() => addProduct(p)}
                style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 12, display: 'flex', alignItems: 'center', gap: 12, width: '100%', marginBottom: 8, cursor: 'pointer', fontFamily: BODY, textAlign: 'left' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: C.ice, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{p.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: C.gray, fontFamily: BODY }}>{p.detail}</div>
                </div>
                <Icon name="plus" size={20} color={C.primary} stroke={2} />
              </button>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 20, fontWeight: 400, color: C.carbon, fontFamily: DISPLAY, letterSpacing: -0.4 }}>Tu lista</div>
          <div style={{ fontSize: 12, color: C.gray, fontFamily: BODY }}>{list.length} productos</div>
        </div>
        {list.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: C.gray, fontSize: 13, fontFamily: BODY }}>
            Buscá productos arriba para empezar tu lista
          </div>
        ) : (
          list.map((p) => (
            <div key={p.id} style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 12, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: C.ice, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{p.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>{p.name}</div>
                <div style={{ fontSize: 12, color: C.gray, fontFamily: BODY }}>{p.detail}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button onClick={() => updateQty(p.id, -1)} style={{ width: 28, height: 28, borderRadius: 14, border: `0.5px solid ${C.border}`, background: C.white, cursor: 'pointer', color: C.carbon, fontSize: 16, fontFamily: BODY }}>−</button>
                <span style={{ fontSize: 14, fontWeight: 500, minWidth: 20, textAlign: 'center', color: C.carbon, fontFamily: BODY }}>{p.qty}</span>
                <button onClick={() => updateQty(p.id, 1)} style={{ width: 28, height: 28, borderRadius: 14, border: 'none', background: C.primary, cursor: 'pointer', color: C.white, fontSize: 16, fontFamily: BODY }}>+</button>
                <button onClick={() => removeProduct(p.id)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 4, marginLeft: 4 }}>
                  <Icon name="trash" size={18} color={C.gray} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {list.length > 0 && (
        <div style={{ padding: 16, background: C.ice, borderTop: `0.5px solid ${C.border}` }}>
          <button onClick={() => setScreen('compare')}
            style={{ background: C.primary, color: C.white, border: 'none', padding: '14px', borderRadius: 24, fontSize: 15, fontWeight: 500, cursor: 'pointer', width: '100%', fontFamily: BODY }}>
            Comparar precios en 14 supers
          </button>
        </div>
      )}
    </div>
  );
};

const CompareScreen = ({ setScreen, list, setWinnerData }) => {
  const [filter, setFilter] = useState('todos');
  const filteredSupers = filter === 'todos' ? SUPERS : SUPERS.filter((s) => s.type === filter);
  const totals = filteredSupers.map((s) => {
    const total = list.reduce((sum, item) => sum + (getPrice(item.id, s.id) * item.qty), 0);
    return { ...s, total };
  }).sort((a, b) => a.total - b.total);
  const winner = totals[0];
  const maxTotal = totals[totals.length - 1].total;
  const savings = maxTotal - winner.total;
  return (
    <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TopBar title="Comparación" onBack={() => setScreen('mylist')} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 100px' }}>
        <div style={{ fontSize: 12, color: C.gray, marginBottom: 4, fontFamily: BODY }}>{list.length} productos · {filteredSupers.length} supermercados</div>
        <div style={{ fontSize: 22, fontWeight: 400, color: C.carbon, marginBottom: 20, fontFamily: DISPLAY, letterSpacing: -0.5, lineHeight: 1.2 }}>
          Podés ahorrar hasta <span style={{ color: C.primary, fontStyle: 'italic' }}>{fmt(savings)}</span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 16, background: C.white, padding: 4, borderRadius: 20, border: `0.5px solid ${C.border}` }}>
          {[{ id: 'todos', label: 'Todos' }, { id: 'minorista', label: 'Minoristas' }, { id: 'mayorista', label: 'Mayoristas' }].map((f) => (
            <button key={f.id} onClick={() => setFilter(f.id)}
              style={{ flex: 1, background: filter === f.id ? C.primary : 'transparent', color: filter === f.id ? C.white : C.gray, border: 'none', borderRadius: 16, padding: '8px', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: BODY }}>
              {f.label}
            </button>
          ))}
        </div>
        <div style={{ background: C.primary, borderRadius: 12, padding: 20, marginBottom: 16, color: C.white }}>
          <div style={{ background: C.lime, color: C.night, borderRadius: 24, padding: '4px 12px', display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 600, marginBottom: 12, letterSpacing: 0.5, fontFamily: BODY }}>
            ★ MEJOR PRECIO
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', color: winner.color, fontWeight: 600, fontSize: 13, fontFamily: BODY }}>
              {winner.short}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 22, fontWeight: 400, color: C.white, fontFamily: DISPLAY, letterSpacing: -0.4 }}>{winner.name}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontFamily: BODY, textTransform: 'capitalize' }}>{winner.type} · Entrega 30-45 min</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginBottom: 4, fontFamily: BODY }}>Total de tu lista</div>
          <div style={{ fontSize: 36, fontWeight: 400, color: C.white, letterSpacing: -1, fontFamily: DISPLAY }}>{fmt(winner.total)}</div>
        </div>
        <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.8, marginTop: 24, marginBottom: 8, fontFamily: BODY }}>Otras opciones ({totals.length - 1})</div>
        {totals.slice(1).map((s) => {
          const diff = s.total - winner.total;
          const pct = ((diff / winner.total) * 100).toFixed(0);
          return (
            <div key={s.id} style={{ background: C.white, border: `0.5px solid ${C.borderSoft}`, borderRadius: 12, padding: 14, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, fontWeight: 600, fontSize: 11, opacity: 0.85, fontFamily: BODY }}>
                {s.short}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {s.name}
                  {s.type === 'mayorista' && <span style={{ fontSize: 9, padding: '1px 6px', background: '#FFF6D9', color: C.night, borderRadius: 6, fontWeight: 500, letterSpacing: 0.3 }}>MAY</span>}
                </div>
                <div style={{ fontSize: 12, color: C.gray, marginTop: 2, fontFamily: BODY }}>{fmt(s.total)}</div>
              </div>
              <div style={{ background: 'rgba(226,75,74,0.1)', color: C.error, padding: '4px 10px', borderRadius: 12, fontSize: 11, fontWeight: 500, fontFamily: BODY }}>
                +{pct}%
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: 16, background: C.ice, borderTop: `0.5px solid ${C.border}` }}>
        <button onClick={() => { setWinnerData({ winner, savings, total: winner.total }); setScreen('confirm'); }}
          style={{ background: C.primary, color: C.white, border: 'none', padding: '14px', borderRadius: 24, fontSize: 15, fontWeight: 500, cursor: 'pointer', width: '100%', fontFamily: BODY }}>
          Confirmar pedido en {winner.name}
        </button>
      </div>
    </div>
  );
};

const ConfirmScreen = ({ setScreen, list, winnerData }) => {
  const delivery = 1200;
  const total = winnerData.total + delivery;
  return (
    <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TopBar title="Confirmar pedido" onBack={() => setScreen('compare')} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 100px' }}>
        <div style={{ background: C.white, border: `0.5px solid ${C.borderSoft}`, borderRadius: 12, padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: winnerData.winner.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, fontWeight: 600, fontSize: 13, fontFamily: BODY }}>
            {winnerData.winner.short}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: C.gray, fontFamily: BODY }}>Comprando en</div>
            <div style={{ fontSize: 18, fontWeight: 400, color: C.carbon, fontFamily: DISPLAY, letterSpacing: -0.3 }}>{winnerData.winner.name}</div>
          </div>
        </div>
        <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 12, fontFamily: BODY }}>Tu lista ({list.length})</div>
          {list.slice(0, 5).map((p) => (
            <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13, fontFamily: BODY }}>
              <span style={{ color: C.carbon }}>{p.qty}× {p.name}</span>
              <span style={{ color: C.gray }}>{fmt(getPrice(p.id, winnerData.winner.id) * p.qty)}</span>
            </div>
          ))}
          {list.length > 5 && <div style={{ fontSize: 12, color: C.gray, marginTop: 6, fontFamily: BODY }}>+ {list.length - 5} productos más</div>}
        </div>
        <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <Icon name="pin" size={20} color={C.primary} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>Mitre 1240</div>
            <div style={{ fontSize: 12, color: C.gray, fontFamily: BODY }}>General Roca · Llega en ~40 min</div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8, fontFamily: BODY }}>Método de pago</div>
        <div style={{ background: C.white, border: `1px solid ${C.primary}`, borderRadius: 12, padding: 14, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#00B1EA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, fontWeight: 500, fontSize: 11, fontFamily: BODY }}>MP</div>
          <div style={{ flex: 1, fontSize: 14, color: C.carbon, fontWeight: 500, fontFamily: BODY }}>Mercado Pago</div>
          <div style={{ width: 20, height: 20, borderRadius: 10, border: `2px solid ${C.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 10, height: 10, borderRadius: 5, background: C.primary }} />
          </div>
        </div>
        <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: C.ice, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💳</div>
          <div style={{ flex: 1, fontSize: 14, color: C.carbon, fontFamily: BODY }}>Tarjeta •••• 4521</div>
          <div style={{ width: 20, height: 20, borderRadius: 10, border: `1px solid ${C.border}` }} />
        </div>
        <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: 13, color: C.gray, fontFamily: BODY }}><span>Productos</span><span>{fmt(winnerData.total)}</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: 13, color: C.gray, fontFamily: BODY }}><span>Envío</span><span>{fmt(delivery)}</span></div>
          <div style={{ height: 0.5, background: C.border, margin: '8px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', alignItems: 'baseline' }}>
            <span style={{ fontSize: 14, fontFamily: BODY, color: C.carbon }}>Total</span>
            <span style={{ fontSize: 22, fontWeight: 500, color: C.carbon, fontFamily: DISPLAY, letterSpacing: -0.5 }}>{fmt(total)}</span>
          </div>
        </div>
      </div>
      <div style={{ padding: 16, background: C.ice, borderTop: `0.5px solid ${C.border}` }}>
        <button onClick={() => setScreen('tracking')}
          style={{ background: C.primary, color: C.white, border: 'none', padding: '14px', borderRadius: 24, fontSize: 15, fontWeight: 500, cursor: 'pointer', width: '100%', fontFamily: BODY }}>
          Confirmar y pagar · {fmt(total)}
        </button>
      </div>
    </div>
  );
};

const TrackingScreen = ({ setScreen, winnerData }) => {
  const [step] = useState(2);
  const steps = [
    { label: 'Pedido confirmado', detail: 'Recibimos tu pedido' },
    { label: `${winnerData.winner.name} preparando`, detail: 'Armando tu carrito' },
    { label: 'Rider en camino', detail: 'Llega en ~12 min' },
    { label: 'Entregado', detail: 'Disfrutá' },
  ];
  return (
    <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TopBar title="Seguimiento" onBack={() => setScreen('home')} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 100px' }}>
        <div style={{ background: C.night, borderRadius: 12, padding: 20, color: C.white, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 24, background: 'rgba(229,255,109,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="clock" size={24} color={C.lime} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: BODY }}>Llega en</div>
            <div style={{ fontSize: 26, fontWeight: 400, color: C.lime, fontFamily: DISPLAY, letterSpacing: -0.5 }}>12 minutos</div>
          </div>
        </div>
        <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 20, marginBottom: 16, position: 'relative' }}>
          {steps.map((s, i) => {
            const done = i < step;
            const active = i === step;
            return (
              <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: i === steps.length - 1 ? 0 : 20, position: 'relative' }}>
                {i < steps.length - 1 && (
                  <div style={{ position: 'absolute', left: 11, top: 24, bottom: 4, width: 2, background: done ? C.primary : C.border }} />
                )}
                <div style={{ width: 24, height: 24, borderRadius: 12, background: done ? C.primary : (active ? C.primary : C.white), border: active || done ? 'none' : `2px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1, boxShadow: active ? `0 0 0 4px rgba(31,200,126,0.2)` : 'none' }}>
                  {done && <Icon name="check" size={14} color={C.white} stroke={2.5} />}
                </div>
                <div style={{ flex: 1, paddingTop: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: active || done ? C.carbon : C.gray, fontFamily: BODY }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: C.gray, marginTop: 2, fontFamily: BODY }}>{s.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 16, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 22, background: C.ice, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="moto" size={22} color={C.primary} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>Martín R.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: C.gray, fontFamily: BODY }}>
              <Icon name="star" size={12} color={C.primary} />
              <span>4.9 · 320 entregas</span>
            </div>
          </div>
          <button style={{ background: C.ice, border: 'none', borderRadius: 20, padding: '8px 14px', fontSize: 12, fontWeight: 500, color: C.primary, cursor: 'pointer', fontFamily: BODY }}>
            Llamar
          </button>
        </div>
        <button onClick={() => setScreen('success')}
          style={{ background: C.primary, color: C.white, border: 'none', borderRadius: 24, padding: 14, width: '100%', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: BODY }}>
          Simular entrega ✓
        </button>
      </div>
      <BottomNav active="orders" setScreen={setScreen} />
    </div>
  );
};

const SuccessScreen = ({ setScreen, winnerData }) => (
  <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1, overflowY: 'auto', padding: '60px 24px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 80, height: 80, borderRadius: 40, background: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: `0 0 0 12px rgba(31,200,126,0.15)` }}>
        <Icon name="check" size={42} color={C.white} stroke={3} />
      </div>
      <div style={{ fontSize: 32, fontWeight: 400, color: C.carbon, marginBottom: 4, fontFamily: DISPLAY, letterSpacing: -0.8, textAlign: 'center' }}>¡Tu pedido llegó!</div>
      <div style={{ fontSize: 14, color: C.gray, marginBottom: 32, textAlign: 'center', fontFamily: BODY }}>Esperamos que disfrutes tu compra</div>
      <div style={{ background: C.lime, borderRadius: 12, padding: 20, marginBottom: 16, width: '100%' }}>
        <div style={{ fontSize: 12, color: C.night, opacity: 0.8, marginBottom: 4, fontFamily: BODY }}>Ahorraste en este pedido</div>
        <div style={{ fontSize: 36, fontWeight: 400, color: C.night, letterSpacing: -1, marginBottom: 8, fontFamily: DISPLAY }}>{fmt(winnerData.savings)}</div>
        <div style={{ fontSize: 12, color: C.night, opacity: 0.7, fontFamily: BODY }}>vs el supermercado más caro de tu zona</div>
      </div>
      <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 16, width: '100%', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 12, color: C.gray, fontFamily: BODY }}>Ahorro acumulado este mes</div>
          <div style={{ fontSize: 20, fontWeight: 500, color: C.night, marginTop: 2, fontFamily: DISPLAY, letterSpacing: -0.4 }}>{fmt(14350 + winnerData.savings)}</div>
        </div>
        <div style={{ fontSize: 24 }}>📈</div>
      </div>
      <div style={{ fontSize: 13, color: C.gray, marginBottom: 12, fontFamily: BODY }}>¿Cómo estuvo tu experiencia?</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
        {[1,2,3,4,5].map((i) => (<Icon key={i} name="star" size={28} color={C.primary} />))}
      </div>
      <button onClick={() => setScreen('mylist')}
        style={{ background: C.primary, color: C.white, border: 'none', borderRadius: 24, padding: 14, width: '100%', fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: BODY, marginBottom: 8 }}>
        Repetir esta lista
      </button>
      <button onClick={() => setScreen('home')}
        style={{ background: 'transparent', color: C.gray, border: 'none', padding: 12, fontSize: 13, cursor: 'pointer', fontFamily: BODY }}>
        Volver al inicio
      </button>
    </div>
  </div>
);

const ProfileScreen = ({ setScreen }) => (
  <div style={{ background: C.ice, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <TopBar title="Perfil" />
    <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px 100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, fontSize: 22, fontWeight: 500, fontFamily: BODY }}>JR</div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 400, color: C.carbon, fontFamily: DISPLAY, letterSpacing: -0.5 }}>José Ramírez</div>
          <div style={{ fontSize: 13, color: C.gray, fontFamily: BODY }}>jose@email.com</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 20 }}>
        <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 500, color: C.night, fontFamily: DISPLAY, letterSpacing: -0.4 }}>23</div>
          <div style={{ fontSize: 11, color: C.gray, marginTop: 2, fontFamily: BODY }}>Pedidos</div>
        </div>
        <div style={{ background: C.lime, borderRadius: 12, padding: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 18, fontWeight: 500, color: C.night, fontFamily: DISPLAY, letterSpacing: -0.4 }}>$98k</div>
          <div style={{ fontSize: 11, color: C.night, opacity: 0.7, marginTop: 2, fontFamily: BODY }}>Ahorrados</div>
        </div>
        <div style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: C.night, marginTop: 4, fontFamily: BODY }}>Vital</div>
          <div style={{ fontSize: 11, color: C.gray, marginTop: 2, fontFamily: BODY }}>Más usado</div>
        </div>
      </div>
      <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8, fontFamily: BODY }}>Mis listas</div>
      {['Compra semanal', 'Asado del finde', 'Desayuno'].map((l, i) => (
        <div key={l} style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: C.ice, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
            {['🛒', '🥩', '☕'][i]}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: C.carbon, fontFamily: BODY }}>{l}</div>
            <div style={{ fontSize: 12, color: C.gray, fontFamily: BODY }}>{[12, 8, 5][i]} productos</div>
          </div>
          <Icon name="chevron" size={18} color={C.gray} />
        </div>
      ))}
      <div style={{ marginTop: 24 }}>
        <div style={{ fontSize: 11, color: C.gray, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8, fontFamily: BODY }}>Cuenta</div>
        {['Direcciones', 'Métodos de pago', 'Notificaciones', 'Cerrar sesión'].map((opt, i) => (
          <div key={opt} style={{ background: C.white, border: `0.5px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <span style={{ fontSize: 14, color: i === 3 ? C.error : C.carbon, fontFamily: BODY }}>{opt}</span>
            {i < 3 && <Icon name="chevron" size={18} color={C.gray} />}
          </div>
        ))}
      </div>
    </div>
    <BottomNav active="profile" setScreen={setScreen} />
  </div>
);

export default function App() {
  const [screen, setScreen] = useState('splash');
  const [list, setList] = useState([
    { ...CATALOG[0], qty: 2 },
    { ...CATALOG[2], qty: 1 },
    { ...CATALOG[4], qty: 1 },
    { ...CATALOG[5], qty: 1 },
    { ...CATALOG[7], qty: 1 },
  ]);
  const [winnerData, setWinnerData] = useState({ winner: SUPERS[0], savings: 0, total: 0 });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const screens = {
    splash: <SplashScreen setScreen={setScreen} />,
    login: <LoginScreen setScreen={setScreen} />,
    address: <AddressScreen setScreen={setScreen} />,
    home: <HomeScreen setScreen={setScreen} list={list} />,
    paste: <PasteListScreen setScreen={setScreen} list={list} setList={setList} />,
    categories: <CategoriesScreen setScreen={setScreen} setSelectedCategory={setSelectedCategory} />,
    catProducts: <CategoryProductsScreen setScreen={setScreen} category={selectedCategory} list={list} setList={setList} />,
    mylist: <MyListScreen setScreen={setScreen} list={list} setList={setList} />,
    compare: <CompareScreen setScreen={setScreen} list={list} setWinnerData={setWinnerData} />,
    confirm: <ConfirmScreen setScreen={setScreen} list={list} winnerData={winnerData} />,
    tracking: <TrackingScreen setScreen={setScreen} winnerData={winnerData} />,
    success: <SuccessScreen setScreen={setScreen} winnerData={winnerData} />,
    profile: <ProfileScreen setScreen={setScreen} />,
  };

  return (
    <>
      <FontInjector />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0A3D26 0%, #1FC87E 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        fontFamily: BODY,
        fontWeight: 400,
      }}>
        <div style={{ width: 390, height: 844, background: '#1A1A1A', borderRadius: 48, padding: 12, boxShadow: '0 30px 80px rgba(0,0,0,0.4)', position: 'relative' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden', background: C.ice, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 110, height: 28, background: '#000', borderRadius: 20, zIndex: 100 }} />
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              {screens[screen]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
