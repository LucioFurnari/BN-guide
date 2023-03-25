<script lang="ts">
  async function FetchApi() {
    try {
      const response = await fetch('https://api.github.com/repos/cataclysmbnteam/Cataclysm-BN/contents/data/json/items/ammo?ref=upload')
      const data = await response.json()
      return data
    } catch(err) {
      console.log(err);
    }
  }

  async function ListApi() {
    try {
      const response = await FetchApi()
      const data: any = await Promise.all(response.map(async (item: { download_url: RequestInfo | URL; }) => {
        const response = await fetch(item.download_url);
        const data = await response.json();
        return data;
      }))
      return data
    } catch (err) {
      console.log(err)
    }
  }




</script>

{#await ListApi()}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then data}
	<!-- promise was fulfilled -->
  <ul>
  {#each data as arr, i}
      <p>INDEX:{i}</p>
    {#each arr as item, i}
      <li>The name is { item.name.str || item.name.str_sp || item.name}</li>
    {/each}
  {/each}
  </ul>
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}

