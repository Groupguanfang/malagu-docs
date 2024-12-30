<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import Cell from "@/assets/malagu.svg"

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()
</script>

<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        <div class="flex justify-center items-center gap-2">
          <img class="max-h-7" :src="Cell" alt="malagu logo" />
          <span>Cell</span>
         <UBadge label="Alpha" variant="subtle" />
        </div>
      </template>
    </template>

    <template v-if="header?.search" #center>
      <UContentSearchButton label="搜索..." class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton v-if="header?.search" :label="null" class="lg:hidden" />
      <UColorModeButton v-if="header?.colorMode" />
      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
