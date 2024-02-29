export default function CourseIdPage({
  params,
}: {
  params: { courseId: string };
}) {
  return <div>Course ID : {params.courseId}</div>;
}
