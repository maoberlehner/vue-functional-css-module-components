import makeCssModuleComponent from './css-module-component';

import baseCardStyles from './BaseCard.module.scss';
import baseCardBodyStyles from './BaseCardBody.module.scss';
import baseCardFigureStyles from './BaseCardFigure.module.scss';

import baseLayoutStyles from './BaseLayout.module.scss';
import baseLayoutItemStyles from './BaseLayoutItem.module.scss';

export const BaseCard = makeCssModuleComponent({
  name: `BaseCard`,
  styles: baseCardStyles,
});

export const BaseCardBody = makeCssModuleComponent({
  name: `BaseCardBody`,
  styles: baseCardBodyStyles,
});

export const BaseCardFigure = makeCssModuleComponent({
  name: `BaseCardFigure`,
  styles: baseCardFigureStyles,
});

export const BaseLayout = makeCssModuleComponent({
  name: `BaseLayout`,
  styles: baseLayoutStyles,
});

export const BaseLayoutItem = makeCssModuleComponent({
  name: `BaseLayoutItem`,
  styles: baseLayoutItemStyles,
});
