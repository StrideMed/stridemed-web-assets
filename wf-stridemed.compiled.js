function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} = React;

/* global React */
// (plain destructure removed)
// ============================================================
// PRODUCTS — based on Novara Vet Systems catalog v8
// ============================================================

const PRODUCTS = [{
  id: "corex-4k",
  cat: "Visualization",
  name: "CoreX™ 4K ICG Visualization System",
  sub: "Complete 4K imaging tower with ICG fluorescence",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f95d2dd3d530093816c_corex-tower-system.png",
  num: "VS · 001",
  size: "feat-lg",
  specs: [["Display", "4K medical-grade surgical monitor"], ["Camera head", "4K precision-engineered, low latency"], ["Light source", "High-intensity LED, color-stable"], ["Processor", "Advanced 4K video processing"], ["Insufflator", "FlowTherm™ intelligent pressure control"], ["Cart", "CoreX™ purpose-built surgical cart"], ["ICG mode", "Indocyanine green fluorescence imaging"]],
  blurb: "The complete arthroscopy stack — 4K camera, LED light, processor, insufflator, energy platform and cart, integrated on one cohesive system with ICG fluorescence for perfusion imaging.",
  use: ["Arthroscopy", "Laparoscopy", "Advanced rigid endoscopy", "Teaching / recording"]
}, {
  id: "or-160",
  cat: "Visualization",
  name: "OR-160 All-in-One Arthroscopy System",
  sub: "Portable processor & LED light source in one unit",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a17909d5875b81361e49012_or160-system.png",
  num: "VS · 002",
  size: "feat-md",
  specs: [["Configuration", "Processor + LED + air pump"], ["Form factor", "Portable benchtop"], ["Compatibility", "Flexible + rigid endoscopes"], ["Display", "5\" capacitive touch"], ["Capture", "1080p to USB"], ["Predecessor", "Builds on the OR-100 legacy"]],
  blurb: "Streamlined all-in-one platform that combines processor, LED light source and air pump into a single portable surgical unit — ideal for clinics that want the full stack without the full cart.",
  use: ["Mobile sports medicine", "Travel diagnostics", "In-clinic endoscopy"]
}, {
  id: "slimvue-usb",
  cat: "Visualization",
  name: "SlimVue™ USB Rigid Arthroscope",
  sub: "Needle-size USB scope with chip-on-tip imaging",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f97a081d2bfdc985fea_slimvue-nanoscope.png",
  num: "VS · 003",
  size: "",
  specs: [["Diameters", "1.3 mm · 1.9 mm"], ["Lengths", "67 mm · 110 mm · 175 mm"], ["Sensor", "Chip-on-tip image sensor"], ["Connector", "USB direct to laptop or tablet"], ["Image", "High-definition micro-diameter"]],
  blurb: "Medical-grade, needle-sized visualization for precision diagnostics and minimally invasive procedures. Plug directly into a laptop or tablet — no tower required.",
  use: ["Stand-alone diagnostics", "Travelling surgeons", "Confined anatomy access"]
}, {
  id: "mini-arthroscope",
  cat: "Visualization",
  name: "Rigid Arthroscope Set",
  sub: "1.9 / 2.4 / 2.7 mm scopes · 0°, 30°, 45°, 70°",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f958eac902ef966468d_arthroscope-set.png",
  num: "VS · 004",
  size: "feat-md",
  specs: [["Diameters", "1.9 · 2.4 · 2.7 · 4.0 · 5.5 mm"], ["Lengths", "67 · 110 · 175 · 205 · 305 mm"], ["Angles", "0° · 30° · 45° · 70°"], ["Coupler", "Universal C-mount"], ["Compatibility", "CoreX™ 4K ICG · OR-160 · third-party towers"]],
  blurb: "The full range of Novara rigid scopes used across stifle, elbow and shoulder arthroscopy — sized for everything from a Yorkie shoulder to a Mastiff stifle.",
  use: ["Stifle (2.7 mm)", "Elbow (1.9 mm)", "Shoulder (1.9 / 2.4 / 2.7 mm)", "Tarsus", "Carpus"]
}, {
  id: "sheath-trocar",
  cat: "Visualization",
  name: "Sheath & Trocar Sets",
  sub: "Cannulation system for joint access",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f96a36a496031b3cf0c_sheath-trocar.png",
  num: "VS · 005",
  size: "",
  specs: [["Sheath sizes", "Matched to 1.9 / 2.4 / 2.7 mm scopes"], ["Stopcocks", "Dual port, rotatable"], ["Trocar", "Blunt + sharp tips included"], ["Material", "316L stainless"], ["Cycles", ">500 autoclave"]],
  blurb: "Precision-matched to each Novara scope. Dual stopcocks support inflow and outflow on a single port.",
  use: ["Stifle access", "Elbow access", "Shoulder access", "Inflow / outflow management"]
}, {
  id: "coredrive",
  cat: "Power",
  name: "CoreDRIVE™ Shaver & Resection System",
  sub: "High-torque shaver with intelligent fluid management",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f9581c7e667e293cfd7_coredrive-shaver.png",
  num: "PW · 010",
  size: "feat-md",
  specs: [["Handpiece", "High-torque resection"], ["Blades / Burs", "2.5 mm · 3.5 mm · 4.0 mm"], ["Fluid mgmt", "Adjustable suction + flow, integrated"], ["Display", "5\" capacitive touch"], ["Footswitch", "Pneumatic, programmable"], ["Modes", "Oscillating · Forward · Reverse"]],
  blurb: "Combines a high-torque shaver handpiece and intelligent fluid management in one compact platform. Adjustable suction and flow keep visualization clear without juggling separate pumps.",
  use: ["Synovial debridement", "Cartilage shaving", "Bone burr", "Loose body extraction"]
}, {
  id: "tag-graspers",
  cat: "Instruments",
  name: "TAG Graspers & Hand Instruments",
  sub: "Color-coded arthroscopic graspers, punches & probes",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f9671435c1aee60f7e8_tag-graspers.png",
  num: "IN · 001",
  size: "",
  specs: [["Categories", "Graspers · Punches · Probes · Picks"], ["Color coding", "Blue · Red · Steel · Green · Black"], ["Working dia.", "1.7 – 3.0 mm"], ["Tip styles", "Straight · Up-curve · Side"], ["Sterilization", "Steam autoclave, 500+ cycles"]],
  blurb: "Veterinary-specific hand instruments from TAG Medical, sized and angled for small-joint canine arthroscopy.",
  use: ["Loose-body retrieval", "Cartilage release", "Tissue manipulation"]
}, {
  id: "tag-l-probe",
  cat: "Instruments",
  name: "L-Probe & Meniscal Punch",
  sub: "Diagnostic probing and tissue resection",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f96119cab63a7ef9401_tag-probes.png",
  num: "IN · 002",
  size: "",
  specs: [["L-Probe", "Calibrated tip, 90° angle"], ["Meniscal punch", "Cup forceps, 1.7 / 2.3 / 3.0 mm"], ["Tip styles", "Up · Down · Side cutting"], ["Material", "316L surgical stainless"]],
  blurb: "Calibrated L-probe for systematic joint examination and meniscal punch forceps for targeted tissue resection — essential instruments for every stifle arthroscopy.",
  use: ["Stifle probing", "Meniscal evaluation", "Targeted resection"]
}, {
  id: "rf-system",
  cat: "Power",
  name: "RF Ablation System",
  sub: "Bipolar radiofrequency for shoulder & soft tissue",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f969db60d4ac56b11e6_rf-ablation.png",
  num: "PW · 030",
  size: "",
  specs: [["Modality", "Bipolar RF"], ["Probes", "Hook · Ball · Straight"], ["Power", "Variable, footswitch controlled"], ["Use", "Saline-medium arthroscopy"]],
  blurb: "Bipolar radiofrequency probes for soft-tissue ablation and capsular release — a standard tool in arthroscopic shoulder procedures.",
  use: ["Shoulder capsular release", "Tissue ablation", "Hemostasis in saline"]
}, {
  id: "shoulder-cannula",
  cat: "Instruments",
  name: "Arthroscopic Cannula & Switching Stick Set",
  sub: "Canine arthroscopic cannula and switching stick set",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f946e860fb6f2bcf187_cannula-set.jpg",
  num: "IN · 003",
  size: "",
  specs: [["Cannulae", "2.9 mm · 3.7 mm"], ["Switching sticks", "2.8 mm · 3.7 mm"], ["Includes", "Cannulated obturator, dilation needles, stifle out-flow set"], ["Use", "Portal management & instrument exchange"]],
  blurb: "Complete canine arthroscopy cannula set with switching sticks, cannulated obturator, dilation needles and stifle out-flow cannula — sized for small-joint work.",
  use: ["Portal management", "Instrument exchange", "Stifle out-flow"]
}, {
  id: "gaitrite",
  cat: "Diagnostics",
  name: "GAITRite® Walkway System",
  sub: "Pressure-sensitive gait analysis · the clinical gold standard",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f943acbf487b46b837c_gaitrite-walkway.png",
  num: "DX · 001",
  size: "feat-lg",
  specs: [["Walkway length", "Up to 24 ft modular"], ["Sensor density", "13,824 sensors / standard mat"], ["Sample rate", "120 Hz"], ["Software", "GAITFour Canine analytics"], ["Outputs", "Stance · Stride · Symmetry index · GLS"], ["Training", "Remote training & ongoing support included"]],
  blurb: "Objective, repeatable gait data in 30 seconds. Quantify lameness pre- and post-procedure with the gold-standard pressure walkway. Includes remote training and ongoing clinical support.",
  use: ["Lameness scoring", "Post-op recovery tracking", "Outcome research", "Pre-purchase exams"]
}, {
  id: "recovery-suit",
  cat: "Recovery",
  name: "DogLeggs® Recovery Suit",
  sub: "Post-op compression bodysuit — replaces the cone",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f969dc910c9553bdfaf_recovery-suit.png",
  num: "RC · 001",
  size: "feat-md",
  specs: [["Sizes", "XXS – XXXL"], ["Material", "Medical-grade Lycra blend"], ["Coverage", "Trunk + forelimbs"], ["Compression", "Light-to-moderate"], ["Care", "Machine washable"]],
  blurb: "Light compression replaces the cone — reduces swelling, prevents licking, and keeps post-op anxiety down without restricting motion.",
  use: ["Post-op recovery", "Lick / chew prevention", "Anxiety relief"]
}, {
  id: "shoulder-hobble",
  cat: "Recovery",
  name: "DogLeggs® Shoulder Stabilization System",
  sub: "Hobble-style support for medial shoulder syndrome recovery",
  img: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f9508d7de90ee821ffd_recovery-brace.png",
  num: "RC · 002",
  size: "",
  specs: [["Indications", "Medial Shoulder Syndrome (MSS) · post-op stabilization"], ["Adjustment", "Hobble configuration, adjustable straps"], ["Sizes", "5 stock sizes"], ["Use period", "4–12 weeks typical"]],
  blurb: "The DogLeggs shoulder stabilization hobble restricts abduction during the critical recovery window for medial shoulder instability — a key component of conservative and post-operative MSS management.",
  use: ["MSS recovery", "Conservative management", "Post-op stabilization"]
}];

// ============================================================
// PROCEDURES — corrected per Sherman's clinical guidance
// ============================================================

const PROCEDURES = [{
  num: "01",
  name: "Stifle arthroscopy",
  blurb: "Minimally invasive visualization and treatment of cranial cruciate, meniscal and cartilage pathology in the canine stifle.",
  items: ["2.7 mm rigid arthroscope", "CoreX™ 4K ICG Visualization System", "Sheath & trocar set", "Meniscal punch hand instrument", "L-probe"],
  time: "45–90 min",
  port: "2 ports",
  partner: {
    kicker: "Plates & implants",
    blurb: "For TPLO and stifle stabilization hardware we partner with InVictos Orthopedics.",
    label: "InVictos Orthopedics",
    url: "https://invictosortho.com/"
  }
}, {
  num: "02",
  name: "Elbow exploration",
  blurb: "Diagnosis and treatment of medial coronoid disease, OCD lesions and fragmented coronoid process.",
  items: ["1.9 mm rigid arthroscope", "CoreX™ 4K ICG Visualization System", "Sheath & trocar set", "Graspers", "L-probe", "CoreDRIVE™ Shaver Unit", "Burrs"],
  time: "60–90 min",
  port: "3 ports"
}, {
  num: "03",
  name: "Shoulder arthroscopy",
  blurb: "Visualization of biceps tendon, glenohumeral ligaments, and diagnosis of OCD and medial shoulder instability.",
  items: ["1.9 / 2.4 / 2.7 mm arthroscope set", "CoreX™ 4K ICG Visualization System", "Sheath & trocar set", "Shoulder cannula kit", "CoreDRIVE™ Shaver System", "Burrs", "RF ablation system", "L-probes", "Graspers"],
  time: "30–60 min",
  port: "2 ports"
}, {
  num: "04",
  name: "Tablet-based arthroscopy",
  blurb: "Plug-and-play USB arthroscopy for traveling surgeons, on-the-go diagnostics, or practices building toward a full suite without committing to a tower up front.",
  items: ["SlimVue™ USB rigid endoscope (1.3 / 1.9 mm)", "Multiple working lengths (67 / 110 / 175 mm)", "Direct USB to laptop or tablet", "Carry case + power kit", "Onboarding training"],
  time: "Set-up < 5 min",
  port: "Single-port"
}, {
  num: "05",
  name: "Gait analysis & lameness scoring",
  blurb: "Objective quantification of weight distribution, stride and symmetry before and after intervention — the same metrics used in human sports medicine.",
  items: ["GAITRite® walkway", "GAITFour Canine software", "Outcome reporting templates", "Remote training", "Ongoing clinical support"],
  time: "15 min total",
  port: "Walk-on"
}, {
  num: "06",
  name: "Post-op recovery starter kit",
  blurb: "A curated DogLeggs starter bundle — the recovery garments your post-op patients actually need, sized for the dogs you actually see.",
  items: ["DogLeggs® Recovery Suit · common-size bundle", "DogLeggs® Shoulder Stabilization Hobbles · most-common sizes", "Fitting guide & sizing reference", "Patient hand-out templates"],
  time: "Stocked & ready",
  port: "At-home use"
}];

// ============================================================
// PARTNERS — TAG Training Center removed
// ============================================================
const PARTNERS = [{
  name: "Novara Surgical Technologies",
  logo: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178fa9cfcb6c4d6dcc2b94_partner-novara.webp",
  desc: "CoreX™ 4K ICG towers, OR-160 systems and CoreDRIVE™ shavers.",
  num: "P · 01"
}, {
  name: "GAITRite®",
  logo: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178fa9119cab63a7ef9597_partner-gaitrite.png",
  desc: "Pressure-sensitive walkway system — the gait analysis gold standard.",
  num: "P · 02"
}, {
  name: "DogLeggs®",
  logo: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178fa91817ffd0332d05de_partner-dogleggs.jpeg",
  desc: "Post-operative compression suits, shoulder stabilization hobbles and orthotics.",
  num: "P · 03"
}, {
  name: "T.A.G. Medical",
  logo: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178faa4d077d0205e22444_partner-tag.jpg",
  desc: "Veterinary-specific arthroscopic hand instruments, graspers and probes.",
  num: "P · 04"
}, {
  name: "InVictos Orthopedics",
  logo: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178faa7607ff99c4998866_partner-invictos.png",
  desc: "TPLO plates and orthopedic implants engineered for canine sports-medicine surgery.",
  num: "P · 05",
  url: "https://invictosortho.com/"
}];

// ============================================================
// TEAM — Allyson's photo added
// ============================================================
const TEAM = [{
  name: "Dr. Sherman Canapp Jr.",
  role: "Co-Founder · Chief Medical Officer",
  badge: "DVM, MS, DACVS, DACVSMR",
  photo: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f80d2dd3d5300937fe5_team-sherman.jpg",
  bio: "Board-certified leader in veterinary sports medicine and surgery. Drives clinical innovation and the advancement of minimally invasive orthopedic solutions.",
  creds: ["Diplomate ACVS", "Diplomate ACVSMR", "Founder, VOSM"],
  speciality: "Orthopedics · Sports Med"
}, {
  name: "Allyson Canapp",
  role: "Co-Founder · Chief Operating Officer",
  badge: "Operations",
  photo: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f808d373abfdd66c323_team-allyson.png",
  bio: "Operational leader driving growth, systems and execution across StrideMed's expanding platform. Builds the infrastructure that scales clinical adoption.",
  creds: ["Vet operations", "Practice systems architect"],
  speciality: "Operations · Strategy"
}, {
  name: "Harry Wotton III",
  role: "Co-Founder · Chief Executive Officer",
  badge: "Strategy",
  photo: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f81119cab63a7ef92b3_team-harry.png",
  bio: "Visionary executive leading strategy, partnerships and growth in veterinary medical technology. Connects clinical demand with manufacturing capability.",
  creds: ["Med-tech commercialization", "Partnership development"],
  speciality: "Strategy · Growth"
}];

// ============================================================
// RESOURCES — placeholder content for the Education page
// ============================================================
const RESOURCES = [{
  type: "Webinar",
  title: "Setting up an in-clinic arthroscopy suite from scratch",
  duration: "42 min",
  date: "May 2026",
  cf: true,
  presenter: "Dr. Sherman Canapp Jr."
}, {
  type: "Case study",
  title: "Quantifying recovery: GAITRite outcomes across 240 TPLO patients",
  duration: "8 min read",
  date: "Apr 2026",
  cf: true,
  presenter: "VOSM Research Group"
}, {
  type: "Video tutorial",
  title: "Stifle arthroscopy with the 2.7mm scope · portal placement",
  duration: "12 min",
  date: "Mar 2026",
  cf: true,
  presenter: "Dr. Sherman Canapp Jr."
}, {
  type: "Guide",
  title: "Choosing your first arthroscopy tower: a buyer's checklist",
  duration: "5 min read",
  date: "Feb 2026",
  cf: true,
  presenter: "StrideMed Editorial"
}, {
  type: "Webinar",
  title: "Conservative management of medial shoulder instability",
  duration: "55 min",
  date: "Feb 2026",
  cf: true,
  presenter: "Dr. Sherman Canapp Jr."
}, {
  type: "Case study",
  title: "Tablet arthroscopy for the traveling sports medicine specialist",
  duration: "10 min read",
  date: "Jan 2026",
  cf: true,
  presenter: "StrideMed Editorial"
}];
Object.assign(window, {
  PRODUCTS,
  PROCEDURES,
  PARTNERS,
  TEAM,
  RESOURCES
});

/* global React */
// (plain destructure removed)
// ============================================================
// Nav
// ============================================================
function Nav({
  route,
  setRoute
}) {
  const items = [["home", "Home"], ["products", "Products"], ["solutions", "Solutions"], ["team", "Team"], ["education", "Education"]];
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-logo logo-img",
    href: "#/",
    onClick: e => {
      e.preventDefault();
      setRoute("home");
    },
    "aria-label": "StrideMed Veterinary Solutions home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a179006c527a0f357c4843b_logo-stridemed.png",
    alt: "StrideMed Veterinary Solutions"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, items.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: `#/${k}`,
    className: "nav-link " + (route === k ? "active" : ""),
    onClick: e => {
      e.preventDefault();
      setRoute(k);
    }
  }, label)), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    className: "btn btn-ink nav-cta btn-arrow",
    onClick: e => {
      e.preventDefault();
      setRoute("contact");
    }
  }, "Request demo"))));
}

// ============================================================
// Footer
// ============================================================
function Footer({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-logo logo-img logo-img-light",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a179006411443935bfaff09_brand-logo-light.png",
    alt: "StrideMed Veterinary Solutions"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "38ch",
      color: "oklch(0.97 0.008 80 / 0.7)",
      fontSize: 14.5,
      lineHeight: 1.55,
      margin: 0
    }
  }, "The complete platform for veterinary sports medicine \u2014 from arthroscopy through gait analysis and recovery."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      gap: 16,
      fontFamily: "var(--f-mono)",
      fontSize: 11.5,
      color: "oklch(0.97 0.008 80 / 0.55)",
      letterSpacing: "0.08em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "DELAWARE, USA"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "EST. 2025"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Catalog"), /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    onClick: e => {
      e.preventDefault();
      setRoute("products");
    }
  }, "Visualization"), /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    onClick: e => {
      e.preventDefault();
      setRoute("products");
    }
  }, "Surgical power"), /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    onClick: e => {
      e.preventDefault();
      setRoute("products");
    }
  }, "Instruments"), /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    onClick: e => {
      e.preventDefault();
      setRoute("products");
    }
  }, "Diagnostics"), /*#__PURE__*/React.createElement("a", {
    href: "#/products",
    onClick: e => {
      e.preventDefault();
      setRoute("products");
    }
  }, "Recovery"), /*#__PURE__*/React.createElement("a", {
    href: "https://invictosortho.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: "oklch(0.97 0.008 80 / 0.55)"
    }
  }, "TPLO plates \u2192 InVictos \u2197")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#/team",
    onClick: e => {
      e.preventDefault();
      setRoute("team");
    }
  }, "Team"), /*#__PURE__*/React.createElement("a", {
    href: "#/solutions",
    onClick: e => {
      e.preventDefault();
      setRoute("solutions");
    }
  }, "Solutions"), /*#__PURE__*/React.createElement("a", {
    href: "#/education",
    onClick: e => {
      e.preventDefault();
      setRoute("education");
    }
  }, "Education"), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      setRoute("contact");
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Connect"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:Ally@StrideMedVet.com"
  }, "Ally@StrideMedVet.com"), /*#__PURE__*/React.createElement("a", {
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      setRoute("contact");
    }
  }, "Request a demo"), /*#__PURE__*/React.createElement("a", {
    href: "#/education",
    onClick: e => {
      e.preventDefault();
      setRoute("education");
    }
  }, "Newsletter"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Instagram"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bot"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 StrideMed Veterinary Solutions. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Accessibility")))));
}

// ============================================================
// SectionHead
// ============================================================
function SectionHead({
  eyebrow,
  num,
  title,
  sub,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-col"
  }, num && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, num), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, eyebrow)), /*#__PURE__*/React.createElement("div", {
    className: "title-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display-l"
  }, title), action), sub && /*#__PURE__*/React.createElement("p", null, sub)));
}

// ============================================================
// Product Modal
// ============================================================
function ProductModal({
  product,
  onClose,
  setRoute
}) {
  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  if (!product) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose,
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      minHeight: 540
    },
    className: "modal-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "carbon-fine",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 56,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      left: 24,
      fontFamily: "var(--f-mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      color: "oklch(0.97 0.008 80 / 0.5)",
      textTransform: "uppercase"
    }
  }, product.num), /*#__PURE__*/React.createElement("img", {
    src: product.img,
    alt: product.name,
    style: {
      maxWidth: "100%",
      maxHeight: 380,
      objectFit: "contain",
      filter: "drop-shadow(0 30px 50px oklch(0 0 0 / 0.5))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 20,
      left: 24,
      fontFamily: "var(--f-mono)",
      fontSize: 10.5,
      letterSpacing: "0.12em",
      color: "oklch(0.97 0.008 80 / 0.4)",
      textTransform: "uppercase"
    }
  }, "STRIDEMED \xB7 ", product.cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 40px 32px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, product.cat), /*#__PURE__*/React.createElement("h3", {
    className: "display-m",
    style: {
      margin: 0
    }
  }, product.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate)",
      fontSize: 15,
      lineHeight: 1.55,
      margin: "12px 0 24px"
    }
  }, product.blurb), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Specifications"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, product.specs.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    className: "spec-row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Indications"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 24
    }
  }, product.use.map((u, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "pill"
  }, u))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-arrow",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      onClose();
      setRoute("contact");
    }
  }, "Request a quote"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost-dark",
    href: "#/education",
    onClick: e => {
      e.preventDefault();
      onClose();
      setRoute("education");
    }
  }, "Watch in use")))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
          @media (max-width: 800px) {
            .modal-grid { grid-template-columns: 1fr !important; }
            .modal-grid > div:first-child { padding: 32px !important; min-height: 280px; }
          }
        `
    }
  })));
}

// ============================================================
// Reveal-on-scroll wrapper
// ============================================================
function Reveal({
  children,
  delay = 0,
  style = {}
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.12
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "reveal " + (shown ? "in" : ""),
    style: style
  }, children);
}
Object.assign(window, {
  Nav,
  Footer,
  SectionHead,
  ProductModal,
  Reveal
});

/* global React, PRODUCTS, PROCEDURES, PARTNERS, TEAM, SectionHead, Reveal */
const {
  useState: useStateH,
  useEffect: useEffectH,
  useRef: useRefH
} = React;
function HomePage({
  setRoute,
  openProduct
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroSection, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(ValuePropSection, null), /*#__PURE__*/React.createElement(FeaturedProductsSection, {
    openProduct: openProduct,
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(ProceduresSection, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(GaitPreviewSection, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(PartnersSection, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(TestimonialSection, null), /*#__PURE__*/React.createElement(CTAFooterSection, {
    setRoute: setRoute
  }));
}

// ============================================================
// HERO
// ============================================================
function HeroSection({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero carbon grid-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--f-mono)",
      fontSize: 11.5,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, "VETERINARY SPORTS MEDICINE \xB7 PLATFORM v2026")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-headline"
  }, "Stride into the", /*#__PURE__*/React.createElement("br", null), "future of veterinary", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "sports medicine.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "The first end-to-end platform purpose-built for the sports medicine specialist. Arthroscopy, gait analysis, and recovery \u2014 sourced, integrated, and supported from a single partner."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-light btn-arrow",
    href: "#/products",
    onClick: e => {
      e.preventDefault();
      setRoute("products");
    }
  }, "Explore the platform"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      setRoute("contact");
    }
  }, "Request a demo")), /*#__PURE__*/React.createElement("div", {
    className: "hero-metrics"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, /*#__PURE__*/React.createElement("em", null, "1.9"), "mm"), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Smallest scope \xB7 diameter")), /*#__PURE__*/React.createElement("div", {
    className: "hero-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "120", /*#__PURE__*/React.createElement("em", null, "Hz")), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Gait analysis \xB7 sample rate")), /*#__PURE__*/React.createElement("div", {
    className: "hero-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "5", /*#__PURE__*/React.createElement("em", null, "+")), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Specialty partner brands")), /*#__PURE__*/React.createElement("div", {
    className: "hero-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "1", /*#__PURE__*/React.createElement("em", null, ".")), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Source for the entire stack")))), /*#__PURE__*/React.createElement("div", {
    className: "lens"
  }));
}

// ============================================================
// Value prop strip — three pillars
// ============================================================
function ValuePropSection() {
  const pillars = [{
    n: "001",
    t: "See",
    blurb: "Microscale visualization, color-accurate imaging, and instrumentation purpose-built for canine joints."
  }, {
    n: "002",
    t: "Measure",
    blurb: "Objective, repeatable gait data — the same outcomes language used in human sports medicine."
  }, {
    n: "003",
    t: "Recover",
    blurb: "Post-op compression, orthotics and bracing that replace the cone and accelerate functional return."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream hairline-bot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 0,
      borderTop: "1px solid var(--hairline)"
    },
    className: "pillars-grid"
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "44px 32px 44px 0",
      borderRight: i < pillars.length - 1 ? "1px solid var(--hairline)" : "none",
      paddingLeft: i === 0 ? 0 : 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 12
    }
  }, p.n), /*#__PURE__*/React.createElement("div", {
    className: "display-m",
    style: {
      margin: "0 0 12px"
    }
  }, p.t, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--slate)",
      fontSize: 15.5,
      lineHeight: 1.5,
      maxWidth: "36ch"
    }
  }, p.blurb)))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
          @media (max-width: 800px) {
            .pillars-grid { grid-template-columns: 1fr !important; }
            .pillars-grid > div { border-right: none !important; border-bottom: 1px solid var(--hairline); padding-left: 0 !important; }
          }
        `
    }
  })));
}

// ============================================================
// Featured products
// ============================================================
function FeaturedProductsSection({
  openProduct,
  setRoute
}) {
  // Curated featured set across categories
  const featured = [PRODUCTS.find(p => p.id === "corex-4k"), PRODUCTS.find(p => p.id === "or-160"), PRODUCTS.find(p => p.id === "slimvue-usb"), PRODUCTS.find(p => p.id === "mini-arthroscope"), PRODUCTS.find(p => p.id === "coredrive"), PRODUCTS.find(p => p.id === "tag-graspers"), PRODUCTS.find(p => p.id === "gaitrite"), PRODUCTS.find(p => p.id === "recovery-suit")].filter(Boolean);
  const trackRef = useRefH(null);
  const [idx, setIdx] = useStateH(0);
  const [maxIdx, setMaxIdx] = useStateH(0);

  // Recompute how many "pages" the carousel has based on track scroll width
  useEffectH(() => {
    const compute = () => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector(".pc-slide");
      if (!card) return;
      const cardW = card.getBoundingClientRect().width + 18; // gap
      const visible = Math.max(1, Math.floor((el.clientWidth + 18) / cardW));
      setMaxIdx(Math.max(0, featured.length - visible));
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [featured.length]);

  // Sync idx with scroll position
  useEffectH(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector(".pc-slide");
      if (!card) return;
      const cardW = card.getBoundingClientRect().width + 18;
      setIdx(Math.round(el.scrollLeft / cardW));
    };
    el.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const goTo = n => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".pc-slide");
    if (!card) return;
    const cardW = card.getBoundingClientRect().width + 18;
    const clamped = Math.max(0, Math.min(maxIdx, n));
    el.scrollTo({
      left: clamped * cardW,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "\xA7 02",
    eyebrow: "Equipment catalog",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "A complete stack,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      className: "italic-serif",
      style: {
        color: "var(--teal-3)"
      }
    }, "specialty-built.")),
    sub: "Each product is selected for the realities of canine sports medicine \u2014 joints smaller than human pediatric, anatomy that demands sub-2mm instrumentation, and clinics that need to move fast.",
    action: /*#__PURE__*/React.createElement("a", {
      className: "btn btn-ghost-dark btn-arrow",
      href: "#/products",
      onClick: e => {
        e.preventDefault();
        setRoute("products");
      }
    }, "View all products")
  }), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "pc-carousel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-carousel-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-counter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, String(Math.min(idx + 1, featured.length)).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, String(featured.length).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
    className: "pc-carousel-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pc-nav-btn",
    "aria-label": "Previous",
    onClick: () => goTo(idx - 1),
    disabled: idx === 0
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    className: "pc-nav-btn",
    "aria-label": "Next",
    onClick: () => goTo(idx + 1),
    disabled: idx >= maxIdx
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "pc-carousel-track",
    ref: trackRef
  }, featured.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.id,
    className: "product-card pc-slide",
    onClick: () => openProduct(p)
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-cat"
  }, p.cat), /*#__PURE__*/React.createElement("h3", {
    className: "pc-title"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "pc-sub"
  }, p.sub), /*#__PURE__*/React.createElement("div", {
    className: "pc-img-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "pc-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pc-num"
  }, p.num), /*#__PURE__*/React.createElement("span", {
    className: "pc-arrow"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "pc-carousel-dots"
  }, Array.from({
    length: maxIdx + 1
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "pc-dot " + (i === idx ? "active" : ""),
    "aria-label": `Go to page ${i + 1}`,
    onClick: () => goTo(i)
  })))))));
}

// ============================================================
// Procedures
// ============================================================
function ProceduresSection({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section surf-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "\xA7 03",
    eyebrow: "Solutions by procedure",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Bundled for the", /*#__PURE__*/React.createElement("br", null), "work you actually ", /*#__PURE__*/React.createElement("em", {
      className: "italic-serif",
      style: {
        color: "var(--teal-3)"
      }
    }, "do.")),
    sub: "Skip the SKU hunt. Each procedure ships as a kit \u2014 visualization, power, instruments and the disposables you need.",
    action: /*#__PURE__*/React.createElement("a", {
      className: "btn btn-ghost-dark btn-arrow",
      href: "#/solutions",
      onClick: e => {
        e.preventDefault();
        setRoute("solutions");
      }
    }, "All procedures")
  }), /*#__PURE__*/React.createElement("div", null, PROCEDURES.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.num,
    className: "proc-card",
    onClick: () => setRoute("solutions")
  }, /*#__PURE__*/React.createElement("div", {
    className: "pn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, p.num), /*#__PURE__*/React.createElement("span", null, "PROC \xB7 ", p.num)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--slate)",
      fontSize: 14.5,
      marginTop: 6,
      maxWidth: "58ch"
    }
  }, p.blurb)), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, p.time), /*#__PURE__*/React.createElement("span", null, p.port), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-3)"
    }
  }, "view kit \u2192")))))));
}

// ============================================================
// Gait preview — interactive
// ============================================================
function GaitPreviewSection({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section carbon grid-overlay",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "\xA7 04",
    eyebrow: /*#__PURE__*/React.createElement("span", {
      className: "eyebrow on-dark"
    }, "Diagnostics \xB7 live"),
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cream)"
      }
    }, "Objective lameness, ", /*#__PURE__*/React.createElement("em", {
      className: "italic-serif",
      style: {
        color: "var(--teal-2)"
      }
    }, "quantified.")),
    sub: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "oklch(0.97 0.008 80 / 0.7)"
      }
    }, "The GAITRite walkway captures 13,824 pressure sensors at 120Hz \u2014 the same standard used in human sports medicine. Here's what 30 seconds of walking looks like."),
    action: /*#__PURE__*/React.createElement("a", {
      className: "btn btn-ghost btn-arrow",
      href: "#/solutions",
      onClick: e => {
        e.preventDefault();
        setRoute("solutions");
      }
    }, "How it works")
  }), /*#__PURE__*/React.createElement(GaitViz, null)));
}

// Interactive gait viz — animated paw prints crossing a walkway
function GaitViz() {
  const [phase, setPhaseG] = useStateH("post"); // 'pre' = lame, 'post' = recovered
  const [hoverPaw, setHoverPaw] = useStateH(null);

  // GLS values (Gait Limb Symmetry)
  const data = phase === "pre" ? {
    lf: 85,
    rf: 115,
    lh: 100,
    rh: 100,
    gls: 0.74,
    asym: "+26%",
    stride: "0.78s",
    speed: "1.04 m/s"
  } : {
    lf: 100,
    rf: 100,
    lh: 98,
    rh: 102,
    gls: 0.96,
    asym: "+2%",
    stride: "0.62s",
    speed: "1.32 m/s"
  };
  const paws = [{
    id: "lf",
    x: 14,
    y: 30,
    color: "var(--crit)",
    label: "Left fore"
  }, {
    id: "rf",
    x: 26,
    y: 70,
    color: "var(--stone)",
    label: "Right fore"
  }, {
    id: "lh",
    x: 42,
    y: 28,
    color: "var(--teal-2)",
    label: "Left hind"
  }, {
    id: "rh",
    x: 56,
    y: 72,
    color: "var(--good)",
    label: "Right hind"
  }, {
    id: "lf2",
    x: 70,
    y: 30,
    color: "var(--crit)",
    label: "Left fore"
  }, {
    id: "rf2",
    x: 82,
    y: 70,
    color: "var(--stone)",
    label: "Right fore"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 32,
      alignItems: "start"
    },
    className: "gait-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "oklch(0.20 0.025 240)",
      border: "1px solid oklch(1 0 0 / 0.10)",
      borderRadius: "var(--r-4)",
      padding: 28,
      position: "relative",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow on-dark"
  }, "Pressure walkway \xB7 24 ft"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: 4,
      background: "oklch(1 0 0 / 0.06)",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPhaseG("pre"),
    style: {
      padding: "6px 14px",
      borderRadius: 999,
      background: phase === "pre" ? "var(--cream)" : "transparent",
      color: phase === "pre" ? "var(--ink)" : "var(--cream)",
      fontSize: 12,
      fontWeight: 500,
      fontFamily: "var(--f-mono)",
      letterSpacing: "0.06em"
    }
  }, "PRE-OP"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPhaseG("post"),
    style: {
      padding: "6px 14px",
      borderRadius: 999,
      background: phase === "post" ? "var(--cream)" : "transparent",
      color: phase === "post" ? "var(--ink)" : "var(--cream)",
      fontSize: 12,
      fontWeight: 500,
      fontFamily: "var(--f-mono)",
      letterSpacing: "0.06em"
    }
  }, "POST-OP \xB7 8 WK"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 200,
      background: "linear-gradient(180deg, oklch(0.18 0.02 240), oklch(0.14 0.02 240))",
      borderRadius: 8,
      overflow: "hidden",
      border: "1px solid oklch(1 0 0 / 0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(to right, oklch(1 0 0 / 0.05) 1px, transparent 1px)",
      backgroundSize: "8.33% 100%"
    }
  }), paws.map((p, i) => {
    const id = p.id.replace("2", "");
    const val = data[id];
    const sizeScale = val / 100;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onMouseEnter: () => setHoverPaw(id),
      onMouseLeave: () => setHoverPaw(null),
      style: {
        position: "absolute",
        left: `${p.x}%`,
        top: `${p.y}%`,
        transform: `translate(-50%, -50%) scale(${0.6 + sizeScale * 0.5})`,
        transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transitionDelay: `${i * 60}ms`,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(PawIcon, {
      color: p.color,
      active: hoverPaw === id
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      fontFamily: "var(--f-mono)",
      fontSize: 11,
      color: "oklch(0.97 0.008 80 / 0.4)",
      letterSpacing: "0.08em"
    }
  }, "\u2192 24 ft")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      gap: 18,
      flexWrap: "wrap"
    }
  }, [{
    id: "lf",
    c: "var(--crit)",
    label: "LF"
  }, {
    id: "rf",
    c: "var(--stone)",
    label: "RF"
  }, {
    id: "lh",
    c: "var(--teal-2)",
    label: "LH"
  }, {
    id: "rh",
    c: "var(--good)",
    label: "RH"
  }].map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--cream)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: l.c
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--f-mono)",
      letterSpacing: "0.06em"
    }
  }, l.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "oklch(0.97 0.008 80 / 0.5)",
      fontFamily: "var(--f-mono)",
      fontSize: 12
    }
  }, data[l.id], "%"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MetricRow, {
    k: "GLS Index",
    v: data.gls.toFixed(2),
    target: ">0.90",
    good: data.gls >= 0.9
  }), /*#__PURE__*/React.createElement(MetricRow, {
    k: "Asymmetry",
    v: data.asym,
    target: "<5%",
    good: Math.abs(parseInt(data.asym)) < 5
  }), /*#__PURE__*/React.createElement(MetricRow, {
    k: "Stride time",
    v: data.stride,
    target: "0.5\u20130.7s",
    good: parseFloat(data.stride) < 0.7
  }), /*#__PURE__*/React.createElement(MetricRow, {
    k: "Walking speed",
    v: data.speed,
    target: ">1.2 m/s",
    good: parseFloat(data.speed) > 1.2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "16px 18px",
      background: data.gls >= 0.9 ? "oklch(0.66 0.12 150 / 0.10)" : "oklch(0.60 0.20 25 / 0.10)",
      border: `1px solid ${data.gls >= 0.9 ? "oklch(0.66 0.12 150 / 0.4)" : "oklch(0.60 0.20 25 / 0.4)"}`,
      borderRadius: 10,
      color: "var(--cream)",
      fontSize: 13.5,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--f-mono)",
      fontSize: 11,
      letterSpacing: "0.10em",
      color: data.gls >= 0.9 ? "var(--good)" : "var(--crit)",
      marginBottom: 6
    }
  }, data.gls >= 0.9 ? "● WITHIN CLINICAL TARGET" : "● LAMENESS DETECTED · LEFT FORE"), data.gls >= 0.9 ? "Symmetry restored. Patient cleared for graduated return-to-activity protocol." : "Significant weight shift away from left fore. Recommend orthopedic evaluation and imaging.")), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        @media (max-width: 900px) { .gait-grid { grid-template-columns: 1fr !important; } }
      `
    }
  }));
}
function MetricRow({
  k,
  v,
  target,
  good
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto auto",
      gap: 12,
      alignItems: "baseline",
      padding: "12px 14px",
      background: "oklch(1 0 0 / 0.03)",
      border: "1px solid oklch(1 0 0 / 0.08)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--f-mono)",
      fontSize: 11,
      letterSpacing: "0.10em",
      color: "oklch(0.97 0.008 80 / 0.55)",
      textTransform: "uppercase"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--f-display)",
      fontSize: 22,
      fontWeight: 500,
      color: good ? "var(--good)" : "var(--crit)",
      letterSpacing: "-0.015em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--f-mono)",
      fontSize: 11,
      color: "oklch(0.97 0.008 80 / 0.4)"
    }
  }, target));
}
function PawIcon({
  color = "currentColor",
  active
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    style: {
      filter: active ? `drop-shadow(0 0 12px ${color})` : "none",
      transition: "filter 0.2s"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "13",
    r: "3",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "9",
    r: "3",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "25",
    cy: "13",
    r: "3",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "29",
    cy: "20",
    r: "2.5",
    fill: color
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "18",
    cy: "23",
    rx: "7",
    ry: "6",
    fill: color
  }));
}

// ============================================================
// Partners — refreshed: bigger tiles, framed logos, more meta
// ============================================================
function PartnersSection({
  setRoute
}) {
  const PARTNER_META = {
    "Novara Surgical Technologies": {
      role: "Visualization & energy",
      pillars: ["CoreX™ 4K ICG tower", "OR-160 system", "CoreDRIVE™ shaver"],
      since: "Exclusive vet partner",
      hq: "USA"
    },
    "GAITRite®": {
      role: "Diagnostics · gait",
      pillars: ["Pressure walkway", "120 Hz capture", "GAITFour Canine"],
      since: "Gold standard since 1998",
      hq: "USA"
    },
    "DogLeggs®": {
      role: "Recovery garments",
      pillars: ["Compression suits", "Shoulder hobbles", "Custom orthotics"],
      since: "Trusted by VOSM",
      hq: "USA"
    },
    "T.A.G. Medical": {
      role: "Hand instruments",
      pillars: ["Graspers", "Probes", "Meniscal punches"],
      since: "Veterinary-specific tooling",
      hq: "Israel · USA"
    },
    "InVictos Orthopedics": {
      role: "TPLO plates & implants",
      pillars: ["TPLO plates", "Orthopedic implants", "Canine-specific"],
      since: "Recommended partner",
      hq: "USA"
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "\xA7 05",
    eyebrow: "Partner network",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Best-in-class brands,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      className: "italic-serif",
      style: {
        color: "var(--teal-3)"
      }
    }, "one phone number.")),
    sub: "We've assembled the manufacturers your colleagues already trust \u2014 and we own the integration so you don't have to.",
    action: /*#__PURE__*/React.createElement("a", {
      className: "btn btn-ghost-dark btn-arrow",
      href: "#/products",
      onClick: e => {
        e.preventDefault();
        setRoute("products");
      }
    }, "Browse the catalog")
  }), /*#__PURE__*/React.createElement("div", {
    className: "partners"
  }, PARTNERS.map(p => {
    const meta = PARTNER_META[p.name] || {};
    const Tile = p.url ? "a" : "div";
    const tileProps = p.url ? {
      href: p.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "partner-tile partner-tile-link"
    } : {
      className: "partner-tile"
    };
    return /*#__PURE__*/React.createElement(Tile, _extends({
      key: p.name
    }, tileProps), /*#__PURE__*/React.createElement("span", {
      className: "pt-num"
    }, p.num), p.url && /*#__PURE__*/React.createElement("span", {
      className: "pt-ext",
      "aria-hidden": "true"
    }, "\u2197"), /*#__PURE__*/React.createElement("div", {
      className: "logo-frame"
    }, /*#__PURE__*/React.createElement("img", {
      src: p.logo,
      alt: p.name
    })), /*#__PURE__*/React.createElement("div", {
      className: "pt-body"
    }, meta.role && /*#__PURE__*/React.createElement("div", {
      className: "role"
    }, meta.role), /*#__PURE__*/React.createElement("h3", {
      className: "name"
    }, p.name), /*#__PURE__*/React.createElement("p", {
      className: "desc"
    }, p.desc), meta.pillars && /*#__PURE__*/React.createElement("div", {
      className: "meta-row"
    }, meta.pillars.map((pl, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }, "\xB7"), /*#__PURE__*/React.createElement("span", null, pl))))));
  }))));
}

// ============================================================
// Mission statement (replaces fake testimonial)
// ============================================================
function TestimonialSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream hairline-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 64,
      alignItems: "start"
    },
    className: "testi-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Our principle"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginTop: 8
    }
  }, "\xA7 06")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "quote"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--stone)"
    }
  }, "\""), "A sports medicine specialist should spend their time on patients,", /*#__PURE__*/React.createElement("em", null, " not procurement."), " StrideMed exists to consolidate the equipment, the training and the support \u2014 so one phone call replaces six vendor contracts.", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--stone)"
    }
  }, "\"")), /*#__PURE__*/React.createElement("div", {
    className: "quote-attrib"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    style: {
      backgroundImage: "url(https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f80d2dd3d5300937fe5_team-sherman.jpg)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Dr. Sherman Canapp Jr., DVM, MS, DACVS, DACVSMR"), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, "Co-Founder & Chief Medical Officer \xB7 StrideMed"))))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
          @media (max-width: 800px) { .testi-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }
        `
    }
  })));
}

// ============================================================
// CTA footer
// ============================================================
function CTAFooterSection({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section carbon grid-overlay",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 2,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow on-dark",
    style: {
      marginBottom: 24
    }
  }, "\xA7 07 \xB7 Start the conversation"), /*#__PURE__*/React.createElement("h2", {
    className: "display-l",
    style: {
      color: "var(--cream)",
      margin: "0 auto",
      maxWidth: "18ch"
    }
  }, "Stand up a sports medicine service ", /*#__PURE__*/React.createElement("em", {
    className: "italic-serif",
    style: {
      color: "var(--teal-2)"
    }
  }, "in 90 days.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "oklch(0.97 0.008 80 / 0.7)",
      maxWidth: "56ch",
      margin: "24px auto 36px",
      fontSize: 17,
      lineHeight: 1.5
    }
  }, "From scoping the room to first arthroscopy on a live patient \u2014 we handle equipment, training and integration."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-light btn-arrow",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      setRoute("contact");
    }
  }, "Request a demo"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#/products",
    onClick: e => {
      e.preventDefault();
      setRoute("products");
    }
  }, "Browse products"))));
}
Object.assign(window, {
  HomePage
});

/* global React, PRODUCTS, PROCEDURES, TEAM, RESOURCES, SectionHead, Reveal */
const {
  useState: useStateP,
  useEffect: useEffectP,
  useMemo: useMemoP
} = React;

// ============================================================
// PRODUCTS PAGE — clean, grouped, uniform cards
// ============================================================
function ProductsPage({
  openProduct,
  setRoute
}) {
  const CAT_META = {
    "Visualization": {
      code: "VS",
      desc: "Towers, scopes and imaging systems for the sports-medicine OR."
    },
    "Power": {
      code: "PW",
      desc: "Shavers, energy and ablation — the cutting tools behind the procedure."
    },
    "Instruments": {
      code: "IN",
      desc: "Veterinary-specific hand instruments, scaled for canine joints."
    },
    "Diagnostics": {
      code: "DX",
      desc: "Objective lameness and gait quantification — before and after."
    },
    "Recovery": {
      code: "RC",
      desc: "Post-op compression, stabilization and orthotic support."
    }
  };
  const allCats = Array.from(new Set(PRODUCTS.map(p => p.cat)));
  const [active, setActive] = useStateP("All");
  const cats = ["All", ...allCats];
  const groups = (active === "All" ? allCats : [active]).map(cat => ({
    cat,
    items: PRODUCTS.filter(p => p.cat === cat)
  })).filter(g => g.items.length > 0);
  const totalShown = groups.reduce((n, g) => n + g.items.length, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "section-tight surf-cream hairline-bot",
    style: {
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-hero-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 12
    }
  }, "\xA7 Catalog"), /*#__PURE__*/React.createElement("h1", {
    className: "display-l",
    style: {
      margin: 0,
      maxWidth: "18ch"
    }
  }, "Every instrument we offer, ", /*#__PURE__*/React.createElement("em", {
    className: "italic-serif",
    style: {
      color: "var(--teal-3)"
    }
  }, "specced and ready.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "60ch",
      margin: "24px 0 0",
      color: "var(--slate)",
      fontSize: 17,
      lineHeight: 1.5
    }
  }, "Click any product to see specs, indications and clinical use. Bundles available for stifle, elbow, shoulder and gait analysis suites.")), /*#__PURE__*/React.createElement("div", {
    className: "prod-hero-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, String(PRODUCTS.length).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Products")), /*#__PURE__*/React.createElement("div", {
    className: "prod-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, String(allCats.length).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Categories")), /*#__PURE__*/React.createElement("div", {
    className: "prod-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "04"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Partners")))))), /*#__PURE__*/React.createElement("div", {
    className: "prod-filterbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container prod-filterbar-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-filter-chips"
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setActive(c),
    className: "prod-chip " + (active === c ? "active" : "")
  }, c !== "All" && /*#__PURE__*/React.createElement("span", {
    className: "prod-chip-code"
  }, CAT_META[c]?.code), /*#__PURE__*/React.createElement("span", null, c), /*#__PURE__*/React.createElement("span", {
    className: "prod-chip-count"
  }, c === "All" ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c).length)))), /*#__PURE__*/React.createElement("div", {
    className: "prod-shown"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, String(totalShown).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--stone)"
    }
  }, "shown")))), /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream",
    style: {
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: g.cat,
    className: "prod-group",
    style: {
      marginTop: gi === 0 ? 0 : 80
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "prod-group-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-group-id"
  }, CAT_META[g.cat]?.code), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "prod-group-title"
  }, g.cat), /*#__PURE__*/React.createElement("p", {
    className: "prod-group-desc"
  }, CAT_META[g.cat]?.desc)), /*#__PURE__*/React.createElement("div", {
    className: "prod-group-count mono"
  }, String(g.items.length).padStart(2, "0"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--stone)"
    }
  }, "/ ", String(PRODUCTS.length).padStart(2, "0")))), /*#__PURE__*/React.createElement("div", {
    className: "prod-grid-uniform"
  }, g.items.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.id,
    className: "prod-card-mini",
    onClick: () => openProduct(p)
  }, /*#__PURE__*/React.createElement("div", {
    className: "pcm-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcm-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pcm-num mono"
  }, p.num), /*#__PURE__*/React.createElement("h3", {
    className: "pcm-title"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "pcm-sub"
  }, p.sub), /*#__PURE__*/React.createElement("div", {
    className: "pcm-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pcm-cta"
  }, "View specs"), /*#__PURE__*/React.createElement("span", {
    className: "pcm-arrow"
  }, "\u2192")))))))))), /*#__PURE__*/React.createElement("section", {
    className: "section surf-bone hairline-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "\xA7 Guidance",
    eyebrow: "Buyer's framework",
    title: "Not sure where to start?",
    sub: "Three packages built for the way clinics actually grow into sports medicine."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    },
    className: "buyers-grid"
  }, [{
    t: "Tablet Arthroscopy",
    price: "Entry-level",
    desc: "Plug-and-play USB visualization for traveling surgeons or clinics testing the waters.",
    items: ["SlimVue™ USB Rigid Endoscope (1.3 / 1.9 mm)", "Three working lengths (67 / 110 / 175 mm)", "Direct USB to laptop or tablet", "Remote onboarding training", "12-month support"]
  }, {
    t: "Arthroscopy Starter",
    price: "Full surgical",
    desc: "Everything needed to run stifle, elbow and shoulder arthroscopy in a sports-medicine OR.",
    items: ["CoreX™ 4K ICG Visualization System", "1.9 / 2.4 / 2.7 mm rigid arthroscope set", "Sheath & trocar sets", "CoreDRIVE™ Shaver & Resection System", "TAG graspers + L-probe + meniscal punch", "On-site training"]
  }, {
    t: "Full Sports Med Suite",
    price: "Custom",
    desc: "The complete platform — visualization, diagnostics, recovery — and ongoing clinical support.",
    items: ["Everything above", "GAITRite® walkway + remote training", "DogLeggs® recovery suit & hobble bundles", "RF ablation system", "Quarterly clinical reviews", "Outcome benchmarking"]
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--cream)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--r-4)",
      padding: "32px 28px",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    className: "pill teal",
    style: {
      position: "absolute",
      top: 16,
      right: 16
    }
  }, "Most popular"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "PKG \xB7 0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "display-m",
    style: {
      margin: "12px 0 8px"
    }
  }, b.t), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 14,
      color: "var(--teal-3)",
      marginBottom: 18,
      letterSpacing: "0.04em"
    }
  }, b.price), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate)",
      fontSize: 14.5,
      lineHeight: 1.5,
      margin: "0 0 20px"
    }
  }, b.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 24px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, b.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      display: "flex",
      gap: 10,
      fontSize: 14,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--teal-3)",
      fontFamily: "var(--f-mono)"
    }
  }, "+"), /*#__PURE__*/React.createElement("span", null, it)))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost-dark btn-arrow",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      setRoute("contact");
    },
    style: {
      marginTop: "auto"
    }
  }, "Get pricing")))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
            @media (max-width: 900px) { .buyers-grid { grid-template-columns: 1fr !important; } }
          `
    }
  }))));
}
// ============================================================
// SOLUTIONS PAGE
// ============================================================
function SolutionsPage({
  setRoute,
  openProduct
}) {
  const [active, setActive] = useStateP(0);
  const proc = PROCEDURES[active];

  // Tower callouts visualization (recreating the labeled diagram idea)
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "section-tight surf-cream hairline-bot",
    style: {
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 12
    }
  }, "\xA7 Solutions"), /*#__PURE__*/React.createElement("h1", {
    className: "display-l",
    style: {
      margin: 0,
      maxWidth: "18ch"
    }
  }, "Procedure-ready ", /*#__PURE__*/React.createElement("em", {
    className: "italic-serif",
    style: {
      color: "var(--teal-3)"
    }
  }, "kits.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "60ch",
      margin: "24px 0 0",
      color: "var(--slate)",
      fontSize: 17,
      lineHeight: 1.5
    }
  }, "Each kit is configured for a specific workflow \u2014 visualization, power, instruments, recovery \u2014 bundled with training and ongoing support."))), /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 48
    },
    className: "proc-detail-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "sticky",
      top: 80,
      alignSelf: "start"
    }
  }, PROCEDURES.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.num,
    onClick: () => setActive(i),
    style: {
      textAlign: "left",
      padding: "16px 18px",
      borderRadius: "var(--r-3)",
      background: active === i ? "var(--ink)" : "transparent",
      color: active === i ? "var(--cream)" : "var(--ink)",
      border: "1px solid " + (active === i ? "var(--ink)" : "var(--hairline)"),
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 14,
      alignItems: "center",
      transition: "all 0.18s ease",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--f-mono)",
      fontSize: 11.5,
      letterSpacing: "0.08em",
      color: active === i ? "var(--teal-2)" : "var(--stone)"
    }
  }, p.num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--f-display)",
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: "-0.01em"
    }
  }, p.name)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Procedure \xB7 ", proc.num), /*#__PURE__*/React.createElement("h2", {
    className: "display-l",
    style: {
      margin: "12px 0 16px"
    }
  }, proc.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate)",
      fontSize: 17,
      lineHeight: 1.55,
      marginBottom: 32
    }
  }, proc.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0,
      border: "1px solid var(--hairline)",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderRight: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "Approx. time"), /*#__PURE__*/React.createElement("div", {
    className: "display-m",
    style: {
      marginTop: 8
    }
  }, proc.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "Access"), /*#__PURE__*/React.createElement("div", {
    className: "display-m",
    style: {
      marginTop: 8
    }
  }, proc.port))), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Included in the kit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginBottom: 32
    }
  }, proc.items.map((item, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: "16px 18px",
      background: "var(--cream-2)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 6,
      background: "var(--ink)",
      color: "var(--teal-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--f-mono)",
      fontSize: 12
    }
  }, String(j + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, item)), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11.5,
      color: "var(--stone)",
      letterSpacing: "0.08em"
    }
  }, "INCLUDED")))), proc.partner && /*#__PURE__*/React.createElement("a", {
    href: proc.partner.url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: 16,
      alignItems: "center",
      padding: "16px 20px",
      border: "1px solid var(--hairline)",
      borderLeft: "3px solid var(--teal-2)",
      background: "var(--cream)",
      textDecoration: "none",
      color: "inherit",
      marginBottom: 32,
      transition: "background 0.18s ease, border-color 0.18s ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "white";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--cream)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10.5,
      letterSpacing: "0.1em",
      color: "var(--stone)",
      textTransform: "uppercase"
    }
  }, proc.partner.kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: "var(--slate)",
      lineHeight: 1.4
    }
  }, proc.partner.blurb), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11.5,
      letterSpacing: "0.08em",
      color: "var(--teal-3)",
      whiteSpace: "nowrap"
    }
  }, proc.partner.label, " \u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-arrow",
    href: "#/contact",
    onClick: e => {
      e.preventDefault();
      setRoute("contact");
    }
  }, "Request this kit"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost-dark",
    href: "#/education",
    onClick: e => {
      e.preventDefault();
      setRoute("education");
    }
  }, "Watch the procedure")))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
            @media (max-width: 900px) { .proc-detail-grid { grid-template-columns: 1fr !important; }
              .proc-detail-grid > div:first-child { position: relative !important; top: 0 !important; } }
          `
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section carbon grid-overlay",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "\xA7 Reference",
    eyebrow: /*#__PURE__*/React.createElement("span", {
      className: "eyebrow on-dark"
    }, "Tower architecture"),
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cream)"
      }
    }, "Inside the ", /*#__PURE__*/React.createElement("em", {
      className: "italic-serif",
      style: {
        color: "var(--teal-2)"
      }
    }, "arthroscopy stack.")),
    sub: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "oklch(0.97 0.008 80 / 0.7)"
      }
    }, "What's in a sports-medicine OR \u2014 and how each piece works with the others.")
  }), /*#__PURE__*/React.createElement(TowerDiagram, null))));
}
function TowerDiagram() {
  // Callouts aligned to the v2 tower image (https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f95d2dd3d530093816c_corex-tower-system.png).
  // Annotations mirror the Novara CoreX™ 4K ICG reference: 4 labels left, 3 right.
  const callouts = [{
    side: "left",
    y: 8,
    num: "01",
    title: "4K Surgical Display",
    desc: "Ultra-high-definition visualization designed to deliver sharp, consistent image clarity for precise performance throughout every procedure."
  }, {
    side: "right",
    y: 12,
    num: "02",
    title: "4K Camera Head",
    desc: "Precision-engineered camera head designed to deliver ultra-high-definition, stable imaging for clear and reliable visualization throughout procedures."
  }, {
    side: "left",
    y: 34,
    num: "03",
    title: "4K Camera Processor",
    desc: "Advanced video-processing system engineered to deliver ultra-high-definition imaging with precise color accuracy, low latency, and consistent performance across all procedures."
  }, {
    side: "right",
    y: 42,
    num: "04",
    title: "LED Light Source",
    desc: "High-intensity illumination system designed to provide bright, uniform light output with reliable performance and extended operational life."
  }, {
    side: "left",
    y: 60,
    num: "05",
    title: "Vincor™ Energy Platform",
    desc: "Multi-modality surgical energy system delivering controlled power for cutting, coagulation, and vessel sealing."
  }, {
    side: "right",
    y: 70,
    num: "06",
    title: "FlowTherm™ Insufflator",
    desc: "Intelligent insufflation designed to maintain stable pressure and consistent visualization."
  }, {
    side: "left",
    y: 86,
    num: "07",
    title: "CoreX™ Surgical Cart",
    desc: "Purpose-built surgical cart engineered to integrate and mobilize the complete arthroscopy platform."
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tower-figure"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tower-figure-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      color: "oklch(0.97 0.008 80 / 0.5)"
    }
  }, "CoreX\u2122 4K ICG Visualization System"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--f-mono)",
      fontSize: 11,
      letterSpacing: "0.10em",
      color: "oklch(0.97 0.008 80 / 0.4)",
      textTransform: "uppercase"
    }
  }, "VS \xB7 001 \u2014 Seven modules. One cart.")), /*#__PURE__*/React.createElement("div", {
    className: "tower-figure-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tower-col tower-col-left"
  }, callouts.filter(c => c.side === "left").map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "tower-callout left",
    style: {
      top: `${c.y}%`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-num"
  }, c.num), /*#__PURE__*/React.createElement("div", {
    className: "callout-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-title"
  }, c.title), /*#__PURE__*/React.createElement("div", {
    className: "callout-desc"
  }, c.desc)), /*#__PURE__*/React.createElement("div", {
    className: "callout-line callout-line-left"
  }), /*#__PURE__*/React.createElement("div", {
    className: "callout-dot"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tower-image-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/68f2a100098991f37d753c21/6a178f95d2dd3d530093816c_corex-tower-system.png",
    alt: "CoreX 4K ICG Visualization System",
    className: "tower-cart-img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tower-spec-strip"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Modules"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "7")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Footprint"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "24\u201D \xD7 22\u201D")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Power"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Single\xA0outlet")))), /*#__PURE__*/React.createElement("div", {
    className: "tower-col tower-col-right"
  }, callouts.filter(c => c.side === "right").map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "tower-callout right",
    style: {
      top: `${c.y}%`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-num"
  }, c.num), /*#__PURE__*/React.createElement("div", {
    className: "callout-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-title"
  }, c.title), /*#__PURE__*/React.createElement("div", {
    className: "callout-desc"
  }, c.desc)), /*#__PURE__*/React.createElement("div", {
    className: "callout-line callout-line-right"
  }), /*#__PURE__*/React.createElement("div", {
    className: "callout-dot"
  }))))));
}

// ============================================================
// TEAM PAGE
// ============================================================
function TeamPage({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "section-tight surf-cream hairline-bot",
    style: {
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 12
    }
  }, "\xA7 Team"), /*#__PURE__*/React.createElement("h1", {
    className: "display-l",
    style: {
      margin: 0,
      maxWidth: "20ch"
    }
  }, "Built by veterinary sports medicine, ", /*#__PURE__*/React.createElement("em", {
    className: "italic-serif",
    style: {
      color: "var(--teal-3)"
    }
  }, "for it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "60ch",
      margin: "24px 0 0",
      color: "var(--slate)",
      fontSize: 17,
      lineHeight: 1.5
    }
  }, "Three founders. One mission: make the gold-standard equipment, training and support available to every sports medicine specialist \u2014 not just the academic centers."))), /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "team-grid"
  }, TEAM.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "team-card"
  }, m.photo ? /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      backgroundImage: `url(${m.photo})`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, m.speciality)) : /*#__PURE__*/React.createElement("div", {
    className: "photo placeholder"
  }, /*#__PURE__*/React.createElement("span", null, "Photo \xB7 ", m.name)), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, m.role), /*#__PURE__*/React.createElement("h3", {
    className: "name"
  }, m.name), /*#__PURE__*/React.createElement("p", {
    className: "bio"
  }, m.bio), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--hairline)",
      paddingTop: 14,
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 8
    }
  }, "Credentials"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, m.creds.map((c, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "pill"
  }, c)))))))))), /*#__PURE__*/React.createElement("section", {
    className: "section surf-bone hairline-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: 48
    },
    className: "origin-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num"
  }, "\xA7 Origin"), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginTop: 8
    }
  }, "Why StrideMed exists")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "display-m",
    style: {
      margin: 0,
      maxWidth: "30ch"
    }
  }, "Three decades of canine sports medicine taught us one thing \u2014 clinics don't fail at the procedure. They fail at the platform."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate)",
      fontSize: 17,
      lineHeight: 1.55,
      marginTop: 24,
      maxWidth: "62ch"
    }
  }, "A vet who wants to do arthroscopy has to source the scope from one company, the tower from another, the instruments from a third, the diagnostics from a fourth, and the recovery garments from a fifth. Each contract negotiated independently. Each warranty managed separately. Training scattered across six conferences."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate)",
      fontSize: 17,
      lineHeight: 1.55,
      marginTop: 16,
      maxWidth: "62ch"
    }
  }, "StrideMed exists to consolidate that work \u2014 so the specialist can spend their time on patients, not procurement."))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
            @media (max-width: 800px) { .origin-grid { grid-template-columns: 1fr !important; } }
          `
    }
  }))));
}

// ============================================================
// EDUCATION PAGE
// ============================================================
function EducationPage({
  setRoute
}) {
  const [filter, setFilterE] = useStateP("All");
  const types = ["All", ...Array.from(new Set(RESOURCES.map(r => r.type)))];
  const filtered = filter === "All" ? RESOURCES : RESOURCES.filter(r => r.type === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "section-tight surf-cream hairline-bot",
    style: {
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 12
    }
  }, "\xA7 Education"), /*#__PURE__*/React.createElement("h1", {
    className: "display-l",
    style: {
      margin: 0,
      maxWidth: "20ch"
    }
  }, "Clinical resources for the ", /*#__PURE__*/React.createElement("em", {
    className: "italic-serif",
    style: {
      color: "var(--teal-3)"
    }
  }, "practicing specialist.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "60ch",
      margin: "24px 0 32px",
      color: "var(--slate)",
      fontSize: 17,
      lineHeight: 1.5
    }
  }, "Webinars, case studies and procedure walkthroughs \u2014 taught by working specialists. CE credit available through select partners."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, types.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setFilterE(t),
    className: "btn " + (filter === t ? "btn-ink" : "btn-ghost-dark"),
    style: {
      padding: "10px 18px",
      fontSize: 13.5
    }
  }, t))))), /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-grid"
  }, filtered.map((r, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "res-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb thumb-cf"
  }, (r.type === "Webinar" || r.type === "Video tutorial") && /*#__PURE__*/React.createElement("div", {
    className: "play"
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 16,
      padding: "5px 10px",
      borderRadius: 999,
      background: "oklch(0.16 0.02 240 / 0.7)",
      color: "var(--cream)",
      fontFamily: "var(--f-mono)",
      fontSize: 10.5,
      letterSpacing: "0.10em",
      textTransform: "uppercase",
      border: "1px solid oklch(1 0 0 / 0.15)"
    }
  }, r.type)), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, r.title), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, r.presenter), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, r.duration)))))))), /*#__PURE__*/React.createElement("section", {
    className: "section surf-bone hairline-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    },
    className: "news-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Stay current"), /*#__PURE__*/React.createElement("h2", {
    className: "display-m",
    style: {
      margin: "16px 0 16px",
      maxWidth: "20ch"
    }
  }, "One email a month, clinical only."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate)",
      fontSize: 16,
      lineHeight: 1.5
    }
  }, "New case studies, procedure videos and product releases. No sales pitches.")), /*#__PURE__*/React.createElement(NewsletterForm, null)), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
            @media (max-width: 800px) { .news-grid { grid-template-columns: 1fr !important; } }
          `
    }
  }))));
}
function NewsletterForm() {
  const [email, setEmailN] = useStateP("");
  const [submitted, setSubmittedN] = useStateP(false);
  return submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      background: "oklch(0.66 0.12 150 / 0.10)",
      border: "1px solid oklch(0.66 0.12 150 / 0.4)",
      borderRadius: "var(--r-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--good)",
      marginBottom: 8
    }
  }, "\u25CF Subscribed"), /*#__PURE__*/React.createElement("div", {
    className: "display-s",
    style: {
      margin: 0
    }
  }, "Welcome aboard, ", email.split("@")[0], "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate)",
      fontSize: 14.5,
      marginTop: 10
    }
  }, "Your first issue arrives the first Monday of next month.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (email.includes("@")) setSubmittedN(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", null, "Email address"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "you@clinic.com",
    value: email,
    onChange: e => setEmailN(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-ink btn-arrow",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Subscribe"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--stone)",
      fontSize: 12,
      marginTop: 12,
      lineHeight: 1.45
    }
  }, "Single-click unsubscribe. We never share your email. Read the privacy notice."));
}

// ============================================================
// CONTACT PAGE
// ============================================================
function ContactPage({
  setRoute
}) {
  const [form, setFormC] = useStateP({
    name: "",
    email: "",
    clinic: "",
    role: "",
    interest: "",
    message: ""
  });
  const [errors, setErrorsC] = useStateP({});
  const [sent, setSentC] = useStateP(false);
  const [step, setStepC] = useStateP(1);
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.includes("@")) e.email = "Please enter a valid email.";
    if (!form.clinic.trim()) e.clinic = "Which clinic or practice?";
    setErrorsC(e);
    return Object.keys(e).length === 0;
  }
  function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    setTimeout(() => setSentC(true), 400);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "section-tight surf-cream hairline-bot",
    style: {
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 12
    }
  }, "\xA7 Contact"), /*#__PURE__*/React.createElement("h1", {
    className: "display-l",
    style: {
      margin: 0,
      maxWidth: "18ch"
    }
  }, "Let's see if we're ", /*#__PURE__*/React.createElement("em", {
    className: "italic-serif",
    style: {
      color: "var(--teal-3)"
    }
  }, "a fit.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "24px 0 0",
      color: "var(--slate)",
      fontSize: 17,
      lineHeight: 1.5
    }
  }, "Tell us about your clinic and we'll set up a 30-minute call. No sales scripts \u2014 just a conversation with someone who knows the procedure."))), /*#__PURE__*/React.createElement("section", {
    className: "section surf-cream"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 64
    },
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      background: "oklch(0.66 0.12 150 / 0.10)",
      border: "1px solid oklch(0.66 0.12 150 / 0.4)",
      borderRadius: "var(--r-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--good)",
      marginBottom: 12
    }
  }, "\u25CF Request received"), /*#__PURE__*/React.createElement("h2", {
    className: "display-m",
    style: {
      margin: 0
    }
  }, "Thanks, ", form.name.split(" ")[0], "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--slate)",
      fontSize: 16,
      marginTop: 16,
      lineHeight: 1.5,
      maxWidth: "52ch"
    }
  }, "A team member will reach out to ", /*#__PURE__*/React.createElement("strong", null, form.email), " within one business day to schedule your call. In the meantime, you might want to look at our buyer's guide."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ink",
    href: "#/products",
    onClick: e => {
      e.preventDefault();
      setRoute("products");
    }
  }, "Browse the catalog"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost-dark",
    href: "#/education",
    onClick: e => {
      e.preventDefault();
      setRoute("education");
    }
  }, "Watch a webinar"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 32,
      alignItems: "center"
    }
  }, [1, 2].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: step >= s ? "var(--ink)" : "var(--bone)",
      color: step >= s ? "var(--cream)" : "var(--stone)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--f-mono)",
      fontSize: 12
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      color: step >= s ? "var(--ink)" : "var(--stone)",
      letterSpacing: "0.06em"
    }
  }, s === 1 ? "ABOUT YOU" : "ABOUT YOUR INTEREST"), s < 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 1,
      background: "var(--hairline)"
    }
  })))), step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field " + (errors.name ? "error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Full name *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: form.name,
    onChange: e => setFormC({
      ...form,
      name: e.target.value
    })
  }), errors.name && /*#__PURE__*/React.createElement("span", {
    className: "err"
  }, errors.name)), /*#__PURE__*/React.createElement("div", {
    className: "field " + (errors.email ? "error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Email *"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: form.email,
    onChange: e => setFormC({
      ...form,
      email: e.target.value
    })
  }), errors.email && /*#__PURE__*/React.createElement("span", {
    className: "err"
  }, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "field " + (errors.clinic ? "error" : "")
  }, /*#__PURE__*/React.createElement("label", null, "Clinic or practice *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: form.clinic,
    onChange: e => setFormC({
      ...form,
      clinic: e.target.value
    })
  }), errors.clinic && /*#__PURE__*/React.createElement("span", {
    className: "err"
  }, errors.clinic)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Your role"), /*#__PURE__*/React.createElement("select", {
    value: form.role,
    onChange: e => setFormC({
      ...form,
      role: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select\u2026"), /*#__PURE__*/React.createElement("option", null, "Veterinary surgeon"), /*#__PURE__*/React.createElement("option", null, "Sports medicine specialist"), /*#__PURE__*/React.createElement("option", null, "Practice owner"), /*#__PURE__*/React.createElement("option", null, "General practitioner"), /*#__PURE__*/React.createElement("option", null, "Hospital administrator"), /*#__PURE__*/React.createElement("option", null, "Researcher")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-ink btn-arrow",
    onClick: () => {
      if (validate()) setStepC(2);
    }
  }, "Continue"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, "What are you most interested in?"), /*#__PURE__*/React.createElement("select", {
    value: form.interest,
    onChange: e => setFormC({
      ...form,
      interest: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select\u2026"), /*#__PURE__*/React.createElement("option", null, "Building a new sports medicine service"), /*#__PURE__*/React.createElement("option", null, "Adding arthroscopy to my practice"), /*#__PURE__*/React.createElement("option", null, "Adding gait analysis to diagnostics"), /*#__PURE__*/React.createElement("option", null, "Upgrading existing equipment"), /*#__PURE__*/React.createElement("option", null, "Recovery garments and orthotics"), /*#__PURE__*/React.createElement("option", null, "Continuing education"), /*#__PURE__*/React.createElement("option", null, "Just exploring"))), /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, "Tell us a bit more (optional)"), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    value: form.message,
    onChange: e => setFormC({
      ...form,
      message: e.target.value
    }),
    placeholder: "Caseload, current equipment, timeline\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-ghost-dark",
    onClick: () => setStepC(1)
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-arrow"
  }, "Send request"))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--cream-2)",
      borderRadius: "var(--r-4)",
      padding: 28,
      alignSelf: "start",
      position: "sticky",
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 12
    }
  }, "Direct contact"), /*#__PURE__*/React.createElement("div", {
    className: "display-s",
    style: {
      margin: 0
    }
  }, "Talk to us."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    k: "Email",
    v: "Ally@StrideMedVet.com",
    link: "mailto:Ally@StrideMedVet.com"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    k: "HQ",
    v: "Delaware, USA"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    k: "Response",
    v: "< 1 business day"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    k: "Sales region",
    v: "North America \xB7 expanding"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      paddingTop: 24,
      borderTop: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Or skip the form"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--slate)",
      lineHeight: 1.5,
      margin: "0 0 14px"
    }
  }, "Book a 30-min discovery call directly."), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost-dark",
    style: {
      width: "100%",
      justifyContent: "center"
    },
    href: "#"
  }, "Book a call \u2192")))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
            @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } 
              .contact-grid > aside { position: relative !important; top: 0 !important; } }
          `
    }
  }))));
}
function ContactRow({
  k,
  v,
  link
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow-num",
    style: {
      marginBottom: 4
    }
  }, k), link ? /*#__PURE__*/React.createElement("a", {
    href: link,
    style: {
      fontSize: 15,
      fontWeight: 500,
      borderBottom: "1px solid var(--hairline)"
    }
  }, v) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, v));
}
Object.assign(window, {
  ProductsPage,
  SolutionsPage,
  TeamPage,
  EducationPage,
  ContactPage
});

/* global React, ReactDOM, Nav, Footer, ProductModal,
   HomePage, ProductsPage, SolutionsPage, TeamPage, EducationPage, ContactPage,
   TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor, TweakToggle */

const useTweaks = d => [d, () => {}];
const TweaksPanel = () => null;
const TweakSection = () => null;
const TweakColor = () => null;
const TweakToggle = () => null;
const TweakRadio = () => null;
window.useTweaks = useTweaks;
window.TweaksPanel = TweaksPanel;
window.TweakSection = TweakSection;
window.TweakColor = TweakColor;
window.TweakToggle = TweakToggle;
window.TweakRadio = TweakRadio;

// (plain destructure removed)
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#0f7a72",
  "headline_style": "stacked",
  "hero_density": "metrics",
  "card_style": "image-led",
  "dark_mode": false
} /*EDITMODE-END*/;
const ACCENT_PALETTE = ["#0f7a72",
// brand teal
"#2C5DAB",
// navy blue
"#0E1A2B",
// ink
"#A06032" // amber
];
function App() {
  const [route, setRouteState] = useState("home");
  const [modalProduct, setModalProduct] = useState(null);
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    const parsePath = () => {
      const p = window.location.pathname.replace(/^\//, '').split('/')[0] || 'home';
      const v = ['home', 'products', 'solutions', 'team', 'education', 'contact'];
      setRouteState(v.includes(p) ? p : 'home');
    };
    parsePath();
    window.addEventListener('popstate', parsePath);
    return () => window.removeEventListener('popstate', parsePath);
  }, []);
  const setRoute = r => {
    window.history.pushState({}, '', r === 'home' ? '/' : '/' + r);
    setRouteState(r);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const openProduct = p => setModalProduct(p);
  const closeProduct = () => setModalProduct(null);

  // Apply tweaks to :root
  useEffect(() => {
    const root = document.documentElement;
    // accent override — convert hex to oklch is non-trivial; instead override teal CSS vars directly
    if (t.accent) {
      root.style.setProperty("--teal-3", t.accent);
      // brighten by ~14% for teal-2
      root.style.setProperty("--teal-2", lighten(t.accent, 14));
      root.style.setProperty("--teal", t.accent);
    }
    if (t.dark_mode) {
      root.style.setProperty("--cream", "#0E1A2B");
      root.style.setProperty("--cream-2", "#15243A");
      root.style.setProperty("--bone", "#1C2C45");
      root.style.setProperty("--ink", "#F3EFE6");
      root.style.setProperty("--navy", "#F3EFE6");
      root.style.setProperty("--slate", "#B5BDCB");
      root.style.setProperty("--stone", "#8590A4");
      root.style.setProperty("--hairline", "#26344C");
      document.body.style.background = "#0E1A2B";
      document.body.style.color = "#F3EFE6";
    } else {
      root.style.removeProperty("--cream");
      root.style.removeProperty("--cream-2");
      root.style.removeProperty("--bone");
      root.style.removeProperty("--ink");
      root.style.removeProperty("--navy");
      root.style.removeProperty("--slate");
      root.style.removeProperty("--stone");
      root.style.removeProperty("--hairline");
      document.body.style.background = "";
      document.body.style.color = "";
    }
  }, [t.accent, t.dark_mode]);
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(Nav, {
    route: route,
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    },
    "data-screen-label": `route:${route}`
  }, route === "home" && /*#__PURE__*/React.createElement(HomePage, {
    setRoute: setRoute,
    openProduct: openProduct
  }), route === "products" && /*#__PURE__*/React.createElement(ProductsPage, {
    setRoute: setRoute,
    openProduct: openProduct
  }), route === "solutions" && /*#__PURE__*/React.createElement(SolutionsPage, {
    setRoute: setRoute,
    openProduct: openProduct
  }), route === "team" && /*#__PURE__*/React.createElement(TeamPage, {
    setRoute: setRoute
  }), route === "education" && /*#__PURE__*/React.createElement(EducationPage, {
    setRoute: setRoute
  }), route === "contact" && /*#__PURE__*/React.createElement(ContactPage, {
    setRoute: setRoute
  })), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }), modalProduct && /*#__PURE__*/React.createElement(ProductModal, {
    product: modalProduct,
    onClose: closeProduct,
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Color"
  }, /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent color",
    options: ACCENT_PALETTE,
    value: t.accent,
    onChange: v => setT("accent", v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Dark mode",
    value: t.dark_mode,
    onChange: v => setT("dark_mode", v)
  }))));
}

// Lightens a hex color by L% in HSL space
function lighten(hex, percent) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let l = (max + min) / 2,
    s,
    hue;
  if (max === min) {
    s = 0;
    hue = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / d + 2;
        break;
      default:
        hue = (r - g) / d + 4;
    }
    hue *= 60;
  }
  l = Math.min(1, l + percent / 100);
  // back to rgb
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(hue / 60 % 2 - 1));
  const m = l - c / 2;
  let r2, g2, b2;
  if (hue < 60) [r2, g2, b2] = [c, x, 0];else if (hue < 120) [r2, g2, b2] = [x, c, 0];else if (hue < 180) [r2, g2, b2] = [0, c, x];else if (hue < 240) [r2, g2, b2] = [0, x, c];else if (hue < 300) [r2, g2, b2] = [x, 0, c];else [r2, g2, b2] = [c, 0, x];
  const to255 = v => Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return "#" + to255(r2) + to255(g2) + to255(b2);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
