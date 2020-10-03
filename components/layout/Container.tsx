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
  },
  variants: {
    header: {
      zIndex: 'navigation',
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '80px',
      transition: '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
    },
    footer: {
      bg: 'white',
      zIndex: 'navigation',
    }
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