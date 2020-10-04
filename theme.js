const textStyles =  {
  h1: {
    fontFamily: 'heading',
    fontSize: ['4xl', '5xl'],
    fontWeight: 'black',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h2: {
    fontFamily: 'heading',
    fontSize: ['3xl', '4xl'],
    fontWeight: 'black',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h3: {
    fontFamily: 'heading',
    fontSize: ['2xl', '3xl'],
    fontWeight: 'black',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h4: {
    fontFamily: 'heading',
    fontSize: ['xl', '2xl'],
    fontWeight: 'black',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h5: {
    fontFamily: 'heading',
    fontSize: ['lg', 'xl'],
    fontWeight: 'black',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h6: {
    fontFamily: 'heading',
    fontSize: ['md', 'lg'],
    fontWeight: 'black',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  a: {
    color: '#333',
    cursor: 'pointer',
    transition: 'all .2s ease',
    '&:hover': {
      opacity: .6
    }
  }
}

export default {
  colors: {
    primary: '#156AFF',
    primaryGradient: 'linear-gradient(180deg,#2da3ff 0%,#146aff 100%)',
    secondary: '#1D254F',
    grey: {
      100: '#E7EBF0',
      200: '#FAFAFA',
      300: '#8A8AA3'
    }
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Nunito, sans-serif',
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  shadows :{
    primary: '0 15px 45px 0 rgba(0,0,0,.1)',
    primaryHover: '0 8px 30px rgba(0,0,0,.12)',
    outline: 'transparent'
  },
  radii: {
    default: '28px',
    full: '100px'
  },
  sizes: {
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
  },
  space: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
  },
  zIndices: {
    navigation: 1,
    modal: 10
  },
  textStyles,
  layerStyles: {
    blue: {
      background: 'primaryGradient',
      color: 'white',
      a: {
        color: 'white',
      }
    },
  },
  styles: {
    global: {
      ...textStyles,
      'html, body': {
        fontSize: 'md',
        bg: 'grey.200',
        lineHeight: 'tall',
        fontFamily: 'body'
      },
    }
  }
}