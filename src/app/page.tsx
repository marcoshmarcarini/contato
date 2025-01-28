'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleAddContact = async () => {
    setLoading(true);
    try {
      // Método moderno usando Contacts API (suporte limitado)
      if ('contacts' in navigator && 'ContactsManager' in window) {
        const contacts = await (navigator as any).contacts.select(['name', 'tel', 'email'], { multiple: false });
        if (contacts && contacts[0]) {
          // Lógica para adicionar contato via API
          await (navigator as any).contacts.create(contacts[0]);
        }
      } else {
        // Fallback para VCard
        const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:SALVIO PARTNER LTDA
TITLE:José Henrique Salvio
TEL;TYPE=CELL:+55 31 99851-8916
TEL;TYPE=WORK,VOICE:+55 28 3344-1022
EMAIL:josehenrique@salviopartner.com
URL:www.salviopartner.com
NOTE:Instagram: @salviopartner
END:VCARD`;

        // Cria um Blob e força a abertura
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        
        // Cria link temporário
        const link = document.createElement('a');
        link.href = url;
        link.download = 'salviopartner.vcf';
        link.style.display = 'none';
        
        // Aciona o click programaticamente
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // Feedback visual
        toast.success('Contato pronto para ser importado!', {
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('Erro ao salvar contato. Tente novamente.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <button
        onClick={handleAddContact}
        disabled={loading}
        className={`${
          loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
        } text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center`}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Processando...
          </>
        ) : (
          'Salvar Contato Agora'
        )}
      </button>

      <p className="mt-4 text-gray-600 text-sm text-center max-w-md">
        {`Se o contato não abrir automaticamente, verifique sua pasta de downloads 
        e importe o arquivo "salviopartner.vcf" manualmente.`}
      </p>
    </div>
  );
}