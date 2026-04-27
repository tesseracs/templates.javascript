function averageProgress(workstreams) {
  const total = workstreams.reduce((sum, stream) => sum + stream.progress, 0);
  return Math.round(total / workstreams.length);
}

function statusBreakdown(workstreams) {
  return workstreams.reduce(
    (summary, stream) => {
      summary[stream.status] = (summary[stream.status] ?? 0) + 1;
      return summary;
    },
    { "on-track": 0, watch: 0, "at-risk": 0 },
  );
}

function prioritizeWorkstreams(workstreams) {
  return [...workstreams].sort((left, right) => {
    const statusWeight = { "at-risk": 0, watch: 1, "on-track": 2 };
    const statusDelta = statusWeight[left.status] - statusWeight[right.status];

    if (statusDelta !== 0) {
      return statusDelta;
    }

    return left.progress - right.progress;
  });
}

export function buildProjectBrief(snapshot) {
  const prioritizedWorkstreams = prioritizeWorkstreams(snapshot.workstreams);
  const breakdown = statusBreakdown(snapshot.workstreams);

  return {
    headline: `${snapshot.product} launch brief`,
    audience: snapshot.audience,
    launchWindow: snapshot.launchWindow,
    overallProgress: averageProgress(snapshot.workstreams),
    breakdown,
    nextMilestone: snapshot.milestones[0],
    wins: snapshot.wins,
    priorities: prioritizedWorkstreams.slice(0, 3),
  };
}
