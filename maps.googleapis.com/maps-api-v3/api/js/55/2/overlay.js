google.maps.__gjsload__('overlay', function(_) {
    var uE = function(a) {
            this.g = a
        },
        Uka = function() {},
        vE = function(a) {
            a.rt = a.rt || new Uka;
            return a.rt
        },
        Vka = function(a) {
            this.Ea = new _.Hm(() => {
                const b = a.rt;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.cr && a.onAdd) a.onAdd();
                        b.cr = !0;
                        a.draw()
                    }
                } else {
                    if (b.cr)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.cr = !1
                }
            }, 0)
        },
        Wka = function(a, b) {
            const c = vE(a);
            let d = c.hq;
            d || (d = c.hq = new Vka(a));
            _.Kb(c.Sa || [], _.dk);
            var e = c.ob = c.ob || new _.gha;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.zx = c.zx || new uE(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.Im(d.Ea);
            c.Sa = [_.bk(a, "panes_changed", e), _.bk(f, "zoom_changed", e), _.bk(f, "offset_changed", e), _.bk(b, "projection_changed", e), _.bk(f, "projectioncenterq_changed", e)];
            _.Im(d.Ea);
            b instanceof _.yk ? (_.il(b, "Ox"), _.gl(b, 148440)) : b instanceof _.Dl && (_.il(b, "Oxs"),
                _.gl(b, 181451))
        },
        ala = function(a) {
            if (a) {
                var b = a.getMap();
                if (Xka(a) !== b && b && b instanceof _.yk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Yka(b, a, c.overlayLayer) : c.qb.then(({
                        da: d
                    }) => {
                        const e = new Zka(b, d);
                        d.Ib(e);
                        c.overlayLayer = e;
                        $ka(a);
                        ala(a)
                    })
                }
            }
        },
        $ka = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.i.Re(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Xka = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        bla = function(a, b) {
            a.g.get("projection") !=
                b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        };
    _.Da(uE, _.sk);
    uE.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Oi(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var wE = {};
    _.Da(Vka, _.sk);
    wE.re = function(a) {
        if (a) {
            var b = a.getMap();
            (vE(a).kx || null) !== b && (b && Wka(a, b), vE(a).kx = b)
        }
    };
    wE.Re = function(a) {
        const b = vE(a);
        var c = b.ob;
        c && c.unbindAll();
        (c = b.zx) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Sa && _.Kb(b.Sa, _.dk);
        b.Sa = null;
        b.hq && (b.hq.Ea.Ic(), b.hq = null);
        delete vE(a).kx
    };
    var xE = {},
        Yka = class {
            constructor(a, b, c) {
                this.map = a;
                this.g = b;
                this.i = c;
                this.h = !1;
                _.il(this.map, "Ox");
                _.gl(this.map, 148440);
                c.re(this)
            }
            draw() {
                this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
                this.g.draw && this.g.draw()
            }
        },
        Zka = class {
            constructor(a, b) {
                this.l = a;
                this.i = b;
                this.g = null;
                this.h = []
            }
            dispose() {}
            Zb(a, b, c, d, e, f, h, k) {
                const m = this.g = this.g || new _.ZB(this.l, this.i, () => {});
                m.Zb(a, b, c, d, e, f, h, k);
                for (const q of this.h) bla(q, m), q.draw()
            }
            re(a) {
                this.h.push(a);
                this.g && bla(a, this.g);
                this.i.refresh()
            }
            Re(a) {
                _.Vb(this.h,
                    a)
            }
        };
    xE.re = ala;
    xE.Re = $ka;
    _.Tj("overlay", {
        vv: function(a) {
            if (a) {
                (0, wE.Re)(a);
                (0, xE.Re)(a);
                var b = a.getMap();
                b && (b instanceof _.yk ? (0, xE.re)(a) : (0, wE.re)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.$v(a, {
                Je: ({
                    event: b
                }) => {
                    _.Ht(b.Ja)
                },
                rd: b => _.Jv(b),
                tj: b => _.Kv(b),
                me: b => _.Kv(b),
                Jd: b => _.Lv(b)
            }).bl(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Zj);
            a.addEventListener("contextmenu", _.Zj);
            a.addEventListener("dblclick", _.Zj);
            a.addEventListener("mousedown", _.Zj);
            a.addEventListener("mousemove", _.Zj);
            a.addEventListener("MSPointerDown",
                _.Zj);
            a.addEventListener("pointerdown", _.Zj);
            a.addEventListener("touchstart", _.Zj);
            a.addEventListener("wheel", _.Zj)
        }
    });
});