import type { DefaultTheme } from 'styled-components';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { layout } from './layout';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { transitions } from './transitions';
import { typography } from './typography';

export const theme: DefaultTheme = {
    colors,
    spacing,
    typography,
    transitions,
    shadows,
    layout,
    breakpoints,
};