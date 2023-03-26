<script lang="ts">
  export let data: any
  const {items} = data
  import Item from "./Item.svelte";
</script>

{#await items}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then items}
	<!-- promise was fulfilled -->
  {#each items as arr, i}
  {#if arr.length > 0} 
    {#each arr as item, i}
      <Item data={item} />
    {/each} 
  {:else}
      <Item data={arr} />
  {/if}
  {/each}
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}