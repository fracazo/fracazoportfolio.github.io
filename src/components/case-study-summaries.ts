/**
 * The skim layer of each case study: what a hiring manager gets in thirty
 * seconds before deciding whether to read the whole thing.
 *
 * Keyed by the study's route, the same key the panel registry uses. The
 * panel renders this instead of the full study, with a button through to the
 * route; the route renders the same block in place of its summary card. One
 * source, two surfaces, so the summary never drifts from the study.
 *
 * Each entry answers, in order: what shipped (media), the decision and why
 * it beat the alternative (call), and what happened as a result (outcomes).
 */
export type CaseSummaryMedia = {
  /** Still image. Exactly one of `src` or `video` is set. */
  src?: string;
  /** Looping silent clip, for a product whose final state is motion. */
  video?: string;
  alt: string;
  caption?: string;
  /** Phone-shaped media: capped to a phone's width and centred, so a tall
      screen doesn't fill the column at three times the height of the text. */
  portrait?: boolean;
};

export type CaseSummaryData = {
  title: string;
  /** Role, product, year: rendered as chips under the title in the panel. */
  meta: string[];
  /** Final or shipped screens only. Never process artefacts. */
  media: CaseSummaryMedia[];
  /** The key decision, its reason, and the alternative it beat. First person. */
  call: string;
  /** What happened, with numbers where they exist. Inline links as
      `[label](https://…)`, the one bit of markup the summaries allow. */
  outcomes: string[];
  /** Live products to visit, shown as secondary buttons beside the read-more. */
  links?: { href: string; label: string }[];
};

export const caseSummaries: Record<string, CaseSummaryData> = {
  "/case-studies/gitlab-pages": {
    title: "Making Site Status Visible in GitLab Pages",
    meta: ["Product Designer", "GitLab Pages", "2025"],
    media: [
      {
        src: "/images/gitlab-pages-after.png",
        alt: "The redesigned GitLab Pages overview tab: three tabs (Overview, Pages deployments, Domain and settings), a block reading Your pages site is live at docs.company.com with the deploy job and a Visit site button, and a Recent pages deployments list showing a 2/100 limit badge and four active merge request previews",
        caption:
          "The overview tab answers the one question every site owner has, is it live and where, before anything else.",
      },
      {
        src: "/images/gitlab-pages-settings.png",
        alt: "Domains and settings tab: three domains listed with a Primary domain badge, DNS check results inline, a verification alert with an Edit domain button, Force HTTPS and Use unique domain settings with explanatory copy, and a Delete Pages block",
        caption:
          "Domains and settings, with DNS and certificate status inline instead of hidden until something broke.",
      },
    ],
    call:
      "Pages had spread the state of a site across four blocks on two pages, so finding out whether it was live took three lookups. I surfaced that in a UX scorecard run, then reorganised the page around the question: a live block first, then three tabs for overview, deployments, and domains and settings. The bigger argument, folding Pages deployments into GitLab’s Environments, I chose to lose. The engineers were right that it would create cross-team dependencies, and if the redesign depended on it nothing would ship. Prefixing everything with “Pages deployment” costs one word and keeps the two systems distinguishable.",
    outcomes: [
      "Shipped in GitLab 18.1 in June 2025, as eleven merge requests built by a team that wasn’t mine.",
      "Within a month a Pages engineer was filing paper cuts against the new baseline instead of the old one.",
      "The PM approved it as the foundation for anything GitLab later builds or charges for in Pages.",
    ],
  },

  "/case-studies/wiki-contextual-comments": {
    title: "GitLab Wiki: Contextual Comments",
    meta: ["Product Designer", "GitLab Wiki", "2025"],
    media: [
      {
        src: "/images/wiki-comments-sidebar.png",
        alt: "GitLab wiki page with contextual comments: highlighted passages in the content link to threaded discussions in a dedicated right-side comments panel",
        caption:
          "Highlighted passages anchor to threads in one right-side panel. General comments share the same feed.",
      },
      {
        src: "/images/wiki-comments-orphaned.png",
        alt: "Comments panel showing an Original content deleted indicator on an orphaned thread, and a collapsed resolved threads section",
        caption:
          "Edge cases designed in: an orphaned thread keeps its record, and resolved threads collapse at the bottom.",
      },
    ],
    call:
      "Wiki comments sat at the bottom of the page with no link to the text they discussed, so the real conversations happened in Slack. My UX scorecard run on Wiki flagged it, a competitor scan showed every major alternative already had contextual comments, and I took both to the PM to get it on the roadmap. The feature was table stakes against Confluence and Notion, but Confluence renders every thread inline and its pages turn into a mess. I explored three approaches and rejected all three, because the layout had no always-visible place for comments to live. So I moved the wiki navigation to the left, freed the right side for a single comments panel, and marked highlighted text with a small indicator instead of an inline thread. The cost I accepted, and agreed with the PM, was one extra click to reach a thread. Text selection is the trigger rather than line hover, because prose wants a word, not a line.",
    outcomes: [
      "A complete MVC design system: default, hover, creation, centralised view, resolved states, multi-comment and orphaned threads.",
      "In development, tracked in the Wiki Contextual Discussions Beta epic.",
      "With the sidebar redesign, it set the layout foundation for Wiki as a Confluence alternative.",
    ],
  },

  "/case-studies/vodafone-mymix": {
    title: "Letting Prepaid Customers Design Their Own Recharge",
    meta: ["Senior UX Designer", "Vodafone MyMix", "2015–16"],
    media: [
      {
        src: "/images/vodafone/mymix-cc-progression.webp",
        alt: "Three states of the shipped builder: empty at $0, partial with an estimated $25 to $60 range, complete at $40",
        caption:
          "The shipped builder: empty, partial with the price range you could still land in, complete at $40.",
      },
      {
        src: "/images/vodafone/mymix-voucher-states.webp",
        alt: "Six states of the voucher flow, including greyed-out options and the inclusion limit lightbox",
        caption:
          "Pick an option and the combinations that no longer exist grey out before you can commit to them.",
      },
    ],
    call:
      "Vodafone wanted prepaid customers to pick every inclusion of their recharge themselves, from 72 fixed combinations across 18 price points. The sponsor had already settled on sliders, and they demoed well. My read was that a slider promises a kind of control the pricing could never give. Instead of arguing it in a showcase, we built both as working prototypes, mine coded in AngularJS against the real price matrix, and put them in front of customers. Participants fought the sliders. Buttons made the constraint legible instead of apologising for it. A control is a promise about the data behind it, and I picked the one the data could keep.",
    outcomes: [
      "Launched in 2016 as MyMix in the MyVodafone app and on the website, with the same builder on both.",
      "Thirty seconds of a customer fighting a slider moved the sponsor where showcase slides hadn’t.",
      "Testing showed 60 to 70% of customers recharged with vouchers but only 7.4% redeemed online, so we recommended delaying launch until a wallet could hold voucher credit.",
    ],
  },

  "/case-studies/birthguide": {
    title: "BirthGuide",
    meta: ["Founder, sole builder", "BirthGuide", "2026"],
    media: [
      {
        src: "/images/birthguide-landing.png",
        alt: "The BirthGuide landing page after the inversion: the headline Feel calm and prepared for labour and birth, then two cards side by side, The program marked Start here with an Explore the program free button, and Birth plan with a Go to birthplans.app button",
        caption:
          "The landing page after the inversion: the program leads, and the birth plan is the free tool beside it.",
      },
    ],
    call:
      "I shipped a birth plan generator in ten days and sold it for six months. Session recordings, then a round of emails to people who paid and people who didn’t, said the same thing: the value was the learning wrapped around the questionnaire, not the document at the end. Payment was the only difference between the two groups, which told me this was a business model problem, not a pricing problem. If I had only asked non-converters I would have run a price test and shipped a discount. So I inverted the model in twenty-six days. The teaching became the paid product, one paywall before module two and never again, and the plan builder moved to its own site as a free tool instead of being deleted.",
    outcomes: [
      "The eight-module program went live at [birthguide.com.au](https://birthguide.com.au) on 13 August 2026, after full clinical review.",
      "The plan builder moved to its own site with a different interface: tap through your choices and the plan builds itself beside you. See it at [birthplans.app](https://birthplans.app).",
      "The old route and its paywall were deleted outright, a net removal of 660 lines.",
    ],
    links: [{ href: "https://birthplans.app", label: "Visit birthplans.app" }],
  },

  "/case-studies/bringing-visibility-to-workers-status": {
    title: "Worker Status Visibility",
    meta: ["Principal Product Designer", "Hireup", "2022"],
    media: [
      {
        src: "/images/62fc5222cf2458417e3c4205_Final-design.png",
        alt: "The shipped Hireup worker app: an availability signifier on the avatar in the navigation bar, and the availability toggle inside My Account",
        caption:
          "Every page answers what is my status right now. The control itself stays in My Account.",
      },
      {
        src: "/images/62fc1fbd85376430031ca998_Connection-rate.png",
        alt: "Chart of connection rate for the experimental group rising from 3% to 5%",
        caption: "Connection rate in the experimental group, 3% to 5%.",
      },
    ],
    call:
      "Clients were messaging support workers who had quietly left the platform, because nothing ever updated an absent worker’s availability. The data team and the PM proposed switching workers to not looking for work after 30 days of inactivity. Two calls were mine. The team wanted to flip the status back automatically when a worker returned. I argued against it, because logging in doesn’t mean you want work, the same way opening LinkedIn doesn’t mean you’re open to work. The PM wanted a home-screen module for the toggle, one tap away. I kept it in My Account, since availability is a setting and workers already look for settings there, and added a status signifier on the avatar so every page shows your status without carrying the control.",
    outcomes: [
      "Response rate in the experimental group rose from 39.1% to 45.8%, and connection rate from 3% to 5%.",
      "Inactive worker reactivations rose 46%.",
      "An estimated 40 new connections a month, and a 12% incremental lift on connections from client first messages.",
    ],
  },

  "/case-studies/qantas-entertainment-app": {
    title: "A Unified In-flight Entertainment Experience",
    meta: ["Lead Designer", "Qantas Entertainment App", "2018"],
    media: [
      {
        src: "/images/62dbf33322fdbe67a1f79575_redesigned---ready-to-flight.webp",
        alt: "The redesigned Qantas Entertainment app before boarding, showing the traveller’s flight and the entertainment available on that aircraft",
        caption:
          "Ready to fly: the app knows your flight and what the aircraft supports before you board.",
      },
      {
        src: "/images/62dfbfe1ae91243f8a293521_icon.webp",
        alt: "The new Qantas Entertainment app icon: a play mark inside the brand’s pebble shape",
        caption: "The new icon, since adopted across the Qantas group as the mark for entertainment.",
      },
    ],
    call:
      "Travellers had the entertainment app installed and never opened it, because it only worked on board, connected to the Qantas network. The hypothesis was that making it useful before and after the flight would lift usage, so the app pulls the traveller’s flight from the Airways app and adapts to what that aircraft supports. Two decisions were mine. The icon was an old television on the same red as the Airways app, so it implied slow streaming and got lost in the App Store. I rebuilt it on the brand’s pebble shape around a play mark. And when the tech review found the backend for my approved design would take six months, I changed the design rather than the timeline, and I now bring engineers into design reviews from the start.",
    outcomes: [
      "Advertising revenue from partner offers grew from 225k to 675k, roughly triple.",
      "App Store rating went from 2.1 to 4.5, and monthly active users from 165k to 180k.",
      "The brand manager adopted the new icon across the Qantas group as the mark for entertainment.",
    ],
  },

  "/case-studies/qantas-app": {
    title: "Increasing App Adoption Through Entertainment",
    meta: ["Lead Designer", "Qantas Airways App", "2016"],
    media: [
      {
        src: "/images/62d920e6a8820bb1f683016a_Screen-Shot-2022-07-21-at-7.48.07-pm.webp",
        portrait: true,
        alt: "The entertainment notice inside the flight card of the Qantas Airways app, offering to download or open the entertainment app",
        caption:
          "The notice in the flight card, varied by aircraft: download, open, or hidden when the plane has no system.",
      },
      {
        src: "/images/62d932ca88b9cb77a06bf8ee_Screen-Shot-2022-07-21-at-9.04.18-pm.webp",
        portrait: true,
        alt: "The follow-up release: the five newest movies for the traveller’s flight shown inside the Airways app",
        caption: "The follow-up: the five newest movies for your flight, then a full entertainment page.",
      },
    ],
    call:
      "Qantas wanted entertainment to be a reason to choose the airline, and the metric was use of the entertainment app. A known fact: 35% of trips are added to the Airways app a week before departure. So rather than market the entertainment app on its own, I put it inside the moment travellers were already in: a notice in the flight card that detects whether the entertainment app is installed and offers download or open. The notice varies by aircraft, including hiding itself when the plane has no system, because a promise the flight can’t keep is worse than silence. We kept the pattern cheap and consistent across releases so it could grow from a notice into the five newest movies, then a full page.",
    outcomes: [
      "In the first 24 hours, 27k travellers tapped download and 9k tapped open.",
      "Year-on-year App Store download growth rose from 58% to 70% after the redesign.",
      "Entertainment moved to the first screen 1.17 million monthly users see, helped by a later home page change from another squad.",
    ],
  },

  "/case-studies/glql": {
    title: "GLQL: Embedded Views for Work Tracking",
    meta: ["Product Designer", "GitLab Query Language", "2024–2025"],
    media: [
      {
        src: "/images/builder-final.gif",
        alt: "The visual query builder adding an embedded view of work items to a page without any query being typed",
        caption:
          "Where the design was heading: an embedded view added without writing a line of query.",
      },
    ],
    call:
      "GLQL was a query language built by engineers, and the instinct was to move its syntax toward SQL: clean, familiar. I argued that the syntax is the first thing a user touches, so it is the interface, and we shouldn’t lock it on instinct before testing. Testing overturned the instinct. People who knew SQL arrived expecting things our language couldn’t do, while the plain-language option was easier for everyone else. Familiarity was a trap. We shipped plain language with full backward compatibility. The second call was to close the gap between docs and product: users were copying examples from the docs and pasting them in, so the first usable query had to be one click away inside the editor rather than a tab away.",
    outcomes: [
      "Adoption grew about a third in the first weeks after general availability, alongside the discoverability work I designed.",
      "Zero critical bugs at GA.",
      "I joined a team with no research process and no design practice and left it with both, which made the Wiki work that followed faster.",
    ],
  },

  "/case-studies/mr-summary-ai": {
    title: "Summarize Merge Requests with AI",
    meta: ["Product Designer", "GitLab Code Review", "2023–2024"],
    media: [
      {
        src: "/images/auto_generate_ai_summary.gif",
        alt: "A Summarise my code changes button on the merge request description box, generating a draft the author can edit",
        caption:
          "Where it ended: a button on the merge request form that helps the author write the description, editable before saving.",
      },
    ],
    call:
      "The brief was an AI summary of a merge request for reviewers. We shipped three versions: a quick action, then the summary moved upstream into to-dos and email, then an on-page summary. A survey told us what the iterations hadn’t. A second, AI-written summary beside the human description made readers doubt both, and they spent time cross-checking instead of trusting either. Our first instinct was to fix the prompts. Accuracy stayed around 50%, so I reframed the role: the real problem was a stale description, and the intervention belonged at creation time, helping the author write it, with the output editable and theirs. We turned the reviewer-facing summaries off.",
    outcomes: [
      "The epic closed in May 2024 with all 24 issues delivered and the feature pointed at the author, not the reviewer.",
      "Removing a shipped feature took more conviction than shipping one. The survey and a clear alternative gave the team that.",
      "I now treat the model’s real accuracy as a design constraint from day one instead of assuming prompts will close the gap.",
    ],
  },

  "/case-studies/eta-app": {
    title: "Reducing Friction in Government Visa Applications",
    meta: ["Lead Product Designer", "ETA visa app", "2020"],
    media: [
      {
        src: "/images/62caa63e33c6504c2ebe850c_Android--iPhone.png",
        alt: "The finished ETA visa app on Android and iPhone",
        caption: "The shipped app on Android and iPhone.",
      },
      {
        src: "/images/62ca9af337b2819503bdf0e1_Dashboards.png",
        alt: "The ETA app dashboards: an application in progress and a completed application, each with its next step",
        caption: "Dashboards: every application shows where it is and what comes next.",
      },
      {
        src: "/images/62caab5eca69f313a9a5b8c5_SDK-Contraints.png",
        alt: "The passport capture screen, redesigned around the external provider’s SDK interface",
        caption:
          "Passport capture, redesigned around the external SDK. The one place usability gave ground to a constraint.",
      },
      {
        src: "/images/62ca9d1c707bc54c532d4461_NFC-Scan.png",
        alt: "The NFC scan screens guiding the traveller to hold the passport against the phone until the chip is read",
        caption: "NFC scan: the data comes from the passport chip, not the keyboard.",
      },
      {
        src: "/images/62caac8537b28197abbe90b9_Live-Photo-Capture.png",
        alt: "The live photo capture screens, with framing guidance and the captured biometric photo",
        caption: "Live photo capture for the biometric, with guidance in the frame instead of instructions above it.",
      },
      {
        src: "/images/62cab1f7ca69f3a06ca60419_Submission.webp",
        alt: "The submission screens, confirming the application has been sent and what happens next",
        caption: "Submission: the application confirmed, and what to expect next.",
      },
    ],
    call:
      "The Department of Home Affairs was losing time to data mismatches, because travellers typed their passport details into a web form by hand. There was no mobile product, so I designed the app from zero to one. The core call was to replace typing with reading the passport chip over NFC and capturing biometrics on the phone, so the data came from the document instead of the keyboard. Two smaller calls followed. Legal needed five consent screens. I merged the agreements into one page without checkboxes and got legal to approve it. And I dropped the brand typeface for the device’s native fonts, because the app is heavy on data and had to feel quick. A form like this has to behave the way people expect, so the personality went only where it couldn’t cost clarity: loading states and feedback animations.",
    outcomes: [
      "Shipped on iOS and Android as the department’s first mobile ETA product.",
      "Won Gold at the Sydney Design Awards, awarded to the project team where I was lead product designer.",
      "Completion and abandonment were never measured against the web form. That is the number I would insist on next time.",
    ],
  },
};

export function hasCaseSummary(href: string) {
  return href in caseSummaries;
}
