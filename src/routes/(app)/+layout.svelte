<script>
  import { AppSidebar } from "$lib/components/layout";
  import { Sidebar } from "$lib/components/ui";

  const { children, data } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar profile={data.profile} userRoles={data.roles} />
  <Sidebar.Inset>
    <header>
      <Sidebar.Trigger />
    </header>
    {@render children()}
  </Sidebar.Inset>
</Sidebar.Provider>
