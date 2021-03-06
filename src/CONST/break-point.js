export const sizes = {
  xs: 320,
  xxs: 392,
  xxxs: 564,
  sm: 720,
  md: 900,
  lg: 1024,
  xl: 1330,
};

export const devices = {
  mobile: `(max-width: ${sizes.xs}px)`,
  mobileL: `(max-width: ${sizes.xxs}px)`,
  mobileXL: `(max-width: ${sizes.xxxs}px)`,
  tablet: `(max-width: ${sizes.sm}px)`,
  tabletL: `(max-width: ${sizes.md}px)`,
  laptop: `(max-width: ${sizes.lg}px)`,
  laptopXL: `(max-width: ${sizes.xl}px)`,
  or: '(orientation: portrait)',
};
