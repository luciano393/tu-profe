import { useState } from "react"; 

export const useOpen = () => {
    const [open, setOpen] = useState(false)

    const changeOpen = () => {
        setOpen(!open);
    }

    return [open, changeOpen ];
}