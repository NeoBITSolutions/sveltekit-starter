import { page } from "$app/state";
import { Home, MessageCircle, Send, Settings, User, Users } from "@lucide/svelte";

class NavigationState {
  appLinks = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
  ];
  adminLinks = [
    {
      title: "Roles",
      url: "/roles",
      icon: Users,
    },
    {
      title: "Invites",
      url: "/invites",
      icon: Send,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: MessageCircle,
    },
  ];
  dropdownLinks = [
    {
      title: "Profile",
      url: "/profile",
      icon: User,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ];
  activeLink = $derived(
    [...this.appLinks, ...this.adminLinks, ...this.dropdownLinks].find(
      (link) => link.url.slice(1).toLowerCase() === page.url.pathname.split("/")[1].toLowerCase()
    )
  );
}
export const navigationState = new NavigationState();
