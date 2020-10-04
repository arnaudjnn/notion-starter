import { Box, useStyleConfig } from '@chakra-ui/core';

const styleConfig = {
  baseStyle: {
    fontFamily: 'heading',
    borderRadius: 'default',
    fontWeight: 'black',
    transition: 'all 0.2s',
  },
  sizes: {
    default: {
      px: '25px',
      py: '10px'
    },
    small: {
      px: '12px',
      py: '12px',
      fontSize: 'sm'
    },
    large: {
      px: '24px',
      py: '16px',
      fontSize: 'lg'
    },
  },
  variants: {
    primary: {
      backgroundClip: 'padding-box',
      backgroundImage: 'linear-gradient(180deg,#2da3ff 0%,#146aff 100%)',
      color: 'white',
      border: '2px solid',
      borderColor: 'transparent',
      '&:hover': {
        background: 'transparent',
        color: 'primary',
        borderColor: 'primary'
      }
    },
    outline: {
      border: '2px solid',
      borderColor: 'grey.100',
      '&:hover': {
        borderColor: 'secondary'
      }
    },
    link: {
      color: 'secondary',
      transition: 'all .2s ease',
      '&:hover': {
        color: 'primary'
      }
    },
    socials: {
      color: 'white',
      border: '2px solid',
      opacity: .4,
      '&:hover': {
        opacity: .3
      }
    }
  },
}

export const Button = ({ size='default', variant='primary', ...rest }) => {

  const styles: any = useStyleConfig('Button', {
    size,
    variant,
    styleConfig,
  })

  return <Box as="button" sx={styles} {...rest} />
}