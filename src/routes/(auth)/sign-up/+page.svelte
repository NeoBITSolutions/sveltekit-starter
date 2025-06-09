<script lang="ts">
  import { goto } from "$app/navigation";
  import { Form, Input, Link } from "$lib/components/ui";
  import { signUpSchema } from "$lib/schemas";
  import { publicPagesState } from "$lib/state";
  import { CLOUDFLARE_TURNSTILE_SITE_KEY, handleError } from "$lib/utils";
  import { toast } from "svelte-sonner";
  import { Turnstile } from "svelte-turnstile";
  import { superForm } from "sveltekit-superforms";
  import { zod } from "sveltekit-superforms/adapters";

  publicPagesState.title = "Sign Up";
  publicPagesState.header = undefined;
  const { data } = $props();

  const form = superForm(data.form, {
    validators: zod(signUpSchema),
    onUpdate: async ({ result }) => {
      if (result.type === "failure") {
        if (result.data?.message) {
          handleError(result.data.message);
        }

        return;
      }

      toast.success(
        "Authentication succeeded! An email with further instructions has been sent to your email address."
      );
      await goto("/verify");
    },
    onError: () => {
      handleError();
    },
  });
  const { form: formData, enhance } = form;
</script>

<form class="grid gap-4" method="POST" use:enhance>
  <Form.Field {form} name="displayName">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Display name</Form.Label>
        <Input {...props} bind:value={$formData.displayName} />
      {/snippet}
    </Form.Control>
  </Form.Field>

  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
        <Input {...props} bind:value={$formData.email} />
      {/snippet}
    </Form.Control>
  </Form.Field>

  <Form.Field {form} name="captchaToken">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.captchaToken} />
        <Turnstile
          siteKey={CLOUDFLARE_TURNSTILE_SITE_KEY}
          on:callback={(e) => {
            $formData.captchaToken = e.detail.token;
          }} />
      {/snippet}
    </Form.Control>
  </Form.Field>

  <Form.Button>Continue with email</Form.Button>
</form>

<p>Already have an account? <Link href="sign-in">Sign in</Link></p>
