<template>
  <Card dir="rtl" class="mx-auto mt-[100px] w-[815px]" border>
    <Flex col a="center" j="center" y="20">
      <Card title="الأزرار">
        <Flex col y="20" a="center">
          <Btn
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
            text="تسجيل دخول"
            startIcon="ri:login-circle-fill"
            iconWidth="20"
            textBtn
            color="#0F99BB"
            iconColor="#065569"
            link="https://www.google.com"
            v-wave
          />
          <Btn
            text="حفظ وإرسال"
            bg="#7816DA"
            color="#ffffff"
            startIcon="bi:send-plus-fill"
            iconColor="#FFFFFF"
            iconWidth="15"
            v-wave
          />
          <Btn
            text="تعديل"
            bg="#000000"
            color="#fff"
            startIcon="ant-design:edit-outlined"
            iconColor="#fff"
            iconWidth="18"
            v-wave
          />
          <Btn
            border
            bg="#000000"
            color="#fff"
            endIcon="fluent:send-copy-24-regular"
            iconColor="#fff"
            iconWidth="18"
            @click="toogleModal()"
            v-wave
          />
          <Btn
            border
            text="طلب المساعدة"
            bg="#000000"
            color="#fff"
            endIcon="fluent:send-copy-24-regular"
            iconColor="#fff"
            iconWidth="18"
            @click="toogleModal()"
            v-wave
          />
        </Flex>
      </Card>
      <Card title="الأزرار">
        <Flex col y="20">
          <Btn
            text="حجز جلسة"
            bg="#078505"
            color="#fff"
            startIcon="line-md:uploading-loop"
            endIcon="line-md:sunny-outline-twotone-loop"
            iconColor="#fff"
            iconWidth="20"
            v-wave
          />
          <Btn
            bg="#F4DB3A"
            color="#000"
            endIcon="line-md:sunny-outline-twotone-loop"
            iconColor="#070000"
            iconWidth="20"
            v-wave
          />
          <Btn
            text="تسجيل دخول"
            bg="#3A7BF4"
            color="#fff"
            startIcon="mi:chevron-right"
            iconColor="#fff"
            iconWidth="20"
            v-wave
          />
          <Btn
            bg="#3A7BF4"
            endIcon="bxs:user-x"
            iconWidth="25"
            textBtn
            v-wave
          />
          <Btn
            text="رفع ملف"
            bg="#3AEBF4"
            color="#000"
            startIcon="mi:cloud-upload"
            iconColor="#070000"
            iconWidth="20"
            v-wave
          />
          <Btn
            text="حذف"
            bg="#F43A40"
            color="#fff"
            startIcon="ant-design:delete-twotone"
            iconColor="#fff"
            iconWidth="18"
            v-wave
          />
          <Btn
            border
            text="طلب المساعدة"
            bg="#7E3AF4"
            color="#fff"
            endIcon="clarity:help-info-line"
            iconColor="#fff"
            iconWidth="18"
            @click="toogleModal()"
            v-wave
          />
          <Btn
            text="جاري التحميل"
            bg="#3A4AF4"
            color="#fff"
            endIcon="eos-icons:loading"
            iconColor="#fff"
            iconWidth="18"
            @click="toogleModal()"
            v-wave
          />
        </Flex>
      </Card>
    </Flex>
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
function createRipple(event) {
  const button = event.currentTarget

  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`
  circle.classList.add('ripple')

  const ripple = button.getElementsByClassName('ripple')[0]

  if (ripple) {
    ripple.remove()
  }

  button.appendChild(circle)
}

const buttons = document.getElementsByTagName('button')
for (const button of buttons as any) {
  button.addEventListener('click', createRipple)
}
</script>

<style scoped>
span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
