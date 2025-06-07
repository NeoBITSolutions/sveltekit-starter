export const PaginationSearchParams = {
  page: "page",
  size: "size",
} as const;

export const PageSizes = { 10: 10, 25: 25, 50: 50, 100: 100 } as const;

export const FeedbackTypes = {
  nonSupport: {
    feedback: "feedback",
    general: "generalInquiry",
  },
  support: {
    feature: "featureRequest",
    improvement: "improvementSuggestion",
    bug: "bugReport",
  },
};

export const FeedbackStates = {
  new: "new",
  done: "done",
} as const;

export const Roles = {
  admin: "65d44276-b9bf-40f1-bdf1-4d9e84e1c796",
};
