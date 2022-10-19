<script>
import { Btn } from "@husamnas/ui";
export default {
  components: {
    Btn,
  },
};
</script>

<template>
  <main class="flex justify-center items-center h-screen flex-col gap-y-3">
    <Btn
      text="حجز جلسة"
      bg="#F4DB3A"
      color="#000"
      startIcon="line-md:uploading-loop"
      endIcon="line-md:sunny-outline-twotone-loop"
      iconColor="#070000"
      iconWidth="20"
    />
    <Btn
      text="تسجيل دخول"
      bg="#3A7BF4"
      color="#fff"
      endIcon="mi:chevron-right"
      iconColor="#fff"
      iconWidth="20"
    />
    <Btn
      text="رفع ملف"
      bg="#3AEBF4"
      color="#000"
      startIcon="mi:cloud-upload"
      iconColor="#070000"
      iconWidth="20"
    />
    <Btn
      text="حذف"
      bg="#F43A40"
      color="#fff"
      startIcon="ant-design:delete-twotone"
      iconColor="#fff"
      iconWidth="18"
    />
  </main>
</template>
