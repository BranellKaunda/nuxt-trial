<script setup lang="ts">
const route = useRoute();
//const id = defineModel("id");
const name = defineModel("name");
const logo = defineModel("logo");
const location = defineModel("location");

const editTeam = async () => {
  await $fetch(`http://localhost:8000/api/teams/${route.params.id}`, {
    method: "PATCH",
    body: {
      name: name.value,
      logo: logo.value,
      location: location.value,
    },
  });
};
</script>

<template>
  <input type="text" v-model="name" placeholder="team name" />
  <input type="text" v-model="logo" placeholder="logo" />
  <input type="text" v-model="location" placeholder="location" />
  <button @click="editTeam">done</button>
</template>
