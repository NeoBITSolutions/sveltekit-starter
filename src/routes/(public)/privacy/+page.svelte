<script lang="ts">
  import { Button } from "$lib/components/ui";
  import { publicPagesState } from "$lib/state";
  import { APP_NAME } from "$lib/utils";

  publicPagesState.title = "Privacy policy";
  publicPagesState.header = undefined;
</script>

<header class="grid gap-6">
  <h1 class="text-primary">Privacy Policy</h1>
  <p class="italic">Last updated: 17/05/2025</p>
  <p>
    Welcome to {APP_NAME} (hereinafter referred to as the "Starter Project"). This Privacy Policy describes
    how we collect, use, and share information in connection with your use of our informational website
    for the Starter Project (the "Site") and the Starter Project code itself.
  </p>
  <p>
    This Privacy Policy applies to the information we may collect when you visit the Site that
    describes or links to the Starter Project, or when you communicate with us about the Starter
    Project. It does not apply to the applications that you or others build using the Starter
    Project. Users of the Starter Project are solely responsible for establishing their own privacy
    policies and practices for the applications they develop.
  </p>
</header>

<section class="grid gap-6">
  <div class="grid gap-4">
    <h2 class="text-primary">Information We Collect</h2>
    <p>We collect minimal personal information. The information we may collect includes:</p>
    <div class="grid gap-2">
      <h3>Information You Provide Voluntarily:</h3>
      <ul class="grid list-inside list-disc gap-2">
        <li>
          Communications: If you contact us directly (e.g., via email or through GitHub
          issues/discussions), we may receive additional information about you such as your name,
          email address, the contents of the message and/or attachments you may send us, and any
          other information you may choose to provide.
        </li>
      </ul>
    </div>
    <div class="grid gap-2">
      <h3>Information We May Collect Automatically (through the Site):</h3>
      <ul class="grid list-inside list-disc gap-2">
        <li>
          Log Data and Analytics: Like many website operators, we may collect information that your
          browser sends whenever you visit our Site ("Log Data"). This Log Data may include
          information such as your computer's Internet Protocol ("IP") address (often anonymized or
          truncated), browser type, browser version, the pages of our Site that you visit, the time
          and date of your visit, the time spent on those pages, and other statistics. We may use
          third-party services such as Cloudflare analytics to collect, monitor, and analyze this
          type of information to improve our Site's functionality. These analytics tools may use
          cookies or similar technologies.
        </li>
        <li>
          Cookies: Cookies are files with a small amount of data, which may include an anonymous
          unique identifier. If our Site uses cookies, they would be sent to your browser from a
          website and stored on your computer's hard drive. You can instruct your browser to refuse
          all cookies or to indicate when a cookie is being sent. However, if you do not accept
          cookies, some portions of our Site may not function properly.
        </li>
      </ul>
    </div>
    <div class="grid gap-2">
      <h3>Information from the Starter Project Code:</h3>
      <ul class="grid list-inside list-disc gap-2">
        <li>
          The Starter Project code itself, when downloaded and used by you, does not transmit any
          personal information back to us.
        </li>
      </ul>
    </div>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">How We Use Your Information</h2>
    <p>We use the information we collect for the following purposes:</p>
    <ul class="grid list-inside list-disc gap-2">
      <li>To provide, operate, and maintain our Site and the Starter Project.</li>
      <li>To improve, personalize, and expand our Site.</li>
      <li>To understand and analyze how you use our Site.</li>
      <li>
        To respond to your comments, questions, and requests, and provide customer support related
        to the Starter Project.
      </li>
      <li>
        To communicate with you, either directly or through one of our partners, including for
        updates or information relating to the Starter Project, if you have opted into such
        communications.
      </li>
      <li>
        For compliance purposes, including enforcing our Terms and Conditions, or other legal
        rights, or as may be required by applicable laws and regulations or requested by any
        judicial process or governmental agency.
      </li>
    </ul>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">How We Share Your Information</h2>
    <p>
      We do not sell your personal information. We may share information we collect in the following
      circumstances:
    </p>
    <ul class="grid list-inside list-disc gap-2">
      <li>
        Service Providers: We may share information with third-party service providers who perform
        services on our behalf, such as website hosting, analytics, or communication tools. These
        service providers are authorized to use your personal information only as necessary to
        provide these services to us.
      </li>
      <li>
        Legal Requirements: We may disclose your information if required to do so by law or in the
        good faith belief that such action is necessary to comply with a legal obligation, protect
        and defend our rights or property, prevent or investigate possible wrongdoing in connection
        with the Service, protect the personal safety of users of the Service or the public, or
        protect against legal liability.
      </li>
      <li>
        Aggregated or De-identified Data: We may share aggregated or de-identified information,
        which cannot reasonably be used to identify you.
      </li>
    </ul>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Data Security</h2>
    <p>
      We take reasonable measures to help protect information about you from loss, theft, misuse,
      and unauthorized access, disclosure, alteration, and destruction. However, no internet or
      email transmission is ever fully secure or error-free. Please keep this in mind when
      disclosing any information to us via the internet.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Your Data Protection Rights</h2>
    <p>
      Depending on your location and applicable law, you may have certain rights regarding your
      personal information, such as:
    </p>
    <ul class="grid list-inside list-disc gap-2">
      <li>
        The right to access, correct, update, or request deletion of your personal information.
      </li>
      <li>The right to object to processing of your personal information.</li>
      <li>The right to request restriction of processing your personal information.</li>
      <li>The right to data portability.</li>
    </ul>
    <p>
      If you wish to exercise any of these rights, please contact us using the contact details
      provided below.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Third-Party Websites and Services</h2>
    <p>
      Our Site and the Starter Project documentation may contain links to other websites and
      services not operated or controlled by us (e.g., GitHub, Cloudflare, Svelte documentation,
      etc.). This Privacy Policy does not apply to these third-party services. We encourage you to
      review the privacy policies of any third-party service before providing any information to or
      through them.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Children's Privacy</h2>
    <p>
      Our Site and the Starter Project are not intended for use by children under the age of 13. We
      do not knowingly collect personal information from children under this age. If you become
      aware that a child has provided us with personal information, please contact us. If we become
      aware that we have collected personal information from a child without verification of
      parental consent, we take steps to remove that information from our servers.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Changes to This Privacy Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. We will notify you of any changes by
      posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
      You are advised to review this Privacy Policy periodically for any changes. Changes to this
      Privacy Policy are effective when they are posted on this page.
    </p>
  </div>

  <div class="grid gap-2">
    <h2 class="text-primary">Contact Us</h2>
    <p>
      If you have any questions or concerns about this Privacy Policy or your personal information,
      please contact us.
    </p>
    <div class="mt-2">
      <Button href="/contact">Contact Us</Button>
    </div>
  </div>
</section>
