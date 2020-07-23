Component({
  data: {},
  properties: {
    item: {
      type: Function
    }
  },
  methods: {
    openPage() {
      this.triggerEvent('openPage',item.url)
    }
  }
})