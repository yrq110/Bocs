<template>
  <div class="new-book">
    <top-nav />
    <div class="container">
      <div class="search-page section">
        <div class="search-bar">
          <form>
            <div class="text">
              <p class="cuboid-text">书名</p>
            </div>
            <div class="submit">
              <label for="submit" class="submit-icon">
                <i class="fa fa-chevron-right"></i>
              </label>
              <input type="text" id="title" class="cuboid-text" placeholder="输入书名" autocomplete="off"/>
              <input type="submit" id="submit" />
            </div>
            <div class="load">
              <p class="cuboid-text loader">稍等片刻...</p>
            </div>
            <div class="result">
              <p class="cuboid-text">已找到封面</p>
            </div>   
          </form>
        </div>
        <div class="poster">
          <img src="http://img11.360buyimg.com/n1/jfs/t2047/63/2033152973/398005/5ea9044e/56ea5e6aN38c0f2b8.jpg">
        </div>
        <div class="next" @click="newBookDetail">
          添加
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/views/TopNav'
export default {
  name: 'NewBook',
  data () {
    return {
      detail: {
        title: 'JavaScript'
      }
    }
  },
  created: function () {
    let titleInput = document.querySelector('#title')
    let form = document.querySelector('.search-bar form')
    let submitBtn = document.querySelector('.submit-icon')
    let poster = document.querySelector('.poster img')

    titleInput.addEventListener('focus', function () {
      form.classList.add('ready')
      console.log('form focused')
    })

    titleInput.addEventListener('mouseout', function () {
      if (this.value === '') {
        form.classList.remove('ready')
      }
    })

    titleInput.addEventListener('keyup', function () {
      if (this.value === '') {
        if (submitBtn.classList.contains('active')) {
          submitBtn.classList.remove('active')
        }
      } else {
        if (!submitBtn.classList.contains('active')) {
          submitBtn.classList.add('active')
        }
      }
    })

    form.addEventListener('submit', function () {
      this.classList.remove('ready')
      this.classList.add('loading')
      setTimeout(complete, 3000)
      return false
    })

    function complete () {
      form.classList.remove('loading')
      form.classList.add('complete')
      titleInput.setAttribute('disabled', 'true')
      poster.classList.add('fadeout')
    }
  },
  computed: {
  },
  methods: {
    newBookDetail: function () {
      let title = document.querySelector('#title').value
      let id = Math.floor(Math.random() * 10000)
      this.$store.dispatch('addBook', {
        id: id,
        name: title
      })
      this.$router.push({
        name: 'BookDetail',
        params: {
          isCreate: false,
          bookID: id
        }
      })
    }
  },
  components: {
    TopNav
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/NewBook.less';
</style>
