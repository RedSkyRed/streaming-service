import {create} from 'zustand'

// Interfaces are ??
interface CreatorSidebarStore {
    collapsed: boolean
    onExpand: () => void
    onCollapse: () => void
}

// Need to learn how to write objects and functions
// Need to learn what the set keyword does
export const useCreatorSidebar = create<CreatorSidebarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({collapsed: false})),
    onCollapse: () => set(() => ({collapsed: true}))
}))