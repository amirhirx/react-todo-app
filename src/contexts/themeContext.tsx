import { createContext, useEffect, useState } from "react"

interface IThemeContext {
    theme: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<boolean>(
        localStorage.getItem("theme") === "true"
    )

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            theme ? "dark" : "light"
        )
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => !prev)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }
