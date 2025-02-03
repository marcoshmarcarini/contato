import { NextResponse } from 'next/server';

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Thiago Fukuda
N:Fukuda;Thiago;;;
TITLE:Gerente de Projeto/Project Manager
TEL;TYPE=CELL:+55 27 99696-5786
EMAIL:gerente.projeto@centrorochas.org.br
END:VCARD
  `.trim(); // Remove espaços extras

  const headers = new Headers({
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  });

  return new NextResponse(vCard, { headers });
}
