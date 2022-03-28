function main() {
    teeAsia(sanoMoi)
    teeAsia(sanoHei)
    // teeAsia(() => {console.log("Heippa")})
    teeAsia(() => {console.log("Heippa")})

    teeAsiaNKertaa(sanoHei, 3)
}

function sanoMoi() {
    console.log("asas")
}

const sanoHei = () => {
    console.log("asas2")
}

function teeAsia(asiaFunktio){
    asiaFunktio()
    console.log("start")
    asiaFunktio()
}

function teeAsiaNKertaa(asiaFunktio, n) {
    for (let i = 0; i < n; ++i){
        asiaFunktio()
    }
}


main()


//node funktiokusuja.js