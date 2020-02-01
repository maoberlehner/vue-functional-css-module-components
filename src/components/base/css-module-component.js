import { mergeData } from 'vue-functional-data-merge';

const PREFIXES = {
  modifier: `--`,
  state: `is-`,
};

const SUFFIXES = {
  modifier: [`-2xs`, `-xs`, `-s`, `-m`, `-l`, `-xl`, `-2xl`, `-3xl`, `-4xl`, /-(.+)\/(.+)[@(.+)]?$/],
};

function parseProps({ styles }) {
  const props = {};
  const selectors = Object.keys(styles);

  const states = selectors.filter(selector => selector.startsWith(PREFIXES.state));
  // eslint-disable-next-line no-restricted-syntax
  for (const state of states) {
    const name = state.replace(new RegExp(`^${PREFIXES.state}`), ``);
    props[name] = {
      default: false,
      meta: {
        // type: TYPES.state,
        class: state,
      },
      type: Boolean,
    };
  }

  const modifiers = selectors.filter(selector => selector.startsWith(PREFIXES.modifier));
  const groups = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const modifier of modifiers) {
    const name = modifier.replace(new RegExp(`^${PREFIXES.modifier}`), ``);
    const parts = name.split(`-`);
    const option = parts.pop();
    const suffix = `-${option}`;

    if (SUFFIXES.modifier.some(x => (x.test ? x.test(suffix) : x === suffix))) {
      const groupName = parts.join(`-`);
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(option);
    } else {
      props[name] = {
        default: false,
        meta: {
          // type: TYPES.modifier,
          class: modifier,
        },
        type: Boolean,
      };
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const groupName of Object.keys(groups)) {
    props[groupName] = {
      default: null,
      meta: {
        class: `${PREFIXES.modifier}${groupName}-`,
      },
      type: [Array, String],
    };
  }

  return props;
}

function conditionalClasses({ props, propsConfig, styles }) {
  const classData = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const name in propsConfig) {
    if (typeof props[name] === `boolean`) {
      classData[styles[propsConfig[name].meta.class]] = props[name];
    } else if (typeof props[name] === `string`) {
      classData[styles[`${propsConfig[name].meta.class}${props[name]}`]] = !!props[name];
    } else if (Array.isArray(props[name])) {
      // eslint-disable-next-line no-restricted-syntax
      for (const value of props[name]) {
        classData[styles[`${propsConfig[name].meta.class}${value}`]] = !!value;
      }
    }
  }
  return classData;
}

export default function makeCssModuleComponent({
  name,
  styles,
}) {
  const propsConfig = parseProps({ styles });
  return {
    name,
    functional: true,
    props: {
      tag: {
        type: String,
        default: `div`,
      },
      ...propsConfig,
    },
    render(h, { children, data, props }) {
      const componentData = {
        class: {
          [styles.root]: styles.root,
          ...conditionalClasses({ props, propsConfig, styles }),
        },
      };

      return h(props.tag, mergeData(data, componentData), children);
    },
  };
}
