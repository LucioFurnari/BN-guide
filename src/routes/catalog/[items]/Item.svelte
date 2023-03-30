<script>
  /**
     * @type {{ name: { str: string; str_sp: string; }; description: string; type:any; damage:any; material: string[] }}
     */
  export let data
  const {damage, name, description, type, material } = data
</script>

<div class="item-container">
  <h2> { name.str || name.str_sp || name}</h2>
  <p>{ description || ''}</p>
  <p>{ type }</p>
  {#if damage}
  <ul>
    <li>Damage type: {damage.damage_type}</li>
    <li>Damage: {damage.amount}</li>
    <li>Armor penetration: {damage.armor_penetration}</li>
  </ul>
  {/if}
  {#if material}
    <div>
    Material: [
    {#each material as item}
      <span>{item}</span>
    {/each}
      ]
    </div> 
  {/if}
</div>

<style>
  .item-container {
    border: 2px solid rgb(230,230,230);
    border-radius: 10px;
    padding: 2rem;
  }
</style>