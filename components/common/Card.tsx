import { Box, useStyleConfig } from '@chakra-ui/core';

const styleConfig = {
  baseStyle: {
    display: 'flex', 
    flexDirection: 'column',
    transition: 'transform .2s ease-in-out, box-shadow .2s ease-in-out',
  },
  variants: {
    default: {
      bg: 'white',
      borderRadius: 'default',
      boxShadow: 'primary',
    },
    animated: {
      bg: 'white',
      borderRadius: 'default',
      boxShadow: 'primary',
      _hover: {
        boxShadow: 'primaryHover',
        transform: 'translateY(-3px)'
      },
    },
    outline: {
      border: '2px solid',
      borderColor: 'grey.100'
    }
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