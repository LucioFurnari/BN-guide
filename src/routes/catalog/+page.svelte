<script>
  export let data
  const {list} = data
</script>

<a href="/">Home</a>

<ul>
  {#each list as item }
    <li><a href="/catalog/{item.name}">{item.name}</a></li>
  {/each}
</ul>