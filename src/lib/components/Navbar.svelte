<script lang="ts">
	import { onMount } from 'svelte';

	type NavItem = {
		href: string;
		label: string;
		icon: string;
	};

	export let items: NavItem[];
	export let brand: string = '';
	export let currentPath: string = '';

	let collapsed = false;

	onMount(() => {
		const saved = localStorage.getItem('navbarCollapsed');
		if (saved !== null) {
			collapsed = saved === 'true';
		}
	});

	function toggleCollapse() {
		collapsed = !collapsed;
		localStorage.setItem('navbarCollapsed', String(collapsed));
	}
</script>

<nav class="navbar" class:collapsed>
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

	@media (max-width: 768px) {
		.navbar {
			width: 80px;
		}

		.brand,
		.label {
			display: none;
		}

		.navbar.collapsed {
			width: 80px;
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
</style>
