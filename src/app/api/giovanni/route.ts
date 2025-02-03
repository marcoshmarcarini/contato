import { NextResponse } from 'next/server';

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Giovanni Francischetto
N:Francischetto;Giovanni;;;
TITLE:Superintendente/Superintendent  
TEL;TYPE=CELL:+55 27 99869-5864
EMAIL:diretoria@centrorochas.org.br
END:VCARD
  `.trim(); // Remove espaços extras

  const headers = new Headers({
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  });

  return new NextResponse(vCard, { headers });
}
