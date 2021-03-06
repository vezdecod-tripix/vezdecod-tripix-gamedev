export default class Ref {
  elements
  value
  save


  constructor (value, elements = [], save = null) {
    this.value = value
    this.elements = elements
    this.save = save
  }

  setValue (newValue) {
    console.log('set value', this.value, newValue)
    if (this.value !== newValue) {
      this.value = newValue
      for (const element of this.elements) {
        element.innerHTML = this.value
      }
      if (this.save) {
        localStorage.setItem(this.save, this.value)
      }
    }
  }

  addElement (element) {
    if (!this.elements.includes(element)) {
      this.elements.push(element)
    }
  }
}
