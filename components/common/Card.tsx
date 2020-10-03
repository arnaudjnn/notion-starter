import { Box, useStyleConfig } from '@chakra-ui/core';

const styleConfig = {
  baseStyle: {
    bg: 'white',
    borderRadius: 'default',
    display: 'flex', 
    flexDirection: 'column',
    transition: 'transform .2s ease-in-out, box-shadow .2s ease-in-out',
  },
  variants: {
    default: {
      boxShadow: 'primary',
    },
    animated: {
      _hover: {
        boxShadow: 'primaryHover',
        transform: 'translateY(-3px)'
      },
    },
  },
  sizes: {
    default: {
      p: 5
    },
    defaultP0: {
      p: 0
    }
  }
}

export const Card = ({ variant="default", size="default", ...rest }) => {

  const styles: any = useStyleConfig("Card", {
    variant,
    size,
    styleConfig,
  })

  return <Box sx={styles} {...rest} />
}