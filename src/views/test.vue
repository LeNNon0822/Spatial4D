<template>
  <!-- Hero Section -->
  <div class="container hero-section">
    <h1 class="project-title">Spatial4D-Bench</h1>
    <p class="project-subtitle">
      A Holistic Benchmark for Spatial Intelligence & Long-Term 4D
      Representation
    </p>

    <div class="btn-group">
      <a href="#" class="btn primary"><i class="fas fa-file-pdf"></i> Paper</a>
      <a href="#" class="btn"><i class="fab fa-github"></i> Code</a>
      <a href="#" class="btn"><i class="fas fa-database"></i> Data</a>
    </div>

    <!-- 简单的树状导航 -->
    <div class="tree-wrapper">
      <div class="tree">
        <div class="tree-root">Taxonomy</div>
        <div class="tree-branches">
          <div class="mini-topic-node">
            <div class="mini-topic-card text-blue">Tracking</div>
          </div>
          <div class="mini-topic-node">
            <div class="mini-topic-card text-purple">Reasoning</div>
          </div>
          <div class="mini-topic-node">
            <div class="mini-topic-card text-pink">Ego-Motion</div>
          </div>
          <div class="mini-topic-node">
            <div class="mini-topic-card text-green">Scene</div>
          </div>
          <div class="mini-topic-node">
            <div class="mini-topic-card text-orange">Physics</div>
          </div>
          <div class="mini-topic-node">
            <div class="mini-topic-card text-red">Embodied</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content: Topics & Visuals -->
  <div class="container">
    <!-- TOPIC 1: Tracking -->
    <div class="topic-row">
      <div class="topic-info">
        <span class="topic-label text-blue"
          ><i class="fas fa-crosshairs"></i> Topic 01</span
        >
        <h2 class="topic-title-lg">4D Semantic Tracking</h2>
        <p class="topic-desc">
          Evaluates the capability to maintain consistent identity and precise
          correspondence of entities across long temporal windows in dynamic
          environments.
        </p>
      </div>
      <div class="subtasks-container">
        <!-- Subtask 1.1 -->
        <div class="subtask-card border-t-blue">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-play"></i></div>
            <span class="media-tag">Video</span>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Point Tracking</h3>
            <p class="subtask-desc">
              Dense pixel-level trajectory estimation across occlusion.
            </p>
          </div>
        </div>
        <!-- Subtask 1.2 -->
        <div class="subtask-card border-t-blue">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-play"></i></div>
            <span class="media-tag">GIF</span>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Box Tracking</h3>
            <p class="subtask-desc">
              3D Bounding box association in cluttered scenes.
            </p>
          </div>
        </div>
        <!-- Subtask 1.3 -->
        <div class="subtask-card border-t-blue">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-play"></i></div>
            <span class="media-tag">Video</span>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Mask Propagation</h3>
            <p class="subtask-desc">
              Segmenting and propagating object masks over time.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TOPIC 2: Reasoning -->
    <div class="topic-row">
      <div class="topic-info">
        <span class="topic-label text-purple"
          ><i class="fas fa-brain"></i> Topic 02</span
        >
        <h2 class="topic-title-lg">Spatial Reasoning</h2>
        <p class="topic-desc">
          Tests high-level understanding of 3D geometry relationships, logical
          deduction, and question answering about spatiotemporal events.
        </p>
      </div>
      <div class="subtasks-container">
        <div class="subtask-card border-t-purple">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-image"></i></div>
            <span class="media-tag">Img</span>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Relative Depth</h3>
            <p class="subtask-desc">
              Ordinal depth ranking between object pairs.
            </p>
          </div>
        </div>
        <div class="subtask-card border-t-purple">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-play"></i></div>
            <span class="media-tag">Video</span>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Space-Time QA</h3>
            <p class="subtask-desc">VQA tasks focused on "Where" and "When".</p>
          </div>
        </div>
        <div class="subtask-card border-t-purple">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-cube"></i></div>
            <span class="media-tag">3D</span>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Occ. Reasoning</h3>
            <p class="subtask-desc">
              Inferring the existence of fully occluded objects.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TOPIC 3: Ego-Motion -->
    <div class="topic-row">
      <div class="topic-info">
        <span class="topic-label text-pink"
          ><i class="fas fa-camera-retro"></i> Topic 03</span
        >
        <h2 class="topic-title-lg">Camera & Ego-Motion</h2>
        <p class="topic-desc">
          Assesses the agent's ability to localize itself within the environment
          and understand its own movement relative to the scene.
        </p>
      </div>
      <div class="subtasks-container">
        <div class="subtask-card border-t-pink">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-play"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Visual Odometry</h3>
            <p class="subtask-desc">
              Frame-to-frame 6-DoF camera motion estimation.
            </p>
          </div>
        </div>
        <div class="subtask-card border-t-pink">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-map-marker-alt"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Pose Estimation</h3>
            <p class="subtask-desc">
              Absolute localization within a pre-built map.
            </p>
          </div>
        </div>
        <div class="subtask-card border-t-pink">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-route"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Trajectory Pred.</h3>
            <p class="subtask-desc">
              Forecasting future camera paths from video history.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TOPIC 4: Scene Understanding -->
    <div class="topic-row">
      <div class="topic-info">
        <span class="topic-label text-green"
          ><i class="fas fa-cubes"></i> Topic 04</span
        >
        <h2 class="topic-title-lg">3D Scene Understanding</h2>
        <p class="topic-desc">
          Focuses on reconstructing and parsing the static environment
          structure, including object detection and dense occupancy.
        </p>
      </div>
      <div class="subtasks-container">
        <div class="subtask-card border-t-green">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-cube"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">3D Detection</h3>
            <p class="subtask-desc">
              Oriented 3D bounding boxes for all categories.
            </p>
          </div>
        </div>
        <div class="subtask-card border-t-green">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-layer-group"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Sem. Occupancy</h3>
            <p class="subtask-desc">
              Dense voxel-level semantic classification.
            </p>
          </div>
        </div>
        <div class="subtask-card border-t-green">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-home"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Layout Est.</h3>
            <p class="subtask-desc">
              Reconstructing room geometry (walls, floor, ceiling).
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TOPIC 5: Physics -->
    <div class="topic-row">
      <div class="topic-info">
        <span class="topic-label text-orange"
          ><i class="fas fa-apple-alt"></i> Topic 05</span
        >
        <h2 class="topic-title-lg">Physical Dynamics</h2>
        <p class="topic-desc">
          Requires the model to possess intuitive physics knowledge to predict
          object interactions, stability, and material properties.
        </p>
      </div>
      <div class="subtasks-container">
        <div class="subtask-card border-t-orange">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-car-crash"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Collision Pred.</h3>
            <p class="subtask-desc">Predicting if/when objects will collide.</p>
          </div>
        </div>
        <div class="subtask-card border-t-orange">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-shapes"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Stability Analysis</h3>
            <p class="subtask-desc">
              Predicting if a structure will collapse under gravity.
            </p>
          </div>
        </div>
        <div class="subtask-card border-t-orange">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-hand-rock"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Material Inf.</h3>
            <p class="subtask-desc">
              Inferring friction and stiffness from visual cues.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TOPIC 6: Embodied -->
    <div class="topic-row">
      <div class="topic-info">
        <span class="topic-label text-red"
          ><i class="fas fa-robot"></i> Topic 06</span
        >
        <h2 class="topic-title-lg">Embodied Planning</h2>
        <p class="topic-desc">
          The ultimate goal of spatial intelligence: utilizing perception for
          actionable planning and navigation in complex environments.
        </p>
      </div>
      <div class="subtasks-container">
        <div class="subtask-card border-t-red">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-map-signs"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Path Planning</h3>
            <p class="subtask-desc">
              Generating collision-free paths to goals.
            </p>
          </div>
        </div>
        <div class="subtask-card border-t-red">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-walking"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Instruction</h3>
            <p class="subtask-desc">Vision-Language Navigation (VLN).</p>
          </div>
        </div>
        <div class="subtask-card border-t-red">
          <div class="media-placeholder">
            <div class="play-icon"><i class="fas fa-hand-paper"></i></div>
          </div>
          <div class="subtask-content">
            <h3 class="subtask-title">Affordance</h3>
            <p class="subtask-desc">
              Identifying actionable regions (e.g., graspable).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <p>
      &copy; 2025 Spatial4D-Bench Project.<br />
      Licensed under CC BY-NC-SA 4.0.
    </p>
  </footer>
</template>

<script setup></script>

<style scoped>
/* --- 1. 核心变量 --- */
:root {
  --bg-body: #ffffff;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --border-light: #f3f4f6;

  /* Topic Colors (用来区分不同板块的强调色) */
  --c-blue: #3b82f6;
  --c-purple: #8b5cf6;
  --c-pink: #ec4899;
  --c-green: #10b981;
  --c-orange: #f59e0b;
  --c-red: #ef4444;

  /* Gradients */
  --g-header: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* --- 基础重置 --- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Inter", sans-serif;
  background-color: var(--bg-body);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden; /* 防止横向滚动 */
}
a {
  text-decoration: none;
  color: inherit;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
} /* 加宽以容纳横向展示 */

/* --- Hero (保持简约) --- */
.hero-section {
  padding: 100px 0 60px;
  text-align: center;
}
.project-title {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(90deg, #1a202c, #4a5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
}
.project-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin-bottom: 32px;
}
.btn-group {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
}
.btn {
  padding: 10px 24px;
  border-radius: 50px;
  font-weight: 500;
  transition: 0.2s;
  border: 1px solid #e5e7eb;
  background: white;
  color: #374151;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.btn.primary {
  background: #1f2937;
  color: white;
  border-color: #1f2937;
}

/* --- Section Styling --- */
.section {
  margin-bottom: 120px;
}
.section-header {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
}
.section-header::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  margin: 16px auto 0;
  background: linear-gradient(90deg, #a78bfa, #f472b6);
  border-radius: 2px;
}

/* --- TREE DIAGRAM (保留之前的 CSS Tree) --- */
.tree-wrapper {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  overflow-x: auto;
  margin-bottom: 60px;
}
.tree {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tree-root {
  padding: 10px 24px;
  border-radius: 8px;
  background: #1f2937;
  color: white;
  font-weight: 600;
  position: relative;
  margin-bottom: 30px;
  z-index: 2;
}
.tree-root::after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  width: 2px;
  height: 30px;
  background: #cbd5e1;
}
.tree-branches {
  display: flex;
  gap: 12px;
  position: relative;
  padding-top: 10px;
}
.tree-branches::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50px;
  right: 50px;
  height: 2px;
  background: #cbd5e1;
}
.tree-branches::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  width: 2px;
  height: 10px;
  background: #cbd5e1;
}

.mini-topic-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  position: relative;
}
.mini-topic-node::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 50%;
  width: 2px;
  height: 20px;
  background: #cbd5e1;
}
.mini-topic-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 8px 4px;
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  color: #4b5563;
}

/* --- DETAILED TOPIC ROWS (新设计的核心) --- */
.topic-row {
  display: flex;
  gap: 40px;
  margin-bottom: 100px;
  align-items: flex-start;
  border-bottom: 1px solid #f9fafb;
  padding-bottom: 60px;
}
/* 最后一个不显示分割线 */
.topic-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

/* 左侧：Topic Info */
.topic-info {
  flex: 0 0 280px; /* 固定宽度 */
  position: sticky;
  top: 20px;
}
.topic-label {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  background: #f3f4f6;
  color: var(--text-muted);
}
.topic-title-lg {
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
  color: var(--text-main);
}
.topic-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  text-align: justify;
}

/* 右侧：Subtasks Grid */
.subtasks-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 强制3列 */
  gap: 24px;
}

.subtask-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;
  border: 1px solid transparent;
}
.subtask-card:hover {
  transform: translateY(-4px);
}

/* 视频/图片占位符 */
.media-placeholder {
  width: 100%;
  aspect-ratio: 16/9; /* 保持16:9比例 */
  background-color: #e5e7eb;
  background-image: linear-gradient(
    45deg,
    #f3f4f6 25%,
    #e5e7eb 25%,
    #e5e7eb 50%,
    #f3f4f6 50%,
    #f3f4f6 75%,
    #e5e7eb 75%,
    #e5e7eb 100%
  );
  background-size: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* 悬停时的遮罩 */
.media-placeholder::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s;
}
.media-placeholder:hover::after {
  opacity: 1;
}

.play-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f2937;
  font-size: 14px;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.media-placeholder:hover .play-icon {
  transform: scale(1.1);
}

/* 占位符文字提示 */
.media-tag {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.6rem;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  z-index: 2;
}

.subtask-content {
  padding: 16px 4px;
}
.subtask-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #374151;
}
.subtask-desc {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.4;
}

/* 颜色修饰 */
.border-t-blue {
  border-top: 3px solid var(--c-blue);
}
.border-t-purple {
  border-top: 3px solid var(--c-purple);
}
.border-t-pink {
  border-top: 3px solid var(--c-pink);
}
.border-t-green {
  border-top: 3px solid var(--c-green);
}
.border-t-orange {
  border-top: 3px solid var(--c-orange);
}
.border-t-red {
  border-top: 3px solid var(--c-red);
}

.text-blue {
  color: var(--c-blue);
}
.text-purple {
  color: var(--c-purple);
}
.text-pink {
  color: var(--c-pink);
}
.text-green {
  color: var(--c-green);
}
.text-orange {
  color: var(--c-orange);
}
.text-red {
  color: var(--c-red);
}

/* --- Footer --- */
footer {
  border-top: 1px solid #f3f4f6;
  padding: 40px 0;
  margin-top: 80px;
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
}

/* Mobile 适配 */
@media (max-width: 900px) {
  .topic-row {
    flex-direction: column;
    gap: 20px;
  }
  .topic-info {
    position: static;
    width: 100%;
    margin-bottom: 20px;
  }
  .subtasks-container {
    grid-template-columns: 1fr;
    width: 100%;
  } /* 移动端单列 */
  .tree-branches {
    flex-wrap: wrap;
    justify-content: center;
  }
  .mini-topic-node {
    width: 30%;
    margin-bottom: 15px;
  }
  .mini-topic-node::before {
    display: none;
  }
  .tree-branches::before {
    display: none;
  }
}
</style>
