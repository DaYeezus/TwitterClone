import React, {useState} from 'react';
import {XIcon} from "@heroicons/react/solid";

const SearchBox = () => {
    const [input,setInput] = useState("")
    const [selectedFile,setSelectedFile] = useState(null)
    return (
        <div className={`border-b border-gray-700 p-3 flex space-x-3`}>
            <img src="/images/ye.jpeg" alt="profile pic" className={'hoverAnimation rounded-full overflow-y-scroll  w-11 h-11 cursor-pointer'}/>
            <div className={'w-full divide-y divide-gray-700'}>
                <div className={``}>
                    <textarea rows="2"  className={'bg-transparent outline-none text-[#d9d9d9] text-lg  placeholder-gray-500 tracking-wide w-full min-h-[50px]'} placeholder={"what's happening ?"}  value={input} onChange={(e) => setInput(e.target.value)}/>
                    {selectedFile && (
                        <div className="relative">
                            <div className="absolute w-8 h-8 bg-[#14181c] hover:bg-[#272c26] bg-opacity-75 rounded-full items-center justify-center top-1 left-1 cursor-pointer" onClick={() => setSelectedFile(null)}>
                                <XIcon className={'text-whit h-5'}/>
                            </div>
                            <img src={selectedFile} alt="" className={'rounded-2xl max-h-80 object-container'}/>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default SearchBox;