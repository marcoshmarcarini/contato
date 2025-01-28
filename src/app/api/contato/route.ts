import { NextResponse } from "next/server"

export async function GET() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:TALES MACHADO
TITLE:Thales Machado
ROLE:Pesidente/President
TEL;TYPE=CELL:+55 28 99238-0127
EMAIL:tales.machado@centrorochas.org.br
END:VCARD`

    

    return new NextResponse(vCardData, { headers: {
        'Content-Type': 'text/vcard',
        'Content-Disposition': 'attachment; filename="contact.vcf"',
    } })
}