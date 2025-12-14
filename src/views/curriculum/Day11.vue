<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 11</span>
      <h1>Slots</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>기본 슬롯으로 콘텐츠 전달</li>
          <li>이름이 있는 슬롯 (Named Slots)</li>
          <li>범위를 가지는 슬롯 (Scoped Slots)</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. 기본 슬롯</h3>
        <div class="code-block">
          <pre v-pre><code class="language-javascript">&lt;!-- 자식 컴포넌트 (Card.vue) --&gt;
&lt;div class="card"&gt;
  &lt;slot&gt;기본 콘텐츠&lt;/slot&gt;
&lt;/div&gt;

&lt;!-- 부모에서 사용 --&gt;
&lt;Card&gt;
  &lt;p&gt;원하는 콘텐츠를 넣습니다&lt;/p&gt;
&lt;/Card&gt;</code></pre>
        </div>

        <h3>2. 이름이 있는 슬롯 (Named Slots)</h3>
        <div class="code-block">
          <pre v-pre><code class="language-javascript">&lt;!-- 자식 컴포넌트 --&gt;
&lt;div class="layout"&gt;
  &lt;header&gt;
    &lt;slot name="header"&gt;&lt;/slot&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;slot&gt;&lt;/slot&gt;  &lt;!-- 기본 슬롯 --&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;slot name="footer"&gt;&lt;/slot&gt;
  &lt;/footer&gt;
&lt;/div&gt;

&lt;!-- 부모에서 사용 --&gt;
&lt;Layout&gt;
  &lt;template v-slot:header&gt;
    &lt;h1&gt;제목&lt;/h1&gt;
  &lt;/template&gt;

  &lt;p&gt;본문 내용&lt;/p&gt;

  &lt;template #footer&gt;  &lt;!-- v-slot: 축약형 --&gt;
    &lt;p&gt;푸터&lt;/p&gt;
  &lt;/template&gt;
&lt;/Layout&gt;</code></pre>
        </div>

        <h3>3. 범위를 가지는 슬롯 (Scoped Slots)</h3>
        <div class="code-block">
          <pre v-pre><code class="language-javascript">&lt;!-- 자식 컴포넌트 --&gt;
&lt;ul&gt;
  &lt;li v-for="item in items" :key="item.id"&gt;
    &lt;slot :item="item" :index="index"&gt;
      {{ item.name }}
    &lt;/slot&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;!-- 부모에서 사용 --&gt;
&lt;ItemList :items="items"&gt;
  &lt;template v-slot:default="{ item, index }"&gt;
    &lt;strong&gt;{{ index + 1 }}.&lt;/strong&gt; {{ item.name }}
  &lt;/template&gt;
&lt;/ItemList&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>기본 슬롯: 카드 컴포넌트</h4>
          <div class="card-examples">
            <div class="slot-card">
              <div class="slot-card-body">
                <p>이것은 기본 카드입니다.</p>
              </div>
            </div>
            <div class="slot-card slot-card--primary">
              <div class="slot-card-body">
                <h5>알림</h5>
                <p>중요한 메시지가 있습니다!</p>
              </div>
            </div>
          </div>

          <h4 style="margin-top: 30px;">이름이 있는 슬롯: 레이아웃</h4>
          <div class="layout-example">
            <div class="layout-header">
              <h5>📋 헤더 영역</h5>
            </div>
            <div class="layout-main">
              <p>본문 콘텐츠가 들어가는 영역입니다.</p>
              <p>이곳에 다양한 내용을 넣을 수 있습니다.</p>
            </div>
            <div class="layout-footer">
              <span>© 2024 Vue Study</span>
            </div>
          </div>

          <h4 style="margin-top: 30px;">범위를 가지는 슬롯: 리스트 렌더링</h4>
          <div class="list-examples">
            <div class="list-example">
              <h5>기본 스타일</h5>
              <ul>
                <li v-for="fruit in fruits" :key="fruit.id">
                  {{ fruit.emoji }} {{ fruit.name }}
                </li>
              </ul>
            </div>
            <div class="list-example">
              <h5>커스텀 스타일</h5>
              <ul class="custom-list">
                <li v-for="(fruit, index) in fruits" :key="fruit.id">
                  <span class="list-index">{{ index + 1 }}</span>
                  <span class="list-emoji">{{ fruit.emoji }}</span>
                  <span class="list-name">{{ fruit.name }}</span>
                  <span class="list-price">{{ fruit.price }}원</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ 슬롯은 컴포넌트에 콘텐츠를 주입하는 방법</p>
          <p>✅ <code>&lt;slot&gt;</code> 태그 안의 내용은 기본값 (fallback)</p>
          <p>✅ <code>v-slot:name</code> 또는 <code>#name</code>으로 이름 지정</p>
          <p>✅ Scoped Slots로 자식의 데이터를 부모에서 사용 가능</p>
          <p>✅ 슬롯을 활용하면 유연한 컴포넌트 설계 가능</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>헤더, 바디, 푸터 슬롯이 있는 Modal 컴포넌트 만들기</li>
          <li>Scoped Slot으로 테이블 셀 커스터마이징하기</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day10" class="prev-btn">← Day 10: Custom Events</router-link>
      <router-link to="/curriculum/day12" class="next-btn">Day 12: 동적 컴포넌트 →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day11',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      fruits: [
        { id: 1, name: '사과', emoji: '🍎', price: 3000 },
        { id: 2, name: '바나나', emoji: '🍌', price: 2000 },
        { id: 3, name: '오렌지', emoji: '🍊', price: 2500 },
        { id: 4, name: '포도', emoji: '🍇', price: 4000 }
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

.card-examples {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.slot-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  min-width: 200px;
}

.slot-card--primary {
  border-top: 3px solid #42b983;
}

.slot-card-body {
  padding: 15px;
}

.slot-card-body h5 {
  margin: 0 0 10px;
  color: #42b983;
}

.slot-card-body p {
  margin: 0;
  color: #666;
}

.layout-example {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.layout-header {
  background: #42b983;
  color: white;
  padding: 15px;
}

.layout-header h5 {
  margin: 0;
}

.layout-main {
  padding: 20px;
  min-height: 100px;
}

.layout-main p {
  margin: 5px 0;
  color: #666;
}

.layout-footer {
  background: #f5f5f5;
  padding: 10px 15px;
  color: #999;
  font-size: 13px;
}

.list-examples {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.list-example {
  background: white;
  padding: 15px;
  border-radius: 8px;
}

.list-example h5 {
  margin: 0 0 10px;
  color: #2c3e50;
}

.list-example ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-example li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.custom-list li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.list-index {
  background: #42b983;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.list-emoji {
  font-size: 20px;
}

.list-name {
  flex: 1;
  font-weight: 500;
}

.list-price {
  color: #42b983;
  font-weight: bold;
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
