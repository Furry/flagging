interface ParseOptions {
    parseNumbers?: boolean
}

interface Matches {
    [key: string]: Array<any>
}

export function parse(input: string, options: ParseOptions = {parseNumbers: true}) {
    const exp = new RegExp(/-([^-\s]+)\s*([^-\s]+)?/)

    const matches: Matches = {}
    let y: any;

    while((y = exp.exec(input)) != null) {
        input = input.replace(y[0], "")
        y = y.map((item: string) => {
            if (y.indexOf(item) != 0) {
                return (
                    !isNaN(parseInt(item)) ?
                    parseInt(item) :
                    item
                )
            }
        })
        matches[y[1]] = y.filter((x: any) => x)
        input = input.replace(y[0], "")
    }

    return matches

}
