<script lang="ts">
  import { goto } from "$app/navigation";
  import { Form, Input } from "$lib/components/ui";
  import { verificationCodeSchema } from "$lib/schemas";
  import { publicPagesState } from "$lib/state";
  import { CLOUDFLARE_TURNSTILE_SITE_KEY, handleError } from "$lib/utils";
  import { toast } from "svelte-sonner";
  import { Turnstile } from "svelte-turnstile";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  publicPagesState.title = "Verify code";
  publicPagesState.header = undefined;
  const { data } = $props();

  const verificationForm = superForm(data.verificationForm, {
    validators: zodClient(verificationCodeSchema),
    onUpdate: async ({ result }) => {
      if (result.type === "failure") {
        if (result.data?.message) {
          handleError(result.data.message);
        }

        return;
      }

      toast.success("Authentication succeeded!");
      await goto("/dashboard");
    },
    onError: () => {
      handleError();
    },
  });
  const { form: verificationFormData, enhance: verificationFormEnhance } = verificationForm;
</script>

<form class="grid gap-4" method="POST" action="?/verify" use:verificationFormEnhance>
  <Form.Field form={verificationForm} name="verificationCode">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
        <Input {...props} bind:value={$verificationFormData.verificationCode} />
      {/snippet}
    </Form.Control>
  </Form.Field>

  <Form.Field form={verificationForm} name="captchaToken">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$verificationFormData.captchaToken} />
        <Turnstile
          siteKey={CLOUDFLARE_TURNSTILE_SITE_KEY}
          on:callback={(e) => {
            $verificationFormData.captchaToken = e.detail.token;
          }} />
      {/snippet}
    </Form.Control>
  </Form.Field>

  <Form.Button>Verify code</Form.Button>
</form>
