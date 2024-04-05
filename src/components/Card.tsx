import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Card({ children }: Props) {
    return (
        <div className="w-4 border-2 border-red-600 p-3 text-3xl text-center italic">
            {children}
        </div>
    )
}