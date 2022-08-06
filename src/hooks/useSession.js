import { useState } from "react";

export const useSession = (key, defaultSessionValue) => {
    const [session, setSession] = useState(() => {
        const storageData = sessionStorage.getItem(key);
        if(storageData !== null){
            if(storageData !== undefined || storageData !== 'undefined'){
                return storageData ? JSON.parse(storageData) : defaultSessionValue;
            } else {
                return '{}'
            }
        } else {
            return '{}'
        }
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