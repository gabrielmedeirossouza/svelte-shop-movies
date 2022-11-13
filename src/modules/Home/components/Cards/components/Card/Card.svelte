<script context="module" lang="ts">
  import { formatCurrency } from "@/utils/currency";

  export type TCard = {
    title: string;
    price: number;
    src: string;
    alt: string;
  };
</script>

<script lang="ts">
  export let src: string;
  export let alt: string;
  export let title: string;
  export let price: number;

  let formattedPrice = "";
  $: price && (formattedPrice = formatCurrency(price));
</script>

<div class="card">
  <img width="256" height="220" {src} {alt} />
  <div class="card__info">
    <h2 class="card__info__title">{title}</h2>
    <p class="card__info__price">{formattedPrice}</p>
  </div>
</div>

<style lang="scss">
  @use "src/lib" as lib;

  .card {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 25.6rem;
    height: 29.6rem;
    background-color: lib.$color-30;
    border-radius: 0.4rem;
    overflow: hidden;

    .card__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .card__info__title {
        @include lib.font-subtitle;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-inline: 1.6rem;
        text-align: center;
      }

      .card__info__price {
        @include lib.font-text;
      }
    }
  }
</style>
