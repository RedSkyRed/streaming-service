import {create} from 'zustand'

export enum ChatVariant {
    CHAT = 'CHAT',
    COMMUNITY = 'COMMUNITY'
}

// Interfaces are ??
interface ChatSidebarStore {
    collapsed: boolean
    variant: ChatVariant
    onExpand: () => void
    onCollapse: () => void
    onChangeVariant: (variant: ChatVariant) => void
}

// Need to learn how to write objects and functions
// Need to learn what the set keyword does
export const useChatSidebar = create<ChatSidebarStore>((set) => ({
    collapsed: false,
    variant: ChatVariant.CHAT,
    onExpand: () => set(() => ({collapsed: false})),
    onCollapse: () => set(() => ({collapsed: true})),
    onChangeVariant: (variant: ChatVariant) => set(() => ({ variant }))
}))