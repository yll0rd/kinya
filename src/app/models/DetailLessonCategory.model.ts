export interface DetailLessonCategory {
  id: string;
  title: string;
  description: string;
  slug: string;
  phrases: Phrases;
  progress: number;
}

type Phrases = {
  id: string;
  kinyarwanda: string;
  english: string;
  audioUrl: string | null;
  isKeyVocabulary: boolean;
}[]
