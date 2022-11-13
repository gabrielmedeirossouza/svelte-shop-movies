<script context="module" lang="ts">
  import Header from "@/components/shared/Header/Header.svelte";
  import cartImg from "@/assets/icons/cart-white.png";
  import favoriteImg from "@/assets/icons/favorite-white.png";
</script>

<script lang="ts">
  export let onFavoriteClick: () => void;
  export let onCartClick: () => void;
</script>

<Header>
  <div class="header">
    <button type="button" on:click={onFavoriteClick}>
      <img src={favoriteImg} width="32" height="32" alt="Favorite" />
    </button>

    <button type="button" on:click={onCartClick}>
      <img src={cartImg} width="32" height="32" alt="Cart" />
    </button>
  </div>
</Header>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1.2rem;
  }
</style>
