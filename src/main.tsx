import { createRoot } from 'react-dom/client';
import { Menu, Slider } from './resources/components';
import { renderReactDomItem } from './resources/utils/render-react-dom-item';
import './styles';

const menuContainer = document.querySelector('#js-mobile-menu-burger');
const sliderContainer = document.querySelector('#js-slider');

renderReactDomItem(menuContainer, <Menu />, 'Container for Menu not found');
renderReactDomItem(sliderContainer, <Slider />, 'Container for Slider not found');


