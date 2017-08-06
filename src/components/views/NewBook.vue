<template>
  <div class="new-book">
    <top-nav />
    <div class="container">
      <div class="search-page section">
        <div class="search-bar">
          <div class="form">
            <div class="text">
              <p class="cuboid-text">搜索图书</p>
            </div>
            <div class="submit">
              <i class="material-icons submit-icon" style="font-size:40px" @click="searchEvent">search</i>
              <input type="text" id="title" class="cuboid-text" placeholder="输入书名" autocomplete="off"/>
            </div>  
          </div>
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
    let form = document.querySelector('.search-bar .form')
    let submitBtn = document.querySelector('.submit-icon')

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
    document.body.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        event.preventDefault()
        vm.searchEvent()
      }
    })
  },
  computed: {
  },
  methods: {
    async newBookDetail () {
      let id
      let book
      let newTitle = this.newBookData.title
      // console.log(this.$store.state.user.books)
      if (typeof (this.$store.state.user.books) !== 'undefined') {
        book = this.$store.state.user.books.filter(e => {
          return e.title === newTitle
        })
      } else {
        book = []
      }
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
    searchEvent () {
      this.errMsg = ''
      this.isLoading = true
      let str = encodeURI(document.querySelector('#title').value)
      let url = api + str
      this.$http.get(url)
        .then((e) => {
          if (this.isEmptyObject(e.data)) {
            this.loadSuccess = false
            this.errMsg = '没有找到唉_(:△」∠)_'
          } else {
            this.newBookData = e.data
            this.newBookData.title = this.newBookData.title.replace(/（.*）/, '')
            this.imgURL = this.getOriginalImage(e.data.cover_img)
            this.newBookData.cover_img = this.getOriginalImage(e.data.cover_img)
            this.loadSuccess = true
          }
          this.isLoading = false
        })
        .catch((error) => {
          console.log(error)
          this.isLoading = false
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
