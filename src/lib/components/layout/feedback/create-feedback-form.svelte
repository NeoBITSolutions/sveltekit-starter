<script lang="ts">
  import { Form, Input, Select, Textarea } from "$lib/components/ui";
  import { FeedbackTypes } from "$lib/enums";
  import { createFeedbackSchema } from "$lib/schemas/feedback";
  import { capitalizeWords, CLOUDFLARE_TURNSTILE_SITE_KEY, handleError } from "$lib/utils";
  import { toast } from "svelte-sonner";
  import { Turnstile } from "svelte-turnstile";
  import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
  import { zod } from "sveltekit-superforms/adapters";

  const {
    data,
  }: {
    data: SuperValidated<Infer<typeof createFeedbackSchema>>;
  } = $props();

  const form = superForm(data, {
    validators: zod(createFeedbackSchema),
    onUpdate: async ({ result }) => {
      if (result.type === "failure") {
        if (result.data?.message) {
          handleError(result.data.message);
        }

        return;
      }

      toast.success("Your message has been sent! We'll get back to you as soon as possible.");
    },
    onError: () => {
      handleError();
    },
  });
  const { form: formData, enhance } = form;

  const types = [
    ...Object.entries(FeedbackTypes.nonSupport).map(([_key, value]) => ({
      label: capitalizeWords(value),
      value,
    })),
    ...Object.entries(FeedbackTypes.support).map(([_key, value]) => ({
      label: capitalizeWords(value),
      value,
    })),
  ];
</script>

<form class="grid gap-4" method="POST" action="/contact" use:enhance>
  <div class="grid gap-4 md:grid-cols-2">
    <Form.Field {form} name="name">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Name</Form.Label>
          <Input {...props} bind:value={$formData.name} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="email">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Email</Form.Label>
          <Input {...props} bind:value={$formData.email} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    <Form.Field {form} name="subject">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Subject</Form.Label>
          <Input {...props} bind:value={$formData.subject} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="type">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Type</Form.Label>
          <Select.Root type="single" name={props.name} bind:value={$formData.type}>
            <Select.Trigger {...props}>
              {$formData.type ? capitalizeWords($formData.type) : "Select a type"}
            </Select.Trigger>
            <Select.Content>
              {#each types as { label, value } (value)}
                <Select.Item {value} {label} />
              {/each}
            </Select.Content>
          </Select.Root>
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>

  <Form.Field {form} name="message">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Message</Form.Label>
        <Textarea {...props} bind:value={$formData.message} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  {#if $formData.public}
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
      <Form.FieldErrors />
    </Form.Field>
  {/if}

  <Form.Button>Send message</Form.Button>
</form>
