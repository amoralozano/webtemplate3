import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), icon(), tailwind()]
});