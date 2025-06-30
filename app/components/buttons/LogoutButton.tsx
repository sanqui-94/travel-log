import ArrowLeftEndOnRectangleIcon from "@heroicons/react/24/outline/ArrowLeftEndOnRectangleIcon";

export default function LogoutButton({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <button
      className="btn text-error border-black bg-black"
      onClick={onClick}
      aria-label="Logout from the travel log app"
    >
      <ArrowLeftEndOnRectangleIcon width={32} height={32} />
      Logout
    </button>
  );
}
