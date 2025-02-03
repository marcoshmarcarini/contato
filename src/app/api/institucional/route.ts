import { NextResponse } from 'next/server';

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Institucional (Centrorochas)
N:(Centrorochas);Institucional;;;
TITLE:Institucional
TEL;TYPE=TEL:+55 27 3376-5006
TEL;TYPE=CELL:+55 27 99700-0982
EMAIL:centro@centrorochas.org.br
END:VCARD
  `.trim(); // Remove espaços extras

  const headers = new Headers({
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  });

  return new NextResponse(vCard, { headers });
}
