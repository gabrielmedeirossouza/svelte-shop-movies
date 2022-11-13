<script context="module" lang="ts">
  import arrowDownImg from "@/assets/icons/arrow-down-blue.png";
  import loadingImg from "@/assets/icons/loading-blue.png";
</script>

<script lang="ts">
  export let ref: HTMLButtonElement = null;
  export let loading = false;
  let currentIcon = "";
  $: currentIcon = loading ? loadingImg : arrowDownImg;
</script>

<button class="load-more" class:loading type="button" on:click bind:this={ref}>
  <img
    class="load-more__icon"
    src={currentIcon}
    width="48"
    height="48"
    alt="Load more movies icon"
  />
</button>

<style lang="scss">
  @use "src/lib" as lib;

  .load-more {
    &:not(.loading) {
      .load-more__icon {
        animation: bounce 1s infinite;
      }
    }

    &.loading {
      .load-more__icon {
        animation: spin 1s linear infinite;
      }
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(0.8rem);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
