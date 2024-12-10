<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useStateStore } from '~/stores/state'

interface WorkoutForm {
  email?: string
  phone?: string
  password: string
}

const state = useStateStore()

const formValidationSchema = yup.object().shape({
  email: yup.string().required('Это обязательное поле *').email('Почта должна быть в формате: example@domain.com'),
  phone: yup.string().required('Это обязательное поле *').length(18, 'Телефон должен содержать 11 цифр!'),
  text: yup.string().required('Это обязательное поле *').min(4, 'Текст должно содержать минимум 4 буквы'),
  password: yup.string().required('Это обязательное поле *').min(4, 'Пароль должно содержать минимум 4 буквы'),
})

const { values, meta } = useForm<WorkoutForm>({ validationSchema: formValidationSchema })
const isEnabled = computed(() => {
  return (values.email && values.password) || (values.phone && values.password)
})

const isEmail = ref<boolean>(true)

const emailFormInputs = [
  {
    id: 1,
    name: 'email',
    text: 'E-почта',
    type: 'email',
    autocompleteName: 'email',
  },
  {
    id: 2,
    name: 'password',
    text: 'Пароль *',
    type: 'password',
    autocompleteName: 'current-password',
  },
]

const phoneFormInputs = [
  {
    id: 3,
    name: 'phone',
    text: 'Телефон',
    type: 'tel',
    autocompleteName: 'tel',
  },
  {
    id: 2,
    name: 'password',
    text: 'Пароль *',
    type: 'password',
    autocompleteName: 'current-password',
  },
]

const formData = computed(() => {
  return isEmail.value ? emailFormInputs : phoneFormInputs
})

function submitForm() {
  if (isEmail.value)
    state.auth(values.email, values.password, 'Email')
  else
    state.auth(values.phone, values.password, 'Phone')
}
</script>

<template>
  <div class="absolute inset-0 h-screen bg-grey px-5 py-7 text-white sm:absolute sm:left-1/2 sm:top-1/2 sm:mx-auto sm:h-auto sm:w-[400px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl">
    <form class="py-2.5" autocomplete="on" @submit.prevent="submitForm()">
      <h1 class="text-center text-[24px]">
        Авторизация
      </h1>
      <div class="grid grid-cols-2 gap-5">
        <Button type="button" class="border-b border-white/30 bg-transparent text-grey-light" :class="{ '!border-white text-white': isEmail }" @click="isEmail = true">
          Почта
        </Button>
        <Button type="button" class="border-b border-white/30 bg-transparent text-grey-light" :class="{ '!border-white text-white': !isEmail }" @click="isEmail = false">
          Телефон
        </Button>
      </div>
      <div class="border-b border-white py-2 text-black">
        <Input v-for="item in formData" :key="item.id" class="mt-2.5" :name="item.name" :text="item.text" :type="item.type" :autocomplete-name="item.autocompleteName" />
      </div>
      <Button class="mt-2.5 w-full rounded-xl border border-white" :disabled="!isEnabled" type="submit">
        Войти
      </Button>
      <p v-show="state.error" class="mt-1 text-center text-base text-red">
        {{ state.error }}
      </p>
    </form>
  </div>
</template>

<style scoped>

</style>
