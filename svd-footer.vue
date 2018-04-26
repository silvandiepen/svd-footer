<template>
  <footer class="svd-footer bg-black">
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
                <menu-item><strong>Projects</strong></menu-item>
                <menu-item link="https://characters.svd.im">Characters</menu-item>
                <menu-item link="https://flags.svd.im">Flags</menu-item>
                <menu-item link="https://namer.svd.im">Namer</menu-item>
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
  </footer>
</template>
<style lang="scss">
@import "~svd-style/ext";

.svd-footer {
  padding: grid(1);
  .content-columns {
    .column {
      padding: grid(1 0);
      @media #{$medium-down} {
        padding: grid(1);
      }
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-left: 0;
      }
    }
  }
}

.copyright {
  font-size: rem(12);
  color: color(White,.5);
}
.footerNav {
  &__list {
    position: relative;
  }
  &__item {
    display: block;
  }
  &__link {
    display: block;
    padding: 1rem;
    text-decoration: none;
  }
  &__text {
    display: block;
    color: white;
  }
}
</style>
