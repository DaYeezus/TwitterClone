import React from 'react';

const SideBarLink = ({text ,Icon, isActive}) => {
    return (
        <div
            className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${isActive && "font-bold"}`}>
            <Icon className={`h-7`}/>
            <span className={'hidden xl:inline'}>{text}</span>
        </div>
    );
};

export default SideBarLink