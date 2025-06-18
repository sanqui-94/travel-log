// Support for unplugin-icons virtual imports like ~icons/tabler/...
declare module "~icons/*" {
  import type { ComponentType, SVGProps } from "react";
  const component: ComponentType<SVGProps<SVGSVGElement>>;
  export default component;
}
