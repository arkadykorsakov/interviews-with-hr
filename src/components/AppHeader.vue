<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import { useUserStore } from '@/stores/user'
import { type ComputedRef, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()

interface IMenuItem {
  label: string
  icon: string
  path: string
  show: ComputedRef<boolean>
}
const items = ref<IMenuItem[]>([
  {
    label: 'Авторизация',
    icon: 'pi pi-user',
    path: '/auth',
    show: computed((): boolean => !userStore.userId)
  },
  {
    label: 'Добавить',
    icon: 'pi pi-plus',
    path: '/',
    show: computed((): boolean => !!userStore.userId)
  },
  {
    label: 'Список собеседований',
    icon: 'pi pi-list',
    path: '/list',
    show: computed((): boolean => !!userStore.userId)
  },
  {
    label: 'Статистика',
    icon: 'pi pi-chart-pie',
    path: '/statistic',
    show: computed((): boolean => !!userStore.userId)
  }
])
const signOutMethod = async () => {
  await signOut(getAuth())
  router.push('/auth')
}
</script>

<template>
  <app-menubar :model="items" class="menu">
    <template #item="{ item, props }">
      <template v-if="item.show">
        <router-link :to="item.path" class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" class="p-menuitem-icon p-p-menuitem-icon"></span>
          <span class="ml-2">
            {{ item.label }}
          </span>
        </router-link>
      </template>
    </template>
    <template #end>
      <span
        class="flex align-items-center menu-exit"
        @click="signOutMethod"
        v-if="userStore.userId"
      >
        <span class="pi pi-sign-out"></span>
        <span class="ml-2"> Выход </span>
      </span>
    </template>
  </app-menubar>
</template>

<style scoped>
.menu {
  margin: 30px 0;
}
.menu-exit {
  cursor: pointer;
}
</style>
