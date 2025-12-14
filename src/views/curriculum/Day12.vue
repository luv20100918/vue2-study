<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 12</span>
      <h1>동적 컴포넌트</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>component 태그로 동적 컴포넌트 렌더링</li>
          <li>keep-alive로 상태 유지</li>
          <li>비동기 컴포넌트 로딩</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. 동적 컴포넌트 기본</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;!-- :is 속성으로 동적 컴포넌트 전환 --&gt;
&lt;component :is="currentComponent"&gt;&lt;/component&gt;

&lt;script&gt;
export default {
  data() {
    return {
      currentComponent: 'TabA'
    }
  },
  components: {
    TabA,
    TabB,
    TabC
  }
}
&lt;/script&gt;</code></pre>
        </div>

        <h3>2. keep-alive로 상태 유지</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;!-- 컴포넌트 전환 시 상태가 초기화되는 문제 --&gt;
&lt;component :is="currentTab"&gt;&lt;/component&gt;

&lt;!-- keep-alive로 상태 유지 --&gt;
&lt;keep-alive&gt;
  &lt;component :is="currentTab"&gt;&lt;/component&gt;
&lt;/keep-alive&gt;

&lt;!-- include/exclude로 특정 컴포넌트만 캐시 --&gt;
&lt;keep-alive include="TabA,TabB"&gt;
  &lt;component :is="currentTab"&gt;&lt;/component&gt;
&lt;/keep-alive&gt;</code></pre>
        </div>

        <h3>3. 비동기 컴포넌트</h3>
        <div class="code-block">
          <pre><code class="language-javascript">// 기본 비동기 컴포넌트
const AsyncComponent = () => import('./MyComponent.vue')

// 고급 옵션
const AsyncComponent = () => ({
  component: import('./MyComponent.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>탭 컴포넌트 (동적 컴포넌트)</h4>
          <div class="tabs">
            <button
              v-for="tab in tabs"
              :key="tab.name"
              :class="['tab-btn', { active: currentTab === tab.name }]"
              @click="currentTab = tab.name"
            >
              {{ tab.icon }} {{ tab.label }}
            </button>
          </div>
          <div class="tab-content">
            <div v-if="currentTab === 'home'" class="tab-panel">
              <h5>🏠 홈</h5>
              <p>환영합니다! 이곳은 홈 탭입니다.</p>
            </div>
            <div v-else-if="currentTab === 'profile'" class="tab-panel">
              <h5>👤 프로필</h5>
              <p>사용자 정보를 확인할 수 있습니다.</p>
              <div class="profile-info">
                <p><strong>이름:</strong> 홍길동</p>
                <p><strong>이메일:</strong> hong@example.com</p>
              </div>
            </div>
            <div v-else-if="currentTab === 'settings'" class="tab-panel">
              <h5>⚙️ 설정</h5>
              <p>앱 설정을 변경할 수 있습니다.</p>
              <label class="setting-item">
                <input type="checkbox" v-model="darkMode">
                다크 모드
              </label>
              <label class="setting-item">
                <input type="checkbox" v-model="notifications">
                알림 받기
              </label>
            </div>
          </div>

          <h4 style="margin-top: 30px;">keep-alive 테스트</h4>
          <p class="keep-alive-info">
            아래 카운터의 값을 변경한 후 다른 탭으로 이동했다가 돌아오면,
            <strong>keep-alive 적용 시</strong> 값이 유지됩니다.
          </p>
          <div class="counter-tabs">
            <button
              v-for="(counter, index) in counterTabs"
              :key="index"
              :class="['tab-btn', { active: activeCounter === index }]"
              @click="activeCounter = index"
            >
              카운터 {{ index + 1 }}
            </button>
          </div>
          <div class="counter-panel">
            <p>현재 값: <strong>{{ counterTabs[activeCounter] }}</strong></p>
            <button @click="counterTabs[activeCounter]++">+1</button>
            <button @click="counterTabs[activeCounter]--">-1</button>
            <button @click="counterTabs[activeCounter] = 0">리셋</button>
          </div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ <code>&lt;component :is="..."&gt;</code>로 동적 컴포넌트 렌더링</p>
          <p>✅ <code>&lt;keep-alive&gt;</code>로 컴포넌트 상태 캐싱</p>
          <p>✅ keep-alive는 activated/deactivated 훅 제공</p>
          <p>✅ 비동기 컴포넌트로 코드 스플리팅 가능</p>
          <p>⚠️ keep-alive는 메모리를 사용하므로 필요한 경우에만 사용</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>3개 이상의 탭이 있는 탭 컴포넌트 만들기</li>
          <li>keep-alive로 폼 입력값 유지하는 위저드 만들기</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day11" class="prev-btn">← Day 11: Slots</router-link>
      <router-link to="/curriculum/day13" class="next-btn">Day 13: 컴포넌트 스타일링 →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day12',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      tabs: [
        { name: 'home', label: '홈', icon: '🏠' },
        { name: 'profile', label: '프로필', icon: '👤' },
        { name: 'settings', label: '설정', icon: '⚙️' }
      ],
      currentTab: 'home',
      darkMode: false,
      notifications: true,
      counterTabs: [0, 0, 0],
      activeCounter: 0
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

.tabs, .counter-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 0;
  border-bottom: 2px solid #ddd;
}

.tab-btn {
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  color: #666;
  transition: all 0.2s;
}

.tab-btn:hover {
  color: #42b983;
}

.tab-btn.active {
  color: #42b983;
  border-bottom-color: #42b983;
  font-weight: bold;
}

.tab-content {
  background: white;
  border-radius: 0 0 8px 8px;
}

.tab-panel {
  padding: 20px;
}

.tab-panel h5 {
  margin: 0 0 15px;
  color: #2c3e50;
}

.profile-info {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
}

.profile-info p {
  margin: 5px 0;
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  cursor: pointer;
}

.setting-item input {
  width: 18px;
  height: 18px;
}

.keep-alive-info {
  background: #fff3cd;
  border: 1px solid #ffc107;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 14px;
}

.counter-panel {
  background: white;
  padding: 20px;
  text-align: center;
}

.counter-panel button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
}

.counter-panel button:last-child {
  background: #e74c3c;
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
