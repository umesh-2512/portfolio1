/* ===================================================================
   Blog posts, one entry per post. LinkedIn-style: a hook line, a few
   short paragraphs, optionally one image.

   Used by:
     - blogs.html      the preview cards there are plain HTML, written
                        by hand to match this data (see the comment in
                        that file for the pattern to copy for a new post)
     - blog-post.html  script.js block 7 renders the full post from the
                        entry whose slug matches ?slug=

   Each entry:
    slug     url key used by blog-post.html?slug=
     author   display name
     role     shown under the name
     avatar   path to a small square/round image
     date     ISO date, used for <time datetime="">
     dateLabel  human-readable date shown on the page
     hook     short bold opening line (also shown on the preview card)
     body     array of paragraph strings, kept short and punchy
    image    optional single post image path
    gallery  optional array of { src, alt } images shown as a clickable gallery
     related  optional { href, label } link at the end of the post
   =================================================================== */

const BLOG_POSTS = [
  {
    slug: "vibe-coding-to-production-ai-on-aws",
    author: "Umesh Nayak",
    role: "Full-Stack Developer & IT Consultant",
    avatar: "img/UMESH.JPEG",
    date: "2026-09-24",
    dateLabel: "24 Sep 2026",
    hook: "From Vibe Coding to Production AI on AWS 🚀",
    body: [
      "Had a great experience attending the Auckland AWS Tools & Programming Meetup this September, with an insightful double-header featuring <strong><a href=\"https://www.linkedin.com/in/dineshsharma2511/\" target=\"_blank\" rel=\"noopener noreferrer\">Dinesh Sharma</a></strong> and <strong><a href=\"https://www.linkedin.com/in/dineshliyanage0/\" target=\"_blank\" rel=\"noopener noreferrer\">Dinesh Liyanage</a></strong>.",
      "🔹 <strong><a href=\"https://www.linkedin.com/in/dineshsharma2511/\" target=\"_blank\" rel=\"noopener noreferrer\">Dinesh Sharma</a></strong> shared his journey in \"From Zero to Qazo: Building a Product with Kiro, AI &amp; AWS.\"",
      "It was fascinating to hear how Dinesh took an idea, experimented with AI and Kiro, built a real product, and eventually deployed it on AWS. The session also covered the lessons learned from vibe coding, including what worked, what didn't, and the importance of going through the complete journey from idea &rarr; build &rarr; break &rarr; learn &rarr; deploy.",
      "🔹 <strong><a href=\"https://www.linkedin.com/in/dineshliyanage0/\" target=\"_blank\" rel=\"noopener noreferrer\">Dinesh Liyanage</a></strong> followed with \"After the Demo: From Vibe Coding to AI Engineering.\"",
      "His session explored what happens when you move beyond a working demo and start building for real customers. He covered important production engineering practices such as:<br><br>• Evals and testing<br>• Tracing and observability<br>• Cost optimisation and model routing<br>• Context engineering<br>• Building reliable AI systems at scale",
      "One of my biggest takeaways from the meetup was the difference between building something that works and building something that can reliably work in production.",
      "A great evening of learning, technical discussions, and connecting with the Auckland tech community. Thanks to <strong><a href=\"https://www.linkedin.com/in/dineshsharma2511/\" target=\"_blank\" rel=\"noopener noreferrer\">Dinesh Sharma</a></strong> and <strong><a href=\"https://www.linkedin.com/in/dineshliyanage0/\" target=\"_blank\" rel=\"noopener noreferrer\">Dinesh Liyanage</a></strong> for sharing their experiences and insights!",
    ],
    image: null,
    gallery: [
      { src: "img/blog/blog7/IMG_7928.JPG.jpeg", alt: "Auckland AWS Tools and Programming Meetup" },
      { src: "img/blog/blog7/IMG_7930.JPG.jpeg", alt: "AWS meetup presentation" },
      { src: "img/blog/blog7/IMG_7931.PNG", alt: "AWS meetup event" },
      { src: "img/blog/blog7/IMG_7933.JPG.jpeg", alt: "AWS meetup attendees" },
      { src: "img/blog/blog7/IMG_7940.JPG.jpeg", alt: "Auckland tech community meetup" },
      { src: "img/blog/blog7/WhatsApp Image 2026-09-24 at 10.12.00 PM.jpeg", alt: "Auckland AWS meetup" },
    ],
    related: null,
  },
  {
    slug: "demystifying-git",
    author: "Umesh Nayak",
    role: "Full-Stack Developer & IT Consultant",
    avatar: "img/UMESH.JPEG",
    date: "2026-09-02",
    dateLabel: "02 Sep 2026",
    hook: "Spent my evening diving into the internals of Git 🔧",
    body: [
      "Attended \"Demystifying Git\" with the NZ GitHub User Group today and it was a great reminder that most of us use Git every single day without really understanding what's happening under the hood.",
      "<strong><a href=\"https://www.linkedin.com/in/mightymuke/\" target=\"_blank\" rel=\"noopener noreferrer\">Marcus Bristol</a></strong> walked us through how Git actually works behind the scenes, and honestly, it reframed how I think about the \"scary\" moments like merge conflicts and messy histories.",
      "Turns out, understanding the internals makes recovering from Git disasters a lot less stressful (we've all been there 😅).",
    ],
    image: null,
    gallery: [
      { src: "img/blog/blog1/IMG_7230.JPG.jpeg", alt: "Demystifying Git event" },
      { src: "img/blog/blog1/IMG_7231.JPG (1).jpeg", alt: "NZ GitHub User Group event" },
    ],
    related: null,
  },
  {
    slug: "ibm-techxchange",
    author: "Umesh Nayak",
    role: "Full-Stack Developer & IT Consultant",
    avatar: "img/UMESH.JPEG",
    date: "2026-09-23",
    dateLabel: "27 Aug 2026",
    hook: "IBM TechXchange, what an incredible experience! 🚀",
    body: [
      "I had the opportunity to attend IBM TechXchange as a guest and learn from an amazing group of security architects, PKI specialists, and DevSecOps professionals.",
      "The session provided some great insights into how organisations can strengthen security resilience by combining <strong>IBM Guardium Cryptography Manager, HashiCorp Vault, and Red Hat Ansible Automation Platform</strong> into an automated security pipeline.",
      "It was especially interesting to see practical examples around certificate lifecycle management, vulnerability prioritisation, CVE remediation, and automation.",
      "Huge thanks to the speakers and presenters for sharing their knowledge:",
      "<strong><a href=\"https://www.linkedin.com/in/david-sung-min-joo-25962a/\" target=\"_blank\" rel=\"noopener noreferrer\">David Sung Min Joo</a></strong> - Vault Labs, hands-on and hard-hitting",
      "<strong><a href=\"https://www.linkedin.com/in/roshan-royan-cissp-b802334/\" target=\"_blank\" rel=\"noopener noreferrer\">Roshan Royan, CISSP</a></strong> - Guardium Cryptography Manager deep dive",
      "<strong><a href=\"https://www.linkedin.com/in/teomeka/\" target=\"_blank\" rel=\"noopener noreferrer\">Te Omeka Morehu - BSc 🤙☁️</a></strong> - AI-driven CVE prioritisation with IBM Concert",
      "<strong><a href=\"https://www.linkedin.com/in/stuartsweetman/\" target=\"_blank\" rel=\"noopener noreferrer\">Stuart Sweetman</a></strong> - for the opening that set the tone and the support that made it all happen.",
      "And the team who made it run without a hitch: 🙌",
      "<a href=\"https://www.linkedin.com/in/taharchanane/\" target=\"_blank\" rel=\"noopener noreferrer\">M. Tahar Chanane</a>, <a href=\"https://www.linkedin.com/in/nedkanan/\" target=\"_blank\" rel=\"noopener noreferrer\">Ned Kanan</a>, <a href=\"https://www.linkedin.com/in/harriet-thomas-bailey-aba005117/\" target=\"_blank\" rel=\"noopener noreferrer\">Harriet Thomas-Bailey</a>, <a href=\"https://www.linkedin.com/in/haiderkhan/\" target=\"_blank\" rel=\"noopener noreferrer\">Haider Khan</a>, <a href=\"https://www.linkedin.com/in/iankerrnz/\" target=\"_blank\" rel=\"noopener noreferrer\">Ian Kerr</a>, and <a href=\"https://www.linkedin.com/in/phan-t/\" target=\"_blank\" rel=\"noopener noreferrer\">Tony Phan</a>",
      "It was a great opportunity to connect, learn, and get a closer look at how modern security teams are approaching resilience and automation.",
      "Thank you to everyone involved in putting together such an insightful event! 🙌",
    ],
    image: null,
    gallery: [
      { src: "img/blog/blog2/1.jpeg", alt: "IBM TechXchange presentation" },
      { src: "img/blog/blog2/2.jpeg", alt: "IBM TechXchange speaker" },
      { src: "img/blog/blog2/3.jpeg", alt: "IBM TechXchange venue" },
      { src: "img/blog/blog2/4.jpeg", alt: "IBM TechXchange attendees" },
    ],
    related: null,
  },
  {
    slug: "aws-tools-programming-april-meetup",
    author: "Umesh Nayak",
    role: "Full-Stack Developer & IT Consultant",
    avatar: "img/UMESH.JPEG",
    date: "2026-04-23",
    dateLabel: "23 Apr 2026",
    hook: "Had a great time attending the AWS Tools and Programming April Meetup as a guest! 🚀☁️",
    body: [
      "This month's meetup was hosted at the <strong>Pushpay</strong> office, which was a great new venue and made for a really enjoyable evening of learning and networking.",
      "There were two interesting talks:",
      "🔹 <strong>Building Your Company Knowledge Graph</strong><br><strong><a href=\"https://www.linkedin.com/in/stuart-wilson-448588144/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bf8MGfqt%2BTUGbtkoIiZbGsA%3D%3D\" target=\"_blank\" rel=\"noopener noreferrer\">Stuart Wilson</a></strong> from Pushpay shared an introduction to knowledge graphs, why organisations can benefit from them, and a practical live demonstration of how they can be built and used.",
      "🔹 <strong>ECS Supply Chain Security</strong><br><strong><a href=\"https://www.linkedin.com/in/dineshsharma2511/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bf8MGfqt%2BTUGbtkoIiZbGsA%3D%3D\" target=\"_blank\" rel=\"noopener noreferrer\">Dinesh Sharma</a></strong> walked through how AWS Signer, Lambda, and DevOpsAgent can work together to create verified and tamper-resistant deployments for ECS.",
      "It was a great opportunity to learn more about AWS, cloud security, DevOps, and how these technologies are being applied in real-world environments.",
      "Big thanks to the organisers, speakers, and <strong>Pushpay</strong> for hosting such a valuable meetup! 🙌",
      "Always great to attend events like this, meet people from the tech community, and take away new ideas to explore.",
    ],
    image: null,
    gallery: [
      { src: "img/blog/blog3/1.jpg", alt: "AWS Tools and Programming meetup" },
      { src: "img/blog/blog3/2.jpg", alt: "AWS meetup presentation" },
      { src: "img/blog/blog3/3.jpg", alt: "Pushpay meetup venue" },
    ],
    related: null,
  },
  {
    slug: "contributing-to-open-source-with-ai-responsibly",
    author: "Umesh Nayak",
    role: "Full-Stack Developer & IT Consultant",
    avatar: "img/UMESH.JPEG",
    date: "2026-04-21",
    dateLabel: "21 Apr 2026",
    hook: "Contributing to Open Source With AI Responsibly",
    body: [
      "A few days ago, I had the opportunity to attend an incredibly insightful event: \"Contributing to Open Source With AI Responsibly\" and it was honestly eye opening. 🚀",
      "The session, led by <strong><a href=\"https://www.linkedin.com/in/jess-lowe/\" target=\"_blank\" rel=\"noopener noreferrer\">Jess Lowe</a></strong>, dived deep into a topic that's becoming more relevant every day: how AI is transforming open source contributions for better and for worse.",
      "We often hear that AI makes us \"10x faster,\" but from a maintainer's perspective, it's not always that simple. There's a growing wave of low quality, AI generated pull requests (\"AI slop\") that actually increase the workload instead of helping. This session really flipped that narrative and showed what meaningful contribution looks like.",
      "Here's what stood out to me:<br>✅ The clear difference between valuable contributions and \"AI slop.\"<br>✅ How to identify and work on the right issues.<br>✅ What makes a pull request genuinely helpful and appreciated.<br>✅ Hands on experience using tools like Gemini CLI, Antigravity, and Jules to navigate complex repositories.",
      "The workshop segment was especially engaging, getting hands on and actually applying these concepts made a huge difference. Plus, great conversations, food, and an overall amazing learning experience. 🍕",
      "Big takeaway: AI is a powerful tool, but responsibility and intent matter more than ever. Being a good contributor isn't about speed, it's about quality, clarity, and respect for the people maintaining these projects.",
      "Grateful to be part of events like this that push us to grow as developers and contributors.",
    ],
    image: null,
    gallery: [
      { src: "img/blog/blog4/1.jpeg", alt: "Open source and AI event" },
      { src: "img/blog/blog4/2.jpeg", alt: "Open source workshop" },
      { src: "img/blog/blog4/3.jpeg", alt: "Open source event attendees" },
    ],
    related: null,
  },
  {
    slug: "aws-auckland-well-architected-user-group",
    author: "Umesh Nayak",
    role: "Full-Stack Developer & IT Consultant",
    avatar: "img/UMESH.JPEG",
    date: "2026-04-08",
    dateLabel: "08 Apr 2026",
    hook: "Excited to have attended the first Amazon Web Services (AWS) Auckland Well Architected User Group Meetup of 2026 🚀",
    body: [
      "Excited to have attended the first <strong><a href=\"https://www.linkedin.com/company/amazon-web-services/\" target=\"_blank\" rel=\"noopener noreferrer\">Amazon Web Services (AWS)</a></strong> Auckland Well Architected User Group Meetup of 2026 hosted by <strong><a href=\"https://www.linkedin.com/company/aws-auckland-wellarchitected-user-group/\" target=\"_blank\" rel=\"noopener noreferrer\">AWS Auckland Well-Architected User Group</a></strong>.",
      "The event was a great mix of learning and networking, bringing together architects and cloud enthusiasts to explore real world AWS best practices.",
      "A few key highlights from the sessions:",
      "<strong><a href=\"https://www.linkedin.com/in/kirsty-schuler-670a6297/\" target=\"_blank\" rel=\"noopener noreferrer\">Kirsty Schuler</a></strong> from <strong><a href=\"https://www.linkedin.com/company/evolve-cloud-services/\" target=\"_blank\" rel=\"noopener noreferrer\">Evolve Cloud Services ☁</a></strong> shared valuable insights on Optimization and Licensing Assessment, showing how organizations can turn AWS Well Architected principles into measurable outcomes across cost optimization and performance efficiency.",
      "<strong><a href=\"https://www.linkedin.com/in/dineshsharma2511/\" target=\"_blank\" rel=\"noopener noreferrer\">Dinesh Sharma</a></strong> from <strong><a href=\"https://www.linkedin.com/company/datacom/\" target=\"_blank\" rel=\"noopener noreferrer\">Datacom</a></strong> delivered a deep dive into container security on AWS ECS, demonstrating how tools like Cosign, KMS and Pulumi can enforce signed images and strengthen production environments.",
      "We also heard an engaging case study on the journey of building AI agents, covering the full spectrum from hype to real world challenges and learnings.",
      "Really appreciated the opportunity to connect with like minded professionals, exchange ideas and stay updated with the evolving cloud ecosystem.",
      "Big thanks to <strong><a href=\"https://www.linkedin.com/in/lorenzo-modesto-6pillars/\" target=\"_blank\" rel=\"noopener noreferrer\">Lorenzo Modesto</a></strong> for organising this and to all the speakers for putting together such a valuable event. Looking forward to the next one!",
    ],
    image: null,
    gallery: [
      { src: "img/blog/blog5/1.jpeg", alt: "AWS Auckland meetup attendee" },
      { src: "img/blog/blog5/2.jpeg", alt: "AWS meetup audience" },
      { src: "img/blog/blog5/3.jpeg", alt: "AWS Migration Framework presentation" },
      { src: "img/blog/blog5/4.jpeg", alt: "AWS ECS security presentation" },
    ],
    related: null,
  },
  {
    slug: "child-cancer-foundation-street-appeal",
    author: "Umesh Nayak",
    role: "Full-Stack Developer & IT Consultant",
    avatar: "img/UMESH.JPEG",
    date: "2026-03-14",
    dateLabel: "14 Mar 2026",
    hook: "Supporting the Child Cancer Foundation during their Street Appeal",
    body: [
      "My friend <strong><a href=\"https://www.linkedin.com/in/akhilesh-pardhi/\" target=\"_blank\" rel=\"noopener noreferrer\">Akhilesh Pardhi</a></strong> and I spent some time on Queen Street supporting the <strong><a href=\"https://www.linkedin.com/company/child-cancer-foundation/\" target=\"_blank\" rel=\"noopener noreferrer\">Child Cancer Foundation</a></strong> during their Street Appeal fundraiser.",
      "This initiative was organised with the help of the <strong><a href=\"https://www.linkedin.com/company/student-volunteer-army/\" target=\"_blank\" rel=\"noopener noreferrer\">Student Volunteer Army</a></strong>, a student-led club at the <strong><a href=\"https://www.linkedin.com/school/university-of-auckland/\" target=\"_blank\" rel=\"noopener noreferrer\">University of Auckland</a></strong> that brings students together to support meaningful community causes.",
      "It was inspiring to see the community come together to support children and families affected by cancer. Every conversation, every donation and every moment of awareness helps make a difference in the lives of those going through incredibly challenging times.",
      "Volunteering for causes like this reminds me how powerful community support can be. Grateful to have been part of something meaningful alongside <strong><a href=\"https://www.linkedin.com/in/akhilesh-pardhi/\" target=\"_blank\" rel=\"noopener noreferrer\">Akhilesh Pardhi</a></strong> and many other volunteers who showed up to help.",
      "If you get the chance in the future, I highly recommend supporting initiatives like the Street Appeal; even small contributions can have a big impact.",
    ],
    image: null,
    gallery: [
      { src: "img/blog/blog6/1.jpeg", alt: "Child Cancer Foundation Street Appeal volunteers" },
      { src: "img/blog/blog6/2.jpeg", alt: "Street Appeal community fundraiser" },
    ],
    related: null,
  },
];
