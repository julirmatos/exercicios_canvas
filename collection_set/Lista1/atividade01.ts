import readlineSync from 'readline-sync'

const cores: Array<string> = new Array<string>()

for (let contadori: number = 0; contador < 6; i++) {
    let cor: string = leia.question(`Digite a ${contador}º cor: `)
    cores.push(cor)
}
console.log(`As cores digitadas foram: ${cores}`)

for (let cor of cores)
    console.log(cor)

cores.sort()
console.log(`As cores em ordem alfabética são: ${cores}`)
for (let cor of cores)
    console.log(cor)
