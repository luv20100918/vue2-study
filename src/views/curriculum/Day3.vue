<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 3</span>
      <h1>조건부 렌더링</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 ㅇㄹㄴㄹㄴㄹ</h2>
        <ul>
          <li>v-if, v-else-if, v-else 사용법</li>
          <li>v-show와 v-if의 차이점</li>
          <li>상황에 따른 적절한 선택</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. v-if / v-else-if / v-else</h3>
        <p>조건에 따라 요소를 DOM에 추가하거나 제거합니다.</p>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;div v-if="score >= 90"&gt;A등급&lt;/div&gt;
&lt;div v-else-if="score >= 80"&gt;B등급&lt;/div&gt;
&lt;div v-else-if="score >= 70"&gt;C등급&lt;/div&gt;
&lt;div v-else&gt;F등급&lt;/div&gt;</code></pre>
        </div>

        <h3>2. v-show</h3>
        <p>CSS display 속성으로 요소를 숨기거나 보여줍니다.</p>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;div v-show="isVisible"&gt;보이거나 숨겨집니다&lt;/div&gt;</code></pre>
        </div>

        <h3>3. v-if vs v-show 비교</h3>
        <table class="compare-table">
          <tr>
            <th></th>
            <th>v-if</th>
            <th>v-show</th>
          </tr>
          <tr>
            <td>동작 방식</td>
            <td>DOM에서 추가/제거</td>
            <td>display: none 토글</td>
          </tr>
          <tr>
            <td>초기 렌더링 비용</td>
            <td>낮음 (false면 렌더링 안함)</td>
            <td>높음 (항상 렌더링)</td>
          </tr>
          <tr>
            <td>토글 비용</td>
            <td>높음</td>
            <td>낮음</td>
          </tr>
          <tr>
            <td>적합한 경우</td>
            <td>조건 변경이 드문 경우</td>
            <td>자주 토글되는 경우</td>
          </tr>
        </table>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>v-if 예제: 점수에 따른 등급</h4>
          <p>
            점수:
            <input type="number" v-model.number="score" min="0" max="100">
          </p>
          <p class="grade">
            <span v-if="score >= 90">🏆 A등급 - 훌륭합니다!</span>
            <span v-else-if="score >= 80">👍 B등급 - 잘했습니다!</span>
            <span v-else-if="score >= 70">😊 C등급 - 괜찮습니다!</span>
            <span v-else-if="score >= 60">😅 D등급 - 노력하세요!</span>
            <span v-else>😢 F등급 - 분발하세요!</span>
          </p>

          <h4 style="margin-top: 30px;">v-show 예제: 토글</h4>
          <button @click="isVisible = !isVisible">
            {{ isVisible ? '숨기기' : '보이기' }}
          </button>
          <!-- <button :class="['btn-type', { 'btn-dep-fill': isVisible }]" @click="isTitVisible = false">IOS</button>
          <button :class="['btn-type', { 'btn-dep-fill': !isVisible }]" @click="isTitVisible = true">AOS</button> -->
          <button :class="['btn-type', { 'btn-dep-fill': isVisible }]" @click="isTitVisible = false">IOS</button>
          <button :class="['btn-type', { 'btn-dep-fill': !isVisible }]" @click="isTitVisible = true">AOS</button>
          <div v-show="isVisible" class="toggle-box">
            v-show로 토글되는 박스입니다!
          </div>
          <!-- <Sample :isTxtComm="isTitVisible" /> -->
          <Sample :isTxtComm="isTitVisible"/>

          <!-- <div v-show="isTitVisible" class="toggle-box">
            isTitVisible
          </div> -->

          <h4 style="margin-top: 30px;">로그인 상태 예제</h4>
          <div v-if="isLoggedIn">
            <p>환영합니다, {{ username }}님!</p>
            <button @click="logout">로그아웃</button>
          </div>
          <div v-else>
            <p>로그인이 필요합니다.</p>
            <button @click="login">로그인</button>
          </div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ <strong>v-if</strong>: 실제로 DOM에서 제거됨 (조건이 자주 바뀌지 않을 때)</p>
          <p>✅ <strong>v-show</strong>: CSS로 숨김 처리 (자주 토글될 때)</p>
          <p>✅ v-else-if와 v-else는 v-if 바로 뒤에 와야 함</p>
          <p>⚠️ v-if와 v-for를 같은 요소에 사용하지 마세요</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>현재 시간에 따라 "좋은 아침/오후/저녁입니다" 표시하기</li>
          <li>다크모드/라이트모드 토글 버튼 만들기</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day2" class="prev-btn">← Day 2: 템플릿 문법</router-link>
      <router-link to="/curriculum/day4" class="next-btn">Day 4: 리스트 렌더링 →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

import Sample from './Sample.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Day3',
  mounted() {
    Prism.highlightAll()
  },
  components: {
    Sample
  },
  data() {
    return {
      score: 85,
      isVisible: true,
      isLoggedIn: false,
      username: '홍길동',
      isTitVisible: false,
      a: '안녕하세요'
    }
  },
  methods: {
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
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

.demo-box input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 80px;
}

.demo-box button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.grade {
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
}

.toggle-box {
  margin-top: 10px;
  padding: 15px;
  background: #42b983;
  color: white;
  border-radius: 4px;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

.compare-table th, .compare-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.compare-table th {
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
.demo-box button.btn-type{background: #ffffff; border: 1px solid black; color: black;}
.demo-box button.btn-type.btn-dep-fill{background: gray; border: 1px solid black;}
</style>
