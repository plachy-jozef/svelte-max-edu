<script>
  export let name;
  export let foo;
  let money = 37;

  $: uppercaseName = name.toUpperCase();
  $: console.log(name);
  $: if (name === "Jozef") {
    money = 31;
  }

  function incrementMoney() {
    money += 1;
  }

  function changeName() {
    name = "Jozef";
  }

  function nameInputChange(event) {
    const newValue = event.target.value;
    name = newValue;
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
  <input on:input={nameInputChange} type="text" value={name} />
</div>
<button on:click={incrementMoney}>Add Million</button>
<button on:click={changeName}>Change Name</button>
