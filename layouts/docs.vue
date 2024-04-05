<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";
import type { NavigationTree } from "@nuxt/ui-pro/types";

const route = useRoute();
const navigation = inject<Ref<NavItem[]>>("navigation");
const tree: ComputedRef<NavigationTree[]> = computed(() => {
  if (route.path.startsWith("/guides")) return mapContentNavigation(navigation.value[0].children);
  if (route.path.startsWith("/components")) return mapContentNavigation(navigation.value[1].children);
  if (route.path.startsWith("/concepts")) return mapContentNavigation(navigation.value[2].children);
  if (route.path.startsWith("/dev")) return mapContentNavigation(navigation.value[3].children);
  if (route.path.startsWith("/cloud")) return mapContentNavigation(navigation.value[4].children);
  if (route.path.startsWith("/extends")) return mapContentNavigation(navigation.value[5].children);
  return [];
});
const links = computed(() => mapContentNavigation(navigation.value).filter((item) => item.label !== "贡献" && item.label !== "工具库推荐"));
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside :links="links">
          <UDivider v-if="tree.length !== 0" type="dashed" class="mb-6" />
          <UNavigationTree :links="tree" />
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
