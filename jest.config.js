import { createDefaultEsmPreset } from 'ts-jest';

const esmPreset = createDefaultEsmPreset({
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
});

export default {
  ...esmPreset,
  // Additional Jest configurations if necessary
};
