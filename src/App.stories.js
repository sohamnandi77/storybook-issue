import React from "react";
import App from "./App";

const AppStory = {
  title: "App",
  component: App,
};
export default AppStory;

const Template = (args) => <App {...args} />;
export const Example = Template.bind({});
