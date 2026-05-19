export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        // Desk
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.07,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        // React
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [3, 4, 0] : isTablet ? [6, 2, 0] : [10, 3, 0],
        // JS
        javascriptLogoPosition: isSmall ? [-3, 4, -2] : isMobile ? [-3, 4, 0] : isTablet ? [-7, 3, 0] : [-10, 3, 0],
        javascriptLogoScale: isSmall? 10.5 : isMobile ? 12.5 : isTablet ? 13.5 : 15,
        // Three.Js
        threeLogoPosition: isSmall ? [2, -8, 0] : isMobile ? [3, -7, 0] : isTablet ? [6, -7, 0] : [9, -5.5, 0],
        threeLogoScale:isSmall ? 0.015 : isMobile ? 0.018 : isTablet ? 0.02 : 0.023,
        // TailwindCSS
        tailwindLogoPosition: isSmall ? [-3, -8, -3] : isMobile ? [-4, -8, -2] : isTablet ? [-6, -7, -0] : [-10, -8, -3],
        tailwindLogoScale: isSmall ? 3 : isMobile ? 3 : isTablet ? 4 : 5,
    };
};