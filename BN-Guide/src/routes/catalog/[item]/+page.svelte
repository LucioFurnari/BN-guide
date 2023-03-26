<script lang="ts">
  export let data: any
  const {items} = data
</script>

{#await items}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then items}
	<!-- promise was fulfilled -->
    {#each items as arr, i}
    {#if arr.length > 0} 
    <ul>
    {#each arr as item, i}
      <li>Item name { item.name.str || item.name.str_sp || item.name}</li>
      <li>Item description {item.description}</li>
      <li>Item type: {item.type}</li>
    {/each} 
    </ul>
    {:else}
    <ul>
      <li>Item name { arr.name.str || arr.name.str_sp || arr.name}</li>
      <li>Item description {arr.description}</li>
      <li>Item type: {arr.type}</li> 
    </ul>
    {/if}
    {/each}
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}