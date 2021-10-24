import { useState } from "react";

export const useAuth = () => {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const openLogin = () => {
        setLogin(!login)
    }

    const openRegister = () => {
        setRegister(!register)
    }

    return [openLogin, login, openRegister, register];
}