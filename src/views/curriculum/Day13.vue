<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 13</span>
      <h1>컴포넌트 스타일링</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>Scoped CSS로 스타일 캡슐화</li>
          <li>Deep Selector로 자식 컴포넌트 스타일링</li>
          <li>동적 클래스와 스타일 바인딩</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. Scoped CSS</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;style scoped&gt;
/* 이 컴포넌트에만 적용됨 */
.button {
  background: blue;
}
&lt;/style&gt;

/* 컴파일 결과 */
.button[data-v-abc123] {
  background: blue;
}</code></pre>
        </div>

        <h3>2. Deep Selector (자식 컴포넌트 스타일링)</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;style scoped&gt;
/* 자식 컴포넌트의 .inner 클래스에 적용 */
.parent ::v-deep .inner {
  color: red;
}

/* 또는 (Vue 2.x) */
.parent >>> .inner {
  color: red;
}

/* 또는 */
.parent /deep/ .inner {
  color: red;
}
&lt;/style&gt;</code></pre>
        </div>

        <h3>3. 동적 클래스 바인딩</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;!-- 객체 문법 --&gt;
&lt;div :class="{ active: isActive, error: hasError }"&gt;&lt;/div&gt;

&lt;!-- 배열 문법 --&gt;
&lt;div :class="[baseClass, { active: isActive }]"&gt;&lt;/div&gt;

&lt;!-- 동적 스타일 --&gt;
&lt;div :style="{ color: textColor, fontSize: size + 'px' }"&gt;&lt;/div&gt;

&lt;!-- 스타일 객체 --&gt;
&lt;div :style="styleObject"&gt;&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>동적 클래스 바인딩</h4>
          <div class="button-group">
            <button
              v-for="size in sizes"
              :key="size"
              :class="['btn', `btn--${size}`, { 'btn--active': activeSize === size }]"
              @click="activeSize = size"
            >
              {{ size }}
            </button>
          </div>

          <h4 style="margin-top: 30px;">테마 스위처</h4>
          <div class="theme-switcher">
            <button
              v-for="theme in themes"
              :key="theme.name"
              :class="['theme-btn', { active: currentTheme === theme.name }]"
              :style="{ background: theme.primary }"
              @click="currentTheme = theme.name"
            >
              {{ theme.label }}
            </button>
          </div>
          <div class="theme-preview" :class="`theme-${currentTheme}`">
            <h5>테마 미리보기</h5>
            <p>현재 선택된 테마: {{ currentTheme }}</p>
            <button class="preview-btn">버튼 예시</button>
          </div>

          <h4 style="margin-top: 30px;">동적 스타일 바인딩</h4>
          <div class="style-controls">
            <label>
              글자 크기: {{ fontSize }}px
              <input type="range" v-model="fontSize" min="12" max="32">
            </label>
            <label>
              글자 색상:
              <input type="color" v-model="textColor">
            </label>
            <label>
              배경 색상:
              <input type="color" v-model="bgColor">
            </label>
          </div>
          <div
            class="style-preview"
            :style="{
              fontSize: fontSize + 'px',
              color: textColor,
              backgroundColor: bgColor
            }"
          >
            동적으로 스타일이 변경됩니다!
          </div>

          <h4 style="margin-top: 30px;">상태에 따른 스타일</h4>
          <div class="status-cards">
            <div
              v-for="item in statusItems"
              :key="item.id"
              :class="['status-card', `status-${item.status}`]"
            >
              <span class="status-icon">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ <code>scoped</code>로 스타일 캡슐화 (다른 컴포넌트에 영향 없음)</p>
          <p>✅ <code>::v-deep</code>으로 자식 컴포넌트 스타일 수정</p>
          <p>✅ <code>:class</code>로 객체/배열 문법으로 동적 클래스</p>
          <p>✅ <code>:style</code>로 인라인 스타일 동적 바인딩</p>
          <p>⚠️ scoped CSS는 성능에 약간의 영향이 있을 수 있음</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>다크/라이트 테마 토글 컴포넌트 만들기</li>
          <li>상태(success, warning, error)에 따라 스타일이 바뀌는 Alert 컴포넌트</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day12" class="prev-btn">← Day 12: 동적 컴포넌트</router-link>
      <router-link to="/curriculum/day14" class="next-btn">Day 14: 2주차 복습 →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day13',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      sizes: ['small', 'medium', 'large'],
      activeSize: 'medium',
      themes: [
        { name: 'green', label: '그린', primary: '#42b983' },
        { name: 'blue', label: '블루', primary: '#3498db' },
        { name: 'purple', label: '퍼플', primary: '#9b59b6' },
        { name: 'orange', label: '오렌지', primary: '#e67e22' }
      ],
      currentTheme: 'green',
      fontSize: 16,
      textColor: '#2c3e50',
      bgColor: '#ffffff',
      statusItems: [
        { id: 1, status: 'success', label: '완료', icon: '✅' },
        { id: 2, status: 'warning', label: '주의', icon: '⚠️' },
        { id: 3, status: 'error', label: '오류', icon: '❌' },
        { id: 4, status: 'info', label: '정보', icon: 'ℹ️' }
      ]
    }
  }
}
</script>

<style scoped>
.lesson {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.lesson-header {
  margin-bottom: 30px;
}

.back-link {
  color: #42b983;
  text-decoration: none;
  font-size: 14px;
}

.day-badge {
  display: inline-block;
  background: #42b983;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 14px;
  margin: 15px 0 10px;
}

h1 {
  color: #2c3e50;
  margin: 10px 0;
}

.duration {
  color: #666;
}

section {
  margin-bottom: 30px;
}

h2 {
  color: #42b983;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

h3 {
  color: #2c3e50;
  margin-top: 20px;
}

.code-block {
  margin: 15px 0;
  border-radius: 8px;
  overflow: hidden;
}

.code-block pre {
  margin: 0 !important;
  border-radius: 8px !important;
}

.code-block pre code {
  font-size: 14px !important;
  line-height: 1.5 !important;
}

.demo-box {
  background: #f9f9f9;
  border: 2px dashed #42b983;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #ddd;
  color: #333;
}

.btn--small {
  padding: 5px 10px;
  font-size: 12px;
}

.btn--medium {
  padding: 10px 20px;
  font-size: 14px;
}

.btn--large {
  padding: 15px 30px;
  font-size: 16px;
}

.btn--active {
  background: #42b983;
  color: white;
}

.theme-switcher {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.theme-btn {
  width: 80px;
  height: 40px;
  border: 2px solid transparent;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 12px;
}

.theme-btn.active {
  border-color: #2c3e50;
  box-shadow: 0 0 0 2px white;
}

.theme-preview {
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s;
}

.theme-preview h5 {
  margin: 0 0 10px;
}

.preview-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.theme-green {
  background: #e8f5e9;
}
.theme-green .preview-btn {
  background: #42b983;
}

.theme-blue {
  background: #e3f2fd;
}
.theme-blue .preview-btn {
  background: #3498db;
}

.theme-purple {
  background: #f3e5f5;
}
.theme-purple .preview-btn {
  background: #9b59b6;
}

.theme-orange {
  background: #fff3e0;
}
.theme-orange .preview-btn {
  background: #e67e22;
}

.style-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
}

.style-controls label {
  display: flex;
  align-items: center;
  gap: 10px;
}

.style-controls input[type="range"] {
  flex: 1;
}

.style-preview {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #ddd;
  transition: all 0.2s;
}

.status-cards {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.status-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
}

.status-success {
  background: #d4edda;
  color: #155724;
}

.status-warning {
  background: #fff3cd;
  color: #856404;
}

.status-error {
  background: #f8d7da;
  color: #721c24;
}

.status-info {
  background: #d1ecf1;
  color: #0c5460;
}

.status-icon {
  font-size: 16px;
}

.tip-box {
  background: #e8f5e9;
  border-left: 4px solid #42b983;
  padding: 15px;
  border-radius: 0 8px 8px 0;
}

.tip-box p {
  margin: 5px 0;
}

.lesson-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.prev-btn, .next-btn {
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
}

.prev-btn {
  background: #eee;
  color: #333;
}

.next-btn {
  background: #42b983;
  color: white;
}

p code, li code {
  background: #f5f5f5 !important;
  padding: 2px 6px !important;
  border-radius: 3px !important;
  color: #e83e8c !important;
}
</style>
