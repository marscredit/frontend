import type { ColorMode } from '@chakra-ui/react';

import type { ColorThemeId } from 'types/settings';

interface ColorTheme {
  id: ColorThemeId;
  label: string;
  colorMode: ColorMode;
  hex: string;
  sampleBg: string;
}

/** Single dark theme only - app always uses dark mode */
export const COLOR_THEMES: Array<ColorTheme> = [
  {
    id: 'dark',
    label: 'Dark',
    colorMode: 'dark',
    hex: '#101112',
    sampleBg: 'linear-gradient(161deg, #000 9.37%, #383838 92.52%)',
  },
];
