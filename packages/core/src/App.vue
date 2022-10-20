<template>
  <Card
    dir="rtl"
    class="mt-[100px] justify-center items-center w-[815px] mx-auto gap-y-3 flex flex-col"
    border
  >
    <Card title="الأزرار" class="gap-y-3 w-full">
      <Btn
        key="btn1"
        text="حجز جلسة"
        bg="#F4DB3A"
        color="#000"
        startIcon="line-md:uploading-loop"
        endIcon="line-md:sunny-outline-twotone-loop"
        iconColor="#070000"
        iconWidth="20"
        disabled
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
    </Card>
    <Card title="الأزرار" class="gap-y-3 w-full" border>
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
    </Card>
  </Card>
</template>

<script lang="ts" setup>
// import { Btn } from './components/btn/'
// import { Card } from './components/card/'
// import { Icon } from '@iconify/vue'
import { ref } from '@vue/reactivity'

const showModal = ref(false)
const toogleModal = () => {
  showModal.value = !showModal.value
}
</script>
