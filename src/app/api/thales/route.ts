import { NextResponse } from 'next/server';

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Thales Machado
N:Machado;Thales;;;
TITLE:Presidente/President
TEL;TYPE=CELL:+55 28 99885-4700
EMAIL:tales.machado@centrorochas.org.br
END:VCARD
  `.trim(); // Remove espaços extras

  const headers = new Headers({
    'Content-Type': 'text/vcard; charset=utf-8',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  });

  return new NextResponse(vCard, { headers });
}
