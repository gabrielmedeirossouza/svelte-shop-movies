<script context="module">
  import searchImg from "@/assets/icons/search-white.png";
</script>

<script lang="ts">
  export let placeholder = "Procurar por...";
  export let value = "";
  export let submit = (value: string) => {};

  function handleSubmit() {
    submit(value);
  }
</script>

<form class="search" on:submit|preventDefault={handleSubmit}>
  <input class="search__input" type="text" {placeholder} bind:value />
  <button class="search__button" type="button">
    <img
      class="search__button__icon"
      src={searchImg}
      width="32"
      height="32"
      alt="Search"
    />
  </button>
</form>

<style lang="scss">
  @use "src/lib" as lib;

  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 45rem;
    background-color: lib.$color-30;
    padding: 1.2rem 2.4rem;
    border-radius: 1.2rem;

    .search__input {
      @include lib.font-text;
      width: 100%;

      &::placeholder {
        color: lib.$color-text-light-80;
      }
    }

    .search__button {
      .search__button__icon {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }
</style>
