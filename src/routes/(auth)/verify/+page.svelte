<script lang="ts">
  import { goto } from "$app/navigation";
  import { Form, Input } from "$lib/components/ui";
  import { resendVerificationCodeSchema, verificationCodeSchema } from "$lib/schemas";
  import { publicPagesState } from "$lib/state";
  import { CLOUDFLARE_TURNSTILE_SITE_KEY, handleError } from "$lib/utils";
  import { addMinutes, formatDuration, intervalToDuration, isAfter } from "date-fns";
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

  const resendVerificationCodeForm = superForm(data.resendVerificationCodeForm, {
    validators: zodClient(resendVerificationCodeSchema),
    onUpdate: async ({ result }) => {
      if (result.type === "failure") {
        if (result.data?.message) {
          handleError(result.data.message);
        }

        return;
      }

      toast.success("An email with further instructions has been sent to your email address.");
    },
    onError: () => {
      handleError();
    },
  });
  const { form: resendVerificationCodeFormData, enhance: resendVerificationCodeFormEnhance } =
    resendVerificationCodeForm;

  const expirationDate = addMinutes(
    data.verificationCode.expiresAt,
    -new Date().getTimezoneOffset()
  );
  let expired = $state(isAfter(new Date(), expirationDate));
  let duration = $state(
    intervalToDuration({
      start: new Date(),
      end: expirationDate,
    })
  );
  const timer = setInterval(() => {
    expired = isAfter(new Date(), expirationDate);
    if (expired) {
      clearInterval(timer);

      return;
    }

    duration = intervalToDuration({
      start: new Date(),
      end: expirationDate,
    });
  }, 1000);

  $effect(() => {
    return () => {
      clearInterval(timer);
    };
  });
</script>

<form class="grid gap-4" method="POST" action="?/verify" use:verificationFormEnhance>
  <Form.Field form={verificationForm} name="verificationCode">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Verification code</Form.Label>
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

{#if data.verificationCode.userId}
  {#if expired}
    <form
      class="grid gap-4"
      method="POST"
      action="?/resendVerificationCode"
      use:resendVerificationCodeFormEnhance>
      <Form.Field form={resendVerificationCodeForm} name="userId">
        <Form.Control>
          {#snippet children({ props })}
            <Input type="hidden" {...props} bind:value={$resendVerificationCodeFormData.userId} />
          {/snippet}
        </Form.Control>
      </Form.Field>

      <Form.Field form={resendVerificationCodeForm} name="captchaToken">
        <Form.Control>
          {#snippet children({ props })}
            <Input
              type="hidden"
              {...props}
              bind:value={$resendVerificationCodeFormData.captchaToken} />
            <Turnstile
              siteKey={CLOUDFLARE_TURNSTILE_SITE_KEY}
              on:callback={(e) => {
                $resendVerificationCodeFormData.captchaToken = e.detail.token;
              }} />
          {/snippet}
        </Form.Control>
      </Form.Field>

      <Form.Button>Resend verification code</Form.Button>
    </form>
  {:else}
    <p>
      Code expires in
      {formatDuration(duration, {
        delimiter: " and ",
      })}
    </p>
  {/if}
{/if}
