import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

export const renderReactDomItem = (
    container: Element | null,
    node: ReactNode,
    errorMsg?: string,
): void => {
    if (container) {
        const root = createRoot(container);
        root.render(node);
    } else {
        throw new Error(errorMsg);
    }
};