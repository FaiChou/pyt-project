const Twemoji = {
  data() {
    return {
      content: '🌙🚁✈️🌋',
    }
  },
  computed: {
    rawHtml() {
      return twemoji.parse(this.content || '🌊', {
        folder: 'svg',
        ext: '.svg',
      });
    }
  },
  template: `
    <div class="twemoji-container">
      <input v-model="content" />
      <span class="preview" v-html="rawHtml"></span>
    </div>
  `
}

const Lozad = {
  data() {
    return {
      imgs: [
        'https://images.unsplash.com/photo-1553785063-9e892a3f15b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553782405-55912c03e565?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553781903-53310c207b58?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553780454-7d71997ca12d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553780976-e6e9f002a869?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553775564-f488cbd5e0b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553770532-5943a9f08210?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553768661-93e40fdae01b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553766775-8878aefa290c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ',
        'https://images.unsplash.com/photo-1553757070-7b7875dda392?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY0MjQwfQ'
      ]
    }
  },
  mounted() {
    window.lozad('.lozad', {
      load: function(el) {
        el.src = el.getAttribute('data-src');
        el.onload = function() {
          el.classList.add('fade')
        }
      }
    }).observe();
  },
  template: `
    <div class="lozad-container">
      <img
        class="fade logo"
        src="https://apoorv.pro/lozad.js/banner/lozad-banner.jpg"
        alt="lozad.js logo"
      />
      <template v-for="img in imgs">
        <p>Highly performant, light and configurable lazy loader in pure JS with no dependencies for images, iframes and more, using IntersectionObserver API</p>
        <img class="lozad big" :data-src="img" alt="img" />
      </template>
    </div>
  `
}

const ZoomBlur = {
  data() {
    return {
      imageObj: null,
      hideImg: false,
    }
  },
  methods: {
    selectFile() {
      this.imageObj = this.$refs.imagePicker.files[0]
    },
    generate() {
      try {
        const canvas = fx.canvas()
        const texture = canvas.texture(imagee)
        canvas.draw(texture).zoomBlur(250,200, 0.2).update()
        // canvas.draw(texture).colorHalftone(250, 250, 0.25, 4).update()
        // canvas.draw(texture).ink(0.4).update()
        // replace the image with the canvas
        imagee.parentNode.insertBefore(canvas, imagee)
        this.hideImg = true
      } catch (e) {
        console.warn(e)
        return
      }
    },
    clear() {
      const canvas = document.getElementsByTagName("canvas")[0];
      if (canvas) canvas.remove()
      this.imageObj = null
      this.hideImg = false
    }
  },
  computed: {
    image() {
      return this.imageObj ? URL.createObjectURL(this.imageObj) : null
    }
  },
  template: `
    <div class="zoom-blur-container">
      <img
        id="imagee"
        v-if="imageObj && !hideImg"
        :src="image"
        alt=""
      />
      <input
        id="imagePicker"
        ref="imagePicker"
        v-if="!imageObj"
        type="file"
        @change="selectFile"
        accept="image/png, image/jpg"
      />
      <div class="btn-wrapper">
        <button v-if="imageObj" @click="generate">generate</button>
        <button v-if="imageObj" @click="clear" style="background-color: coral;">clear</button>
      </div>
    </div>
  `
}

const ShineEffect = {
  mounted() {
    new ClipboardJS('.dy-btn')
  },
  template: `
    <div class="shine-effect-container">
      <button
        class="dy-btn"
        @click="download"
        data-clipboard-text="DY_NFBZH#official#qrcode"
      >
        666
      </button>
    </div>
  `,
  methods: {
    download() {
      location.href = 'itms-services://?action=download-manifest&amp;url=https://video-dy.oss-cn-beijing.aliyuncs.com/packages/1.1.2/com.Dy.douyVideoW/manifest.plist'
    }
  }
}

const V2HOT = {
  data() {
    return {
      loading: true,
      data: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetch('https://v2hot-server-git-master.faichou.now.sh/v2hot')
        .then(res => {
          if (res.status === 200) {
            return res.json()
          } else {
            return []
          }
        })
        .then(res => {
          this.data = res.map(item => ({
            id: item.id,
            url: item.url,
            title: item.title,
            replies: item.replies,
            content: item.content,
            avatar: item.member.avatar_normal,
          }))
          this.loading = false
        })
    },
    onClick(item) {
      location.href = item.url
    }
  },
  template: `
    <div class="v2hot-container">
      <div v-if="loading" class="lds-facebook"><div></div><div></div><div></div></div>
      <section v-for="item in data" :key="item.id" @click="onClick(item)">
        <img :src="item.avatar" alt="" />
        <div class="center">
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.content || ''}}</p>
        </div>
        <span>{{item.replies}}</span>
      </section>
    </div>
  `
}

const KEY_STR_LOWER = 'abcdefghijklmnopqrstuvwxyz'
const KEY_STR_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const KEY_NUMERIC = '0123456789'
const KEY_PUNCTUATION = '!@#$%^&*()_+~`|}{[]\:;?><,./-='

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const PswdGen = {
  data() {
    return {
      len: 10, // must bigger than or equal to 4
      pswd: '',
      isStrLower: true, // 必须有一个是true
      isStrUpper: true, // 必须有一个是true
      isNumeric: true, // 必须有一个是true
      isPunctuation: true, // 必须有一个是true
    };
  },
  mounted() {
    new ClipboardJS('.copy-btn')
    this.gen()
  },
  methods: {
    gen() {
      if (!(this.isStrLower || this.isStrUpper || this.isNumeric || this.isPunctuation)) {
        return
      }
      const p = Number(this.isStrLower) + Number(this.isStrUpper) + Number(this.isNumeric) + Number(this.isPunctuation)
      const q = parseInt(this.len / p)
      const keys = [
        {
          id: 0,
          key: KEY_STR_LOWER,
          len: this.isStrLower ? q : 0
        },
        {
          id: 1,
          key: KEY_STR_UPPER,
          len: this.isStrUpper ? q : 0
        },
        {
          id: 2,
          key: KEY_NUMERIC,
          len: this.isNumeric ? q : 0
        },
        {
          id: 3,
          key: KEY_PUNCTUATION,
          len: this.isPunctuation ? q : 0
        }
      ]
      let s = ''
      let m = 0
      keys.forEach(item => {
        m += item.len
        for (let i = 0, n = item.key.length; i < item.len; ++i) {
          s += item.key.charAt(Math.floor(Math.random() * n))
        }
      })
      const filtered = keys.filter(item => item.len > 0)
      for (let i = 0; i < this.len - m; ++i) {
        shuffle(filtered)
        let n = filtered[0].key.length
        s += filtered[0].key.charAt(Math.floor(Math.random() * n))
      }
      // shuffle(keys)
      // keys.slice(0, this.len - m).forEach(item => {
      //   let n = item.key.length
      //   s += item.key.charAt(Math.floor(Math.random() * n))
      // })
      this.pswd = shuffle(s.split('')).join('')
    }
  },
  template: `
    <div class="pswd-gen-container">
      <div class="options">
        <div class="wrapper">
          <span class="title">长度:</span>
          <select v-model.number="len" @change="gen">
            <option disabled value="">请选择长度</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
            <option>20</option>
          </select>
        </div>
        <div class="wrapper">
          <span class="title">小写字母:</span>
          <input type="checkbox" id="strlower" v-model="isStrLower" @change="gen">
          <label for="strlower">( e.g. abcdefgh )</label>
        </div>
        <div class="wrapper">
          <span class="title">大写字母:</span>
          <input type="checkbox" id="strupper" v-model="isStrUpper" @change="gen">
          <label for="strupper">( e.g. ABCDEFGH )</label>
        </div>
        <div class="wrapper">
          <span class="title">数字:</span>
          <input type="checkbox" id="numeric" v-model="isNumeric" @change="gen">
          <label for="numeric">( e.g. 123456 )</label>
        </div>
        <div class="wrapper">
          <span class="title">特殊字符:</span>
          <input type="checkbox" id="punctuation" v-model="isPunctuation" @change="gen">
          <label for="punctuation">( e.g. @#$% )</label>
        </div>
      </div>
      <button class="generate" @click="gen">
        Generate
      </button>
      <div class="ans">
        <input v-model="pswd" />
        <span>
          <button class="copy-btn" :data-clipboard-text="pswd" onclick="alert('复制成功✔️')">
            <img class="clippy" src="clippy.svg" width="13" alt="Copy to clipboard">
          </button>
        </span>
      </div>
      <a class="other-link" target="_blank" href="https://passwordsgenerator.net/">
        passwordsgenerator.net
      </a>
    </div>
  `
}

const UID = '220451457'

const Ninja = {
  data() {
    return {
      code: '',
      isLoading: false,
    }
  },
  template: `
    <div class="ninja-container">
      <input
        v-model="code"
        placeholder="请输入兑换码"
      />
      <div class="shine-effect-container">
        <button
          :class="['dy-btn', {loading: isLoading}]"
          @click="handleClick"
        >
          领取
        </button>
      </div>
    </div>
  `,
  methods: {
    handleClick() {
      const code = this.code
      if (!code) {
        alert('请输入兑换码')
        return
      }
      this.isLoading = true
      const url = 'https://v2hot-server-git-master.faichou.now.sh/ninja'
      // const url = 'http://localhost:8080/ninja'
      fetch(`${url}/${UID}/${code}`).then(r => r.json()).then(res => {
        // code: 424
        // msg: "礼包已过期"
        // code: 0
        // msg: "领取成功"
        // code: 425
        // msg: "礼包已领取"
        alert(res.msg)
        this.isLoading = false
      }).catch(ex => {
        this.isLoading = false
        alert(ex.message || '请求失败')
      })
    }
  }
}

const routes = [
  { path: '/', component: Twemoji },
  { path: '/lozad', component: Lozad },
  { path: '/zoom-blur', component: ZoomBlur },
  { path: '/shine-effect', component: ShineEffect },
  { path: '/v2hot', component: V2HOT },
  { path: '/ninja', component: Ninja },
  { path: '/password-generator', component: PswdGen },
]
const router = new VueRouter({ routes })
const app = new Vue({router}).$mount('#app')
