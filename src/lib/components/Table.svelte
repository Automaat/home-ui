<script lang="ts">
	export let headers: string[] = [];

	let className = '';
	export { className as class };
</script>

<div class="table-container {className}">
	<table>
		<thead>
			<tr>
				{#each headers as header}
					<th>{header}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<slot />
		</tbody>
	</table>
</div>

<style>
	.table-container {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	table thead {
		border-bottom: 2px solid var(--color-border);
	}

	table th {
		text-align: left;
		padding: var(--size-3) var(--size-4);
		font-weight: var(--font-weight-6);
		color: var(--color-text);
		font-size: var(--font-size-2);
	}

	table tbody tr {
		border-bottom: 1px solid var(--color-border);
		transition: background-color 0.2s;
	}

	table tbody tr:hover {
		background-color: var(--color-bg-card);
	}

	table :global(td) {
		padding: var(--size-4);
		font-size: var(--font-size-2);
	}
</style>
