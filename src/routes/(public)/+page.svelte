<script>
  import { Button, Card } from "$lib/components/ui";
  import { publicPagesState } from "$lib/state";
  import { ChevronsUp, Settings, ShieldCheck } from "@lucide/svelte";

  publicPagesState.title = "Home";
  publicPagesState.header = header;
</script>

{#snippet header()}
  <div class="grid gap-6">
    <h1 class="text-primary">Launch Your Next Idea, Faster Than Ever.</h1>
    <h2>
      Stop wrestling with boilerplate. This starter project provides a rock-solid, modern foundation
      with Svelte and SvelteKit, Drizzle ORM, Lucia Auth, Tailwind CSS, Shadcn UI, and seamless
      Cloudflare integrations. Focus on your unique features, not the setup.
    </h2>

    <div>
      <Button href="https://github.com/NeoBITSolutions/sveltekit-starter" target="_blank">
        Get Started on GitHub
      </Button>
    </div>
  </div>

  <img src="img/home-header.svg" alt="header" />
{/snippet}

<section class="grid items-center gap-8 md:grid-cols-2">
  <img src="/img/home-image.svg" alt="happy user" />

  <div class="grid gap-4">
    <h2 class="text-primary">
      Starting a new web project is exhilarating, but the initial excitement often crashes into the
      wall of repetitive setup. You want to build, to innovate, to solve user problems. Instead, you
      find yourself:
    </h2>

    <ul class="grid list-inside list-disc gap-4">
      <li>
        <span class="font-semibold">Wrestling with Configuration:</span> Hours, sometimes days, spent
        integrating authentication, choosing and setting up an ORM, wiring up basic UI components, and
        configuring deployment pipelines.
      </li>
      <li>
        <span class="font-semibold">Chasing Compatibility:</span> Ensuring your database, backend logic,
        and frontend rendering play nicely together, especially with type-safety, can feel like a constant
        battle.
      </li>
      <li>
        <span class="font-semibold">Reinventing the Wheel:</span> Implementing user sign-ups, email notifications,
        and basic security measures for every new project.
      </li>
    </ul>

    <p class="text-xl">
      This initial friction doesn't just consume time; it drains momentum and can delay your vision
      from reaching users.
    </p>

    <p>
      This SvelteKit Starter Project is engineered to eliminate that friction. We've meticulously
      assembled and pre-configured a cutting-edge, production-ready stack so you can bypass the
      boilerplate and dive straight into building what makes your application unique.
    </p>
  </div>
</section>

<section class="grid gap-8">
  <h2 class="text-primary">Build with Joy, Launch with Confidence.</h2>
  <div class="grid gap-6 md:grid-cols-3">
    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3 class="text-primary flex items-center gap-2">
            <ChevronsUp />
            <span>Accelerate Your Vision</span>
          </h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Move from concept to deployment at an unprecedented pace. Feel the thrill of rapid progress
        as you leverage a foundation built for speed and efficiency. Your ideas deserve to see the
        light of day, sooner.
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3 class="text-primary flex items-center gap-2">
            <Settings />
            <span>Ship with Confidence</span>
          </h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Deploy on Cloudflare's robust global infrastructure with confidence. With pre-configured
        security essentials like Lucia Auth and Turnstile, and a scalable serverless backend, you
        can focus on growth, knowing your application is built on a reliable and performant
        platform.
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3 class="text-primary flex items-center gap-2">
            <ShieldCheck />
            <span>Future-Proof Your Foundation</span>
          </h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Invest your energy in a codebase designed for longevity. By using the latest versions of
        Svelte, SvelteKit, and other best-in-class tools, you're building on a stack that's ready
        for tomorrow's challenges and opportunities.
      </Card.Content>
    </Card.Root>
  </div>
</section>

<section class="grid gap-8">
  <h2 class="text-primary">Imagine What You'll Build...</h2>
  <div class="grid gap-6 md:grid-cols-2">
    <Card.Root>
      <Card.Content>
        "This SvelteKit starter was a game-changer. I had my core application logic, including auth
        and database, up and running in a single afternoon instead of a week. The Drizzle ORM and
        Lucia Auth integration is incredibly smooth!"
      </Card.Content>
      <Card.Footer>
        <p class="font-bold">- Alex</p>
      </Card.Footer>
    </Card.Root>

    <Card.Root>
      <Card.Content>
        "As a solo developer, efficiency is key. This starter project provided the perfect,
        type-safe foundation I needed. Deploying to Cloudflare Workers with the pre-configured
        Wrangler setup was surprisingly straightforward. Highly recommended!"
      </Card.Content><Card.Footer>
        <p class="font-bold">- Sam</p>
      </Card.Footer>
    </Card.Root>
  </div>
</section>

<section class="grid gap-8">
  <h2 class="text-primary">Packed with a Powerful, Modern Stack.</h2>
  <div class="grid gap-6 md:grid-cols-3">
    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3>Svelte 5 & SvelteKit 2</h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Leverage the latest advancements in the Svelte ecosystem, including runes for fine-grained
        reactivity and SvelteKit's powerful full-stack capabilities for routing, server-side
        rendering, and API endpoints.
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3>SQLite on Cloudflare D1 with Drizzle ORM</h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Enjoy type-safe, efficient database interactions. Drizzle ORM provides an exceptional
        developer experience for querying your SQLite database running on Cloudflare's globally
        distributed D1.
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3>Lucia Auth</h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Instead of a monolithic package, Lucia provides a comprehensive set of utilities. This
        empowers you to build your own secure and flexible user authentication and session
        management systems, giving you full control and tailoring it precisely to your application's
        needs.
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3>Resend Integration</h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Reliable and developer-friendly transactional email delivery for essential communications
        like account verification, password resets, and notifications.
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3>Tailwind CSS & Shadcn UI</h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Build beautiful, responsive, and accessible user interfaces at speed. Tailwind's
        utility-first approach combined with Shadcn's stunning, customizable components is a recipe
        for UI excellence.
      </Card.Content>
    </Card.Root>

    <Card.Root>
      <Card.Header>
        <Card.Title>
          <h3>Superforms & Zod (with Formsnap)</h3>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        Create robust, type-safe forms that work seamlessly on both client and server. Zod ensures
        data integrity, while Superforms (enhanced by Formsnap for UI) simplifies form handling
        logic significantly.
      </Card.Content>
    </Card.Root>
  </div>
</section>

<section class="grid gap-8">
  <h2 class="text-primary">Ready to Supercharge Your Next Project?</h2>
  <p>
    Stop the setup grind and start building what truly matters. This SvelteKit starter project is
    your shortcut to a modern, efficient, and enjoyable development workflow.
  </p>
  <p class="font-bold">
    Clone the starter, customize it to your needs, and launch your next big idea with the power of
    Svelte, Cloudflare, and a best-in-class toolset.
  </p>
  <div>
    <Button href="https://github.com/NeoBITSolutions/sveltekit-starter" target="_blank">
      Get the Starter on GitHub Now
    </Button>
  </div>
</section>
