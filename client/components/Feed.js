import React from 'react';
import {SparklesIcon} from "@heroicons/react/outline";
import SearchBox from "./SearchBox";

const Feed = () => {
    return (
        <div className={'flex-grow text-white border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]'}>
            <div
                className={'flex items-center sm:justify-between py-2 px-3 sticky  border-b border-b-gray-700 text-[#d9d9d9] top-0 bg-black z-50 '}>
                <h2 className={'font-bold text-lg sm:text-xl'}>Home</h2>
                <div className={'hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'}>
                    <SparklesIcon className={'h-5 text-white'}/>
                </div>
            </div>
            <SearchBox/>
        </div>
    );
};

export default Feed;