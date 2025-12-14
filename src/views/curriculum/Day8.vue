<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 8</span>
      <h1>컴포넌트 기초</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>컴포넌트의 개념과 필요성 이해</li>
          <li>전역 및 지역 컴포넌트 등록</li>
          <li>컴포넌트 재사용</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. 컴포넌트란?</h3>
        <p>컴포넌트는 재사용 가능한 Vue 인스턴스입니다. UI를 독립적이고 재사용 가능한 조각으로 나눌 수 있습니다.</p>

        <h3>2. 전역 컴포넌트 등록</h3>
        <div class="code-block">
          <pre><code class="language-javascript">// main.js에서 전역 등록
Vue.component('my-button', {
  template: '&lt;button&gt;클릭&lt;/button&gt;'
})

// 어디서든 사용 가능
&lt;my-button&gt;&lt;/my-button&gt;</code></pre>
        </div>

        <h3>3. 지역 컴포넌트 등록</h3>
        <div class="code-block">
          <pre><code class="language-javascript">// 컴포넌트 정의
const MyButton = {
  template: '&lt;button&gt;클릭&lt;/button&gt;'
}

export default {
  components: {
    MyButton  // 지역 등록
  }
}</code></pre>
        </div>

        <h3>4. 싱글 파일 컴포넌트 (.vue)</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;template&gt;
  &lt;button class="my-btn"&gt;{{ text }}&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'MyButton',
  data() {
    return {
      text: '클릭하세요'
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.my-btn {
  padding: 10px 20px;
}
&lt;/style&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>카운터 컴포넌트 (각각 독립적인 상태)</h4>
          <div class="counter-grid">
            <div class="counter-item" v-for="(counter, index) in counters" :key="index">
              <p>카운터 {{ index + 1 }}: <strong>{{ counter }}</strong></p>
              <button @click="increment(index)">+1</button>
              <button @click="decrement(index)">-1</button>
            </div>
          </div>
          <button @click="addCounter" class="add-btn">+ 카운터 추가</button>

          <h4 style="margin-top: 30px;">카드 컴포넌트 예제</h4>
          <div class="card-grid">
            <div class="card" v-for="card in cards" :key="card.id">
              <div class="card-header">{{ card.title }}</div>
              <div class="card-body">{{ card.content }}</div>
              <div class="card-footer">
                <button @click="likeCard(card)">👍 {{ card.likes }}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ 컴포넌트는 재사용 가능한 Vue 인스턴스</p>
          <p>✅ 전역 등록: 어디서든 사용 가능, 빌드 크기 증가 가능</p>
          <p>✅ 지역 등록: 필요한 곳에서만 사용, 권장 방식</p>
          <p>✅ 각 컴포넌트 인스턴스는 독립적인 상태를 가짐</p>
          <p>✅ 컴포넌트 이름은 kebab-case 또는 PascalCase 사용</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>AlertBox 컴포넌트 만들기 (성공/경고/에러 타입)</li>
          <li>UserAvatar 컴포넌트 만들기 (이미지와 이름 표시)</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day7" class="prev-btn">← Day 7: 1주차 복습</router-link>
      <router-link to="/curriculum/day9" class="next-btn">Day 9: Props →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day8',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      counters: [0, 0, 0],
      cards: [
        { id: 1, title: 'Vue.js', content: '프론트엔드 프레임워크', likes: 0 },
        { id: 2, title: 'Component', content: '재사용 가능한 UI 조각', likes: 0 },
        { id: 3, title: 'SFC', content: '싱글 파일 컴포넌트', likes: 0 }
      ]
    }
  },
  methods: {
    increment(index) {
      this.$set(this.counters, index, this.counters[index] + 1)
    },
    decrement(index) {
      this.$set(this.counters, index, this.counters[index] - 1)
    },
    addCounter() {
      this.counters.push(0)
    },
    likeCard(card) {
      card.likes++
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

.counter-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 15px;
}

.counter-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.counter-item button {
  background: #42b983;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  margin: 0 5px;
  cursor: pointer;
}

.add-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card-header {
  background: #42b983;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
}

.card-body {
  padding: 15px;
  color: #666;
}

.card-footer {
  padding: 10px 15px;
  border-top: 1px solid #eee;
}

.card-footer button {
  background: none;
  border: 1px solid #ddd;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.card-footer button:hover {
  background: #f5f5f5;
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
