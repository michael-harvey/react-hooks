import { useEffect, useState } from "react";

/**
 * Used for page scroll progress bars etc
 *
 * @returns int - scroll percentage
 */
function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const scrollPercent =
                (100 * window.scrollY) /
                (document.documentElement.scrollHeight - window.innerHeight);

            setScrollProgress(scrollPercent.toFixed(0));
        };

        window.addEventListener("scroll", updateHeight);

        return () => {
            window.removeEventListener("scroll", updateHeight);
        };
    }, [scrollProgress]);

    return scrollProgress;
}

export default useScrollProgress;