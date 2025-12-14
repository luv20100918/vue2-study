<template>
  <div class="lesson">
    <div class="lesson-header">
      <router-link to="/curriculum" class="back-link">← 커리큘럼으로 돌아가기</router-link>
      <span class="day-badge">Day 14</span>
      <h1>2주차 복습 & 실습</h1>
      <p class="duration">⏱️ 예상 소요 시간: 30분</p>
    </div>

    <div class="lesson-content">
      <section>
        <h2>📌 이번 주 배운 내용</h2>
        <div class="review-grid">
          <div class="review-card">
            <h3>Day 8: 컴포넌트 기초</h3>
            <ul>
              <li>전역/지역 컴포넌트 등록</li>
              <li>싱글 파일 컴포넌트</li>
              <li>컴포넌트 재사용</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 9: Props</h3>
            <ul>
              <li>부모 → 자식 데이터 전달</li>
              <li>Props 타입 검증</li>
              <li>기본값과 필수값</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 10: Custom Events</h3>
            <ul>
              <li>$emit으로 이벤트 발생</li>
              <li>자식 → 부모 통신</li>
              <li>.sync 수식어</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 11: Slots</h3>
            <ul>
              <li>기본 슬롯</li>
              <li>이름이 있는 슬롯</li>
              <li>Scoped Slots</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 12: 동적 컴포넌트</h3>
            <ul>
              <li>component :is</li>
              <li>keep-alive</li>
              <li>비동기 컴포넌트</li>
            </ul>
          </div>
          <div class="review-card">
            <h3>Day 13: 스타일링</h3>
            <ul>
              <li>Scoped CSS</li>
              <li>동적 클래스/스타일</li>
              <li>::v-deep</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>🎯 미니 프로젝트: 연락처 관리 앱</h2>
        <p>2주차에 배운 컴포넌트 개념을 활용한 연락처 관리 앱입니다!</p>

        <div class="demo-box">
          <div class="contacts-app">
            <div class="contacts-sidebar">
              <h4>📇 연락처 목록</h4>
              <div class="contact-search">
                <input
                  v-model="searchQuery"
                  placeholder="이름으로 검색..."
                >
              </div>
              <ul class="contact-list">
                <li
                  v-for="contact in filteredContacts"
                  :key="contact.id"
                  :class="['contact-item', { active: selectedContact?.id === contact.id }]"
                  @click="selectContact(contact)"
                >
                  <span class="contact-avatar" :style="{ background: contact.color }">
                    {{ contact.name.charAt(0) }}
                  </span>
                  <div class="contact-brief">
                    <strong>{{ contact.name }}</strong>
                    <span>{{ contact.phone }}</span>
                  </div>
                </li>
              </ul>
              <button class="add-contact-btn" @click="showAddForm = true">
                + 새 연락처
              </button>
            </div>

            <div class="contacts-main">
              <div v-if="selectedContact" class="contact-detail">
                <div class="detail-header">
                  <span class="detail-avatar" :style="{ background: selectedContact.color }">
                    {{ selectedContact.name.charAt(0) }}
                  </span>
                  <div>
                    <h3>{{ selectedContact.name }}</h3>
                    <span :class="['status-badge', selectedContact.status]">
                      {{ selectedContact.status === 'active' ? '활성' : '비활성' }}
                    </span>
                  </div>
                </div>
                <div class="detail-body">
                  <div class="detail-row">
                    <span class="label">📱 전화번호</span>
                    <span>{{ selectedContact.phone }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">✉️ 이메일</span>
                    <span>{{ selectedContact.email }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">🏢 회사</span>
                    <span>{{ selectedContact.company }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">🏷️ 그룹</span>
                    <div class="tags">
                      <span
                        v-for="tag in selectedContact.tags"
                        :key="tag"
                        class="tag"
                      >{{ tag }}</span>
                    </div>
                  </div>
                </div>
                <div class="detail-actions">
                  <button class="edit-btn" @click="editContact">✏️ 수정</button>
                  <button class="delete-btn" @click="deleteContact">🗑️ 삭제</button>
                </div>
              </div>
              <div v-else class="no-selection">
                <p>👈 연락처를 선택하세요</p>
              </div>
            </div>
          </div>

          <!-- 연락처 추가 모달 -->
          <div v-if="showAddForm" class="modal-overlay" @click.self="showAddForm = false">
            <div class="modal-content">
              <h4>새 연락처 추가</h4>
              <form @submit.prevent="addContact">
                <input v-model="newContact.name" placeholder="이름" required>
                <input v-model="newContact.phone" placeholder="전화번호" required>
                <input v-model="newContact.email" placeholder="이메일" type="email">
                <input v-model="newContact.company" placeholder="회사">
                <div class="modal-actions">
                  <button type="button" @click="showAddForm = false">취소</button>
                  <button type="submit" class="primary">추가</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>✅ 2주차 체크리스트</h2>
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
          <p>🚀 3주차에는 <strong>심화 개념</strong>을 배웁니다!</p>
          <p>• Computed 속성과 캐싱</p>
          <p>• Watch로 데이터 변화 감지</p>
          <p>• 라이프사이클 훅 심화</p>
          <p>• Refs와 DOM 접근</p>
        </div>
      </section>
    </div>

    <div class="lesson-nav">
      <router-link to="/curriculum/day13" class="prev-btn">← Day 13: 컴포넌트 스타일링</router-link>
      <router-link to="/curriculum/day15" class="next-btn">Day 15: Computed 속성 →</router-link>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Day14',
  mounted() {
    Prism.highlightAll()
  },
  data() {
    return {
      searchQuery: '',
      selectedContact: null,
      showAddForm: false,
      newContact: {
        name: '',
        phone: '',
        email: '',
        company: ''
      },
      contacts: [
        {
          id: 1,
          name: '김철수',
          phone: '010-1234-5678',
          email: 'kim@example.com',
          company: '테크 주식회사',
          color: '#3498db',
          status: 'active',
          tags: ['친구', 'VIP']
        },
        {
          id: 2,
          name: '이영희',
          phone: '010-2345-6789',
          email: 'lee@example.com',
          company: '디자인 스튜디오',
          color: '#e74c3c',
          status: 'active',
          tags: ['가족']
        },
        {
          id: 3,
          name: '박민수',
          phone: '010-3456-7890',
          email: 'park@example.com',
          company: '스타트업',
          color: '#2ecc71',
          status: 'inactive',
          tags: ['동료']
        },
        {
          id: 4,
          name: '정수진',
          phone: '010-4567-8901',
          email: 'jung@example.com',
          company: '프리랜서',
          color: '#9b59b6',
          status: 'active',
          tags: ['친구', '동료']
        }
      ],
      nextId: 5,
      checklist: [
        { text: '컴포넌트를 생성하고 등록할 수 있다', done: false },
        { text: 'Props로 데이터를 전달할 수 있다', done: false },
        { text: '$emit으로 이벤트를 전달할 수 있다', done: false },
        { text: 'Slot으로 콘텐츠를 전달할 수 있다', done: false },
        { text: '동적 컴포넌트를 사용할 수 있다', done: false },
        { text: 'Scoped CSS를 이해한다', done: false },
        { text: '동적 클래스/스타일 바인딩을 사용할 수 있다', done: false }
      ]
    }
  },
  computed: {
    filteredContacts() {
      if (!this.searchQuery) return this.contacts
      const query = this.searchQuery.toLowerCase()
      return this.contacts.filter(c => c.name.toLowerCase().includes(query))
    },
    completedCount() {
      return this.checklist.filter(item => item.done).length
    },
    progressPercent() {
      return Math.round((this.completedCount / this.checklist.length) * 100)
    }
  },
  methods: {
    selectContact(contact) {
      this.selectedContact = contact
    },
    addContact() {
      const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c']
      this.contacts.push({
        id: this.nextId++,
        ...this.newContact,
        color: colors[Math.floor(Math.random() * colors.length)],
        status: 'active',
        tags: []
      })
      this.newContact = { name: '', phone: '', email: '', company: '' }
      this.showAddForm = false
    },
    editContact() {
      alert('수정 기능은 과제로 구현해보세요!')
    },
    deleteContact() {
      if (confirm(`${this.selectedContact.name}을(를) 삭제하시겠습니까?`)) {
        const index = this.contacts.findIndex(c => c.id === this.selectedContact.id)
        this.contacts.splice(index, 1)
        this.selectedContact = null
      }
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

.contacts-app {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 20px;
  min-height: 400px;
}

@media (max-width: 700px) {
  .contacts-app {
    grid-template-columns: 1fr;
  }
}

.contacts-sidebar {
  background: white;
  border-radius: 8px;
  padding: 15px;
}

.contacts-sidebar h4 {
  margin: 0 0 15px;
}

.contact-search input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 250px;
  overflow-y: auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.contact-item:hover {
  background: #f5f5f5;
}

.contact-item.active {
  background: #e8f5e9;
}

.contact-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.contact-brief {
  display: flex;
  flex-direction: column;
  font-size: 13px;
}

.contact-brief span {
  color: #999;
}

.add-contact-btn {
  width: 100%;
  padding: 10px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.contacts-main {
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.no-selection {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;
}

.contact-detail {}

.detail-header {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.detail-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.detail-header h3 {
  margin: 0 0 5px;
}

.status-badge {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
}

.status-badge.active {
  background: #d4edda;
  color: #155724;
}

.status-badge.inactive {
  background: #f8d7da;
  color: #721c24;
}

.detail-body {
  padding: 20px 0;
}

.detail-row {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.detail-row .label {
  width: 120px;
  color: #666;
}

.tags {
  display: flex;
  gap: 5px;
}

.tag {
  background: #e8f5e9;
  color: #42b983;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 12px;
}

.detail-actions {
  display: flex;
  gap: 10px;
  padding-top: 20px;
}

.edit-btn, .delete-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn {
  background: #3498db;
  color: white;
}

.delete-btn {
  background: #e74c3c;
  color: white;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 25px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
}

.modal-content h4 {
  margin: 0 0 20px;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
}

.modal-actions button {
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-actions button.primary {
  background: #42b983;
  color: white;
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
