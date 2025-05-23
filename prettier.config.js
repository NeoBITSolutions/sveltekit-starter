const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 100,
  svelteBracketNewLine: false,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

export default config;
