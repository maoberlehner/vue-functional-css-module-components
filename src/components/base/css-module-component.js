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
  const props = parseProps({ styles, prefixes, suffixes });
  return {
    name,
    functional: true,
    props: {
      tag: {
        type: String,
        default: `div`,
      },
    },
    render(h, context) {
      return h(context.props.tag, context.data, context.children);
    },
  };
}
