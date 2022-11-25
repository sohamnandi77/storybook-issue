export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Core",
        "Form Elements",
        "Atoms",
        "Molecules",
        "Organisms",
        "Layouts",
        "Loading",
      ],
    },
  },
};
