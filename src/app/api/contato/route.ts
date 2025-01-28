import { NextResponse } from 'next/server'

export async function GET() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:TALES MACHADO
TITLE:Thales Machado
ROLE:Presidente/President
TEL;TYPE=CELL:+55 28 99238-0127
EMAIL:tales.machado@centrorochas.org.br
END:VCARD
  `

  const headers = new Headers({
    'Content-Type': 'text/vcard',
    'Content-Disposition': 'inline; filename="contact.vcf"',
  })

  return new NextResponse(vCard, { headers })
}