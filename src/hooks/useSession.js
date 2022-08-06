import { useState } from "react";

export const useSession = (key, defaultSessionValue) => {
    const [session, setSession] = useState(() => {
        const storageData = sessionStorage.getItem(key);
        console.log(storageData);
        return storageData ? JSON.parse(storageData) : defaultSessionValue;
    });

    const setSessionValue = (newSessionValue) => {
        sessionStorage.setItem(key, JSON.stringify(newSessionValue));
        setSession(newSessionValue);
    }

    return [
        session,
        setSessionValue,
    ]
}