import makeCssModuleComponent from './css-module-component';

import baseCardStyles from './BaseCard.module.css';

export const BaseCard = makeCssModuleComponent({
  name: `BaseCard`,
  styles: baseCardStyles,
});
