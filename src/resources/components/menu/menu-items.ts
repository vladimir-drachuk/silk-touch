interface IMenuItem {
    id: string;
    label: string;
    href: string;
}

export const menuItems: IMenuItem[] = [{
    id:'01',
    label: 'Услуги',
    href: '#services',
}, {
    id:'02',
    label: 'Цены',
    href: '#prices',
}, {
    id:'03',
    label: 'Команда',
    href: '#team',
}, {
    id:'04',
    label: 'Фото',
    href: '#photo',
}, {
    id:'05',
    label: 'Контакты',
    href: '#contacts',
}];