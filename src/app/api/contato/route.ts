import { NextApiRequest, NextApiResponse } from "next"
//import { NextResponse } from "next/server"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:TALES MACHADO
TITLE:Thales Machado
ROLE:Pesidente/President
TEL;TYPE=CELL:+55 28 99238-0127
EMAIL:tales.machado@centrorochas.org.br
END:VCARD`

    res.setHeader('Content-Type', 'text/vcard')
    res.setHeader('Content-Disposition', 'attachment; filename="contato.vcf"')
    res.send(vCardData)
}