<script context="module" lang="ts">
  import favoriteImg from "@/assets/icons/favorite-white.png";
  import closeImg from "@/assets/icons/close-white.png";
  import addShoppingCartImg from "@/assets/icons/add-shopping-cart-blue.png";
  import deleteImg from "@/assets/icons/delete-blue.png";
  import tempImg from "@/temp/poster.png";
</script>

<script lang="ts">
  export let active: boolean;
</script>

<section class="container" class:active>
  <button class="close-modal" type="button" on:click={() => (active = false)}>
    <img src={closeImg} alt="close modal" width="32" height="32" />
  </button>

  <header>
    <h2>Favoritos</h2>
    <img src={favoriteImg} alt="cart" width="32" height="32" />
  </header>

  <hr />

  <section class="content">
    <ul class="content__cards-area">
      <li class="content__cards-area__card">
        <img src={tempImg} alt="poster" width="116" height="100" />
        <div class="content__cards-area__card__content">
          <div class="content__cards-area__card__content__info">
            <h2>Shazam</h2>
            <p>R$ 25,00</p>
          </div>

          <button type="button">
            <img
              src={addShoppingCartImg}
              alt="add item to cart"
              width="32"
              height="32"
            />
          </button>

          <button type="button">
            <img src={deleteImg} alt="delete item" width="32" height="32" />
          </button>
        </div>
      </li>
    </ul>

    <div class="content__action">
      <p>Total: R$ 75,00</p>
      <button type="button">Adicionar todos!</button>
    </div>
  </section>
</section>

<style lang="scss">
  @use "src/lib" as lib;

  .container {
    $width: 50rem;

    position: fixed;
    display: flex;
    flex-direction: column;
    padding-inline: 2.4rem;
    padding-block: 3.2rem;
    gap: 1.2rem;
    align-items: center;
    background-color: lib.$color-30-95;
    width: 100%;
    max-width: $width;
    height: 100vh;
    top: 0;
    right: -$width;
    transition: right 0.3s ease-in-out;

    &.active {
      right: 0;
    }

    .close-modal {
      position: absolute;
      top: 1.2rem;
      left: 1.2rem;
    }

    header {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;

      h2 {
        @include lib.font-title;
      }
    }

    hr {
      padding-inline: 6rem;
      width: 100%;
      height: 0.1rem;
      border: none;
      background-color: lib.$color-text-light;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      .content__cards-area {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        padding-block: 2.4rem;

        .content__cards-area__card {
          display: flex;
          background-color: lib.$color-60;
          border-radius: 0.4rem;
          overflow: hidden;

          .content__cards-area__card__content {
            display: flex;
            gap: 1.2rem;
            padding-inline: 2.4rem;
            align-items: center;
            width: 100%;

            .content__cards-area__card__content__info {
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
              text-align: center;

              h2 {
                @include lib.font-subtitle;
              }

              p {
                @include lib.font-text;
              }

              h2,
              p {
                color: lib.$color-30;
              }
            }
          }
        }
      }

      .content__action {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;

        p {
          @include lib.font-text;
        }

        button {
          @include lib.font-text;
          border-radius: 0.4rem;
          background-color: lib.$color-10;
          width: 100%;
          padding: 1.2rem 2.4rem;
        }
      }
    }
  }
</style>
