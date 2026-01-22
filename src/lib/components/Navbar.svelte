<script lang="ts">
	import { onMount } from 'svelte';

	type NavItem = {
		href: string;
		label: string;
		icon: string;
	};

	type Props = {
		items: NavItem[];
		brand?: string;
		currentPath?: string;
	};

	let { items, brand = '', currentPath = '' }: Props = $props();

	let collapsed = $state(false);
	let mobileMenuOpen = $state(false);

	onMount(() => {
		const saved = localStorage.getItem('navbarCollapsed');
		if (saved !== null) {
			collapsed = saved === 'true';
		}

		// Escape key listener
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && mobileMenuOpen) {
				closeMobileMenu();
			}
		};
		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('keydown', handleEscape);
		document.body.style.overflow = '';
		};
	});

	function toggleCollapse() {
		collapsed = !collapsed;
		localStorage.setItem('navbarCollapsed', String(collapsed));
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		// Body scroll lock
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		document.body.style.overflow = '';
	}
</script>

<!-- Mobile hamburger button -->
<button
	class="hamburger"
	on:click={toggleMobileMenu}
	aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
	aria-expanded={mobileMenuOpen}
>
	{#if mobileMenuOpen}
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>
	{:else}
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	{/if}
</button>

<!-- Mobile backdrop -->
{#if mobileMenuOpen}
	<div class="mobile-backdrop" on:click={closeMobileMenu}></div>
{/if}

<nav class="navbar" class:collapsed class:mobile-open={mobileMenuOpen}>
	<div class="nav-container">
		{#if brand && !collapsed}
			<h1 class="brand">{brand}</h1>
		{/if}

		<div class="nav-links">
			{#each items as item}
				<a
					href={item.href}
					class="nav-link"
					class:active={currentPath === item.href}
					title={item.label}
					on:click={closeMobileMenu}
				>
					<span class="icon">{item.icon}</span>
					{#if !collapsed}
						<span class="label">{item.label}</span>
					{/if}
				</a>
			{/each}
		</div>

		<button
			class="toggle-btn"
			on:click={toggleCollapse}
			aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
			aria-expanded={!collapsed}
		>
			{collapsed ? '→' : '←'}
		</button>
	</div>
</nav>

<style>
	.hamburger {
		display: none;
		position: fixed;
		top: var(--size-3);
		left: var(--size-3);
		z-index: 1002;
		background: var(--color-bg-card);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-2);
		padding: var(--size-3);
		cursor: pointer;
		font-size: var(--font-size-4);
		color: var(--color-text);
		transition: all 0.2s;
		min-width: var(--tap-target-min);
		min-height: var(--tap-target-min);
	}

	.hamburger:hover {
		background: var(--color-accent);
		color: var(--nord6);
	}

	.mobile-backdrop {
		display: none;
	}

	.navbar {
		width: 250px;
		background: var(--color-bg-card);
		border-right: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		height: 100vh;
		overflow-y: auto;
		transition: width 0.3s ease;
	}

	.navbar.collapsed {
		width: 80px;
	}

	@media (max-width: 767px) {
		.hamburger {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.mobile-backdrop {
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
			z-index: 1000;
		}

		.navbar {
			position: fixed;
			left: -250px;
			width: 250px;
			transition:
				left 0.3s ease,
				width 0.3s ease;
			z-index: 1001;
		}

		.navbar.mobile-open {
			left: 0;
		}

		.navbar.collapsed {
			width: 250px;
		}

		.brand,
		.label {
			display: block;
		}
	}

	.nav-container {
		display: flex;
		flex-direction: column;
		gap: var(--size-6);
		padding: var(--size-6) var(--size-4);
	}

	.toggle-btn {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-2);
		padding: var(--size-2);
		cursor: pointer;
		font-size: var(--font-size-3);
		color: var(--color-text);
		transition: all 0.2s;
		margin-top: auto;
	}

	.toggle-btn:hover {
		background: var(--color-accent);
		color: var(--nord6);
	}

	@media (max-width: 767px) {
		.toggle-btn {
			display: none;
		}
	}

	.brand {
		font-size: var(--font-size-4);
		font-weight: var(--font-weight-7);
		color: var(--color-primary);
		margin: 0;
		text-align: center;
		opacity: 1;
		transform: translateX(0);
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
	}

	.navbar.collapsed .brand {
		opacity: 0;
		transform: translateX(-8px);
		pointer-events: none;
	}

	@media (max-width: 767px) {
		.navbar.collapsed .brand {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.nav-links {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: var(--size-2);
		padding: var(--size-3) var(--size-4);
		border-radius: var(--radius-2);
		color: var(--color-text);
		text-decoration: none;
		font-weight: var(--font-weight-5);
		transition: all 0.2s;
		white-space: nowrap;
	}

	.navbar.collapsed .nav-link {
		justify-content: center;
		padding: var(--size-3);
	}

	@media (max-width: 767px) {
		.navbar.collapsed .nav-link {
			justify-content: flex-start;
			padding: var(--size-3) var(--size-4);
		}
	}

	.nav-link:hover {
		background: var(--color-accent);
		color: var(--nord6);
	}

	.nav-link.active {
		background: var(--color-primary);
		color: var(--nord6);
	}

	.icon {
		font-size: var(--font-size-3);
	}

	.label {
		overflow: hidden;
		text-overflow: ellipsis;
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.navbar.collapsed .label {
		opacity: 0;
	}

	@media (max-width: 767px) {
		.navbar.collapsed .label {
			opacity: 1;
		}
	}
</style>
