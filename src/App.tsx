

import { FC, ReactNode } from 'react'
import "tailwindcss/tailwind.css"

type Props = {
    children: ReactNode
}
const App: FC<Props> = ({ children }) => (
    <div>
        {children}
    </div>
)
export default App
