/* @ds-bundle: {"format":4,"namespace":"AscensionStJohnDesignSystem_1e07e3","components":[{"name":"AD_SIZES","sourcePath":"components/ads/DisplayAd.jsx"},{"name":"DisplayAd","sourcePath":"components/ads/DisplayAd.jsx"},{"name":"ArchPanel","sourcePath":"components/brand/ArchPanel.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/ads/DisplayAd.jsx":"3fd00dd3b525","components/brand/ArchPanel.jsx":"14a6475873c2","components/brand/Eyebrow.jsx":"d3778c454d2d","components/brand/Logo.jsx":"2fcc50951c79","components/core/Badge.jsx":"697a28e4b35e","components/core/Button.jsx":"a44e38f50e8d","components/core/Card.jsx":"0cc3d288b4db","components/core/Tag.jsx":"94d0ddb47535","components/feedback/Alert.jsx":"288f2648f94b","components/feedback/Dialog.jsx":"327557a146b2","components/feedback/Tooltip.jsx":"652f621a1b31","components/forms/Checkbox.jsx":"46d7ae18984c","components/forms/Input.jsx":"1d06c9dc379d","components/forms/Radio.jsx":"7a766ab820e6","components/forms/Select.jsx":"c5d191c8052a","components/forms/Switch.jsx":"5667970901af","components/icons/Icon.jsx":"8316ed67ea83","components/navigation/Breadcrumbs.jsx":"70aac9b7ed22","components/navigation/Tabs.jsx":"5899056d1f27","ui_kits/digital_advertising/AdPackage.jsx":"3dcdc7046d57","ui_kits/digital_advertising/SocialAds.jsx":"006e03cc3732","ui_kits/digital_advertising/Storyboard.jsx":"d771c1a84d30","ui_kits/email_and_banners/BannerSet.jsx":"b9b0ffc5fbac","ui_kits/email_and_banners/EmailTemplate.jsx":"5a1a90db8af9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AscensionStJohnDesignSystem_1e07e3 = window.AscensionStJohnDesignSystem_1e07e3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ArchPanel.jsx
try { (() => {
const COLORS = {
  blue: 'var(--asc-blue)',
  'medium-blue': 'var(--asc-medium-blue)',
  green: 'var(--asc-green)',
  violet: 'var(--asc-violet)',
  gold: 'var(--asc-gold)'
};

// The alternate arch graphic ships as flattened artwork per brand color and per
// cropping style: Arch 1 (sharper angle, horizontal layouts) and Arch 2 (more
// gradual, more curve showing, vertical formats). The arch always bleeds off
// the left or right edge of the color field — 'left' mirrors the artwork.
const CROP_FILE = {
  horizontal: 'arch-1',
  vertical: 'arch-2'
};
function ArchPanel({
  color = 'blue',
  crop = 'horizontal',
  bleed = 'right',
  arch = true,
  assetBase = '../../assets',
  minHeight,
  padding = 'var(--space-12)',
  style,
  children,
  ...rest
}) {
  const file = (CROP_FILE[crop] || CROP_FILE.horizontal) + '-' + color + '.png';
  return React.createElement('div', {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: COLORS[color] || COLORS.blue,
      color: 'var(--text-on-color)',
      borderRadius: 'var(--radius-panel)',
      padding,
      minHeight: minHeight,
      ...style
    },
    ...rest
  }, arch ? React.createElement('div', {
    'aria-hidden': 'true',
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url("' + assetBase + '/arch/' + file + '")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: bleed === 'left' ? 'scaleX(-1)' : 'none',
      pointerEvents: 'none'
    }
  }) : null, React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { ArchPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ArchPanel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color = 'inherit',
  as = 'div',
  style,
  ...rest
}) {
  return React.createElement(as, {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--size-body-sm)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: color,
      marginBottom: 'var(--space-3)',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const FILES = {
  'st-john-horizontal': {
    fc: 'asce_st_john_logo_hz1_fc_rgb_300.png',
    wht: 'asce_st_john_logo_hz1_wht_rgb_300.png',
    blk: 'asce_st_john_logo_hz1_blk_rgb_300.png',
    ratio: 6.9
  },
  'st-john-horizontal-stacked': {
    fc: 'asce_st_john_logo_hz2_fc_rgb_300.png',
    wht: 'asce_st_john_logo_hz2_wht_rgb_300.png',
    blk: 'asce_st_john_logo_hz2_blk_rgb_300.png',
    ratio: 4.2
  },
  'st-john-vertical': {
    fc: 'asce_st_john_logo_vt2_fc_rgb_300.png',
    wht: 'asce_st_john_logo_vt2_wht_rgb_300.png',
    blk: 'asce_st_john_logo_vt2_blk_rgb_300.png',
    ratio: 1.18
  },
  'horizontal': {
    fc: 'asce_logo_hz_fc_rgb_300.png',
    wht: 'asce_logo_hz_wht_rgb_300.png',
    blk: 'asce_logo_hz_blk_rgb_300.png',
    ratio: 5.2
  },
  'vertical': {
    fc: 'asce_logo_vt_fc_rgb_300.png',
    wht: 'asce_logo_vt_wht_rgb_300.png',
    blk: 'asce_logo_vt_wht_rgb_300.png',
    ratio: 1.55
  },
  'emblem': {
    fc: 'asce_emb_fc_rgb_300.png',
    wht: 'asce_emb_wht_rgb_300.png',
    blk: 'asce_emb_blk_rgb_300.png',
    blue: 'asce_emb_blue_rgb_300.png',
    'medium-blue': 'asce_emb_medium_blue_rgb_300.png',
    green: 'asce_emb_green_rgb_300.png',
    violet: 'asce_emb_violet_rgb_300.png',
    gold: 'asce_emb_gold_rgb_300.png',
    ratio: 1.09
  }
};

// Digital minimums, Digital Brand Guidelines p.4.
const MIN_HEIGHT = {
  vertical: 60,
  'st-john-vertical': 60,
  horizontal: 30,
  'st-john-horizontal': 30,
  'st-john-horizontal-stacked': 30,
  emblem: 30
};
function Logo({
  lockup = 'st-john-horizontal',
  color = 'fc',
  height = 48,
  clearspace = false,
  assetBase = '../../assets/logos',
  alt,
  style,
  ...rest
}) {
  const entry = FILES[lockup] || FILES['st-john-horizontal'];
  const file = entry[color] || entry.fc;
  const min = MIN_HEIGHT[lockup] || 30;
  const h = Math.max(height, min);
  // Clear space = 1.5X for lockups, 0.25 x emblem height for the emblem (p.4).
  const pad = lockup === 'emblem' ? h * 0.25 : h * (lockup.indexOf('vertical') > -1 ? 0.22 : 0.5);
  const img = React.createElement('img', {
    src: assetBase + '/' + file,
    alt: alt || (lockup.indexOf('st-john') > -1 ? 'Ascension St. John' : 'Ascension'),
    style: {
      height: h + 'px',
      width: 'auto',
      display: 'block'
    }
  });
  return React.createElement('span', {
    style: {
      display: 'inline-block',
      padding: clearspace ? pad + 'px' : 0,
      ...style
    },
    ...rest
  }, img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  blue: {
    bg: 'var(--asc-blue)',
    fg: 'var(--asc-white)'
  },
  'medium-blue': {
    bg: 'var(--asc-medium-blue)',
    fg: 'var(--asc-white)'
  },
  green: {
    bg: 'var(--asc-green)',
    fg: 'var(--asc-white)'
  },
  violet: {
    bg: 'var(--asc-violet)',
    fg: 'var(--asc-white)'
  },
  gold: {
    bg: 'var(--asc-gold)',
    fg: 'var(--asc-black)'
  },
  neutral: {
    bg: 'var(--asc-grey-100)',
    fg: 'var(--asc-grey-900)'
  }
};
function Badge({
  children,
  tone = 'green',
  subtle = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.green;
  const light = {
    blue: 'var(--asc-blue-10)',
    'medium-blue': 'var(--asc-medium-blue-10)',
    green: 'var(--asc-green-10)',
    violet: 'var(--asc-violet-10)',
    gold: 'var(--asc-gold-10)',
    neutral: 'var(--asc-grey-100)'
  };
  const dark = {
    blue: 'var(--asc-blue)',
    'medium-blue': 'var(--asc-blue)',
    green: '#007d6d',
    violet: 'var(--asc-violet)',
    gold: '#8a6100',
    neutral: 'var(--asc-grey-900)'
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--size-caption)',
      letterSpacing: '.4px',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-button)',
      background: subtle ? light[tone] : t.bg,
      color: subtle ? dark[tone] : t.fg,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  accent,
  interactive = false,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const ACCENTS = {
    blue: 'var(--asc-blue)',
    'medium-blue': 'var(--asc-medium-blue)',
    green: 'var(--asc-green)',
    violet: 'var(--asc-violet)',
    gold: 'var(--asc-gold)'
  };
  return React.createElement('div', {
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-width-hairline) solid ' + (hover ? 'var(--asc-medium-blue)' : 'var(--border-subtle)'),
      borderTop: accent ? '4px solid ' + (ACCENTS[accent] || ACCENTS.blue) : undefined,
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: hover ? 'var(--shadow-raise)' : 'var(--shadow-none)',
      transition: 'var(--transition-color), box-shadow var(--duration-fast) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    ...rest
  }, children, show ? React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      whiteSpace: 'nowrap',
      background: 'var(--asc-blue)',
      color: 'var(--asc-white)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-button)',
      boxShadow: 'var(--shadow-overlay)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      flex: '0 0 auto',
      width: '20px',
      height: '20px',
      marginTop: '2px',
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      border: 'var(--border-width-hairline) solid ' + (checked ? 'var(--asc-medium-blue)' : 'var(--border-default)'),
      background: 'var(--asc-white)',
      transition: 'var(--transition-color)'
    }
  }, checked ? React.createElement('span', {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--asc-medium-blue)'
    }
  }) : null), React.createElement('input', {
    type: 'radio',
    name,
    value,
    checked: !!checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', null, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body)'
    }
  }, label), description ? React.createElement('span', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      position: 'relative',
      width: '44px',
      height: '24px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--asc-medium-blue)' : 'var(--asc-grey-300)',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '2px',
      left: checked ? '22px' : '2px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'var(--asc-white)',
      boxShadow: 'var(--shadow-raise)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), React.createElement('input', {
    type: 'checkbox',
    role: 'switch',
    checked: !!checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
// Ascension publishes no icon library of its own. Lucide is used as the
// substitute set (see readme.md § Iconography), applied as an SVG mask so
// glyphs inherit currentColor and can be tinted with brand tokens.
//
// Served from assets/icons/ rather than unpkg.com, so icons still appear on a
// filtered network. Only the glyphs the components below name are vendored; to
// use another, copy it out of lucide-static v0.544.0 into that folder first.
// The path is resolved against the page, so it assumes a page at the root of
// the distribution, alongside _ds/.
const CDN = '_ds/ascension-st-john-design-system-1e07e32a-512c-468a-a65c-446c6acdebbc/assets/icons';
function Icon({
  name,
  size = 20,
  strokeAware = true,
  base = CDN,
  style,
  ...rest
}) {
  const url = 'url("' + base + '/' + name + '.svg")';
  return React.createElement('span', {
    'aria-hidden': 'true',
    role: 'img',
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      width: size + 'px',
      height: size + 'px',
      backgroundColor: 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
// Spec: Digital Brand Guidelines p.25. Whitney (Roboto) Semibold, all caps,
// 1.25px letter spacing, body-size type, 4px radius, 1px border when outlined,
// padding at least the height of the button type.
const SIZES = {
  sm: {
    font: 'var(--size-body-sm)',
    padY: '10px',
    padX: '18px',
    icon: 14
  },
  md: {
    font: 'var(--size-body)',
    padY: '13px',
    padX: '24px',
    icon: 16
  },
  lg: {
    font: 'var(--size-body-lg)',
    padY: '16px',
    padX: '30px',
    icon: 18
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    fg: 'var(--asc-white)',
    border: 'transparent',
    hoverBg: 'var(--asc-blue)'
  },
  emphasis: {
    bg: 'var(--action-emphasis)',
    fg: 'var(--asc-white)',
    border: 'transparent',
    hoverBg: '#8f0c6c'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--asc-medium-blue)',
    border: 'var(--asc-medium-blue)',
    hoverBg: 'var(--asc-medium-blue-10)'
  },
  white: {
    bg: 'var(--asc-white)',
    fg: 'var(--asc-blue)',
    border: 'transparent',
    hoverBg: 'var(--asc-grey-100)'
  },
  'outline-white': {
    bg: 'transparent',
    fg: 'var(--asc-white)',
    border: 'var(--asc-white)',
    hoverBg: 'rgba(255,255,255,.14)'
  },
  text: {
    bg: 'transparent',
    fg: 'var(--asc-medium-blue)',
    border: 'transparent',
    hoverBg: 'transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  icon,
  href,
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: s.font,
    lineHeight: 1,
    letterSpacing: 'var(--tracking-button)',
    textTransform: 'uppercase',
    textAlign: 'center',
    textDecoration: variant === 'text' && hover ? 'underline' : 'none',
    padding: s.padY + ' ' + s.padX,
    borderRadius: 'var(--radius-button)',
    border: 'var(--border-width-hairline) solid ' + v.border,
    background: hover && !disabled ? v.hoverBg : v.bg,
    color: v.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
    transition: 'var(--transition-color), var(--transition-transform)',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href: disabled ? undefined : href,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: base,
    ...rest
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, React.createElement('span', null, children), arrow ? React.createElement(__ds_scope.Icon, {
    name: 'arrow-right',
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/ads/DisplayAd.jsx
try { (() => {
// The six standard display-ad sizes required in every ad package (p.19).
const AD_SIZES = {
  '160x600': {
    w: 160,
    h: 600,
    layout: 'tall',
    head: 26,
    logoH: 30,
    crop: 'vertical'
  },
  '300x600': {
    w: 300,
    h: 600,
    layout: 'tall',
    head: 34,
    logoH: 34,
    crop: 'vertical'
  },
  '300x250': {
    w: 300,
    h: 250,
    layout: 'block',
    head: 26,
    logoH: 30,
    crop: 'horizontal'
  },
  '728x90': {
    w: 728,
    h: 90,
    layout: 'strip',
    head: 22,
    logoH: 30,
    crop: 'horizontal'
  },
  '320x50': {
    w: 320,
    h: 50,
    layout: 'strip',
    head: 14,
    logoH: 30,
    crop: 'horizontal'
  },
  '300x50': {
    w: 300,
    h: 50,
    layout: 'strip',
    head: 13,
    logoH: 30,
    crop: 'horizontal'
  }
};
function DisplayAd({
  size = '300x250',
  color = 'blue',
  eyebrow,
  headline,
  cta = 'Find a doctor',
  logo = 'st-john-horizontal',
  assetBase = '../../assets/logos',
  bleed = 'right',
  style,
  ...rest
}) {
  const s = AD_SIZES[size] || AD_SIZES['300x250'];
  const strip = s.layout === 'strip';
  const compact = s.h <= 50;
  return React.createElement('div', {
    // 1px minimum light-grey border, opaque background (p.19).
    style: {
      width: s.w + 'px',
      height: s.h + 'px',
      border: 'var(--border-width-hairline) solid var(--border-ad)',
      background: 'var(--asc-white)',
      overflow: 'hidden',
      flex: '0 0 auto',
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.ArchPanel, {
    color,
    crop: s.crop,
    bleed,
    assetBase: assetBase.replace(/\/logos$/, ''),
    padding: compact ? '0 12px' : s.layout === 'tall' ? '20px' : '18px',
    style: {
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: strip ? 'row' : 'column',
      alignItems: strip ? 'center' : 'flex-start',
      justifyContent: strip ? 'space-between' : 'space-between',
      gap: strip ? '14px' : '10px'
    }
  }, React.createElement('div', {
    style: {
      display: strip ? 'flex' : 'block',
      alignItems: 'center',
      gap: '12px',
      minWidth: 0
    }
  }, eyebrow && !compact ? React.createElement(__ds_scope.Eyebrow, {
    style: {
      marginBottom: '6px',
      fontSize: '11px',
      letterSpacing: '1.25px'
    }
  }, eyebrow) : null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--weight-bold)',
      fontSize: s.head + 'px',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--asc-white)',
      textWrap: 'balance'
    }
  }, headline)), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: strip ? 'row-reverse' : 'column',
      alignItems: strip ? 'center' : 'flex-start',
      gap: strip ? '14px' : '14px',
      flex: '0 0 auto'
    }
  }, React.createElement(__ds_scope.Logo, {
    lockup: logo,
    color: 'wht',
    height: s.logoH,
    assetBase
  }), React.createElement(__ds_scope.Button, {
    variant: 'white',
    size: compact ? 'sm' : 'md',
    arrow: !compact,
    style: compact ? {
      padding: '7px 12px',
      fontSize: '11px'
    } : undefined
  }, cta))));
}
Object.assign(__ds_scope, { AD_SIZES, DisplayAd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ads/DisplayAd.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('span', {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: 'var(--border-width-hairline) solid ' + (selected ? 'var(--asc-medium-blue)' : 'var(--border-default)'),
      background: selected ? 'var(--asc-medium-blue-10)' : hover ? 'var(--asc-grey-50)' : 'var(--asc-white)',
      color: selected ? 'var(--asc-blue)' : 'var(--text-body)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-color)',
      ...style
    },
    ...rest
  }, React.createElement('span', null, children), onRemove ? React.createElement('button', {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    'aria-label': 'Remove filter',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'inherit'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: {
    color: 'var(--asc-medium-blue)',
    bg: 'var(--asc-medium-blue-10)',
    icon: 'info'
  },
  success: {
    color: '#007d6d',
    bg: 'var(--asc-green-10)',
    icon: 'circle-check'
  },
  warning: {
    color: '#8a6100',
    bg: 'var(--asc-gold-10)',
    icon: 'triangle-alert'
  },
  urgent: {
    color: 'var(--asc-violet)',
    bg: 'var(--asc-violet-10)',
    icon: 'circle-alert'
  }
};
function Alert({
  tone = 'info',
  title,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return React.createElement('div', {
    role: tone === 'urgent' ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      background: t.bg,
      borderTop: '3px solid ' + t.color,
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-4) var(--space-5)',
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    style: {
      color: t.color,
      marginTop: '2px'
    }
  }), React.createElement('div', {
    style: {
      flex: 1
    }
  }, title ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)',
      marginBottom: children ? '4px' : 0
    }
  }, title) : null, children ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, children) : null), onDismiss ? React.createElement('button', {
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      color: 'var(--asc-grey-500)',
      padding: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(var(--blur-scrim))'
    },
    onClick: onClose
  }, React.createElement('div', {
    role: 'dialog',
    'aria-modal': 'true',
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width + 'px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-dialog)',
      overflow: 'hidden',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6) var(--space-6) 0'
    }
  }, React.createElement('h3', {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-h3)',
      color: 'var(--asc-blue)',
      lineHeight: 'var(--leading-heading)'
    }
  }, title), onClose ? React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Close',
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      color: 'var(--asc-grey-500)',
      padding: '4px'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 20
  })) : null), React.createElement('div', {
    style: {
      padding: 'var(--space-4) var(--space-6) var(--space-6)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)'
    }
  }, children), footer ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-6)',
      borderTop: 'var(--border-width-hairline) solid var(--border-subtle)',
      background: 'var(--surface-subtle)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      flex: '0 0 auto',
      width: '20px',
      height: '20px',
      marginTop: '2px',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-button)',
      border: 'var(--border-width-hairline) solid ' + (checked ? 'var(--asc-medium-blue)' : 'var(--border-default)'),
      background: checked ? 'var(--asc-medium-blue)' : 'var(--asc-white)',
      color: 'var(--asc-white)',
      transition: 'var(--transition-color)'
    }
  }, checked ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 14
  }) : null), React.createElement('input', {
    type: 'checkbox',
    checked: !!checked,
    onChange,
    disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', null, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)'
    }
  }, label), description ? React.createElement('span', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  icon,
  id,
  type = 'text',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || 'in-' + React.useId();
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, label) : null, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'var(--asc-white)',
      border: 'var(--border-width-hairline) solid ' + (error ? 'var(--asc-violet)' : focus ? 'var(--asc-medium-blue)' : 'var(--border-default)'),
      boxShadow: focus ? '0 0 0 3px var(--asc-medium-blue-10)' : 'none',
      borderRadius: 'var(--radius-input)',
      padding: '0 14px',
      transition: 'var(--transition-color)'
    }
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      color: 'var(--asc-grey-500)'
    }
  }) : null, React.createElement('input', {
    id: inputId,
    type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)',
      padding: '13px 0',
      minWidth: 0
    },
    ...rest
  })), error ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      color: 'var(--asc-violet)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || 'sel-' + React.useId();
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, label) : null, React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--asc-white)',
      border: 'var(--border-width-hairline) solid ' + (focus ? 'var(--asc-medium-blue)' : 'var(--border-default)'),
      boxShadow: focus ? '0 0 0 3px var(--asc-medium-blue-10)' : 'none',
      borderRadius: 'var(--radius-input)',
      transition: 'var(--transition-color)'
    }
  }, React.createElement('select', {
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body)',
      color: 'var(--text-body)',
      padding: '13px 40px 13px 14px',
      width: '100%',
      cursor: 'pointer'
    },
    ...rest
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value !== undefined ? o.value : o
  }, o.label !== undefined ? o.label : o))), React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 18,
    style: {
      position: 'absolute',
      right: '14px',
      color: 'var(--asc-grey-500)',
      pointerEvents: 'none'
    }
  })), hint ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  style,
  ...rest
}) {
  return React.createElement('nav', {
    'aria-label': 'Breadcrumb',
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--size-body-sm)',
      ...style
    },
    ...rest
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = it.label !== undefined ? it.label : it;
    return React.createElement(React.Fragment, {
      key: i
    }, last ? React.createElement('span', {
      'aria-current': 'page',
      style: {
        color: 'var(--text-muted)'
      }
    }, label) : React.createElement('a', {
      href: it.href || '#',
      style: {
        color: 'var(--text-link)'
      }
    }, label), last ? null : React.createElement(__ds_scope.Icon, {
      name: 'chevron-right',
      size: 14,
      style: {
        color: 'var(--asc-grey-300)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const active = value !== undefined ? value : items[0] && (items[0].value || items[0]);
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: 'var(--border-width-hairline) solid var(--border-subtle)',
      ...style
    },
    ...rest
  }, items.map((it, i) => {
    const val = it.value !== undefined ? it.value : it;
    const label = it.label !== undefined ? it.label : it;
    const on = val === active;
    return React.createElement('button', {
      key: i,
      role: 'tab',
      'aria-selected': on,
      onClick: () => onChange && onChange(val),
      style: {
        border: 0,
        background: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--size-body)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-book)',
        color: on ? 'var(--asc-blue)' : 'var(--text-muted)',
        borderBottom: '3px solid ' + (on ? 'var(--asc-medium-blue)' : 'transparent'),
        marginBottom: '-1px',
        transition: 'var(--transition-color)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/digital_advertising/AdPackage.jsx
try { (() => {
const {
  DisplayAd,
  Button,
  Select,
  Logo,
  ArchPanel,
  Eyebrow
} = window.AscensionStJohnDesignSystem_1e07e3;
const L = '../../assets/logos';
const CAMPAIGNS = {
  'Heart care': {
    eyebrow: 'Heart care',
    headline: 'Expert heart care, close to home',
    cta: 'Find a doctor',
    color: 'blue'
  },
  "Women's health": {
    eyebrow: "Women's health",
    headline: 'A yearly mammogram can save your life',
    cta: 'Schedule now',
    color: 'violet'
  },
  'Primary care': {
    eyebrow: 'Primary care',
    headline: 'Care that knows your name',
    cta: 'Find a doctor',
    color: 'green'
  },
  'Urgent care': {
    eyebrow: 'Urgent care',
    headline: 'Same-day care across Tulsa',
    cta: 'Find a location',
    color: 'medium-blue'
  }
};
const SIZES = ['300x250', '728x90', '160x600', '300x600', '320x50', '300x50'];
function Frame({
  label,
  children,
  scale = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--asc-grey-500)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left'
    }
  }, children));
}
function AdPackage({
  campaign,
  color,
  bleed
}) {
  const c = CAMPAIGNS[campaign];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '28px 34px',
      alignItems: 'flex-start'
    }
  }, SIZES.map(s => {
    const [w, h] = s.split('x').map(Number);
    const scale = h > 400 ? 0.62 : w > 400 ? 0.78 : 1;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        width: w * scale + 'px',
        height: h * scale + 28 + 'px'
      }
    }, /*#__PURE__*/React.createElement(Frame, {
      label: s,
      scale: scale
    }, /*#__PURE__*/React.createElement(DisplayAd, {
      size: s,
      color: color,
      eyebrow: c.eyebrow,
      headline: c.headline,
      cta: c.cta,
      bleed: bleed,
      assetBase: L
    })));
  }));
}
Object.assign(window, {
  AdPackage,
  CAMPAIGNS,
  Frame,
  ADL: L
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/digital_advertising/AdPackage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/digital_advertising/SocialAds.jsx
try { (() => {
const {
  ArchPanel,
  Logo,
  Eyebrow,
  Button
} = window.AscensionStJohnDesignSystem_1e07e3;
function SocialUnit({
  w,
  h,
  label,
  color,
  campaign,
  scale,
  crop
}) {
  const tall = h > w;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--asc-grey-500)'
    }
  }, label, " \xB7 ", w, "\xD7", h), /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale + 'px',
      height: h * scale + 'px',
      border: '1px solid var(--border-ad)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w + 'px',
      height: h + 'px',
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left'
    }
  }, /*#__PURE__*/React.createElement(ArchPanel, {
    color: color,
    crop: crop || (tall ? 'vertical' : 'horizontal'),
    bleed: "right",
    padding: "48px",
    style: {
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "st-john-horizontal",
    color: "wht",
    height: h > 700 ? 52 : 38,
    assetBase: window.ADL
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: h > 700 ? '22px' : '16px',
      letterSpacing: '1.5px'
    }
  }, campaign.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: (h > 700 ? 76 : w > 900 ? 62 : 46) + 'px',
      lineHeight: 1.06,
      textWrap: 'balance'
    }
  }, campaign.headline)), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    size: "lg",
    arrow: true
  }, campaign.cta)))));
}
function SocialAds({
  campaign,
  color
}) {
  const c = window.CAMPAIGNS[campaign];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '28px 34px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SocialUnit, {
    w: 864,
    h: 1080,
    label: "Instagram",
    color: color,
    campaign: c,
    scale: 0.3
  }), /*#__PURE__*/React.createElement(SocialUnit, {
    w: 1200,
    h: 1200,
    label: "Facebook square",
    color: color,
    campaign: c,
    scale: 0.27
  }), /*#__PURE__*/React.createElement(SocialUnit, {
    w: 1200,
    h: 628,
    label: "Facebook landscape",
    color: color,
    campaign: c,
    scale: 0.32
  }), /*#__PURE__*/React.createElement(SocialUnit, {
    w: 500,
    h: 500,
    label: "Pandora / Twitter",
    color: color,
    campaign: c,
    scale: 0.5
  }));
}
Object.assign(window, {
  SocialAds,
  SocialUnit
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/digital_advertising/SocialAds.jsx", error: String((e && e.message) || e) }); }

// ui_kits/digital_advertising/Storyboard.jsx
try { (() => {
const {
  ArchPanel,
  Logo,
  Eyebrow,
  Button
} = window.AscensionStJohnDesignSystem_1e07e3;

// Animated units are storyboarded for approval before any animation work (p.20).
// 15s maximum, one loop or three loops totalling 15s, 24fps ceiling.
const FRAMES = [{
  t: '0–4s',
  kind: 'eyebrow'
}, {
  t: '4–9s',
  kind: 'headline'
}, {
  t: '9–15s',
  kind: 'cta'
}];
function Storyboard({
  campaign,
  color
}) {
  const c = window.CAMPAIGNS[campaign];
  const [frame, setFrame] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setFrame(f => (f + 1) % 3), 2600);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '30px',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, FRAMES.map((fr, i) => /*#__PURE__*/React.createElement("div", {
    key: fr.t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: i === frame ? 'var(--asc-medium-blue)' : 'var(--asc-grey-500)'
    }
  }, "Frame ", i + 1, " \xB7 ", fr.t), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '300px',
      height: '250px',
      border: '1px solid var(--border-ad)',
      outline: i === frame ? '2px solid var(--asc-medium-blue)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(ArchPanel, {
    color: color,
    crop: "horizontal",
    bleed: "right",
    padding: "18px",
    style: {
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "st-john-horizontal",
    color: "wht",
    height: 30,
    assetBase: window.ADL
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 1,
      transition: 'opacity var(--duration-slow) var(--ease-standard)'
    }
  }, fr.kind === 'eyebrow' && /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: '16px'
    }
  }, c.eyebrow), fr.kind === 'headline' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: 1.08
    }
  }, c.headline), fr.kind === 'cta' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: 1.1
    }
  }, c.headline), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    arrow: true
  }, c.cta))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '240px',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--text-body)',
      marginBottom: '6px'
    }
  }, "Animation rules"), "15 seconds maximum \u2014 one loop, or three loops totalling 15s. Never infinite. 24fps ceiling. GIF or HTML5 at 150KB max, plus a static backup JPG for every size and market."));
}
Object.assign(window, {
  Storyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/digital_advertising/Storyboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/email_and_banners/BannerSet.jsx
try { (() => {
const {
  ArchPanel,
  Logo,
  Eyebrow,
  Button
} = window.AscensionStJohnDesignSystem_1e07e3;
const A = '../../assets';
function Unit({
  w,
  h,
  label,
  children,
  scale = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: 'var(--asc-grey-500)'
    }
  }, label, " \xB7 ", w, "\xD7", h), /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale + 'px',
      height: h * scale + 'px',
      border: '1px solid var(--border-ad)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w + 'px',
      height: h + 'px',
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left'
    }
  }, children)));
}
function WebBanner({
  color,
  campaign
}) {
  return /*#__PURE__*/React.createElement(Unit, {
    w: 1200,
    h: 300,
    label: "Web banner",
    scale: 0.62
  }, /*#__PURE__*/React.createElement(ArchPanel, {
    color: color,
    crop: "horizontal",
    bleed: "right",
    assetBase: A,
    padding: "40px 48px",
    style: {
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '620px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      fontSize: '15px'
    }
  }, campaign.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: '46px',
      lineHeight: 1.05
    }
  }, campaign.headline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "st-john-horizontal",
    color: "wht",
    height: 34,
    assetBase: A + '/logos'
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    size: "lg",
    arrow: true
  }, campaign.cta))));
}
function IntranetBanners({
  color,
  campaign
}) {
  const small = (w, h, label, size) => /*#__PURE__*/React.createElement(Unit, {
    w: w,
    h: h,
    label: label,
    scale: 1
  }, /*#__PURE__*/React.createElement(ArchPanel, {
    color: color,
    crop: h > w ? 'vertical' : 'horizontal',
    bleed: "right",
    assetBase: A,
    padding: "14px 16px",
    style: {
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: size + 'px',
      lineHeight: 1.1
    }
  }, campaign.shortHead), /*#__PURE__*/React.createElement(Logo, {
    lockup: "st-john-horizontal",
    color: "wht",
    height: h < 120 ? 18 : 24,
    assetBase: A + '/logos'
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '26px',
      alignItems: 'flex-start'
    }
  }, small(150, 325, 'Intranet tile', 20), small(440, 160, 'Intranet banner', 26), small(779, 96, 'Intranet strip', 22), small(500, 500, 'Intranet square', 34));
}
function Carousel({
  campaign
}) {
  // myAscension carousel: 706×274; the left 200×274 is overlaid by a violet box and type.
  return /*#__PURE__*/React.createElement(Unit, {
    w: 706,
    h: 274,
    label: "myAscension carousel",
    scale: 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '706px',
      height: '274px',
      background: 'var(--asc-grey-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(' + A + '/arch/arch-1-green.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'right center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '200px',
      height: '274px',
      background: 'var(--asc-violet)',
      padding: '22px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: 1.1,
      color: '#fff'
    }
  }, campaign.shortHead), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '13px',
      letterSpacing: '1.25px',
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, "Read more"))));
}
Object.assign(window, {
  WebBanner,
  IntranetBanners,
  Carousel,
  Unit
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/email_and_banners/BannerSet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/email_and_banners/EmailTemplate.jsx
try { (() => {
const {
  ArchPanel,
  Logo,
  Eyebrow,
  Button,
  Card,
  Icon
} = window.AscensionStJohnDesignSystem_1e07e3;
const A = '../../assets';
function EmailTemplate({
  color = 'violet',
  campaign
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '640px',
      background: '#fff',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "st-john-horizontal",
    height: 30,
    assetBase: A + '/logos'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--asc-grey-500)'
    }
  }, "View in browser")), /*#__PURE__*/React.createElement(ArchPanel, {
    color: color,
    crop: "horizontal",
    bleed: "right",
    assetBase: A,
    padding: "36px 32px",
    style: {
      minHeight: '210px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '10px'
    }
  }, campaign.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: 1.06,
      maxWidth: '9em',
      textWrap: 'balance'
    }
  }, campaign.headline)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontSize: '24px'
    }
  }, campaign.subhead), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      color: 'var(--text-body)',
      margin: '0 0 8px'
    }
  }, campaign.body), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      color: 'var(--text-body)',
      margin: '0 0 24px'
    }
  }, "Your care team shares one record across every Ascension St. John location, so you never have to repeat your story."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true
  }, campaign.cta), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      marginTop: '32px'
    }
  }, [['map-pin', 'Find a location', '14 clinics across the Tulsa area'], ['video', 'Virtual visits', 'See a provider from home, same day']].map(([icon, title, copy]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    padding: "18px"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    style: {
      color: 'var(--asc-medium-blue)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '16px',
      margin: '10px 0 4px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)'
    }
  }, copy))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '24px 32px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "st-john-horizontal-stacked",
    height: 40,
    assetBase: A + '/logos'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      color: 'var(--text-fineprint)',
      marginTop: '14px',
      lineHeight: 1.55
    }
  }, "1923 S. Utica Ave., Tulsa, OK 74104 \xB7 Unsubscribe \xB7 Privacy notice", /*#__PURE__*/React.createElement("br", null), "Ascension St. John does not discriminate on the basis of race, color, national origin, age, disability or sex.")));
}
Object.assign(window, {
  EmailTemplate,
  EMAIL_ASSETS: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/email_and_banners/EmailTemplate.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AD_SIZES = __ds_scope.AD_SIZES;

__ds_ns.DisplayAd = __ds_scope.DisplayAd;

__ds_ns.ArchPanel = __ds_scope.ArchPanel;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
