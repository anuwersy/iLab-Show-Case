export type Probability = "High" | "Medium" | "Medium / Low" | "Low";
export type EntityType = "client" | "opportunity" | "capability" | "asset" | "roadmap" | "collaboration";

export const clients = [
  { id: "hsbc", name: "HSBC", industry: "Banking", geography: "Hong Kong", relationship: "Active relationship", focus: "Finance Reporting 2.0", maturityStatus: "Not Assessed", maturity: {} },
  { id: "chubb", name: "CHUBB", industry: "Insurance", geography: "Hong Kong", relationship: "Proposal follow-up", focus: "Actuarial & FP&A", maturityStatus: "Not Assessed", maturity: {} },
  { id: "prudential", name: "Prudential", industry: "Insurance", geography: "Hong Kong / APAC", relationship: "Multiple active threads", focus: "Oracle AI + CFO companion", maturityStatus: "Not Assessed", maturity: {} },
  { id: "fwd", name: "FWD", industry: "Insurance", geography: "Hong Kong / APAC", relationship: "Delivery collaboration", focus: "Actuarial AI", maturityStatus: "Not Assessed", maturity: {} },
  { id: "sun-life", name: "Sun Life", industry: "Insurance", geography: "Hong Kong", relationship: "Workshop and demo", focus: "Reinsurance Treaty", maturityStatus: "Not Assessed", maturity: {} },
  { id: "as-watson", name: "AS Watson", industry: "Consumer / Retail", geography: "Hong Kong / APAC", relationship: "Early discussions", focus: "AI adoption and workforce", maturityStatus: "Not Assessed", maturity: {} },
  { id: "hkt", name: "HKT", industry: "Technology / Telecoms", geography: "Hong Kong", relationship: "Early discussions", focus: "AI product delivery", maturityStatus: "Not Assessed", maturity: {} },
  { id: "hkjc", name: "HKJC", industry: "Sports / Entertainment", geography: "Hong Kong", relationship: "Early discussions", focus: "AI product delivery", maturityStatus: "Not Assessed", maturity: {} },
] as const;

export const opportunities = [
  { id: "hsbc-finance", clientId: "hsbc", name: "Finance Reporting 2.0", currentPosition: "Dashboard with AI commentaries / AI solution for Excel understanding", probability: "High" as Probability, status: "Active", capabilityIds: ["rapid-build"], assetIds: ["insightsiq"], owner: "[Assign owner]", nextAction: "Confirm next prototype milestone" },
  { id: "chubb-actuarial", clientId: "chubb", name: "AI for Actuarial & FP&A", currentPosition: "Proposal sent – follow-up required", probability: "Medium / Low" as Probability, status: "Follow-up", capabilityIds: ["actuarial-fpa"], assetIds: ["ai-reporting"], owner: "[Assign owner]", nextAction: "Schedule proposal follow-up" },
  { id: "prudential-ar", clientId: "prudential", name: "AI in A&R", currentPosition: "2 use cases delivered", probability: "High" as Probability, status: "Delivered", capabilityIds: ["rapid-build"], assetIds: ["deliveryiq"], owner: "[Assign owner]", nextAction: "Capture reusable case study" },
  { id: "prudential-oracle", clientId: "prudential", name: "Oracle AI", currentPosition: "VCC proposal", probability: "High" as Probability, status: "Active", capabilityIds: ["oracle-squad"], assetIds: ["talentiq"], owner: "[Assign owner]", nextAction: "Align proposal scope" },
  { id: "prudential-fpa", clientId: "prudential", name: "AI in FP&A and CFO companion", currentPosition: "PHKL expressed interest in building both use cases", probability: "High" as Probability, status: "Discovery", capabilityIds: ["actuarial-fpa"], assetIds: ["insightsiq"], owner: "[Assign owner]", nextAction: "Define discovery workshop" },
  { id: "prudential-governance", clientId: "prudential", name: "AI Adoption & AI Governance", currentPosition: "Supporting change team technical AI delivery trainings", probability: "Medium" as Probability, status: "Active", capabilityIds: ["governance"], assetIds: ["trusted-ai"], owner: "[Assign owner]", nextAction: "Agree training backlog" },
  { id: "fwd-actuarial", clientId: "fwd", name: "AI in Actuarial", currentPosition: "Supporting TRNF / ACT team with AI", probability: "Medium / Low" as Probability, status: "Active", capabilityIds: ["actuarial-fpa"], assetIds: ["reintreatyiq"], owner: "[Assign owner]", nextAction: "Confirm use case shortlist" },
  { id: "fwd-compliance", clientId: "fwd", name: "Compliance Dashboard", currentPosition: "Collaboration with Trusted AI for embedded dashboard", probability: "Low" as Probability, status: "Exploring", capabilityIds: ["governance"], assetIds: ["ai-reporting"], owner: "[Assign owner]", nextAction: "Validate data access" },
  { id: "sun-life-reinsurance", clientId: "sun-life", name: "Reinsurance Treaty", currentPosition: "Workshop and demo · New asset built", probability: "Low" as Probability, status: "Demo", capabilityIds: ["rapid-build"], assetIds: ["reintreatyiq"], owner: "[Assign owner]", nextAction: "Plan next demo" },
  { id: "as-watson-discussions", clientId: "as-watson", name: "AI adoption and workforce", currentPosition: "Early discussion around AI adoption and workforce enablement", probability: "Medium / Low" as Probability, status: "Discovery", capabilityIds: ["governance"], assetIds: ["talentiq"], owner: "[Assign owner]", nextAction: "Identify priority workforce use cases" },
  { id: "hkt-product", clientId: "hkt", name: "AI product delivery", currentPosition: "Early discussion around product delivery opportunities", probability: "Medium / Low" as Probability, status: "Discovery", capabilityIds: ["rapid-build"], assetIds: ["deliveryiq"], owner: "[Assign owner]", nextAction: "Map product opportunity" },
  { id: "hkjc-product", clientId: "hkjc", name: "AI product delivery", currentPosition: "Early discussion around product delivery opportunities", probability: "Medium / Low" as Probability, status: "Discovery", capabilityIds: ["rapid-build"], assetIds: ["insightsiq"], owner: "[Assign owner]", nextAction: "Confirm business sponsor" },
  { id: "prudential-training", clientId: "prudential", name: "Prudential Training", currentPosition: "Supporting change team technical AI delivery trainings", probability: "Medium" as Probability, status: "Active", capabilityIds: ["governance"], assetIds: ["trusted-ai", "talentiq"], owner: "[Assign owner]", nextAction: "Agree training backlog" },
];

export const capabilities = [
  { id: "rapid-build", name: "Rapid POC Build Squad", description: "Specialists who turn priority use cases into client-ready demonstrations and repeatable delivery assets.", status: "Developing", owner: "[Assign owner]", maturity: "[Set maturity]", gap: "Protected delivery capacity", action: "Prioritise 2–3 high-value POCs" },
  { id: "oracle-squad", name: "Oracle AI Squad", description: "Delivery capability for Oracle AI propositions and client solution shaping.", status: "Developing", owner: "[Assign owner]", maturity: "[Set maturity]", gap: "Reusable implementation pattern", action: "Build Oracle AI capability" },
  { id: "governance", name: "AI Governance", description: "Governance, guardrails and adoption support to help clients use AI with confidence.", status: "At Risk", owner: "[Assign owner]", maturity: "[Set maturity]", gap: "Scalable local POVs", action: "Package Trusted AI and governance POVs" },
  { id: "actuarial-fpa", name: "AI Data Readiness / FP&A", description: "Domain-led readiness and use-case delivery for actuarial, finance and FP&A teams.", status: "Developing", owner: "[Assign owner]", maturity: "[Set maturity]", gap: "Data access and SME capacity", action: "Secure specialist support" },
];

export const assets = [
  { id: "deliveryiq", name: "DeliveryIQ", category: "Internal asset", status: "In development", maturity: "[Set maturity]", presentedToClients: true, description: "Internal delivery intelligence and reusable delivery patterns.", relatedClientIds: ["prudential"] },
  { id: "talentiq", name: "TalentIQ", category: "Internal asset", status: "In development", maturity: "[Set maturity]", presentedToClients: true, description: "Talent and workforce intelligence for AI adoption and deployment.", relatedClientIds: ["prudential", "others"] },
  { id: "proposaliq", name: "ProposalIQ", category: "Internal asset", status: "In development", maturity: "[Set maturity]", presentedToClients: false, description: "Proposal support and reusable proposition components.", relatedClientIds: [] },
  { id: "insightsiq", name: "InsightsIQ", category: "Internal asset", status: "In development", maturity: "[Set maturity]", presentedToClients: true, description: "Insight generation and AI commentary for reporting workflows.", relatedClientIds: ["hsbc", "prudential"] },
  { id: "procureiq", name: "ProcureIQ", category: "Internal asset", status: "Concept", maturity: "[Set maturity]", presentedToClients: false, description: "Procurement intelligence concept for future development.", relatedClientIds: [] },
  { id: "reintreatyiq", name: "ReinTreatyIQ", category: "Internal asset", status: "Demo ready", maturity: "[Set maturity]", presentedToClients: true, description: "Reinsurance treaty analysis and demonstration asset.", relatedClientIds: ["fwd", "sun-life"] },
  { id: "ai-reporting", name: "AI Reporting Control", category: "Internal asset", status: "Demo ready", maturity: "[Set maturity]", presentedToClients: true, description: "AI-enabled reporting controls and commentary workflows.", relatedClientIds: ["chubb", "fwd"] },
  { id: "trusted-ai", name: "Trusted AI", category: "Global asset", status: "Available", maturity: "Global", presentedToClients: true, description: "Global methodology, frameworks and accelerators for trusted AI.", relatedClientIds: ["prudential", "fwd"] },
];

export const roadmap = [
  { id: "market-playbook", stream: "Market", period: "2026 Q3", name: "AI Transformation Playbook", status: "Planned", progress: 0 },
  { id: "market-oracle", stream: "Market", period: "2026 Q4", name: "Build Oracle AI Capability", status: "Planned", progress: 0 },
  { id: "market-demos", stream: "Market", period: "2026 Q4", name: "Demos Portfolio", status: "Planned", progress: 0 },
  { id: "market-outreach", stream: "Market", period: "2026 Q4", name: "Market Outreach", status: "Planned", progress: 0 },
  { id: "market-propositions", stream: "Market", period: "2027 H1", name: "Flagship Propositions", status: "Planned", progress: 0 },
  { id: "tech-backlog", stream: "Technology", period: "2026 Q3", name: "Backlog list", status: "Planned", progress: 0 },
  { id: "tech-marketplace", stream: "Technology", period: "2026 Q4", name: "Build iLab Demo Marketplace", status: "Planned", progress: 0 },
  { id: "tech-factory", stream: "Technology", period: "2026 Q4", name: "Rapid Build Factory", status: "Planned", progress: 0 },
  { id: "tech-collaboration", stream: "Technology", period: "2026 Q4", name: "Extend collaboration with other teams", status: "Planned", progress: 0 },
  { id: "tech-global", stream: "Technology", period: "2027 H1", name: "Extend collaboration with Global Teams with focus on ASPAC", status: "Planned", progress: 0 },
  { id: "people-training", stream: "Our People", period: "2026 Q3", name: "Team AI Training", status: "Planned", progress: 0 },
  { id: "people-leadership", stream: "Our People", period: "2026 Q4", name: "Leadership Training", status: "Planned", progress: 0 },
  { id: "people-delivery", stream: "Our People", period: "2026 Q4", name: "Expand AI Delivery Capability", status: "Planned", progress: 0 },
  { id: "people-additional", stream: "Our People", period: "2027 H1", name: "Additional AI trainings", status: "Planned", progress: 0 },
];

export const collaborations = [
  { id: "insurance-community", group: "GLOBAL CADENCES", name: "AI Insurance Community", relationship: "Sector knowledge exchange", contribution: "Insurance use cases and SMEs", markets: "Global" },
  { id: "data-community", group: "GLOBAL CADENCES", name: "AI & Data Community", relationship: "Methods and capability sharing", contribution: "Data readiness and delivery patterns", markets: "Global" },
  { id: "global-coes", group: "GLOBAL CADENCES", name: "Global COEs", relationship: "Specialist support", contribution: "Global assets and expertise", markets: "Global" },
  { id: "regional-firms", group: "ASPAC CADENCES", name: "Regional Member Firms", relationship: "Cross-market collaboration", contribution: "Reusable propositions", markets: "ASPAC" },
  { id: "china", group: "ASPAC CADENCES", name: "China", relationship: "Market collaboration", contribution: "KiBox / China VM access", markets: "China" },
  { id: "tech-ai", group: "INTERNAL", name: "Tech Team / AI Squad", relationship: "Build and enablement", contribution: "Technical expertise and solution deployment", markets: "Hong Kong" },
  { id: "da-team", group: "INTERNAL", name: "DA Team / sharing resources", relationship: "Resource sharing", contribution: "Data and delivery capacity", markets: "Hong Kong" },
];

export const readiness = [
  { id: "access", name: "Tool & Solution Access", status: "Critical", description: "Workbench, KiBox and China VM access is fragmented.", need: "Approved development environment and tool access." },
  { id: "budget", name: "Budget", status: "At Risk", description: "Sandbox tooling, infrastructure and API usage require funding.", need: "Configurable approved iLab sandbox budget." },
  { id: "time", name: "Time Allocation", status: "Critical", description: "Resources are fully allocated to projects; lab development is best-effort.", need: "Protected time and a quarterly roadmap." },
  { id: "expertise", name: "Technical Expertise", status: "Developing", description: "Local or global SMEs and deployment expertise are needed.", need: "At least one dedicated AI developer." },
  { id: "leadership", name: "Leadership Support", status: "At Risk", description: "Sponsorship and decision rhythm need to be established.", need: "Executive sponsor and monthly steering." },
  { id: "assets", name: "Reusable Assets", status: "Developing", description: "POCs need owners, quality standards and product discipline.", need: "Asset owners, product manager and development squad." },
  { id: "market", name: "Route to Market", status: "Developing", description: "Priority accounts and client-ready material need activation.", need: "Named account owners and coordinated pipeline." },
];

export const povs = ["AI in Finance", "AI Governance", "AI Strategy", "Actuarial & FP&A with AI", "AI Deployment / Scale Plan"];
export const technologies = ["Workbench Access", "Kibox", "Copilot Roll Out"];
