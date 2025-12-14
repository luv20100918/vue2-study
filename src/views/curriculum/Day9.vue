<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 9</span>
      <h1>Props</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 학습 목표</h2>
        <ul>
          <li>Props로 부모에서 자식으로 데이터 전달</li>
          <li>Props 타입 검증</li>
          <li>Props 기본값과 필수 여부 설정</li>
        </ul>
      </section>

      <section>
        <h2>📖 개념 설명</h2>

        <h3>1. 기본 Props 사용</h3>
        <div class="code-block">
          <pre><code class="language-javascript">&lt;!-- 부모 컴포넌트 --&gt;
&lt;ChildComponent :message="parentMsg" /&gt;

&lt;!-- 자식 컴포넌트 --&gt;
export default {
  props: ['message']
}</code></pre>
        </div>

        <h3>2. Props 타입 검증</h3>
        <div class="code-block">
          <pre><code class="language-javascript">export default {
  props: {
    // 기본 타입 체크
    title: String,
    count: Number,
    isActive: Boolean,
    items: Array,
    config: Object,

    // 여러 타입 허용
    id: [String, Number],

    // 필수값
    name: {
      type: String,
      required: true
    },

    // 기본값
    age: {
      type: Number,
      default: 0
    },

    // 객체/배열 기본값은 팩토리 함수로
    options: {
      type: Object,
      default: () => ({ color: 'red' })
    }
  }
}</code></pre>
        </div>

        <h3>3. 단방향 데이터 흐름</h3>
        <p>Props는 부모 → 자식으로 단방향으로 흐릅니다. 자식에서 props를 직접 수정하면 안됩니다!</p>
        <div class="code-block">
          <pre><code class="language-javascript">// ❌ 잘못된 방법
this.propValue = 'new value'

// ✅ 올바른 방법 - 로컬 데이터로 복사
data() {
  return {
    localValue: this.propValue
  }
}</code></pre>
        </div>
      </section>

      <section>
        <h2>🔬 실습 예제</h2>

        <div class="demo-box">
          <h4>사용자 카드 (Props로 데이터 전달)</h4>
          <div class="user-cards">
            <div
              v-for="user in users"
              :key="user.id"
              class="user-card"
              :class="{ 'user-card--active': user.isActive }"
            >
              <div class="user-avatar" :style="{ background: user.color }">
                {{ user.name.charAt(0) }}
              </div>
              <div class="user-info">
                <h5>{{ user.name }}</h5>
                <p>{{ user.role }}</p>
                <span class="user-status" :class="user.isActive ? 'online' : 'offline'">
                  {{ user.isActive ? '온라인' : '오프라인' }}
                </span>
              </div>
            </div>
          </div>

          <h4 style="margin-top: 30px;">상품 카드 (다양한 Props 타입)</h4>
          <div class="product-cards">
            <div v-for="product in products" :key="product.id" class="product-card">
              <div class="product-image">{{ product.emoji }}</div>
              <h5>{{ product.name }}</h5>
              <p class="product-price">{{ product.price.toLocaleString() }}원</p>
              <p class="product-stock" :class="{ 'low-stock': product.stock < 10 }">
                재고: {{ product.stock }}개
              </p>
              <div class="product-tags">
                <span v-for="tag in product.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>💡 핵심 포인트</h2>
        <div class="tip-box">
          <p>✅ Props는 부모 → 자식 단방향 데이터 흐름</p>
          <p>✅ Props 검증으로 타입 안전성 확보</p>
          <p>✅ 객체/배열 기본값은 팩토리 함수 사용</p>
          <p>✅ Props를 직접 수정하지 말고, 필요시 로컬 데이터로 복사</p>
          <p>⚠️ camelCase props는 템플릿에서 kebab-case로 사용</p>
        </div>
      </section>

      <section>
        <h2>📝 오늘의 과제</h2>
        <ol>
          <li>Button 컴포넌트에 size, color, disabled props 추가</li>
          <li>ProductCard 컴포넌트 만들고 props 검증 추가</li>
        </ol>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day8" class="prev-btn">← Day 8: 컴포넌트 기초</router-link>
      <router-link to="/curriculum/day10" class="next-btn">Day 10: Custom Events →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day9',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      users: [
        { id: 1, name: '김철수', role: '개발자', isActive: true, color: '#3498db' },
        { id: 2, name: '이영희', role: '디자이너', isActive: false, color: '#e74c3c' },
        { id: 3, name: '박민수', role: 'PM', isActive: true, color: '#2ecc71' }
      ],
      products: [
        { id: 1, name: '무선 키보드', price: 89000, stock: 25, emoji: '⌨️', tags: ['전자기기', '인기'] },
        { id: 2, name: '마우스 패드', price: 15000, stock: 8, emoji: '🖱️', tags: ['액세서리'] },
        { id: 3, name: 'USB 허브', price: 35000, stock: 50, emoji: '🔌', tags: ['전자기기', '신상'] }
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

.user-cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 2px solid transparent;
}

.user-card--active {
  border-color: #42b983;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.user-info h5 {
  margin: 0 0 5px;
  color: #2c3e50;
}

.user-info p {
  margin: 0 0 5px;
  color: #666;
  font-size: 14px;
}

.user-status {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
}

.user-status.online {
  background: #d4edda;
  color: #155724;
}

.user-status.offline {
  background: #f8d7da;
  color: #721c24;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px;
}

.product-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.product-image {
  font-size: 40px;
  margin-bottom: 10px;
}

.product-card h5 {
  margin: 0 0 5px;
  color: #2c3e50;
}

.product-price {
  color: #42b983;
  font-weight: bold;
  margin: 5px 0;
}

.product-stock {
  font-size: 13px;
  color: #666;
}

.product-stock.low-stock {
  color: #e74c3c;
}

.product-tags {
  margin-top: 10px;
}

.tag {
  display: inline-block;
  background: #e8f5e9;
  color: #42b983;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  margin: 2px;
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
