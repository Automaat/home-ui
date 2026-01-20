
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const LSCOLORS: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const CAML_LD_LIBRARY_PATH: string;
	export const ZPLUG_ROOT: string;
	export const GHOSTTY_BIN_DIR: string;
	export const npm_config_userconfig: string;
	export const OCAML_TOPLEVEL_PATH: string;
	export const COLORTERM: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const PYENV_SHELL: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const XPC_FLAGS: string;
	export const TERM_PROGRAM_VERSION: string;
	export const _ZPLUG_VERSION: string;
	export const FPATH: string;
	export const NODE: string;
	export const ZPLUG_CACHE_DIR: string;
	export const __CFBundleIdentifier: string;
	export const _ZPLUG_PREZTO: string;
	export const SSH_AUTH_SOCK: string;
	export const GOPRIVATE: string;
	export const XDG_CONFIG_HOME: string;
	export const MISE_AUTO_INSTALL: string;
	export const OSLogRateLimit: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const _ZPLUG_AWKPATH: string;
	export const ZPLUG_THREADS: string;
	export const HOMEBREW_PREFIX: string;
	export const GNUPGHOME: string;
	export const ZPLUG_FILTER: string;
	export const RBENV_SHELL: string;
	export const npm_config_globalconfig: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const GOBIN: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const LOGNAME: string;
	export const _ZPLUG_URL: string;
	export const MANPATH: string;
	export const npm_config_init_module: string;
	export const LaunchInstanceID: string;
	export const __NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
	export const _ZPLUG_OHMYZSH: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const OPAM_SWITCH_PREFIX: string;
	export const PERIOD: string;
	export const CLAUDECODE: string;
	export const COMMAND_MODE: string;
	export const GHOSTTY_SHELL_FEATURES: string;
	export const HOME: string;
	export const AUTOJUMP_ERROR_PATH: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const npm_package_version: string;
	export const SECURITYSESSIONID: string;
	export const STARSHIP_SHELL: string;
	export const STARSHIP_CONFIG: string;
	export const __MISE_DIFF: string;
	export const NIX_SSL_CERT_FILE: string;
	export const TMPDIR: string;
	export const GOROOT: string;
	export const INIT_CWD: string;
	export const YSU_VERSION: string;
	export const STARSHIP_SESSION_KEY: string;
	export const __MISE_ORIG_PATH: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const npm_config_npm_version: string;
	export const GHOSTTY_RESOURCES_DIR: string;
	export const TERM: string;
	export const TERMINFO: string;
	export const npm_package_name: string;
	export const __MISE_ZSH_PRECMD_RUN: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const ZPLUG_BIN: string;
	export const ZPLUG_PROTOCOL: string;
	export const HOMEBREW_CELLAR: string;
	export const __MISE_SESSION: string;
	export const ZPLUG_USE_CACHE: string;
	export const AUTOJUMP_SOURCED: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const ZPLUG_HOME: string;
	export const GIT_EDITOR: string;
	export const PAGER: string;
	export const __HM_ZSH_SESS_VARS_SOURCED: string;
	export const HOMEBREW_REPOSITORY: string;
	export const ZPLUG_REPOS: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_config_user_agent: string;
	export const ZPLUG_LOADFILE: string;
	export const TERMINFO_DIRS: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const npm_execpath: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const PYENV_ROOT: string;
	export const npm_package_json: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const MISE_SHELL: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const ZPLUG_ERROR_LOG: string;
	export const npm_config_node_gyp: string;
	export const npm_config_global_prefix: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const TERM_PROGRAM: string;
	export const _: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		LSCOLORS: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		CAML_LD_LIBRARY_PATH: string;
		ZPLUG_ROOT: string;
		GHOSTTY_BIN_DIR: string;
		npm_config_userconfig: string;
		OCAML_TOPLEVEL_PATH: string;
		COLORTERM: string;
		__HM_SESS_VARS_SOURCED: string;
		PYENV_SHELL: string;
		XDG_CONFIG_DIRS: string;
		npm_config_cache: string;
		LESS: string;
		XPC_FLAGS: string;
		TERM_PROGRAM_VERSION: string;
		_ZPLUG_VERSION: string;
		FPATH: string;
		NODE: string;
		ZPLUG_CACHE_DIR: string;
		__CFBundleIdentifier: string;
		_ZPLUG_PREZTO: string;
		SSH_AUTH_SOCK: string;
		GOPRIVATE: string;
		XDG_CONFIG_HOME: string;
		MISE_AUTO_INSTALL: string;
		OSLogRateLimit: string;
		COLOR: string;
		npm_config_local_prefix: string;
		_ZPLUG_AWKPATH: string;
		ZPLUG_THREADS: string;
		HOMEBREW_PREFIX: string;
		GNUPGHOME: string;
		ZPLUG_FILTER: string;
		RBENV_SHELL: string;
		npm_config_globalconfig: string;
		GPG_TTY: string;
		EDITOR: string;
		GOBIN: string;
		PWD: string;
		NIX_PROFILES: string;
		LOGNAME: string;
		_ZPLUG_URL: string;
		MANPATH: string;
		npm_config_init_module: string;
		LaunchInstanceID: string;
		__NIX_DARWIN_SET_ENVIRONMENT_DONE: string;
		_ZPLUG_OHMYZSH: string;
		NoDefaultCurrentDirectoryInExePath: string;
		OPAM_SWITCH_PREFIX: string;
		PERIOD: string;
		CLAUDECODE: string;
		COMMAND_MODE: string;
		GHOSTTY_SHELL_FEATURES: string;
		HOME: string;
		AUTOJUMP_ERROR_PATH: string;
		LANG: string;
		LS_COLORS: string;
		npm_package_version: string;
		SECURITYSESSIONID: string;
		STARSHIP_SHELL: string;
		STARSHIP_CONFIG: string;
		__MISE_DIFF: string;
		NIX_SSL_CERT_FILE: string;
		TMPDIR: string;
		GOROOT: string;
		INIT_CWD: string;
		YSU_VERSION: string;
		STARSHIP_SESSION_KEY: string;
		__MISE_ORIG_PATH: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		npm_config_npm_version: string;
		GHOSTTY_RESOURCES_DIR: string;
		TERM: string;
		TERMINFO: string;
		npm_package_name: string;
		__MISE_ZSH_PRECMD_RUN: string;
		npm_config_prefix: string;
		USER: string;
		ZPLUG_BIN: string;
		ZPLUG_PROTOCOL: string;
		HOMEBREW_CELLAR: string;
		__MISE_SESSION: string;
		ZPLUG_USE_CACHE: string;
		AUTOJUMP_SOURCED: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		ZPLUG_HOME: string;
		GIT_EDITOR: string;
		PAGER: string;
		__HM_ZSH_SESS_VARS_SOURCED: string;
		HOMEBREW_REPOSITORY: string;
		ZPLUG_REPOS: string;
		XPC_SERVICE_NAME: string;
		npm_config_user_agent: string;
		ZPLUG_LOADFILE: string;
		TERMINFO_DIRS: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		npm_execpath: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		PYENV_ROOT: string;
		npm_package_json: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		MISE_SHELL: string;
		XDG_DATA_DIRS: string;
		npm_config_noproxy: string;
		PATH: string;
		ZPLUG_ERROR_LOG: string;
		npm_config_node_gyp: string;
		npm_config_global_prefix: string;
		npm_node_execpath: string;
		OLDPWD: string;
		__CF_USER_TEXT_ENCODING: string;
		TERM_PROGRAM: string;
		_: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
