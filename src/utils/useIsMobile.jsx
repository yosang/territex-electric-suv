import { useEffect, useState } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");

        const handleChange = (e) => setIsMobile(e.matches);

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);

    }, []);

    return isMobile;
}