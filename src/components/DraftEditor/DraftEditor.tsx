'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import { Button, IconButton } from '@mui/material';
import { Bold, Italic } from 'lucide-react';
import 'draft-js/dist/Draft.css';

interface DraftEditorProps {
  value: string; // Recebe o conteúdo inicial como JSON (convertido do backend)
  onChange: (value: string) => void; // Retorna o conteúdo como JSON
}

const DraftEditor = ({ value, onChange }: DraftEditorProps) => {
  // Inicializa o estado do editor
  const [editorState, setEditorState] = useState(() => {
    try {
      // Tenta carregar o conteúdo como JSON (formato do Draft.js)
      const contentState = convertFromRaw(JSON.parse(value || '{"blocks":[{"key":"1","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'));
      return EditorState.createWithContent(contentState);
    } catch {
      // Se não for JSON válido, cria um editor vazio
      return EditorState.createEmpty();
    }
  });

  // Atualiza o estado e chama onChange com o conteúdo em JSON
  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    const content = convertToRaw(newEditorState.getCurrentContent());
    onChange(JSON.stringify(content)); // Salva como JSON
  };

  // Funções para aplicar formatações
  const toggleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const toggleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  return (
    <div className="border rounded-md">
      <div className="flex gap-1 p-2 border-b bg-gray-50">
        <IconButton onClick={toggleBold} color={editorState.getCurrentInlineStyle().has('BOLD') ? 'primary' : 'default'}>
          <Bold size={20} />
        </IconButton>
        <IconButton onClick={toggleItalic} color={editorState.getCurrentInlineStyle().has('ITALIC') ? 'primary' : 'default'}>
          <Italic size={20} />
        </IconButton>
      </div>
      <div className="p-4 min-h-[150px]">
        <Editor editorState={editorState} onChange={handleEditorChange} />
      </div>
    </div>
  );
};

// Carrega o componente apenas no cliente
export default dynamic(() => Promise.resolve(DraftEditor), { ssr: false });