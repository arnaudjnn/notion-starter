import { Box, useStyleConfig } from '@chakra-ui/core';

const styleConfig = {
  sizes: {
    default: {
      py: [8, 8],
      px: [5, 24]
    },
    large: {
      py: [8, 8],
      px: [5, 20]
    },
    largePY0: {
      px: [5, 20]
    },
    center: {
      py: [8, 8],
      px: [5, 56]
    }
  },
  variants: {
    header: {
      zIndex: 'navigation',
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '80px',
      bg: 'white',
      boxShadow: 'primary'
    },
  }
}

export const Container = ({ size='default', variant='primary', ...rest }) => {

  const styles: any = useStyleConfig('Button', {
    size,
    variant,
    styleConfig,
  })

  return <Box sx={styles} {...rest} />
}