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

   let particles = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    left: Math.random() * 150,
    duration: Math.random() * 5 + 2,
    size: Math.random() * 48 + 16, // Random size between 16 and 64 pixels
    delay: Math.random() * 3
  }));
</script>

<style>
  :global(*) {
    box-sizing: border-box;
    touch-action: manipulation;
  }

  .icon {
    height: 48px;
  }

  .rain-container {
    position: fixed;
    top: -600px;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -9;
  }

  .raindrop {
    position: absolute;
    background: url('/favicon-32x32.png') no-repeat center center;
    background-size: contain;
    animation: rainAnimation 1s linear infinite;
  }

  @keyframes rainAnimation {
    to {
      transform: translateY(500vh) translateX(-350vw) scaleX(.33) scaleY(.33);
    }
  }
</style>

<div style="padding: 8px; min-width: 320px; height: 100%;">
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
<div class="rain-container">
  {#each particles as { id, left, duration, size, delay }}
    <div
      bind:this={particles[id]}
      class="raindrop"
      style="left: {left}vw; animation-duration: {duration}s; animation-delay: {delay}s; width: {size}px; height: {size}px;"
    ></div>
  {/each}
</div>