"use client"

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

// import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
// import { Skeleton } from "@/components/ui/skeleton";

export const Toggle = () => {
    const {
        collapsed,
        onExpand,
        onCollapse
    } = useSidebar((state) => state)

    const label = collapsed ? "Expand" : "Collapse" 

    return (
        <>
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                    <p className="font-semibold text-primary">
                        For you
                    </p>
                    <Button className="h-auto p-2 ml-auto" variant="ghost" onClick={onCollapse}>
                        <ArrowLeftFromLine className="h-4 w-4"/>
                    </Button>
                </div>
            )}
        </>
    )
}