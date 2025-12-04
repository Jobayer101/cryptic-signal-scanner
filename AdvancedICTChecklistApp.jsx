import React from "react";

export default function AdvancedICTChecklistApp() {
  const [htfBias, setHtfBias] = React.useState("");
  const [mss, setMss] = React.useState("");
  const [liquidity, setLiquidity] = React.useState({ bsl: false, ssl: false });
  const [priceLocation, setPriceLocation] = React.useState("");
  const [entryModel, setEntryModel] = React.useState({
    fvg: false,
    ob: false,
    breaker: false,
    vi: false,
    ce: false,
    mb: false,
  });
  const [trigger, setTrigger] = React.useState({
    fvg: false,
    ob: false,
    ce: false,
    retrace: false,
  });
  const [volume, setVolume] = React.useState({
    displacement: false,
    volumeSupport: false,
  });
  const [liquidityRuns, setLiquidityRuns] = React.useState({
    lrlr: false,
    hrlr: false,
  });
  const [risk, setRisk] = React.useState({
    slOK: false,
    rrOK: false,
    riskOK: false,
    riskPercent: "1",
  });
  const [targets, setTargets] = React.useState({
    tp1: false,
    tp2: false,
    tp3: false,
    partials: false,
  });
  const [result, setResult] = React.useState("");
  const [psych, setPsych] = React.useState({
    revenge: false,
    fomo: false,
    aPlus: false,
    calm: false,
  });

  const resetAll = () => {
    setHtfBias("");
    setMss("");
    setLiquidity({ bsl: false, ssl: false });
    setPriceLocation("");
    setEntryModel({ fvg: false, ob: false, breaker: false, vi: false, ce: false, mb: false });
    setTrigger({ fvg: false, ob: false, ce: false, retrace: false });
    setVolume({ displacement: false, volumeSupport: false });
    setLiquidityRuns({ lrlr: false, hrlr: false });
    setRisk({ slOK: false, rrOK: false, riskOK: false, riskPercent: "1" });
    setTargets({ tp1: false, tp2: false, tp3: false, partials: false });
    setResult("");
    setPsych({ revenge: false, fomo: false, aPlus: false, calm: false });
  };

  const keyChecks = [
    !!htfBias,
    !!mss,
    priceLocation !== "",
    Object.values(entryModel).some(Boolean),
    volume.displacement,
    risk.slOK,
    risk.rrOK,
    risk.riskOK,
    psych.aPlus,
  ];

  const completed = keyChecks.filter(Boolean).length;
  const score = Math.round((completed / keyChecks.length) * 100);

  const grade = (() => {
    if (score >= 90) return "A+ (Elite setup)";
    if (score >= 75) return "A (Strong setup)";
    if (score >= 60) return "B (Decent, but not perfect)";
    if (score > 0) return "C (Be careful – maybe skip)";
    return "Not graded yet";
  })();

  const cardClass =
    "rounded-2xl border border-zinc-700 bg-zinc-900/70 p-4 md:p-5 shadow-lg flex flex-col gap-3";

  const sectionTitleClass = "text-sm font-semibold tracking-wide text-zinc-300 uppercase";

  const labelClass = "flex items-center gap-2 text-sm text-zinc-200";

  const radioBaseClass =
    "inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium cursor-pointer transition hover:border-zinc-400";

  const selectedRadioClass = "bg-emerald-600/20 border-emerald-500 text-emerald-300";

  const confirmEnabled = score >= 75 && htfBias !== "" && mss !== "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-zinc-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Advanced ICT Trade Checklist
            </h1>
            <p className="text-sm text-zinc-400">
              Click through each section before you execute a trade. Designed for HTF bias → MSS → liquidity → PD array → risk.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={resetAll}
              className="rounded-full border border-zinc-600 px-4 py-1.5 text-xs font-medium text-zinc-100 hover:bg-zinc-800"
            >
              Reset checklist
            </button>
            <div className="w-48">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                <span>Readiness</span>
                <span>{score}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all"
                  style={{ width: `${score}%` }}
                />
              </div>
              <p className="mt-1 text-[11px] text-emerald-300 font-medium">{grade}</p>
            </div>
          </div>
        </header>

        <main className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* 1. HTF Bias */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>1. HTF Bias</h2>
            <p className="text-xs text-zinc-400 mb-1">Daily / 4H narrative – only trade in this direction.</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <button
                type="button"
                onClick={() => setHtfBias("bullish")}
                className={`${radioBaseClass} ${htfBias === "bullish" ? selectedRadioClass : ""}`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Bullish
              </button>
              <button
                type="button"
                onClick={() => setHtfBias("bearish")}
                className={`${radioBaseClass} ${htfBias === "bearish" ? selectedRadioClass : ""}`}
              >
                <span className="h-2 w-2 rounded-full bg-red-400" /> Bearish
              </button>
            </div>
          </section>

          {/* 2. MSS / Structure */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>2. MSS / Structure</h2>
            <p className="text-xs text-zinc-400 mb-1">Has structure shifted in the direction of the HTF bias?</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <button
                type="button"
                onClick={() => setMss("bullish")}
                className={`${radioBaseClass} ${mss === "bullish" ? selectedRadioClass : ""}`}
              >
                Bullish MSS
              </button>
              <button
                type="button"
                onClick={() => setMss("bearish")}
                className={`${radioBaseClass} ${mss === "bearish" ? selectedRadioClass : ""}`}
              >
                Bearish MSS
              </button>
            </div>
          </section>

          {/* 3. Liquidity Event */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>3. Liquidity Taken</h2>
            <p className="text-xs text-zinc-400 mb-1">Did price take liquidity first?</p>
            <div className="flex flex-col gap-1 mt-1">
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={liquidity.bsl}
                  onChange={(e) =>
                    setLiquidity((prev) => ({ ...prev, bsl: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                Buy-side liquidity swept (BSL)
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={liquidity.ssl}
                  onChange={(e) =>
                    setLiquidity((prev) => ({ ...prev, ssl: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                Sell-side liquidity swept (SSL)
              </label>
            </div>
          </section>

          {/* 4. Premium / Discount */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>4. Price Location</h2>
            <p className="text-xs text-zinc-400 mb-1">Are you buying in discount or selling in premium?</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <button
                type="button"
                onClick={() => setPriceLocation("discount")}
                className={`${radioBaseClass} ${
                  priceLocation === "discount" ? selectedRadioClass : ""
                }`}
              >
                Discount (Buy zone)
              </button>
              <button
                type="button"
                onClick={() => setPriceLocation("premium")}
                className={`${radioBaseClass} ${
                  priceLocation === "premium" ? selectedRadioClass : ""
                }`}
              >
                Premium (Sell zone)
              </button>
            </div>
          </section>

          {/* 5. Entry PD Array */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>5. Entry PD Array</h2>
            <p className="text-xs text-zinc-400 mb-1">Which PD array is giving the trigger?</p>
            <div className="grid grid-cols-2 gap-1 mt-1 text-xs">
              {[
                ["fvg", "FVG"],
                ["ob", "Order Block (OB)"],
                ["breaker", "Breaker"],
                ["vi", "Volume Imbalance"],
                ["ce", "C.E (Consolidation & Expansion)"],
                ["mb", "Mitigation Block"],
              ].map(([key, label]) => (
                <label key={key} className={labelClass}>
                  <input
                    type="checkbox"
                    checked={entryModel[key]}
                    onChange={(e) =>
                      setEntryModel((prev) => ({
                        ...prev,
                        [key]: e.target.checked,
                      }))
                    }
                    className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                  />
                  {label}
                </label>
              ))}
            </div>
          </section>

          {/* 6. Trigger Location */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>6. Trigger Location</h2>
            <p className="text-xs text-zinc-400 mb-1">Where exactly are you entering?</p>
            <div className="flex flex-col gap-1 mt-1 text-xs">
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={trigger.fvg}
                  onChange={(e) =>
                    setTrigger((prev) => ({ ...prev, fvg: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                In FVG (Fair Value Gap)
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={trigger.ob}
                  onChange={(e) =>
                    setTrigger((prev) => ({ ...prev, ob: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                At OB open / 50%
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={trigger.ce}
                  onChange={(e) =>
                    setTrigger((prev) => ({ ...prev, ce: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                At C.E midpoint
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={trigger.retrace}
                  onChange={(e) =>
                    setTrigger((prev) => ({ ...prev, retrace: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                After MSS retracement
              </label>
            </div>
          </section>

          {/* 7. Volume & Displacement */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>7. Volume & Displacement</h2>
            <p className="text-xs text-zinc-400 mb-1">Is there real power behind the move?</p>
            <div className="flex flex-col gap-1 mt-1 text-xs">
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={volume.displacement}
                  onChange={(e) =>
                    setVolume((prev) => ({
                      ...prev,
                      displacement: e.target.checked,
                    }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                Strong displacement candle in entry direction
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={volume.volumeSupport}
                  onChange={(e) =>
                    setVolume((prev) => ({
                      ...prev,
                      volumeSupport: e.target.checked,
                    }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                Volume supports the move (optional confluence)
              </label>
            </div>
          </section>

          {/* 8. Liquidity Runs */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>8. LRLR / HRLR</h2>
            <p className="text-xs text-zinc-400 mb-1">Is this a clean run through liquidity?</p>
            <div className="flex flex-col gap-1 mt-1 text-xs">
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={liquidityRuns.lrlr}
                  onChange={(e) =>
                    setLiquidityRuns((prev) => ({
                      ...prev,
                      lrlr: e.target.checked,
                    }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                Low resistance liquidity run (LRLR)
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={liquidityRuns.hrlr}
                  onChange={(e) =>
                    setLiquidityRuns((prev) => ({
                      ...prev,
                      hrlr: e.target.checked,
                    }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                High resistance liquidity run (HRLR)
              </label>
            </div>
          </section>

          {/* 9. Risk Management */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>9. Risk Management</h2>
            <p className="text-xs text-zinc-400 mb-1">Protect the account first, then think about profits.</p>
            <div className="flex items-center gap-2 text-xs mt-1">
              <span className="text-zinc-400">Risk % per trade:</span>
              <input
                type="number"
                min="0"
                step="0.1"
                value={risk.riskPercent}
                onChange={(e) =>
                  setRisk((prev) => ({ ...prev, riskPercent: e.target.value }))
                }
                className="w-16 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-100 outline-none"
              />
              <span className="text-zinc-500">%</span>
            </div>
            <div className="flex flex-col gap-1 mt-2 text-xs">
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={risk.slOK}
                  onChange={(e) =>
                    setRisk((prev) => ({ ...prev, slOK: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                SL beyond recent liquidity / structure (not random)
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={risk.rrOK}
                  onChange={(e) =>
                    setRisk((prev) => ({ ...prev, rrOK: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                RR ≥ 1:2 (prefer 1:3+)
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={risk.riskOK}
                  onChange={(e) =>
                    setRisk((prev) => ({ ...prev, riskOK: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                Within daily loss limit (no rule breaking)
              </label>
            </div>
          </section>

          {/* 10. Targets & Partials */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>10. Targets & Partials</h2>
            <p className="text-xs text-zinc-400 mb-1">Know your exits before you enter.</p>
            <div className="flex flex-col gap-1 mt-1 text-xs">
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={targets.tp1}
                  onChange={(e) =>
                    setTargets((prev) => ({ ...prev, tp1: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                TP1: Opposite side liquidity (equal highs/lows, obvious stops)
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={targets.tp2}
                  onChange={(e) =>
                    setTargets((prev) => ({ ...prev, tp2: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                TP2: Imbalance / FVG close
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={targets.tp3}
                  onChange={(e) =>
                    setTargets((prev) => ({ ...prev, tp3: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                TP3: HTF structural level / weekly draw on liquidity
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={targets.partials}
                  onChange={(e) =>
                    setTargets((prev) => ({ ...prev, partials: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                Partial profits planned (no full send)
              </label>
            </div>
          </section>

          {/* 11. Result (after trade) */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>11. Trade Result</h2>
            <p className="text-xs text-zinc-400 mb-1">Fill this after the trade closes.</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["win", "loss", "be"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setResult(r)}
                  className={`${radioBaseClass} ${
                    result === r ? selectedRadioClass : ""
                  }`}
                >
                  {r === "win" && "WIN"}
                  {r === "loss" && "LOSS"}
                  {r === "be" && "Break-even"}
                </button>
              ))}
            </div>
          </section>

          {/* 12. Psychology */}
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>12. Psychology Check</h2>
            <p className="text-xs text-zinc-400 mb-1">Be honest. If this fails, do not trade.</p>
            <div className="flex flex-col gap-1 mt-1 text-xs">
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={psych.revenge}
                  onChange={(e) =>
                    setPsych((prev) => ({ ...prev, revenge: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                I am <span className="font-semibold text-red-400">not</span> revenge trading
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={psych.fomo}
                  onChange={(e) =>
                    setPsych((prev) => ({ ...prev, fomo: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                I am <span className="font-semibold text-red-400">not</span> FOMO entering
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={psych.aPlus}
                  onChange={(e) =>
                    setPsych((prev) => ({ ...prev, aPlus: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                This matches my A+ ICT model
              </label>
              <label className={labelClass}>
                <input
                  type="checkbox"
                  checked={psych.calm}
                  onChange={(e) =>
                    setPsych((prev) => ({ ...prev, calm: e.target.checked }))
                  }
                  className="h-3 w-3 rounded border-zinc-600 bg-zinc-900"
                />
                I feel calm and objective, not tilted
              </label>
            </div>
          </section>

          {/* 13. Final Approval */}
          <section className={`${cardClass} md:col-span-2 xl:col-span-3`}>
            <h2 className={sectionTitleClass}>13. Final Approval</h2>
            <p className="text-xs text-zinc-400 mb-3">
              Only press "I confirm this trade" if HTF bias, MSS, liquidity, PD array, and risk all align.
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-xs text-zinc-300">
                <p>
                  <span className="text-zinc-500">Bias:</span>{" "}
                  {htfBias ? (
                    <span className="font-semibold text-emerald-300 uppercase">
                      {htfBias}
                    </span>
                  ) : (
                    <span className="text-zinc-500">Not set</span>
                  )}
                </p>
                <p>
                  <span className="text-zinc-500">Structure:</span>{" "}
                  {mss ? (
                    <span className="font-semibold text-emerald-300 uppercase">
                      {mss} MSS
                    </span>
                  ) : (
                    <span className="text-zinc-500">Not set</span>
                  )}
                </p>
                <p>
                  <span className="text-zinc-500">Main PD array:</span>{" "}
                  {Object.entries(entryModel)
                    .filter(([_, v]) => v)
                    .map(([k]) => k.toUpperCase())
                    .join(", ") || <span className="text-zinc-500">None</span>}
                </p>
                <p>
                  <span className="text-zinc-500">Risk per trade:</span>{" "}
                  <span className="font-semibold">{risk.riskPercent || "0"}%</span>
                </p>
              </div>

              <button
                type="button"
                disabled={!confirmEnabled}
                className={`rounded-full px-6 py-2 text-sm font-semibold shadow-md transition ${confirmEnabled
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                  : "bg-zinc-700 text-zinc-300 cursor-not-allowed"}`}
              >
                I confirm this ICT trade setup
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
