google.maps.__gjsload__('search_impl', function(_) {
    var ogb = function(a, b) {
            _.H(a.j, 3, b)
        },
        sgb = function(a, b, c) {
            const d = _.IL(new pgb);
            c.kk = (0, _.ta)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.yJa(c, _.qS(b));
            const e = [];
            e.push(_.bk(c, "click", (0, _.ta)(qgb, null, a)));
            _.Kb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.bk(c, f, (0, _.ta)(rgb, null, a, f)))
            });
            e.push(_.bk(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        qgb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Y(e.j,
                    2) ? new _.rj(_.xu(_.M(e.j, 2, _.Du).j, 1), _.xu(_.M(e.j, 2, _.Du).j, 2)) : null;
                f.fields = {};
                const h = _.ci(e.j, 3);
                for (let k = 0; k < h; ++k) {
                    const m = _.Nr(e.j, 3, _.yS, k);
                    f.fields[m.getKey()] = m.getValue()
                }
            }
            _.ok(a, "click", b, c, d, f)
        },
        rgb = function(a, b, c, d, e, f, h) {
            let k = null;
            f && (k = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.ok(a, b, c, d, e, k, h)
        },
        tgb = function() {},
        ugb = class extends _.U {
            constructor() {
                super()
            }
            dc() {
                return _.zi(this.j, 2)
            }
        },
        vgb = [_.N, , , _.Ip, _.CKa];
    var wgb = class extends _.U {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.K(this.j, 1, -1)
        }
    };
    var pgb = class {
        constructor() {
            var a = _.yo,
                b = _.vo;
            this.h = _.Bi;
            this.g = _.Ar(_.Kz, a, _.QB + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(h) {
                h = new wgb(h);
                b(h)
            }
            var d = new ugb;
            _.H(d.j, 1, a.layerId.split("|")[0]);
            _.H(d.j, 2, a.featureId);
            ogb(d, this.h.g().g());
            for (var e in a.parameters) {
                var f = _.ri(d.j, 4, _.yS);
                _.H(f.j, 1, e);
                _.H(f.j, 2, a.parameters[e])
            }
            a = _.ji(d.Gb(), vgb, 1);
            this.g(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    tgb.prototype.DA = function(a) {
        if (_.Xm[15]) {
            var b = a.l;
            const c = a.l = a.getMap();
            b && a.g && (a.i ? (b = b.__gm.h, b.set(b.get().gh(a.g))) : a.g && _.VJa(a.g, b) && (_.Kb(a.h || [], _.dk), a.h = null));
            if (c) {
                b = new _.jz;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...h] = d[e].split(":");
                    b.parameters[f] = h.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.xz(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.Ky(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.Ky(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.Iga(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.kz(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.jB(a.get("searchPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.yz(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.wC(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters = new _.vC(a.get("directionsPipeParameters")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.g = b;
                a.i = a.get("renderOnBaseMap");
                a.i ? (a = c.__gm.h, a.set(a.get().ef(b))) : sgb(a, c, b);
                _.il(c, "Lg");
                _.gl(c,
                    148282)
            }
        }
    };
    _.Tj("search_impl", new tgb);
});