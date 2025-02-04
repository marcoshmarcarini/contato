import { NextResponse } from 'next/server';

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Rubia Tannure 
N:Rubia;Tannure;;;
TITLE:Marketing e Relacionamento / Marketing & Relations
TEL;TYPE=CELL:+55 27 99228-0833
EMAIL:marketing@centrorochas.org.br
END:VCARD
  `.trim(); // Remove espaços extras

  const headers = new Headers({
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  });

  return new NextResponse(vCard, { headers });
}
