<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiTrashCan } from '@mdi/js';

export default {
  name: "IconTrashCan",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiTrashCan,
    }
  }
}
</script>