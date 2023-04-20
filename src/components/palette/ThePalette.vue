<template>
  <div class="palette">
    <h2 class="title">Palette</h2>
    <div class="picker-container">
      <div
          class="color-picker"
          v-for="color in colors"
          @click="pickColor(color)"
          :style="{ backgroundColor: color }"
          :class="{ 'active-color': selectedColor === color }"></div>
    </div>
    <div @click="fill" class="button fillButton">
      Fill
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePalette",
  data() {
    return {
      colors: ['#000000', '#FF0000', '#00FF00', '#0000FF',
              '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF'],
      selectedColor: null
    }
  },
  methods: {
    pickColor(color) {
      this.selectedColor = color;
      this.$emit('selectedColor', color);
    },
    fill() {
      this.$emit('fill');
    }
  }
}
</script>

<style scoped>
.title {
  font-family: "Mode Seven", sans-serif;
  color: #3AE374;
  text-align: center;
}

.fillButton {
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  padding: 5px 20px;
  text-align: center;
}

.palette {
  border-radius: 5px;
  background: #2C2C2C;
  max-width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.picker-container {
  max-width: 160px;
  display: flex;
  flex-wrap: wrap;
}

.color-picker {
  border: 2px solid black;
  width: 25px;
  height: 25px;
  margin: 5px;
  cursor: pointer;
}

.active-color {
  border: 2px solid #3AE374;
}
</style>