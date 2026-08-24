"use client";

import { useEffect, useMemo, useState } from "react";
import { recent, scenarios, sources, type Scenario, type Status } from "../data/scenarios";

const validationSteps = ["Checking source grounding", "Validating factual claims", "Checking regulatory requirements", "Assessing suitability", "Detecting privacy exposure", "Calculating trust score"];

function Icon({ name, size = 18 }: { name: "shield" | "play" | "doc" | "close" | "arrow" | "check" | "menu"; size?: number }) {
  const paths = {
    shield: <><path d="M12 3 5 6v5c0 4.5 2.9 8 7 10 4.1-2 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    play: <path d="m9 7 7 5-7 5V7Z"/>, doc: <><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h5"/></>,
    close: <path d="m6 6 12 12M18 6 6 18"/>, arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
    check: <path d="m5 12 4 4L19 6"/>, menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="topbar"><a className="brand" href="#top"><strong>iLAB</strong><span>AI Assurance Gateway</span></a><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Icon name="menu" /></button><nav className={open ? "nav open" : "nav"} aria-label="Primary"><a className="active" href="#top">Dashboard</a><a href="#validation">Validation</a><a href="#controls">Controls</a><a href="#audit">Audit Trail</a></nav><div className="system"><span className="online"><i/>SYSTEM ONLINE</span><span className="environment">DEMO ENVIRONMENT</span></div></header>;
}

function KpiCard({ label, value, secondary, bars }: { label: string; value: string; secondary: string; bars: number[] }) {
  return <article className="kpi"><span>{label}</span><div className="kpi-line"><strong>{value}</strong><div className="spark" aria-hidden="true">{bars.map((h, i) => <i key={i} style={{ height: `${h}%` }}/>)}</div></div><small>{secondary}</small></article>;
}

function Score({ score, running }: { score: number; running: boolean }) {
  const [shown, setShown] = useState(score);
  useEffect(() => { let frame = 0; const total = 38; const timer = window.setInterval(() => { if (running) { setShown(0); window.clearInterval(timer); return; } frame++; setShown(Math.round(score * frame / total)); if (frame >= total) window.clearInterval(timer); }, 22); return () => window.clearInterval(timer); }, [score, running]);
  const status = score >= 90 ? "PASS" : score >= 75 ? "REVIEW" : "BLOCK";
  return <div className="score-wrap"><div className={`score ${status.toLowerCase()}`} style={{ "--score": shown } as React.CSSProperties}><div><strong>{shown}</strong><span>TRUST SCORE</span></div></div><div className={`score-status ${status.toLowerCase()}`}>{status === "REVIEW" ? "REVIEW REQUIRED" : status}</div></div>;
}

function StatusPill({ status }: { status: Status | string }) { return <span className={`status ${status.toLowerCase().replaceAll(" ", "-")}`}>{status}</span>; }

function AssuranceOrb({ running }: { running: boolean }) { return <div className={`orb ${running ? "running" : ""}`} aria-hidden="true"><i/><b/><span/></div>; }

function Drawer({ item, onClose }: { item: { title: string; eyebrow: string; body: string } | null; onClose: () => void }) {
  useEffect(() => { const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose(); document.addEventListener("keydown", fn); return () => document.removeEventListener("keydown", fn); }, [onClose]);
  return <><button className={`backdrop ${item ? "show" : ""}`} onClick={onClose} aria-label="Close detail drawer" tabIndex={item ? 0 : -1}/><aside className={`drawer ${item ? "show" : ""}`} aria-hidden={!item} aria-label="Detail drawer"><button className="drawer-close" onClick={onClose} aria-label="Close"><Icon name="close"/></button>{item && <><span className="eyebrow">{item.eyebrow}</span><h2>{item.title}</h2><div className="drawer-rule"/><p>{item.body}</p><div className="source-stamp"><Icon name="shield"/><div><strong>Controlled source</strong><span>Verified in demo knowledge base</span></div></div></>}</aside></>;
}

export default function Home() {
  const [scenario, setScenario] = useState<Scenario>(scenarios[0]);
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(6);
  const [drawer, setDrawer] = useState<{ title: string; eyebrow: string; body: string } | null>(null);
  const [toast, setToast] = useState("");
  const [completed, setCompleted] = useState(true);
  const checks = useMemo(() => scenario.checks, [scenario]);

  function chooseScenario(next: Scenario) { setScenario(next); setCompleted(true); setStep(6); document.getElementById("validation")?.scrollIntoView({ behavior: "smooth", block: "start" }); }
  function runValidation() { if (running) return; setRunning(true); setCompleted(false); setStep(0); let current = 0; const timer = window.setInterval(() => { current++; setStep(current); if (current >= validationSteps.length) { window.clearInterval(timer); setRunning(false); setCompleted(true); showToast(`Assurance complete · ${scenario.score} trust score`); } }, 420); }
  function showToast(message: string) { setToast(message); window.setTimeout(() => setToast(""), 3200); }
  function openDetail(title: string, eyebrow: string, body: string) { setDrawer({ title, eyebrow, body }); }
  const actionLabel = scenario.decision === "PASS" ? "RELEASE RESPONSE" : scenario.decision === "PASS WITH REVIEW" ? "SEND FOR REVIEW" : "BLOCK RESPONSE";
  const issueTitle = scenario.issues.length === 0 ? "No Issues Identified" : `${scenario.issues.length} ${scenario.issues.length === 1 ? "Issue" : "Issues"} Identified`;

  return <div id="top"><Header/><main>
    <section className="hero"><div><span className="eyebrow"><Icon name="shield" size={15}/> INDEPENDENT AI CONTROL LAYER</span><h1>AI Assurance Gateway</h1><p>Validate AI-generated responses before they reach customers, employees or downstream systems.</p></div><button className="primary hero-action" onClick={runValidation}><Icon name="play"/> RUN VALIDATION</button></section>

    <section className="kpi-grid" aria-label="Assurance performance"><KpiCard label="RESPONSES VALIDATED" value="1,284" secondary="↗ +18% this month" bars={[28,36,31,49,45,63,72,66,88]}/><KpiCard label="AVERAGE TRUST SCORE" value="94.2" secondary="Target > 90" bars={[55,62,58,72,69,78,76,82,86]}/><KpiCard label="RESPONSES BLOCKED" value="37" secondary="2.9% of validations" bars={[72,48,62,38,55,42,35,48,32]}/><KpiCard label="HUMAN REVIEW" value="126" secondary="9.8% of responses" bars={[38,52,45,59,54,66,62,70,65]}/></section>

    <section className="validation-section" id="validation"><div className="section-heading"><span className="eyebrow">LIVE ASSURANCE CASE</span><div className="case-id"><i/> CASE {scenario.caseId}</div></div><div className="scenario-tabs" role="tablist">{scenarios.map(s => <button role="tab" aria-selected={scenario.key === s.key} className={scenario.key === s.key ? "selected" : ""} key={s.key} onClick={() => chooseScenario(s)}>{s.label}</button>)}</div>
      <div className="validation-grid">
        <article className="panel response-panel"><div className="panel-head"><div><span className="eyebrow">INPUT / AI RESPONSE</span><h2>AI Response Under Review</h2></div><span className="response-state">CAPTURED</span></div><div className="question"><span>CUSTOMER QUESTION</span><p>“{scenario.question}”</p></div><div className="ai-answer"><span>AI GENERATED RESPONSE</span><p>“{scenario.response}”</p></div><div className="meta"><div><span>GENERATED BY</span><strong>{scenario.assistant}</strong></div><div><span>MODEL</span><strong>{scenario.model}</strong></div><div><span>GENERATED</span><strong>{scenario.time}</strong></div><div><span>SOURCES</span><strong>{scenario.sourceCount} documents</strong></div></div><button className="assure-button" onClick={runValidation} disabled={running}><AssuranceOrb running={running}/><span><b>{running ? "VALIDATION IN PROGRESS" : "RUN AI ASSURANCE"}</b><small>{running ? validationSteps[Math.min(step, 5)] : completed ? "Assurance complete · run again" : "Independent six-point validation"}</small></span><Icon name="arrow"/></button>{running && <div className="progress-steps" role="status" aria-live="polite">{validationSteps.map((s, i) => <div key={s} className={i < step ? "done" : i === step ? "active" : ""}><i>{i < step ? <Icon name="check" size={12}/> : i + 1}</i><span>{s}</span></div>)}</div>}</article>
        <article className={`panel result-panel ${completed ? "revealed" : "processing"}`}><div className="panel-head"><div><span className="eyebrow">ASSURANCE RESULT</span><h2>Independent Validation</h2></div><span className="timestamp">{completed ? "COMPLETED 10:42:21" : "PROCESSING"}</span></div><Score score={scenario.score} running={running}/><div className="checks">{checks.map((c) => <button key={c.category} onClick={() => openDetail(c.category, "VALIDATION CHECK", c.detail)}><span className="check-mark"><Icon name={c.result === "PASS" ? "check" : "arrow"} size={14}/></span><span><strong>{c.category}</strong><small>{c.detail}</small></span><StatusPill status={c.result}/></button>)}</div></article>
      </div>
    </section>

    <section className={`issues-section ${scenario.issues.length === 0 ? "clear" : ""}`} id="controls"><div className="title-row"><div><span className="eyebrow">CONTROL EXCEPTIONS</span><h2>{issueTitle}</h2></div><span className="issue-count">{scenario.issues.length.toString().padStart(2, "0")}</span></div>{scenario.issues.length === 0 ? <div className="all-clear"><span><Icon name="check"/></span><div><strong>No control exceptions detected</strong><p>All material claims are supported and the response meets applicable policy requirements.</p></div></div> : <div className="issue-list">{scenario.issues.map((issue, index) => <article className="issue" key={issue.title}><div className="issue-number">0{index + 1}</div><div className="issue-content"><div><StatusPill status={issue.severity}/><h3>{issue.title}</h3></div><p>{issue.text}</p><span className="source-ref"><Icon name="doc" size={15}/>{issue.source}</span></div><div className="issue-actions"><button onClick={() => openDetail(issue.title, issue.source, issue.text)}>{issue.sourceAction}</button><button onClick={() => showToast(`${issue.title} flagged for human review`)}>FLAG FOR REVIEW</button></div></article>)}</div>}</section>

    <section className={`recommendation ${scenario.decision.toLowerCase().replaceAll(" ", "-")}`}><div className="recommend-copy"><span className="eyebrow">AI RECOMMENDATION</span><h2>{scenario.decision === "PASS" ? "RELEASE RESPONSE" : scenario.decision}</h2><p>{scenario.recommendation}</p></div><div className="confidence"><span>DECISION CONFIDENCE</span><strong>{scenario.confidence}%</strong><div><i style={{ width: `${scenario.confidence}%` }}/></div></div><div className="recommend-actions"><button className="primary" onClick={() => showToast(scenario.decision === "PASS" ? "Response approved for release and added to the audit trail." : "Response blocked and added to assurance audit trail.")}>{actionLabel}</button><button onClick={() => showToast("Response assigned to the assurance review queue.")}>SEND FOR REVIEW</button><button onClick={() => showToast("Override request captured for authorised approval.")}>APPROVE WITH OVERRIDE</button></div></section>

    <section className="sources-section"><div className="title-row"><div><span className="eyebrow">EVIDENCE LAYER</span><h2>Source Traceability</h2></div><span className="section-note">4 CONTROLLED SOURCES</span></div><div className="source-grid">{sources.map((source, i) => <button className="source-card" key={source.title} onClick={() => openDetail(source.title, "SOURCE EXCERPT", source.excerpt)}><span className="doc-icon"><Icon name="doc"/></span><span><strong>{source.title}</strong><small>{source.meta}</small></span><StatusPill status={source.status}/><Icon name="arrow" size={15}/><b>0{i + 1}</b></button>)}</div></section>

    <section className="pipeline"><div className="title-row"><div><span className="eyebrow">CONTROL ARCHITECTURE</span><h2>Validation Pipeline</h2></div><span className="section-note">END-TO-END · 2.4s</span></div><div className="pipeline-flow">{["AI RESPONSE", "GROUNDING", "FACT CHECK", "COMPLIANCE", "SUITABILITY", "PRIVACY", "DECISION"].map((name, i) => { const result = i === 0 ? "INPUT" : i === 6 ? scenario.decision : scenario.checks[[0,0,1,2,3,4][i] ?? 0]?.result; return <div className="pipeline-stage" key={name}><span>{String(i + 1).padStart(2, "0")}</span><i className={(result || "").toLowerCase().replaceAll(" ", "-")}/><strong>{name}</strong><small>{result}</small>{i < 6 && <b><Icon name="arrow" size={14}/></b>}</div>;})}</div></section>

    <section className="recent" id="audit"><div className="title-row"><div><span className="eyebrow">ASSURANCE ACTIVITY</span><h2>Recent Validations</h2></div><button onClick={() => showToast("Audit trail is up to date.")}>VIEW FULL AUDIT TRAIL <Icon name="arrow" size={15}/></button></div><div className="table-wrap"><table><thead><tr>{["ID", "USE CASE", "BUSINESS AREA", "TRUST SCORE", "ISSUES", "DECISION", "TIME"].map(h => <th key={h}>{h}</th>)}</tr></thead><tbody>{recent.map(row => <tr key={row[0]} tabIndex={0} onClick={() => chooseScenario(scenarios.find(s => s.key === row[7]) || scenarios[0])} onKeyDown={e => (e.key === "Enter" || e.key === " ") && chooseScenario(scenarios.find(s => s.key === row[7]) || scenarios[0])}>{row.slice(0, 7).map((cell, i) => <td key={i}>{i === 0 ? <strong>{cell}</strong> : i === 3 ? <span className="score-cell">{cell}</span> : i === 5 ? <StatusPill status={cell}/> : cell}</td>)}</tr>)}</tbody></table></div></section>
  </main><footer><strong>iLAB</strong><span>Demonstration environment using synthetic data. AI assurance results are illustrative and not intended for production decision-making.</span><i>© 2026 iLab Assurance Systems</i></footer><Drawer item={drawer} onClose={() => setDrawer(null)}/><div className={`toast ${toast ? "show" : ""}`} role="status"><span><Icon name="check"/></span>{toast}</div></div>;
}
