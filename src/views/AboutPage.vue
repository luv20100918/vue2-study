<template>
  <div class="about">
    <h1>About Page</h1>
    <div class="card">
      <h2>Vue 2 샘플 프로젝트</h2>
      <p>이 프로젝트는 Vue 2로 만들어진 샘플 애플리케이션입니다.</p>

      <h3>사용된 기술</h3>
      <ul>
        <li>Vue.js 2.7</li>
        <li>Vue Router 3</li>
        <li>Vue CLI 5</li>
      </ul>

      <h3>프로젝트 구조</h3>
      <pre>
src/
├── assets/       # 정적 파일
├── components/   # 재사용 컴포넌트
├── router/       # 라우터 설정
└── views/        # 페이지 컴포넌트
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about {
  padding: 20px;
}

.card {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

h1 {
  color: #42b983;
}

h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

h3 {
  color: #42b983;
  margin-top: 20px;
}

ul {
  padding-left: 20px;
}

li {
  margin: 5px 0;
}

pre {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>
