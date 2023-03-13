const myModule = (() => {
    "use strict";
    let e = [],
        t = ["C", "D", "H", "S"],
        a = ["A", "J", "Q", "K"],
        l = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10, A: 11 },
        r = [],
        n = document.querySelectorAll("small"),
        d = document.querySelector("#btn-nuevo-juego"),
        s = document.querySelector("#btn-pedir-carta"),
        o = document.querySelector("#btn-detener"),
        i = document.querySelectorAll(".panel-cartas"),
        $ = (t = 1) => {
            e = c();
            for (let a = 0; a <= t; a++) r[a] = 0, n[a].innerText = "0", i[a].innerHTML = "";
            s.disabled = !1, o.disabled = !1
        },
        _ = e => {
            for (let t = e.length - 1; t > 0; t--) {
                let a = Math.floor(Math.random() * (t + 1)),
                    l = e[t];
                e[t] = e[a], e[a] = l
            }
        },
        c = () => { let e = []; for (let l of t) { for (let r = 2; r <= 10; r++) e.push(r + l); for (let n of a) e.push(n + l) } return _(e), e },
        u = () => { if (0 !== e.length) return e.shift(); throw "No hay cartas en la baraja" },
        g = (e, t) => (r[t] = r[t] + b(e), n[t].innerText = r[t], r[t]),
        b = e => { let t = e.substring(0, e.length - 1); return l[t] },
        f = (e, t, a) => {
            let l = document.createElement("img");
            l.src = `assets/cartas/${e}.png`, l.classList.add(t), i[a].append(l)
        },
        h = e => {
            let t = 0;
            do { let a = u(); if (f(a, "carta", r.length - 1), t = g(a, r.length - 1), e > 21) break } while (t < e && e <= 21);
            p()
        },
        p = () => {
            let [e, t] = r;
            setTimeout(() => { t === e ? alert("Nadie gana :(") : e > 21 ? alert("Computadora gana") : 21 === t ? alert("Computadora gana") : alert("Jugador gana") }, 1e3)
        };
    return d.addEventListener("click", () => { $() }), s.addEventListener("click", () => {
        let e = u();
        f(u(), "carta", 0);
        let t = g(e, 0);
        t > 21 && (console.log("Luser, :P"), s.disabled = !0, h(t)), 21 === t && (console.log("Like a boss"), s.disabled = !0, o.disabled = !0, h(t))
    }), o.addEventListener("click", () => { s.disabled = !0, o.disabled = !0, h(r[0]) }), e = c(), { newGame: $ }
})();