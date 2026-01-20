<script lang="ts">
	export let id: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let value: string | number | undefined = undefined;
	export let options: Array<{ label: string; value: string | number }> = [];
	export let required = false;
	export let disabled = false;
	export let placeholder: string | undefined = undefined;

	let className = '';
	export { className as class };
</script>

<select
	{id}
	{name}
	bind:value
	{required}
	{disabled}
	class="select {className}"
	on:change
	on:blur
	on:focus
>
	{#if placeholder}
		<option value="" disabled selected={value === '' || value === undefined || value === null}
			>{placeholder}</option
		>
	{/if}
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>

<style>
	.select {
		width: 100%;
		padding: var(--size-3);
		background: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-2);
		color: var(--color-text);
		font-size: var(--font-size-2);
		font-family: inherit;
		cursor: pointer;
		transition: all 0.2s;
	}

	.select:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	.select:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
