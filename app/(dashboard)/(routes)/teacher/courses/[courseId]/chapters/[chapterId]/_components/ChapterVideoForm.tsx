"use client";

import * as z from "zod";
import axios from "axios";
import MuPlayer from "@mux/mux-player-react";
import { Pencil, PlusCircle, VideoIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter, MuxData } from "@prisma/client";

import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";

interface ChapterVideoFormProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  videoType: z.enum(["mux", "external"]),
  videoUrl: z.string().min(1),
});

export default function ChapterVideoForm({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [videoType, setVideoType] = useState<"mux" | "external">("mux");
  const [videoUrl, setVideoUrl] = useState<string>(initialData.videoUrl || "");

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, {
        videoUrl: videoUrl,
        videoType: "external",
      });
      toast.success("Chapter updated");
      toggleEdit();

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-4 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapter video
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}

          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an video
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit video
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {!videoUrl ? (
            <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
              <VideoIcon className="h-10 w-10 text-slate-500" />
            </div>
          ) : (
            <div className="relative aspect-video mt-2">
              {videoType === "mux" ? (
                <MuPlayer playbackId={initialData?.muxData?.playbackId || ""} />
              ) : (
                <iframe
                  src={videoUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              )}
            </div>
          )}
          {initialData.videoUrl && (
            <div className="text-xs text-muted-foreground mt-2">
              Video can take a few minutes to process. Refresh the page if the
              video does not appear.
            </div>
          )}
        </>
      )}
      {isEditing && (
        <div>
          <div className="flex items-center mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-indigo-600"
                value="mux"
                checked={videoType === "mux"}
                onChange={() => setVideoType("mux")}
              />
              <span className="ml-2">Upload via Mux</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-indigo-600"
                value="external"
                checked={videoType === "external"}
                onChange={() => setVideoType("external")}
              />
              <span className="ml-2">Use external link</span>
            </label>
          </div>
          {videoType === "mux" && (
            <FileUpload
              endpoint="chapterVideo"
              onChange={(url) => {
                if (url) {
                  setVideoUrl(url);
                }
              }}
            />
          )}
          {videoType === "external" && (
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-2"
              placeholder="Enter video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          )}
          <div className="text-ts text-muted-foreground mt-4">
            {videoType === "mux"
              ? "Upload this chapter's video via Mux."
              : "Enter the URL of the external video."}
          </div>
          <Button
            onClick={(event) => onSubmit({ videoType, videoUrl })}
            className="mt-4"
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
}
