export interface VerseData {
  reference: string;
  verses: Verse[];
  translation_name: string;
  translation_id: string;
  translation_note: string;
}

export interface Verse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}
