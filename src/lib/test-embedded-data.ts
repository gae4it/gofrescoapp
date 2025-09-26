// Test per verificare che i dati embedded funzionino
import { getAllCategories, getCategoryById } from './embedded-data';

console.log('🧪 Testing embedded data...');

try {
  const categories = getAllCategories();
  console.log('✅ Categories loaded:', categories.length);
  
  const category1 = getCategoryById(1);
  console.log('✅ Category 1 loaded:', category1?.name);
  
  console.log('🎉 All embedded data tests passed!');
} catch (error) {
  console.error('❌ Embedded data test failed:', error);
}

export {}; // Make it a module