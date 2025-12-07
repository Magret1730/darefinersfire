import { IVideos } from "@/app/page";

export interface TYouTubeCard {
  video: IVideos;
  wid?: number;
  paddingTop?: string;
  alignItems?: string;
}