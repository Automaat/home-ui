<script lang="ts">
	export let variant: 'default' | 'blue' | 'green' | 'yellow' | 'red' | 'teal' = 'default';

	let className = '';
	export { className as class };

	$: variantClass = variant !== 'default' ? `card-${variant}` : '';
	$: cardClass = `card ${variantClass} ${className}`.trim();
</script>

<div class={cardClass}>
	<slot />
</div>

<style>
	.card {
		background: var(--color-bg-card);
		border-radius: var(--radius-3);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-2);
		overflow: hidden;
		margin-bottom: var(--size-6);
	}

	.card-blue {
		border-left: 4px solid var(--nord10);
	}

	.card-green {
		border-left: 4px solid var(--nord14);
	}

	.card-yellow {
		border-left: 4px solid var(--nord13);
	}

	.card-red {
		border-left: 4px solid var(--nord11);
	}

	.card-teal {
		border-left: 4px solid var(--nord7);
	}
</style>
