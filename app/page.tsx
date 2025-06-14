import { Icon } from '@iconify/react';
import tablerAntenna from "@iconify-icons/tabler/antenna";
import tablerAntennaOff from "@iconify-icons/tabler/antenna-off";

export default function Home() {
    return (
        <h1 className="text-3xl bg-gray-400 font-bold underline text-blue-500">
            Hello world! {` `}

            <button className="btn btn-primary">Primary<Icon icon={tablerAntenna} className="w-5 h-5 text-gray-200" /></button>
            <button className="btn btn-primary">Primary<Icon icon={tablerAntennaOff} className="w-5 h-5 text-gray-200" /></button>
        </h1>
    )
}

