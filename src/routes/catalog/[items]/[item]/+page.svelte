<script lang="ts">
  export let data:any
  const {item, slug} = data
  console.log(slug)
  import Item from "../Item.svelte";
</script>

{#await item}
  <p>waiting for the promise to resolve...</p>
{:then item} 
  {#each item as arr}
    <Item data={arr}/>
  {/each}
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}