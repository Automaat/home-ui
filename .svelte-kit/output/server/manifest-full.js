export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.JyQL3aor.js",app:"_app/immutable/entry/app.oztRFLPD.js",imports:["_app/immutable/entry/start.JyQL3aor.js","_app/immutable/chunks/CdSapeiI.js","_app/immutable/chunks/DgGbEErB.js","_app/immutable/chunks/jffiO6ao.js","_app/immutable/entry/app.oztRFLPD.js","_app/immutable/chunks/DgGbEErB.js","_app/immutable/chunks/B9Cm-AFF.js","_app/immutable/chunks/Evafm5g0.js","_app/immutable/chunks/jffiO6ao.js","_app/immutable/chunks/D3AaNyKs.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
