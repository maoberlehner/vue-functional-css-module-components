<template>
  <div class="container">
    <h1>Vue.js Functional CSS Module Components</h1>
    <div class="demo">
      <BaseLayout gap="m">
        <BaseLayoutItem
          :width="['12/12', '6/12@m', '3/12@l']"
        >
          <BaseCard>
            <BaseCardFigure
              tag="img"
              src="https://via.placeholder.com/250x140"
              alt="Placeholder"
            />
            <BaseCardBody>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod.
            </BaseCardBody>
          </BaseCard>
        </BaseLayoutItem>
        <BaseLayoutItem
          :width="['12/12', '6/12@m', '3/12@l']"
        >
          <BaseCard elevated>
            <BaseCardFigure
              tag="img"
              src="https://via.placeholder.com/250x140"
              alt="Placeholder"
            />
            <BaseCardBody>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod.
            </BaseCardBody>
          </BaseCard>
        </BaseLayoutItem>
        <BaseLayoutItem
          :width="['12/12', '6/12@m', '3/12@l']"
        >
          <BaseCard>
            <BaseCardFigure
              tag="img"
              src="https://via.placeholder.com/250x140"
              alt="Placeholder"
            />
            <BaseCardBody>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod.
            </BaseCardBody>
          </BaseCard>
        </BaseLayoutItem>
        <BaseLayoutItem
          :width="['12/12', '6/12@m', '3/12@l']"
        >
          <BaseCard>
            <BaseCardFigure
              tag="img"
              src="https://via.placeholder.com/250x140"
              alt="Placeholder"
            />
            <BaseCardBody>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod.
            </BaseCardBody>
          </BaseCard>
        </BaseLayoutItem>
      </BaseLayout>
    </div>
  </div>
</template>

<script>
import './scss/_global.scss';

import {
  BaseCard,
  BaseCardBody,
  BaseCardFigure,
  BaseLayout,
  BaseLayoutItem,
} from './components/base';

export default {
  name: `App`,
  components: {
    BaseCard,
    BaseCardBody,
    BaseCardFigure,
    BaseLayout,
    BaseLayoutItem,
  },
};
</script>

<style>
.container {
  max-width: 60em;
  margin-right: auto;
  margin-left: auto;
}
</style>
