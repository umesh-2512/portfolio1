/* ===================================================================
   Consulting case studies, one entry per project.

   Used by:
     - projects.html    (nothing directly; the preview cards there are
                          plain HTML that link in by ?slug=)
     - case-study.html  (script.js block 6 renders the full page from
                          the entry whose slug matches ?slug=)

   Each entry:
     slug        url key, e.g. case-study.html?slug=gentrack
     title       H1 / card title
     badge       small label; badgeClass "" or "card-badge--learning"
     media       single letter shown in the card image tile
     meta        one-line context under the title
     description SEO meta description for the case study page
     hook        optional bold lead line (may contain <strong> for numbers)
     overview    intro paragraph on the case study page
     tags        skill tags
     sections    [{ heading, body? , paras?: [], list?: [] }]
   =================================================================== */

const CONSULTING_PROJECTS = [
  {
    slug: "fidelio",
    title: "Fidelio",
    badge: "Client project",
    badgeClass: "",
    media: "F",
    meta: "Wine estate, Blenheim",
    description:
      "IT consulting for Fidelio, a Blenheim wine estate. Advisory on the booking flow, digital presence, and turning more site visits into confirmed tasting bookings.",
    hook: "",
    overview:
      "Fidelio is a family wine estate in Blenheim. The owner wanted more visitors to book a tasting rather than just browse. I paired the build with an advisory role, looking at how the site, the booking step, and the wider digital presence worked together.",
    tags: [
      "Stakeholder Advisory",
      "Digital Strategy",
      "UX Consulting for SMBs",
      "Booking Flow Design",
      "Conversion Optimization",
    ],
    sections: [
      {
        heading: "What I focused on",
        list: [
          "Booking flow. Simplified the path from landing on the site to a confirmed tasting, cutting steps and making the call to action obvious on every page.",
          "Digital presence. Practical recommendations for a small hospitality and wine business: what to keep updated, where to be listed, and how to present the estate consistently.",
          "Conversion. Small process changes aimed at lifting the share of visits that end in a booking, and a simple way to keep an eye on that number.",
        ],
      },
      {
        heading: "Consulting decisions",
        list: [
          "Partnered with the estate owner to audit the outdated website against key KPIs, including bookings, mobile usability, and time-to-book.",
          "Identified key issues: unclear booking flow, no real-time availability, and poor mobile optimization.",
          "Found mobile traffic at ~70%, yet converting at less than half the desktop rate.",
          "Identified 30-40% booking drop-off due to slow load times and a lengthy booking form.",
          "Helped drive a full digital transformation to a fast, modern, conversion-focused platform.",
          "Simplified the booking journey from multiple steps to a single-page form.",
          "Improved page load time to under 2 seconds and significantly increased booking completion.",
          "Aligned the redesign with the goal of maximizing tasting reservations without increasing operational workload.",
          "Combined technical delivery with strategic input across UX, positioning, and digital growth.",
        ],
      },
      {
        heading: "Outcome",
        body: "The estate moved from taking bookings by phone and email to a direct online path, with a clearer sense of which changes move the booking rate.",
      },
    ],
  },

  {
    slug: "gentrack",
    title: "Gentrack, Business Process Redesign (Knowledge Management)",
    badge: "Case study",
    badgeClass: "card-badge--learning",
    media: "G",
    logo: "img/Gentrack-logo1.png",
    meta: "Business analysis case study",
    description:
      "Business analysis case study on Gentrack's knowledge base: root cause analysis, a BPMN redesign in SAP Signavio, KPI targets, and a working SAP Build App prototype.",
    hook: "Gentrack has over <strong>10,000</strong> knowledge articles. Their engineers still can't find the right one <strong>more than half the time</strong>.",
    overview:
      "Ran a full business analysis case study on Gentrack Group Limited (NZX: GTK), a New Zealand software company serving <strong>60+</strong> utilities and <strong>140+</strong> airports worldwide, to diagnose why their internal knowledge base was draining time, trust, and delivery speed.",
    tags: [
      "Business Process Redesign",
      "Root Cause Analysis",
      "BPMN 2.0",
      "SAP Signavio",
      "SAP Build App",
      "KPI Design",
      "Stakeholder Interviews",
      "Change Management",
    ],
    sections: [
      {
        heading: "The problem",
        body: "Gentrack's engineers support billing-critical platforms (g2.0, Veovo) from a knowledge base scattered across mismatched folders, formats, and versions: PDFs, Word docs, and recordings with no real structure. Engineers spent <strong>15 to 20 minutes</strong> per search on average, escalations to colleagues and support tickets were constant, and outdated content was quietly creating billing risk in a heavily regulated industry.",
      },
      {
        heading: "Approach",
        list: [
          "Built an issue tree to isolate four root causes: document organization, format inconsistency, search inefficiency, and content duplication.",
          "Used the McKinsey 7S framework to confirm this was an internal alignment problem (systems, structure, skills), not a market or strategy issue.",
          "Set SMART KPIs against measured baselines: <strong>~40%</strong> search success rate, <strong>~50 to 55%</strong> top-3 search relevance, <strong>~25%</strong> of articles outdated or duplicated.",
          "Validated four hypotheses through a structured interview guide before designing anything.",
          "Mapped current and future-state processes in BPMN 2.0 using SAP Signavio, then designed a new workflow around an Integrated Knowledge Hub: centralized access, mandatory templates, metadata-driven search, automated version control, and a governance dashboard tied to KPIs.",
        ],
      },
      {
        heading: "Targets vs results",
        paras: [
          "<strong>Target.</strong> Search success rate <strong>40% to 80%</strong>, top-3 relevance to <strong>85%</strong>, duplicate or outdated content below <strong>5%</strong>, within a 6-month rollout.",
          "<strong>Pilot, 2 sprint cycles.</strong> Search time dropped <strong>~70%</strong>, from 15 to 20 minutes down to under 5. Duplicate uploads down <strong>30%</strong>. User satisfaction at <strong>85%</strong>.",
          "<strong>Post-rollout, first year.</strong> Search success hit <strong>82%</strong>. Duplicate content fell to <strong>4.8%</strong>.",
        ],
      },
      {
        heading: "Prototype",
        body: "Built a working prototype in SAP Build App, with a login flow, a search dashboard, and an upload workflow that enforces metadata fields and syncs to the backend in real time. Clickable, not just slides.",
      },
      {
        heading: "Key takeaway",
        body: "Knowledge management problems rarely break because of one obvious thing. Storage, format, search, and content lifecycle degrade on their own timelines until no single fix moves the needle. Effective projects map the whole system first, then build one integrated solution instead of disconnected patches.",
      },
    ],
  },

];
