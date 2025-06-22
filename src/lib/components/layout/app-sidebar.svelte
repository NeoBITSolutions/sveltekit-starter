<script lang="ts">
  import { Avatar, DropdownMenu, Sidebar } from "$lib/components/ui";
  import { Roles } from "$lib/enums";
  import type { ProfileSelect, UserRoleSelect } from "$lib/server/db";
  import { navigationState } from "$lib/state";
  import { APP_NAME } from "$lib/utils";
  import { EllipsisVertical, LogOut, User } from "@lucide/svelte";

  const { profile, userRoles }: { profile: ProfileSelect; userRoles: UserRoleSelect[] } = $props();

  const sidebar = Sidebar.useSidebar();
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        {#if sidebar.open}
          <a class="flex items-center justify-center gap-2 text-xl font-semibold" href="/">
            <img class="w-[calc(var(--sidebar-width)/4)]" src="/logo.svg" alt="logo" />
            <span>{APP_NAME}</span>
          </a>
        {:else}
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        {/if}
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        {@render menu(navigationState.appLinks)}
      </Sidebar.GroupContent>
    </Sidebar.Group>

    {#if userRoles.some((role) => role.roleId === Roles.admin)}
      <Sidebar.Group>
        <Sidebar.GroupLabel>Admin</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          {@render menu(navigationState.adminLinks)}
        </Sidebar.GroupContent>
      </Sidebar.Group>
    {/if}
  </Sidebar.Content>
  <Sidebar.Footer>
    {@render navUser()}
  </Sidebar.Footer>
</Sidebar.Root>

{#snippet menu(menuLinks: typeof navigationState.appLinks)}
  <Sidebar.Menu>
    {#each menuLinks as { title, url, icon } (title)}
      {@const Icon = icon}
      <Sidebar.MenuItem>
        <Sidebar.MenuButton
          size="lg"
          class="[&>svg]:size-6"
          isActive={url === navigationState.activeLink?.url}>
          {#snippet child({ props })}
            <a href={url} {...props}>
              <Icon />
              <span>{title}</span>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    {/each}
  </Sidebar.Menu>
{/snippet}

{#snippet navUser()}
  <Sidebar.Menu>
    <Sidebar.MenuItem>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Sidebar.MenuButton
              {...props}
              size="lg"
              class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer">
              {@render avatar()}
              <EllipsisVertical />
            </Sidebar.MenuButton>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          class="w-(--bits-dropdown-menu-anchor-width) min-w-56"
          side={sidebar.isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}>
          <DropdownMenu.Label class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              {@render avatar()}
            </div>
          </DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            {#each navigationState.dropdownLinks as { title, url, icon } (title)}
              {@const Icon = icon}
              <DropdownMenu.Item>
                {#snippet child({ props })}
                  <a href={url} {...props}>
                    <Icon />
                    <span>{title}</span>
                  </a>
                {/snippet}
              </DropdownMenu.Item>
            {/each}
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <form method="POST" action="/sign-out">
            <DropdownMenu.Item class="w-full cursor-pointer">
              {#snippet child({ props })}
                <button {...props}>
                  <LogOut />
                  <span>Sign out</span>
                </button>
              {/snippet}
            </DropdownMenu.Item>
          </form>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Sidebar.MenuItem>
  </Sidebar.Menu>
{/snippet}

{#snippet avatar()}
  <Avatar.Root class="size-8">
    <Avatar.Image src={profile.profilePicture} alt={profile.displayName} />
    <Avatar.Fallback class="rounded-lg">
      <User />
    </Avatar.Fallback>
  </Avatar.Root>
  <div class="grid flex-1 text-sm leading-tight">
    <span class="truncate font-semibold">{profile.displayName}</span>
  </div>
{/snippet}
