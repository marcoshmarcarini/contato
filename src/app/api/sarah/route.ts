import { NextResponse } from 'next/server';

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Sarah Lima
N:Lima;Sarah;;;
TITLE:Gerente Geral/General Manager
TEL;TYPE=CELL:+55 27 99655-7680
EMAIL:gerencia.adm@centrorochas.org.br
END:VCARD
  `.trim(); // Remove espaços extras

  const headers = new Headers({
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  });

  return new NextResponse(vCard, { headers });
}
