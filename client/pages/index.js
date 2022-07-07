import SideBar from "../components/SideBar";
import Feed from "../components/Feed";

export default function Home() {
    return (
        <div>
            <main className={"bg-black min-h-screen overflow-hidden  flex max-w-[1500px] mx-auto"}>
                <SideBar/>
                <Feed/>
            </main>
        </div>
    )
}

