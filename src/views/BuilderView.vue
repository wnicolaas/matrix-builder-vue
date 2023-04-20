<template>
  <modal-light-box
      v-if="showSaveModal"
      @close="this.showSaveModal = false">
    Hello world
  </modal-light-box>

  <div
      class="root"
      @mouseleave="setDragging(false)"
      @mouseup="setDragging(false)">
    <MatrixGrid
        v-if="design[0][0]"
        @designValues="design = $event"
        @mousedown="setDragging(true)"
        @isDragging="setDragging"
        :is-editable="true"
        :selected-color="selectedColor"
        :design-values="design">
    </MatrixGrid>
    <div class="right-content">
      <ThePalette
          @fill="fill"
          @selectedColor="onColorSelect">
      </ThePalette>
      <div class="save">
        <div class="button" @click="saveDesign">Save</div>
      </div>
    </div>
  </div>
</template>

<script>
import MatrixGrid from "@/components/matrix-grid/MatrixGrid.vue";
import ThePalette from "@/components/palette/ThePalette.vue";
import {computed} from "vue";
import {Colors, Design} from "@/models/Design";
import ModalLightBox from "@/components/modal/ModalLightBox.vue";

export default {
  name: "BuilderView",
  components: {ModalLightBox, ThePalette, MatrixGrid},
  data() {
    return {
      selectedColor: '#000000',
      isDragging: false,
      fillColor: '#000000',
      design: this.getDesignOne().valuesRows,
      showSaveModal: true
    }
  },
  provide() {
    return {
      providedIsDragging: computed(() => this.isDragging),
      fillColor: computed(() => this.fillColor)
    }
  },
  methods: {
    setDragging(val) {
      this.isDragging = val;
    },
    onColorSelect(color) {
      this.selectedColor = color;
    },
    fill() {
      this.fillColor = this.selectedColor;
    },
    getDesignOne() {
      return new Design(32, 64, getRandomDesignValues(32, 64));
    },
    saveDesign() {
      const design = new Design(this.design.length, this.design[1].length, this.design);

      console.log(design);
    }
  }
}

  function getRandomDesignValues(height, width) {
    const values = [];
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(getRandomInt(8));
      }
      values.push(row);
    }
    return values;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
</script>

<style scoped>
.root {
  margin: 20px;
  display: flex;
}

.right-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.save {
  margin-top: 25px;
  background-color: #2C2C2C;
  padding: 30px 15px;
  border-radius: 5px;
}


</style>