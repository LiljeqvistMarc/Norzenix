<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <div class="case-study">
    <NavBar />

    <!-- 1. HEADER -->
    <header class="header">
      <div class="container">
        <RouterLink to="/" class="back-link">&larr; Back to Home</RouterLink>
        <h1 class="title">Property Management<br>Ecosystem</h1>
        <div class="meta-grid">
          <div class="meta-item">
            <span class="label">Role</span>
            <span class="value">Frontend Lead / Full Stack</span>
          </div>
          <div class="meta-item">
            <span class="label">Timeline</span>
            <span class="value">3+ Years (Ongoing)</span>
          </div>
          <div class="meta-item">
            <span class="label">Stack</span>
            <span class="value">Vue, Spring Boot, MySQL, Java</span>
          </div>
        </div>
      </div>
    </header>

    <!-- 2. THE JOURNEY -->
    <section class="content-section">
      <div class="container two-col">
        <div class="col-left">
          <h2>The Journey</h2>
          <p>
            I joined a tight-knit team running a property management system that had been in operation for a few years.
            It was a classic "startup" environment—fast-paced, rough around the edges, and driven by constant
            feature requests from our users.
          </p>
          <p class="mt-4">
            My role was to bring stability and scalability to the platform. I helped maintain critical integrations
            like <strong>Business Dynamics 365</strong>, ensuring data consistency while focusing heavily on
            modernizing the user experience.
          </p>
        </div>
        <div class="col-right">
          <h2>The Evolution</h2>
          <p>
            Over 3 years, we professionalized the entire stack. We moved from ad-hoc features to robust systems
            handling regulations, consumption reports, and financial data inheritance across complex hierarchies
            (Company &rarr; Property &rarr; Owner &rarr; Unit).
          </p>
          <p class="mt-4">
            In 2023, the platform was acquired by a mid-sized company. We now serve some of Denmark's
            largest real estate chains, and I am currently helping lead the
            technical redesign for this new chapter.
          </p>
        </div>
      </div>
    </section>

    <!-- 3. REAL SYSTEM INTERFACE (CSS RECREATION) -->
    <section class="gallery-section">
      <div class="container">
        <h2>Data Density & Operations</h2>
        <p class="subtitle">
          Managing the complexity of real estate requires dense, functional interfaces.
        </p>

        <div class="browser-frame">
          <div class="browser-header">
            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
            <span class="address-bar">admin.system.dk/units/overview</span>
          </div>

          <!-- CSS DASHBOARD MOCKUP -->
          <div class="browser-content">
            <div class="table-toolbar">
              <div class="table-title">Units/Residents</div>
              <div class="search-input">Search...</div>
            </div>

            <div class="table-row header">
              <div class="col small">Unit</div>
              <div class="col large">Address</div>
              <div class="col medium">Type</div>
              <div class="col medium">Resident</div>
              <div class="col medium">Takeover</div>
              <div class="col small">m²</div>
              <div class="col medium">Rent/Year</div>
              <div class="col status">Status</div>
            </div>

            <div class="table-row">
              <div class="col small">001-001</div>
              <div class="col large">Reg gade 2, 2000</div>
              <div class="col medium">Other</div>
              <div class="col medium text-muted">—</div>
              <div class="col medium">01/01/2020</div>
              <div class="col small">100</div>
              <div class="col medium">120,000.00</div>
              <div class="col status"><span class="icon-house red"></span></div>
            </div>

            <div class="table-row">
              <div class="col small">001-002</div>
              <div class="col large">Reg gade 4, 2000</div>
              <div class="col medium">Other</div>
              <div class="col medium">Lejer A2</div>
              <div class="col medium">01/01/2020</div>
              <div class="col small">100</div>
              <div class="col medium">120,000.00</div>
              <div class="col status"><span class="icon-house yellow"></span></div>
            </div>

            <div class="table-row">
              <div class="col small">001-003</div>
              <div class="col large">Reg gade 6, 2000</div>
              <div class="col medium">Other</div>
              <div class="col medium">Lejer A3.1</div>
              <div class="col medium">12/01/2023</div>
              <div class="col small">100</div>
              <div class="col medium">120,000.00</div>
              <div class="col status"><span class="icon-house green"></span></div>
            </div>

            <div class="table-row">
              <div class="col small">001-004</div>
              <div class="col large">Reg gade 8, 2000</div>
              <div class="col medium">Other</div>
              <div class="col medium">Lejer A4.1</div>
              <div class="col medium">08/01/2023</div>
              <div class="col small">100</div>
              <div class="col medium">120,000.00</div>
              <div class="col status"><span class="icon-house green"></span></div>
            </div>

            <div class="table-row">
              <div class="col small">001-005</div>
              <div class="col large">Reg gade 10, 2000</div>
              <div class="col medium">Other</div>
              <div class="col medium">Lejer A5</div>
              <div class="col medium">06/01/2022</div>
              <div class="col small">100</div>
              <div class="col medium">120,000.00</div>
              <div class="col status"><span class="icon-house green"></span></div>
            </div>
          </div>
        </div>
        <p class="caption">
          One of the many data-heavy views I optimized. Shown here: The Unit/Resident overview
          tracking status, financial metrics, and occupancy.
        </p>
      </div>
    </section>

    <!-- 4. TECHNICAL HIGHLIGHTS -->

    <!-- A. Mass Notification -->
    <section class="tech-section">
      <div class="container">
        <div class="section-header">
          <span class="tag-highlight">Backend Engineering</span>
          <h2>Mass Notification Engine</h2>
        </div>

        <div class="two-col tech-details">
          <div class="text-col">
            <h3>The Challenge</h3>
            <p>
              Property managers needed to send bulk communications (rent adjustments, regulations) to thousands of tenants.
              The existing system was manual, error-prone, and couldn't handle complex attachments like merging a
              generic cover letter with specific tenant contracts.
            </p>
            <h3>The Solution</h3>
            <p>
              I architected a robust <strong>Mass Notification Service</strong> using Java Spring Boot.
            </p>
            <ul class="tech-list">
              <li><strong>PDF Merging:</strong> Implemented `PDFMergerUtility` to dynamically stitch together cover letters and individual tenant documents into a single file stream.</li>
              <li><strong>Async Scheduler:</strong> Built a background job system (`@Async`, `CompletableFuture`) to process heavy batches without blocking the UI.</li>
              <li><strong>Smart Grouping:</strong> Logic to group files by tenancy, preventing duplicate communication for multi-tenant units.</li>
            </ul>
          </div>
          <div class="code-col">
            <div class="code-block">
<pre><code class="language-java">// Merging logic handling streams and PDF Box utility
public FileResource generateMergedPdf(MassNotificationForm form, User user) {
    PDFMergerUtility pdfMerger = new PDFMergerUtility();
    // ... Grouping logic ...

    try (ByteArrayOutputStream mergedOutput = new ByteArrayOutputStream()) {
        pdfMerger.setDestinationStream(mergedOutput);

        for (Map.Entry&lt;String, Set&lt;SentFiles&gt;&gt; entry : groupedTenancies) {
             // Dynamically generate cover letter for this specific tenancy
             this.createTenancyCoverLetter(form, user, tenancyId, ...)
                 .ifPresent(bytes -> pdfMerger.addSource(new ByteArrayInputStream(bytes)));

             // Add specific attachments
             for (MassNotificationSentFiles sf : entry.getValue()) {
                 pdfMerger.addSource(getInputStream(sf.getFileResource()));
             }
        }
        pdfMerger.mergeDocuments(MemoryUsageSetting.setupTempFileOnly());
        return fileResourceManager.create(mergedResource, mergedOutput::writeTo);
    }
}</code></pre>
            </div>
            <p class="code-caption">Snippet: The core PDF merging logic for mass distribution.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- B. Rent Prospect Engine -->
    <section class="tech-section alt-bg">
      <div class="container">
        <div class="section-header">
          <span class="tag-highlight">Complex Business Logic</span>
          <h2>The Rent Prospect Engine</h2>
        </div>

        <div class="two-col tech-details reverse">
          <div class="text-col">
            <h3>The Challenge</h3>
            <p>
              Building a <strong>Rent Prospect & Budget Balance</strong> list was one of the hardest logical challenges.
              It required calculating future projections based on historical expense data, with support for yearly and monthly views.
            </p>
            <h3>The Logic</h3>
            <ul class="tech-list">
              <li>
                <strong>Effective Date Calculation:</strong> The system had to calculate rent pro-rata. If a rent change occurred mid-month, the engine splits the calculation based on the specific day.
              </li>
              <li>
                <strong>Historical Lookups:</strong> Fetching `ExpenseHistoryEntity` to ensure past reports remain accurate even if current prices change.
              </li>
              <li>
                <strong>Optimization:</strong> Using Java Streams to filter out 'New' tenancies and aggregate distinct Unit IDs before hitting the heavy database queries.
              </li>
            </ul>
          </div>
          <div class="code-col">
            <div class="code-block">
<pre><code class="language-java">// Calculating effective rent with historical fallback
private BigDecimal[] computeMonthlyRentEffective(
    List&lt;ExpenseEntity&gt; rentExpenses,
    Map&lt;UUID, List&lt;ExpenseHistoryEntity&gt;&gt; historyMap,
    LocalDate effectiveStart
) {
    BigDecimal[] monthlyTotals = new BigDecimal[12];

    for (int i = 0; i < 12; i++) {
        LocalDate dayToTest = effectiveStart.plusMonths(i);
        // Check valid start/end dates
        // If date is before changeDateTime, look up historyMap
        // Accumulate total for the month
    }
    return monthlyTotals;
}</code></pre>
            </div>
            <p class="code-caption">Snippet: Effective rent calculation with history awareness.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- C. Frontend Logic -->
    <section class="tech-section">
      <div class="container">
        <div class="section-header">
          <span class="tag-highlight">Frontend State Machine</span>
          <h2>The Tenancy Lifecycle</h2>
        </div>

        <div class="two-col tech-details">
          <div class="text-col">
            <h3>The Challenge</h3>
            <p>
              Real estate contracts have a strict legal lifecycle. You can't just "delete" a tenant; they move from
              <strong>New &rarr; Contract Sent &rarr; Pending &rarr; Active &rarr; Terminated &rarr; Closed</strong>.
            </p>
            <h3>The Solution</h3>
            <p>
              I built a comprehensive <strong>Vue.js State Machine</strong> to manage this flow. It handles complex validation rules for each stage:
            </p>
            <ul class="tech-list">
              <li><strong>Pre-Termination Logic:</strong> Handling "Unconfirmed Terminations" where a tenant signals intent but hasn't signed.</li>
              <li><strong>Guard Rails:</strong> Preventing invalid state jumps (e.g., ensuring `rentStartDate` exists before moving to Active).</li>
              <li><strong>User Feedback:</strong> Integrated `vuelidate` for real-time validation on critical dates (Move In, Move Out, Termination).</li>
            </ul>
          </div>
          <div class="code-col">
            <div class="code-block">
<pre><code class="language-javascript">// Vue component handling state transitions
// and "Pre-Termination" logic
if (tenancy.status === 'PENDING' && tenancy.inPreTermination) {
   // Enable logic for unconfirmed terminations
   this.tenancy.unconfirmedTerminationIncluded = true;
}

// Handling the complex Eviction flow
completeEviction(evictionNote) {
   this.tenancy.evicted = true;
   this.tenancy.moveOutDate = new Date();

   // Async API call to update status...
   tenancyService.upDateStatusOfTenancy(this.tenancy, false)
     .then(result => this.callback(result.data));
}</code></pre>
            </div>
            <p class="code-caption">Snippet: Handling state transitions in the Tenancy Modal.</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2025 Norzenix. Built with Vue 3.</p>
    </footer>

  </div>
</template>

<style scoped>
/* Base Layout */
.case-study {
  background-color: #0F1C24;
  min-height: 100vh;
  color: #F0F4F8;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.mt-4 { margin-top: 2rem; }

/* Header */
.header {
  padding-top: 140px;
  padding-bottom: 6rem;
  background: radial-gradient(circle at top right, rgba(72, 137, 152, 0.15), transparent 40%),
  linear-gradient(to bottom, #0F1C24, #13232d);
}

.back-link {
  color: var(--brand-sage);
  font-size: 0.9rem;
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-block;
  font-weight: 600;
  transition: color 0.2s;
}
.back-link:hover { color: var(--brand-gold); }

.title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 3rem;
  font-weight: 800;
  background: linear-gradient(to right, #fff, #A0AFA0);
  -webkit-background-clip: text;
  color: transparent;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
}

.label {
  display: block;
  font-size: 0.75rem;
  color: var(--brand-sage);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.value {
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
}

/* Content Section */
.content-section {
  padding: 6rem 0;
  background-color: #0F1C24;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
}

h2 {
  color: var(--brand-gold);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

p {
  line-height: 1.7;
  opacity: 0.9;
  color: #d1d5db;
  font-size: 1.05rem;
}

/* Gallery Section */
.gallery-section {
  padding: 6rem 0;
  background-color: #0B151B;
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.subtitle {
  margin-bottom: 3rem;
  color: var(--brand-sage);
  font-size: 1.2rem;
  max-width: 600px;
}

.browser-frame {
  background: #1A2E3B;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.05);
}

.browser-header {
  background: #0F1C24;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.dot { width: 12px; height: 12px; border-radius: 50%; margin-right: 8px; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.address-bar {
  margin-left: 20px;
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.4);
  padding: 4px 15px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: monospace;
  width: 400px;
}

/* CSS TABLE STYLES (Replica of your real screenshot but Dark Mode) */
.browser-content {
  padding: 20px;
  background: #0B1216;
  min-height: 400px;
  font-family: 'Inter', sans-serif;
}

.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.table-title {
  font-size: 1rem;
  font-weight: 700;
  color: white;
}

.search-input {
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.5);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  width: 200px;
}

.table-row {
  display: grid;
  grid-template-columns: 0.8fr 2fr 0.8fr 1.5fr 1fr 0.5fr 1fr 0.5fr;
  padding: 12px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  font-size: 0.8rem;
  align-items: center;
  color: #a9b7c6;
}

.table-row:hover {
  background: rgba(255,255,255,0.02);
}

.table-row.header {
  background: rgba(255,255,255,0.05);
  font-weight: 700;
  color: var(--brand-sage);
  border-radius: 4px;
  margin-bottom: 5px;
}

.col { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-right: 10px; }
.text-muted { opacity: 0.3; }

/* Icon Shapes */
.icon-house {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: currentColor;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.red { background: #FF5F56; color: #FF5F56; }
.yellow { background: #FFBD2E; color: #FFBD2E; }
.green { background: #27C93F; color: #27C93F; }


.caption {
  margin-top: 1.5rem;
  font-size: 0.95rem;
  text-align: center;
  color: var(--brand-sage);
  font-style: italic;
  opacity: 0.8;
}

/* Tech Section */
.tech-section {
  padding: 8rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.alt-bg {
  background-color: #0d1820; /* Slightly different shade */
}

.section-header {
  margin-bottom: 4rem;
}

.tag-highlight {
  color: var(--brand-teal);
  font-family: monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

.tech-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.reverse {
  direction: rtl; /* Quick hack to swap columns visually */
}
.reverse > * {
  direction: ltr; /* Reset text direction */
}

.text-col h3 {
  font-size: 1.4rem;
  color: white;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.text-col h3:first-child { margin-top: 0; }

.tech-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.tech-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 1rem;
  color: #d1d5db;
}

.tech-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--brand-gold);
}

/* Code Blocks */
.code-block {
  background: #080f13;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: #a9b7c6;
  overflow-x: auto;
}

.code-caption {
  text-align: center;
  font-size: 0.85rem;
  color: var(--brand-sage);
  margin-top: 1rem;
  opacity: 0.7;
}

/* Current Work */
.current-work-section {
  padding: 8rem 0;
  background: radial-gradient(circle at center, rgba(217, 165, 91, 0.05), transparent 60%);
}

.centered-text {
  text-align: center;
  max-width: 800px;
}

.large-p {
  font-size: 1.4rem;
  line-height: 1.6;
  color: #fff;
}

.footer {
  padding: 4rem 0;
  text-align: center;
  color: rgba(255,255,255,0.3);
  font-size: 0.8rem;
  border-top: 1px solid rgba(255,255,255,0.05);
}

@media (max-width: 900px) {
  .two-col, .tech-details { grid-template-columns: 1fr; gap: 3rem; }
  .reverse { direction: ltr; }
  .title { font-size: 3rem; }
  .header { padding-top: 100px; }

  /* Scrollable table on mobile */
  .browser-content { overflow-x: auto; }
  .table-row { min-width: 700px; }
}
</style>