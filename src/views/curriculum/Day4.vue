<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 4</span>
      <h1>리스트 렌더링</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>v-for로 배열 렌더링하기</li>
          <li>v-for로 객체 렌더링하기</li>
          <li>key 속성의 중요성 이해</li>
          <li>배열 변경 감지 방법</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. 배열 렌더링</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;ul&gt;
  &lt;li v-for="item in items" :key="item.id"&gt;
    {{ item.name }}
  &lt;/li&gt;
&lt;/ul&gt;

&lt;!-- 인덱스 사용 --&gt;
&lt;li v-for="(item, index) in items" :key="item.id"&gt;
  {{ index }}. {{ item.name }}
&lt;/li&gt;</code></pre>
        </div>

        <h3>2. 객체 렌더링</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;div v-for="(value, key) in object" :key="key"&gt;
  {{ key }}: {{ value }}
&lt;/div&gt;

&lt;!-- 인덱스 포함 --&gt;
&lt;div v-for="(value, key, index) in object" :key="key"&gt;
  {{ index }}. {{ key }}: {{ value }}
&lt;/div&gt;</code></pre>
        </div>

        <h3>3. key 속성</h3>
        <p><code>:key</code>는 Vue가 각 노드를 추적하고 효율적으로 업데이트하기 위해 필수입니다.</p>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;!-- ❌ 권장하지 않음 --&gt;
&lt;li v-for="item in items"&gt;{{ item }}&lt;/li&gt;

&lt;!-- ✅ 권장 --&gt;
&lt;li v-for="item in items" :key="item.id"&gt;{{ item }}&lt;/li&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>할 일 목록</h4>
          <div class="input-group">
            <input
              v-model="newTodo"
              @keyup.enter="addTodo"
              placeholder="할 일을 입력하세요"
            >
            <button @click="addTodo">추가</button>
          </div>

          <ul class="todo-list">
            <li v-for="(todo, index) in todos" :key="todo.id">
              <span :class="{ done: todo.done }" @click="toggleTodo(index)">
                {{ index + 1 }}. {{ todo.text }}
              </span>
              <button class="delete-btn" @click="removeTodo(index)">삭제</button>
            </li>
          </ul>
          <p v-if="todos.length === 0" class="empty-msg">할 일이 없습니다.</p>

          <h4 style="margin-top: 30px;">사용자 정보 (객체 렌더링)</h4>
          <table class="info-table">
            <tr v-for="(value, key) in userInfo" :key="key">
              <td>{{ key }}</td>
              <td>{{ value }}</td>
            </tr>
          </table>

          <h4 style="margin-top: 30px;">숫자 범위 렌더링</h4>
          <span v-for="n in 10" :key="n" class="number-badge">{{ n }}</span>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ <strong>:key</strong>는 항상 고유한 값으로 지정 (id 권장, index는 비권장)</p>
          <p>✅ 배열 변경 메서드: push, pop, shift, unshift, splice, sort, reverse</p>
          <p>✅ 배열 교체 메서드: filter, concat, slice (새 배열 반환)</p>
          <p>⚠️ <code>arr[index] = value</code>는 반응성이 동작하지 않음 → <code>Vue.set()</code> 또는 <code>splice()</code> 사용</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>완료된 할 일만 필터링해서 보여주는 기능 추가</li>
          <li>전체 삭제 버튼 구현</li>
          <li>할 일 개수 표시하기 (예: "총 3개의 할 일")</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day3" class="prev-btn">← Day 3: 조건부 렌더링</router-link>
      <router-link to="/curriculum/day5" class="next-btn">Day 5: 이벤트 핸들링 →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day4',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      newTodo: '',
      nextId: 4,
      todos: [
        { id: 1, text: 'Vue.js 공부하기', done: false },
        { id: 2, text: '운동하기', done: true },
        { id: 3, text: '책 읽기', done: false }
      ],
      userInfo: {
        이름: '홍길동',
        나이: 25,
        직업: '개발자',
        취미: '코딩'
      }
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: this.nextId++,
          text: this.newTodo,
          done: false
        })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done
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

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.input-group input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-group button, .demo-box > button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  margin-bottom: 5px;
  border-radius: 4px;
}

.todo-list li span {
  cursor: pointer;
}

.todo-list li span.done {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  background: #ff6b6b !important;
  padding: 5px 10px !important;
  font-size: 12px;
}

.empty-msg {
  color: #999;
  text-align: center;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
}

.info-table td {
  padding: 8px;
  border: 1px solid #ddd;
}

.info-table td:first-child {
  background: #f5f5f5;
  font-weight: bold;
  width: 100px;
}

.number-badge {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #42b983;
  color: white;
  border-radius: 50%;
  margin: 3px;
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
