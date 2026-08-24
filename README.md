# iLab AI Assurance Gateway

An interactive proof of concept for independently validating enterprise AI responses before release. The experience demonstrates grounding, factual accuracy, compliance, suitability, privacy, hallucination risk, human review and audit decisions using synthetic data.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

The application uses Next.js, React, TypeScript and Tailwind CSS and is configured for direct deployment to Vercel. It has no database, authentication or external API dependencies.
