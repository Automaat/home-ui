<script lang="ts">
	export let headers: string[] = [];
	export let ariaLabel: string | undefined = undefined;
	export let mobileCardView = false;

	let className = '';
	export { className as class };
</script>

<div class="table-wrapper {className}" class:mobile-cards={mobileCardView}>
	<div class="table-container">
		<table aria-label={ariaLabel}>
			<thead class:desktop-only={mobileCardView}>
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
</div>

<style>
	.table-wrapper {
		width: 100%;
	}

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

	table :global(tbody tr) {
		border-bottom: 1px solid var(--color-border);
		transition: background-color 0.2s;
	}

	table :global(tbody tr:hover) {
		background-color: var(--color-bg-card);
	}

	table :global(td) {
		padding: var(--size-4);
		font-size: var(--font-size-2);
	}

	.desktop-only {
		display: table-header-group;
	}

	/* Mobile card view */
	@media (max-width: 767px) {
		.mobile-cards .desktop-only {
			display: none;
		}

		.mobile-cards table {
			border: none;
		}

		.mobile-cards :global(tbody) {
			display: block;
		}

		.mobile-cards :global(tbody tr) {
			display: block;
			border: 1px solid var(--color-border);
			border-radius: var(--radius-2);
			margin-bottom: var(--size-4);
			padding: var(--size-4);
			background: var(--color-bg-card);
		}

		.mobile-cards :global(tbody tr:hover) {
			background-color: var(--color-accent);
		}

		.mobile-cards :global(tbody td) {
			display: block;
			padding: var(--size-2) 0;
			border: none;
		}

		.mobile-cards :global(tbody td::before) {
			content: attr(data-label);
			font-weight: var(--font-weight-6);
			color: var(--color-text-muted);
			display: block;
			margin-bottom: var(--size-1);
			font-size: var(--font-size-1);
		}

		.mobile-cards :global(tbody td:empty) {
			display: none;
		}
	}
</style>
