"use client";

import { Chapter } from "@prisma/client";

interface ChaptersListProps {
  items: Chapter[];
  onReorder: (updateData: { id: string; position: number }[]) => void;
  onEdit: (id: string) => void;
}

export default function ChaptersList({
  items,
  onReorder,
  onEdit,
}: ChaptersListProps) {
  return <div>Chapter list</div>;
}
