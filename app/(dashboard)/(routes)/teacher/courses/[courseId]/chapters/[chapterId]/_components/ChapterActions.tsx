"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface ChapterActionsProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
}

export default function ChapterActions({
  disabled,
  courseId,
  chapterId,
  isPublished,
}: ChapterActionsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const unDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);

      toast.success("Chapter deleted");
      router.refresh();
      router.push(`/teacher/courses/${courseId}`);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => {}}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "UnPublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={unDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
}
