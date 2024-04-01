import { useState } from 'react';

export default function useEditMode(initialText: string, onUpdate: (text: string) => void) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleToggleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleUpdate = () => {
    if (text.trim() !== '') {
      onUpdate(text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  return {
    isEditing,
    text,
    handleToggleEdit,
    handleInputChange,
    handleUpdate,
    handleKeyDown,
  };
}
