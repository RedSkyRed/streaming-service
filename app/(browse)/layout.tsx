import {Navbar} from "./__components/navbar"
import {Sidebar, SidebarSkeleton} from "./__components/sidebar"
import {Container} from "./__components/container"
import { Suspense } from "react"

const BrowseLayout = ({
    children,
}: {children: React.ReactNode}) => { return (
    <>
    <Navbar/>
    <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton/>}>
            <Sidebar/>
        </Suspense>
        <Container>
        {children}
        </Container>
        </div>
    </>
)}

export default BrowseLayout