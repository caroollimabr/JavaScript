function contar() {
    let ini = document.getElementById ('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert ('Passo inválido! O mínimo do passo deve ser 1.')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` //nomenclatura de emoji para JS - unicode.org "Full Emoji list" no Google
            }

        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F6A9}`
        
    }


}