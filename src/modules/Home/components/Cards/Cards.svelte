<script context="module" lang="ts">
  import { tick } from "svelte";
  import { moviesStore } from "../../store";
  import { Card, LoadMore } from "./components/components";
</script>

<script lang="ts">
  let loadMoreRef: HTMLButtonElement = null;

  const { data, loading, loadMore, updatedAfterOnMount } = moviesStore();
  $: !$loading && $updatedAfterOnMount && scrollPage();

  async function scrollPage() {
    await tick();
    loadMoreRef.scrollIntoView({ behavior: "smooth" });
  }
</script>

<section class="cards">
  <ul class="cards__list">
    {#each $data as movie}
      <li>
        <Card {...movie} />
      </li>
    {/each}
  </ul>

  <LoadMore bind:ref={loadMoreRef} loading={$loading} on:click={loadMore} />
</section>

<style lang="scss">
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.2rem;
    gap: 3.2rem;

    .cards__list {
      display: flex;
      justify-content: center;
      gap: 3.2rem;
      flex-wrap: wrap;
    }
  }
</style>
