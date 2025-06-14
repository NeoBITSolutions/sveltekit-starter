<script lang="ts">
  import { CreateFeedbackForm } from "$lib/components/layout/feedback";
  import { Link } from "$lib/components/ui";
  import { publicPagesState } from "$lib/state";

  publicPagesState.title = "Contact";
  publicPagesState.header = undefined;

  const { data } = $props();
</script>

<header class="grid gap-4">
  <h1 class="text-primary">Contact</h1>
  <p>
    Have questions or need support? Reach out to us using the form below, or email us at <Link
      href="mailto:contact@neobit.solutions">contact@neobit.solutions</Link>
  </p>
</header>

<CreateFeedbackForm data={data.form} />
