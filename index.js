_isObject = function (check) {
  return typeof check === 'object' && check !== null
}

class Method {
  valid = true
  warnings = []
  errors = []
  return = null

  error = (messages) => {
    if (!Array.isArray(messages)) {
      messages = [messages]
    }
    this.valid = false
    messages.forEach((message) => {
      if (!_isObject(message)) message = { message }
      this.errors.push(message)
    })
  }
  warning = (messages) => {
    if (!Array.isArray(messages)) {
      messages = [messages]
    }
    messages.forEach((message) => {
      this.errors.push({
        message
      })
    })
  }
}

module.exports = Method
