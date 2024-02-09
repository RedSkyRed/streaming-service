"use client"

import {cn} from "@/lib/utils"
import { useSidebar } from "@/store/use-sidebar"
import { useEffect, useState } from "react"
import { ToggleSkeleton } from "./toggle"
import { RecommendedSkeleton } from "./recommended"
import { FollowingSkeleton } from "./following"

// This doesn't render its children as client sided. Why?
interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({
    children
}: WrapperProps) => {
    const {collapsed} = useSidebar((state) => state)

    const [isClient, setIsClient] = useState(false)

    useEffect(()=>{
        setIsClient(true)
    }, [])

    if (!isClient) return (
        <aside
            className={cn("fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2DE35] z-50")}
        >
            <ToggleSkeleton/>
            <FollowingSkeleton/>
            <RecommendedSkeleton/>
        </aside>
    );
    //Client sided component vs client side rendering?? Perils of hydration article.

    return (
        <aside
            className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2DE35] z-50", collapsed && "w-[70px]")}
        >
            {children}
        </aside>
    )
}