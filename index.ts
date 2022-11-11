import { readFile } from "fs/promises"
import { join } from "path"
import { cwd } from "process"
import { DogFactsModule } from "./Data/DogFactsModule"

export default {
    port: 3000, 
    async fetch(request) {
        let file = await readFile(join(cwd(), "./Templates/Index.html")).then(buf => buf.toString('utf-8'))
        let module = new DogFactsModule()
        let fact = await module.getFacts()
        file = file.replaceAll("{{fact}}", fact.facts[0])
        return new Response(file, {
            status: 200,
            headers: {
                "content-type": "text/html"
            }
        })
    }
}
