import { existsSync, rmSync, mkdirSync, writeFileSync } from "node:fs"

async function main(): Promise<void> {
    const path: string = process.cwd()

    if (!existsSync(`${path}/build`)) {
        rmSync(`${path}/build`, { recursive: true, force: true })
    }

    mkdirSync(`${path}/build`, { recursive: true })
    writeFileSync(`${path}/build/index.html`, `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <div>Hello World</div>
            </body>
        </html>
    `, { encoding: "utf-8" })
}

main()
