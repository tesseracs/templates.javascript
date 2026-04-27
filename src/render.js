function divider(label = "") {
  return label ? `\n=== ${label} ===` : "\n====================";
}

function renderBreakdown(breakdown) {
  return [
    `On track : ${breakdown["on-track"]}`,
    `Watch    : ${breakdown.watch}`,
    `At risk  : ${breakdown["at-risk"]}`,
  ].join("\n");
}

function renderPriorities(priorities) {
  return priorities
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} (${item.owner}) - ${item.progress}% complete\n   ${item.note}`,
    )
    .join("\n");
}

function renderWins(wins) {
  return wins.map((win) => `- ${win}`).join("\n");
}

export function renderBrief(brief) {
  return [
    brief.headline.toUpperCase(),
    `Audience: ${brief.audience}`,
    `Launch window: ${brief.launchWindow}`,
    divider("Overview"),
    `Overall progress: ${brief.overallProgress}%`,
    renderBreakdown(brief.breakdown),
    divider("Next milestone"),
    `${brief.nextMilestone.title} (${brief.nextMilestone.owner})`,
    `Due: ${brief.nextMilestone.due}`,
    divider("Priority workstreams"),
    renderPriorities(brief.priorities),
    divider("Recent wins"),
    renderWins(brief.wins),
  ].join("\n");
}
