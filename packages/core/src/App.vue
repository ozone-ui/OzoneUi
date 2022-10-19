<template>
  <div>
    <main class="flex flex-col gap-y-3 justify-center items-center h-screen">
      <transition-group name="list">
        <Btn
          key="btn1"
          text="حجز جلسة"
          bg="#F4DB3A"
          color="#000"
          startIcon="line-md:uploading-loop"
          endIcon="line-md:sunny-outline-twotone-loop"
          iconColor="#070000"
          iconWidth="20"
        />
        <Btn
          key="btn2"
          text="تسجيل دخول"
          bg="#3A7BF4"
          color="#fff"
          endIcon="mi:chevron-right"
          iconColor="#fff"
          iconWidth="20"
        />
        <Btn
          key="btn3"
          text="رفع ملف"
          bg="#3AEBF4"
          color="#000"
          startIcon="mi:cloud-upload"
          iconColor="#070000"
          iconWidth="20"
        />
        <Btn
          key="btn4"
          text="حذف"
          bg="#F43A40"
          color="#fff"
          startIcon="ant-design:delete-twotone"
          iconColor="#fff"
          iconWidth="18"
        />
        <Btn
          key="btn5"
          border
          text="طلب المساعدة"
          bg="#7E3AF4"
          color="#fff"
          endIcon="clarity:help-info-line"
          iconColor="#fff"
          iconWidth="18"
          @click="toogleModal()"
        />
      </transition-group>
      <transition name="fade">
        <div
          class="w-[600px] h-[200px] rounded-[15px] bg-[#f2f2f2]"
          v-if="showModal"
        ></div>
      </transition>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { Btn } from './components/btn/'
import { Icon } from '@iconify/vue'
import { ref } from '@vue/reactivity'

const showModal = ref(false)
const toogleModal = () => {
  showModal.value = !showModal.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 2 ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
