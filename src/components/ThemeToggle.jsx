import { Sun } from "lucide-react"
import { useState } from "react";


export const ThemeToggle = () => {
    // 默认设置是白天 所以dark默认false关闭
    const [isDarkMode, setIsDarkMode] = useState(false);
    return <button>{isDarkMode ? <Sun /> : <Moon />}</button>
}