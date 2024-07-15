<script setup lang="ts">
import type { FooterLink } from "#ui-pro/types"

const { footer } = useAppConfig()

const links: FooterLink[] = [
  {
    label: '旧版文档',
    click: () => open('https://malagu.cellbang.com/', '_blank'),
    target: '_blank'
  }
]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
