<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPencil } from '@mdi/js';

export default {
  name: "IconPencil",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiPencil,
    }
  }
}
</script>