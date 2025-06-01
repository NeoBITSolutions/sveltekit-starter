<script>
  import { APP_NAME } from "$lib/utils";
  import { Link } from "../ui";
</script>

<footer class="mt-20 bg-primary py-6 text-accent md:mt-28 lg:mt-36">
  <div class="container grid gap-4 md:grid-cols-3">
    <div>
      <h3>
        {APP_NAME} &copy; {new Date().getFullYear()}
      </h3>
      <p>
        A <Link variant="accent" href="http://www.neobit.solutions/" target="_blank"
          >NeoBIT Solutions</Link> project
      </p>
    </div>

    <div class="grid gap-2 justify-self-center">
      <div>
        <Link variant="accent" href="/terms">Terms & Conditions</Link>
      </div>
      <div>
        <Link variant="accent" href="/privacy">Privacy Policy</Link>
      </div>
      <div>
        <Link variant="accent" href="/contact">Contact Us</Link>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <!-- Social icon pack https://icons8.com/icon/set/logos/ios-filled -->
      <Link variant="accent" href="https://x.com/NeobitSolutions" target="_blank" aria-label="X">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-8 fill-current"
          x="0px"
          y="0px"
          viewBox="0 0 50 50">
          <path
            d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"
          ></path>
        </svg>
      </Link>
      <Link
        variant="accent"
        href="https://www.twitch.tv/neobitsolution"
        target="_blank"
        aria-label="Twitch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-8 fill-current"
          x="0px"
          y="0px"
          viewBox="0 0 50 50">
          <path
            d="M 5.3125 1 L 2 9.8125 L 2 43 L 13 43 L 13 49 L 20.40625 49 L 26.40625 43 L 35.40625 43 L 48 30.4375 L 48 1 Z M 11 6 L 43 6 L 43 28 L 37 34 L 25 34 L 19 40 L 19 34 L 11 34 Z M 20 13 L 20 27 L 26 27 L 26 13 Z M 30 13 L 30 27 L 36 27 L 36 13 Z"
          ></path>
        </svg>
      </Link>
      <Link
        variant="accent"
        href="https://www.youtube.com/@NeoBITSolutions"
        target="_blank"
        aria-label="YouTube">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-8 fill-current"
          x="0px"
          y="0px"
          viewBox="0 0 50 50">
          <path
            d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
          ></path>
        </svg>
      </Link>
      <Link
        variant="accent"
        href="https://www.instagram.com/neobit_solutions/"
        target="_blank"
        aria-label="Instagram">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-8 fill-current"
          x="0px"
          y="0px"
          viewBox="0 0 50 50">
          <path
            d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"
          ></path>
        </svg>
      </Link>
      <Link
        variant="accent"
        href="https://www.linkedin.com/company/neobitsolutions"
        target="_blank"
        aria-label="LinkedIn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-8 fill-current"
          x="0px"
          y="0px"
          viewBox="0 0 50 50">
          <path
            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
          ></path>
        </svg>
      </Link>
      <Link
        variant="accent"
        href="https://github.com/NeoBIT-Solutions"
        target="_blank"
        aria-label="GitHub">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-8 fill-current"
          x="0px"
          y="0px"
          viewBox="0 0 50 50">
          <path
            d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
          ></path>
        </svg>
      </Link>
    </div>
  </div>
</footer>
