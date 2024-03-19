<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import VPFeature from './VPFeature.vue'

export interface Feature {
  icon?: DefaultTheme.FeatureIcon
  title: string
  details: string
  link?: string
  linkText?: string
  rel?: string
  target?: string
  full?: boolean
  wide?: boolean
  half?: boolean
}

const props = defineProps<{
  features: Feature[]
}>()

const grid = computed(() => {
  const length = props.features.length

  if (!length) {
    return
  }
  
  if (length === 2) {
    return 'grid-2'
  }
  
  if (length === 3) {
    return 'grid-3'
  }
  
  if (length % 3 === 0 || length > 8) {
    return 'grid-6'
  }
  
  if (length > 3) {
    return 'grid-4'
  }
})
</script>

<template>
  <div v-if="features" class="VPFeatures">
    <div class="container">
      <div class="items">
        <div
          v-for="feature in features"
          :key="feature.title"
          :class="['item', grid, {
            'grid-1': feature.full,
            'grid-1.5': feature.wide,
            'grid-2': feature.half,
          }]"
        >
          <VPFeature
            :icon="feature.icon"
            :title="feature.title"
            :details="feature.details"
            :link="feature.link"
            :link-text="feature.linkText"
            :rel="feature.rel"
            :target="feature.target"
            :wide="feature.wide"
            :half="feature.half"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }

  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-1\.5 {
    width: calc(100% / 1.5);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}

.item.grid-1 {
  width: 100%;
}
</style>