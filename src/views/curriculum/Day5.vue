<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 5</span>
      <h1>이벤트 핸들링</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>v-on 디렉티브로 이벤트 리스닝</li>
          <li>이벤트 수식어 활용</li>
          <li>키 수식어 사용법</li>
          <li>이벤트 객체 접근</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. 기본 이벤트 리스닝</h3>
        <div class="code-block">
          <pre><code>&lt;!-- 전체 문법 --&gt;
&lt;button v-on:click="handleClick"&gt;클릭&lt;/button&gt;

&lt;!-- 축약 문법 (권장) --&gt;
&lt;button @click="handleClick"&gt;클릭&lt;/button&gt;

&lt;!-- 인라인 표현식 --&gt;
&lt;button @click="count++"&gt;증가&lt;/button&gt;

&lt;!-- 인자 전달 --&gt;
&lt;button @click="say('안녕')"&gt;인사&lt;/button&gt;</code></pre>
        </div>

        <h3>2. 이벤트 수식어</h3>
        <div class="code-block">
          <pre><code>&lt;!-- 이벤트 전파 중단 --&gt;
&lt;a @click.stop="handleClick"&gt;링크&lt;/a&gt;

&lt;!-- 기본 동작 방지 --&gt;
&lt;form @submit.prevent="onSubmit"&gt;...&lt;/form&gt;

&lt;!-- 수식어 체이닝 --&gt;
&lt;a @click.stop.prevent="handleClick"&gt;링크&lt;/a&gt;

&lt;!-- 한 번만 실행 --&gt;
&lt;button @click.once="doOnce"&gt;한번만&lt;/button&gt;

&lt;!-- 자기 자신일 때만 --&gt;
&lt;div @click.self="handleSelf"&gt;...&lt;/div&gt;</code></pre>
        </div>

        <h3>3. 키 수식어</h3>
        <div class="code-block">
          <pre><code>&lt;!-- Enter 키 --&gt;
&lt;input @keyup.enter="submit"&gt;

&lt;!-- ESC 키 --&gt;
&lt;input @keyup.esc="cancel"&gt;

&lt;!-- 조합 키 --&gt;
&lt;input @keyup.ctrl.enter="submit"&gt;

&lt;!-- 주요 키 수식어 --&gt;
.enter, .tab, .delete, .esc, .space
.up, .down, .left, .right
.ctrl, .alt, .shift, .meta</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>기본 클릭 이벤트</h4>
          <button @click="count++">클릭 수: {{ count }}</button>
          <button @click="count = 0" style="margin-left: 10px;">리셋</button>

          <h4 style="margin-top: 25px;">이벤트 객체 접근</h4>
          <button @click="showEvent">클릭 위치 보기</button>
          <p v-if="clickPosition">클릭 위치: X={{ clickPosition.x }}, Y={{ clickPosition.y }}</p>

          <h4 style="margin-top: 25px;">키 수식어</h4>
          <input
            v-model="inputText"
            @keyup.enter="addMessage"
            @keyup.esc="clearInput"
            placeholder="Enter로 추가, ESC로 지우기"
          >
          <ul class="message-list">
            <li v-for="(msg, i) in messages" :key="i">{{ msg }}</li>
          </ul>

          <h4 style="margin-top: 25px;">이벤트 수식어: .prevent</h4>
          <form @submit.prevent="handleSubmit">
            <input v-model="formName" placeholder="이름 입력">
            <button type="submit">제출 (새로고침 안됨)</button>
          </form>
          <p v-if="submitted">제출됨: {{ submitted }}</p>

          <h4 style="margin-top: 25px;">이벤트 수식어: .stop</h4>
          <div class="outer-box" @click="outerClick">
            외부 (클릭해보세요)
            <div class="inner-box" @click.stop="innerClick">
              내부 (.stop 적용)
            </div>
          </div>
          <p>클릭된 곳: {{ clickedArea }}</p>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ <code>@click</code>은 <code>v-on:click</code>의 축약형</p>
          <p>✅ <code>.prevent</code>로 form 기본 제출 동작 방지</p>
          <p>✅ <code>.stop</code>으로 이벤트 버블링 방지</p>
          <p>✅ <code>$event</code>로 네이티브 이벤트 객체 접근</p>
          <p>✅ 키 수식어로 특정 키에만 반응하게 설정 가능</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>더블클릭(@dblclick)으로 카운터 5씩 증가시키기</li>
          <li>Ctrl+Enter로 특별한 메시지 추가하기</li>
          <li>마우스 오버/아웃 이벤트로 색상 변경하기</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day4" class="prev-btn">← Day 4: 리스트 렌더링</router-link>
      <router-link to="/curriculum/day6" class="next-btn">Day 6: 폼 입력 바인딩 →</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Day5',
  data() {
    return {
      count: 0,
      clickPosition: null,
      inputText: '',
      messages: [],
      formName: '',
      submitted: '',
      clickedArea: '없음'
    }
  },
  methods: {
    showEvent(event) {
      this.clickPosition = {
        x: event.clientX,
        y: event.clientY
      }
    },
    addMessage() {
      if (this.inputText.trim()) {
        this.messages.push(this.inputText)
        this.inputText = ''
      }
    },
    clearInput() {
      this.inputText = ''
    },
    handleSubmit() {
      this.submitted = this.formName
      this.formName = ''
    },
    outerClick() {
      this.clickedArea = '외부 박스'
    },
    innerClick() {
      this.clickedArea = '내부 박스 (버블링 중단됨)'
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

.demo-box input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.message-list {
  margin-top: 10px;
  padding-left: 20px;
}

.outer-box {
  background: #3498db;
  color: white;
  padding: 30px;
  border-radius: 8px;
  cursor: pointer;
}

.inner-box {
  background: #e74c3c;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
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
