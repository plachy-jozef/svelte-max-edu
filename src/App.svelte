<script>
  export let name;
  export let foo;
  let money = 37;

  function incrementMoney() {
    money += 1;
  }
</script>

<style>
  h1 {
    color: purple;
  }
  h2 {
    color: blueviolet
  }
</style>

<h1>Hello!</h1>
<h2>My name is {name}, and I have {money} million $$!</h2>
<button on:click="{incrementMoney}">Add Million</button>