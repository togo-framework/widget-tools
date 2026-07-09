import type { Meta, StoryObj } from "@storybook/react";
import { Tools } from "./index";

const meta = { title: "Widgets/Tools", component: Tools } satisfies Meta<typeof Tools>;
export default meta;

export const Default: StoryObj<typeof Tools> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Tools> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
