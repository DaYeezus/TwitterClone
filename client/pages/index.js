import SideBar from "../components/SideBar";
<<<<<<< HEAD

export default function Home() {
  return (
   <div>
     <main className={"bg-black min-h-screen overflow-hidden  flex max-w-[1500px] mx-auto"}>
         <SideBar/>
     </main>
   </div>
  )
=======
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
>>>>>>> aae583a (finish side bar)
}
