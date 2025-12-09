<template>
  <div class="curriculum">
    <h1>Vue 2 학습 커리큘럼</h1>
    <p class="subtitle">하루 30분, 4주 완성 초급자 코스</p>

    <div class="week-section" v-for="week in weeks" :key="week.week">
      <h2>{{ week.title }}</h2>
      <div class="lesson-list">
        <router-link
          v-for="lesson in week.lessons"
          :key="lesson.day"
          :to="`/curriculum/day${lesson.day}`"
          class="lesson-card"
        >
          <span class="day-badge">Day {{ lesson.day }}</span>
          <h3>{{ lesson.title }}</h3>
          <p>{{ lesson.description }}</p>
          <span class="duration">⏱️ {{ lesson.duration }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurriculumIndex',
  data() {
    return {
      weeks: [
        {
          week: 1,
          title: '📗 1주차: Vue 기초',
          lessons: [
            { day: 1, title: 'Vue 인스턴스', description: 'Vue 앱의 시작점, 인스턴스 생성과 라이프사이클', duration: '30분' },
            { day: 2, title: '템플릿 문법', description: '머스태시 문법, v-html, v-bind 기초', duration: '30분' },
            { day: 3, title: '조건부 렌더링', description: 'v-if, v-else, v-show 사용법', duration: '30분' },
            { day: 4, title: '리스트 렌더링', description: 'v-for로 배열과 객체 렌더링하기', duration: '30분' },
            { day: 5, title: '이벤트 핸들링', description: 'v-on, 이벤트 수식어, 키 수식어', duration: '30분' },
            { day: 6, title: '폼 입력 바인딩', description: 'v-model과 양방향 데이터 바인딩', duration: '30분' },
            { day: 7, title: '1주차 복습 & 실습', description: '배운 내용 정리 및 미니 프로젝트', duration: '30분' }
          ]
        },
        {
          week: 2,
          title: '📘 2주차: 컴포넌트 기초',
          lessons: [
            { day: 8, title: '컴포넌트 기초', description: '컴포넌트 등록, 재사용, 구조화', duration: '30분' },
            { day: 9, title: 'Props', description: '부모에서 자식으로 데이터 전달', duration: '30분' },
            { day: 10, title: 'Custom Events', description: '$emit으로 자식에서 부모로 이벤트 전달', duration: '30분' },
            { day: 11, title: 'Slots', description: '컴포넌트에 콘텐츠 전달하기', duration: '30분' },
            { day: 12, title: '동적 컴포넌트', description: 'component 태그와 keep-alive', duration: '30분' },
            { day: 13, title: '컴포넌트 스타일링', description: 'scoped CSS, CSS 모듈', duration: '30분' },
            { day: 14, title: '2주차 복습 & 실습', description: '컴포넌트 기반 UI 만들기', duration: '30분' }
          ]
        },
        {
          week: 3,
          title: '📙 3주차: 심화 개념',
          lessons: [
            { day: 15, title: 'Computed 속성', description: '계산된 속성과 캐싱', duration: '30분' },
            { day: 16, title: 'Watch 속성', description: '데이터 변화 감지와 비동기 처리', duration: '30분' },
            { day: 17, title: '클래스와 스타일 바인딩', description: '동적 클래스, 인라인 스타일 바인딩', duration: '30분' },
            { day: 18, title: '라이프사이클 훅', description: 'created, mounted, updated, destroyed', duration: '30분' },
            { day: 19, title: 'Refs와 DOM 접근', description: '$refs로 DOM 요소 직접 접근', duration: '30분' },
            { day: 20, title: 'Mixins', description: '컴포넌트 로직 재사용하기', duration: '30분' },
            { day: 21, title: '3주차 복습 & 실습', description: '심화 개념 종합 실습', duration: '30분' }
          ]
        },
        {
          week: 4,
          title: '📕 4주차: 실전 프로젝트',
          lessons: [
            { day: 22, title: 'Vue Router 기초', description: '라우팅, 동적 라우트, 네비게이션 가드', duration: '30분' },
            { day: 23, title: 'Vue Router 심화', description: '중첩 라우트, 프로그래매틱 네비게이션', duration: '30분' },
            { day: 24, title: 'HTTP 통신', description: 'axios로 API 호출하기', duration: '30분' },
            { day: 25, title: '상태 관리 개념', description: 'Vuex 기초 개념 이해', duration: '30분' },
            { day: 26, title: 'Vuex 실습', description: 'state, mutations, actions, getters', duration: '30분' },
            { day: 27, title: '최종 프로젝트 1', description: 'Todo 앱 만들기 (Part 1)', duration: '30분' },
            { day: 28, title: '최종 프로젝트 2', description: 'Todo 앱 만들기 (Part 2) & 마무리', duration: '30분' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.curriculum {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #42b983;
  margin-bottom: 5px;
}

.subtitle {
  color: #666;
  margin-bottom: 40px;
}

.week-section {
  margin-bottom: 40px;
}

.week-section h2 {
  text-align: left;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.lesson-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.lesson-card {
  display: block;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  text-align: left;
  transition: all 0.2s;
}

.lesson-card:hover {
  border-color: #42b983;
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.2);
  transform: translateY(-2px);
}

.day-badge {
  display: inline-block;
  background: #42b983;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 8px;
}

.lesson-card h3 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 16px;
}

.lesson-card p {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 13px;
  line-height: 1.4;
}

.duration {
  font-size: 12px;
  color: #999;
}
</style>
