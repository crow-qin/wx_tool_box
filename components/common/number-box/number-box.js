Component({
  data: {},
  properties: {
    min: {
      type: Number,
      value: 1
    },
    max: {
      type: Number
    },
    value: {
      type: Number
    }
  },
  methods: {
    calcVal(e) {
      let {type} = e.target.dataset
      let value = type=='add' ? this.data.value+1 : this.data.value-1
      this.triggerEvent('calcVal',value)
    }
  }
})