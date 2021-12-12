AFRAME.registerComponent('do-click-sound', {

  init: function () {
    // Do something when component first attached.
    const el = this.el;
    const src = this.data.src

    el.addEventListener("mouseenter", function () {
      el.components.sound.playSound()
    })

  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});