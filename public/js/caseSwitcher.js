document.getElementById('quiet-btn').addEventListener('click', makeQuiet)
function makeQuiet(e) {
    console.log(e)
    const p = document.getElementById('patrick')
    let text = p.innerText
    p.innerText = text.toLowerCase()
};

document.getElementById('loud-btn').addEventListener('click', makeLoud)
function makeLoud(e) {
    const f = document.getElementById('patrick')
    let txt = f.innerText
    f.innerText = txt.toUpperCase()
};

    document.getElementById('sarc-btn').addEventListener('click', makeSarc)
    function makeSarc(e){
    const g = document.getElementById('patrick')
    let t = g.innerText
    for(let i = 0; i < t.length; i+=2){
       return g.innerText[i].toUpperCase;
        }
    };
