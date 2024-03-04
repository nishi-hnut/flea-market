import { promises } from "fs"
import { NextRequest } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto

type Item = {
    id: string
    title: string
    description: string
    image_url: string
    price: number
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        if (body.title == undefined || body.description == undefined || body.price == undefined) {
            throw Error("パラメータが不足しています")
        }

        const file = await promises.readFile(process.cwd() + '/app/api/data_items.json', 'utf8')
        const data = JSON.parse(file)
        const items = data.items as Item[]

        items.push({
            id: (items.length + 1).toString(),
            title: body.title,
            description: body.description,
            image_url: "https://lh6.googleusercontent.com/proxy/CNTIYcLDueUPOFa3q0HHITvuGbTBvsky-MfzskOEwpvdh_SwXqqAmdzlXxKQGOtah2o20DJUlrIiJpvbUHIqEoOMzo1-ol6W",
            price: body.price,
        })

        promises.writeFile(process.cwd() + '/app/api/data_items.json', JSON.stringify({
            items: items,
        }))

        const response = JSON.stringify({
            item: items,
        })

        return new Response(undefined, { status: 200 })
    } catch (error) {
        return new Response(error.message, {
            status: 500,
        })
    }
}