<template>
  <div class="new-book">
    <top-nav />
    <div class="container">
      <div class="search-page section">
        <div class="search-bar">
          <form>
            <div class="text">
              <p class="cuboid-text">搜索图书</p>
            </div>
            <div class="submit">
              <label for="submit" class="submit-icon">
                <i class="material-icons" style="font-size:40px">search</i>
              </label>
              <input type="text" id="title" class="cuboid-text" placeholder="输入书名" autocomplete="off"/>
              <input type="submit" id="submit" />
            </div>  
          </form>
        </div>
        <div class="loading" v-show="isLoading">搜索中...</div>
        <div class="poster">
          <img
            v-show="loadSuccess"
            v-lazy="imgURL"
            @click="imgClick"
          />
        </div>
        <div class="info" v-show="loadSuccess">
          <div class="cell">
            <div class="key">书名</div>
            <div class="value">{{ newBookData.title }}</div>
          </div>
          <div class="cell">
            <div class="key">作者</div>
            <div class="value">{{ newBookData.author }}</div>
          </div>
          <div class="cell">
            <div class="key">出版时间</div>
            <div class="value">{{ newBookData.date }}</div>
          </div>
          <div class="cell">
            <div class="key">出版社</div>
            <div class="value">{{ newBookData.publisher }}</div>
          </div>
        </div>
        <div class="error" v-show="errMsg">
          {{ errMsg }}
        </div>
        <div class="next" @click="newBookDetail" v-show="loadSuccess">
          添加
        </div>
        <div class="expand">
          <img 
            id="expandImg"
            v-lazy="imgURL"
            v-show="isExpand"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/views/TopNav'
const api = 'http://bocs-api.leanapp.cn/search/'
export default {
  name: 'NewBook',
  data () {
    return {
      detail: {
        title: 'JavaScript'
      },
      isLoading: false,
      loadSuccess: false,
      errMsg: '',
      isExpand: false,
      imgURL: '',
      keyMap: {
        'author': '作者',
        'date': '出版时间',
        'publisher': '出版社',
        'url': '京东'
      },
      newBookData: ''
    }
  },
  mounted: function () {
    let titleInput = document.querySelector('#title')
    let form = document.querySelector('.search-bar form')
    let submitBtn = document.querySelector('.submit-icon')
    // let poster = document.querySelector('.poster img')

    titleInput.addEventListener('focus', function () {
      form.classList.add('ready')
      console.log('form focused')
    })

    titleInput.addEventListener('blur', function () {
      if (this.value === '') {
        form.classList.remove('ready')
      }
      console.log('form blured')
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

    let vm = this
    form.addEventListener('submit', function () {
      vm.errMsg = ''
      vm.isLoading = true
      let str = encodeURI(document.querySelector('#title').value)
      let url = api + str
      vm.$http.get(url)
        .then((e) => {
          // console.log(e.data)
          if (vm.isEmptyObject(e.data)) {
            vm.loadSuccess = false
            vm.errMsg = '没有找到唉_(:△」∠)_'
          } else {
            vm.newBookData = e.data
            vm.newBookData.title = vm.newBookData.title.replace(/（.*）/, '')
            console.log(vm.newBookData.title)
            vm.imgURL = vm.getOriginalImage(e.data.cover_img)
            vm.newBookData.cover_img = vm.getOriginalImage(e.data.cover_img)
            vm.loadSuccess = true
            // console.log(vm.newBookData)
          }
          vm.isLoading = false
        })
        .catch((error) => {
          console.log(error)
          vm.isLoading = false
        })
      return false
    })
  },
  computed: {
  },
  methods: {
    async newBookDetail () {
      let id
      console.log(this.newBookData.title)
      let newTitle = this.newBookData.title
      let book = this.$store.state.user.books.filter(e => {
        return e.title === newTitle
      })
      if (book.length !== 0) {
        id = book[0].id
      } else {
        id = Math.floor(Math.random() * 10000)
        let data = this.newBookData
        await this.$store.dispatch('addBook', {
          ...data,
          id: id
        })
      }
      this.$router.push({
        name: 'BookDetail',
        params: {
          bookID: id
        }
      })
    },
    imgClick () {
      console.log('img click')
      this.isExpand = true
    },
    isEmptyObject (obj) {
      return JSON.stringify(obj) === '{}'
    },
    getOriginalImage (url) {
      return url
        .replace(/\/[a-z]\d{3}x\d{3}_/, '/')
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
