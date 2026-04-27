import { projectSnapshot } from "./src/data.js";
import { buildProjectBrief } from "./src/analysis.js";
import { renderBrief } from "./src/render.js";

const brief = buildProjectBrief(projectSnapshot);

console.log(renderBrief(brief));
