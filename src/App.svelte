<script>
  import ContactCard from "./ContactCard.svelte";

  export let name;
  let money = 37;

  $: uppercaseName = name.toUpperCase();
  $: if (name === "Jozef") {
    money = 31;
  }

  function incrementMoney() {
    money += 1;
  }

  function changeName() {
    name = "Jozef";
  }
</script>

<style>
  h1 {
    color: purple;
  }
  h2 {
    color: blueviolet;
  }
</style>

<h1>Hello!</h1>
<h2>My name is {uppercaseName}, and I have {money} million $$!</h2>
<div>
  <!-- shorter style -->
  <input type="text" bind:value={name} />
</div>

<button on:click={incrementMoney}>Add Million</button>
<button on:click={changeName}>Change Name</button>

<ContactCard userName={name} />
