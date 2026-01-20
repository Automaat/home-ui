<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'icon' = 'primary';
	export let type: 'button' | 'submit' = 'button';
	export let disabled: boolean = false;
</script>

<button class={variant === 'icon' ? 'btn-icon' : `btn btn-${variant}`} {type} {disabled} on:click>
	<slot />
</button>

<style>
	.btn {
		padding: var(--size-3) var(--size-5);
		border: none;
		border-radius: var(--radius-2);
		font-weight: var(--font-weight-6);
		font-size: var(--font-size-2);
		cursor: pointer;
		transition: all 0.2s;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.btn-primary {
		background: var(--color-primary);
		color: var(--nord6);
	}

	.btn-primary:hover:not(:disabled) {
		background: var(--nord9);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.btn-secondary:hover:not(:disabled) {
		background: var(--color-accent);
	}

	.btn-icon {
		background: transparent;
		border: none;
		cursor: pointer;
		font-size: var(--font-size-3);
		padding: var(--size-2);
		transition: transform 0.2s;
	}

	.btn-icon:hover:not(:disabled) {
		transform: scale(1.2);
	}

	.btn-icon:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
