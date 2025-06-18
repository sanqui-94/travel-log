import GithubIcon from "~icons/tabler/brand-github";

export default function LoginButton() {
  return (
    <button className="btn btn-secondary">
      Sign In with Github
      <GithubIcon height={24} width={24} />
    </button>
  );
}
