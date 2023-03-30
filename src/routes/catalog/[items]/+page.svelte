<script lang="ts">
  export let data: any
  const {items, slug} = data
  console.log(slug)
</script>

{#await items}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then items}
	<!-- promise was fulfilled -->
  <ul>
  {#each items as item, i}
    <li><a href="/catalog/{slug}/{item.name}">{item.name}</a></li>
  {/each}
  </ul>
  <!-- {#if arr.length > 0} 
    {#each arr as item, i}
      <Item data={item} />
    {/each} 
  {:else}
      <Item data={arr} />
  {/if} -->

{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}