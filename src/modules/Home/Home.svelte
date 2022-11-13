<script context="module" lang="ts">
  import { Header, Cards, Modal } from "./components/components";
  import Search from "@/components/global/Search/Search.svelte";
</script>

<script lang="ts">
  let isFavoriteModalOpen = false;
  let isCartModalOpen = false;

  function onFavoriteClick() {
    isFavoriteModalOpen = true;
  }

  function onCartClick() {
    isCartModalOpen = true;
  }
</script>

<main>
  <Header {onFavoriteClick} {onCartClick} />

  <div class="global--content">
    <Search />
    <Cards />
  </div>
</main>

<Modal.CartModal bind:active={isCartModalOpen} />
<Modal.FavoriteModal bind:active={isFavoriteModalOpen} />

<style lang="scss">
  main {
    .global--content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 3.2rem;
      gap: 3.2rem;
    }
  }
</style>
