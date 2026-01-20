<script lang="ts">
	export let id: string | undefined = undefined;
	export let type: 'text' | 'number' | 'email' | 'password' | 'date' | 'datetime-local' | 'time' =
		'text';
	export let name: string | undefined = undefined;
	export let value: string | number | undefined = undefined;
	export let placeholder = '';
	export let required = false;
	export let disabled = false;
	export let readonly = false;
	export let min: string | number | undefined = undefined;
	export let max: string | number | undefined = undefined;
	export let step: string | number | undefined = undefined;

	let className = '';
	export { className as class };
</script>

<input
	{id}
	{type}
	{name}
	bind:value
	{placeholder}
	{required}
	{disabled}
	{readonly}
	{min}
	{max}
	{step}
	class="input {className}"
	on:input
	on:change
	on:blur
	on:focus
/>

<style>
	.input {
		width: 100%;
		padding: var(--size-3);
		background: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-2);
		color: var(--color-text);
		font-size: var(--font-size-2);
		font-family: inherit;
		transition: all 0.2s;
	}

	.input:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	.input::placeholder {
		color: var(--color-text-secondary);
	}

	.input:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.input:read-only {
		background: var(--color-bg-card);
		cursor: default;
	}
</style>
