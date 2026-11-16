/**
 * Dibuix en alçat d'una barana segons estil, color i amplada.
 * Funció pura: s'usa en compilar (primer pintat) i al navegador (interacció).
 */
export type Estil = 'barrotes' | 'forja' | 'inox' | 'vidrio';
export type Color = 'negro' | 'grafito' | 'blanco' | 'verde';

export const colors: Record<Color, string> = { negro: '#1b1a18', grafito: '#55524d', blanco: '#f4f2ec', verde: '#2f5d3a' };
const INOX = 'url(#inox)';

export function barana(estil: Estil, color: Color, metres: number): { vb: string; svg: string } {
  const PX = 100; // 1 m = 100 unitats
  const W = Math.round(metres * PX);
  const H = 110;
  const m = 20;
  const metall = estil === 'inox' || estil === 'vidrio' ? INOX : colors[color];
  const stroke = color === 'blanco' && metall !== INOX ? '#b9b4aa' : 'none';
  const parts: string[] = [];
  const rect = (x: number, y: number, w: number, h: number, fill = metall, extra = '') =>
    parts.push(`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="${fill}" stroke="${stroke}" stroke-width="0.6" ${extra}/>`);

  // terra
  parts.push(`<rect x="${-m}" y="${H}" width="${W + 2 * m}" height="8" fill="#cfc4ad"/>`);

  if (estil === 'barrotes' || estil === 'forja') {
    rect(0, 0, W, 5);
    rect(0, H - 12, W, 4);
    const n = Math.max(2, Math.round(W / 11));
    const pas = W / n;
    for (let i = 0; i <= n; i++) rect(i * pas - 1.4, 5, 2.8, H - 17);
    if (estil === 'forja') {
      // travesser intermedi, anelles a la franja baixa i esses sota el passamà
      rect(0, 74, W, 3);
      for (let i = 0; i < n; i++) {
        const cx = (i + 0.5) * pas;
        parts.push(`<circle cx="${cx.toFixed(1)}" cy="86" r="${Math.min(4.6, pas / 2 - 1.6).toFixed(1)}" fill="none" stroke="${metall}" stroke-width="1.8"/>`);
        if (i % 2 === 0) {
          const x0 = i * pas + 1.4, x1 = (i + 2) * pas - 1.4;
          if (x1 <= W) {
            const mx = (x0 + x1) / 2;
            parts.push(`<path d="M${x0.toFixed(1)} 9 C ${(x0 + 2).toFixed(1)} 20, ${(mx - 3).toFixed(1)} 22, ${mx.toFixed(1)} 15 C ${(mx + 3).toFixed(1)} 8, ${(x1 - 2).toFixed(1)} 10, ${x1.toFixed(1)} 21" fill="none" stroke="${metall}" stroke-width="1.8" stroke-linecap="round"/>`);
            parts.push(`<circle cx="${mx.toFixed(1)}" cy="15" r="1.8" fill="${metall}"/>`);
          }
        }
      }
      for (let i = 0; i <= n; i++) parts.push(`<path d="M${(i * pas - 3).toFixed(1)} 0 L ${(i * pas).toFixed(1)} -8 L ${(i * pas + 3).toFixed(1)} 0 Z" fill="${metall}"/>`);
    }
  } else {
    const nPals = Math.max(2, Math.round(W / 95) + 1);
    const pas = W / (nPals - 1);
    if (estil === 'vidrio') {
      for (let i = 0; i < nPals - 1; i++) rect(i * pas + 5, 14, pas - 10, H - 26, 'rgb(170 205 215 / 0.45)', 'rx="1.5"');
    } else {
      for (let k = 0; k < 4; k++) rect(0, 26 + k * 18, W, 2.6);
    }
    for (let i = 0; i < nPals; i++) rect(i * pas - 2.5, 4, 5, H - 4, metall, 'rx="1.2"');
    rect(-3, 0, W + 6, 6, metall, 'rx="3"');
  }

  const defs = `<defs><linearGradient id="inox" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9ecef"/><stop offset=".45" stop-color="#9aa1a8"/><stop offset=".55" stop-color="#c9ced3"/><stop offset="1" stop-color="#7d848b"/></linearGradient></defs>`;
  return { vb: `${-m} -14 ${W + 2 * m} ${H + 26}`, svg: defs + parts.join('') };
}
