---
name: n8n-workflow-expert
description: Expert skill for designing, building, and debugging n8n automation workflows. Use whenever the user mentions n8n, workflow automation, webhook design, API chaining, AI agent orchestration, triggers and nodes, Function nodes, HTTP Request nodes, error handling, retry logic, rate limiting, or self-hosted automation. Also trigger for "build an automation," "connect [tool A] to [tool B]," "process webhook data," "schedule a workflow," "AI agent in n8n," or "n8n vs Zapier/Make." Do NOT use for Zapier-specific or Make-specific questions - use those platform skills. Covers node architecture, expression language, error handling patterns, AI agent workflows, webhook security, data transformation, and common integration templates.
---

# n8n Workflow Expert

## When to Use This Skill
- Designing a new automation workflow
- Debugging a broken or misfiring workflow
- Building AI agents with Claude/GPT + tools
- Processing webhook data from external services
- Migrating from Zapier/Make to n8n
- Architecting scalable workflow patterns

## Core Architecture

### Trigger Types
- **Webhook**: Receive data from external services (most flexible)
- **Schedule (Cron)**: Run at intervals
- **Polling triggers**: Check for changes in external services (Gmail, Sheets, etc.)
- **Manual**: For testing or on-demand runs
- **Chat trigger**: For conversational agents

### Node Categories (What Actually Matters)
1. **Trigger nodes** (start the workflow)
2. **Action nodes** (API calls, integrations)
3. **Logic nodes** (IF, Switch, Merge, Filter)
4. **Data nodes** (Set, Edit Fields, Code)
5. **AI nodes** (LLM calls, agents, vector stores)

### The n8n Mental Model
Everything flows as **arrays of items**. Each node receives items, processes each one, passes output to next node. Understanding this solves 80% of beginner confusion.

## Expression Language Essentials

### Common Expression Patterns
```
{{ $json.fieldName }}                  // current node's field
{{ $node["Node Name"].json.field }}    // previous node's field
{{ $input.all() }}                     // all input items
{{ $input.first().json.field }}        // first item's field
{{ $now }}                             // current timestamp
{{ $json.fieldName?.toLowerCase() }}   // safe chaining
```

### Data Transformation
Use the **Set** or **Edit Fields** node for simple transforms.
Use the **Code** node (JavaScript) for complex logic.
Use **Function Item** only if you need per-item custom logic.

## Error Handling Patterns

### Pattern 1: Error Trigger Workflow
Create a separate "Error Handler" workflow with **Error Trigger** node. Assign it to critical workflows via workflow settings. Routes errors to Slack/email/logs.

### Pattern 2: Continue on Fail
On nodes that may fail (flaky APIs):
- Enable **"Continue On Fail"** in node settings
- Add IF node checking `$json.error` and branch accordingly
- Log failures to separate output

### Pattern 3: Retry with Backoff
For rate-limited APIs:
- Use **Wait** node with exponential backoff
- Combine with **Loop** and counter variable
- Maximum retries to avoid infinite loops

### Pattern 4: Idempotency Keys
When workflow processes webhooks that could arrive twice:
- Hash incoming payload
- Check against cache (Redis/database/n8n static data)
- Skip duplicate processing

## Webhook Security

### Must-Do Security Steps
- **Authentication**: Use header auth, query param tokens, or HMAC signatures
- **HTTPS only**: Never accept webhooks over HTTP in production
- **Payload validation**: Verify expected fields exist before processing
- **Rate limiting**: At reverse proxy level (Cloudflare, Nginx)
- **Signature verification**: For Stripe, GitHub, etc. - verify HMAC in Code node before proceeding

### Signature Verification Example (Stripe)
```javascript
const crypto = require('crypto');
const payload = JSON.stringify($input.first().json);
const signature = $input.first().headers['stripe-signature'];
const secret = 'whsec_...';

const computed = crypto
  .createHmac('sha256', secret)
  .update(payload)
  .digest('hex');

if (signature !== computed) {
  throw new Error('Invalid signature');
}
return $input.all();
```

## AI Agent Workflows

### Simple AI Chain (No Agent)
Webhook → Claude/OpenAI node → Set (format response) → Response node

### AI Agent with Tools
Use the **AI Agent** node with tool nodes attached:
- Tool nodes are sub-workflows or HTTP Request nodes marked as tools
- Agent decides which tool to call based on input
- Each tool needs clear name + description for agent reasoning

### Memory Types
- **Window Buffer Memory**: Last N messages, simple
- **Summary Memory**: Summarizes older messages
- **Postgres/Redis Memory**: Persistent across sessions, keyed by user ID

### Claude API Pattern (HTTP Request Node)
```
POST https://api.anthropic.com/v1/messages
Headers:
  x-api-key: {{ $credentials.anthropicApi.apiKey }}
  anthropic-version: 2023-06-01
  content-type: application/json
Body:
  {
    "model": "claude-sonnet-4-5",
    "max_tokens": 1024,
    "messages": [...]
  }
```

### Vector Store Integration
For RAG agents:
1. Ingestion workflow: Doc → Chunk → Embed → Pinecone/Qdrant/Supabase
2. Retrieval workflow: Query → Embed → Vector search → Claude with context

## Common Integration Templates

### Gmail → Claude → CRM
Gmail trigger (new email) → Claude (classify + extract) → IF → HubSpot/GHL (create contact)

### Google Sheets → LinkedIn Post
Schedule trigger → Sheets (get row) → Claude (write post) → LinkedIn (post) → Sheets (mark done)

### Stripe Payment → Notion + Slack
Stripe webhook → Code (verify signature) → Notion (add record) → Slack (notify team)

### Form Submission → Qualification → Routing
Typeform webhook → Claude (score lead) → Switch → [Hot: GHL + SMS] / [Warm: CRM] / [Cold: Email nurture]

## Performance & Scaling

### Execution Modes
- **Queue mode**: Workers process executions from queue (production recommended)
- **Regular mode**: Single process (development only)

### Reducing Workflow Runtime
- Batch API calls where possible (e.g., get all rows at once, not one-by-one)
- Use **SplitInBatches** for rate-limited APIs
- Cache results with workflow static data or Redis
- Parallelize independent branches (let n8n execute in parallel)

### Self-Hosting Notes
- **Railway/Render**: Easiest for solo users
- **DigitalOcean/Hetzner**: Cheaper at scale
- **Docker Compose**: Standard setup, use postgres + redis
- **Backups**: Automate database backups; workflow JSON is in database

## Debugging Methodology

1. **Execution History**: Check successful vs failed runs
2. **Pin data** on nodes to test downstream without rerunning upstream
3. **Node-by-node run**: Click play on individual nodes during build
4. **Console logs in Code nodes**: `console.log()` outputs to execution log
5. **Webhook testing**: Use webhook.site to inspect incoming payloads before routing to n8n

## Common Mistakes
- Not handling empty arrays (zero items = workflow exits early without error)
- Forgetting to toggle "Always Output Data" when branches may return nothing
- Using Production webhook URL in test mode (or vice versa)
- Storing credentials in Code nodes instead of using Credentials system
- Not using static data for state persistence - instead hammering external APIs
- Building monolithic workflows - split into sub-workflows for maintainability
- No error handling on critical paths

## Workflow Documentation Standards
For any workflow you ship:
- Sticky notes at top describing purpose, trigger, owner
- Node renaming: "Claude - Classify Email" not "HTTP Request1"
- Grouping related nodes visually
- Tag workflows by category (client, internal, experimental)
