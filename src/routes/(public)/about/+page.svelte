<script lang="ts">
  import { publicPagesState } from "$lib/state";
  import { APP_NAME } from "$lib/utils";

  publicPagesState.title = "About";
  publicPagesState.header = header;
</script>

{#snippet header()}
  <div class="grid gap-6">
    <h1 class="text-primary">About {APP_NAME}</h1>
    <h2>The Foundation for Your Next Breakthrough.</h2>
  </div>

  <img src="img/about-header.svg" alt="header" />
{/snippet}

<section class="grid gap-8">
  <h2 class="text-primary">Our Mission: Accelerating Your Innovation</h2>
  <p>
    In the fast-paced world of web development, the journey from a brilliant idea to a deployed
    application can be fraught with repetitive setup, configuration headaches, and the friction of
    integrating disparate tools. We believe that developers should spend their precious time and
    energy on what truly matters: building unique features, solving user problems, and bringing
    their visions to life.
  </p>
  <p>
    <span class="font-semibold">{APP_NAME}</span> was created with a simple yet powerful mission: to
    provide a meticulously crafted, production-ready SvelteKit starter project that significantly reduces
    boilerplate and accelerates the development lifecycle. We aim to give you a robust, modern, and enjoyable
    foundation so you can hit the ground running and focus on innovation from day one.
  </p>
</section>

<section class="grid gap-8">
  <h2 class="text-primary">Why This Stack? The Philosophy of Choice</h2>
  <p>
    The technologies integrated into this starter weren't chosen at random. Each component plays a
    crucial role in creating a cohesive, performant, and developer-friendly ecosystem:
  </p>
  <ul class="grid list-inside list-disc gap-4">
    <li>
      <span class="font-semibold">Svelte 5 & SvelteKit 2:</span> For their unparalleled developer experience,
      performance, and the elegance of building truly reactive user interfaces. SvelteKit provides a
      seamless full-stack framework that simplifies everything from routing to server-side logic.
    </li>
    <li>
      <span class="font-semibold">Drizzle ORM & SQLite (on Cloudflare D1):</span> We opted for Drizzle's
      incredible type-safety and developer-centric API, paired with the simplicity and serverless power
      of SQLite on Cloudflare D1. This combination offers a robust yet lightweight data layer.
    </li>
    <li>
      <span class="font-semibold">Lucia Auth:</span> Security and user management are paramount. Lucia's
      utility-based approach provides the flexibility to build custom, secure authentication flows without
      being locked into an opinionated, monolithic library. You get the building blocks; you design the
      experience.
    </li>
    <li>
      <span class="font-semibold">Cloudflare Ecosystem (Workers, D1, Turnstile):</span> Leveraging Cloudflare
      means building on a global, performant, and secure infrastructure. Serverless functions, distributed
      databases, and robust security features are baked in.
    </li>
    <li>
      <span class="font-semibold">Tailwind CSS & Shadcn UI:</span> For rapid, utility-first UI development
      that is both beautiful and highly customizable. Shadcn provides accessible, well-crafted components
      that you can easily adapt.
    </li>
    <li>
      <span class="font-semibold">Superforms, Zod & Formsnap:</span> To make form handling, validation,
      and progressive enhancement a breeze, ensuring a great user experience and robust data integrity
      with minimal boilerplate.
    </li>
    <li>
      <span class="font-semibold">Resend:</span> For reliable and straightforward transactional email
      delivery, essential for any modern web application.
    </li>
  </ul>
  <p>
    We believe this stack represents a sweet spot of cutting-edge technology, developer
    productivity, and scalability, allowing you to build sophisticated applications with confidence.
  </p>
</section>

<section class="grid gap-8">
  <h2 class="text-primary">Who Is This For?</h2>
  <p>This SvelteKit starter project is ideal for:</p>
  <ul class="grid list-inside list-disc gap-4">
    <li>
      <span class="font-semibold">Solo Developers & Indie Hackers:</span> Get your MVP off the ground
      quickly without getting bogged down in setup.
    </li>
    <li>
      <span class="font-semibold">Small to Medium-Sized Teams:</span> Provide your team with a consistent,
      modern, and well-documented starting point for new projects.
    </li>
    <li>
      <span class="font-semibold">Svelte Enthusiasts:</span> Explore the latest Svelte 5 features and
      best practices within a full-stack, production-ready context.
    </li>
    <li>
      <span class="font-semibold">Developers Learning Cloudflare:</span> Get hands-on experience deploying
      SvelteKit applications to Cloudflare Workers and using D1.
    </li>
    <li class="font-semibold">
      Anyone who values a type-safe, performant, and enjoyable development experience.
    </li>
  </ul>
</section>
