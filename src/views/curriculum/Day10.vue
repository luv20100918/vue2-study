<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 10</span>
      <h1>Custom Events</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>$emit으로 자식 → 부모 이벤트 전달</li>
          <li>이벤트와 함께 데이터 전달</li>
          <li>.sync 수식어 활용</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. $emit 기본 사용</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;!-- 자식 컴포넌트 --&gt;
&lt;button @click="$emit('custom-event')"&gt;클릭&lt;/button&gt;

&lt;!-- 부모 컴포넌트 --&gt;
&lt;ChildComponent @custom-event="handleEvent" /&gt;</code></pre>
        </div>

        <h3>2. 데이터와 함께 이벤트 전달</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;!-- 자식 컴포넌트 --&gt;
methods: {
  sendData() {
    this.$emit('submit', {
      name: this.name,
      email: this.email
    })
  }
}

&lt;!-- 부모 컴포넌트 --&gt;
&lt;ChildComponent @submit="handleSubmit" /&gt;

methods: {
  handleSubmit(data) {
    console.log(data.name, data.email)
  }
}</code></pre>
        </div>

        <h3>3. .sync 수식어 (양방향 바인딩)</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;!-- 부모 컴포넌트 --&gt;
&lt;ChildComponent :value.sync="parentValue" /&gt;

&lt;!-- 위는 아래와 동일 --&gt;
&lt;ChildComponent
  :value="parentValue"
  @update:value="parentValue = $event"
/&gt;

&lt;!-- 자식 컴포넌트에서 --&gt;
this.$emit('update:value', newValue)</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>할 일 추가 (자식 → 부모 이벤트)</h4>
          <div class="todo-input">
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
                {{ todo.text }}
              </span>
              <button class="delete-btn" @click="deleteTodo(index)">삭제</button>
            </li>
          </ul>
          <p class="event-log">마지막 이벤트: {{ lastEvent }}</p>

          <h4 style="margin-top: 30px;">평점 선택 컴포넌트</h4>
          <div class="rating-section">
            <div class="stars">
              <span
                v-for="star in 5"
                :key="star"
                class="star"
                :class="{ active: star <= rating }"
                @click="setRating(star)"
              >
                ★
              </span>
            </div>
            <p>선택된 평점: {{ rating }}점</p>
          </div>

          <h4 style="margin-top: 30px;">모달 토글 (.sync 패턴)</h4>
          <button @click="showModal = true" class="open-modal-btn">모달 열기</button>
          <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
            <div class="modal-content">
              <h4>알림</h4>
              <p>이것은 모달 창입니다.</p>
              <button @click="showModal = false">닫기</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ <code>$emit('event-name')</code>으로 커스텀 이벤트 발생</p>
          <p>✅ 이벤트 이름은 kebab-case 사용 권장</p>
          <p>✅ <code>$emit('event', data)</code>로 데이터 전달</p>
          <p>✅ <code>.sync</code>는 양방향 바인딩의 축약 문법</p>
          <p>⚠️ Props down, Events up 패턴 기억하기</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>검색 입력 컴포넌트 만들기 (검색어 입력 시 이벤트 발생)</li>
          <li>확인/취소가 있는 Dialog 컴포넌트 만들기</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day9" class="prev-btn">← Day 9: Props</router-link>
      <router-link to="/curriculum/day11" class="next-btn">Day 11: Slots →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day10',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      newTodo: '',
      nextId: 3,
      todos: [
        { id: 1, text: 'Vue.js 컴포넌트 배우기', done: false },
        { id: 2, text: '$emit 이해하기', done: true }
      ],
      lastEvent: '없음',
      rating: 0,
      showModal: false
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
        this.lastEvent = `추가: "${this.newTodo}"`
        this.newTodo = ''
      }
    },
    toggleTodo(index) {
      this.todos[index].done = !this.todos[index].done
      this.lastEvent = `토글: "${this.todos[index].text}"`
    },
    deleteTodo(index) {
      const deleted = this.todos[index].text
      this.todos.splice(index, 1)
      this.lastEvent = `삭제: "${deleted}"`
    },
    setRating(value) {
      this.rating = value
      this.lastEvent = `평점 선택: ${value}점`
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

.todo-input {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.todo-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.todo-input button {
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
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.event-log {
  background: #2c3e50;
  color: #42b983;
  padding: 10px;
  border-radius: 4px;
  font-family: monospace;
}

.rating-section {
  text-align: center;
}

.stars {
  font-size: 30px;
}

.star {
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s;
}

.star.active {
  color: #f1c40f;
}

.star:hover {
  color: #f39c12;
}

.open-modal-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  min-width: 300px;
}

.modal-content h4 {
  margin: 0 0 15px;
  color: #2c3e50;
}

.modal-content button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
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
