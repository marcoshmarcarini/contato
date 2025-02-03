import { NextResponse } from 'next/server';

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Fabio Cruz
N:Cruz;Fabio;;;
TITLE:Vice-Presidente/Vice-President
TEL;TYPE=CELL:+55 27 99238-0127
EMAIL:fabio.cruz@centrorochas.org.br
END:VCARD
  `.trim(); // Remove espaços extras

  const headers = new Headers({
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  });

  return new NextResponse(vCard, { headers });
}
