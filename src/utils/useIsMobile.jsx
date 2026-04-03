import { useEffect, useState } from "react";

// Custom react hook that checks wether the screen is below 600 on mount and attaches an event listener
// When the screen changes
// Essentially this is doing the same as a @media query in CSS
export default function useIsMobile() {

    // Sets initial value of isMobile, based on the screen width, true if its below 600px
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);

    // This hook runs once, on component mount.
    useEffect(() => {

        // creates a live media query object
        // it contains a boolean called matches (true if screen < 600px)
        // this object updates automatically when the screen changes
        const mediaQuery = window.matchMedia("(max-width: 600px)");

        // function to update state
        const handleChange = (e) => setIsMobile(e.matches);

        // event listener on the mediaQuery object, calls handleChange when the screen width crosses 600px breakpoint
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange); // remove the listener when the component dismounts

    }, []);

    return isMobile; // returns the state
}