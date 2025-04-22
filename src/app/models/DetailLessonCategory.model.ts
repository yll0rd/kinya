export interface DetailLessonCategory {
  id: string;
  title: string;
  description: string;
  slug: string;
  phrases: Phrase[];
  progress: number;
}

export type Phrase = {
  id: string;
  kinyarwanda: string;
  english: string;
  audioUrl: string | null;
  isKeyVocabulary: boolean;
}
