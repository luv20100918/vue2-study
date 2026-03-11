<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 1</span>
      <h1>Ehdf;;fd;ff</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>뭐가문제냐</li>
          <li>컨플릭없어라</li>
          <li>배고파</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>
        <h3>Vue 인스턴스란?</h3>
        <p>
          모든 Vue 앱은 <code>new Vue()</code>로 생성된 Vue 인스턴스로 시작합니다.
          인스턴스는 Vue 앱의 "루트"이며, 앱의 데이터와 로직을 관리합니다.
        </p>

        <div class="code-block">
          <pre><code class="language-javascript">// Vue 인스턴스 생성
new Vue({
  el: '#app',        // 마운트할 요소
  data: {            // 반응형 데이터
    message: 'Hello Vue!'
  },
  methods: {         // 메서드 정의
    greet() {
      alert(this.message)
    }
  }
})</code></pre>
          <pre><code>// Vue 인스턴스 생성
            new Vue({
              el: '#app',        // 마운트할 요소
              data: {            // 반응형 데이터
                message: 'Hello Vue!'
              },
              methods: {         // 메서드 정의
                greet() {
                  alert(this.message)
                }
              }
            })</code></pre>
        </div>

        <h3>주요 옵션</h3>
        <ul>
          <li><strong>el</strong>: Vue가 관리할 DOM 요소 선택자</li>
          <li><strong>data</strong>: 반응형 데이터 객체 (변경 시 화면 자동 업데이트)</li>
          <li><strong>methods</strong>: 인스턴스에서 사용할 함수들</li>
        </ul>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>
        <p>아래 버튼을 클릭하면 카운터가 증가합니다:</p>

        <div class="demo-box">
          <p>카운트: <strong>{{ count }}</strong></p>
          <button @click="increment">+1 증가</button>
          <button @click="decrement">-1 감소</button>
          <button @click="reset">리셋</button>
        </div>

        <div class="code-block">
          <pre><code class="language-javascript">&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;카운트: {{ count }}&lt;/p&gt;
    &lt;button @click="increment"&gt;+1 증가&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ Vue 인스턴스는 앱의 시작점입니다</p>
          <p>✅ data는 반드시 함수로 반환해야 합니다 (컴포넌트에서)</p>
          <p>✅ methods 내에서 data에 접근할 때 <code>this.변수명</code> 사용</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>위 카운터에 "2배로 증가" 버튼을 추가해보세요</li>
          <li>현재 카운트가 짝수인지 홀수인지 표시해보세요</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <span></span>
      <router-link to="/curriculum/day2" class="next-btn">Day 2: 템플릿 문법 →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day1',
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
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
  text-align: center;
}

.demo-box button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
  transition: background 0.2s;
}

.demo-box button:hover {
  background: #3aa876;
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

.next-btn {
  background: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
}

.next-btn:hover {
  background: #3aa876;
}

p code, li code {
  background: #f5f5f5 !important;
  padding: 2px 6px !important;
  border-radius: 3px !important;
  color: #e83e8c !important;
}
</style>
