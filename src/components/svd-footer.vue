<template>
  <footer class="svd-footer bg-black">
    <div>
      <row center>
        <column large="2:3">
          <row class="content-columns">
            <column medium="half">
              <h3>
                svd.im&nbsp;&nbsp;&mdash;&nbsp;&nbsp;playground
              </h3>
              <p>
                Svd.im is the online playground of <a href="https://silvandiepen.nl">Sil van Diepen</a>. You can find here small little projects and test Sil has been making. Nothing of this is ready, tested, done or anything. It's just for testing and fun. Feel free to check it out.
              </p>
            </column>
            <column medium="half">
              <menu-container module="footerNav">
                <menu-group>
                  <menu-item class="title"><strong>Projects</strong></menu-item>
                  <menu-item link="https://characters.svd.im">Characters</menu-item>
                  <menu-item link="https://flags.svd.im">Flags</menu-item>
                  <menu-item link="https://i18n.svd.im">i18n</menu-item>
                  <menu-item link="https://list.svd.im">List</menu-item>
                  <menu-item link="https://namer.svd.im">Namer</menu-item>
                  <menu-item link="https://password.svd.im">Password</menu-item>
                </menu-group>
              </menu-container>
            </column>
          </row>
          <row class="copyright">
            <column>
              2018 copyright &nbsp;&nbsp;&nbsp;&mdash;&nbsp;&nbsp;&nbsp;Sil van Diepen. All rights served
            </column>
          </row>
        </column>
      </row>
    </div>
  </footer>
</template>
<script>
export default {
  name: "svdFooter",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "~svd-style/ext";

.svd-footer {
  padding: grid(1);
  @media #{$small-only} {
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0;
    transition: 0.3s;
    div {
      opacity: 0;
      transition: opacity 0.3s 0.3s;
    }
    &:hover {
      width: 100vw;
      height: 100vh;
      padding: 0;
      div {
        opacity: 1;
      }
    }
  }
  .content-columns {
    .column {
      padding: grid(1 1);
      @media #{$medium-down} {
        padding: grid(1);
      }
      @media #{$small-only} {
        padding: 30px;
      }
      &:first-child {
        padding-left: 0;
        @media #{$small-only} {
          padding: 30px;
        }
      }
      &:last-child {
        padding-left: 0;
        @media #{$small-only} {
          padding: 30px;
        }
      }
      a {
        color: color(Blue);
        text-decoration: none;
      }
      p {
        line-height: 2rem;
      }
    }
  }
}

.copyright {
  font-size: rem(12);
  color: color(White, 0.5);
  @media #{$small-only} {
    position: absolute;
    bottom: 0;
    padding: 30px;
    background-color: color(Dark);
    margin: 0;
  }
}
.footerNav {
  &__list {
    position: relative;
    // column-count: 2;
  }
  &__item {
    display: inline-block;
    width: 50%;
    &.title {
      width: 100%;
      line-height: 2rem;
      .footerNav__text {
        color: white;
      }
    }
  }
  &__link {
    display: block;
    padding: 0.5rem;
    @media #{$small-only} {
      padding-left: 0;
    }
    text-decoration: none;
    // color: color(Blue);
  }
  &__text {
    display: block;
    color: white;
    color: color(Blue);
  }
}
</style>
