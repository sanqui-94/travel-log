import Image from "next/image";

interface AvatarProps {
  name: string;
  src?: string;
  alt?: string;
}

export default function Avatar({
  name,
  src = "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
  alt = "User Avatar",
}: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center gap-3">
      <div className="avatar bg-base-300">
        <div className="w-12 rounded-full">
          <Image
            src={src}
            alt={alt || "User avatar"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-secondary">{name}</div>
    </div>
  );
}
