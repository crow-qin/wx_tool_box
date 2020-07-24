Component({
  data: {},
  properties: {
    item: {
      type: Object
    }
  },
  onLoad() {
    console.log(this.item)

  },
  methods: {
    openPage() {
      console.log(this.properties.item)
      this.triggerEvent('openPage',this.properties.item.url)
    }
  }
})