<template>
  <div class="root" v-if="loadedDesignValues">
    <div class="col" v-for="col in colsAmount">
      <div v-for="row in rowsAmount">
        <div v-if="loadedDesignValues[row - 1]">
          <MatrixGridNode
              @isDragging="updateIsDragging"
              @currentColor="updateGridStatus(row - 1, col - 1, $event)"
              :color="loadedDesignValues[row - 1][col - 1]"
              :isEditable="isEditable"
              :selectedColor="selectedColor"
              :sizePx="nodeSizePx"
              :marginPx="nodeMarginPx"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MatrixGridNode from "@/components/matrix-grid/MatrixGridNode.vue";

export default {
  name: "MatrixGrid",
  components: {MatrixGridNode},
  data() {
    return {
      rowsAmount: 32,
      colsAmount: 64,
      isDragging: false,
      loadedDesignValues: null
    }
  },
  props: {
    isEditable: Boolean,
    selectedColor: String | null,
    nodeSizePx: {
      type: Number,
      default: 12
    },
    nodeMarginPx: {
      type: Number,
      default: 3
    },
    designValues: {
      type: Array,
      default: getDefaultDesignValues(32, 64),
      validator(value) {
        return value.length === 32 && value.every(row => row.length === 64);
      }
    }
  },
  methods: {
    updateIsDragging(val) {
      this.$emit('isDragging', true);
      this.isDragging = val;
    },
    updateGridStatus(row, col, color) {
      this.loadedDesignValues[row][col] = color;
      this.$emit('gridValues', this.loadedDesignValues);
    }
  },
  watch: {
    designValues: function (val) {
      this.loadedDesignValues = val;
    }
  },
  mounted: function () {
    this.loadedDesignValues = this.designValues;
  },
  beforeUpdate: function () {
    this.loadedDesignValues = this.designValues;
  },
  updated: function () {
    this.loadedDesignValues = this.designValues;
  }
}

function getDefaultDesignValues(height, width) {
  const values = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(0);
    }
    values.push(row);
  }
  return values;
}

</script>

<style scoped>
.col {
  display: flex;
  flex-direction: column;
}

.root {
  display: flex;
}
</style>