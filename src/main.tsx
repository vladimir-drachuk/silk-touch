import { createRoot } from 'react-dom/client';
import { Menu } from './resources/components';
import './styles';

const menuContainer = document.querySelector('#js-mobile-menu-burger');

if (menuContainer) {
    const root = createRoot(menuContainer);
    root.render(<Menu />);
} else {
    throw new Error('Container for Menu not found');
}



