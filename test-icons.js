// Test per vedere le icone disponibili in react-icons
import React from 'react';

// Test di importazione delle icone Noto Emoji
// Le icone potrebbero avere nomi diversi o essere in un path diverso

function TestIcons() {
  try {
    // Provo ad importare alcune icone comuni
    const { TbApple, TbCarrot } = require('react-icons/tb'); // Tabler icons
    const { MdApple } = require('react-icons/md'); // Material Design
    const { FaAppleAlt } = require('react-icons/fa'); // FontAwesome
    
    return (
      <div>
        <TbApple size={32} />
        <TbCarrot size={32} />
        <MdApple size={32} />
        <FaAppleAlt size={32} />
      </div>
    );
  } catch (error) {
    console.log('Error importing icons:', error);
    return <div>Test failed</div>;
  }
}

export default TestIcons;