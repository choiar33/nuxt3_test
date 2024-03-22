import coursesData from './coursesData';
import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CourseReturn => {
  const courses: CourseWithPath[] = coursesData.map((it) => ({
    ...it,
    rating: it.rating.toLocaleString(),
    reviewsCount: it.reviewsCount.toLocaleString(),
    studentCount: it.studentCount.toLocaleString(),
    path: `/course/${it.courseSlug}`,
  }));
  return {
    courses,
  };
};
