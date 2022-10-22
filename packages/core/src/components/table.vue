<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-4 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b bg-gray-50">
                <tr class="text-left">
                  <th
                    scope="col"
                    class="px-6 py-4 text-[14px] font-normal text-[#667085]"
                  >
                    <input
                      type="checkbox"
                      checked="checked"
                      class="checkbox-primary checkbox"
                    />
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-[14px] font-normal text-[#667085]"
                  >
                    Program name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-[14px] font-normal text-[#667085]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-[14px] font-normal text-[#667085]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-[14px] font-normal text-[#667085]"
                  >
                    Topics
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-[14px] font-normal text-[#667085]"
                  >
                    Lessons
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-[14px] font-normal text-[#667085]"
                  >
                    Cost
                  </th>
                  <th
                    scope="col"
                    class="no-white-space px-6 py-4 text-[14px] font-normal text-[#667085]"
                  >
                    Program Credit
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-4 text-[14px] font-normal text-[#667085]"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b bg-white" v-for="i in 4" :key="i">
                  <td
                    class="whitespace-nowrap px-6 py-[20px] align-middle text-sm font-medium text-gray-900"
                  >
                    <input
                      type="checkbox"
                      checked="checked"
                      class="checkbox-primary checkbox"
                    />
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-[20px] align-middle text-sm font-medium text-gray-900"
                  >
                    <div>Uturn Academy Program</div>
                    <div class="font-[400] text-[#667085]">
                      edgy, local, interactive, yet professional content
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-[20px] text-sm font-light text-gray-900"
                  >
                    <Badge text="Active" />
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-[20px] text-sm font-light text-gray-900"
                  >
                    Jan 6, 2022
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-[20px] text-sm font-light text-gray-900"
                  >
                    70
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-[20px] text-sm font-light text-gray-900"
                  >
                    120
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-[20px] text-sm font-light text-gray-900"
                  >
                    15,000 SAR
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-[20px] text-sm font-light text-gray-900"
                  >
                    2,000 pt
                  </td>
                  <td
                    class="flex items-center gap-x-[28px] whitespace-nowrap px-6 py-[35px] align-middle text-sm font-light text-gray-900"
                  >
                    <div>
                      <Icon icon="ci:trash-full" width="18px" />
                    </div>
                    <div>
                      <Icon icon="akar-icons:pencil" width="18px" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  components: {
    Icon,
  },
  props: {},
  data() {
    return {}
  },
  head: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>
