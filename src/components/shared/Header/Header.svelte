<script context="module">
  import logoImg from "@/assets/icons/logo-white.png";
</script>

<section class="header">
  <div class="global--content header__content">
    <div class="logo">
      <img src={logoImg} width="64" height="64" alt="Logo" />
      <h1 class="logo__name">Shop Movies</h1>
    </div>

    <slot />
  </div>
</section>

<style lang="scss">
  @use "src/lib" as lib;

  .header {
    background-color: lib.$color-10;

    .header__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10rem;

      .logo {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 1.2rem;

        .logo__name {
          @include lib.font-logo;
        }
      }
    }
  }
</style>
