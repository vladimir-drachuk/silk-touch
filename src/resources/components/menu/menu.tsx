import { useState, useRef, AnimationEvent } from 'react';
import { menuItems } from './menu-items';
import './menu.scss';

export const Menu = (): JSX.Element => {
    const [isOpen, setOpenState] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleMenuOpen = () => {
        setOpenState(true);
    }

    const handleMenuClose = () => {
        setOpenState(false);
    }

    const handleMenuAnimClose = () => {
        contentRef.current!.classList.add('content-close-animation');
    }

    const handleAnimationEnd = ({ animationName }: AnimationEvent) => {
        if (animationName === 'content-disappear') {
            contentRef.current!.classList.add('hide-visibility');
            overlayRef.current!.classList.add('hide-visibility');
            setOpenState(false);
        }
    }

    return (
        <>
            <div className="react-menu-button" onClick={handleMenuOpen}>
                <span className="react-menu-button-uiitem" />
                <span className="react-menu-button-uiitem" />
                <span className="react-menu-button-uiitem" />
            </div>
            {isOpen && (
                <>
                    <div className="react-menu-overlay" onClick={handleMenuAnimClose} ref={overlayRef} />
                    <div
                        className="react-menu-content"
                        ref={contentRef}
                        onAnimationEnd={handleAnimationEnd}   
                    >
                        <header>
                            <div className="react-menu-close-button" onClick={handleMenuAnimClose} />
                        </header>
                        <ul>
                            {menuItems.map(({ id, label, href }) => (
                                <li
                                    key={id}
                                    onClick={handleMenuClose}
                                    className="react-menu-content-item"
                                >
                                    <a href={href} className="react-menu-content-item-link">{label}</a>
                                </li>
                            ))}
                        </ul>
                        <footer>
                            <div className="logo">logo container</div>
                        </footer>
                    </div>
                </>
            )}
        </>
    )
}