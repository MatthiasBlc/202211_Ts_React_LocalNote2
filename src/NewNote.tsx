import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";

type NewNoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function NewNote({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteFormProps) {
  return (
    <>
      <h1 className="mb-4">New note </h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
