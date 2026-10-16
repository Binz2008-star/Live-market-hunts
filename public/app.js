(() => {
  "use strict";
  const WA_NUMBER = "971585989080";
  const STORAGE_KEY = "ricohunt.lang";

  const AR = {
    skip: "انتقل إلى طلب جهاز",
    topline: "ريكوهنت · توفير الأجهزة في الإمارات",
    areas: "عجمان · الشارقة · دبي · أم القيوين",
    tagline: "نصطاد لك أفضل صفقة في الإمارات",
    tagline2: "نصطاد لك أفضل صفقة في الإمارات",
    nav_brands: "العلامات", nav_how: "كيف نعمل", nav_request: "اطلب جهازاً", nav_faq: "الأسئلة الشائعة", nav_contact: "تواصل",
    wa_btn: "تواصل عبر واتساب",
    eyebrow: "جوالات · لابتوبات · أجهزة لوحية · حسب الطلب",
    h1: "أجهزة مميزة.<br><span>نبحث عنها لك.</span>",
    hero_p: "أخبرنا بالجهاز الذي تريده بالضبط. نبحث لدى تجار موثوقين في أسواق ديرة والشارقة، ونرسل لك صوراً أو فيديو للجهاز نفسه مع السعر النهائي، ونوصّله بعد موافقتك.",
    cta_request: "اطلب جهازاً ←", cta_wa: "اسألنا على واتساب ↗",
    p1: "شاهد الجهاز نفسه", p2: "السعر النهائي قبل الدفع", p3: "ضمان فحص 7 أيام*", p4: "توصيل إلى بابك",
    note1: "توافق أنت.", note2: "ثم نشتري.",
    br_k: "أشهر العلامات", br_h: "العلامات التي يطلبها عملاؤنا.", br_p: "جوالات ولابتوبات وأجهزة لوحية، جديدة ومستعملة. اضغط على العلامة لتبدأ طلبك.",
    b1: "أحدث الموديلات والمستعمل", b2: "سلسلة Galaxy S و A", b3: "Air و Pro", b4: "Latitude و XPS", b5: "ThinkPad و IdeaPad", b6: "Air و Pro و mini",
    how_k: "كيف نعمل", how_h: "بسيط. واضح. موثوق.",
    how_p: "لا نحتفظ بمخزون. كل جهاز نوفّره خصيصاً للعميل الذي طلبه، ولا نشتري شيئاً قبل موافقتك.",
    how_cta: "ابدأ البحث ←",
    s1h: "1. ترسل طلبك", s1p: "الموديل والحالة والميزانية. النموذج أدناه يكتب رسالة واتساب عنك.",
    s2h: "2. نبحث ونُريك", s2p: "نبحث في الأسواق ونرسل صوراً أو فيديو للجهاز نفسه، مع السعر النهائي ورسوم التوصيل وشروط الضمان.",
    s3h: "3. توافق، ونوصّل", s3p: "بعد تأكيدك نشتري الجهاز ونوصّله. تبدأ فترة الفحص (7 أيام) من يوم الاستلام.",
    rq_k: "اطلب جهازاً", rq_h: "أخبرنا بما تريد، ونبدأ البحث.",
    rq_p: "املأ ما تعرفه. تُجهَّز الرسالة على شاشتك وتُرسل من واتساب الخاص بك. هذه الصفحة لا تحفظ بياناتك.",
    f_type: "نوع الجهاز", o_phone: "جوال", o_laptop: "لابتوب", o_tablet: "جهاز لوحي", o_other: "إلكترونيات أخرى",
    f_model: "الموديل بالضبط *", ph_model: "مثال: iPhone 15 Pro، 256GB، تيتانيوم طبيعي",
    f_cond: "الحالة", c_new: "جديد مختوم", c_used: "مستعمل بحالة ممتازة", c_any: "أي منهما، أرني الخيارين",
    f_budget: "الميزانية (درهم)", ph_budget: "مثال: 3,500",
    f_area: "منطقة التوصيل", a_ajman: "عجمان", a_sharjah: "الشارقة", a_dubai: "دبي", a_uaq: "أم القيوين", a_other: "أخرى، اسألنا",
    f_name: "اسمك", ph_name: "اختياري",
    f_notes: "تفاصيل أخرى", ph_notes: "اللون، لغة الكيبورد، الملحقات، متى تحتاجه",
    preview: "رسالتك على واتساب",
    err_model: "أضف موديل الجهاز حتى نعرف عمّا نبحث.",
    send: "◉ أرسل عبر واتساب", copy: "انسخ الرسالة", copied: "تم النسخ",
    tr_k: "لماذا ريكوهنت", tr_h: "صيّاد الصفقات الخاص بك في الإمارات.", tr_p: "توفير محلي. تفاصيل واضحة. ترى الجهاز قبل أن تدفع.",
    st1: "توفير من الأسواق المحلية", st2: "إمارات نوصّل إليها", st3: "خدمة شخصية عبر واتساب",
    faq_k: "أسئلة", faq_h: "قبل أن تطلب.", faq_p: "ما زال لديك سؤال؟ اسألنا على واتساب ونرد عليك بتفاصيل جهازك.", faq_cta: "اطرح سؤالاً ↗",
    q1: "هل لديكم أجهزة في المخزون؟", a1: "لا. نوفّر كل جهاز بعد طلبك، لذلك يتم تأكيد التوفر والسعر لكل طلب.",
    q2: "متى أدفع؟", a2: "فقط بعد أن تشاهد الجهاز وتوافق على السعر النهائي ورسوم التوصيل وشروط الضمان. نؤكد معك خطوات الدفع على واتساب قبل الشراء.",
    q3: "ماذا يشمل ضمان الـ 7 أيام؟", a3: "فترة فحص لمدة 7 أيام من يوم الاستلام، وفق شروط محددة. نرسل لك الشروط الخاصة بجهازك مكتوبة قبل التأكيد.",
    q4: "من يدفع رسوم التوصيل؟", a4: "العميل. نخبرك برسوم التوصيل لمنطقتك قبل تأكيد الطلب.",
    q5: "ما المناطق التي تغطونها؟", a5: "مقرنا عجمان، ونوصّل إلى عجمان والشارقة ودبي وأم القيوين. اسألنا عن الإمارات الأخرى.",
    q6: "هل يمكنني رؤية الجهاز قبل الشراء؟", a6: "نعم. نرسل صوراً أو فيديو للجهاز نفسه، مع التفاصيل التي تطلبها، قبل أن تؤكد.",
    foot_loc: "عجمان، الإمارات",
    legal: "*ضمان الفحص لمدة 7 أيام يخضع للشروط المكتوبة التي نؤكدها لكل جهاز قبل الشراء. الأسعار والتوفر والحالة ورسوم التوصيل تُؤكَّد لكل طلب. تقوم ريكوهنت بتوفير الأجهزة من تجار مستقلين، وليست الشركة المصنّعة أو وكيلاً معتمداً للعلامات التجارية المذكورة."
  };

  const MSG = {
    en: {
      greet: "Hi RICOHUNT, I'd like to request a device.",
      general: "Hi RICOHUNT, I'd like to ask about sourcing a device.",
      type: "Type", model: "Model", cond: "Condition", budget: "Budget", area: "Delivery area", notes: "Notes", name: "Name",
      empty: "(add the model above)"
    },
    ar: {
      greet: "مرحباً ريكوهنت، أريد طلب جهاز.",
      general: "مرحباً ريكوهنت، أريد الاستفسار عن توفير جهاز.",
      type: "النوع", model: "الموديل", cond: "الحالة", budget: "الميزانية", area: "منطقة التوصيل", notes: "ملاحظات", name: "الاسم",
      empty: "(أضف الموديل أعلاه)"
    }
  };

  const EN = {};
  const root = document.documentElement;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  let lang = "en";

  // Capture English defaults from the markup so the HTML stays the single English source.
  $$("[data-i18n]").forEach((el) => { EN[el.dataset.i18n] = el.textContent; });
  $$("[data-i18n-html]").forEach((el) => { EN[el.dataset.i18nHtml] = el.innerHTML; });
  $$("[data-i18n-ph]").forEach((el) => { EN[el.dataset.i18nPh] = el.getAttribute("placeholder") || ""; });
  EN.copied = "Copied";

  const t = (key) => (lang === "ar" ? AR[key] : EN[key]) ?? EN[key] ?? key;
  const waUrl = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  function selectedText(id) {
    const el = document.getElementById(id);
    return el.options[el.selectedIndex].textContent.trim();
  }

  function buildMessage() {
    const m = MSG[lang];
    const model = $("#f-model").value.trim();
    const budget = $("#f-budget").value.trim();
    const notes = $("#f-notes").value.trim();
    const name = $("#f-name").value.trim();
    const lines = [m.greet, ""];
    lines.push(`${m.type}: ${selectedText("f-type")}`);
    lines.push(`${m.model}: ${model || m.empty}`);
    lines.push(`${m.cond}: ${selectedText("f-cond")}`);
    if (budget) lines.push(`${m.budget}: AED ${budget}`);
    lines.push(`${m.area}: ${selectedText("f-area")}`);
    if (notes) lines.push(`${m.notes}: ${notes}`);
    if (name) lines.push(`${m.name}: ${name}`);
    return { text: lines.join("\n"), valid: model.length > 0 };
  }

  function refreshMessage() {
    const { text, valid } = buildMessage();
    $("#msg-preview").textContent = text;
    const send = $("#send-wa");
    send.href = waUrl(text);
    send.setAttribute("aria-disabled", String(!valid));
  }

  function applyLang(next) {
    lang = next === "ar" ? "ar" : "en";
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-ph]").forEach((el) => { el.setAttribute("placeholder", t(el.dataset.i18nPh)); });
    const toggle = $("#lang-toggle");
    toggle.textContent = lang === "ar" ? "English" : "العربية";
    toggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    $$("[data-wa='general']").forEach((a) => { a.href = waUrl(MSG[lang].general); });
    refreshMessage();
    document.title = lang === "ar" ? "ريكوهنت | توفير الجوالات واللابتوبات حسب الطلب" : "RICOHUNT | Phones & laptops sourced on request";
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* storage unavailable: language resets on reload */ }
  }

  function initialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ar" || saved === "en") return saved;
    } catch (_) { /* ignore */ }
    if (location.hash === "#ar") return "ar";
    return (navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en";
  }

  $("#lang-toggle").addEventListener("click", () => applyLang(lang === "ar" ? "en" : "ar"));

  const form = $("#request-form");
  form.addEventListener("input", () => {
    if ($("#f-model").value.trim()) { $("#form-error").hidden = true; $("#f-model").removeAttribute("aria-invalid"); }
    refreshMessage();
  });
  form.addEventListener("change", refreshMessage);
  form.addEventListener("submit", (e) => e.preventDefault());

  $("#send-wa").addEventListener("click", (e) => {
    if (!buildMessage().valid) {
      e.preventDefault();
      $("#form-error").hidden = false;
      $("#f-model").setAttribute("aria-invalid", "true");
      $("#f-model").focus();
    }
  });

  $("#copy-msg").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    const text = buildMessage().text;
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = t("copied");
      setTimeout(() => { btn.textContent = t("copy"); }, 1800);
    } catch (_) {
      const range = document.createRange();
      range.selectNodeContents($("#msg-preview"));
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });

  $$("[data-fill]").forEach((el) => el.addEventListener("click", () => {
    $("#f-model").value = el.dataset.fill;
    if (el.dataset.type) $("#f-type").value = el.dataset.type;
    $("#form-error").hidden = true;
    $("#f-model").removeAttribute("aria-invalid");
    refreshMessage();
    if (el.tagName === "BUTTON") $("#f-model").focus({ preventScroll: true });
  }));

  // Hide brand photos that fail to load so the icon fallback shows.
  $$(".brand-img img").forEach((img) => img.addEventListener("error", () => { img.hidden = true; }));

  $("#year").textContent = String(new Date().getFullYear());
  applyLang(initialLang());
})();
