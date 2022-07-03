import React, {useState} from 'react';
import Image from "next/dist/client/future/image";
import SideBarLink from "./SideBarLink";
import {
    BellIcon,
    BookmarkIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HomeIcon,
    InboxIcon,
    SearchIcon,
    UserIcon,
    ViewListIcon
} from "@heroicons/react/outline";


const SideBar = () => {
    const [activeLink, setActiveLink] = useState("Home")

    return (
        <div className={'hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full '}>

            <div className={'space-y-2.5 mt-4 mb-2.5 xl:ml-24 '}>
                <div className={'self-center w-20 h-20'}>
                    <Image src={"https://rb.gy/ogau5a"} alt={'twitter logo'} width={30} height={30}
                           className={"hoverAnimation"}/>
                </div>
                <SideBarLink text={"Home"} Icon={HomeIcon} isActive={activeLink === "Home"}/>
                <SideBarLink text={"Explore"} Icon={SearchIcon} isActive={activeLink === "Explore"}/>
                <SideBarLink text={"Notifications"} Icon={BellIcon} isActive={activeLink === "Notifications"}/>
                <SideBarLink text={"Messages"} Icon={InboxIcon} isActive={activeLink === "Messages"}/>
                <SideBarLink text={"BookMarks"} Icon={BookmarkIcon} isActive={activeLink === "BookMarks"}/>
                <SideBarLink text={"Lists"} Icon={ViewListIcon} isActive={activeLink === "Lists"}/>
                <SideBarLink text={"Profile"} Icon={UserIcon} isActive={activeLink === "Profile"}/>
                <SideBarLink text={"More"} Icon={DotsCircleHorizontalIcon} isActive={activeLink === "More"}/>
            </div>
            <button
                className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">Tweet
            </button>
            <div className={'flex items-center justify-center  hoverAnimation xl:ml-auto  mt-auto'}>
                <img src={'/images/ye.jpeg'} alt="" className={'h-10 w-10 mr-6  rounded-full  xl:mr-2.5'}/>
                <div className="hidden xl:inline leading-5 text-[#d9d9d9]">
                    <h4 className={'font-bold'}>DaYeezus</h4>
                    <p className={'text-[#6e767d]'}>@DaYeezus</p>
                </div>
                <DotsHorizontalIcon className={"h-5 hidden xl:inline ml-10 text-white"}/>
            </div>
        </div>
    );
};

export default SideBar;