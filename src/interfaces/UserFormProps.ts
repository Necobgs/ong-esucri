import User from "./user";
import userFormData from "./UserFormData";

export default interface UserFormProps {
  onSave: (user:userFormData) => Promise<void>;
  onRemove?: () => void;
  isEditing?: boolean;
  initialData?: User;
}