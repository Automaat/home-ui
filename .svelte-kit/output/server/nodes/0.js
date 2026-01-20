

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BbLuAmkW.js","_app/immutable/chunks/Evafm5g0.js","_app/immutable/chunks/DgGbEErB.js","_app/immutable/chunks/D3AaNyKs.js"];
export const stylesheets = [];
export const fonts = [];
