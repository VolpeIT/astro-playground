import type { Course } from "@/env";
import type { AdaptedCourse } from "./types";

export const edisonMarketAdapter = (course: Course): AdaptedCourse => {
  const href = `curso/${course.urlLanding}`;
  const { startTime } = course?.events?.[0] || { startTime: "" };
  const { htmlColor: color, value: pill } = course?.category || {};
  const pics = course?.users?.map((user) => user.user.picture) || [];
  const usersNames =
    course?.users?.map((user) => user.user.name).join(" y ") || "";
  const usersJobs = course.users
    ?.map(
      (user: any) =>
        `${user.user?.jobTitle ? `${user.user.jobTitle} ` : ""}${
          user.user?.company ? `@${user.user?.company}` : ""
        }`
    )
    .filter((job) => job.trim() !== "")
    .join(" y ");

  const { comingSoon, name } = course;

  return {
    href,
    startTime,
    color,
    pill,
    pics,
    usersNames,
    usersJobs,
    comingSoon,
    name,
  } as const;
};
