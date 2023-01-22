import { Inngest } from "inngest";
import { serve } from "inngest/next";

const inngest = new Inngest({ name: "railway next app" });

const fn = inngest.createStepFunction("Railway next fn", "demo/event.sent", ({ event }) => {
  return { event, "railway-next": true };
});

export default serve(inngest, [fn]);
