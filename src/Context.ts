import { createContext, useContext } from "react"

export type GlobalContent = {
    darkMode: string
    setDarkMode: (c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    darkMode: 'light',
    setDarkMode: () => { },
})

export const useGlobalContext = () => useContext(MyGlobalContext)
