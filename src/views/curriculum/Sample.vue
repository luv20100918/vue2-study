<template>
  <div class="lesson">
    <div class="lesson-nav" style="background: yellow;">
      <div :class="{'txt_comm':isTxtComm}">제목제목</div>
      <div class="con-txt">내용내용내용내용</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  props: {
    showKey: {
      type: String,
      default: ''
    }
  },
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
  },
  // props:{
  //   isTxtComm:{
  //     type:Boolean,
  //     default:true,
  //   }
  // }

  props: ['isTxtComm']

  
    // ['active']


  
}
</script>

<style scoped>
.lesson {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.props-display {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  color: #1565c0;
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
