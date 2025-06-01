<script lang="ts">
  import { Accordion } from "$lib/components/ui";
  import Button from "$lib/components/ui/button/button.svelte";
  import { publicPagesState } from "$lib/state";
  import { APP_NAME } from "$lib/utils";

  publicPagesState.title = "Frequently Asked Questions";
  publicPagesState.header = undefined;
</script>

<header class="grid gap-6">
  <h1 class="text-primary">Frequently Asked Questions</h1>
  <p>Find answers to common questions about {APP_NAME}.</p>
</header>

<Accordion.Root type="multiple">
  <Accordion.Item value="question-1">
    <Accordion.Trigger>What exactly is {APP_NAME}</Accordion.Trigger>
    <Accordion.Content>
      {APP_NAME} is a comprehensive, production-ready starter kit for building modern web applications
      using Svelte 5, SvelteKit 2, and a curated stack of best-in-class technologies. It's designed to
      help you bypass initial setup and boilerplate, allowing you to focus on building your unique features
      faster.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-2">
    <Accordion.Trigger>Who is this starter project for?</Accordion.Trigger>
    <Accordion.Content>
      It's for any developer looking to build robust, scalable web applications with SvelteKit. This
      includes solo developers, indie hackers, small to medium-sized teams, Svelte enthusiasts, and
      those looking to deploy on the Cloudflare ecosystem. If you value a type-safe, performant, and
      enjoyable development experience, this starter is for you.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-3">
    <Accordion.Trigger>Is this starter project free to use?</Accordion.Trigger>
    <Accordion.Content>
      Yes, {APP_NAME} is open-source and released under the MIT License. You are free to use it for personal
      and commercial projects.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-4">
    <Accordion.Trigger>What kind of applications can I build with this starter?</Accordion.Trigger>
    <Accordion.Content>
      <p class="mb-4">The stack is versatile enough for a wide range of applications, including:</p>
      <ul class="grid list-inside list-disc gap-4">
        <li>SaaS products</li>
        <li>Dashboards and admin panels</li>
        <li>E-commerce frontends (with a separate backend or serverless functions)</li>
        <li>Content-driven websites</li>
        <li>Portfolio sites</li>
        <li>
          And much more! Its full-stack nature with SvelteKit and Cloudflare Workers allows for
          significant flexibility.
        </li>
      </ul>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-5">
    <Accordion.Trigger>Why did you choose this specific technology stack?</Accordion.Trigger>
    <Accordion.Content>
      <p class="mb-4">
        Each technology was chosen for its modern capabilities, developer experience, performance,
        and community support.
      </p>
      <ul class="grid list-inside list-disc gap-4">
        <li>
          <span class="font-semibold">Svelte 5/SvelteKit 2:</span> For cutting-edge reactivity and a
          fantastic full-stack framework.
        </li>
        <li>
          <span class="font-semibold">Drizzle ORM & SQLite (on D1):</span> For type-safe, efficient database
          interactions in a serverless environment.
        </li>
        <li>
          <span class="font-semibold">Lucia Auth:</span> For flexible, secure, and self-hostable authentication.
        </li>
        <li>
          <span class="font-semibold">Cloudflare (Workers, D1, Turnstile):</span> For global performance,
          scalability, and integrated security.
        </li>
        <li>
          <span class="font-semibold">Tailwind CSS & Shadcn UI:</span> For rapid, beautiful, and accessible
          UI development.
        </li>
        <li>
          <span class="font-semibold">Superforms, Zod & Formsnap:</span> For robust, type-safe form handling.
        </li>
        <li>
          <span class="font-semibold">Resend:</span> For reliable transactional emails.
        </li>
      </ul>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-6">
    <Accordion.Trigger>Can I swap out parts of the stack?</Accordion.Trigger>
    <Accordion.Content>
      <p class="mb-4">
        Absolutely! While the starter is pre-configured for this specific stack, it's designed to be
        a foundation. You have the flexibility to:
      </p>
      <ul class="grid list-inside list-disc gap-4">
        <li>
          Database: Drizzle ORM supports other databases like PostgreSQL or MySQL. You'd need to
          adjust the Drizzle configuration and potentially your Cloudflare D1 setup if you move away
          from it.
        </li>
        <li>
          UI: You can integrate other UI libraries or write your own custom CSS alongside or instead
          of Tailwind/Shadcn.
        </li>
        <li>
          Authentication: Lucia is flexible, but if you prefer another auth solution, you can
          integrate it.
        </li>
      </ul>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-7">
    <Accordion.Trigger
      >How difficult is it to customize the theme and appearance?</Accordion.Trigger>
    <Accordion.Content>
      Tailwind CSS and Shadcn UI make customization straightforward.
      <ul class="grid list-inside list-disc gap-4">
        <li>
          Tailwind: You can customize your tailwind.config.js to adjust colors, fonts, spacing, etc.
        </li>
        <li>
          Shadcn UI: Components are designed to be copied into your project, giving you full control
          over their styling and behavior. You can easily theme them using CSS variables.
        </li>
      </ul>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-8">
    <Accordion.Trigger>Is TypeScript used throughout the project?</Accordion.Trigger>
    <Accordion.Content>
      Yes, the starter is built with TypeScript to ensure type safety and improve the developer
      experience, especially with tools like Drizzle ORM and Zod.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-9">
    <Accordion.Trigger>How does deployment to Cloudflare work?</Accordion.Trigger>
    <Accordion.Content>
      The project is pre-configured for deployment to Cloudflare. The wrangler.jsonc file contains
      the necessary configurations. You'll typically deploy using the Wrangler CLI. Detailed
      instructions are provided in the project's README.md.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="question-10">
    <Accordion.Trigger>Do I need a paid Cloudflare account?</Accordion.Trigger>
    <Accordion.Content>
      Cloudflare offers a very generous free tier that covers the services used by this starter
      project, including hosting, serverless functions (Workers), database (D1), and captcha
      (Turnstile). For most personal projects and even some small commercial applications, the free
      tier limits are often sufficient. You would typically only need to consider a paid plan for
      significantly higher usage.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>

<section class="grid gap-6">
  <h2>Still have questions?</h2>
  <p>If you need more information, feel free to reach out to us.</p>
  <div>
    <Button href="/contact">Contact Us</Button>
  </div>
</section>
