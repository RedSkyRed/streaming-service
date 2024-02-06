import {Navbar} from "./__components/navbar"
import {Sidebar} from "./__components/sidebar"


const BrowseLayout = ({
    children,
}: {children: React.ReactNode}) => { return (
    <>
    <Navbar/>
    <div className="flex h-full pt-20">
        <Sidebar/>
        {children}</div>
    </>
)}

export default BrowseLayout