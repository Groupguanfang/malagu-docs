<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
import SupportFramework from "@/assets/support_framework.webp"
import QrCode from "@/assets/qrcode.webp"
import Malagu from "@/assets/malagu.svg"

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>
          {{ page.hero.headline.label }}
          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>
      <template #title>
        <MDC :value="page.hero.title" />
      </template>
      <img :src="Malagu" alt="Malagu" class="w-1/2 mx-auto" />
      <!-- <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" /> -->
    </ULandingHero>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
      <div class="flex gap-20 flex-col">
        <div class="flex gap-5 flex-col">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">支持 15+ 框架</h1>
          <p>目前 Malagu 生态包含了 Malagu Cli 和 Malagu Framework，其中，Malagu Cli 已支持如下框架和工具，可以享受 Malagu 带来的开发和部署的便利。</p>
          <img :src="SupportFramework" alt="支持的框架" />
        </div>
        <div class="flex gap-5 flex-col">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">开源项目与社区发展</h1>
          <p>截至 2024 年 1 月，Malagu 经历了五年的打磨和真实项目实践，陆续发布了 321 个版本。目前 Malagu 核心部分已经稳定，拥有 10 位左右的核心共建成员。在微信小程序、钉钉小程序、uni-app、门户网站、内容管理平台、云文档平台等场景都有真实项目成功落地。我们自己每天都在用 Malagu 开发真实业务项目。</p>
          <p>在社区发展过程中，被越来越多的开发者和云厂商的认可，陆续有 29 位开发者加入到我们的社区共建团队。</p>
          <UPageGrid class="xl:grid-cols-2 2xl:grid-cols-4 gap-5">
            <ULandingCard title="被阿里云开发者平台集成为多个场景解决方案" />
            <ULandingCard title="受邀参加 2020 云原生微服务直播分享" />
            <ULandingCard title="被阿里云函数计算的 Serverless Devs 工具集成" />
            <ULandingCard title="受邀参加第三届腾讯运维技术开发日直播分享" />
            <ULandingCard title="和腾讯云函数首个合作的第三方开发框架" />
            <ULandingCard title="参与 2022 【开源摘星计划】" />
            <ULandingCard title="2023 年成为 Gitee GVP 项目" />
            <ULandingCard title="2024 年文档重新整理" />
          </UPageGrid>
        </div>
        <div class="flex gap-5 flex-col">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">贡献者</h1>
          <img src="https://contrib.rocks/image?repo=cellbang/malagu" alt="贡献者" />
        </div>
        <div class="flex gap-5 flex-col">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">加入我们</h1>
          <p>Malagu 是 MIT 许可的开源项目。需要优秀人士的支持使它不断发展。如果您想加入我们，请联系我们的邮箱kevin@cellbang.com。</p>
          <img style="width: 450px" :src="QrCode" alt="联系我们" />
        </div>
      </div>
    </ULandingSection>
  </div>
</template>
