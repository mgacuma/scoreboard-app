<script>
  import FaAngleUp from 'svelte-icons/fa/FaAngleUp.svelte'
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte'
  let score1 = 0;
  let score2 = 0;

  function increaseScore2() {
    score2 += 1;
  }

  function decreaseScore2() {
    if(score2 > 0){
      score2 -= 1;
    }
  }

  function increaseScore1() {
    score1 += 1;
  }

  function decreaseScore1() {
    if(score1 > 0){
      score1 -= 1;
    }
  }

  function resetScore(){
    score1 = 0;
    score2 = 0;
  }
</script>

<style>
  /* Add your styles here */
  :global(*) {
    box-sizing: border-box;
  }

  .icon {
    height: 48px;
  }
</style>

<div style="padding: 8px; min-width: 320px;">
  <p>Score</p>
  <div id="parent" style="display:flex; flex-direction: row; justify-content: center;">
    <div style='margin: 8px;'>
      <button class='icon' on:click={increaseScore1}>
        <FaAngleUp/>
      </button>
      <h2>P1: {score1}</h2>
      <button class='icon' on:click={decreaseScore1}>
        <FaAngleDown/>
      </button>
    </div>
    <div style='margin: 8px;'>
      <button class='icon' on:click={increaseScore2}>
        <FaAngleUp/>
      </button>
      <h2>P2: {score2}</h2>
      <button class='icon' on:click={decreaseScore2}>
       <FaAngleDown/>
      </button>
    </div>
  </div>
  <button on:click={resetScore}>Reset</button>
  
  
</div>
