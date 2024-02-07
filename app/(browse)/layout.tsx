import {Navbar} from "./__components/navbar"
import {Sidebar} from "./__components/sidebar"
import {Container} from "./__components/container"


const BrowseLayout = ({
    children,
}: {children: React.ReactNode}) => { return (
    <>
    <Navbar/>
    <div className="flex h-full pt-20">
        <Sidebar/>
        <Container>
        {children}
        </Container>
        </div>
    </>
)}

export default BrowseLayout