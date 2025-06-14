import { Icon } from '@iconify/react';
import tablerAntenna from "@iconify-icons/tabler/antenna";
import tablerAntennaOff from "@iconify-icons/tabler/antenna-off";
import { MapIcon } from "@heroicons/react/24/outline";

export default function Home() {
    return (
        <h1 className="text-3xl bg-gray-400 font-bold underline text-blue-500">
            Hello world! {` `}

            <button className="btn btn-primary">Primary<Icon icon={tablerAntenna} className="w-5 h-5 text-gray-200" /></button>
            <button className="btn btn-primary">Primary<Icon icon={tablerAntennaOff} className="w-5 h-5 text-gray-200" /></button>
            <button className="btn btn-secondary">Secondary <MapIcon className="size-6 text-blue-500"/></button>
            <button className="btn btn-secondary">Secondary <svg xmlns="http://www.w3.org/2000/svg" width="1em"
                                                                 height="1em"
                                                                 viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3zm6-3v13m6-10v13"/>
            </svg>
            </button>
        </h1>
    )
}

