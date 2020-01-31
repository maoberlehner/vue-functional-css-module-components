import { mergeData } from 'vue-functional-data-merge';

function parseProps({ styles, prefixes, suffixes }) {
  const selectors = Object.keys(styles);
  const states = selectors.filter(selector => prefixes.some(prefix => selector.startsWith(prefix)));
  const modifiers = selectors.filter(selector => selector.startsWith(`--`));
  console.log({ modifiers, states });
  return true;
}

export default function makeCssModuleComponent({
  name,
  prefixes = [`is`, `has`],
  styles,
  suffixes = [`xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`],
}) {
  const parsedProps = parseProps({ styles, prefixes, suffixes });
  return {
    name,
    functional: true,
    props: {
      tag: {
        type: String,
        default: `div`,
      },
    },
    render(h, { children, data, props }) {
      const componentData = {
        class: styles.root,
      };

      return h(props.tag, mergeData(data, componentData), children);
    },
  };
}
