<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 7</span>
      <h1>1주차 복습 & 실습</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 이번 주 배운 내용</h2>
        <div class="review-grid">
          <div class="review-card">
            <h3>Day 1: Vue 인스턴스</h3>
            <ul>
              <li>new Vue() 생성</li>
              <li>data, methods 옵션</li>
              <li>반응형 데이터</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 2: 템플릿 문법</h3>
            <ul>
              <li>{{ }} 머스태시</li>
              <li>v-bind (:)</li>
              <li>v-html</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 3: 조건부 렌더링</h3>
            <ul>
              <li>v-if / v-else-if / v-else</li>
              <li>v-show</li>
              <li>v-if vs v-show 차이</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 4: 리스트 렌더링</h3>
            <ul>
              <li>v-for 배열/객체</li>
              <li>:key 속성</li>
              <li>배열 변경 감지</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 5: 이벤트 핸들링</h3>
            <ul>
              <li>@click (v-on)</li>
              <li>이벤트 수식어</li>
              <li>키 수식어</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 6: 폼 바인딩</h3>
            <ul>
              <li>v-model</li>
              <li>다양한 입력 타입</li>
              <li>.lazy, .number, .trim</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>🎯 미니 프로젝트: 쇼핑 카트</h2>
        <p>1주차에 배운 모든 내용을 활용한 간단한 쇼핑 카트를 만들어봅시다!</p>

        <div class="demo-box">
          <div class="shop-container">
            <div class="products-section">
              <h4>🛍️ 상품 목록</h4>
              <div class="product-grid">
                <div
                  v-for="product in products"
                  :key="product.id"
                  class="product-card"
                >
                  <div class="product-emoji">{{ product.emoji }}</div>
                  <h5>{{ product.name }}</h5>
                  <p class="price">{{ product.price.toLocaleString() }}원</p>
                  <button @click="addToCart(product)">담기</button>
                </div>
              </div>
            </div>

            <div class="cart-section">
              <h4>🛒 장바구니 ({{ cartItemCount }}개)</h4>

              <div v-if="cart.length === 0" class="empty-cart">
                장바구니가 비어있습니다
              </div>

              <ul v-else class="cart-list">
                <li v-for="item in cart" :key="item.id">
                  <span>{{ item.emoji }} {{ item.name }}</span>
                  <div class="quantity-control">
                    <button @click="decreaseQuantity(item)">-</button>
                    <span>{{ item.quantity }}</span>
                    <button @click="increaseQuantity(item)">+</button>
                  </div>
                  <span class="item-total">{{ (item.price * item.quantity).toLocaleString() }}원</span>
                  <button class="remove-btn" @click="removeFromCart(item)">×</button>
                </li>
              </ul>

              <div v-show="cart.length > 0" class="cart-footer">
                <div class="discount-section">
                  <input
                    v-model.trim="couponCode"
                    placeholder="쿠폰 코드"
                    @keyup.enter="applyCoupon"
                  >
                  <button @click="applyCoupon">적용</button>
                </div>
                <p v-if="discountApplied" class="discount-msg">✅ 10% 할인 적용됨!</p>

                <div class="total-section">
                  <p>
                    <span>소계:</span>
                    <span>{{ subtotal.toLocaleString() }}원</span>
                  </p>
                  <p v-if="discountApplied" class="discount-row">
                    <span>할인:</span>
                    <span>-{{ discount.toLocaleString() }}원</span>
                  </p>
                  <p class="total-row">
                    <span>총액:</span>
                    <span>{{ total.toLocaleString() }}원</span>
                  </p>
                </div>

                <button class="checkout-btn" @click="checkout">결제하기</button>
                <button class="clear-btn" @click="clearCart">비우기</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>✅ 1주차 체크리스트</h2>
        <div class="checklist">
          <label v-for="(item, index) in checklist" :key="index">
            <input type="checkbox" v-model="item.done">
            <span :class="{ completed: item.done }">{{ item.text }}</span>
          </label>
        </div>
        <p class="progress">진행률: {{ completedCount }}/{{ checklist.length }} ({{ progressPercent }}%)</p>
      </section>

      <section>
        <h2>💡 다음 주 예고</h2>
        <div class="tip-box">
          <p>🚀 2주차에는 <strong>컴포넌트</strong>에 대해 배웁니다!</p>
          <p>• 컴포넌트 생성 및 등록</p>
          <p>• Props로 데이터 전달</p>
          <p>• Custom Events로 이벤트 전달</p>
          <p>• Slots으로 콘텐츠 전달</p>
        </div>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day6" class="prev-btn">← Day 6: 폼 입력 바인딩</router-link>
      <router-link to="/curriculum/day8" class="next-btn">Day 8: 컴포넌트 기초 →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day7',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      products: [
        { id: 1, name: '사과', price: 3000, emoji: '🍎' },
        { id: 2, name: '바나나', price: 2000, emoji: '🍌' },
        { id: 3, name: '오렌지', price: 2500, emoji: '🍊' },
        { id: 4, name: '포도', price: 4000, emoji: '🍇' },
        { id: 5, name: '수박', price: 15000, emoji: '🍉' },
        { id: 6, name: '딸기', price: 5000, emoji: '🍓' }
      ],
      cart: [],
      couponCode: '',
      discountApplied: false,
      checklist: [
        { text: 'Vue 인스턴스 생성할 수 있다', done: false },
        { text: 'data와 methods를 사용할 수 있다', done: false },
        { text: '머스태시 문법과 v-bind를 사용할 수 있다', done: false },
        { text: 'v-if와 v-show의 차이를 안다', done: false },
        { text: 'v-for로 리스트를 렌더링할 수 있다', done: false },
        { text: '이벤트 핸들링과 수식어를 사용할 수 있다', done: false },
        { text: 'v-model로 폼을 다룰 수 있다', done: false }
      ]
    }
  },
  computed: {
    cartItemCount() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0)
    },
    subtotal() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    discount() {
      return this.discountApplied ? Math.floor(this.subtotal * 0.1) : 0
    },
    total() {
      return this.subtotal - this.discount
    },
    completedCount() {
      return this.checklist.filter(item => item.done).length
    },
    progressPercent() {
      return Math.round((this.completedCount / this.checklist.length) * 100)
    }
  },
  methods: {
    addToCart(product) {
      const existing = this.cart.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item)
      this.cart.splice(index, 1)
    },
    increaseQuantity(item) {
      item.quantity++
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(item)
      }
    },
    applyCoupon() {
      if (this.couponCode.toLowerCase() === 'vue10') {
        this.discountApplied = true
      } else {
        alert('유효하지 않은 쿠폰입니다. (힌트: vue10)')
      }
    },
    checkout() {
      alert(`총 ${this.total.toLocaleString()}원 결제되었습니다!`)
      this.clearCart()
    },
    clearCart() {
      this.cart = []
      this.couponCode = ''
      this.discountApplied = false
    }
  }
}
</script>

<style scoped>
.lesson {
  max-width: 900px;
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

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.review-card {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid #42b983;
}

.review-card h3 {
  font-size: 14px;
  color: #2c3e50;
  margin: 0 0 10px 0;
}

.review-card ul {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  color: #666;
}

.demo-box {
  background: #f9f9f9;
  border: 2px dashed #42b983;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
}

.shop-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 700px) {
  .shop-container {
    grid-template-columns: 1fr;
  }
}

.products-section h4, .cart-section h4 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.product-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-emoji {
  font-size: 32px;
}

.product-card h5 {
  margin: 8px 0 5px;
}

.product-card .price {
  color: #42b983;
  font-weight: bold;
  margin: 0 0 10px;
}

.product-card button {
  background: #42b983;
  color: white;
  border: none;
  padding: 6px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.cart-section {
  background: white;
  padding: 15px;
  border-radius: 8px;
}

.empty-cart {
  text-align: center;
  color: #999;
  padding: 30px;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.cart-list li > span:first-child {
  flex: 1;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 5px;
}

.quantity-control button {
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

.item-total {
  width: 70px;
  text-align: right;
}

.remove-btn {
  background: #ff6b6b;
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
}

.cart-footer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 2px solid #eee;
}

.discount-section {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.discount-section input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.discount-section button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.discount-msg {
  color: #42b983;
  font-size: 13px;
  margin: 5px 0;
}

.total-section p {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

.discount-row {
  color: #ff6b6b;
}

.total-row {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  border-top: 1px solid #eee;
  padding-top: 10px;
  margin-top: 10px;
}

.checkout-btn {
  width: 100%;
  background: #42b983;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
}

.clear-btn {
  width: 100%;
  background: #eee;
  color: #666;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
}

.checklist {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.checklist label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.checklist .completed {
  text-decoration: line-through;
  color: #999;
}

.progress {
  margin-top: 15px;
  font-weight: bold;
  color: #42b983;
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
</style>
