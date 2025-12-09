<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 6</span>
      <h1>폼 입력 바인딩</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>v-model로 양방향 데이터 바인딩</li>
          <li>다양한 폼 요소에 v-model 적용</li>
          <li>v-model 수식어 활용</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. v-model 기본</h3>
        <p>v-model은 폼 입력과 데이터를 양방향으로 바인딩합니다.</p>
        <div class="code-block">
          <pre><code>&lt;input v-model="message"&gt;
&lt;p&gt;입력값: {{ message }}&lt;/p&gt;</code></pre>
        </div>

        <h3>2. 다양한 폼 요소</h3>
        <div class="code-block">
          <pre><code>&lt;!-- 텍스트 --&gt;
&lt;input type="text" v-model="text"&gt;

&lt;!-- 텍스트영역 --&gt;
&lt;textarea v-model="content"&gt;&lt;/textarea&gt;

&lt;!-- 체크박스 (단일) --&gt;
&lt;input type="checkbox" v-model="checked"&gt;

&lt;!-- 체크박스 (다중) --&gt;
&lt;input type="checkbox" value="A" v-model="selected"&gt;
&lt;input type="checkbox" value="B" v-model="selected"&gt;

&lt;!-- 라디오 --&gt;
&lt;input type="radio" value="one" v-model="picked"&gt;
&lt;input type="radio" value="two" v-model="picked"&gt;

&lt;!-- 셀렉트 --&gt;
&lt;select v-model="choice"&gt;
  &lt;option value="a"&gt;A&lt;/option&gt;
  &lt;option value="b"&gt;B&lt;/option&gt;
&lt;/select&gt;</code></pre>
        </div>

        <h3>3. v-model 수식어</h3>
        <div class="code-block">
          <pre><code>&lt;!-- 입력 후 포커스 아웃 시 동기화 --&gt;
&lt;input v-model.lazy="msg"&gt;

&lt;!-- 자동 숫자 변환 --&gt;
&lt;input v-model.number="age" type="number"&gt;

&lt;!-- 앞뒤 공백 제거 --&gt;
&lt;input v-model.trim="name"&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>회원가입 폼 예제</h4>

          <div class="form-group">
            <label>이름:</label>
            <input type="text" v-model.trim="form.name" placeholder="이름">
          </div>

          <div class="form-group">
            <label>나이:</label>
            <input type="number" v-model.number="form.age" placeholder="나이">
          </div>

          <div class="form-group">
            <label>이메일:</label>
            <input type="email" v-model.lazy="form.email" placeholder="포커스 아웃 시 반영">
          </div>

          <div class="form-group">
            <label>자기소개:</label>
            <textarea v-model="form.bio" rows="3" placeholder="자기소개"></textarea>
          </div>

          <div class="form-group">
            <label>뉴스레터 수신:</label>
            <input type="checkbox" v-model="form.newsletter" id="newsletter">
            <label for="newsletter">동의함</label>
          </div>

          <div class="form-group">
            <label>관심 분야:</label>
            <div class="checkbox-group">
              <label><input type="checkbox" value="frontend" v-model="form.interests"> 프론트엔드</label>
              <label><input type="checkbox" value="backend" v-model="form.interests"> 백엔드</label>
              <label><input type="checkbox" value="mobile" v-model="form.interests"> 모바일</label>
              <label><input type="checkbox" value="devops" v-model="form.interests"> DevOps</label>
            </div>
          </div>

          <div class="form-group">
            <label>경력:</label>
            <div class="radio-group">
              <label><input type="radio" value="junior" v-model="form.level"> 주니어</label>
              <label><input type="radio" value="mid" v-model="form.level"> 미들</label>
              <label><input type="radio" value="senior" v-model="form.level"> 시니어</label>
            </div>
          </div>

          <div class="form-group">
            <label>직군:</label>
            <select v-model="form.job">
              <option value="">선택하세요</option>
              <option value="developer">개발자</option>
              <option value="designer">디자이너</option>
              <option value="pm">PM</option>
            </select>
          </div>

          <button @click="submitForm" class="submit-btn">제출</button>

          <div class="result" v-if="showResult">
            <h4>입력된 데이터:</h4>
            <pre>{{ JSON.stringify(form, null, 2) }}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ v-model은 value + input 이벤트의 문법적 설탕(syntactic sugar)</p>
          <p>✅ 체크박스 다중 선택 시 배열로 바인딩</p>
          <p>✅ <code>.number</code>로 숫자 타입 자동 변환</p>
          <p>✅ <code>.lazy</code>는 change 이벤트 후에 동기화 (성능 최적화)</p>
          <p>✅ <code>.trim</code>으로 공백 자동 제거</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>비밀번호 확인 필드 추가하고 일치 여부 표시하기</li>
          <li>폼 유효성 검사 구현 (빈 값 체크)</li>
          <li>다중 선택 select 구현해보기</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day5" class="prev-btn">← Day 5: 이벤트 핸들링</router-link>
      <router-link to="/curriculum/day7" class="next-btn">Day 7: 1주차 복습 →</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Day6',
  data() {
    return {
      form: {
        name: '',
        age: null,
        email: '',
        bio: '',
        newsletter: false,
        interests: [],
        level: '',
        job: ''
      },
      showResult: false
    }
  },
  methods: {
    submitForm() {
      this.showResult = true
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

.form-group {
  margin-bottom: 15px;
}

.form-group > label:first-child {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #2c3e50;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="number"],
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.checkbox-group, .radio-group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.checkbox-group label, .radio-group label {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.submit-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background: #3aa876;
}

.result {
  margin-top: 20px;
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.result pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
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
