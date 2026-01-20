<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'success' | 'danger' | 'icon' = 'primary';
	export let type: 'button' | 'submit' = 'button';
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let disabled: boolean = false;

	let className = '';
	export { className as class };

	$: buttonClass =
		variant === 'icon'
			? `btn-icon ${className}`
			: `btn btn-${variant} btn-${size} ${className}`.trim();
</script>

<button class={buttonClass} {type} {disabled} on:click>
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

	.btn-success {
		background: var(--color-success);
		color: var(--nord0);
	}

	.btn-success:hover:not(:disabled) {
		opacity: 0.9;
	}

	.btn-danger {
		background: var(--color-error);
		color: var(--nord6);
	}

	.btn-danger:hover:not(:disabled) {
		opacity: 0.9;
	}

	.btn-small {
		padding: var(--size-2) var(--size-3);
		font-size: var(--font-size-1);
	}

	.btn-medium {
		padding: var(--size-3) var(--size-5);
		font-size: var(--font-size-2);
	}

	.btn-large {
		padding: var(--size-4) var(--size-6);
		font-size: var(--font-size-3);
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
