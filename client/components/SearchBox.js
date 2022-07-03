import React, {useRef, useState} from 'react';
import {CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon} from "@heroicons/react/outline";
import {Picker} from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const SearchBox = () => {
    const [input, setInput] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [showEmojis, setShowEmojis] = useState(false)
    const filPickerRef = useRef(null)
    const addImageToPost = (e) => {
        setShowEmojis(false)
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    }

    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    }
    return (<div className={`border-b border-gray-700 p-3 flex space-x-3`}>
        <img src="/images/ye.jpeg" alt="profile pic"
             className={'hoverAnimation rounded-full overflow-y-scroll  w-11 h-11 xl:w-32 xl:h-28 cursor-pointer'}/>
        <div className={'w-full divide-y divide-gray-700'}>
            <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                    <textarea rows="2"
                              className={'bg-transparent outline-none text-[#d9d9d9] text-lg  placeholder-gray-500 tracking-wide w-full min-h-[50px]'}
                              placeholder={"what's happening ?"} value={input}
                              onChange={(e) => setInput(e.target.value)}/>
                {selectedFile && (<div className="relative">
                    <div
                        className="absolute w-8 h-8 bg-[#14181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                        onClick={() => setSelectedFile(null)}>
                        <XIcon className={'text-whit h-5'}/>
                    </div>
                    <img src={selectedFile} alt="" className={'rounded-2xl max-h-80 object-container'}/>
                </div>)}
            </div>
            <div className={'flex items-center justify-between pt-2.5 '}>
                <div className="flex items-center">
                    <div className={'icon'} onClick={() => filPickerRef.current.click()}>
                        <PhotographIcon className={'h-[22px] text-[#1d9bf0]'}/>
                        <input type="file" onChange={addImageToPost} ref={filPickerRef} hidden/>
                    </div>
                    <div className="rotate-90 icon">
                        <ChartBarIcon className={'text-[#1d9bf0] h-[22px]'}/>
                    </div>
                    <div className="icon" onClick={() => {
                        setShowEmojis(!showEmojis)
                    }}>
                        <EmojiHappyIcon className={'text-[#1d9bf0] h-[22px]'}/>
                    </div>
                    <div className=" icon">
                        <CalendarIcon className={'text-[#1d9bf0] h-[22px]'}/>
                    </div>
                    {showEmojis && (
                        <Picker
                            onSelect={addEmoji}
                            style={{
                                position: "absolute",
                                marginTop: "465px",
                                marginLeft: -40,
                                maxWidth: "320px",
                                borderRadius: "20px",
                            }}
                            theme="dark"
                        />
                    )}
                </div>
                <button
                    disabled={!input.trim() && !selectedFile}
                    className={'bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'}>Tweet
                </button>
            </div>
        </div>
    </div>);
};

export default SearchBox;