'use client'

export default function Home() {

  const saveVcard = async () => {
    try {
      const response = await fetch('/src/api/contato')
      const blob = await response.blob()

      //Cria um link temporario para forçar o Download.
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'contact.vcf'
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }catch(error){
      console.error('Erro ao salvar contato: ', error)
      alert('Erro ao salvar contato!')
    }
   
  }

  return (
    <button onClick={saveVcard}>
      Salvar Contato
    </button>
  )
}