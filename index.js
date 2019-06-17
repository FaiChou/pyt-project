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
    new ClipboardJS('.dy-btn');
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
    this.fetchData();
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

const routes = [
  { path: '/', component: Twemoji },
  { path: '/lozad', component: Lozad },
  { path: '/zoom-blur', component: ZoomBlur },
  { path: '/shine-effect', component: ShineEffect },
  { path: '/v2hot', component: V2HOT },
]
const router = new VueRouter({ routes })
const app = new Vue({router}).$mount('#app')
