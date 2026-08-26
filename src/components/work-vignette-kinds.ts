/* Shared between the server-rendered WorkRow and the client WorkVignette:
   a "use client" module's exports can't be called from a server component,
   so the kind list and the replaces-image flag live here. */

export type WorkVignetteKind =
  | "glql"
  | "wiki"
  | "birthguide"
  | "coursify"
  | "mr-summary"
  | "mymix";

/* Standalone scenes ARE the thumbnail: the row renders no screenshot behind
   them, they rest in their settled composition, and hover replays the
   animation. Overlay scenes (false) keep the image and only appear on hover. */
export const VIGNETTE_REPLACES_IMAGE: Record<WorkVignetteKind, boolean> = {
  glql: true,
  wiki: true,
  birthguide: false,
  coursify: true,
  "mr-summary": true,
  mymix: true,
};
