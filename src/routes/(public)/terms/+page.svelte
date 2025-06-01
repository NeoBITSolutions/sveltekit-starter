<script lang="ts">
  import { Button } from "$lib/components/ui";
  import Link from "$lib/components/ui/link/link.svelte";
  import { publicPagesState } from "$lib/state";
  import { APP_NAME } from "$lib/utils";

  publicPagesState.title = "Terms & Conditions";
  publicPagesState.header = undefined;
</script>

<header class="grid gap-6">
  <h1 class="text-primary">Terms & Conditions</h1>
  <p class="italic">Last updated: 17/05/2025</p>
  <p>
    Welcome to {APP_NAME} (hereinafter referred to as the "Starter Project"). These Terms and Conditions
    ("Terms") govern your use of the Starter Project.
  </p>
  <p>
    By downloading, accessing, or using the Starter Project, you agree to be bound by these Terms.
    If you do not agree to these Terms, do not use the Starter Project.
  </p>
</header>

<section class="grid gap-6">
  <div class="grid gap-2">
    <h2 class="text-primary">License and Permitted Use</h2>
    <p>
      Open Source License: The Starter Project is licensed under the MIT License (the "License"). A
      copy of the
      <Link href="https://github.com/NeoBITSolutions/sveltekit-starter/blob/main/LICENSE"
        >License</Link> is included with the Starter Project and is incorporated herein by reference.
      Your use of the Starter Project's code is subject to the terms of that License.
    </p>
    <p>
      Purpose: The Starter Project is provided as a foundational template to accelerate the
      development of web applications. You are permitted to use, copy, modify, merge, publish,
      distribute, sublicense, and/or sell copies of the Starter Project, and to permit persons to
      whom the Starter Project is furnished to do so, subject to the conditions of the chosen
      License.
    </p>
    <p>
      Responsibility for Your Applications: You are solely responsible for any applications,
      products, or services you develop using the Starter Project ("Your Applications"). This
      includes, but is not limited to, the functionality, content, security, and legal compliance of
      Your Applications, as well as any terms and conditions or privacy policies applicable to Your
      Applications and their end-users.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">No Warranty</h2>
    <p>
      AS IS: THE STARTER PROJECT IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT ANY WARRANTIES OF
      ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE
      OF DEALING OR USAGE OF TRADE.
    </p>
    <p>
      No Guarantee of Functionality: We do not warrant that the Starter Project will be error-free,
      uninterrupted, secure, or that defects will be corrected. You acknowledge that your use of the
      Starter Project is at your sole risk.
    </p>
    <p>
      No Guarantee of Updates or Support: While we may provide updates, bug fixes, or support for
      the Starter Project at our discretion, we are under no obligation to do so.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Limitation of Liability</h2>
    <p>
      Disclaimer of Damages: TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE
      BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
      (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
      INTANGIBLE LOSSES) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR INABILITY TO
      ACCESS OR USE, THE STARTER PROJECT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
      NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE
      POSSIBILITY OF SUCH DAMAGE.
    </p>
    <p>
      Cap on Liability: TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OUR AGGREGATE LIABILITY
      TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY INABILITY TO USE ANY
      PORTION OF THE STARTER PROJECT OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR
      OTHERWISE, IS LIMITED TO $0 USD.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Intellectual Property</h2>
    <p>
      Starter Project IP: We retain all right, title, and interest in and to the Starter Project
      itself, including all underlying code, documentation, and associated intellectual property
      rights, subject to the terms of the applicable open-source License.
    </p>
    <p>
      Your Application IP: You retain all right, title, and interest in and to Your Applications
      that you develop using the Starter Project. These Terms do not grant us any rights to Your
      Applications beyond what is necessary to provide the Starter Project.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Third-Party Services and Dependencies</h2>
    <p>
      The Starter Project integrates or relies on various third-party technologies and services
      (e.g., Svelte, Drizzle ORM, Lucia Auth, Cloudflare services, Resend, etc.). Your use of these
      third-party services may be subject to their respective terms and conditions and privacy
      policies. We are not responsible for the operation, functionality, or terms of any third-party
      services.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Modifications to the Terms</h2>
    <p>
      We reserve the right to modify these Terms at any time. We will notify you of any changes by
      posting the new Terms on the GitHub repository and updating the "Last Updated" date. Your
      continued use of the Starter Project after any such changes constitutes your acceptance of the
      new Terms.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Contact Us</h2>
    <p>If you have any questions regarding these Terms & Conditions, please contact us.</p>
    <div class="mt-2">
      <Button href="/contact">Contact Us</Button>
    </div>
  </div>
</section>
