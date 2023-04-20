<template>
<div
    class="node"
    :style="{ backgroundColor: currentColor, width: sizePx + 'px', height: sizePx + 'px', margin: marginPx + 'px'}"
    :class="{ isEditable : isEditable }"
    @mousedown="startDrag"
    @mouseenter="onDragPaint"
    @click="paint"></div>
</template>

<script>
import {Colors} from "@/models/Design";

export default {
  name: "MatrixGridNode",
  props: {
    selectedColor: String,
    isEditable: Boolean,
    sizePx: {
      type: Number,
      default: 12
    },
    marginPx: {
      type: Number,
      default: 3
    },
    color: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0 && value <= 7;
      }
    }
  },
  data() {
    return {
      currentColor: parseColorInt(this.color)
    }
  },
  watch: {
    fillColor(color) {
      this.currentColor = color; // TODO: fix bug with filling the same color when changes to grid are made
    },
    currentColor() {
      this.$emit('currentColor', parseColorString(this.currentColor));
    }
  },
  inject: ['providedIsDragging', 'fillColor'],
  methods: {
    startDrag() {
      this.$emit('isDragging', true);
    },
    paint() {
      if(this.isEditable)
        this.currentColor = this.selectedColor;
    },
    onDragPaint() {
      if(this.providedIsDragging) {
        this.paint();
      }
    }
  }
}

function parseColorInt(number) {
  switch (number) {
    case Colors.white: return '#FFFFFF';
    case Colors.black: return '#000000';
    case Colors.red: return '#FF0000';
    case Colors.blue: return '#0000FF';
    case Colors.green: return '#00FF00';
    case Colors.yellow: return '#FFFF00';
    case Colors.cyan: return '#00FFFF';
    case Colors.magenta: return '#FF00FF';
  }
  return '#FFFFFF';
}

function parseColorString(color) {
  switch (color) {
    case '#FFFFFF':
      return Colors.white;
    case '#000000':
      return Colors.black;
    case '#FF0000':
      return Colors.red;
    case '#0000FF':
      return Colors.blue;
    case '#00FF00':
      return Colors.green;
    case '#FFFF00':
      return Colors.yellow;
    case '#00FFFF':
      return Colors.cyan;
    case '#FF00FF':
      return Colors.magenta;
  }
  return Colors.white;
}
</script>

<style scoped>
.node {
  border: 1px solid black;
  user-select: none;
}

.isEditable {
  cursor: pointer;
}
</style>