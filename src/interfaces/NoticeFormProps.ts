

export default interface NoticeFormProps {
  onSave: (formData: FormData) => Promise<void>;
  onRemove?: () => void;
  isEditing?: boolean;
  initialData?: {
    title: string;
    description: string;
    notice_text: string;
    image?: string; // para preview em modo edição
  };
}