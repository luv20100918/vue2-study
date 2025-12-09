<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 2</span>
      <h1>템플릿 문법</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>머스태시(Mustache) 문법으로 데이터 바인딩</li>
          <li>v-bind로 속성 바인딩</li>
          <li>v-html로 HTML 렌더링</li>
          <li>JavaScript 표현식 사용법</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. 머스태시 문법 {{ }}</h3>
        <p>데이터를 텍스트로 출력하는 가장 기본적인 방법입니다.</p>
        <div class="code-block">
          <pre><code>&lt;p&gt;메시지: {{ message }}&lt;/p&gt;
&lt;p&gt;계산: {{ 1 + 1 }}&lt;/p&gt;
&lt;p&gt;메서드 호출: {{ message.toUpperCase() }}&lt;/p&gt;</code></pre>
        </div>

        <h3>2. v-bind (속성 바인딩)</h3>
        <p>HTML 속성에 동적으로 값을 바인딩합니다.</p>
        <div class="code-block">
          <pre><code>&lt;!-- 전체 문법 --&gt;
&lt;img v-bind:src="imageUrl"&gt;

&lt;!-- 축약 문법 (권장) --&gt;
&lt;img :src="imageUrl"&gt;
&lt;a :href="link"&gt;링크&lt;/a&gt;
&lt;button :disabled="isDisabled"&gt;버튼&lt;/button&gt;</code></pre>
        </div>

        <h3>3. v-html (HTML 렌더링)</h3>
        <p>HTML 문자열을 실제 HTML로 렌더링합니다. (XSS 주의!)</p>
        <div class="code-block">
          <pre><code>&lt;div v-html="htmlContent"&gt;&lt;/div&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>머스태시 문법</h4>
          <p>메시지: {{ message }}</p>
          <p>대문자: {{ message.toUpperCase() }}</p>
          <p>글자 수: {{ message.length }}자</p>

          <h4 style="margin-top: 20px;">v-bind 예제</h4>
          <p>
            <a :href="link" target="_blank">{{ linkText }}</a>
          </p>
          <p>
            <button :disabled="isDisabled">
              {{ isDisabled ? '비활성화됨' : '활성화됨' }}
            </button>
            <button @click="toggleDisabled" style="margin-left: 10px;">토글</button>
          </p>

          <h4 style="margin-top: 20px;">v-html 예제</h4>
          <div v-html="htmlContent"></div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ <code>{{ }}</code> 안에서 JavaScript 표현식 사용 가능</p>
          <p>✅ <code>:속성</code>은 <code>v-bind:속성</code>의 축약형</p>
          <p>✅ v-html은 신뢰할 수 있는 콘텐츠에만 사용 (XSS 위험)</p>
          <p>⚠️ <code>{{ }}</code> 안에서 if문 사용 불가 → 삼항 연산자 사용</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>이미지 URL을 data에 저장하고 :src로 바인딩해보세요</li>
          <li>입력값에 따라 버튼의 disabled 상태를 변경해보세요</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day1" class="prev-btn">← Day 1: Vue 인스턴스</router-link>
      <router-link to="/curriculum/day3" class="next-btn">Day 3: 조건부 렌더링 →</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Day2',
  data() {
    return {
      message: 'Hello Vue!',
      link: 'https://vuejs.org',
      linkText: 'Vue.js 공식 사이트',
      isDisabled: false,
      htmlContent: '<strong style="color: #42b983;">HTML이 렌더링됩니다!</strong>'
    }
  },
  methods: {
    toggleDisabled() {
      this.isDisabled = !this.isDisabled
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
  background: #2d2d2d;
  border-radius: 8px;
  padding: 15px;
  overflow-x: auto;
  margin: 15px 0;
}

.code-block code {
  color: #f8f8f2;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.5;
}

.demo-box {
  background: #f9f9f9;
  border: 2px dashed #42b983;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
}

.demo-box button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.demo-box button:disabled {
  background: #ccc;
  cursor: not-allowed;
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

code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  color: #e83e8c;
}
</style>
