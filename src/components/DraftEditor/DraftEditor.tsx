'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Editor, EditorState, RichUtils, ContentState, convertToRaw } from 'draft-js';
import { IconButton } from '@mui/material';
import { Bold, Italic, Underline, List, ListOrdered, Heading, Link } from 'lucide-react';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'draft-js/dist/Draft.css';

interface DraftEditorProps {
  value: string; // Recebe o conteúdo inicial como HTML
  onChange: (value: string) => void; // Retorna o conteúdo como HTML
  title?: string;
}

const DraftEditor = ({ value, onChange,title }: DraftEditorProps) => {
  // Inicializa o estado do editor
  const [editorState, setEditorState] = useState(() => {
    // Converte HTML para o formato do Draft.js
    const blocksFromHtml = htmlToDraft(value || '');
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    return EditorState.createWithContent(contentState);
  });

  // Atualiza o estado e chama onChange com o conteúdo em HTML
  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    const content = newEditorState.getCurrentContent();
    const rawContent = convertToRaw(content);
    const html = draftToHtml(rawContent); // Converte para HTML
    onChange(html);
  };

  // Funções para aplicar formatações
  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const addLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const url = prompt('Digite a URL do link:', 'https://');
      if (url) {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));
      }
    } else {
      alert('Selecione um texto para adicionar o link.');
    }
  };

  // Obtém o tipo de bloco atual
  const getCurrentBlockType = () => {
    const selection = editorState.getSelection();
    const content = editorState.getCurrentContent();
    const block = content.getBlockForKey(selection.getStartKey());
    return block.getType();
  };

  return (
    <>
        {title && <h3>{title}</h3>}
        <div className="border rounded-md">
        <div className="flex gap-1 p-2 border-b bg-gray-50">
            <IconButton
            onClick={() => toggleInlineStyle('BOLD')}
            color={editorState.getCurrentInlineStyle().has('BOLD') ? 'primary' : 'default'}
            >
            <Bold size={20} />
            </IconButton>
            <IconButton
            onClick={() => toggleInlineStyle('ITALIC')}
            color={editorState.getCurrentInlineStyle().has('ITALIC') ? 'primary' : 'default'}
            >
            <Italic size={20} />
            </IconButton>
            <IconButton
            onClick={() => toggleInlineStyle('UNDERLINE')}
            color={editorState.getCurrentInlineStyle().has('UNDERLINE') ? 'primary' : 'default'}
            >
            <Underline size={20} />
            </IconButton>
            <IconButton
            onClick={() => toggleBlockType('unordered-list-item')}
            color={getCurrentBlockType() === 'unordered-list-item' ? 'primary' : 'default'}
            >
            <List size={20} />
            </IconButton>
            <IconButton
            onClick={() => toggleBlockType('ordered-list-item')}
            color={getCurrentBlockType() === 'ordered-list-item' ? 'primary' : 'default'}
            >
            <ListOrdered size={20} />
            </IconButton>
            <IconButton
            onClick={() => toggleBlockType('header-one')}
            color={getCurrentBlockType() === 'header-one' ? 'primary' : 'default'}
            >
            <Heading size={20} />
            </IconButton>
            <IconButton onClick={addLink}>
            <Link size={20} />
            </IconButton>
        </div>
        <div className="p-4 min-h-[150px]">
            <Editor editorState={editorState} onChange={handleEditorChange} />
        </div>
        </div>
    </>
  );
};

// Carrega o componente apenas no cliente
export default dynamic(() => Promise.resolve(DraftEditor), { ssr: false });