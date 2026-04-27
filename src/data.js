export const projectSnapshot = {
  product: "Northstar Assist",
  launchWindow: "2026-05-18",
  audience: "Success and account teams at mid-market SaaS companies",
  workstreams: [
    {
      name: "Onboarding flow",
      owner: "Product",
      progress: 92,
      status: "on-track",
      note: "Walkthroughs are approved and only final QA remains.",
    },
    {
      name: "Telemetry reliability",
      owner: "Engineering",
      progress: 68,
      status: "at-risk",
      note: "Retry behavior is improved, but one conversion event still drops in staging.",
    },
    {
      name: "Enablement pack",
      owner: "Customer success",
      progress: 81,
      status: "on-track",
      note: "Macro templates are complete and dry-run training is booked.",
    },
    {
      name: "Pricing rollout",
      owner: "Marketing",
      progress: 74,
      status: "watch",
      note: "Homepage copy is ready; comparison page screenshots still need review.",
    },
  ],
  milestones: [
    { title: "Beta webinar", due: "2026-05-06", owner: "Growth" },
    { title: "Staging analytics sign-off", due: "2026-05-08", owner: "Engineering" },
    { title: "Support rehearsal", due: "2026-05-12", owner: "Customer success" },
  ],
  wins: [
    "Pilot accounts completed 31 guided sessions last week.",
    "Support macros reduced average answer time by 18 percent in rehearsal.",
  ],
};
