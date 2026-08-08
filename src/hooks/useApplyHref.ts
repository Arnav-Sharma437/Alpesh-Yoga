import { usePathname } from "next/navigation";

export function useApplyHref() {
  const pathname = usePathname();

  if (!pathname) return "/apply";

  if (pathname.includes("/goa/")) {
    const p = pathname.split("/goa/")[1];
    return `/apply?location=goa&program=${encodeURIComponent(p.replace(/-/g, " "))}`;
  } else if (pathname.includes("/dharamshala/")) {
    const p = pathname.split("/dharamshala/")[1];
    return `/apply?location=dharamshala&program=${encodeURIComponent(p.replace(/-/g, " "))}`;
  } else if (pathname.includes("/retreats")) {
    return `/apply?program=retreats`; 
  } else if (pathname === "/goa") {
    return "/apply?location=goa";
  } else if (pathname === "/dharamshala") {
    return "/apply?location=dharamshala";
  }

  return "/apply";
}
