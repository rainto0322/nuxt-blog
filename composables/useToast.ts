import { ref, nextTick } from 'vue'
import { useState } from '#imports'

export interface Toast extends Omit<any, 'defaultOpen'> {
  id: string | number
  click?: (toast: Toast) => void
}

export function useToast() {
  const toasts = useState<Toast[]>('toasts', () => [])
  const maxToasts = 5
  const running = ref(false)
  const queue: Toast[] = []

  const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

  async function processQueue(id: string | number) {
    if (running.value || queue.length === 0) {
      return
    }

    running.value = true
    while (queue.length > 0) {
      const toast = queue.shift()!
      await nextTick()

      toasts.value = [...toasts.value, toast].slice(-maxToasts)
    }
    setTimeout(() => { remove(id) }, 2000);
    running.value = false
  }

  async function add(toast: Partial<Toast>, status?: 'info' | 'warn' | 'error', icon?: string): Promise<Toast> {
    const body = {
      id: generateId(),
      open: true,
      status,
      icon: icon ?? '/img/success.svg',
      ...toast
    }

    queue.push(body)
    await processQueue(body.id)
    return body
  }

  function warn(toast: Partial<Toast>) {
    add({
      id: generateId(),
      open: true,
      status: 'warn',
      icon: '/img/warn.svg',
      ...toast
    })
  }

  function error(toast: Partial<Toast>) {
    add({
      id: generateId(),
      open: true,
      status: 'error',
      icon: '/img/error.svg',
      ...toast
    })
  }


  function remove(id: string | number) {
    const index = toasts.value.findIndex((t: Toast) => t.id === id)
    if (index !== -1) {
      toasts.value[index] = {
        ...toasts.value[index] as Toast,
        open: false
      }
    }

    setTimeout(() => {
      toasts.value = toasts.value.filter((t: Toast) => t.id !== id)
    }, 200)
  }

  function clear() {
    toasts.value = []
  }

  return {
    toasts,
    add,
    warn,
    error,
    remove,
    clear
  }
}