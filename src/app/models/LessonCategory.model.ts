export interface LessonCategory {
  id: string;
  title: string;
  description: string;
  slug: string;
  phrases: number;
  progress: number | null;
}
