<template>
  <modal-light-box
      v-if="showSaveModal"
      @close="this.showSaveModal = false">
    <div class="modal-container">
      <h2>Save Design?</h2>
      <form @submit.prevent="saveDesign">
        <label for="design-name">Design Name</label>
        <input id="design-name" v-model="designName" type="text" required>
        <div class="button-container">
          <div class="button cancel" @click="this.showSaveModal = false">Cancel</div>
          <div class="button" @click="saveDesign">Save</div>
        </div>
      </form>
    </div>
  </modal-light-box>

  <div
      class="root"
      @mouseleave="setDragging(false)"
      @mouseup="setDragging(false)">
    <MatrixGrid
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
        <div class="button" @click="openSaveModal">Save</div>
      </div>
    </div>
  </div>
</template>

<script>
import MatrixGrid from "@/components/matrix-grid/MatrixGrid.vue";
import ThePalette from "@/components/palette/ThePalette.vue";
import {computed} from "vue";
import {Design} from "@/models/Design";
import ModalLightBox from "@/components/modal/ModalLightBox.vue";
import {getDesignById, getRandomDesign} from "@/utils/randomData";

export default {
  name: "BuilderView",
  components: {ModalLightBox, ThePalette, MatrixGrid},
  data() {
    return {
      selectedColor: '#000000',
      isDragging: false,
      fillColor: '#000000',
      design: getDesign(this.designId).valuesRows,
      showSaveModal: false,
      designName: ''
    }
  },
  props: {
    designId: {
      type: String,
      default: '',
      validator(value) {
        return value === '' || !isNaN(parseInt(value));
      }
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
    openSaveModal() {
      this.showSaveModal = true;
    },

    saveDesign() {
      const design = new Design(this.design.length, this.design[1].length, this.design);
      design.title = this.designName;
      console.log(design);
      this.showSaveModal = false;
    }
  }
}

function getDesign(id) {
  if (id) {
    return getDesignById(parseInt(id));
  }
  return getRandomDesign();
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

.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

</style>