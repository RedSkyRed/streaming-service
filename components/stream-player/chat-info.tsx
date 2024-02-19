import { useMemo } from "react";
import { Info } from "lucide-react";

import { Hint } from "../hint";

interface ChatInfoProps {
    isDelayed: boolean
    isFollowersOnly: boolean
}

export const ChatInfo = ({
    isDelayed, isFollowersOnly
}: ChatInfoProps) => {
    const hint = useMemo(() => {
        if (isFollowersOnly && !isDelayed) {
            return "Only followers can chat"
        } 

        if (isDelayed && !isFollowersOnly) {
            return "Messages are delayed by three seconds"
        }

        if (isDelayed && isFollowersOnly) {
            return "Only followers can chat. Messages are delayed by 3 seconds"
        }

        return ""
    },[isDelayed, isFollowersOnly])

    const label = useMemo(() => {
        if (isFollowersOnly && !isDelayed) {
            return "Followers Only"
        } 

        if (isDelayed && !isFollowersOnly) {
            return "Slow Mode Active"
        }

        if (isDelayed && isFollowersOnly) {
            return "Followers Only and Slow Mode Actve"
        }

        if (!isDelayed && !isFollowersOnly) {
            return null
        }
        

    },[isDelayed, isFollowersOnly])

    return (
        <div className="p-2 text-muted-foreground bg-white/5 border border-white/10 w-full rounded-t-md flex items-center gap-x-2">
            <Hint label={hint}>
                <Info className="w-4 h-4"/>
            </Hint>
            <p className="text-xs font-semibold">
                {label}
            </p>
        </div>
    )
}