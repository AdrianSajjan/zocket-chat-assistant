import { SidebarInset } from "@/components/ui/sidebar";

export function AppMain({ children }: { children?: React.ReactNode }) {
  return <SidebarInset>{children}</SidebarInset>;
}
