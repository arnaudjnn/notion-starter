/** @jsx jsx */
import { jsx } from '@chakra-ui/system';
import { useStyleConfig, useTheme } from '@chakra-ui/core';
import ReactSelect from 'react-select';

const styleConfig = {
  baseStyle: {
    borderRadius: 'default'
  }
}

export default function Select({ ...rest }) {
  const theme = useTheme();

  const defaultStyles = {
    control: base => ({
      ...base,
      cursor: 'pointer',
      fontSize: theme.fontSizes.sm,
      border: 'none',
      boxShadow: 'none',
      minHeight: 'none',
      backgroundColor: 'transparent',
      borderRadius: '20px',
      padding: '0 8px',
      fontWeight: 'bold',
    }),
    valueContainer: base => ({
      ...base,
      justifyContent: 'flex-end',
    }),
    indicatorsContainer: () => ({
      height: 'auto'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      padding: '0px',
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
    }),
    singleValue: (base, state) => ({
      color: theme.colors.accent5,
    }),
    menu: (base, state) => ({
      ...base,
      color: 'black',
      background: 'white',
      textAlign: 'left'
    }),
    option: (base, state) => ({
      ...base,
      cursor: 'pointer',
      fontSize: theme.fontSizes.sm,
      fontWeight: 'bold',
      color: state.isSelected ? 'white' : 'black',
      background: state.isSelected ? theme.colors.primary : 'transparent',
    })
  };

  const styles: any = useStyleConfig("Select", {
    styleConfig,
  })

  return <ReactSelect styles={defaultStyles} sx={styles} {...rest} />
}