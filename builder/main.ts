import { existsSync, rmSync, mkdirSync, writeFileSync } from "node:fs"

async function main(): Promise<void> {
    const path: string = process.cwd()

    if (!existsSync(`${path}/build`)) {
        rmSync(`${path}/build`, { recursive: true, force: true })
    }

    mkdirSync(`${path}/build`, { recursive: true })
    writeFileSync(`${path}/build/index.html`, "<div>Test</div>", { encoding: "utf-8" })
}

main()
