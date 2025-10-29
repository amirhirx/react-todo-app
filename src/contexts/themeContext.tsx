import { createContext, useState } from "react"

interface IThemeContext {
    theme: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<boolean>(false)

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
