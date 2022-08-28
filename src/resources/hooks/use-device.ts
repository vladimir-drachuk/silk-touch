import { useCallback, useLayoutEffect, useState } from "react";

interface ResolutionState {
    isMobile: boolean;
    isDesktop: boolean;
}

const MOBILE_RESOLUTION = 576;
const DESKTOP_RESOLUTION = 1024;

const getResolutionState = (width: number): ResolutionState => ({
    isMobile: width <= MOBILE_RESOLUTION,
    isDesktop: width <= DESKTOP_RESOLUTION,
}) 

export const useDevice = (): ResolutionState => {
    const [resolutionState, setResolutionState] = useState(getResolutionState(window.innerWidth));

    const handleResize = useCallback(() => {
        setResolutionState(getResolutionState(window.innerWidth))
    }, [setResolutionState])

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return resolutionState;
}