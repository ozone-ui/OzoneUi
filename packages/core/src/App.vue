<template>
  <Layout>
    <!-- Menu -->
    <Flex
      w="1218"
      class="mx-auto mt-[16px]"
      a="center"
      j="space-between"
      mb="42"
    >
      <Flex x="28" h="40" a="center">
        <Icon icon="qewam:logo" width="24.62px" height="28.12px" />
        <Flex v-for="(item, index) in menuList" :key="index">
          <Txt :text="item.name" fontWeight="normal" size="16px" />
        </Flex>
      </Flex>
      <Flex x="28" h="40" a="center" width="18px">
        <Icon icon="bytesize:settings" width="18px" />
        <Icon icon="mingcute:notification-line" />
        <Avatar />
      </Flex>
    </Flex>
    <!-- table -->
    <Table />
    <Card dir="rtl" class="mx-auto mt-[100px] w-[815px]" border>
      <Flex col a="start" j="start" y="20">
        <Card title="الأزرار" border w="100%">
          <Flex col y="20" a="start">
            <Btn
              text="حجز جلسة"
              bg="#F4DB3A"
              color="#000"
              startIcon="line-md:uploading-loop"
              endIcon="qewam:user"
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
  </Layout>
</template>

<script lang="ts" setup>
// import { Btn } from './components/btn/'
// import { Card } from './components/card/'
import { Icon } from '@iconify/vue'
import { ref } from '@vue/reactivity'
import Table from './components/table.vue'

components: {
  Table
}
const menuList = [
  {
    id: 1,
    name: 'Dashboard',
  },
  {
    id: 2,
    name: 'Programs',
  },
  {
    id: 3,
    name: 'Directory',
  },
  {
    id: 4,
    name: 'Resources',
  },
  {
    id: 5,
    name: 'Applications',
  },
  {
    id: 6,
    name: 'E-Wallet',
  },
  {
    id: 7,
    name: '+Invite',
  },
]
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
