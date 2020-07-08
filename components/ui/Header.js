import React from 'react';
import { useColorMode } from 'theme-ui';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header>
      <button
        type="button"
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
};

export default Header;
