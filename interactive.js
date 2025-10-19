const SCORE_CSV_URL = "./scene_scores_shape.csv";
const results = [
    [
      "anemone",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/anemone.viser",
        "&synchronizedVideoOverlay=/recordings/anemone.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/anemone.png",
      72.1,
      78.9,
      45.3
    ],
    [
      "athlete-follow",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/athlete-follow.viser",
        "&synchronizedVideoOverlay=/recordings/athlete-follow.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        ////"&darkMode",
      ],
      "./recordings/athlete-follow.png",
      72.1
    ],
    [
      "beach-feet",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/beach-feet.viser",
        "&synchronizedVideoOverlay=/recordings/beach-feet.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/beach-feet.png",
      72.1
    ],
    [
      "beach-follow-pan",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/beach-follow-pan.viser",
        "&synchronizedVideoOverlay=/recordings/beach-follow-pan.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/beach-follow-pan.png",
      72.1
    ],
    [
      "bison",
      [
        "/viser-client/",
        "?playbackPath=/recordings/bison.viser",
        "&synchronizedVideoOverlay=/recordings/bison.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/bison.png",
      72.1
    ],
    [
      "boat-lake",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/boat-lake.viser",
        "&synchronizedVideoOverlay=/recordings/boat-lake.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/boat-lake.png",
      72.1
    ],
    [
      "cat-piano",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/cat-piano.viser",
        "&synchronizedVideoOverlay=/recordings/cat-piano.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/cat-piano.png",
      72.1
    ],
    [
      "cat-spinning",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/cat-spinning.viser",
        "&synchronizedVideoOverlay=/recordings/cat-spinning.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/cat-spinning.png",
      72.1
    ],
    [
      "cat-walk-left",
      [
        "/viser-client/",
        "?playbackPath=/recordings/cat-walk-left.viser",
        "&synchronizedVideoOverlay=/recordings/cat-walk-left.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/cat-walk-left.png",
      72.1
    ],
    [
      "cat-walk-right",
      [
        "/viser-client/",
        "?playbackPath=/recordings/cat-walk-right.viser",
        "&synchronizedVideoOverlay=/recordings/cat-walk-right.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/cat-walk-right.png",
      72.1
    ],
    [
      "cat-walking",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/cat-walking.viser",
        "&synchronizedVideoOverlay=/recordings/cat-walking.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/cat-walking.png",
      72.1
    ],
    [
      "catepillar-1",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/catepillar-1.viser",
        "&synchronizedVideoOverlay=/recordings/catepillar-1.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/catepillar-1.png",
      72.1
    ],
    [
      "child-field",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/child-field.viser",
        "&synchronizedVideoOverlay=/recordings/child-field.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/child-field.png",
      72.1
    ],
    [
      "corgi-snow-2",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/corgi-snow-2.viser",
        "&synchronizedVideoOverlay=/recordings/corgi-snow-2.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/corgi-snow-2.png",
      72.1
    ],
    [
      "corgi-snow-3",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/corgi-snow-3.viser",
        "&synchronizedVideoOverlay=/recordings/corgi-snow-3.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/corgi-snow-3.png",
      69.5
    ],
    [
      "corgi-snow",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/corgi-snow.viser",
        "&synchronizedVideoOverlay=/recordings/corgi-snow.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/corgi-snow.png",
      69.5
    ],
    [
      "cow-walking",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/cow-walking.viser",
        "&synchronizedVideoOverlay=/recordings/cow-walking.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/cow-walking.png",
      69.5
    ],
    [
      "dog-rotation-vase",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/dog-rotation-vase.viser",
        "&synchronizedVideoOverlay=/recordings/dog-rotation-vase.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/dog-rotation-vase.png",
      69.5
    ],
    [
      "dog-running",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/dog-running.viser",
        "&synchronizedVideoOverlay=/recordings/dog-running.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/dog-running.png",
      69.5
    ],
    [
      "elephant",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/elephant.viser",
        "&synchronizedVideoOverlay=/recordings/elephant.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/elephant.png",
      69.5
    ],
    [
      "hiking-follow-2",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/hiking-follow-2.viser",
        "&synchronizedVideoOverlay=/recordings/hiking-follow-2.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/hiking-follow-2.png",
      69.5
    ],
    [
      "hiking-follow",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/hiking-follow.viser",
        "&synchronizedVideoOverlay=/recordings/hiking-follow.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/hiking-follow.png",
      69.5
    ],
    [
      "horses-follow",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/horses-follow.viser",
        "&synchronizedVideoOverlay=/recordings/horses-follow.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/horses-follow.png",
      69.5
    ],
    [
      "horses-rotation",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/horses-rotation.viser",
        "&synchronizedVideoOverlay=/recordings/horses-rotation.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/horses-rotation.png",
      69.5
    ],
    [
      "kitten",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/kitten.viser",
        "&synchronizedVideoOverlay=/recordings/kitten.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/kitten.png",
      69.5
    ],
    [
      "lady-birds",
      [
        "/viser-client/",
        "?playbackPath=/recordings/lady-birds.viser",
        "&synchronizedVideoOverlay=/recordings/lady-birds.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/lady-birds.png",
      69.5
    ],
    [
      "lion",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/lion.viser",
        "&synchronizedVideoOverlay=/recordings/lion.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/lion.png",
      69.5
    ],
    [
      "monkey",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/monkey.viser",
        "&synchronizedVideoOverlay=/recordings/monkey.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/monkey.png",
      69.5
    ],
    [
      "penguin",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/penguin.viser",
        "&synchronizedVideoOverlay=/recordings/penguin.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        // //"&darkMode",
      ],
      "./recordings/penguin.png",
      69.5
    ],
    [
      "pigeon",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/pigeon.viser",
        "&synchronizedVideoOverlay=/recordings/pigeon.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/pigeon.png",
      69.5
    ],
    [
      "pigeons",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/pigeons.viser",
        "&synchronizedVideoOverlay=/recordings/pigeons.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        // //"&darkMode",
      ],
      "./recordings/pigeons.png",
      69.5
    ],
    [
      "prosthetic-swimmer",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/prosthetic-swimmer.viser",
        "&synchronizedVideoOverlay=/recordings/prosthetic-swimmer.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/prosthetic-swimmer.png",
      69.5
    ],
    [
      "sea-lion",
      [
        "/viser-client/",
        "?playbackPath=/recordings/sea-lion.viser",
        "&synchronizedVideoOverlay=/recordings/sea-lion.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/sea-lion.png",
      69.5
    ],
    [
      "steps-street-pan",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/steps-street-pan.viser",
        "&synchronizedVideoOverlay=/recordings/steps-street-pan.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/steps-street-pan.png",
      69.5
    ],
    [
      "tea-cup",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/tea-cup.viser",
        "&synchronizedVideoOverlay=/recordings/tea-cup.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/tea-cup.png",
      69.5
    ],
    [
      "turtle-eating",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/turtle-eating.viser",
        "&synchronizedVideoOverlay=/recordings/turtle-eating.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/turtle-eating.png",
      69.5
    ],
    [
      "turtle-follow",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/turtle-follow.viser",
        "&synchronizedVideoOverlay=/recordings/turtle-follow.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/turtle-follow.png",
      69.5
    ],
    [
      "turtle-swim-away",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/turtle-swim-away.viser",
        "&synchronizedVideoOverlay=/recordings/turtle-swim-away.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/turtle-swim-away.png",
      69.5
    ],
    [
      "turtle",
      [
        "/viser-client/",
        "?playbackPath=/recordings/turtle.viser",
        "&synchronizedVideoOverlay=/recordings/turtle.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/turtle.png",
      69.5
    ],
    [
      "zebras",
      [
        "/viser-client/",
        "?playbackPath=/recordings2/zebras.viser",
        "&synchronizedVideoOverlay=/recordings/zebras.mp4",
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=0.0,-1.0,1.0",
        "&initialCameraLookAt=0.0,1.0,0.0",
        "&baseSpeed=0.5",
        //"&darkMode",
      ],
      "./recordings/zebras.png",
      69.5
    ],
  ];
  
// --- 轻量 CSV/TSV 解析 & 回填到 results ---
function parseDelimited(text) {
  const lines = text.trim().split(/\r?\n/).filter(l => l.trim().length);
  if (lines.length === 0) return [];
  // 自动判断分隔符（支持逗号或制表符）
  const delim = lines[0].includes("\t") ? "\t" : ",";
  const headers = lines[0].split(delim).map(h => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split(delim);
    const row = {};
    headers.forEach((h, idx) => (row[h] = (cells[idx] ?? "").trim()));
    rows.push(row);
  }
  return rows;
}

function toNum(x) {
  const v = Number(x);
  return Number.isFinite(v) ? v : undefined;
}

function buildScoreMap(rows) {
  const map = new Map();
  rows.forEach(r => {
    const key = r.seq_name?.trim();
    if (!key) return;
    map.set(key, {
      score: toNum(r.score),
      cam_score: toNum(r.cam_score),
      rot_err: toNum(r.rot_err),
      trans_err: toNum(r.trans_err),
      depth_score: toNum(r.depth_score),
      depth_score_ss: toNum(r.depth_score_ss),
      depth_score_scale: toNum(r.depth_score_scale),
      status: r.status?.trim(),
    });
  });
  return map;
}

// 把 csv 的分数写回 results[i][3]=total, [4]=camera, [5]=depth
async function hydrateResultsFromCSV(resultsArr) {
  try {
    const resp = await fetch(SCORE_CSV_URL, { cache: "no-store" });
    if (!resp.ok) return new Map();
    const text = await resp.text();
    const rows = parseDelimited(text);
    const scoreMap = buildScoreMap(rows);

    const pct = (x) =>
      typeof x === "number"
        ? (x <= 1.0001 ? x * 100 : x) // CSV 是 0–1 就转百分制
        : undefined;

    resultsArr.forEach(r => {
      const key = r[0];
      const rec = scoreMap.get(key);
      if (!rec) return;

      const total = pct(rec.score);
      const cam   = pct(rec.cam_score);
      const depth = pct(rec.depth_score);

      if (total !== undefined) r[3] = total;
      if (cam   !== undefined) r[4] = cam;
      if (depth !== undefined) r[5] = depth;

      // 可选：把更多指标挂在对象上，后续想显示可直接用
      r.meta = {
        rot_err: rec.rot_err,
        trans_err: rec.trans_err,
        depth_score_ss: pct(rec.depth_score_ss),
        depth_score_scale: pct(rec.depth_score_scale),
        status: rec.status,
      };
    });

    return scoreMap;
  } catch (e) {
    console.warn("Failed to load scores CSV:", e);
    return new Map();
  }
}

  function initializeResultSelector(resultsElement) {
    const selectorElement = resultsElement.querySelector(".results-selector");
    const resultsThumbnails = selectorElement.querySelector(
      ".results-thumbnails",
    );
    const prevButton = selectorElement.querySelector(".results-prev");
    const nextButton = selectorElement.querySelector(".results-next");
    let currentIndex = 0;
    // 从 results 的 src（数组形式）里提取 ?synchronizedVideoOverlay=xxx
    function getOverlayUrlFromSrc(srcArrayOrString) {
      const full = Array.isArray(srcArrayOrString) ? srcArrayOrString.join("") : String(srcArrayOrString || "");
      // 找形如 &synchronizedVideoOverlay=/recordings/xxx.mp4 的片段
      const m = full.match(/[?&]synchronizedVideoOverlay=([^&]+)/);
      return m ? decodeURIComponent(m[1]) : null;
    }

    // 创建左上角视频框（只创建一次）
    function ensureOverlayVideoBox() {
      let box = resultsElement.querySelector(".overlay-video");
      if (!box) {
        box = document.createElement("div");
        box.className = "overlay-video";
        const v = document.createElement("video");
        v.playsInline = true;
        v.muted = true;       // 避免自动播放被拦
        v.controls = true;    // 你也可以关掉：false
        v.loop = true;        // 需要就保留循环
        box.appendChild(v);
        resultsElement.appendChild(box);
      }
      return box;
    }
  
    function createIframe(src) {
      const iframe = document.createElement("iframe");
      console.log("Creating iframe with src", src);
      iframe.src = src;
      return iframe;
    }
  
    function showIframe(src) {
      const wrapper = resultsElement.querySelector(".iframe-wrapper");
      wrapper.innerHTML = "";
      const iframe = createIframe(Array.isArray(src) ? src.join("") : src);
      wrapper.appendChild(iframe);
    }

    function hideIframe() {
        const wrapper = resultsElement.querySelector(".iframe-wrapper");
        wrapper.innerHTML = ""; // Remove iframe from DOM
    }
  
    function updateSelection(index) {
      if (currentIndex !== index) {
          hideIframe(); // Hide previous iframe
      }
      currentIndex = index;
      resultsThumbnails
        .querySelectorAll("a")
        .forEach((a, i) =>
          a.setAttribute("data-selected", i === index ? "true" : "false"),
        );
      
      const selectedThumbnail = resultsThumbnails.children[index];
  
      // Scroll the selected thumbnail into view
      const thumbnailsContainer = resultsThumbnails;
      const scrollLeft =
        selectedThumbnail.offsetLeft -
        (thumbnailsContainer.clientWidth - selectedThumbnail.clientWidth) / 2;
      thumbnailsContainer.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
  
      // Update URL with the selected result
      const resultName = results[index][0].toLowerCase().replace(/\s+/g, "-");
      const currentPath = window.location.pathname;
      const newUrl = `${currentPath}?result=${resultName}`;
      history.pushState(null, "", newUrl);

      showIframe(results[index][1]);
      
      // ===== 右上角分数框（score / camera / depth）=====
      function ensureScoreBox() {
        let box = resultsElement.querySelector("#current-score");
        if (!box) {
          // 若 HTML 中已按三行结构放置，此处通常不会走到
          box = document.createElement("div");
          box.id = "current-score";
          box.className = "score-floating";
          box.innerHTML = `
            <div><b>score:</b> <span data-key="score">--</span></div>
            <div><b>camera:</b> <span data-key="cam">--</span></div>
            <div><b>depth:</b> <span data-key="depth">--</span></div>
          `;
          resultsElement.appendChild(box);
        }
        return box;
      }

      function setScoreText(el, value) {
        el.textContent = (typeof value === "number")
          ? value.toFixed(2)
          : String(value ?? "—");
      }

      // 读取 results 中的分数：第4/5/6个元素分别为 total/camera/depth（如果存在）
      const totalScore  = results[index]?.[3];
      const cameraScore = results[index]?.[4];
      const depthScore  = results[index]?.[5];

      const box = ensureScoreBox();
      setScoreText(box.querySelector('[data-key="score"]'), totalScore);
      setScoreText(box.querySelector('[data-key="cam"]'),   cameraScore);
      setScoreText(box.querySelector('[data-key="depth"]'), depthScore);
      box.style.display = ""; // 显示

      
      // ===== 左上角视频框：根据当前 result 填入 overlay 视频 =====
      const overlayBox = ensureOverlayVideoBox();
      const v = overlayBox.querySelector("video");

      // 从当前 result 的 src 里解析 overlay url
      const overlayUrl = getOverlayUrlFromSrc(results[index][1]);

      if (overlayUrl) {
        if (v.src !== overlayUrl) {
          v.src = overlayUrl;
          try { v.load(); v.play().catch(()=>{}); } catch {}
        }
        overlayBox.style.display = "";   // 显示
      } else {
        overlayBox.style.display = "none";
        v.removeAttribute("src");
        try { v.load(); } catch {}
      }
    }
  
    results.forEach(([label, src, thumbnail], index) => {
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("data-selected", index === 0 ? "true" : "false");
      link.addEventListener("click", (e) => {
        e.preventDefault();
        updateSelection(index);
      });
  
      const img = document.createElement("img");
      img.src = thumbnail;
      img.alt =
        "Thumbnail that can be clicked to show a result of our method: " + label;
      img.title = label;
      // // 🔹 新增：分数小框
      // const badge = document.createElement("div");
      // badge.className = "score-badge";
      // const s = (typeof score === "number") ? score.toFixed(2) : String(score ?? "—");
      // badge.textContent = `score: ${s}`;

      // link.appendChild(img);
      // link.appendChild(badge);     // 把分数贴到缩略图右上角
      // resultsThumbnails.appendChild(link);
  
      link.appendChild(img);
      resultsThumbnails.appendChild(link);
    });
  
    prevButton.addEventListener("click", () => {
      updateSelection((currentIndex - 1 + results.length) % results.length);
    });
  
    nextButton.addEventListener("click", () => {
      updateSelection((currentIndex + 1) % results.length);
    });
  
    // Check URL for initial result selection
    const urlParams = new URLSearchParams(window.location.search);
    const initialResult = urlParams.get("result");
    if (initialResult) {
      const index = results.findIndex(
        (result) =>
          result[0].toLowerCase().replace(/\s+/g, "-") === initialResult,
      );
      if (index !== -1) {
        updateSelection(index);
      } else {
        showIframe(results[0][1]);
      }
    } else {
      showIframe(results[0][1]);
    }
  }
  
  // Initialize all result on the page
  // document.querySelectorAll(".results").forEach(initializeResultSelector);
(async () => {
  await hydrateResultsFromCSV(results); // 先把 CSV 的分数写回 results
  document.querySelectorAll(".results").forEach(initializeResultSelector);
})();
