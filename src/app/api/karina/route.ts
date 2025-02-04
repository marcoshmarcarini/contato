import { NextResponse } from 'next/server';

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Karina Porto Firme
N:Porto Firme;Karina;;;
TITLE:Comunicação e Relações Públicas / Communication & Public Relations
TEL;TYPE=CELL:+55 27 99705-5705
EMAIL:comunicacao@centrorochas.org.br
END:VCARD
  `.trim(); // Remove espaços extras

  const headers = new Headers({
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  });

  return new NextResponse(vCard, { headers });
}
